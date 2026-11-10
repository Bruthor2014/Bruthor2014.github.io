/* =====================================================
   DADOS DO JOGADOR — edita aqui o teu conteúdo
   ===================================================== */
const player = {
  email: 'ruben.francisco.correia2003@gmail.com',

  // Nível de 1 a 5 (aparece no radar e nas barras)
  skills: [
    { name: 'FRONTEND', level: 5, color: '#ffb100' },
    { name: 'BACKEND', level: 5, color: '#ff5252' },
    { name: 'DATABASES', level: 5, color: '#4fc3f7' },
    { name: 'APIS', level: 4, color: '#66bb6a' },
    { name: 'UI/UX', level: 4, color: '#ff3df2' },
    { name: 'DEVOPS', level: 3, color: '#26c6da' }
  ],

  // Tecnologias agrupadas — altera à vontade
  stack: [
    { group: { pt: 'LINGUAGENS', en: 'LANGUAGES' }, items: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'PHP', 'SQL', 'Python', 'C#', 'C', 'C++'] },
    { group: { pt: 'FRAMEWORKS', en: 'FRAMEWORKS' }, items: ['Node.js', 'Express', 'React', 'Next.js', 'Capacitor'] },
    { group: { pt: 'BASES DE DADOS', en: 'DATABASES' }, items: ['PostgreSQL', 'Supabase'] },
    { group: { pt: 'FERRAMENTAS', en: 'TOOLS' }, items: ['Git', 'GitHub', 'Docker', 'Claude Code', 'Vercel', 'VS Code'] }
  ],

  moves: [
    { name: { pt: 'Combo Fullstack', en: 'Fullstack Combo' }, input: '↓ → + A' },
    { name: { pt: 'Caça-Bugs', en: 'Bug Hunter' }, input: '→ → + B' },
    { name: { pt: 'Deploy Final', en: 'Final Deploy' }, input: '↓ ↓ + START' }
  ],

  bio: {
    pt: [
      'Olá! Sou o <strong>Rúben</strong>, tenho 23 anos e sou developer <strong>fullstack</strong> em Leiria. Escrevi a minha primeira linha de código aos 15 anos e nunca mais parei: o que começou como curiosidade tornou-se a minha paixão.',
      'Comecei pelo curso profissional de sistemas de informática na Escola Dr. Ginestal Machado, em Santarém, e hoje estudo <strong>Engenharia Informática</strong> na Universidade de Leiria e Oeste. Ao longo de <strong>8 anos</strong> aprendi a construir projetos completos de ponta a ponta, como o <strong>Ironbound</strong>, uma plataforma de gestão de ginásios em Node.js, PostgreSQL e React.',
      'Já estagiei como <strong>técnico de informática</strong> no Instituto Politécnico de Santarém e fiz <strong>Erasmus+ em Zagreb</strong>, na Croácia. Fora do código, trabalhei como <strong>técnico de palco</strong> em concertos de artistas como David Carreira e Nemanus, onde aprendi a resolver problemas sob pressão e em equipa. Procuro agora uma oportunidade para subir de nível como developer.'
    ],
    en: [
      "Hi! I'm <strong>Rúben</strong>, a 23-year-old <strong>fullstack</strong> developer based in Leiria, Portugal. I wrote my first line of code at 15 and never stopped: what started as curiosity became my passion.",
      "I started with a vocational course in IT systems at Dr. Ginestal Machado School in Santarém and I'm now studying <strong>Computer Engineering</strong> at the University of Leiria and Oeste. Over <strong>8 years</strong> I've learned to build complete projects end to end, like <strong>Ironbound</strong>, a gym management platform built with Node.js, PostgreSQL and React.",
      "I've interned as an <strong>IT technician</strong> at the Polytechnic Institute of Santarém and did an <strong>Erasmus+ in Zagreb</strong>, Croatia. Outside of code, I've worked as a <strong>stage technician</strong> at concerts for artists such as David Carreira and Nemanus, where I learned to solve problems under pressure and as part of a team. I'm now looking for an opportunity to level up as a developer."
    ]
  },

  experience: {
    pt: [
      'A programar desde os 15 anos',
      'Estágio como técnico de informática no IPSantarém',
      'Erasmus+ no TVZ, em Zagreb (2025/26)',
      'Técnico de palco em concertos ao vivo',
      'À procura da próxima missão como developer'
    ],
    en: [
      'Coding since age 15',
      'IT technician internship at IPSantarém',
      'Erasmus+ at TVZ, Zagreb (2025/26)',
      'Stage technician at live concerts',
      'Looking for my next mission as a developer'
    ]
  },

  // Percurso (mais recente primeiro). type: edu | work
  // highlight = destaque dentro da etapa (ex.: Erasmus dentro da licenciatura)
  journey: [
    {
      type: 'edu',
      date: { pt: '2022 – Atualidade', en: '2022 – Present' },
      title: { pt: 'Engenharia Informática', en: 'Computer Engineering' },
      place: 'Universidade de Leiria e Oeste',
      current: true,
      highlight: {
        tag: 'ERASMUS+',
        date: { pt: 'Out 2025 – Fev 2026', en: 'Oct 2025 – Feb 2026' },
        text: { pt: 'TVZ · Zagreb, Croácia', en: 'TVZ · Zagreb, Croatia' }
      }
    },
    {
      type: 'work',
      date: { pt: 'Fev – Jun 2021 · Out – Dez 2021', en: 'Feb – Jun 2021 · Oct – Dec 2021' },
      title: { pt: 'Estágio · Técnico de Informática', en: 'Internship · IT Technician' },
      place: 'Instituto Politécnico de Santarém'
    },
    {
      type: 'edu',
      date: { pt: '10.º – 12.º ano', en: 'Grades 10 – 12' },
      title: { pt: 'Curso Profissional de Sistemas de Informática', en: 'Vocational Course in IT Systems' },
      place: 'Escola Secundária Dr. Ginestal Machado, Santarém'
    }
  ],

  // Experiências fora da área, mostradas à parte da linha temporal
  sideQuests: [
    {
      date: { pt: 'Jun – Set 2025', en: 'Jun – Sep 2025' },
      title: { pt: 'Técnico de Palco', en: 'Stage Technician' },
      place: { pt: 'Concertos de David Carreira e Nemanus', en: 'Concerts for David Carreira and Nemanus' },
      desc: {
        pt: 'Montagem e apoio técnico em espetáculos ao vivo, em equipa e sob prazos apertados.',
        en: 'Setup and technical support at live shows, as a team and under tight deadlines.'
      }
    }
  ],

  // live = site online, repo = GitHub. Vazios ('') = não aparecem
  projects: [
    {
      name: 'Ironbound',
      subtitle: 'Workout Tracker',
      live: 'https://ironbound.pt',
      repo: 'https://github.com/Bruthor2014/workout-tracker',
      image: 'assets/ironbound.png',
      tags: ['Node.js', 'Express', 'PostgreSQL', 'React', 'Docker'],
      desc: {
        pt: 'Plataforma de gestão de ginásios: treinos, nutrição e composição corporal, com perfis para membros, PTs, nutricionistas e donos. Autenticação JWT, controlo de acessos por função e app Android.',
        en: 'Gym management platform: workouts, nutrition and body composition, with roles for members, trainers, nutritionists and owners. JWT auth, role-based access control and an Android app.'
      }
    }
  ],

  phone: '+351 918 262 428',

  cv: { pt: 'assets/CV-Ruben-Correia-PT.pdf', en: 'assets/CV-Ruben-Correia-EN.pdf' },

  links: [
    { id: 'linkedin', label: 'LinkedIn', icon: 'in', url: 'https://www.linkedin.com/in/r%C3%BAben-correia-4469a825b', display: 'linkedin.com/in/rúben-correia' },
    { id: 'github', label: 'GitHub', icon: '{ }', url: 'https://github.com/Bruthor2014', display: 'github.com/Bruthor2014' }
  ]
};

