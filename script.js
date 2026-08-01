/* ==========================================================================
   FOR SANELISIWE — script.js
   Vanilla JS. No frameworks, no CDN, fully offline.
   ========================================================================== */
(() => {
'use strict';

/* ============================== CONTENT DATA ============================= */

const ANNIVERSARY = new Date(2026, 2, 26); // 26 March 2026 — the real start (per the receipts)

const PASSWORDS = ['26042026','2026-04-26','260426','26/04/2026','april26','26april','26032026','2026-03-26','260326','26/03/2026','march26','26march','sanelisiwe','ngiyakutsandza','muntfuwami'];

const TIMELINE = [
  { date:'26 March 2026', title:'"am i stealing your heart or the safe is just too strong?"', text:'Built a whole website just to ask. You read it so many times you lost count ("I don\u2019t know how many times I\u2019ve read this😝").' },
  { date:'29 March 2026', title:'"Wait so we officially started dating Thursday the 26th?"', text:'"yes yes yes." Made it loud and official, no more guessing after that.' },
  { date:'7 April 2026', title:'"i love you." / "I love you too💞"', text:'First time out loud, in text form at least.' },
  { date:'11 April 2026', title:'"you won\u2019t hear me say i love you again btw 🙏🏽"', text:'Said it about four more times that same week anyway.' },
  { date:'26 April 2026', title:'"happy monthly anniversary honey\u2026 one down eleven to go 😼💕"', text:'The first of many monthiversary texts. Still counting.' },
  { date:'28 May 2026', title:'"and i love you very very much❤️🥹"', text:'One of the extra emphatic ones, after a whole day of being deskmates.' },
  { date:'29 May 2026', title:'"And i love you worse😍" / "I love you worser 😓"', text:'A full argument about who loves who more. Nobody backed down. Nobody wanted to.' },
  { date:'12 June 2026', title:'"Hello muntfu wami\u2026 you make me happy 💞"', text:'This text lives in my head rent free, still.' },
  { date:'16 June 2026', title:'"I\u2019m hydrogen and youre nitrogen\u2026 hydrogen bond 😍"', text:'"I love it when you talk nerd to me." Chemistry revision that turned into our whole love language.' },
  { date:'21 June 2026', title:'"& I want my kids to look exactly like you."', text:'Followed by an entire message of nothing but ❤️. No further comment needed then either.' },
  { date:'25 June 2026', title:'"Oh my god you guys should get married 😍"', text:'A friend said it out loud, unprompted. Neither of us denied it that hard.' },
  { date:'16 July 2026', title:'"im not someone who\u2019s gonna just give up on us"', text:'The day we had the real conversation instead of taking the easy way out. Still proud of that one.' },
  { date:'Today', title:'Still "hi honey"', text:'Still texting it. Still meaning it.' },
];

const MEMORIES = [
  { icon:'🌙', title:'"Ngiyalala nyalo, goodnight"', preview:'the nightly ritual we never skip', full:'"Ngiyalala nyalo, goodnight \u2764\ufe0f" \u2014 "Good night \ud83d\udc9e". some nights that\u2019s the whole conversation. it\u2019s still the best part of my day.' },
  { icon:'🧪', title:'talking nerd', preview:'hydrogen bonds as a love language', full:'"I\u2019m hydrogen and youre nitrogen, our love strong like a hydrogen bond." "even on my days when i feel like a dipole force, you\u2019re always here to make me a carboxylic acid." "you\u2019re the ethanol to my Propanioc acid." "I love it when you talk nerd to me." certified nerd, still your favorite one.' },
  { icon:'😭', title:'the heart flood', preview:'21 June, an entire text of nothing but ❤️', full:'right after "& I want my kids to look exactly like you." then "Yerrr" and about twenty heart emojis in a row. "My woman arhhhhhh." no further comment needed.' },
  { icon:'👔', title:'the tie comment', preview:'"The tie looks good on you😍"', full:'four words and I wore that tie like it meant something for the rest of the week.' },
  { icon:'💐', title:'flowers, actually', preview:'a small gesture, a whole memory', full:'I thought you\u2019d like flowers. you did. that\u2019s the whole story and it\u2019s enough.' },
  { icon:'📚', title:'the study grind', preview:'chem equilibrium at midnight', full:'zoom links, "did you study?", "let\u2019s start at 20:00", derivatives explained badly at 21:26 \u2014 half of this relationship happened on a shared screen and it still counts.' },
];

const REASONS = [
  "you still remember the tie i wore that one tuesday.",
  "you let me talk full periodic table nonsense at you and you talk it back.",
  "\"ngiyalala nyalo, goodnight\" hits different every single time.",
  "you called yourself my hype woman during finals and meant it.",
  "you take accountability instead of making me guess.",
  "you say \"i love you worser\" like losing that argument is a personal win.",
  "you noticed the tie before anyone else did.",
  "you still ask \"ukahle?\" before you ask anything else.",
  "you laugh at my worst jokes on purpose (\"hi home, my name is mpho\").",
  "you fight to make it work instead of playing the blame game.",
  "you have nicknames for me nobody else gets to use.",
  "you show up for the boring 9pm-zoom-call kind of days too.",
  "you're proud of the small wins, not just the big ones.",
  "you forgive fast and don't bring it back up later.",
  "you check on me mid-syllabus-panic at 1am.",
  "\"muntfu wami\" means something when you say it, not just a word.",
  "you say what you feel instead of making me guess it.",
  "you're honest about missing me instead of pretending you don't.",
  "you keep choosing \"let's make this work\" over walking away.",
  "you're loud about being proud of me, quietly and constantly.",
  "you remember which topics scare me before an exam.",
  "you said \"i love feeling loved\" and then actually let me love you.",
  "you make an ordinary tuesday feel like something.",
  "you never let a rough patch just sit there unspoken.",
  "you're competitive about loving me more and i'm not mad about it.",
  "you notice a new hairstyle, a new tie, a new anything.",
  "you make me want to communicate better, not hide better.",
  "you say goodnight even on the nights we argued.",
  "you already found a car and sent it to my IG, no shame.",
  "you read the proposal website like a hundred times and never told me to stop.",
];

const FAVORITES = [
  { quote:'"am i stealing your heart or the safe is just too strong?"', meta:'26 March 2026 · the proposal' },
  { quote:'"I\u2019m in awe shem🤩 I don\u2019t know how many times I\u2019ve read this😝"', meta:'26 March 2026 · her reply' },
  { quote:'"happy monthly anniversary honey, you\u2019re the most awesome girlfriend i could ever ask for, one down eleven to go 😼💕"', meta:'26 April 2026' },
  { quote:'"and i love you very very much❤️🥹"', meta:'28 May 2026 · 20:35' },
  { quote:'"And i love you worse😍" / "I love you worser 😓"', meta:'29 May 2026 · the love battle' },
  { quote:'"hi Muntu wami also, i love you wayyy more and you make me happier😛"', meta:'12 June 2026' },
  { quote:'"I\u2019m hydrogen and youre nitrogen, our love strong like a hydrogen bond.😍"', meta:'16 June 2026 · certified nerd moment' },
  { quote:'"You\u2019re the ethanol to my Propanioc acid 😓"', meta:'16 June 2026' },
  { quote:'"& I want my kids to look exactly like you."', meta:'21 June 2026' },
  { quote:'"Oh my god you guys should get married 😍"', meta:'25 June 2026 · a friend, unprompted' },
  { quote:'"my girl is just too goated I\u2019m sorry .😛❤️"', meta:'16 July 2026' },
  { quote:'"and i love you greatly sanelisiwe, and im not someone who\u2019s even gonna just give up on us"', meta:'16 July 2026' },
];

const CHAT_REPLAY = [
  { who:'me', text:'and i can absolutely say the same thing about my gf😼💕', time:'19:45', date:'29 May 2026' },
  { who:'them', text:'You\u2019re awesome, I love you ❤️', time:'19:47' },
  { who:'me', text:'And i love you worse😍', time:'19:51' },
  { who:'them', text:'I shouldn\u2019t? 👀', time:'19:54' },
  { who:'them', text:'I love you worser 😓', time:'19:55' },
  { who:'me', text:'no cause kutlwanong ngan', time:'19:58' },
  { who:'me', text:'I\u2019m hydrogen and youre nitrogen, our love strong like a hydrogen bond.😍', time:'19:22', date:'16 June 2026' },
  { who:'them', text:'My academic warrior 😭', time:'19:23' },
  { who:'me', text:'even on my days when i feel like a dipole force, you\u2019re always here to make me a carboxylic acid', time:'19:24' },
  { who:'them', text:'Maboss mancane, I love it when you talk nerd to me😍😍😍', time:'19:25' },
  { who:'them', text:'You\u2019re the ethanol to my Propanioc acid 😓', time:'19:27' },
];

const LETTERS = [
  { seal:'S', label:'open when you miss me', title:'to my muntfu wami', body:'i don\u2019t say this enough out loud but you make ordinary days feel like something. every "hi honey," every "ngiyalala nyalo, goodnight," every chemistry pun you let me get away with. my girl is just too goated, i\u2019m not even sorry for saying it. ngiyakutsandza, for real, no cap.', sig:'Mpho'},
  { seal:'M', label:'open on a hard day', title:'for the heavy days', body:'if today feels like a lot \u2014 i\u2019m not going anywhere. i told you straight up, i\u2019m not someone who\u2019s just gonna give up on us. we don\u2019t do the blame game, we just fix it. that\u2019s the whole deal. you were never the bare minimum to me, not once.', sig:'Mpho'},
  { seal:'♥', label:'open on the 26th', title:'every 26th, forever', body:'"one down, eleven to go" \u2014 i said that on the first monthiversary and i meant it as a promise, not a joke. a year from now when you open this, remember i meant every "worser," every hydrogen bond joke, and yeah, i still want kids that look exactly like you someday. here\u2019s to more of this.', sig:'your minion, forever'},
];

const FLIPBOOK = [
  { title:'ch. 1 — "hi honey"', text:'18 May 2026. a random "hi honey" that turned into this whole thing. neither of us saw it coming.' },
  { title:'ch. 2 — our language', text:'muntfu wami. ukahle? ngiyalala nyalo. a whole dialect that\u2019s just ours, half siswati half nonsense.' },
  { title:'ch. 3 — the love battle', text:'"i love you worse" vs "i love you worser." an argument neither of us wanted to win, so we just kept losing on purpose.' },
  { title:'ch. 4 — the nerd arc', text:'hydrogen bonds, carboxylic acids, ethanol. chemistry revision that turned into the softest inside joke we\u2019ve got.' },
  { title:'ch. 5 — the real talk', text:'not every page is soft. we had the actual conversation instead of the easy way out. that\u2019s the part i\u2019m proudest of, ngl.' },
  { title:'ch. 6 — still writing this', text:'blank on purpose. everything after this is ours to fill in, whenever.' },
];

const QUOTES = [
  'i said "i love you worse" and meant every syllable of a comparative that doesn\u2019t grammatically exist.',
  'my girl is just too goated, i\u2019m not even sorry.',
  'hydrogen bonds are weak on paper. ours isn\u2019t.',
  'ngiyakutsandza isn\u2019t a word i throw around. you know that.',
  '"muntfu wami" was never just a nickname.',
  'i said i\u2019d sell you for a car once. i lied, obviously.',
  'every "hi honey" was basically a vote for this lasting.',
  'we don\u2019t do the blame game. we just fix it.',
];

const FUTURE = [
  { icon:'✈️', title:'meet under a real sky', text:'no canvas stars this time \u2014 the actual thing, somewhere quiet, just us.' },
  { icon:'🎓', title:'finish what we both started', text:'every syllabus, every deadline, every "I\u2019m so tired" \u2014 cheering from the front row for each other.' },
  { icon:'👶', title:'kids that look exactly like you', text:'you heard it here, i said it first, 21 June 2026.' },
  { icon:'💍', title:'the joke that isn\u2019t really a joke anymore', text:'a friend called it out loud. we\u2019re not denying it these days. (tap this card 👀)', secret:'marriage' },
  { icon:'🏠', title:'a place that\u2019s actually ours', text:'small, loud, our own inside jokes on the walls.' },
  { icon:'👵', title:'still losing the "who loves who worse" argument', text:'on purpose. at 70. no different.' },
];

const GALLERY = [
  { img:'assets/images/couple-01-blow-kiss.jpg', label:'the blanket photoshoot' },
  { img:'assets/images/couple-02-hold-hands.jpg', label:'matching glasses, holding hands' },
  { img:'assets/images/couple-03-hand-kiss.jpg', label:'hand kisses > everything' },
  { img:'assets/images/couple-04-cheek-selfie.jpg', label:'cheek to cheek' },
  { img:'assets/images/couple-05-cheek-selfie-2.jpg', label:'another one, because we take too many' },
];

const SKY_MESSAGES = [
  'muntfu wami, always.', 'ngiyakutsandza — no cap.', 'the hydrogen bond joke still slaps.',
  'worser than you, apparently.', 'still not giving up on us.', 'you make ordinary days good.',
  'happy girlfriend\u2019s day, for real.', '26th of every month, forever.',
];

const MAP_STOPS = [
  { x:60, y:230, title:'Where it started', body:'A "hi honey" that didn\u2019t know it was the start of anything yet.' },
  { x:230, y:110, title:'Study call nights', body:'Chem equilibrium at midnight, somehow romantic anyway.' },
  { x:420, y:220, title:'The rough patch', body:'A real conversation, real accountability, and a choice to stay.' },
  { x:600, y:100, title:'Right now', body:'Still here. Still choosing this, out loud.' },
  { x:740, y:210, title:'Someday', body:'Meeting under a real sky, no canvas required.' },
];

const GARDEN_COMPLIMENTS = [
  'You make ordinary days feel like something.', 'Muntfu wami, always.', 'Still my favorite person to talk nerd to.',
  'You checked on me first. You always do.', 'The tie looked good, but you looked better.', 'I love you worse. Still true.',
  'Ngiyakutsandza.', 'You\u2019re the calm part of my day.',
];

/* ============================== UTILITIES ============================= */
const $ = (sel, ctx=document) => ctx.querySelector(sel);
const $$ = (sel, ctx=document) => Array.from(ctx.querySelectorAll(sel));
const norm = s => s.toLowerCase().replace(/[\s\-\/]/g,'');

/* ============================== EASTER EGG MANAGER ============================= */
const EggManager = (() => {
  const found = new Set();
  const total = 30;
  function unlock(id, msg){
    if (found.has(id)) return;
    found.add(id);
    toast(msg || 'secret found ✨');
    const counter = $('#egg-counter');
    if (counter) counter.textContent = found.size;
    if (found.size >= total) setTimeout(() => toast('all secrets found. you know me too well 🖤'), 700);
  }
  function toast(msg){
    const wrap = $('#achievement-toast-wrap');
    if (!wrap) return;
    const el = document.createElement('div');
    el.className = 'egg-toast';
    el.textContent = msg;
    wrap.appendChild(el);
    setTimeout(() => el.remove(), 3200);
  }
  return { unlock, toast, get size(){ return found.size; } };
})();

/* ============================== LOADING SCREEN ============================= */
window.addEventListener('load', () => {
  setTimeout(() => {
    $('#loading-screen').classList.add('hidden');
  }, 900);
});

/* ============================== LOCK SCREEN ============================= */
(() => {
  const lockScreen = $('#lock-screen');
  const form = $('#lock-form');
  const input = $('#lock-input');
  const error = $('#lock-error');
  const forgot = $('#lock-forgot');
  const root = $('#site-root');

  if (sessionStorage.getItem('unlocked') === 'yes'){
    lockScreen.classList.add('unlocking');
    lockScreen.hidden = true;
    root.hidden = false;
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    const val = norm(input.value);
    if (PASSWORDS.some(p => norm(p) === val)){
      sessionStorage.setItem('unlocked','yes');
      lockScreen.classList.add('unlocking');
      setTimeout(() => { lockScreen.hidden = true; root.hidden = false; initAfterUnlock(); }, 750);
    } else {
      error.textContent = 'not quite, try again baby 💭';
      const card = $('.lock-card');
      card.classList.remove('shake'); void card.offsetWidth; card.classList.add('shake');
    }
  });

  forgot.addEventListener('click', () => {
    error.style.color = 'var(--accent-3)';
    error.textContent = 'it\u2019s a date, dd/mm/yyyy — the day it became official 💛';
  });

  // if already unlocked on load, run init immediately
  if (root.hidden === false) initAfterUnlock();
})();

/* ============================== MAIN INIT (after unlock) ============================= */
let inited = false;
function initAfterUnlock(){
  if (inited) return; inited = true;

  buildTimeline();
  buildMemoryCards();
  buildReasons();
  buildFavorites();
  initChatReplay();
  buildLetters();
  buildFlipbook();
  initQuoteCarousel();
  initSky();
  buildMap();
  buildGarden();
  buildFuture();
  buildGallery();
  buildStats();
  initCountdown();
  initFinale();
  initScrollReveal();
  initParallax();
  initTypingHero();
}

/* ============================== SCROLL REVEAL ============================= */
function initScrollReveal(){
  const els = $$('[data-reveal], [data-reveal-stagger]');
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold:0.15 });
  els.forEach(el => io.observe(el));
}

