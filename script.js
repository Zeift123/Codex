document.addEventListener('DOMContentLoaded', () => {
  const screens = document.querySelectorAll('.screen');
  const featureButtons = document.querySelectorAll('.feature-btn');
  const backButtons = document.querySelectorAll('.back-btn');

  featureButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.dataset.target);
      screens.forEach(s => s.classList.add('hidden'));
      target.classList.remove('hidden');
    });
  });

  backButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      screens.forEach(s => s.classList.add('hidden'));
      document.getElementById('home-screen').classList.remove('hidden');
    });
  });

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
});