/* =====================================================
   TRADUÇÕES
   ===================================================== */
const i18n = {
  pt: {
    status: 'CURRÍCULO ONLINE',
    eyebrow: 'ARCADE MODE · CURRÍCULO',
    origin: 'ORIGEM',
    xpValue: '8 ANOS',
    energy: 'ENERGIA',
    pressEnter: 'PRIME <kbd>ENTER</kbd> PARA COMEÇAR',
    back: '← VOLTAR',
    tabAbout: 'SOBRE',
    tabProjects: 'PROJETOS',
    tabContact: 'CONTACTO',
    aboutTitle: 'SOBRE MIM',
    age: 'IDADE',
    city: 'CIDADE',
    focus: 'FOCO',
    attributes: 'ATRIBUTOS',
    inventory: 'INVENTÁRIO · TECH STACK',
    contactText: 'Estudante de Engenharia Informática com 8 anos de código, um estágio e um Erasmus+ no inventário. Pronto para o próximo nível. Vamos falar!',
    tabJourney: 'PERCURSO',
    journeyTitle: 'PERCURSO · ESCOLARIDADE & EXPERIÊNCIA',
    typeEdu: 'EDUCAÇÃO',
    typeWork: 'ESTÁGIO',
    typeErasmus: 'ERASMUS+',
    now: 'EM CURSO',
    typeSide: 'SIDE QUEST',
    inDev: 'EM DESENVOLVIMENTO',
    demo: 'VER ONLINE ▶',
    code: 'CÓDIGO',
    phone: 'TELEMÓVEL',
    call: 'LIGAR',
    cvTitle: 'CURRÍCULO PDF',
    cvDesc: 'Versão para imprimir · 1 página',
    download: 'DESCARREGAR ⬇',
    visit: 'VISITAR ▶',
    soon: 'EM BREVE',
    copy: 'COPIAR',
    copied: 'COPIADO!',
    sendEmail: 'ENVIAR EMAIL',
    docTitle: 'Rúben Correia | Fullstack Developer'
  },
  en: {
    status: 'RESUME ONLINE',
    eyebrow: 'ARCADE MODE · RESUME',
    origin: 'ORIGIN',
    xpValue: '8 YEARS',
    energy: 'ENERGY',
    pressEnter: 'PRESS <kbd>ENTER</kbd> TO START',
    back: '← BACK',
    tabAbout: 'ABOUT',
    tabProjects: 'PROJECTS',
    tabContact: 'CONTACT',
    aboutTitle: 'ABOUT ME',
    age: 'AGE',
    city: 'CITY',
    focus: 'FOCUS',
    attributes: 'ATTRIBUTES',
    inventory: 'INVENTORY · TECH STACK',
    contactText: "Computer Engineering student with 8 years of code, an internship and an Erasmus+ in the inventory. Ready for the next level. Let's talk!",
    tabJourney: 'JOURNEY',
    journeyTitle: 'JOURNEY · EDUCATION & EXPERIENCE',
    typeEdu: 'EDUCATION',
    typeWork: 'INTERNSHIP',
    typeErasmus: 'ERASMUS+',
    now: 'IN PROGRESS',
    typeSide: 'SIDE QUEST',
    inDev: 'IN DEVELOPMENT',
    demo: 'VIEW LIVE ▶',
    code: 'CODE',
    phone: 'PHONE',
    call: 'CALL',
    cvTitle: 'RESUME PDF',
    cvDesc: 'Printable version · 1 page',
    download: 'DOWNLOAD ⬇',
    visit: 'VISIT ▶',
    soon: 'COMING SOON',
    copy: 'COPY',
    copied: 'COPIED!',
    sendEmail: 'SEND EMAIL',
    docTitle: 'Rúben Correia | Fullstack Developer'
  }
};