/* ============================== TYPING HERO ============================= */
function initTypingHero(){
  const target = $('#typing-target');
  const phrases = ['built with real texts.', 'built with real "i love you worser"s.', 'built with actual hydrogen bond jokes.', 'built just for you.'];
  let pi=0, ci=0, deleting=false;
  function tick(){
    const phrase = phrases[pi];
    if (!deleting){
      ci++;
      target.textContent = phrase.slice(0,ci);
      if (ci === phrase.length){ deleting = true; setTimeout(tick, 1400); return; }
    } else {
      ci--;
      target.textContent = phrase.slice(0,ci);
      if (ci === 0){ deleting = false; pi = (pi+1)%phrases.length; }
    }
    setTimeout(tick, deleting ? 30 : 55);
  }
  tick();
}

/* ============================== PARALLAX + CURSOR GLOW ============================= */
function initParallax(){
  const layer = $('[data-parallax]');
  document.addEventListener('mousemove', e => {
    const x = (e.clientX / window.innerWidth - .5) * 30;
    const y = (e.clientY / window.innerHeight - .5) * 30;
    if (layer) layer.style.transform = `translate(${x}px, ${y}px)`;
    const glow = $('#cursor-glow');
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  });
}

/* ============================== TIMELINE ============================= */
function buildTimeline(){
  const el = $('#timeline');
  el.innerHTML = TIMELINE.map(t => `
    <div class="timeline-item" data-reveal>
      <p class="timeline-date">${t.date}</p>
      <h3>${t.title}</h3>
      <p>${t.text}</p>
    </div>`).join('');
}

