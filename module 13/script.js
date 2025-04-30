const toggleBtn = document.getElementById('toggle');
const menu = document.getElementById('menu');

if (toggleBtn && menu) {
  toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('open');
  });
}

const fruitSelect = document.getElementById('fruitSelect');
const choiceDisplay = document.getElementById('choice');

if (fruitSelect && choiceDisplay) {
  fruitSelect.addEventListener('change', () => {
    const value = fruitSelect.value;
    choiceDisplay.textContent = value ? `You selected: ${value}` : '';
  });
}