let lang = 'pt';
try {
  const saved = localStorage.getItem('cv-lang');
  if (saved === 'pt' || saved === 'en') lang = saved;
} catch (e) { /* sem storage */ }

const t = (key) => i18n[lang][key] ?? key;

/* =====================================================
   ELEMENTOS
   ===================================================== */
const $ = (id) => document.getElementById(id);
const enterBtn = $('enterBtn');
const backBtn = $('backBtn');
const selectScreen = $('selectScreen');
const profileScreen = $('profileScreen');

/* =====================================================
   RENDER
   ===================================================== */
function renderRadarChart(container) {
  if (!container) return;
  const skills = player.skills;
  const maxLevel = 5;
  const size = 260;
  const center = size / 2;
  const maxRadius = center - 62;
  const angleStep = (Math.PI * 2) / skills.length;
  const angleAt = (i) => -Math.PI / 2 + i * angleStep;
  const pointAt = (i, value) => {
    const r = (value / maxLevel) * maxRadius;
    return [center + r * Math.cos(angleAt(i)), center + r * Math.sin(angleAt(i))];
  };

  let rings = '';
  for (let ring = 1; ring <= maxLevel; ring++) {
    const pts = skills.map((_, i) => pointAt(i, ring).join(',')).join(' ');
    rings += `<polygon points="${pts}" fill="none" stroke="rgba(255,255,255,${ring === maxLevel ? 0.22 : 0.08})" stroke-width="1" />`;
  }
  const axes = skills.map((_, i) => {
    const [x, y] = pointAt(i, maxLevel);
    return `<line x1="${center}" y1="${center}" x2="${x}" y2="${y}" stroke="rgba(255,255,255,0.12)" stroke-width="1" />`;
  }).join('');
  const data = skills.map((s, i) => pointAt(i, s.level).join(',')).join(' ');
  const dots = skills.map((s, i) => {
    const [x, y] = pointAt(i, s.level);
    return `<circle cx="${x}" cy="${y}" r="3.5" fill="#ffb100" />`;
  }).join('');
  const labels = skills.map((s, i) => {
    const x = center + (maxRadius + 30) * Math.cos(angleAt(i));
    const y = center + (maxRadius + 30) * Math.sin(angleAt(i));
    return `<text x="${x}" y="${y - 5}" text-anchor="middle" class="radar-label">${s.name}</text>
            <text x="${x}" y="${y + 11}" text-anchor="middle" class="radar-score">${s.level * 20}</text>`;
  }).join('');

  container.innerHTML = `
    <svg viewBox="0 0 ${size} ${size}" class="radar-chart" role="img" aria-label="Skills">
      <defs>
        <linearGradient id="radarFill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#ffb100" stop-opacity="0.45" />
          <stop offset="100%" stop-color="#ff3df2" stop-opacity="0.3" />
        </linearGradient>
      </defs>
      ${rings}${axes}
      <g class="radar-shape">
        <polygon points="${data}" fill="url(#radarFill)" stroke="#ffb100" stroke-width="2" stroke-linejoin="round" />
        ${dots}
      </g>
      ${labels}
    </svg>`;
  const power = $('selectPower');
  if (power) power.textContent = skills.reduce((sum, s) => sum + s.level * 20, 0);
}