/* ============================== MEMORY CARDS ============================= */
function buildMemoryCards(){
  const el = $('#memory-grid');
  el.innerHTML = MEMORIES.map((m,i) => `
    <div class="memory-card glass" data-reveal data-idx="${i}">
      <span class="m-icon">${m.icon}</span>
      <h3>${m.title}</h3>
      <p class="m-preview">${m.preview}</p>
      <p class="m-full">${m.full}</p>
    </div>`).join('');
  $$('.memory-card', el).forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('open');
      if (!card.dataset.opened){ card.dataset.opened='1'; EggManager.unlock('memcard'+card.dataset.idx, 'memory unlocked 💭'); }
    });
  });
}

/* ============================== REASONS ============================= */
function buildReasons(){
  const el = $('#reasons-grid');
  el.innerHTML = REASONS.map((r,i) => `
    <div class="reason-card glass" data-reveal>
      <span class="reason-num">${String(i+1).padStart(2,'0')}</span>
      <p>${r}</p>
    </div>`).join('');
}

/* ============================== FAVORITES ============================= */
function buildFavorites(){
  const el = $('#fav-grid');
  el.innerHTML = FAVORITES.map(f => `
    <div class="fav-card glass" data-reveal>
      <p class="fav-quote">${f.quote}</p>
      <p class="fav-meta">${f.meta}</p>
    </div>`).join('');
}

