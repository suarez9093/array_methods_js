// Variables
// ===================================================
const addUserBtn = document.getElementById('add-user');
const doubleMoneyBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');
const userName = document.querySelectorAll('.user-name');
let mainContainer = document.getElementById('main');
let users = [];
// Functions
// ===================================================
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});
async function addUser() {
  // for each
  const url = 'https://randomuser.me/api';
  let response = await fetch(url);
  let data = await response.json();
  const { name } = data.results[0];
  let money = Math.floor(Math.random() * 1000000);
  let user = {
    name: `${name.first} ${name.last}`,
    money,
  };
  users.push(user);
  updateDom();
}

function updateDom(update = users) {
  // Loop over the users array and update the dom with the change
  mainContainer.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';
  update.forEach((user) => {
    const p = document.createElement('p');
    p.classList.add('user');
    p.innerHTML = `<strong>${user.name}</strong> ${formatter.format(
      user.money
    )}`;
    mainContainer.append(p);
  });
}
function doubleMoney() {
  // map over the users array and return a new array with the wealth doubled (map)
  users = users.map((user) => {
    return { ...user, money: user.money * 2 };
  });
  updateDom();
}

function showOnlyMillionaires(e) {
  users = users.filter((user) => user.money >= 1000000);
  updateDom();
}

function sortRichest() {
  // sort method
  console.log(users);
  users.sort((a, b) => b.money - a.money);
  updateDom();
  console.log(users);
}

function calculateTotalWealth() {
  console.log(users);
  const total = users.reduce((acc, user) => {
    return acc + user.money;
  }, 0);
  mainContainer.innerHTML = '<h2><strong>Total</strong> Wealth</h2>';
  const p = document.createElement('p');
  p.innerHTML = `<p>${formatter.format(total)}</p>`;
  mainContainer.append(p);
}

// Event Listeners
// ===================================================
addUserBtn.addEventListener('click', () => addUser());
doubleMoneyBtn.addEventListener('click', () => doubleMoney());
showMillionairesBtn.addEventListener('click', () => showOnlyMillionaires());
sortBtn.addEventListener('click', () => sortRichest());
calculateWealthBtn.addEventListener('click', () => calculateTotalWealth());
window.addEventListener('DOMContentLoaded', () => {
  addUser();
});