function renderSkillPips(container) {
  container.innerHTML = player.skills.map((skill) => {
    const bars = Array.from({ length: 5 }, (_, i) => {
      const on = i < skill.level;
      return `<div class="skill-bar${on ? ' filled' : ''}" style="${on ? `background:${skill.color};box-shadow:0 0 8px ${skill.color}80;` : ''}"></div>`;
    }).join('');
    return `<div class="skill-item"><span class="skill-name">${skill.name}</span><div class="skill-bars">${bars}</div><span class="skill-lvl">LV ${skill.level}</span></div>`;
  }).join('');
}

function renderLanguageContent() {
  document.documentElement.lang = lang === 'pt' ? 'pt-PT' : 'en';
  document.title = t('docTitle');

  document.querySelectorAll('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-html]').forEach((el) => { el.innerHTML = t(el.dataset.i18nHtml); });
  document.querySelectorAll('.lang-btn').forEach((b) => b.classList.toggle('active', b.dataset.lang === lang));
  $('cvBtn').href = player.cv[lang];

  $('selectMoves').innerHTML = player.moves
    .map((m) => `<li><span>${m.name[lang]}</span><kbd>${m.input}</kbd></li>`).join('');

  $('profileBio').innerHTML = player.bio[lang].map((p) => `<p>${p}</p>`).join('');
  $('profileExperience').innerHTML = player.experience[lang].map((item) => `<li>${item}</li>`).join('');

  const typeLabel = { edu: t('typeEdu'), work: t('typeWork') };
  const loc = (v) => (typeof v === 'string' ? v : v[lang]);
  $('profileJourney').innerHTML = player.journey.map((j) => `
    <li class="journey-item type-${j.type}${j.current ? ' current' : ''}">
      <span class="journey-node" aria-hidden="true"></span>
      <div class="journey-card">
        <div class="journey-meta">
          <span class="journey-type">${typeLabel[j.type]}</span>
          ${j.date[lang] ? `<span class="journey-date">${j.date[lang]}</span>` : ''}
          ${j.current ? `<span class="journey-now">${t('now')}</span>` : ''}
        </div>
        <h4>${j.title[lang]}</h4>
        <p>${loc(j.place)}</p>
        ${j.highlight ? `
        <div class="journey-highlight">
          <span class="hl-tag">${j.highlight.tag}</span>
          <span class="hl-text">${j.highlight.text[lang]}</span>
          <span class="hl-date">${j.highlight.date[lang]}</span>
        </div>` : ''}
      </div>
    </li>`).join('');

  $('profileSideQuests').innerHTML = player.sideQuests.map((q) => `
    <div class="side-quest">
      <div class="journey-meta">
        <span class="journey-type">SIDE QUEST</span>
        <span class="journey-date">${q.date[lang]}</span>
      </div>
      <h4>${q.title[lang]}</h4>
      <p class="sq-place">${q.place[lang]}</p>
      <p class="sq-desc">${q.desc[lang]}</p>
    </div>`).join('');

  $('profileProjects').innerHTML = player.projects.map((p, i) => {
    const buttons = [
      p.live ? `<a class="project-link" href="${p.live}" target="_blank" rel="noopener">${t('demo')}</a>` : '',
      p.repo ? `<a class="project-link ghost" href="${p.repo}" target="_blank" rel="noopener">${t('code')}</a>` : ''
    ].join('');
    return `
    <article class="project-card${p.image ? ' featured' : ''}">
      <div class="project-thumb${p.image ? ' has-img' : ''}">
        ${p.image ? `<img src="${p.image}" alt="${p.name}" loading="lazy" />` : ''}
        <span>STAGE ${String(i + 1).padStart(2, '0')}</span>
        ${p.live ? '<em class="project-status">● ONLINE</em>' : p.inDev ? `<em class="project-status">${t('inDev')}</em>` : ''}
      </div>
      <div class="project-body">
        <h4>${p.name}</h4>
        <small class="project-sub">${loc(p.subtitle)}</small>
        <p>${p.desc[lang]}</p>
        <div class="tags">${p.tags.map((tag) => `<span>${tag}</span>`).join('')}</div>
        <div class="project-actions">${buttons || `<span class="project-link disabled">${t('soon')}</span>`}</div>
      </div>
    </article>`;
  }).join('');

  const stackEl = $('profileStack');
  stackEl.innerHTML = player.stack.map((g) => `
    <div class="stack-group">
      <p class="stack-label">${g.group[lang]}</p>
      <div class="stack-items">${g.items.map((item) => `<span class="stack-item">${item}</span>`).join('')}</div>
    </div>`).join('');

  const linkCards = player.links.map((l) => l.url
    ? `<a class="link-card" href="${l.url}" target="_blank" rel="noopener"><span class="link-icon">${l.icon}</span><span class="link-text"><strong>${l.label}</strong><small>${l.display}</small></span></a>`
    : `<div class="link-card disabled"><span class="link-icon">${l.icon}</span><span class="link-text"><strong>${l.label}</strong><small>${t('soon')}</small></span></div>`
  ).join('');

  $('profileLinks').innerHTML = `
    <div class="link-card email-card">
      <span class="link-icon">@</span>
      <span class="link-text"><strong>EMAIL</strong><small>${player.email}</small></span>
      <span class="email-actions">
        <a class="mini-btn" href="mailto:${player.email}">${t('sendEmail')}</a>
        <button class="mini-btn ghost" type="button" id="copyEmailBtn">${t('copy')}</button>
      </span>
    </div>
    <div class="link-card email-card">
      <span class="link-icon">☎</span>
      <span class="link-text"><strong>${t('phone')}</strong><small>${player.phone}</small></span>
      <span class="email-actions">
        <a class="mini-btn" href="tel:${player.phone.replace(/\s/g, '')}">${t('call')}</a>
        <a class="mini-btn ghost" href="https://wa.me/${player.phone.replace(/\D/g, '')}" target="_blank" rel="noopener">WHATSAPP</a>
      </span>
    </div>
    ${linkCards}
    <div class="link-card email-card cv-card">
      <span class="link-icon">CV</span>
      <span class="link-text"><strong>${t('cvTitle')}</strong><small>${t('cvDesc')}</small></span>
      <span class="email-actions">
        <a class="mini-btn" href="${player.cv[lang]}" download>${t('download')}</a>
      </span>
    </div>`;

  $('copyEmailBtn').addEventListener('click', async (e) => {
    const btn = e.currentTarget;
    try {
      await navigator.clipboard.writeText(player.email);
      btn.textContent = t('copied');
      setTimeout(() => { btn.textContent = t('copy'); }, 1600);
    } catch (err) { /* clipboard indisponível */ }
  });
}

