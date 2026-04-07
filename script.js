// script.js - Logique interactive du projet web

document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('btn');
  const message = document.getElementById('message');

  const messages = [
    'Bonjour ! Bienvenue sur mon projet web.',
    'Tu as cliqué encore une fois !',
    'JavaScript fonctionne parfaitement.',
    'Projet web simple avec HTML, CSS et JS.',
  ];

  let count = 0;

  btn.addEventListener('click', function () {
    message.textContent = messages[count % messages.length];
    count++;
  });
});
