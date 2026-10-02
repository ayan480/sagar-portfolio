/**
 * notes-data.js
 * ─────────────────────────────────────────────────────────────
 * All content for the Equity Investment Module notes page.
 *
 * HOW TO ADD A NEW TOPIC
 * ──────────────────────
 * 1. Copy an existing object from the NOTES_DATA.topics array.
 * 2. Change id, icon, title, subtitle.
 * 3. Fill in the `blocks` arrays for both `en` and `bn`.
 * 4. Save. The page re-renders automatically on next load.
 *
 * BLOCK TYPES
 * ───────────
 *  { type:"p",       text:"..." }
 *  { type:"callout", variant:"green|red|gold|blue", label:"...", text:"..." }
 *  { type:"h2",      text:"..." }
 *  { type:"h3",      text:"..." }
 *  { type:"steps",   items:[ {title:"...", text:"..."}, … ] }
 *  { type:"2col",    left:{ head:"...", items:["..."] }, right:{ head:"...", items:["..."] } }
 *  { type:"cards",   variant:"scenario|signal|sector|dcf|compare|summary",
 *                    items:[ {variant:"ideal|trap|distress|pos|neg|…", title:"...", text:"..."} ] }
 *  { type:"powers",  items:[ {emoji:"...", title:"...", text:"..."} ] }
 *  { type:"example", variant:"good|bad", title:"...", badge:"...", body:["p1","p2",...] }
 *  { type:"warning", text:"..." }
 *  { type:"table",   head:["col1",...], rows:[ ["cell",...], … ] }
 *  { type:"qa",      question:"...", answer:"..." }
 *  { type:"formula", text:"..." }
 * ─────────────────────────────────────────────────────────────
 */