function setLang(next) {
  lang = next;
  try { localStorage.setItem('cv-lang', lang); } catch (e) { /* sem storage */ }
  renderLanguageContent();
}

document.querySelectorAll('.lang-btn').forEach((btn) => {
  btn.addEventListener('click', () => setLang(btn.dataset.lang));
});

renderRadarChart($('selectSkills'));
renderSkillPips($('profileSkills'));
renderLanguageContent();

/* =====================================================
   NAVEGAÇÃO ENTRE ECRÃS E SEPARADORES
   ===================================================== */
const tabs = [...document.querySelectorAll('.tab')];

function showTab(name) {
  tabs.forEach((tab) => {
    const on = tab.dataset.tab === name;
    tab.classList.toggle('active', on);
    tab.setAttribute('aria-selected', on);
  });
  document.querySelectorAll('.tab-panel').forEach((p) => p.classList.toggle('active', p.dataset.panel === name));
}

const isPhone = () => window.matchMedia('(max-width: 640px)').matches;

tabs.forEach((tab) => tab.addEventListener('click', () => {
  showTab(tab.dataset.tab);
  if (isPhone()) window.scrollTo({ top: 0, behavior: 'smooth' });
}));

function openProfile() {
  selectScreen.classList.remove('active');
  profileScreen.classList.add('show');
  window.scrollTo(0, 0);
}

