document.addEventListener('DOMContentLoaded', () => {
  const screens = document.querySelectorAll('.screen');
  const featureButtons = document.querySelectorAll('.feature-btn');
  const backButtons = document.querySelectorAll('.back-btn');
  const loader = document.getElementById('loader');
  const mascotImg = document.getElementById('mascot-img');
  const mascotText = document.getElementById('mascot-text');

  function showLoader() {
    loader.classList.remove('hidden');
  }

  function hideLoader() {
    loader.classList.add('hidden');
  }

  hideLoader();

  function navigate(id) {
    showLoader();
    setTimeout(() => {
      try {
        screens.forEach(s => s.classList.add('hidden'));
        const target = document.getElementById(id);
        if (target) target.classList.remove('hidden');
      } finally {
        hideLoader();
        showRandomTip();
      }
    }, 500);
  }

  featureButtons.forEach(btn => {
    btn.addEventListener('click', () => navigate(btn.dataset.target));
  });

  backButtons.forEach(btn => {
    btn.addEventListener('click', () => navigate('home-screen'));
  });

  const tips = [
    'Stay hydrated! 多喝水',
    'Never share your OTP with anyone. 不要透露一次性密码',
    'Government agencies will not ask for money over phone. 政府不会要求汇款',
    'Try a quick game to keep your mind sharp! 玩小游戏保持头脑灵活',
    'Ignore unknown callers asking for personal info. 不认识的来电不要透露资料'
  ];

  function showRandomTip() {
    mascotText.textContent = tips[Math.floor(Math.random() * tips.length)];
  }

  mascotImg.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="%23ffcb05" stroke="%231a1a1a" stroke-width="4"/><circle cx="35" cy="45" r="5" fill="%231a1a1a"/><circle cx="65" cy="45" r="5" fill="%231a1a1a"/><path d="M35 65 q15 15 30 0" stroke="%231a1a1a" stroke-width="4" fill="none"/></svg>';
  showRandomTip();
  setInterval(showRandomTip, 8000);

  const bgContainer = document.getElementById('bg-pokemon');
  const bgSprites = [
    'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="%23ffcb05" stroke="%231a1a1a" stroke-width="4"/><circle cx="35" cy="45" r="5" fill="%231a1a1a"/><circle cx="65" cy="45" r="5" fill="%231a1a1a"/><path d="M35 65 q15 15 30 0" stroke="%231a1a1a" stroke-width="4" fill="none"/></svg>',
    'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="%2349d967" stroke="%231a1a1a" stroke-width="4"/><circle cx="35" cy="45" r="5" fill="%231a1a1a"/><circle cx="65" cy="45" r="5" fill="%231a1a1a"/><path d="M30 70 q20 -10 40 0 q-20 20 -40 0" fill="%235892a3" stroke="%231a1a1a" stroke-width="3"/></svg>',
    'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="%23f77745" stroke="%231a1a1a" stroke-width="4"/><circle cx="35" cy="45" r="5" fill="%231a1a1a"/><circle cx="65" cy="45" r="5" fill="%231a1a1a"/><path d="M35 65 q15 10 30 0" stroke="%231a1a1a" stroke-width="4" fill="none"/></svg>'
  ];
  for (let i = 0; i < 9; i++) {
    const img = document.createElement('img');
    img.src = bgSprites[i % bgSprites.length];
    img.className = 'bg-poke';
    img.style.left = Math.random() * 100 + '%';
    img.style.top = 100 + Math.random() * 40 + '%';
    img.style.animationDelay = Math.random() * 5 + 's';
    img.style.animationDuration = 15 + Math.random() * 10 + 's';
    bgContainer.appendChild(img);
  }

  const contacts = [
    { name: 'Ah Ma', phone: '91234567' },
    { name: 'Uncle Tan', phone: '98765432' },
    { name: 'Dr Lee', phone: '61234567' }
  ];
  const contactsList = document.getElementById('contacts-list');
  contacts.forEach(c => {
    const li = document.createElement('li');
    li.textContent = `${c.name}: ${c.phone}`;
    li.addEventListener('click', () => alert(`Calling ${c.name} at ${c.phone}...`));
    contactsList.appendChild(li);
  });

  const messages = [
    { from: 'Daughter', text: 'Hi Ma, dinner tonight?', time: '9:00 AM' },
    { from: 'Mei', text: 'Remember to take medicine.', time: '7:00 AM' }
  ];
  const messagesList = document.getElementById('messages-list');
  messages.forEach(m => {
    const li = document.createElement('li');
    li.textContent = `${m.time} - ${m.from}: ${m.text}`;
    messagesList.appendChild(li);
  });

  const weather = { location: 'Singapore', temp: '32\u00B0C', condition: 'Partly Cloudy' };
  const weatherInfo = document.getElementById('weather-info');
  weatherInfo.textContent = `${weather.location}: ${weather.temp}, ${weather.condition}`;

  const reminders = [
    { time: '8:00 AM', text: 'Take medicine', done: false },
    { time: '12:00 PM', text: 'Lunch with Mei', done: false },
    { time: '6:00 PM', text: 'Watch TV with Ah Gong', done: false }
  ];
  const remindersList = document.getElementById('reminders-list');
  reminders.forEach(r => {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = `${r.time} - ${r.text}`;
    const btn = document.createElement('button');
    btn.textContent = 'Done';
    btn.addEventListener('click', () => {
      span.style.textDecoration = 'line-through';
      btn.disabled = true;
    });
    li.appendChild(span);
    li.appendChild(document.createElement('br'));
    li.appendChild(btn);
    remindersList.appendChild(li);
  });

  // Simple memory game
  const symbols = ['⚡', '🍎', '⚡', '🍎'];
  const gameBoard = document.getElementById('game-board');
  symbols.sort(() => Math.random() - 0.5);
  let first = null;
  let lock = false;

  symbols.forEach(sym => {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.symbol = sym;

    const inner = document.createElement('div');
    inner.className = 'card-inner';

    const front = document.createElement('div');
    front.className = 'card-front';
    front.textContent = '?';

    const back = document.createElement('div');
    back.className = 'card-back';
    back.textContent = sym;

    inner.appendChild(front);
    inner.appendChild(back);
    card.appendChild(inner);

    card.addEventListener('click', () => {
      if (lock || card.classList.contains('matched') || card.classList.contains('flip')) return;
      card.classList.add('flip');
      if (!first) {
        first = card;
      } else {
        lock = true;
        if (first.dataset.symbol === card.dataset.symbol) {
          first.classList.add('matched');
          card.classList.add('matched');
          first = null;
          lock = false;
          if (gameBoard.querySelectorAll('.matched').length === symbols.length) {
            setTimeout(() => alert('Great job!'), 500);
          }
        } else {
          setTimeout(() => {
            first.classList.remove('flip');
            card.classList.remove('flip');
            first = null;
            lock = false;
          }, 1000);
        }
      }
    });

    gameBoard.appendChild(card);
  });
});
