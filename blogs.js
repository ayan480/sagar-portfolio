(function () {
  const firebaseConfig = {
    apiKey: 'AIzaSyDNGfbZUmOYn70iwKZtAHC8SYCtzWsOMQ4',
    authDomain: 'zoom-app-70066.firebaseapp.com',
    databaseURL: 'https://zoom-app-70066-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'zoom-app-70066',
    storageBucket: 'zoom-app-70066.firebasestorage.app',
    messagingSenderId: '513316622391',
    appId: '1:513316622391:web:33bfc1ef7aa0cffb76efb2',
    measurementId: 'G-FW3YVQFDXE'
  };

  if (!window.firebase) {
    console.warn('Firebase SDK not loaded yet.');
    return;
  }

  const app = firebase.apps.length ? firebase.apps[0] : firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth(app);
  const database = firebase.database(app);
  const blogsRef = database.ref('blogs');

  const ADMIN_EMAIL = 'admin@admin.com';
  const ADMIN_PASSWORD = 'admin1';

  function showFlash(message, type) {
    const target = document.getElementById('adminFlash');
    if (!target) return;
    target.className = 'flash ' + (type || 'info');
    target.textContent = message;
  }

  function resetBlogForm() {
    const form = document.getElementById('blogForm');
    if (!form) return;
    form.reset();
    document.getElementById('editingBlogId').value = '';
    const submitButton = document.querySelector('#blogForm button[type="submit"]');
    if (submitButton) {
      submitButton.textContent = 'Publish Blog';
    }
  }

  function parseImageFile(file) {
    return new Promise((resolve, reject) => {
      if (!file) {
        resolve('');
        return;
      }
      const reader = new FileReader();
      reader.onload = function () {
        resolve(reader.result || '');
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  async function handleBlogSubmit(event) {
    event.preventDefault();
    const form = document.getElementById('blogForm');
    if (!form) return;

    const titleInput = document.getElementById('blogTitle');
    const captionInput = document.getElementById('blogCaption');
    const imageInput = document.getElementById('blogImage');
    const editingIdInput = document.getElementById('editingBlogId');

    const title = (titleInput?.value || '').trim();
    const caption = (captionInput?.value || '').trim();
    const imageFile = imageInput?.files?.[0];

    if (!caption) {
      showFlash('Please add a caption before publishing.', 'error');
      return;
    }

    const submitButton = form.querySelector('button[type="submit"]');
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = 'Saving...';
    }

    try {
      const imageData = await parseImageFile(imageFile);
      const blogData = {
        title: title || 'Untitled Blog',
        caption,
        imageData,
        createdAt: Date.now()
      };

      const editingId = editingIdInput?.value;
      if (editingId) {
        await blogsRef.child(editingId).update(blogData);
        showFlash('Blog updated successfully.', 'success');
      } else {
        const newBlogRef = blogsRef.push();
        await newBlogRef.set({
          ...blogData,
          id: newBlogRef.key
        });
        showFlash('Blog published successfully.', 'success');
      }

      resetBlogForm();
    } catch (error) {
      console.error(error);
      showFlash('Could not save the blog right now. Please try again.', 'error');
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = editingIdInput?.value ? 'Update Blog' : 'Publish Blog';
      }
    }
  }

  async function deleteBlog(id) {
    if (!id) return;
    if (!window.confirm('Delete this blog?')) return;

    try {
      await blogsRef.child(id).remove();
      showFlash('Blog deleted.', 'success');
    } catch (error) {
      console.error(error);
      showFlash('Unable to delete the blog.', 'error');
    }
  }

  function renderBlogCards(entries, container) {
    const section = document.getElementById('blogs');
    const lightbox = document.getElementById('blogLightbox');
    const lightboxImage = document.getElementById('blogLightboxImage');
    const closeButton = document.getElementById('blogLightboxClose');
    if (!container) return;
    if (!entries.length) {
      if (section) section.style.display = 'none';
      container.innerHTML = '';
      return;
    }

    if (section) section.style.display = 'block';

    const visibleEntries = entries.slice(0, 3);
    const viewAllBtn = document.getElementById('viewAllBlogsBtn');
    if (viewAllBtn) {
      viewAllBtn.style.display = entries.length > 3 ? 'inline-flex' : 'none';
    }

    container.innerHTML = visibleEntries.map((entry) => {
      const blog = entry[1];
      const imageMarkup = blog.imageData ? `<img src="${blog.imageData}" alt="${blog.title}" class="blog-image">` : '<div class="blog-image fallback">Featured image</div>';
      const titleMarkup = blog.title ? `<h3>${blog.title}</h3>` : '';
      const dateMarkup = blog.createdAt ? `<div class="blog-date">${new Date(blog.createdAt).toLocaleDateString()}</div>` : '';
      const shareText = encodeURIComponent((blog.title || 'Latest Insight') + ' - ' + (blog.caption || '').slice(0, 120));
      return `
        <article class="blog-card">
          ${imageMarkup}
          <div class="blog-card-body">
            ${titleMarkup}
            ${dateMarkup}
            <p>${(blog.caption || '').replace(/\n/g, '<br>')}</p>
            <div class="blog-card-actions">
              <button class="blog-share-btn" type="button" data-share="${shareText}"><i class="fas fa-link"></i> Copy Link</button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    container.querySelectorAll('[data-share]').forEach((button) => {
      button.addEventListener('click', async () => {
        const shareText = button.getAttribute('data-share');
        const shareUrl = `${window.location.href.split('#')[0]}?share=${shareText}`;
        try {
          await navigator.clipboard.writeText(shareUrl);
          button.innerHTML = '<i class="fas fa-check"></i> Copied';
          setTimeout(() => {
            button.innerHTML = '<i class="fas fa-link"></i> Copy Link';
          }, 1500);
        } catch (error) {
          console.error(error);
          button.innerHTML = '<i class="fas fa-exclamation-circle"></i> Failed';
        }
      });
    });

    if (lightbox && lightboxImage && closeButton) {
      container.querySelectorAll('.blog-image').forEach((image) => {
        image.addEventListener('click', () => {
          const src = image.getAttribute('src');
          if (!src) return;
          lightboxImage.setAttribute('src', src);
          lightbox.classList.add('active');
        });
      });

      closeButton.addEventListener('click', () => {
        lightbox.classList.remove('active');
      });

      lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox) {
          lightbox.classList.remove('active');
        }
      });
    }
  }

  function renderAllBlogs(entries, container) {
    if (!container) return;
    if (!entries.length) {
      container.innerHTML = '<div class="blog-empty">No blogs yet.</div>';
      return;
    }

    container.innerHTML = entries.map((entry) => {
      const blog = entry[1];
      const imageMarkup = blog.imageData ? `<img src="${blog.imageData}" alt="${blog.title}" class="blog-image">` : '<div class="blog-image fallback">Featured image</div>';
      const titleMarkup = blog.title ? `<h3>${blog.title}</h3>` : '';
      const dateMarkup = blog.createdAt ? `<div class="blog-date">${new Date(blog.createdAt).toLocaleDateString()}</div>` : '';
      const shareText = encodeURIComponent((blog.title || 'Latest Insight') + ' - ' + (blog.caption || '').slice(0, 120));
      return `
        <article class="blog-card">
          ${imageMarkup}
          <div class="blog-card-body">
            ${titleMarkup}
            ${dateMarkup}
            <p>${(blog.caption || '').replace(/\n/g, '<br>')}</p>
            <div class="blog-card-actions">
              <button class="blog-share-btn" type="button" data-share="${shareText}"><i class="fas fa-link"></i> Copy Link</button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    container.querySelectorAll('[data-share]').forEach((button) => {
      button.addEventListener('click', async () => {
        const shareText = button.getAttribute('data-share');
        const shareUrl = `${window.location.href.split('#')[0]}?share=${shareText}`;
        try {
          await navigator.clipboard.writeText(shareUrl);
          button.innerHTML = '<i class="fas fa-check"></i> Copied';
          setTimeout(() => {
            button.innerHTML = '<i class="fas fa-link"></i> Copy Link';
          }, 1500);
        } catch (error) {
          console.error(error);
          button.innerHTML = '<i class="fas fa-exclamation-circle"></i> Failed';
        }
      });
    });
  }

  function renderAdminList(entries) {
    const container = document.getElementById('adminBlogList');
    if (!container) return;

    if (!entries.length) {
      container.innerHTML = '<div class="blog-empty">No blogs yet.</div>';
      return;
    }

    container.innerHTML = entries.map((entry) => {
      const [id, blog] = entry;
      const imageMarkup = blog.imageData ? `<img src="${blog.imageData}" alt="${blog.title}" class="blog-image">` : '<div class="blog-image fallback">No image</div>';
      return `
        <article class="blog-card admin-card">
          ${imageMarkup}
          <div class="blog-card-body">
            <h3>${blog.title || 'Untitled Blog'}</h3>
            <div class="blog-date">${new Date(blog.createdAt || Date.now()).toLocaleDateString()}</div>
            <p>${(blog.caption || '').replace(/\n/g, '<br>')}</p>
            <div class="admin-actions">
              <button type="button" class="btn small" data-edit="${id}">Edit</button>
              <button type="button" class="btn outline-red small" data-delete="${id}">Delete</button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    container.querySelectorAll('[data-edit]').forEach((button) => {
      button.addEventListener('click', () => {
        const id = button.getAttribute('data-edit');
        const blog = entries.find((item) => item[0] === id)?.[1];
        if (!blog) return;
        document.getElementById('blogTitle').value = blog.title || '';
        document.getElementById('blogCaption').value = blog.caption || '';
        document.getElementById('editingBlogId').value = id;
        document.querySelector('#blogForm button[type="submit"]').textContent = 'Update Blog';
        document.getElementById('blogTitle').focus();
      });
    });

    container.querySelectorAll('[data-delete]').forEach((button) => {
      button.addEventListener('click', () => deleteBlog(button.getAttribute('data-delete')));
    });
  }

  async function loadBlogs() {
    const container = document.getElementById('blogList');
    const adminContainer = document.getElementById('adminBlogList');

    blogsRef.on('value', (snapshot) => {
      const data = snapshot.val() || {};
      const entries = Object.entries(data).sort((a, b) => (b[1].createdAt || 0) - (a[1].createdAt || 0));
      if (container) {
        renderBlogCards(entries, container);
      }
      if (adminContainer) {
        renderAdminList(entries);
      }
    });
  }

  function initAllBlogsPage() {
    const container = document.getElementById('allBlogList');
    if (!container) return;
    blogsRef.on('value', (snapshot) => {
      const data = snapshot.val() || {};
      const entries = Object.entries(data).sort((a, b) => (b[1].createdAt || 0) - (a[1].createdAt || 0));
      renderAllBlogs(entries, container);
    });
  }

  async function signInAdmin(email, password) {
    if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
      throw new Error('Use the teacher/admin credentials for this Firebase project.');
    }

    try {
      await auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    } catch (error) {
      console.warn('Persistence setup failed', error);
    }

    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      if (error.code === 'auth/user-not-found' || error.code === 'auth/invalid-credential') {
        throw new Error('That teacher/admin account is not available in Firebase Auth.');
      }
      throw error;
    }
  }

  function showAdminDashboard(user) {
    const loginView = document.getElementById('loginView');
    const adminView = document.getElementById('adminView');
    if (loginView) loginView.hidden = true;
    if (adminView) adminView.hidden = false;
    if (user?.email) {
      const badge = document.getElementById('adminUserBadge');
      if (badge) {
        badge.textContent = user.email;
      }
    }
  }

  function showLoginView() {
    const loginView = document.getElementById('loginView');
    const adminView = document.getElementById('adminView');
    if (loginView) loginView.hidden = false;
    if (adminView) adminView.hidden = true;
  }

  function bindAdminEvents() {
    const adminForm = document.getElementById('adminLoginForm');
    const blogForm = document.getElementById('blogForm');
    const logoutButton = document.getElementById('logoutAdmin');
    const cancelButton = document.getElementById('cancelEdit');

    if (adminForm) {
      adminForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const emailInput = document.getElementById('adminEmail');
        const passwordInput = document.getElementById('adminPassword');
        const submitButton = adminForm.querySelector('button[type="submit"]');

        if (!emailInput || !passwordInput) return;

        if (submitButton) {
          submitButton.disabled = true;
          submitButton.textContent = 'Signing in...';
        }

        try {
          await signInAdmin(emailInput.value.trim(), passwordInput.value);
          showFlash('Signed in successfully with your teacher/admin account.', 'success');
        } catch (error) {
          console.error(error);
          showFlash(error.message || 'Unable to sign in.', 'error');
        } finally {
          if (submitButton) {
            submitButton.disabled = false;
            submitButton.textContent = 'Login';
          }
        }
      });
    }

    if (blogForm) {
      blogForm.addEventListener('submit', handleBlogSubmit);
    }

    if (logoutButton) {
      logoutButton.addEventListener('click', async () => {
        await auth.signOut();
        showLoginView();
        resetBlogForm();
      });
    }

    if (cancelButton) {
      cancelButton.addEventListener('click', resetBlogForm);
    }
  }

  function initPublicPage() {
    loadBlogs();
  }

  function initAdminPage() {
    bindAdminEvents();
    loadBlogs();
    auth.onAuthStateChanged((user) => {
      if (user && user.email === ADMIN_EMAIL) {
        showAdminDashboard(user);
      } else {
        showLoginView();
      }
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('adminLoginForm')) {
      initAdminPage();
    } else {
      initPublicPage();
    }
  });
})();