function closeProfile() {
  profileScreen.classList.remove('show');
  selectScreen.classList.add('active');
  window.scrollTo(0, 0);
}

enterBtn.addEventListener('click', openProfile);
backBtn.addEventListener('click', closeProfile);
$('playerCardBtn').addEventListener('click', openProfile);

document.addEventListener('keydown', (e) => {
  const onSelect = selectScreen.classList.contains('active');
  if (onSelect && e.key === 'Enter') {
    e.preventDefault();
    startMusic();
    openProfile();
  } else if (!onSelect && e.key === 'Escape') {
    closeProfile();
  } else if (!onSelect && (e.key === 'ArrowRight' || e.key === 'ArrowLeft')) {
    const i = tabs.findIndex((tab) => tab.classList.contains('active'));
    const next = (i + (e.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
    showTab(tabs[next].dataset.tab);
  }
});

/* =====================================================
   EFEITOS DO ECRÃ DE SELEÇÃO
   ===================================================== */
const stageHero = $('stageHero');
selectScreen.addEventListener('mousemove', (e) => {
  const rect = selectScreen.getBoundingClientRect();
  const relX = (e.clientX - rect.left) / rect.width - 0.5;
  const relY = (e.clientY - rect.top) / rect.height - 0.5;
  stageHero.style.transform = `perspective(900px) rotateY(${relX * 8}deg) rotateX(${relY * -4}deg)`;
});
selectScreen.addEventListener('mouseleave', () => { stageHero.style.transform = ''; });

const selectTimer = $('selectTimer');
let timerValue = 99;
setInterval(() => {
  if (!selectScreen.classList.contains('active')) return;
  timerValue = timerValue <= 0 ? 99 : timerValue - 1;
  selectTimer.textContent = String(timerValue).padStart(2, '0');
  selectTimer.parentElement.classList.toggle('low', timerValue <= 10);
}, 1000);

// Música ambiente gerada via Web Audio API (sem ficheiro externo)
const muteBtn = document.getElementById('muteBtn');
const volumeSlider = document.getElementById('volumeSlider');

let audioCtx = null;
let masterGain = null;
let musicMuted = false;
let musicStarted = false;
let nextNoteTime = 0;
let stepIndex = 0;
let volumeLevel = volumeSlider ? Number(volumeSlider.value) / 100 : 0.5;

const STEP_DURATION = 0.36;
const STEPS_PER_CHORD = 4;
// Progressão de 8 acordes (Am - F - C - G - Dm - Am - F - G), ~11.5s antes de repetir
const CHORDS = [
  { bass: 110.0, notes: [220.0, 261.63, 329.63, 392.0] },
  { bass: 87.31, notes: [174.61, 220.0, 261.63, 349.23] },
  { bass: 130.81, notes: [261.63, 329.63, 392.0, 440.0] },
  { bass: 98.0, notes: [196.0, 246.94, 293.66, 392.0] },
  { bass: 146.83, notes: [293.66, 349.23, 440.0, 523.25] },
  { bass: 110.0, notes: [220.0, 261.63, 329.63, 392.0] },
  { bass: 87.31, notes: [174.61, 220.0, 261.63, 349.23] },
  { bass: 98.0, notes: [196.0, 246.94, 293.66, 392.0] }
];
// Duas frases melódicas alternadas (por acorde) para quebrar a sensação de loop fixo
const MELODY_PATTERNS = [
  [0, 2, 1, 3],
  [3, 1, 2, 0]
];

function playTone(freq, time, duration, type, peak) {
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.linearRampToValueAtTime(peak, time + 0.03);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);
  osc.connect(gain);
  gain.connect(masterGain);
  osc.start(time);
  osc.stop(time + duration + 0.05);
}

function playPad(freqs, time, duration) {
  freqs.forEach((freq) => {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.linearRampToValueAtTime(0.02, time + 0.5);
    gain.gain.linearRampToValueAtTime(0.0001, time + duration);
    osc.connect(gain);
    gain.connect(masterGain);
    osc.start(time);
    osc.stop(time + duration + 0.05);
  });
}

function scheduler() {
  while (nextNoteTime < audioCtx.currentTime + 0.5) {
    const chordIndex = Math.floor(stepIndex / STEPS_PER_CHORD) % CHORDS.length;
    const stepInChord = stepIndex % STEPS_PER_CHORD;
    const chord = CHORDS[chordIndex];

    if (stepInChord === 0) {
      playPad(chord.notes, nextNoteTime, STEP_DURATION * STEPS_PER_CHORD);
      playTone(chord.bass, nextNoteTime, STEP_DURATION * STEPS_PER_CHORD * 0.95, 'triangle', 0.07);
    }

    if (!(stepInChord === 3 && chordIndex % 2 === 1)) {
      const pattern = MELODY_PATTERNS[chordIndex % MELODY_PATTERNS.length];
      const leadFreq = chord.notes[pattern[stepInChord]] * 2;
      playTone(leadFreq, nextNoteTime, STEP_DURATION * 0.8, 'sine', 0.035);
    }

    nextNoteTime += STEP_DURATION;
    stepIndex++;
  }
}

function startMusic() {
  if (musicStarted) {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    return;
  }
  musicStarted = true;
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  masterGain = audioCtx.createGain();
  masterGain.gain.value = musicMuted ? 0 : volumeLevel;
  masterGain.connect(audioCtx.destination);
  nextNoteTime = audioCtx.currentTime + 0.1;
  scheduler();
  setInterval(scheduler, 150);
}

document.addEventListener('click', startMusic, { once: true });

if (muteBtn) {
  muteBtn.addEventListener('click', () => {
    musicMuted = !musicMuted;
    if (masterGain) masterGain.gain.value = musicMuted ? 0 : volumeLevel;
    muteBtn.classList.toggle('muted', musicMuted);
    muteBtn.textContent = musicMuted ? '🔇' : '🔊';
  });
}

if (volumeSlider) {
  volumeSlider.addEventListener('input', () => {
    volumeLevel = Number(volumeSlider.value) / 100;
    if (masterGain && !musicMuted) masterGain.gain.value = volumeLevel;
  });
}