/* ============================== CHAT REPLAY ============================= */
function initChatReplay(){
  const body = $('#chat-body');
  const playBtn = $('#chat-play');
  const restartBtn = $('#chat-restart');
  const speedSel = $('#chat-speed');
  const status = $('#chat-status');
  let idx = 0, playing = false, timer = null;

  function reset(){
    body.innerHTML = '';
    idx = 0; playing = false;
    playBtn.textContent = '▶';
    status.textContent = 'tap play';
    clearTimeout(timer);
  }
  function step(){
    if (idx >= CHAT_REPLAY.length){
      playing = false; playBtn.textContent = '▶'; status.textContent = 'replay finished 💕';
      EggManager.unlock('chatreplay', 'you watched the whole love battle 😼');
      return;
    }
    const msg = CHAT_REPLAY[idx];
    if (msg.date){
      const sep = document.createElement('div');
      sep.className = 'chat-date-sep'; sep.textContent = msg.date;
      body.appendChild(sep);
    }
    const typing = document.createElement('div');
    typing.className = 'typing-indicator';
    typing.innerHTML = '<span></span><span></span><span></span>';
    if (msg.who === 'them') body.appendChild(typing);
    const speed = parseFloat(speedSel.value);
    const delay = msg.who === 'them' ? 700*speed : 250*speed;
    setTimeout(() => {
      if (msg.who==='them' && typing.parentNode) typing.remove();
      const bubble = document.createElement('div');
      bubble.className = 'chat-bubble ' + msg.who;
      bubble.innerHTML = `${msg.text} <span class="tick">${msg.time}${msg.who==='me' ? ' ✓✓' : ''}</span>`;
      body.appendChild(bubble);
      body.scrollTop = body.scrollHeight;
      idx++;
      if (playing) timer = setTimeout(step, 550*speed);
    }, delay);
  }
  playBtn.addEventListener('click', () => {
    if (playing){ playing=false; playBtn.textContent='▶'; status.textContent='paused'; clearTimeout(timer); return; }
    playing = true; playBtn.textContent='⏸'; status.textContent='typing…';
    if (idx===0) body.innerHTML='';
    step();
  });
  restartBtn.addEventListener('click', reset);
}

/* ============================== LOVE LETTERS ============================= */
function buildLetters(){
  const el = $('#letters-grid');
  el.innerHTML = LETTERS.map((l,i) => `
    <div class="letter-card" data-idx="${i}">
      <div class="letter-envelope glass">
        <div class="wax-seal">${l.seal}</div>
        <span class="env-label">${l.label}</span>
        <div class="letter-paper">
          <h3>${l.title}</h3>
          <p>${l.body}</p>
          <span class="sig">— ${l.sig}</span>
        </div>
      </div>
    </div>`).join('');
  $$('.letter-card', el).forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('open');
      EggManager.unlock('letter'+card.dataset.idx, 'seal broken 🩸');
    });
  });
}