const NOTES_DATA = {

  meta: {
    title:    "Financial Terminology",
    subtitle: "Comprehensive reading notes covering Cash Flow, Free Cash Flow, Working Capital, and DCF Valuation.",
    badge:    "Equity Investment Module · Student Notes",
    source:   "Terminology sourced from Investopedia · Curated by Sagar Chowdhury"
  },

  topics: [

    /* ══════════════════════════════════════════════════════════
       1. CASH FLOW
    ══════════════════════════════════════════════════════════ */
    {
      id: "cashflow",
      icon: "💧",
      title: { en: "Cash Flow", bn: "ক্যাশ ফ্লো" },
      subtitle: { en: "Movement of money in and out of a business", bn: "ব্যবসায়ে টাকার আসা-যাওয়ার গতিবিধি" },
      blocks: {
        en: [
          { type:"p", text:"Cash flow is the movement of money in and out of a business over a specific period. It tracks the physical cash flowing into the company's bank account (receipts) versus the cash flowing out (payments)." },
          { type:"callout", variant:"green", label:"✅ Positive Cash Flow",
            text:"More cash is coming in than going out. Your bank balance is growing, leaving you with cash to pay bills, invest in growth, or save for emergencies." },
          { type:"callout", variant:"red", label:"❌ Negative Cash Flow",
            text:"More cash is going out than coming in. Your bank balance is shrinking. Even a highly profitable company can fail if it suffers from severe negative cash flow and runs out of money to pay immediate bills." },
          { type:"h2", text:"Net Cash Flow" },
          { type:"p", text:"Net cash flow is the final amount of money a business either gains or loses over a specific period after balancing all cash coming in against all cash going out. In simplest terms, it is your total cash inflows minus your total cash outflows. It tells you exactly how much your company's actual bank account balance changed during the month, quarter, or year." },
          { type:"callout", variant:"green", label:"📈 Positive Net Cash Flow (Above ₹0)",
            text:"Your bank balance increased. You generated more cash than you spent. This extra cash can be saved, used to pay down debts, or reinvested back into the business." },
          { type:"callout", variant:"red", label:"📉 Negative Net Cash Flow (Below ₹0)",
            text:"Your bank balance decreased. You spent more cash than you brought in. While this is normal occasionally (like when buying expensive equipment), prolonged negative net cash flow means the business is running out of money." }
        ],
        bn: [
          { type:"p", text:"ক্যাশ ফ্লো (Cash flow) বা নগদ প্রবাহ হলো একটি নির্দিষ্ট সময়ে ব্যবসায়ে টাকার আসা-যাওয়ার গতিবিধি বা প্রক্রিয়া। এটি কোম্পানির ব্যাংক অ্যাকাউন্টে আসা বাস্তব নগদ অর্থ (প্রাপ্তি) এবং অ্যাকাউন্ট থেকে চলে যাওয়া নগদ অর্থ (পরিশোধ)-এর হিসাব ট্র্যাক বা পর্যবেক্ষণ করে।" },
          { type:"callout", variant:"green", label:"✅ পজিটিভ ক্যাশ ফ্লো (Positive Cash Flow)",
            text:"খরচের চেয়ে ব্যবসায় বেশি নগদ অর্থ আসছে। আপনার ব্যাংক ব্যালেন্স বাড়ছে, যার ফলে বিল পরিশোধ করা, ব্যবসার বৃদ্ধিতে বিনিয়োগ করা বা জরুরি তহবিলের জন্য টাকা সঞ্চয় করার মতো পর্যাপ্ত নগদ অর্থ আপনার কাছে থাকছে।" },
          { type:"callout", variant:"red", label:"❌ নেগেটিভ ক্যাশ ফ্লো (Negative Cash Flow)",
            text:"আসার চেয়ে ব্যবসা থেকে বেশি নগদ অর্থ বেরিয়ে যাচ্ছে। আপনার ব্যাংক ব্যালেন্স দিন দিন কমছে। একটি অত্যন্ত লাভজনক কোম্পানিও দেউলিয়া হয়ে যেতে পারে, যদি তারা তীব্র নেগেটিভ ক্যাশ ফ্লোর মুখোমুখি হয় এবং তাৎক্ষণিক বিল মেটানোর মতো প্রয়োজনীয় অর্থ ফুরিয়ে ফেলে।" },
          { type:"h2", text:"নেট ক্যাশ ফ্লো (Net Cash Flow)" },
          { type:"p", text:"সমস্ত নগদ প্রাপ্তি ও পরিশোধের সমন্বয়ের পর একটি নির্দিষ্ট সময়ে ব্যবসা যে পরিমাণ অর্থ লাভ বা ক্ষতি করে, সেটিই হলো নেট ক্যাশ ফ্লো। সহজ কথায়, এটি আপনার মোট নগদ অন্তর্মুখী প্রবাহ (Inflow) থেকে মোট নগদ বহির্মুখী প্রবাহ (Outflow)-এর বিয়োগফল।" },
          { type:"callout", variant:"green", label:"📈 পজিটিভ নেট ক্যাশ ফ্লো (₹০-এর উপরে)",
            text:"আপনার ব্যাংক ব্যালেন্স বৃদ্ধি পেয়েছে। আপনি খরচের চেয়ে বেশি নগদ অর্থ তৈরি করেছেন। এই অতিরিক্ত নগদ টাকা সঞ্চয়, ঋণ পরিশোধ বা ব্যবসায় পুনরায় বিনিয়োগ করা যেতে পারে।" },
          { type:"callout", variant:"red", label:"📉 নেগেটিভ নেট ক্যাশ ফ্লো (₹০-এর নিচে)",
            text:"আপনার ব্যাংক ব্যালেন্স হ্রাস পেয়েছে। যদিও মাঝেমধ্যে এটি হওয়া স্বাভাবিক, তবে দীর্ঘ সময় ধরে নেগেটিভ নেট ক্যাশ ফ্লো চলার অর্থ হলো ব্যবসাটির তহবিল ফুরিয়ে আসছে।" }
        ]
      }
    },

    /* ══════════════════════════════════════════════════════════
       2. OPERATING CF
    ══════════════════════════════════════════════════════════ */
    {
      id: "operating",
      icon: "⚙️",
      title: { en: "Cash from Operating Activities", bn: "অপারেটিং অ্যাক্টিভিটিজ থেকে ক্যাশ ফ্লো" },
      subtitle: { en: "Core daily business cash generation", bn: "মূল দৈনন্দিন ব্যবসায়িক কার্যক্রম" },
      blocks: {
        en: [
          { type:"p", text:"Cash from Operating Activities tells you how much money a business generates or spends from its core, daily business operations. It answers the ultimate question: <strong>Is the business making enough cash just by doing its main job?</strong> (selling coffee, clothes, products or software)" },
          { type:"p", text:"It can be both a cash inflow OR outflow, but represents the net result of combining all operational inflows and outflows." },
          { type:"h2", text:"Components of Operating Cash Flow" },
          { type:"steps", items:[
            { title:"Starting Point — Core Earnings", text:"Operating Profit (EBIT) — Earnings Before Interest and Tax." },
            { title:"Non-Cash Adjustments (Paper-Only Expenses)", text:"Companies list certain items as 'expenses' to lower their taxes, even though no actual cash left the bank. OCF adds these back. Example: <em>Depreciation / Amortization</em>" },
            { title:"Changes in Working Capital (The Cash Traps)", text:"Tracks how changes in your daily operational balances physically added or removed cash from your bank account." },
            { title:"Other Operational Items", text:"Small, miscellaneous daily financial items like prepaid insurance or advance taxes paid to the government." }
          ]},
          { type:"h2", text:"Changes in Working Capital — Detailed" },
          { type:"callout", variant:"blue", label:"📥 Receivables (Unpaid Customer Bills) — Asset",
            text:"<strong>If it goes up:</strong> Customers owe you more money. Cash is trapped → counts as a <strong>cash outflow</strong>.<br><strong>If it goes down:</strong> Customers paid their old bills. Actual cash entered your bank → counts as a <strong>cash inflow</strong>." },
          { type:"callout", variant:"gold", label:"📦 Inventory (Unsold Stock) — Asset",
            text:"<strong>If it goes up:</strong> You spent money to buy/make more goods → <strong>cash outflow</strong>.<br><strong>If it goes down:</strong> You sold off warehouse stock without replacing it yet → <strong>cash inflow</strong>." },
          { type:"callout", variant:"green", label:"🧾 Payables (Your Unpaid Bills) — Liability",
            text:"<strong>If it goes up:</strong> You delayed paying your suppliers. Cash stays in your bank → <strong>cash inflow</strong>.<br><strong>If it goes down:</strong> You paid off your suppliers. Cash left your bank → <strong>cash outflow</strong>." }
        ],
        bn: [
          { type:"p", text:"অপারেটিং অ্যাক্টিভিটিজ থেকে ক্যাশ ফ্লো আপনাকে জানায় যে একটি ব্যবসা তার মূল এবং দৈনন্দিন ব্যবসায়িক কার্যক্রম থেকে ঠিক কতটা অর্থ উপার্জন বা খরচ করছে। এটি এই মূল প্রশ্নের উত্তর দেয়: <strong>ব্যবসাটি কি শুধুমাত্র তার মূল কাজ করেই পর্যাপ্ত নগদ অর্থ তৈরি করতে পারছে?</strong>" },
          { type:"h2", text:"অপারেটিং ক্যাশ ফ্লোর উপাদানসমূহ" },
          { type:"steps", items:[
            { title:"শুরুর ধাপ — মূল আয় (Core Earnings)", text:"অপারেটিং প্রফিট / EBIT — সুদ ও কর প্রদানের পূর্ববর্তী আয়।" },
            { title:"কাগজে-কলমে থাকা খরচ (Non-Cash Adjustments)", text:"কোম্পানিগুলো ট্যাক্স কমাতে কিছু জিনিসকে 'খরচ' হিসেবে দেখায়, যদিও আসলে কোনো নগদ টাকা যায় না। OCF হিসাবে এগুলো আবার যোগ করা হয়। উদাহরণ: <em>অবচয় / ক্রমশোধন (Depreciation / Amortization)</em>" },
            { title:"কার্যকরী মূলধনের পরিবর্তন (Changes in Working Capital)", text:"দৈনন্দিন পরিচালন ভারসাম্যের পরিবর্তনগুলো কীভাবে ব্যাংক অ্যাকাউন্টে নগদ টাকা যোগ বা বিয়োগ করছে তা ট্র্যাক করে।" },
            { title:"অন্যান্য পরিচালন খাত (Other Operational Items)", text:"দৈনন্দিন ছোটখাটো আর্থিক লেনদেন, যেমন অগ্রিম প্রদত্ত বিমা (Prepaid Insurance) বা অগ্রিম কর (Advance Taxes)।" }
          ]},
          { type:"h2", text:"কার্যকরী মূলধনের পরিবর্তন — বিস্তারিত" },
          { type:"callout", variant:"blue", label:"📥 প্রাপ্য হিসাব / রিসিভেবল (Receivables) — সম্পদ",
            text:"<strong>এটি বাড়লে:</strong> গ্রাহকদের কাছে আপনার আরও টাকা পাওনা রয়েছে। নগদ আটকে আছে → <strong>নগদ বহির্মুখী প্রবাহ (Outflow)</strong>।<br><strong>এটি কমলে:</strong> গ্রাহকরা পুরোনো বকেয়া পরিশোধ করেছেন। আসল টাকা ব্যাংকে এসেছে → <strong>নগদ অন্তর্মুখী প্রবাহ (Inflow)</strong>।" },
          { type:"callout", variant:"gold", label:"📦 ইনভেন্টরি / অবিক্রিত পণ্য (Inventory) — সম্পদ",
            text:"<strong>এটি বাড়লে:</strong> গুদামে পণ্য রাখার জন্য বা তৈরি করার জন্য টাকা খরচ হয়েছে → <strong>নগদ বহির্মুখী প্রবাহ (Outflow)</strong>।<br><strong>এটি কমলে:</strong> নতুন পণ্য না কিনেও গুদামের স্টক বিক্রি হয়েছে → <strong>নগদ অন্তর্মুখী প্রবাহ (Inflow)</strong>।" },
          { type:"callout", variant:"green", label:"🧾 প্রদেয় হিসাব / পেয়েবল (Payables) — দায়",
            text:"<strong>এটি বাড়লে:</strong> সরবরাহকারীদের টাকা দিতে দেরি করেছেন। টাকা আপনার ব্যাংকেই রয়ে গেছে → <strong>নগদ অন্তর্মুখী প্রবাহ (Inflow)</strong>।<br><strong>এটি কমলে:</strong> সরবরাহকারীদের বকেয়া পরিশোধ করেছেন। টাকা ব্যাংক থেকে বেরিয়ে গেছে → <strong>নগদ বহির্মুখী প্রবাহ (Outflow)</strong>।" }
        ]
      }
    },

    /* ══════════════════════════════════════════════════════════
       3. INVESTING CF
    ══════════════════════════════════════════════════════════ */
    {
      id: "investing",
      icon: "🏗️",
      title: { en: "Cash from Investing Activities", bn: "ইনভেস্টিং অ্যাক্টিভিটিজ থেকে ক্যাশ ফ্লো" },
      subtitle: { en: "Long-term investments and physical assets", bn: "দীর্ঘমেয়াদি বিনিয়োগ ও স্থায়ী সম্পত্তি" },
      blocks: {
        en: [
          { type:"p", text:"Cash from Investing Activities tracks money spent on or earned from long-term investments and physical assets. If Operating CF is about the money a company makes <em>today</em> from its daily work, Investing CF is about the money a company spends <em>today</em> to build its future." },
          { type:"callout", variant:"green", label:"📉 Negative Number (Outflow) — Generally GOOD",
            text:"The company is actively investing in its own future by buying new machines, technology, and factories. It is a sign of a business trying to expand." },
          { type:"callout", variant:"red", label:"📈 Positive Number (Inflow) — Needs Caution",
            text:"The company is selling off its long-term assets to get quick cash. While sometimes good (taking investment profits), doing this constantly means the business might be selling its 'tools' just to survive." },
          { type:"h2", text:"Reading Investing CF Alongside Operating CF" },
          { type:"cards", variant:"scenario", items:[
            { variant:"ideal",    title:"⭐ Ideal Scenario",    text:"<strong>+ Operations, − Investing</strong><br>Business makes massive cash from products AND uses it to buy bigger factories. Sign of a superstar company growing strongly." },
            { variant:"trap",     title:"⚠️ Trap Scenario",     text:"<strong>− Operations, − Investing</strong><br>Business is losing money on daily sales but still spending aggressively on equipment. Will quickly run out of money without massive loans." },
            { variant:"distress", title:"🚨 Distress Scenario", text:"<strong>− Operations, + Investing</strong><br>Business is failing to sell goods. To avoid bankruptcy it starts selling buildings and machinery for emergency cash. Business on life support." }
          ]}
        ],
        bn: [
          { type:"p", text:"ইনভেস্টিং অ্যাক্টিভিটিজ থেকে ক্যাশ ফ্লো হলো ক্যাশ ফ্লো স্টেটমেন্টের এমন একটি অংশ যা দীর্ঘমেয়াদি বিনিয়োগ এবং স্থায়ী সম্পত্তির পেছনে খরচ হওয়া বা তা থেকে অর্জিত অর্থ ট্র্যাক করে। অপারেটিং ক্যাশ ফ্লো যদি কোম্পানির দৈনন্দিন কাজ থেকে <em>আজকে</em> উপার্জিত অর্থ হয়, তবে ইনভেস্টিং ক্যাশ ফ্লো হলো কোম্পানি তার ভবিষ্যৎ গড়ার জন্য <em>আজকে</em> যে অর্থ খরচ করছে তার হিসাব।" },
          { type:"callout", variant:"green", label:"📉 নেগেটিভ সংখ্যা (Outflow) — সাধারণত ভালো",
            text:"কোম্পানিটি নতুন যন্ত্রপাতি, প্রযুক্তি এবং কারখানা কেনার মাধ্যমে সক্রিয়ভাবে ভবিষ্যতের জন্য বড় বিনিয়োগ করছে। এটি ব্যবসা সম্প্রসারণের ইতিবাচক লক্ষণ।" },
          { type:"callout", variant:"red", label:"📈 পজিটিভ সংখ্যা (Inflow) — সতর্কতা প্রয়োজন",
            text:"কোম্পানিটি দ্রুত নগদ পাওয়ার জন্য দীর্ঘমেয়াদি সম্পত্তি বিক্রি করে দিচ্ছে। ক্রমাগত এটি করার অর্থ হলো ব্যবসাটি স্রেফ টিকে থাকার জন্য তার মূল 'সম্পদ' বিক্রি করে দিচ্ছে।" },
          { type:"h2", text:"অপারেটিং CF-এর সাথে তুলনামূলক বিশ্লেষণ" },
          { type:"cards", variant:"scenario", items:[
            { variant:"ideal",    title:"⭐ আদর্শ পরিস্থিতি",       text:"<strong>+ অপারেটিং, − ইনভেস্টিং</strong><br>ব্যবসাটি পণ্য বিক্রি করে বিপুল নগদ আয় করে এবং সেই টাকা দিয়ে আরও বড় হওয়ার জন্য নতুন কারখানা কেনে। সুপারস্টার কোম্পানির লক্ষণ।" },
            { variant:"trap",     title:"⚠️ ফাঁদের পরিস্থিতি",      text:"<strong>− অপারেটিং, − ইনভেস্টিং</strong><br>ব্যবসাটি দৈনন্দিন বিক্রিতে লোকসান করছে কিন্তু তবুও যন্ত্রপাতি কেনায় টাকা খরচ করছে। ঋণ না নিলে খুব দ্রুত তহবিলশূন্য হবে।" },
            { variant:"distress", title:"🚨 সংকটাপন্ন পরিস্থিতি",  text:"<strong>− অপারেটিং, + ইনভেস্টিং</strong><br>ব্যবসাটি পণ্য বিক্রিতে ব্যর্থ। দেউলিয়া এড়াতে অফিস বিল্ডিং ও যন্ত্রপাতি বিক্রি শুরু করেছে। এটি লাইফ সাপোর্টে থাকা ব্যবসা।" }
          ]}
        ]
      }
    },

    /* ══════════════════════════════════════════════════════════
       4. FINANCING CF
    ══════════════════════════════════════════════════════════ */
    {
      id: "financing",
      icon: "🏦",
      title: { en: "Cash from Financing Activities", bn: "ফাইনান্সিং অ্যাক্টিভিটিজ থেকে ক্যাশ ফ্লো" },
      subtitle: { en: "Money between business and its lenders/owners", bn: "ব্যবসা ও তার অর্থদাতাদের মধ্যে আদান-প্রদান" },
      blocks: {
        en: [
          { type:"p", text:"Cash from Financing Activities tracks the money moving between a business and its sources of funding (lenders and owners). This section has nothing to do with customers, sales, or factories — it is strictly about how the business raises money to fuel itself, and how it pays back the people who provided that money." },
          { type:"2col",
            left:  { head:"📥 Inflows (Money Coming In)",  items:["Issuing Shares (Stock)", "Taking Bank Loans", "Issuing Bonds"] },
            right: { head:"📤 Outflows (Money Going Out)", items:["Paying Dividends", "Repaying Loan Principals", "Share Buybacks"] }
          },
          { type:"h2", text:"Positive vs Negative — Depends on Company Stage" },
          { type:"callout", variant:"blue", label:"🚀 Startup Phase — Positive (+) is Normal",
            text:"A young tech company (like OpenAI or a new EV startup) has massive positive financing cash flow. They need outside investor cash to survive and build because they don't make enough operational profit yet." },
          { type:"callout", variant:"green", label:"🏆 Mature Phase — Negative (−) is Normal",
            text:"An established giant (like Apple or Microsoft) has massive negative financing cash flow. They make billions from daily sales, so they don't need loans. Instead, they send billions out to pay dividends and clear debts." },
          { type:"cards", variant:"summary", items:[
            { variant:"op",  title:"⚙️ Operating CF",   text:"Always want: <strong>Positive (+)</strong>" },
            { variant:"inv", title:"🏗️ Investing CF",   text:"Generally want: <strong>Negative (−)</strong><br><small>Indicates future growth</small>" },
            { variant:"fin", title:"🏦 Financing CF",   text:"<strong>Positive (+)</strong> = Young company raising growth fuel<br><strong>Negative (−)</strong> = Mature company rewarding owners" }
          ]}
        ],
        bn: [
          { type:"p", text:"ফাইনান্সিং অ্যাক্টিভিটিজ থেকে ক্যাশ ফ্লো একটি ব্যবসা এবং তার অর্থায়নের উৎসগুলোর (ঋণদাতা ও মালিকপক্ষ) মধ্যে আদান-প্রদান হওয়া টাকা ট্র্যাক করে। এই অংশের সাথে গ্রাহক, বিক্রি বা কারখানার কোনো সম্পর্ক নেই।" },
          { type:"2col",
            left:  { head:"📥 নগদ অন্তর্মুখী প্রবাহ (আসা টাকা)", items:["শেয়ার (স্টক) ইস্যু করা", "ব্যাংক থেকে ঋণ নেওয়া", "বন্ড ইস্যু করা"] },
            right: { head:"📤 নগদ বহির্মুখী প্রবাহ (চলে যাওয়া টাকা)", items:["লভ্যাংশ (Dividend) প্রদান", "ঋণের মূল টাকা পরিশোধ", "শেয়ার বাইব্যাক"] }
          },
          { type:"h2", text:"পজিটিভ বা নেগেটিভ — কোম্পানির পর্যায়ের উপর নির্ভরশীল" },
          { type:"callout", variant:"blue", label:"🚀 স্টার্টআপ পর্যায় — পজিটিভ (+) স্বাভাবিক",
            text:"একটি নতুন প্রযুক্তি কোম্পানি (যেমন ওপেনএআই বা কোনো নতুন ইভি স্টার্টআপ)-এর ফাইনান্সিং ক্যাশ ফ্লো সাধারণত বিশাল পজিটিভ থাকে। দৈনন্দিন পরিচালন থেকে এখনো পর্যাপ্ত লাভ না হওয়ায় বাইরের বিনিয়োগকারীদের টাকার প্রয়োজন হয়।" },
          { type:"callout", variant:"green", label:"🏆 পরিপক্ব পর্যায় — নেগেটিভ (−) স্বাভাবিক",
            text:"একটি সুপ্রতিষ্ঠিত জায়ান্ট কোম্পানি (যেমন অ্যাপল বা মাইক্রোসফট)-এর সাধারণত বিশাল নেগেটিভ ফাইনান্সিং ক্যাশ ফ্লো থাকে। তারা দৈনন্দিন বিক্রি থেকেই প্রচুর আয় করে, তাই নতুন ঋণের প্রয়োজন নেই।" },
          { type:"cards", variant:"summary", items:[
            { variant:"op",  title:"⚙️ অপারেটিং CF",  text:"সবসময় চাই: <strong>পজিটিভ (+)</strong>" },
            { variant:"inv", title:"🏗️ ইনভেস্টিং CF", text:"সাধারণত চাই: <strong>নেগেটিভ (−)</strong><br><small>ভবিষ্যতের প্রবৃদ্ধির ইঙ্গিত</small>" },
            { variant:"fin", title:"🏦 ফাইনান্সিং CF", text:"<strong>পজিটিভ (+)</strong> = নতুন কোম্পানি, বৃদ্ধির জন্য তহবিল সংগ্রহ<br><strong>নেগেটিভ (−)</strong> = প্রতিষ্ঠিত কোম্পানি, ঋণ পরিশোধ/মালিকদের পুরস্কৃত করা" }
          ]}
        ]
      }
    },

    /* ══════════════════════════════════════════════════════════
       5. FREE CASH FLOW
    ══════════════════════════════════════════════════════════ */
    {
      id: "fcf",
      icon: "💰",
      title: { en: "Free Cash Flow (FCF)", bn: "ফ্রি ক্যাশ ফ্লো (FCF)" },
      subtitle: { en: "The truth serum of a company's financial health", bn: "কোম্পানির আর্থিক সুস্থতার আসল সত্য উন্মোচনকারী" },
      blocks: {
        en: [
          { type:"p", text:"Free Cash Flow (FCF) is the leftover cash a company has after paying for all of its daily business operations and upgrading its equipment. Think of it as a company's <strong>'pocket money'</strong> — the cash left over after you've paid your rent, bought your groceries, and fixed your car." },
          { type:"h2", text:"The Ultimate Difference: Profit vs. Free Cash Flow" },
          { type:"cards", variant:"compare", items:[
            { variant:"profit",    title:"📊 The Profit View (Accounting)", text:"Bakery sells a wedding cake for ₹1,00,000. Ingredients cost ₹20,000. On paper, profit = <strong>₹80,000</strong>." },
            { variant:"cashflow",  title:"💸 The Cash Flow Reality",        text:"Client pays next month. Meanwhile the oven breaks — ₹50,000 repair paid in cash immediately. FCF = <strong>−₹50,000</strong>. Can't pay staff this week!" }
          ]},
          { type:"p", text:"This is why investors look at FCF to see if a company is truly thriving — not just 'profitable' on paper." },
          { type:"h2", text:"Why is Free Cash Flow So Important?" },
          { type:"p", text:"FCF is often considered the <strong>truth serum</strong> of a company's financial health. While accounting tricks can artificially boost 'profit,' FCF cannot be easily faked because it tracks cold, hard cash." },
          { type:"powers", items:[
            { emoji:"🚀", title:"Fund New Growth",        text:"Invent new products, build new stores, or enter new markets using their own cash." },
            { emoji:"🏦", title:"Pay Off Debt",           text:"Pay down bank loans and bonds, making the company safer and less vulnerable to financial crises." },
            { emoji:"💰", title:"Reward Shareholders",    text:"Send cash back to investors through dividends or by buying back their own stock." },
            { emoji:"🏆", title:"Acquire Competitors",    text:"Buy up smaller rival companies to expand market share quickly." },
            { emoji:"🛡️", title:"Build a Safety Net",     text:"Build a cash reserve to survive unexpected economic downturns or global crises." }
          ]},
          { type:"h2", text:"Positive vs Negative FCF" },
          { type:"cards", variant:"signal", items:[
            { variant:"pos", title:"✅ Positive FCF (+FCF)", text:"The company generates more cash than it spends to stay alive. After paying all daily bills, salaries, and replacing old equipment, it still has cold, hard cash left over in its bank account." },
            { variant:"neg", title:"⚠️ Negative FCF (−FCF)", text:"The company is spending more cash than it is taking in. It must rely on its savings, take out bank loans, or sell more company shares to keep running." }
          ]},
          { type:"h2", text:"Which Condition is Best to Value a Company?" },
          { type:"callout", variant:"green", label:"✅ Positive FCF — Solid Valuation Baseline",
            text:"You have a real, measurable foundation of cash generation. DCF models are built on this solid base — making your valuation estimate reliable." },
          { type:"callout", variant:"red", label:"❌ Negative FCF — Valuation Becomes Guesswork",
            text:"You must look into a 'crystal ball' and guess when the company will flip from negative to positive. If your guess is wrong, your entire valuation is wrong." },
          { type:"callout", variant:"gold", label:"⚡ The Growth Stage Exception",
            text:"<strong>Mature companies (Apple, Walmart):</strong> Positive FCF is mandatory. Negative FCF means the business is decaying.<br><br><strong>Young growth companies (Startups):</strong> Negative FCF is normal and expected. They are intentionally burning cash today to build infrastructure that will hopefully generate massive Positive FCF 5–10 years down the road." },
          { type:"h2", text:"Good Negative FCF vs Bad Negative FCF — Indian Market Examples" },
          { type:"example", variant:"good", title:"Good Negative FCF — Zomato Limited", badge:"Growth Investment",
            body:[
              "<strong>What's happening?</strong> Zomato's food delivery business is now quite profitable and Cash from Operations is positive. Yet FCF is negative.",
              "<strong>Why it's good?</strong> Zomato is aggressively investing all its surplus into <strong>Blinkit (Quick Commerce)</strong> — building hundreds of dark stores, warehouses and cold storage infrastructure across India.",
              "<strong>Investor view:</strong> This negative FCF is not a weakness. The company is capturing a massive future market. Once this infrastructure is built, it should generate huge Positive FCF in coming years."
            ]
          },
          { type:"example", variant:"bad", title:"Risky Negative FCF — Reliance Jio (Telecom)", badge:"Capital Intensive",
            body:[
              "<strong>What's happening?</strong> Jio has massive subscriber numbers and revenue, but FCF has gone negative.",
              "<strong>Why it's risky?</strong> Jio must spend thousands of crores on 5G network rollout and new spectrum purchases (Network CapEx), plus massive interest costs on debt. The operational income is completely consumed by these technology costs.",
              "<strong>Investor view:</strong> Jio survives because Reliance Group backs it. But an ordinary mid-cap or small-cap company with years of negative FCF and no commensurate revenue return risks becoming debt-trapped — like what happened with Anil Ambani's RCom."
            ]
          },
          { type:"h2", text:"FCF by Sector" },
          { type:"cards", variant:"sector", items:[
            { variant:"pos", title:"✅ Typically Positive FCF Sectors",
              tags:["IT & Software","Pharmaceuticals","FMCG","Capital Goods"],
              text:"Once established, these businesses don't need heavy reinvestment (CapEx) to operate or grow. Surplus cash stays in the company." },
            { variant:"neg", title:"⚠️ Typically Negative FCF Sectors",
              tags:["Infrastructure & Real Estate","Power & Energy","Metals & Mining","Telecom"],
              text:"Require constant massive capital investment. Cash coming in is immediately recycled into new spending." }
          ]},
          { type:"warning", text:"<strong>Special Warning — Banking & BFSI Sector:</strong> The FCF metric does not apply to banks (SBI, HDFC) or NBFCs (Bajaj Finance). A bank's core business IS lending money — so loans cannot be treated as CapEx. For banks, look at <strong>NIM (Net Interest Margin)</strong> and <strong>NPA (Non-Performing Assets)</strong> instead." },
          { type:"h2", text:"Can FCF Exceed Net Profit? Sources Explained" },
          { type:"p", text:"Yes! A company can hold more FCF than its total annual Net Profit — called <strong>'High Earnings Quality.'</strong> Main sources:" },
          { type:"steps", items:[
            { title:"Depreciation & Amortization", text:"A paper-only expense. The company doesn't actually pay anyone this cash, so it stays in the bank even though reported profit looks lower." },
            { title:"Excellent Working Capital Management", text:"Collecting receivables faster, delaying supplier payments, or selling down inventory all release cash that isn't captured in Net Profit." },
            { title:"Advance / Deferred Revenue", text:"Customer pays upfront (e.g., software subscription). Cash enters bank immediately, but accounting rules say revenue isn't 'earned' yet." },
            { title:"Very Low Capital Expenditure (CapEx)", text:"In sectors like IT or FMCG, no large factory purchases needed. The full profit (plus depreciation) flows directly into FCF." }
          ]}
        ],
        bn: [
          { type:"qa", question:"Free Cash Flow বলতে কী বোঝায় — কতটা টাকা ব্যবসায় কাজে লাগিয়েছে নাকি কতটা টাকা ব্যবসায় কাজে লাগানোর ক্ষমতা রাখে?",
            answer:"Free Cash Flow (FCF) বা মুক্ত নগদ প্রবাহ বলতে বোঝায় একটি কোম্পানি তার সমস্ত পরিচালন ব্যয় এবং পুঁজিগত ব্যয় (CapEx) মেটানোর পর ঠিক কতটা টাকা নিজের কাছে রাখতে পেরেছে বা <strong>ব্যবসায় কাজে লাগানোর ক্ষমতা রাখে</strong>। এটি কোম্পানির পকেটে থাকা সেই অতিরিক্ত টাকা, যা অন্য কোনো বাধ্যবাধকতা ছাড়াই নিজের ইচ্ছেমতো ব্যবহার করা যায়।" },
          { type:"qa", question:"কোন কোম্পানির FCF নেগেটিভ হলে কি সব টাকা খরচ হয়ে গেছে বা কোনো টাকা হাতে নেই?",
            answer:"না। নেগেটিভ FCF মানেই এটা নয় যে কোম্পানির সব টাকা শেষ হয়ে গেছে। নেগেটিভ FCF-এর আসল অর্থ হলো: কোম্পানি তার মূল ব্যবসা থেকে নির্দিষ্ট সময়ে যা আয় করেছে, তার চেয়ে ভবিষ্যতের উন্নতির জন্য বেশি টাকা বিনিয়োগ (Capital Expenditures) করেছে।" },
          { type:"h2", text:"আসল পার্থক্য: প্রফিট বনাম ফ্রি ক্যাশ ফ্লো" },
          { type:"cards", variant:"compare", items:[
            { variant:"profit",   title:"📊 লাভের দিক (প্রফিট ভিউ)",    text:"বেকারিটি ১,০০,০০০ টাকার একটি বিশাল ওয়েডিং কেক বিক্রি করল। উপাদানের খরচ ২০,০০০ টাকা। কাগজে-কলমে লাভ = <strong>৮০,০০০ টাকা</strong>।" },
            { variant:"cashflow", title:"💸 ক্যাশ ফ্লোর বাস্তবতা",       text:"ক্রেতা পরের মাসে পেমেন্ট করবেন। এদিকে ওভেন ভেঙে গেল — এখনই ৫০,০০০ টাকা নগদ মেরামত। FCF = <strong>−৫০,০০০ টাকা</strong>। এই সপ্তাহে কর্মচারীদের বেতন দেওয়া সম্ভব নাও হতে পারে!" }
          ]},
          { type:"h2", text:"ফ্রি ক্যাশ ফ্লো কেন এত গুরুত্বপূর্ণ?" },
          { type:"p", text:"FCF-কে প্রায়শই একটি কোম্পানির আর্থিক সুস্থতার <strong>'আসল সত্য উন্মোচনকারী'</strong> হিসেবে বিবেচনা করা হয়। অ্যাকাউন্টিংয়ের নানা কৌশলে 'প্রফিট' বাড়িয়ে দেখানো সম্ভব হলেও, FCF-কে সহজে জালিয়াতি করা যায় না।" },
          { type:"powers", items:[
            { emoji:"🚀", title:"নতুন প্রবৃদ্ধিতে অর্থায়ন",  text:"নিজেদের নগদ দিয়ে নতুন পণ্য উদ্ভাবন বা নতুন বাজারে প্রবেশ।" },
            { emoji:"🏦", title:"ঋণ পরিশোধ",               text:"ব্যাংক লোন ও বন্ডের টাকা পরিশোধ করে কোম্পানিকে আর্থিক সংকটের ঝুঁকি থেকে মুক্ত রাখা।" },
            { emoji:"💰", title:"শেয়ারহোল্ডারদের পুরস্কৃত করা", text:"নগদ লভ্যাংশ (Dividends) দেওয়া বা শেয়ার বাইব্যাকের মাধ্যমে বিনিয়োগকারীদের টাকা ফেরত দেওয়া।" },
            { emoji:"🏆", title:"প্রতিযোগী কেনা",           text:"বাজারের বড় অংশ দখলে ছোট প্রতিদ্বন্দ্বী কোম্পানি কিনে নেওয়া।" },
            { emoji:"🛡️", title:"সুরক্ষা তহবিল তৈরি",       text:"আকস্মিক অর্থনৈতিক মন্দায় টিকে থাকার জন্য নগদ রিজার্ভ গড়ে তোলা।" }
          ]},
          { type:"h2", text:"পজিটিভ বনাম নেগেটিভ FCF" },
          { type:"cards", variant:"signal", items:[
            { variant:"pos", title:"✅ পজিটিভ FCF (+FCF)", text:"কোম্পানিটি নিজেকে সচল রাখার জন্য যে পরিমাণ খরচ করছে তার চেয়ে বেশি নগদ আয় করছে। সমস্ত বিল, বেতন ও যন্ত্রপাতি পরিবর্তনের পরেও ব্যাংকে আসল উদ্বৃত্ত নগদ থাকছে।" },
            { variant:"neg", title:"⚠️ নেগেটিভ FCF (−FCF)", text:"কোম্পানিটি আয়ের চেয়ে বেশি নগদ খরচ করছে। ব্যবসা সচল রাখতে পূর্বের সঞ্চয়, ব্যাংক ঋণ বা নতুন শেয়ার বিক্রির উপর নির্ভর করতে হচ্ছে।" }
          ]},
          { type:"h2", text:"ভালো নেগেটিভ FCF বনাম মন্দ নেগেটিভ FCF — ভারতীয় বাজারের উদাহরণ" },
          { type:"example", variant:"good", title:"ভালো নেগেটিভ FCF — Zomato Limited", badge:"গ্রোথ ইনভেস্টমেন্ট",
            body:[
              "<strong>কী ঘটছে?</strong> Zomato-এর ফুড ডেলিভারি ব্যবসা এখন লাভজনক এবং Cash from Operations পজিটিভ। কিন্তু তা সত্ত্বেও FCF নেগেটিভ।",
              "<strong>কেন এটি ভালো?</strong> Zomato তাদের সমস্ত উদ্বৃত্ত টাকা অত্যন্ত আগ্রাসীভাবে <strong>Blinkit (কুইক কমার্স)</strong>-এর পেছনে বিনিয়োগ করছে — শত শত ডার্ক স্টোর, ওয়্যারহাউস এবং কোল্ড স্টোরেজ তৈরি করছে।",
              "<strong>বিনিয়োগকারীর দৃষ্টিভঙ্গি:</strong> এই নেগেটিভ FCF কোনো দুর্বলতা নয়। ভবিষ্যতে এই পরিকাঠামো থেকে বিশাল পজিটিভ ক্যাশ ফ্লো আসবে।"
            ]
          },
          { type:"example", variant:"bad", title:"ঝুঁকিপূর্ণ নেগেটিভ FCF — Reliance Jio (টেলিকম)", badge:"পুঁজি-নিবিড় ব্যবসা",
            body:[
              "<strong>কী ঘটছে?</strong> জিও-র গ্রাহক ও রেভিনিউ আকাশচুম্বী, কিন্তু FCF নেগেটিভ টেরিটরিতে।",
              "<strong>কেন ঝুঁকিপূর্ণ?</strong> 5G নেটওয়ার্ক রোলআউট এবং নতুন স্পেকট্রামের জন্য হাজার হাজার কোটি টাকার নেটওয়ার্ক CapEx এবং বিশাল সুদের খরচ। মূল ব্যবসা থেকে আয় এই বিপুল খরচেই শেষ হয়ে যাচ্ছে।",
              "<strong>বিনিয়োগকারীর দৃষ্টিভঙ্গি:</strong> Reliance-এর মতো বড় গ্রুপ পেছনে থাকায় জিও এই চাপ সামলাচ্ছে। কিন্তু সাধারণ মিড-ক্যাপ বা স্মল-ক্যাপ কোম্পানির বেলায় এটি ঋণের জালে আটকে দিতে পারে — যেমন অতীতে অনিল আম্বানির RCom-এর ক্ষেত্রে হয়েছিল।"
            ]
          },
          { type:"h2", text:"সেক্টরভিত্তিক FCF বিশ্লেষণ" },
          { type:"cards", variant:"sector", items:[
            { variant:"pos", title:"✅ সাধারণত FCF পজিটিভ সেক্টর",
              tags:["IT & Software","ফার্মাসিউটিক্যালস","FMCG","ক্যাপিটাল গুডস"],
              text:"একবার ব্যবসা দাঁড়িয়ে গেলে ভারী CapEx লাগে না। প্রচুর উদ্বৃত্ত ক্যাশ থাকে।" },
            { variant:"neg", title:"⚠️ সাধারণত FCF নেগেটিভ সেক্টর",
              tags:["ইনফ্রাস্ট্রাকচার ও রিয়েল এস্টেট","পাওয়ার ও এনার্জি","মেটালস ও মাইনিং","টেলিকম"],
              text:"প্রতিনিয়ত হাজার হাজার কোটি টাকা পরিকাঠামোয় ঢালতে হয়।" }
          ]},
          { type:"warning", text:"<strong>বিশেষ সতর্কবার্তা — ব্যাংকিং ও BFSI সেক্টর:</strong> ব্যাংক (SBI, HDFC) এবং NBFC (Bajaj Finance)-এর ক্ষেত্রে FCF ম্যাট্রিক কাজ করে না। ব্যাংকের মূল ব্যবসাই হলো টাকা ধার দেওয়া। তাই এখানে FCF-এর বদলে <strong>NIM (Net Interest Margin)</strong> এবং <strong>NPA (Non-Performing Assets)</strong> দেখতে হয়।" }
        ]
      }
    },

    /* ══════════════════════════════════════════════════════════
       6. WORKING CAPITAL
    ══════════════════════════════════════════════════════════ */
    {
      id: "workingcapital",
      icon: "🔄",
      title: { en: "Working Capital", bn: "ওয়ার্কিং ক্যাপিটাল" },
      subtitle: { en: "Daily operational cash management", bn: "দৈনন্দিন পরিচালন নগদ ব্যবস্থাপনা" },
      blocks: {
        en: [
          { type:"p", text:"Working capital is the money a business has left over to run its daily operations after paying all its short-term bills." },
          { type:"formula", text:"Working Capital = Current Assets − Current Liabilities" },
          { type:"callout", variant:"blue", label:"📐 Two Main Components",
            text:"<strong>Current Assets:</strong> Cash and things that can quickly turn into cash within a year (receivables, inventory).<br><strong>Current Liabilities:</strong> Bills and short-term debts you must pay within a year (supplier dues, utility bills, taxes)." },
          { type:"h2", text:"Change in Working Capital" },
          { type:"p", text:"In accounting, changes in working capital have a <strong>counter-intuitive impact</strong> on cash flow. They act like a sponge that either sucks up cash or releases it." },
          { type:"cards", variant:"signal", items:[
            { variant:"neg", title:"📦 Positive Change in WC (Cash Tied Up)",
              text:"Working capital increased. This <strong>reduces</strong> actual cash flow.<br><br>Usually means: company bought more inventory (cash spent), or let customers buy more on credit (money owed but not in bank yet).<br><br><em>Analogy: You stocked up your warehouse — more assets, but less cash in your wallet.</em>" },
            { variant:"pos", title:"🔓 Negative Change in WC (Cash Released)",
              text:"Working capital decreased. This <strong>increases</strong> actual cash flow.<br><br>Usually means: company sold off inventory for cash, collected from customers who owed, or delayed paying suppliers.<br><br><em>Analogy: You cleared your warehouse and collected old debts — your wallet is full of cash.</em>" }
          ]},
          { type:"h2", text:"The Complete Working Capital & Cash Flow Cheat Sheet" },
          { type:"table",
            head:["Asset / Liability Shift", "Operational Meaning", "Impact on WC", "Cash Flow Impact"],
            rows:[
              ["⬆️ <strong>Accounts Receivable</strong> Increases", "Customers bought on credit; didn't pay cash yet.", "<span class='badge-pos'>➕ Positive (Increases WC)</span>", "<span class='badge-neg'>➖ Negative (Cash tied up)</span>"],
              ["⬇️ <strong>Accounts Receivable</strong> Decreases", "Customers paid off their old debts in cash.", "<span class='badge-neg'>➖ Negative (Decreases WC)</span>", "<span class='badge-pos'>➕ Positive (Cash enters bank)</span>"],
              ["⬆️ <strong>Inventory</strong> Increases", "The company spent cash to buy more stock.", "<span class='badge-pos'>➕ Positive (Increases WC)</span>", "<span class='badge-neg'>➖ Negative (Cash tied up)</span>"],
              ["⬇️ <strong>Inventory</strong> Decreases", "The company sold stock and turned it into cash.", "<span class='badge-neg'>➖ Negative (Decreases WC)</span>", "<span class='badge-pos'>➕ Positive (Cash enters bank)</span>"],
              ["⬆️ <strong>Accounts Payable</strong> Increases", "The company delayed paying its suppliers.", "<span class='badge-neg'>➖ Negative (Decreases WC)</span>", "<span class='badge-pos'>➕ Positive (Cash is preserved)</span>"],
              ["⬇️ <strong>Accounts Payable</strong> Decreases", "The company used cash to pay off its suppliers.", "<span class='badge-pos'>➕ Positive (Increases WC)</span>", "<span class='badge-neg'>➖ Negative (Cash leaves bank)</span>"]
            ]
          }
        ],
        bn: [
          { type:"p", text:"ওয়ার্কিং ক্যাপিটাল বা কার্যকরী মূলধন হলো সমস্ত স্বল্পমেয়াদি বিল পরিশোধ করার পর একটি ব্যবসার তার দৈনন্দিন কার্যক্রম পরিচালনা করার জন্য অবশিষ্ট থাকা অর্থ।" },
          { type:"formula", text:"Working Capital = চলতি সম্পত্তি − চলতি দায়" },
          { type:"callout", variant:"blue", label:"📐 দুটি প্রধান উপাদান",
            text:"<strong>চলতি সম্পত্তি (Current Assets):</strong> নগদ টাকা এবং এক বছরের মধ্যে দ্রুত নগদে রূপান্তরযোগ্য জিনিস (প্রাপ্য বিল, গুদামের পণ্য)।<br><strong>চলতি দায় (Current Liabilities):</strong> বিল ও স্বল্পমেয়াদি ঋণ যা এক বছরের মধ্যে পরিশোধ করতে হবে।" },
          { type:"h2", text:"ওয়ার্কিং ক্যাপিটালের পরিবর্তন (Change in Working Capital)" },
          { type:"p", text:"অ্যাকাউন্টিংয়ে এই পরিমাপটি ক্যাশ ফ্লোর ওপর একটি <strong>বিপরীতমুখী বা উল্টো প্রভাব</strong> ফেলে। FCF হিসাব করার সময়, ওয়ার্কিং ক্যাপিটালের পরিবর্তনগুলো একটি স্পঞ্জের মতো কাজ করে।" },
          { type:"cards", variant:"signal", items:[
            { variant:"neg", title:"📦 পজিটিভ পরিবর্তন (নগদ আটকে যায়)",
              text:"ওয়ার্কিং ক্যাপিটাল বৃদ্ধি পেয়েছে। এটি আসল ক্যাশ ফ্লো <strong>কমিয়ে দেয়</strong>।<br><br>কারণ: কোম্পানি আরও বেশি পণ্য কিনেছে, বা গ্রাহকদের বাকিতে কেনার সুযোগ দিয়েছে।<br><br><em>তুলনা: গুদামে পণ্য মজুত করতে টাকা গেছে — সম্পত্তি বাড়লেও পকেট থেকে নগদ কমেছে।</em>" },
            { variant:"pos", title:"🔓 নেগেটিভ পরিবর্তন (নগদ মুক্ত হয়)",
              text:"ওয়ার্কিং ক্যাপিটাল হ্রাস পেয়েছে। এটি আসল ক্যাশ ফ্লো <strong>বাড়িয়ে দেয়</strong>।<br><br>কারণ: কোম্পানি গুদামের পণ্য বিক্রি করেছে, বকেয়া আদায় করেছে, বা সরবরাহকারীদের দেরিতে পেমেন্ট করেছে।<br><br><em>তুলনা: গুদাম খালি করে পুরোনো ঋণ আদায় করেছেন — পকেট আসল নগদে ভরে গেছে।</em>" }
          ]},
          { type:"h2", text:"সম্পূর্ণ ওয়ার্কিং ক্যাপিটাল ও ক্যাশ ফ্লো চিট শিট" },
          { type:"table",
            head:["সম্পদ / দায়ের পরিবর্তন", "পরিচালনগত অর্থ", "WC-তে প্রভাব", "ক্যাশ ফ্লোতে প্রভাব"],
            rows:[
              ["⬆️ <strong>প্রাপ্য হিসাব</strong> বাড়লে", "গ্রাহকরা বাকিতে কিনেছেন, নগদ দেননি।", "<span class='badge-pos'>➕ পজিটিভ (WC বাড়ে)</span>", "<span class='badge-neg'>➖ নেগেটিভ (নগদ আটকায়)</span>"],
              ["⬇️ <strong>প্রাপ্য হিসাব</strong> কমলে", "গ্রাহকরা পুরোনো বকেয়া পরিশোধ করেছেন।", "<span class='badge-neg'>➖ নেগেটিভ (WC কমে)</span>", "<span class='badge-pos'>➕ পজিটিভ (নগদ আসে)</span>"],
              ["⬆️ <strong>ইনভেন্টরি</strong> বাড়লে", "কোম্পানি বেশি স্টক কিনতে টাকা খরচ করেছে।", "<span class='badge-pos'>➕ পজিটিভ (WC বাড়ে)</span>", "<span class='badge-neg'>➖ নেগেটিভ (নগদ আটকায়)</span>"],
              ["⬇️ <strong>ইনভেন্টরি</strong> কমলে", "কোম্পানি স্টক বিক্রি করে নগদে রূপান্তর করেছে।", "<span class='badge-neg'>➖ নেগেটিভ (WC কমে)</span>", "<span class='badge-pos'>➕ পজিটিভ (নগদ আসে)</span>"],
              ["⬆️ <strong>প্রদেয় হিসাব</strong> বাড়লে", "কোম্পানি সরবরাহকারীদের পেমেন্ট দেরি করেছে।", "<span class='badge-neg'>➖ নেগেটিভ (WC কমে)</span>", "<span class='badge-pos'>➕ পজিটিভ (নগদ সংরক্ষিত)</span>"],
              ["⬇️ <strong>প্রদেয় হিসাব</strong> কমলে", "কোম্পানি সরবরাহকারীদের বকেয়া পরিশোধ করেছে।", "<span class='badge-pos'>➕ পজিটিভ (WC বাড়ে)</span>", "<span class='badge-neg'>➖ নেগেটিভ (নগদ যায়)</span>"]
            ]
          }
        ]
      }
    },

    /* ══════════════════════════════════════════════════════════
       7. DCF
    ══════════════════════════════════════════════════════════ */
    {
      id: "dcf",
      icon: "📊",
      title: { en: "DCF — Discounted Cash Flow Method", bn: "DCF — ডিসকাউন্টেড ক্যাশ ফ্লো মেথড" },
      subtitle: { en: "Terminal Value methodologies", bn: "টার্মিনাল ভ্যালু পদ্ধতিসমূহ" },
      blocks: {
        en: [
          { type:"p", text:"In Discounted Cash Flow (DCF) analysis, you must choose between two distinct methodologies to calculate the <strong>Terminal Value (TV)</strong> — the estimated value of a business beyond the explicit 5-to-10-year forecast horizon. Both serve the exact same purpose but approach the math from different angles." },
          { type:"cards", variant:"dcf", items:[
            { variant:"perpetuity", title:"♾️ Method 1: Perpetuity Growth Method",
              text:"<strong>Also called:</strong> Terminal Growth Rate Method<br><br><strong>Core Assumption:</strong> The business will operate indefinitely, growing its cash flows at a stable, permanent rate forever.<br><br><strong>Input Used:</strong> A percentage rate, typically <strong>2.0% to 3.5%</strong>, anchored to long-term GDP growth and inflation.<br><br><strong>Best For:</strong> Stable, mature businesses with predictable long-term cash flows." },
            { variant:"exit", title:"🔢 Method 2: Exit Multiple Method",
              text:"<strong>Also called:</strong> Terminal Multiple Method<br><br><strong>Core Assumption:</strong> The business is sold at the end of the forecast period based on prevailing market multiples for similar companies.<br><br><strong>Input Used:</strong> A valuation multiple, e.g., <strong>8x to 12x EV/EBITDA</strong> or EV/EBIT, derived from comparable public companies or recent acquisitions.<br><br><strong>Best For:</strong> Growth companies where market-based comparisons are more meaningful." }
          ]},
          { type:"callout", variant:"gold", label:"💡 Key Takeaway",
            text:"Both methods estimate the same thing — Terminal Value. The choice depends on what you believe is the most accurate representation of a company's future: a steady forever-growing stream of cash (Perpetuity), or a sale price based on what similar companies trade at in the market (Exit Multiple)." }
        ],
        bn: [
          { type:"p", text:"ডিসকাউন্টেড ক্যাশ ফ্লো (DCF) অ্যানালাইসিসে, <strong>টার্মিনাল ভ্যালু (Terminal Value)</strong> হিসাব করার জন্য দুটি আলাদা পদ্ধতির মধ্যে একটি বেছে নিতে হয়। টার্মিনাল ভ্যালু হলো সুনির্দিষ্ট ৫-১০ বছরের পূর্বানুমান মেয়াদের পরের ব্যবসার আনুমানিক মূল্য।" },
          { type:"cards", variant:"dcf", items:[
            { variant:"perpetuity", title:"♾️ পদ্ধতি ১: পার্পেচুইটি গ্রোথ মেথড",
              text:"<strong>অন্য নাম:</strong> টার্মিনাল গ্রোথ রেট মেথড<br><br><strong>মূল অনুমান:</strong> ব্যবসাটি অনির্দিষ্টকাল ধরে চলবে এবং একটি স্থিতিশীল, স্থায়ী হারে ক্যাশ ফ্লো বাড়াবে।<br><br><strong>ব্যবহৃত ইনপুট:</strong> একটি শতাংশ হার, সাধারণত <strong>২.০% থেকে ৩.৫%</strong>, যা দীর্ঘমেয়াদি জিডিপি বৃদ্ধি ও মুদ্রাস্ফীতির সাথে সামঞ্জস্যপূর্ণ।<br><br><strong>সবচেয়ে উপযুক্ত:</strong> স্থিতিশীল ও পরিপক্ব ব্যবসার জন্য।" },
            { variant:"exit", title:"🔢 পদ্ধতি ২: এক্সিট মাল্টিপল মেথড",
              text:"<strong>অন্য নাম:</strong> টার্মিনাল মাল্টিপল মেথড<br><br><strong>মূল অনুমান:</strong> পূর্বানুমান মেয়াদের শেষে ব্যবসাটি বিক্রি হয়, সেই সময়ের বাজারে একই ধরনের কোম্পানির মাল্টিপলের ভিত্তিতে।<br><br><strong>ব্যবহৃত ইনপুট:</strong> একটি ভ্যালুয়েশন মাল্টিপল, যেমন <strong>৮x থেকে ১২x EV/EBITDA</strong> অথবা EV/EBIT।<br><br><strong>সবচেয়ে উপযুক্ত:</strong> গ্রোথ কোম্পানির জন্য যেখানে বাজারভিত্তিক তুলনা বেশি অর্থবহ।" }
          ]},
          { type:"callout", variant:"gold", label:"💡 মূল শিক্ষণীয় বিষয়",
            text:"দুটি পদ্ধতিই একই জিনিস অনুমান করে — টার্মিনাল ভ্যালু। পছন্দটি নির্ভর করে আপনি কোনটিকে কোম্পানির ভবিষ্যতের সবচেয়ে সঠিক উপস্থাপনা মনে করেন তার উপর।" }
        ]
      }
    }

  ] /* end topics */

}; /* end NOTES_DATA */
