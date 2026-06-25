/* ============================================================
   Stock Pathshala — AI Chatbot
   Sagar Chowdhury | NISM Research Analyst
   ============================================================ */

(function () {
  'use strict';

  // ── Knowledge Base ──────────────────────────────────────────
  const KB = {
    courses: [
      {
        name: 'Equity & Intraday Trading',
        emoji: '📈',
        level: 'Beginner – Intermediate',
        desc: 'Live chart analysis, trend identification, entry/exit strategies and risk management in real markets.',
        cta: 'Learn live trading with Sagar'
      },
      {
        name: 'Futures & Options (F&O)',
        emoji: '🔥',
        level: 'Intermediate – Advanced',
        desc: 'Option Greeks, straddle/strangle, iron condor and delta-neutral hedging strategies.',
        cta: 'Master F&O with real trades'
      },
      {
        name: 'Long-Term Investing',
        emoji: '🌱',
        level: 'All Levels',
        desc: 'Fundamental analysis, reading company financials, and identifying multibagger stocks.',
        cta: 'Build a long-term portfolio'
      },
      {
        name: 'NISM Certification Coaching',
        emoji: '🎓',
        level: 'Series V-A, VIII, X-A, XV',
        desc: 'Complete coaching with mock tests for NISM certification exams. 100% exam-focused.',
        cta: 'Get NISM certified'
      },
      {
        name: '1-on-1 Mentoring',
        emoji: '🧑‍💼',
        level: 'Premium / Personal',
        desc: 'Portfolio review, trade analysis and career guidance. Limited slots — book early.',
        cta: 'Book a personal session'
      },
      {
        name: 'Free Webinars & Workshops',
        emoji: '🎙️',
        level: 'Free / Live',
        desc: 'Market outlook, sector analysis and trading psychology — free for all.',
        cta: 'Join next free webinar'
      }
    ],
    faqs: [
      {
        q: ['who is sagar', 'about sagar', 'founder', 'trainer', 'teacher'],
        a: "Sagar Chowdhury is a <strong>NISM Certified Research Analyst</strong> with 8+ years of experience in Indian financial markets. He founded Stock Pathshala to make quality stock market education accessible to Bengali and Hindi speaking investors. He holds NISM certifications in Series V-A, VIII & XV."
      },
      {
        q: ['what is stock pathshala', 'about institute', 'about platform', 'what do you offer'],
        a: "Stock Pathshala (স্টক পাঠশালা) is a <strong>SEBI-compliant stock market education institute</strong> founded by Sagar Chowdhury. We offer courses on equity trading, F&O, long-term investing, and NISM coaching — all in Bengali & Hindi."
      },
      {
        q: ['nism', 'certification', 'certificate', 'series'],
        a: "We provide coaching for <strong>NISM Series V-A, VIII, X-A and XV</strong> — covering Research Analyst, Currency Derivatives, Equity Derivatives and Mutual Funds. Sagar himself holds 3 NISM certifications and guides students step by step with mock tests."
      },
      {
        q: ['fee', 'fees', 'price', 'cost', 'how much', 'charges', 'pricing'],
        a: "Course fees vary depending on the module. The best way to get exact pricing is to <strong>WhatsApp Sagar directly</strong> — he'll share the full details and any current offers. 👇"
      },
      {
        q: ['duration', 'how long', 'time', 'weeks', 'months'],
        a: "Course durations vary: short modules run 4–6 weeks, comprehensive courses run 2–3 months, and NISM coaching is exam-paced. Reach out to know the schedule that suits you best."
      },
      {
        q: ['language', 'bengali', 'hindi', 'medium'],
        a: "All classes are taught in <strong>Bengali & Hindi</strong> — making high-quality market education accessible to regional investors who don't need English as a barrier."
      },
      {
        q: ['online', 'offline', 'live', 'recorded', 'class format', 'zoom'],
        a: "Classes are offered in <strong>live online format</strong> with real-time market analysis. Sessions are practical and interactive — not just recorded videos."
      },
      {
        q: ['beginner', 'newbie', 'start', 'zero', 'no experience', 'fresher'],
        a: "Absolutely! Our <strong>Equity & Intraday</strong> and <strong>Long-Term Investing</strong> courses are perfect for beginners. Sagar starts from absolute basics and builds you up systematically. Zero prior knowledge is needed."
      },
      {
        q: ['advanced', 'expert', 'professional', 'options', 'fno', 'f&o'],
        a: "For experienced traders, the <strong>F&O course</strong> covers advanced strategies like Option Greeks, iron condor, straddle/strangle and delta-neutral hedging — all with live market examples."
      },
      {
        q: ['youtube', 'free content', 'free videos', 'channel'],
        a: "Sagar runs an active YouTube channel <strong>@sagarchowdhury-1991</strong> with free market education videos in Bengali. It's a great way to experience his teaching style before enrolling!"
      },
      {
        q: ['contact', 'reach', 'call', 'phone', 'number'],
        a: "You can reach Sagar at <strong>+91 84360 90949</strong> via call or WhatsApp. You can also connect on LinkedIn, Facebook, or Instagram."
      },
      {
        q: ['whatsapp', 'group', 'community'],
        a: "Yes! Enrolled students get access to exclusive <strong>WhatsApp study groups</strong> for doubt clearing, market updates and peer learning."
      },
      {
        q: ['demo', 'trial', 'free class', 'sample'],
        a: "You can check out Sagar's <strong>free YouTube videos</strong> for a taste of his teaching. For a free webinar, WhatsApp him to know the next scheduled session."
      },
      {
        q: ['refund', 'cancellation', 'money back'],
        a: "For refund and cancellation policies, please <strong>contact Sagar directly</strong> on WhatsApp or phone. He'll walk you through the terms clearly."
      },
      {
        q: ['result', 'success', 'testimonial', 'students', 'review'],
        a: "Stock Pathshala has trained <strong>500+ students</strong> across India. Many students have gone on to clear NISM exams, build profitable portfolios, and even start careers in financial markets."
      }
    ]
  };

  // ── Conversation flows ──────────────────────────────────────
  const FLOWS = {
    greeting: {
      msg: "👋 <strong>Namaste! Welcome to Stock Pathshala</strong> 🇮🇳<br><br>I'm your assistant here to help you learn about our stock market courses, get answers to your questions, and connect you with Sagar Chowdhury.<br><br>What would you like to explore today?",
      options: [
        { label: '📚 View Courses', flow: 'courses' },
        { label: '🤔 Ask a Question', flow: 'faq_prompt' },
        { label: '📞 Talk to Sagar', flow: 'contact' },
        { label: '🎓 NISM Coaching', flow: 'nism' },
        { label: '🆓 Free Resources', flow: 'free' }
      ]
    },
    courses: {
      msg: "Here are all the courses offered at Stock Pathshala 👇\n\nWhich one interests you?",
      options: null,
      special: 'course_list'
    },
    nism: {
      msg: "🎓 <strong>NISM Certification Coaching</strong><br><br>Sagar personally coaches students for <strong>NISM Series V-A, VIII, X-A & XV</strong> with:<br>✅ Concept clarity sessions<br>✅ Mock tests & question banks<br>✅ Doubt-clearing support<br>✅ Exam strategy guidance<br><br>Sagar holds 3 NISM certifications himself — you're learning from someone who's walked the same path.",
      options: [
        { label: '📲 Enroll for NISM', flow: 'enroll' },
        { label: '💬 Ask about NISM', flow: 'faq_prompt' },
        { label: '🏠 Main Menu', flow: 'greeting' }
      ]
    },
    free: {
      msg: "🆓 <strong>Free Resources from Stock Pathshala</strong><br><br>📺 <strong>YouTube Channel</strong> — Regular market education videos in Bengali & Hindi<br>🎙️ <strong>Free Webinars</strong> — Periodic live sessions on market outlook & trading psychology<br>💬 <strong>WhatsApp Community</strong> — Market tips and updates<br><br>Follow <strong>@sagarchowdhury-1991</strong> on YouTube to start learning for free!",
      options: [
        { label: '▶️ Go to YouTube', url: 'https://www.youtube.com/@sagarchowdhury-1991' },
        { label: '📲 Join WhatsApp Group', url: 'https://wa.me/918436090949?text=Hi%20Sagar%2C%20I%20want%20to%20join%20the%20free%20WhatsApp%20group' },
        { label: '🏠 Main Menu', flow: 'greeting' }
      ]
    },
    contact: {
      msg: "📞 <strong>Connect with Sagar Chowdhury</strong><br><br>The fastest way to reach Sagar is via <strong>WhatsApp</strong> — he personally responds to all queries about courses, fees, and enrollment.<br><br>📱 <strong>+91 84360 90949</strong>",
      options: [
        { label: '💬 WhatsApp Now', url: 'https://wa.me/918436090949?text=Hi%20Sagar%2C%20I%20have%20a%20query%20about%20Stock%20Pathshala' },
        { label: '📞 Call Sagar', url: 'tel:+918436090949' },
        { label: '💼 LinkedIn', url: 'https://www.linkedin.com/in/sagar-chowdhury-507744264/' },
        { label: '🏠 Main Menu', flow: 'greeting' }
      ]
    },
    enroll: {
      msg: "🚀 <strong>Ready to start your journey?</strong><br><br>To enroll in any course, simply WhatsApp Sagar and mention:<br>1️⃣ Which course you're interested in<br>2️⃣ Your current level (beginner/intermediate/advanced)<br>3️⃣ Preferred language (Bengali / Hindi)<br><br>Sagar will share the schedule, fees and next batch details personally!",
      options: [
        { label: '💬 Enroll via WhatsApp', url: 'https://wa.me/918436090949?text=Hi%20Sagar%2C%20I%20want%20to%20enroll%20in%20a%20Stock%20Pathshala%20course' },
        { label: '📞 Call to Enroll', url: 'tel:+918436090949' },
        { label: '📚 View Courses Again', flow: 'courses' },
        { label: '🏠 Main Menu', flow: 'greeting' }
      ]
    },
    faq_prompt: {
      msg: "💬 <strong>Ask me anything!</strong><br><br>Type your question below, or pick a common topic:",
      options: [
        { label: '💰 Course Fees', flow: 'fees' },
        { label: '⏱ Course Duration', flow: 'duration' },
        { label: '🌐 Online / Offline?', flow: 'format' },
        { label: '🆕 Am I a Beginner?', flow: 'beginner' },
        { label: '🏠 Main Menu', flow: 'greeting' }
      ]
    },
    fees: {
      msg: "💰 <strong>Course Fees</strong><br><br>Fees vary by course module and batch. Sagar keeps pricing fair and accessible for everyone.<br><br>For the <strong>latest pricing and any current offers</strong>, WhatsApp Sagar directly — he responds fast!",
      options: [
        { label: '💬 Ask Sagar about Fees', url: 'https://wa.me/918436090949?text=Hi%20Sagar%2C%20can%20you%20share%20the%20course%20fees%20and%20details?' },
        { label: '📚 View Courses', flow: 'courses' },
        { label: '🏠 Main Menu', flow: 'greeting' }
      ]
    },
    duration: {
      msg: "⏱ <strong>Course Duration</strong><br><br>📌 Short modules: <strong>4–6 weeks</strong><br>📌 Comprehensive courses: <strong>2–3 months</strong><br>📌 NISM coaching: <strong>Exam-paced</strong><br>📌 1-on-1 Mentoring: <strong>Flexible schedule</strong><br><br>Classes are typically held on weekday evenings and weekends for working professionals.",
      options: [
        { label: '📲 Enroll Now', flow: 'enroll' },
        { label: '🏠 Main Menu', flow: 'greeting' }
      ]
    },
    format: {
      msg: "🖥️ <strong>Class Format</strong><br><br>All classes are <strong>live online sessions</strong> — interactive and practical:<br><br>✅ Real-time market analysis<br>✅ Live chart reading<br>✅ Q&A in every session<br>✅ WhatsApp group for doubts<br>✅ Taught in Bengali & Hindi",
      options: [
        { label: '📲 Enroll Now', flow: 'enroll' },
        { label: '🏠 Main Menu', flow: 'greeting' }
      ]
    },
    beginner: {
      msg: "🌱 <strong>Perfect for Beginners!</strong><br><br>You don't need any prior knowledge. Sagar starts from absolute basics:<br><br>✅ What is a stock market?<br>✅ How to open a demat account<br>✅ Reading candlestick charts<br>✅ Risk management fundamentals<br>✅ Building your first portfolio<br><br>Join the <strong>Equity & Intraday</strong> or <strong>Long-Term Investing</strong> course to start.",
      options: [
        { label: '📲 Start Learning', flow: 'enroll' },
        { label: '🆓 Free Videos First', url: 'https://www.youtube.com/@sagarchowdhury-1991' },
        { label: '🏠 Main Menu', flow: 'greeting' }
      ]
    }
  };

  // ── NLP Matcher ────────────────────────────────────────────
  function matchFAQ(input) {
    const text = input.toLowerCase();
    for (const faq of KB.faqs) {
      if (faq.q.some(kw => text.includes(kw))) return faq.a;
    }
    // flow keywords
    if (/course|class|learn|program|module|enroll|join/.test(text)) return null; // handled by flow
    if (/fee|price|cost|charge|how much/.test(text)) return FLOWS.fees.msg;
    if (/duration|how long|time|week|month/.test(text)) return FLOWS.duration.msg;
    if (/beginner|start|zero|newbie|fresher|basic/.test(text)) return FLOWS.beginner.msg;
    if (/online|offline|format|zoom|live/.test(text)) return FLOWS.format.msg;
    if (/contact|call|phone|reach|whatsapp/.test(text)) return FLOWS.contact.msg;
    if (/nism|certification|certificate|series/.test(text)) return FLOWS.nism.msg;
    if (/youtube|free|video|watch/.test(text)) return FLOWS.free.msg;
    return null;
  }

  function matchFlow(input) {
    const text = input.toLowerCase();
    if (/course|class|learn|program|module/.test(text)) return 'courses';
    if (/enroll|join|register|sign up|admission/.test(text)) return 'enroll';
    if (/nism|certif/.test(text)) return 'nism';
    if (/free|youtube|video|webinar/.test(text)) return 'free';
    if (/contact|call|phone|reach|whatsapp|talk/.test(text)) return 'contact';
    if (/fee|price|cost/.test(text)) return 'fees';
    if (/duration|how long/.test(text)) return 'duration';
    if (/beginner|start|zero|newbie/.test(text)) return 'beginner';
    if (/online|offline|format/.test(text)) return 'format';
    if (/hello|hi|hey|namaste|start|help/.test(text)) return 'greeting';
    return null;
  }

  // ── Render helpers ─────────────────────────────────────────
  function courseCard(course) {
    return `<div class="sp-chat-course-card" data-enroll="${course.name}">
      <span class="sp-course-emoji">${course.emoji}</span>
      <div class="sp-course-info">
        <strong>${course.name}</strong>
        <span class="sp-course-level">${course.level}</span>
        <p>${course.desc}</p>
        <button class="sp-course-cta">${course.cta} →</button>
      </div>
    </div>`;
  }

  function optionBtn(opt) {
    if (opt.url) {
      return `<a href="${opt.url}" target="_blank" class="sp-opt-btn sp-opt-link">${opt.label}</a>`;
    }
    return `<button class="sp-opt-btn" data-flow="${opt.flow}">${opt.label}</button>`;
  }

  // ── DOM Factory ────────────────────────────────────────────
  function createBubble(html, type) {
    const wrap = document.createElement('div');
    wrap.className = `sp-msg sp-msg-${type}`;
    const bubble = document.createElement('div');
    bubble.className = 'sp-bubble';
    bubble.innerHTML = html;
    wrap.appendChild(bubble);
    return wrap;
  }

  function createOptions(opts) {
    const row = document.createElement('div');
    row.className = 'sp-options';
    opts.forEach(o => { row.innerHTML += optionBtn(o); });
    return row;
  }

  // ── Chat State ─────────────────────────────────────────────
  let isOpen = false;
  let hasGreeted = false;
  let body, input, sendBtn, badge;

  function scrollBottom() {
    if (body) body.scrollTop = body.scrollHeight;
  }

  function typing(ms) {
    return new Promise(resolve => {
      const t = document.createElement('div');
      t.className = 'sp-msg sp-msg-bot sp-typing-wrap';
      t.innerHTML = '<div class="sp-bubble sp-typing"><span></span><span></span><span></span></div>';
      body.appendChild(t);
      scrollBottom();
      setTimeout(() => { t.remove(); resolve(); }, ms);
    });
  }

  async function botReply(html, opts) {
    await typing(650);
    const bubble = createBubble(html, 'bot');
    body.appendChild(bubble);
    if (opts && opts.length) {
      const optRow = createOptions(opts);
      body.appendChild(optRow);
    }
    scrollBottom();
    bindOptionClicks();
  }

  function userMsg(text) {
    const bubble = createBubble(text, 'user');
    body.appendChild(bubble);
    scrollBottom();
  }

  function bindOptionClicks() {
    body.querySelectorAll('.sp-opt-btn[data-flow]:not(.bound)').forEach(btn => {
      btn.classList.add('bound');
      btn.addEventListener('click', () => {
        userMsg(btn.textContent);
        handleFlow(btn.dataset.flow);
      });
    });
    body.querySelectorAll('.sp-course-cta:not(.bound)').forEach(btn => {
      btn.classList.add('bound');
      btn.addEventListener('click', () => {
        const name = btn.closest('[data-enroll]').dataset.enroll;
        userMsg(`Tell me more about ${name}`);
        showCourseDetail(name);
      });
    });
  }

  async function showCourseDetail(name) {
    const course = KB.courses.find(c => c.name === name);
    if (!course) { handleFlow('enroll'); return; }
    await botReply(
      `${course.emoji} <strong>${course.name}</strong><br><em>${course.level}</em><br><br>${course.desc}<br><br>Ready to join? Connect with Sagar to get the schedule and fee details!`,
      [
        { label: '💬 Enroll via WhatsApp', url: `https://wa.me/918436090949?text=Hi%20Sagar%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(course.name)}%20course` },
        { label: '📚 See All Courses', flow: 'courses' },
        { label: '🏠 Main Menu', flow: 'greeting' }
      ]
    );
  }

  async function handleFlow(flowKey) {
    const flow = FLOWS[flowKey];
    if (!flow) return;
    if (flow.special === 'course_list') {
      await typing(650);
      const wrap = document.createElement('div');
      wrap.className = 'sp-msg sp-msg-bot';
      const bubble = document.createElement('div');
      bubble.className = 'sp-bubble';
      bubble.innerHTML = "Here are our <strong>6 courses</strong> at Stock Pathshala — click any to learn more 👇";
      wrap.appendChild(bubble);
      body.appendChild(wrap);

      await typing(400);
      const cards = document.createElement('div');
      cards.className = 'sp-course-list';
      KB.courses.forEach(c => { cards.innerHTML += courseCard(c); });
      body.appendChild(cards);

      await typing(300);
      const optRow = createOptions([
        { label: '📲 Enroll Now', flow: 'enroll' },
        { label: '🏠 Main Menu', flow: 'greeting' }
      ]);
      body.appendChild(optRow);
      scrollBottom();
      bindOptionClicks();
      return;
    }
    await botReply(flow.msg, flow.options || []);
  }

  async function handleInput(text) {
    if (!text.trim()) return;
    userMsg(text);
    if (input) input.value = '';

    const faq = matchFAQ(text);
    const flowKey = matchFlow(text);

    if (faq) {
      await botReply(faq, [
        { label: '📚 View Courses', flow: 'courses' },
        { label: '📲 Enroll Now', flow: 'enroll' },
        { label: '🏠 Main Menu', flow: 'greeting' }
      ]);
    } else if (flowKey) {
      await handleFlow(flowKey);
    } else {
      await botReply(
        "I didn't quite catch that 😊 Let me connect you with the right info — pick an option or type your query differently!",
        [
          { label: '📚 View Courses', flow: 'courses' },
          { label: '💬 Ask a Question', flow: 'faq_prompt' },
          { label: '📞 Talk to Sagar', flow: 'contact' },
          { label: '🏠 Main Menu', flow: 'greeting' }
        ]
      );
    }
  }

  // ── Build UI ────────────────────────────────────────────────
  function buildWidget() {
    const style = document.createElement('style');
    style.textContent = `
      #sp-chat-fab{position:fixed;bottom:24px;right:24px;z-index:9999;
        width:60px;height:60px;border-radius:50%;
        background:linear-gradient(135deg,#059669,#047857);
        box-shadow:0 4px 20px rgba(5,150,105,0.45);
        border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;
        transition:transform .25s,box-shadow .25s;}
      #sp-chat-fab:hover{transform:scale(1.1);box-shadow:0 6px 28px rgba(5,150,105,0.55);}
      #sp-chat-fab svg{width:28px;height:28px;fill:#fff;}
      #sp-chat-badge{position:absolute;top:-3px;right:-3px;width:18px;height:18px;
        background:#dc2626;border-radius:50%;border:2px solid #fff;
        font-size:10px;font-weight:800;color:#fff;display:flex;align-items:center;
        justify-content:center;animation:sp-pulse 1.5s infinite;}
      @keyframes sp-pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.2)}}
      #sp-chat-widget{position:fixed;bottom:96px;right:24px;z-index:9999;
        width:360px;max-width:calc(100vw - 32px);
        background:#fff;border-radius:20px;
        box-shadow:0 12px 48px rgba(0,0,0,0.18);
        display:flex;flex-direction:column;overflow:hidden;
        transform:scale(0.9) translateY(20px);opacity:0;
        transition:transform .3s cubic-bezier(.34,1.56,.64,1),opacity .3s ease;
        pointer-events:none;max-height:560px;}
      #sp-chat-widget.open{transform:scale(1) translateY(0);opacity:1;pointer-events:all;}
      #sp-chat-header{background:linear-gradient(135deg,#059669,#047857);
        padding:16px 18px;display:flex;align-items:center;gap:12px;flex-shrink:0;}
      .sp-header-avatar{width:40px;height:40px;border-radius:50%;
        border:2px solid rgba(255,255,255,0.5);object-fit:cover;flex-shrink:0;background:#047857;}
      .sp-header-info{flex:1;}
      .sp-header-name{font-weight:800;color:#fff;font-size:15px;line-height:1.2;}
      .sp-header-status{font-size:11px;color:rgba(255,255,255,0.8);display:flex;align-items:center;gap:5px;}
      .sp-status-dot{width:7px;height:7px;background:#4ade80;border-radius:50%;
        animation:sp-pulse 2s infinite;}
      #sp-chat-close{background:rgba(255,255,255,0.2);border:none;color:#fff;
        width:30px;height:30px;border-radius:50%;cursor:pointer;font-size:16px;
        display:flex;align-items:center;justify-content:center;flex-shrink:0;
        transition:background .2s;}
      #sp-chat-close:hover{background:rgba(255,255,255,0.35);}
      #sp-chat-body{flex:1;overflow-y:auto;padding:16px 14px;
        display:flex;flex-direction:column;gap:10px;background:#f8fafc;
        scrollbar-width:thin;scrollbar-color:rgba(5,150,105,0.3) transparent;}
      #sp-chat-body::-webkit-scrollbar{width:4px;}
      #sp-chat-body::-webkit-scrollbar-thumb{background:rgba(5,150,105,0.3);border-radius:2px;}
      .sp-msg{display:flex;max-width:100%;}
      .sp-msg-bot{justify-content:flex-start;}
      .sp-msg-user{justify-content:flex-end;}
      .sp-bubble{padding:11px 14px;border-radius:14px;font-size:13.5px;
        line-height:1.65;max-width:84%;word-break:break-word;}
      .sp-msg-bot .sp-bubble{background:#fff;color:#0d1b2e;
        border:1px solid rgba(5,150,105,0.15);border-radius:4px 14px 14px 14px;
        box-shadow:0 1px 6px rgba(0,0,0,0.06);}
      .sp-msg-user .sp-bubble{background:linear-gradient(135deg,#059669,#047857);
        color:#fff;border-radius:14px 14px 4px 14px;}
      .sp-typing{display:flex;align-items:center;gap:5px;padding:12px 16px;}
      .sp-typing span{width:7px;height:7px;background:#059669;border-radius:50%;
        animation:sp-bounce .9s infinite;}
      .sp-typing span:nth-child(2){animation-delay:.15s;}
      .sp-typing span:nth-child(3){animation-delay:.3s;}
      @keyframes sp-bounce{0%,60%,100%{transform:translateY(0)}30%{transform:translateY(-6px)}}
      .sp-options{display:flex;flex-wrap:wrap;gap:7px;padding:0 14px 4px;justify-content:flex-start;}
      .sp-opt-btn{padding:7px 13px;border-radius:20px;border:1.5px solid #059669;
        background:#fff;color:#059669;font-size:12px;font-weight:700;cursor:pointer;
        transition:all .2s;text-decoration:none;display:inline-block;white-space:nowrap;}
      .sp-opt-btn:hover{background:#059669;color:#fff;}
      .sp-course-list{display:flex;flex-direction:column;gap:8px;padding:0 14px;}
      .sp-chat-course-card{display:flex;gap:10px;align-items:flex-start;
        background:#fff;border:1px solid rgba(5,150,105,0.15);border-radius:12px;
        padding:12px;cursor:pointer;transition:all .2s;}
      .sp-chat-course-card:hover{border-color:#059669;box-shadow:0 2px 12px rgba(5,150,105,0.12);}
      .sp-course-emoji{font-size:24px;flex-shrink:0;margin-top:2px;}
      .sp-course-info{flex:1;}
      .sp-course-info strong{font-size:13px;color:#0d1b2e;display:block;margin-bottom:2px;}
      .sp-course-level{font-size:11px;color:#059669;font-weight:700;display:block;margin-bottom:4px;}
      .sp-course-info p{font-size:12px;color:#3a5068;line-height:1.5;margin:0 0 8px 0;}
      .sp-course-cta{background:linear-gradient(135deg,#059669,#047857);color:#fff;
        border:none;border-radius:20px;padding:5px 12px;font-size:11px;font-weight:700;
        cursor:pointer;transition:opacity .2s;}
      .sp-course-cta:hover{opacity:.85;}
      #sp-chat-input-row{display:flex;gap:8px;padding:10px 12px;
        border-top:1px solid rgba(5,150,105,0.12);background:#fff;flex-shrink:0;}
      #sp-chat-input{flex:1;border:1.5px solid rgba(5,150,105,0.25);border-radius:20px;
        padding:9px 14px;font-size:13px;outline:none;font-family:inherit;
        transition:border-color .2s;color:#0d1b2e;background:#fff;}
      #sp-chat-input:focus{border-color:#059669;}
      #sp-chat-input::placeholder{color:#7a95b0;}
      #sp-chat-send{width:38px;height:38px;border-radius:50%;
        background:linear-gradient(135deg,#059669,#047857);border:none;
        cursor:pointer;display:flex;align-items:center;justify-content:center;
        flex-shrink:0;transition:opacity .2s;}
      #sp-chat-send:hover{opacity:.85;}
      #sp-chat-send svg{width:16px;height:16px;fill:#fff;}
      .sp-promo-strip{background:linear-gradient(135deg,rgba(5,150,105,0.08),rgba(5,150,105,0.04));
        border-top:1px solid rgba(5,150,105,0.12);padding:8px 14px;
        font-size:11px;color:#059669;font-weight:700;text-align:center;flex-shrink:0;}
      @media(max-width:420px){
        #sp-chat-widget{width:calc(100vw - 16px);right:8px;bottom:80px;max-height:500px;}
        #sp-chat-fab{bottom:16px;right:16px;}
      }
    `;
    document.head.appendChild(style);

    // FAB
    const fab = document.createElement('button');
    fab.id = 'sp-chat-fab';
    fab.setAttribute('aria-label', 'Open Stock Pathshala chat');
    fab.innerHTML = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
    </svg>`;
    badge = document.createElement('div');
    badge.id = 'sp-chat-badge';
    badge.textContent = '1';
    fab.appendChild(badge);
    document.body.appendChild(fab);

    // Widget
    const widget = document.createElement('div');
    widget.id = 'sp-chat-widget';
    widget.setAttribute('role', 'dialog');
    widget.setAttribute('aria-label', 'Stock Pathshala Chat Assistant');
    widget.innerHTML = `
      <div id="sp-chat-header">
        <img class="sp-header-avatar" src="assets/stock-pathshala-logo.png"
          alt="Stock Pathshala" onerror="this.src='';this.style.background='#047857'">
        <div class="sp-header-info">
          <div class="sp-header-name">Stock Pathshala</div>
          <div class="sp-header-status">
            <span class="sp-status-dot"></span> Online · Typically replies instantly
          </div>
        </div>
        <button id="sp-chat-close" aria-label="Close chat">✕</button>
      </div>
      <div id="sp-chat-body"></div>
      <div class="sp-promo-strip">🎓 500+ Students Trained · NISM Certified · Bengali & Hindi Medium</div>
      <div id="sp-chat-input-row">
        <input id="sp-chat-input" type="text" placeholder="Type your question…" autocomplete="off" />
        <button id="sp-chat-send" aria-label="Send message">
          <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
        </button>
      </div>
    `;
    document.body.appendChild(widget);

    body = widget.querySelector('#sp-chat-body');
    input = widget.querySelector('#sp-chat-input');
    sendBtn = widget.querySelector('#sp-chat-send');

    // Events
    fab.addEventListener('click', toggleChat);
    widget.querySelector('#sp-chat-close').addEventListener('click', toggleChat);
    sendBtn.addEventListener('click', () => handleInput(input.value));
    input.addEventListener('keydown', e => { if (e.key === 'Enter') handleInput(input.value); });

    // Auto-open greeting after 3s on first visit
    setTimeout(() => {
      if (!isOpen && !hasGreeted) {
        badge.style.display = 'flex';
      }
    }, 3000);
  }

  function toggleChat() {
    const widget = document.getElementById('sp-chat-widget');
    isOpen = !isOpen;
    widget.classList.toggle('open', isOpen);
    if (isOpen) {
      badge.style.display = 'none';
      if (!hasGreeted) {
        hasGreeted = true;
        handleFlow('greeting');
      }
      setTimeout(() => { if (input) input.focus(); }, 350);
    }
  }

  // ── Init ───────────────────────────────────────────────────
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildWidget);
  } else {
    buildWidget();
  }

})();