/* ============================== FLIPBOOK ============================= */
function buildFlipbook(){
  const el = $('#flipbook');
  let current = 0;
  el.innerHTML = FLIPBOOK.map((p,i) => `
    <div class="fb-page ${i===0?'':'behind'}" data-idx="${i}" style="z-index:${FLIPBOOK.length-i}">
      <h4>${p.title}</h4><p>${p.text}</p>
    </div>`).join('');
  const pages = $$('.fb-page', el);
  const pageNum = $('#fb-page-num');
  function render(){
    pages.forEach((p,i) => {
      p.classList.toggle('turned', i < current);
      p.style.zIndex = i < current ? i : FLIPBOOK.length - i;
    });
    pageNum.textContent = `${current+1} / ${FLIPBOOK.length}`;
    if (current === FLIPBOOK.length - 1) EggManager.unlock('flipbook','read the whole book 📖');
  }
  $('#fb-next').addEventListener('click', () => { if (current < FLIPBOOK.length-1){ current++; render(); } });
  $('#fb-prev').addEventListener('click', () => { if (current > 0){ current--; render(); } });
  let startX=null;
  el.addEventListener('touchstart', e => startX = e.touches[0].clientX, {passive:true});
  el.addEventListener('touchend', e => {
    if (startX===null) return;
    const dx = e.changedTouches[0].clientX - startX;
    if (dx < -40 && current < FLIPBOOK.length-1){ current++; render(); }
    if (dx > 40 && current > 0){ current--; render(); }
    startX = null;
  });
  render();
}

/* ============================== QUOTE CAROUSEL ============================= */
function initQuoteCarousel(){
  const text = $('#quote-text');
  const dotsWrap = $('#quote-dots');
  let idx = 0, auto;
  dotsWrap.innerHTML = QUOTES.map((_,i) => `<span data-idx="${i}" class="${i===0?'active':''}"></span>`).join('');
  const dots = $$('span', dotsWrap);
  function render(){
    text.style.opacity = 0;
    setTimeout(() => { text.textContent = QUOTES[idx]; text.style.opacity = 1; }, 200);
    dots.forEach((d,i) => d.classList.toggle('active', i===idx));
  }
  function next(){ idx = (idx+1)%QUOTES.length; render(); }
  function prev(){ idx = (idx-1+QUOTES.length)%QUOTES.length; render(); }
  $('#quote-next').addEventListener('click', () => { next(); resetAuto(); });
  $('#quote-prev').addEventListener('click', () => { prev(); resetAuto(); });
  dots.forEach(d => d.addEventListener('click', () => { idx = +d.dataset.idx; render(); resetAuto(); }));
  function resetAuto(){ clearInterval(auto); auto = setInterval(next, 6000); }
  render(); resetAuto();
}

/* ============================== CONSTELLATION SKY ============================= */
function initSky(){
  const canvas = $('#sky-canvas');
  const ctx = canvas.getContext('2d');
  const hint = $('#sky-hint');
  let w,h,stars=[],shooting=[];

  // heart-shape points (parametric heart) mixed with initials feel
  function heartPoints(n){
    const pts = [];
    for (let i=0;i<n;i++){
      const t = (i/n) * Math.PI * 2;
      const x = 16*Math.pow(Math.sin(t),3);
      const y = -(13*Math.cos(t) - 5*Math.cos(2*t) - 2*Math.cos(3*t) - Math.cos(4*t));
      pts.push({x,y});
    }
    return pts;
  }

  function resize(){
    w = canvas.width = canvas.clientWidth * devicePixelRatio;
    h = canvas.height = canvas.clientHeight * devicePixelRatio;
    const heart = heartPoints(SKY_MESSAGES.length);
    const scale = Math.min(w,h) / 44;
    stars = heart.map((p,i) => ({
      x: w/2 + p.x*scale, y: h/2 + p.y*scale - h*0.05,
      r: 3*devicePixelRatio, msg: SKY_MESSAGES[i], twinkle: Math.random()*Math.PI*2, found:false
    }));
    // ambient bg stars
    for (let i=0;i<70;i++){
      stars.push({ x:Math.random()*w, y:Math.random()*h, r:Math.random()*1.6*devicePixelRatio, ambient:true, twinkle:Math.random()*Math.PI*2 });
    }
  }
  window.addEventListener('resize', resize);
  resize();

  function spawnShooting(){
    shooting.push({ x: Math.random()*w*0.6, y: Math.random()*h*0.3, vx: 6*devicePixelRatio, vy: 3*devicePixelRatio, life: 60 });
  }
  setInterval(spawnShooting, 4500);

  function loop(){
    ctx.clearRect(0,0,w,h);
    ctx.fillStyle = 'rgba(212,168,87,0.9)';
    stars.forEach(s => {
      s.twinkle += 0.03;
      const alpha = s.ambient ? 0.3 + Math.sin(s.twinkle)*0.25 : 0.75 + Math.sin(s.twinkle)*0.25;
      ctx.beginPath();
      ctx.fillStyle = s.found ? 'rgba(232,135,154,0.95)' : `rgba(${s.ambient?251:212},${s.ambient?243:168},${s.ambient?231:87},${alpha})`;
      ctx.arc(s.x, s.y, s.r*(s.found?1.6:1), 0, Math.PI*2);
      ctx.fill();
    });
    // connecting lines between heart stars
    ctx.strokeStyle = 'rgba(111,191,160,0.25)';
    ctx.lineWidth = 1;
    const heartStars = stars.filter(s => !s.ambient);
    ctx.beginPath();
    heartStars.forEach((s,i) => { i===0 ? ctx.moveTo(s.x,s.y) : ctx.lineTo(s.x,s.y); });
    ctx.closePath(); ctx.stroke();

    shooting.forEach(s => {
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(255,255,255,0.8)';
      ctx.lineWidth = 2;
      ctx.moveTo(s.x, s.y);
      ctx.lineTo(s.x - s.vx*4, s.y - s.vy*4);
      ctx.stroke();
      s.x += s.vx; s.y += s.vy; s.life--;
    });
    shooting = shooting.filter(s => s.life > 0 && s.x < w && s.y < h);
    requestAnimationFrame(loop);
  }
  loop();

  canvas.addEventListener('click', e => {
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX-rect.left) * devicePixelRatio;
    const y = (e.clientY-rect.top) * devicePixelRatio;
    const hit = stars.filter(s=>!s.ambient).find(s => Math.hypot(s.x-x, s.y-y) < 18*devicePixelRatio);
    if (hit){
      hit.found = true;
      hint.textContent = '"' + hit.msg + '"';
      EggManager.unlock('star', 'found a star secret ⭐');
    }
  });
}

/* ============================== MEMORY MAP ============================= */
function buildMap(){
  const svg = $('#map-path-svg');
  const markersWrap = $('#map-markers');
  const d = 'M ' + MAP_STOPS.map(s => `${s.x} ${s.y}`).join(' L ');
  svg.innerHTML = `<path d="${d}"></path>`;
  markersWrap.innerHTML = MAP_STOPS.map((s,i) => `
    <button class="map-marker" style="left:${(s.x/800)*100}%; top:${(s.y/320)*100}%" data-idx="${i}" aria-label="${s.title}">${i+1}</button>`).join('');
  const popup = $('#map-popup');
  $$('.map-marker', markersWrap).forEach(btn => {
    btn.addEventListener('click', () => {
      const s = MAP_STOPS[+btn.dataset.idx];
      $('#map-popup-title').textContent = s.title;
      $('#map-popup-body').textContent = s.body;
      popup.hidden = false;
      EggManager.unlock('map'+btn.dataset.idx, 'stop unlocked on our road 🗺️');
    });
  });
  $('#map-popup-close').addEventListener('click', () => popup.hidden = true);
  popup.addEventListener('click', e => { if (e.target===popup) popup.hidden = true; });
}

/* ============================== FUTURE REVEAL MODAL (close handler) ============================= */
(() => {
  const modal = $('#future-reveal-modal');
  $('#future-reveal-close').addEventListener('click', () => modal.hidden = true);
  modal.addEventListener('click', e => { if (e.target===modal) modal.hidden = true; });
})();

/* ============================== FLOWER GARDEN ============================= */
function buildGarden(){
  const ground = $('#garden-ground');
  const emojis = ['🌷','🌸','🌼','🌺','🌻'];
  const flowers = [];
  for (let i=0;i<10;i++){
    const f = document.createElement('div');
    f.className = 'flower';
    f.textContent = emojis[i % emojis.length];
    f.style.left = (5 + i*9.5) + '%';
    ground.appendChild(f);
    flowers.push(f);
  }
  // butterflies
  for (let i=0;i<2;i++){
    const b = document.createElement('div');
    b.className = 'butterfly';
    b.textContent = '🦋';
    b.style.left = (20+i*40)+'%'; b.style.top = (20+i*15)+'%';
    b.style.animationDelay = (i*1.4)+'s';
    ground.appendChild(b);
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('bloom');
    });
  }, { threshold:0.4 });
  flowers.forEach(f => io.observe(f));
  flowers.forEach((f,i) => {
    f.addEventListener('click', () => {
      EggManager.toast(GARDEN_COMPLIMENTS[i % GARDEN_COMPLIMENTS.length]);
      EggManager.unlock('flower', 'the garden speaks 🌷');
      // petal burst
      for (let p=0;p<8;p++){
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.textContent = '🌸';
        petal.style.left = f.offsetLeft + 'px';
        petal.style.setProperty('--drift', (Math.random()*80-40)+'px');
        petal.style.animationDuration = (1.2+Math.random())+'s';
        $('#garden-wrap').appendChild(petal);
        setTimeout(() => petal.remove(), 2200);
      }
    });
  });
}

/* ============================== FUTURE ============================= */
function buildFuture(){
  const el = $('#future-grid');
  el.innerHTML = FUTURE.map((f,i) => `
    <div class="future-card glass" data-reveal ${f.secret ? `data-secret="${f.secret}" style="cursor:pointer"` : ''}>
      <span class="f-icon">${f.icon}</span>
      <div><h3>${f.title}</h3><p>${f.text}</p></div>
    </div>`).join('');
  $$('.future-card[data-secret]', el).forEach(card => {
    card.addEventListener('click', () => {
      $('#future-reveal-modal').hidden = false;
      EggManager.unlock('marriage-reveal','found the receipts 💍');
    });
  });
}

/* ============================== GALLERY / LIGHTBOX ============================= */
function buildGallery(){
  const el = $('#gallery-grid');
  el.innerHTML = GALLERY.map((g,i) => `
    <div class="masonry-item" data-idx="${i}" data-reveal>
      <img src="${g.img}" alt="${g.label}" loading="lazy">
      <div class="masonry-cap">${g.label}</div>
    </div>`).join('');
  const lightbox = $('#lightbox');
  const frame = $('#lightbox-frame');
  const caption = $('#lightbox-caption');
  let current = 0;
  function open(i){
    current = i;
    const g = GALLERY[i];
    frame.innerHTML = `<img src="${g.img}" alt="${g.label}">`;
    caption.textContent = g.label;
    lightbox.hidden = false;
  }
  $$('.masonry-item', el).forEach(item => item.addEventListener('click', () => open(+item.dataset.idx)));
  $('#lightbox-next').addEventListener('click', () => open((current+1)%GALLERY.length));
  $('#lightbox-prev').addEventListener('click', () => open((current-1+GALLERY.length)%GALLERY.length));
  $('#lightbox-close').addEventListener('click', () => lightbox.hidden = true);
  lightbox.addEventListener('click', e => { if (e.target===lightbox) lightbox.hidden = true; });
  // swipe support on mobile
  let startX = null;
  frame.addEventListener('touchstart', e => startX = e.touches[0].clientX, {passive:true});
  frame.addEventListener('touchend', e => {
    if (startX===null) return;
    const dx = e.changedTouches[0].clientX - startX;
    if (dx < -40) open((current+1)%GALLERY.length);
    if (dx > 40) open((current-1+GALLERY.length)%GALLERY.length);
    startX = null;
  });
}

/* ============================== STATS ============================= */
function buildStats(){
  const days = Math.floor((new Date() - ANNIVERSARY) / 86400000);
  const stats = [
    { num: days, label:'days together' },
    { num: 1822, label:'messages exchanged' },
    { num: 30, label:'"I love you"s counted' },
    { num: 391, label:'photos & voice notes shared' },
    { num: 100, label:'inside jokes & soft moments' },
  ];
  const el = $('#stats-grid');
  el.innerHTML = stats.map(s => `
    <div class="stat-card glass" data-reveal>
      <div class="stat-num" data-target="${s.num}">0</div>
      <div class="stat-label">${s.label}</div>
    </div>`).join('');
  const nums = $$('.stat-num', el);
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        animateCount(entry.target);
        io.unobserve(entry.target);
      }
    });
  }, { threshold:0.5 });
  nums.forEach(n => io.observe(n));
}
function animateCount(el){
  const target = +el.dataset.target;
  const dur = 1400;
  const start = performance.now();
  function tick(now){
    const p = Math.min(1, (now-start)/dur);
    el.textContent = Math.floor(p*target).toLocaleString();
    if (p < 1) requestAnimationFrame(tick);
    else el.textContent = target.toLocaleString();
  }
  requestAnimationFrame(tick);
}

/* ============================== COUNTDOWN ============================= */
function initCountdown(){
  const el = $('#countdown-grid');
  function nextMonthiversary(){
    const now = new Date();
    let next = new Date(now.getFullYear(), now.getMonth(), 26, 0,0,0);
    if (next <= now) next = new Date(now.getFullYear(), now.getMonth()+1, 26);
    return next;
  }
  function render(){
    const target = nextMonthiversary();
    const diff = Math.max(0, target - new Date());
    const d = Math.floor(diff/86400000);
    const h = Math.floor((diff/3600000)%24);
    const m = Math.floor((diff/60000)%60);
    const s = Math.floor((diff/1000)%60);
    el.innerHTML = [
      [d,'days'],[h,'hours'],[m,'min'],[s,'sec']
    ].map(([v,l]) => `<div class="cd-block"><div class="cd-num">${String(v).padStart(2,'0')}</div><div class="cd-label">${l}</div></div>`).join('');
  }
  render();
  setInterval(render, 1000);
}

/* ============================== FINALE ============================= */
function initFinale(){
  const canvas = $('#finale-canvas');
  const ctx = canvas.getContext('2d');
  let w,h,stars=[];
  function resize(){
    w = canvas.width = canvas.clientWidth*devicePixelRatio;
    h = canvas.height = canvas.clientHeight*devicePixelRatio;
    stars = Array.from({length:120}, () => ({ x:Math.random()*w, y:Math.random()*h, r:Math.random()*1.8*devicePixelRatio, t:Math.random()*Math.PI*2 }));
  }
  window.addEventListener('resize', resize); resize();
  function loop(){
    ctx.clearRect(0,0,w,h);
    stars.forEach(s => {
      s.t += 0.02;
      ctx.beginPath();
      ctx.fillStyle = `rgba(251,243,231,${0.3+Math.sin(s.t)*0.3})`;
      ctx.arc(s.x,s.y,s.r,0,Math.PI*2); ctx.fill();
    });
    requestAnimationFrame(loop);
  }
  loop();

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        fireConfetti();
        EggManager.unlock('finale','made it to the end 🖤');
      }
    });
  }, { threshold:0.6 });
  io.observe($('#finale'));
}

/* ============================== CONFETTI ============================= */
function fireConfetti(){
  const colors = ['#D4A857','#E8879A','#6FBFA0','#FBF3E7'];
  for (let i=0;i<60;i++){
    const c = document.createElement('div');
    c.textContent = Math.random()>0.5 ? '❤' : '✦';
    c.style.position = 'fixed';
    c.style.left = Math.random()*100 + 'vw';
    c.style.top = '-20px';
    c.style.color = colors[Math.floor(Math.random()*colors.length)];
    c.style.fontSize = (10+Math.random()*14)+'px';
    c.style.zIndex = 5000;
    c.style.pointerEvents = 'none';
    c.style.transition = `transform ${2+Math.random()*2}s ease-in, opacity ${2+Math.random()*2}s ease-in`;
    document.body.appendChild(c);
    requestAnimationFrame(() => {
      c.style.transform = `translateY(${window.innerHeight+40}px) rotate(${Math.random()*720-360}deg)`;
      c.style.opacity = 0;
    });
    setTimeout(() => c.remove(), 4200);
  }
}

/* ============================== FLOATING HEARTS (ambient) ============================= */
(() => {
  const wrap = $('#floating-hearts');
  const emojis = ['❤️','💛','✨'];
  function spawn(){
    const h = document.createElement('span');
    h.className = 'floating-heart';
    h.textContent = emojis[Math.floor(Math.random()*emojis.length)];
    h.style.left = Math.random()*100 + 'vw';
    h.style.setProperty('--drift', (Math.random()*100-50)+'px');
    h.style.setProperty('--rot', (Math.random()*60-30)+'deg');
    h.style.animationDuration = (7+Math.random()*6)+'s';
    wrap.appendChild(h);
    setTimeout(() => h.remove(), 14000);
  }
  setInterval(spawn, 2200);
  wrap.addEventListener('dblclick', () => { for(let i=0;i<10;i++) setTimeout(spawn, i*60); EggManager.unlock('heartburst','double heart burst 💕'); });
})();

/* ============================== BACKGROUND PARTICLES ============================= */
(() => {
  const canvas = $('#particles-canvas');
  const ctx = canvas.getContext('2d');
  let w,h,parts=[];
  function resize(){
    w = canvas.width = window.innerWidth*devicePixelRatio;
    h = canvas.height = window.innerHeight*devicePixelRatio;
  }
  function init(){
    resize();
    parts = Array.from({length:50}, () => ({
      x:Math.random()*w, y:Math.random()*h, r:Math.random()*1.6*devicePixelRatio,
      vx:(Math.random()-0.5)*0.15, vy:(Math.random()-0.5)*0.15, o:Math.random()*0.4+0.1
    }));
  }
  window.addEventListener('resize', resize);
  init();
  function loop(){
    ctx.clearRect(0,0,w,h);
    ctx.fillStyle = 'rgba(212,168,87,';
    parts.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x<0) p.x=w; if (p.x>w) p.x=0;
      if (p.y<0) p.y=h; if (p.y>h) p.y=0;
      ctx.beginPath();
      ctx.fillStyle = `rgba(212,168,87,${p.o})`;
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fill();
    });
    requestAnimationFrame(loop);
  }
  loop();
})();

/* ============================== SCROLL PROGRESS + BACK TO TOP ============================= */
window.addEventListener('scroll', () => {
  const h = document.documentElement;
  const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
  $('#scroll-progress-bar').style.width = scrolled + '%';
  $('#back-to-top').classList.toggle('show', h.scrollTop > 600);
  if (scrolled > 98) EggManager.unlock('fullscroll','you scrolled the whole thing 🩶');
});
$('#back-to-top').addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
$('#scroll-indicator').addEventListener('click', () => $('#story').scrollIntoView({behavior:'smooth'}));

/* ============================== THEME TOGGLE ============================= */
(() => {
  const btn = $('#theme-toggle');
  let clicks = 0, clickTimer;
  const saved = localStorage.getItem('theme');
  if (saved) document.body.dataset.theme = saved;
  function apply(){
    const isLight = document.body.dataset.theme === 'light';
    btn.textContent = isLight ? '☀️' : '🌙';
  }
  apply();
  btn.addEventListener('click', () => {
    document.body.dataset.theme = document.body.dataset.theme === 'light' ? 'dusk' : 'light';
    localStorage.setItem('theme', document.body.dataset.theme);
    apply();
    clicks++;
    clearTimeout(clickTimer);
    clickTimer = setTimeout(() => clicks=0, 1500);
    if (clicks >= 5){ EggManager.unlock('nightowl','achievement: night owl 🦉'); clicks=0; }
  });
})();

/* ============================== MUSIC PLAYER (spotify embed) ============================== */
(() => {
  const player = $('#music-player');
  const collapseBtn = $('#music-collapse');
  const reopenBtn = $('#music-player-reopen');
  const muteToggle = $('#mute-toggle');

  function collapse(){
    player.classList.add('collapsed');
    reopenBtn.classList.add('show');
  }
  function expand(){
    player.classList.remove('collapsed');
    reopenBtn.classList.remove('show');
  }
  collapseBtn.addEventListener('click', collapse);
  reopenBtn.addEventListener('click', expand);
  // repurpose the nav "mute" icon as a show/hide toggle for the embed, since
  // the Spotify player has its own volume control inside the iframe.
  muteToggle.textContent = '🎵';
  muteToggle.setAttribute('aria-label','Toggle music player');
  muteToggle.addEventListener('click', () => {
    player.classList.contains('collapsed') ? expand() : collapse();
  });
})();

/* ============================== SECRET MESSAGE (footer, 10 clicks) ============================= */
(() => {
  const trigger = $('#footer-heart-trigger');
  const modal = $('#secret-modal');
  const body = $('#secret-body');
  let count = 0;
  trigger.addEventListener('click', () => {
    count++;
    if (count >= 10){
      body.textContent = "The actual secret is: you were never the bare minimum, and every rough patch we've had just proved we choose to fix it instead of walking. That's the whole website, honestly. Happy Girlfriend's Day, muntfu wami.";
      modal.hidden = false;
      EggManager.unlock('secret-message','the real secret, unlocked 🔓');
      count = 0;
    } else {
      EggManager.toast(`${10-count} more clicks, patience 😼`);
    }
  });
  $('#secret-close').addEventListener('click', () => modal.hidden = true);
  modal.addEventListener('click', e => { if (e.target===modal) modal.hidden = true; });
})();

/* ============================== HERO TITLE CLICK EASTER EGG ============================= */
(() => {
  const title = $('#hero-title');
  let clicks = 0, timer;
  title.addEventListener('click', () => {
    clicks++;
    clearTimeout(timer);
    timer = setTimeout(()=>clicks=0, 1200);
    if (clicks === 5){
      fireConfetti();
      EggManager.unlock('title-click','the title had secrets too 🎉');
      clicks = 0;
    }
  });
})();

/* ============================== KONAMI CODE ============================= */
(() => {
  const seq = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  let pos = 0;
  window.addEventListener('keydown', e => {
    if (e.key === seq[pos]) { pos++; if (pos===seq.length){ fireConfetti(); EggManager.unlock('konami','KONAMI CODE. certified gamer love. 🕹️'); pos=0; } }
    else pos = (e.key===seq[0]) ? 1 : 0;
  });
})();

/* ============================== TYPED KEYWORD EASTER EGGS ============================= */
(() => {
  let buffer = '';
  window.addEventListener('keydown', e => {
    if (e.key.length === 1) buffer = (buffer + e.key).slice(-20).toLowerCase();
    if (buffer.includes('hydrogen')){ EggManager.toast('our love: strong like a hydrogen bond 🧪'); EggManager.unlock('hydrogen-word'); buffer=''; }
    if (buffer.includes('worser')){ EggManager.toast('i love you worser 😓💞'); EggManager.unlock('worser-word'); buffer=''; }
    if (buffer.includes('iloveyou')){ fireConfetti(); EggManager.unlock('iloveyou-word','typed the magic words ❤️'); buffer=''; }
  });
})();

/* ============================== COUNTDOWN TRIPLE-CLICK EGG ============================= */
(() => {
  const el = $('#countdown-grid');
  let clicks = 0, timer;
  el.addEventListener('click', () => {
    clicks++; clearTimeout(timer); timer = setTimeout(()=>clicks=0, 900);
    if (clicks === 3){ fireConfetti(); EggManager.unlock('countdown-click','mini fireworks, on schedule 🎆'); clicks=0; }
  });
})();

})();
