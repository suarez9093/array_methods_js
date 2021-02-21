// Variables
// ===================================================
const addUserBtn = document.getElementById('add-user');
const doubleMoneyBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

const userName = document.querySelectorAll('.user-name');
let mainContainer = document.getElementById('main');

// Functions
// ===================================================
async function addUser() {
  const url = 'https://randomuser.me/api';
  let response = await fetch(url);
  let data = await response.json();
  const { name } = data.results[0];
  let money = Math.floor(Math.random() * 1000000);
  let user = {
    name: `${name.first} ${name.last}`,
    money,
  };
  //   console.log('user', user);
  let userContainer = document.createElement('div');
  userContainer.innerHTML = `<div class="user-container"><p class="user-name">${user.name}</p><p class="user-money">$${user.money}</p></div>`;
  console.log(userContainer);
  return mainContainer.appendChild(userContainer);
}

function stringMoneyValueToInt(string) {
  return parseInt(string.innerText.split('$')[1]);
}

function doubleMoney() {
  const userMoney = document.querySelectorAll('.user-money');
  userMoney.forEach((user) => {
    let doubleMoney = stringMoneyValueToInt(user) * 2;
    user.innerText = `$${doubleMoney}`;
    return user;
  });
}

function showOnlyMillionaires(e) {
  const userMoney = document.querySelectorAll('.user-money');
  let userMoneyArray = [...userMoney];
  userMoneyArray.map((user) => {
    if (!(stringMoneyValueToInt(user) >= 1000000)) {
      user.parentElement.style.display = 'none';
    }
  });
}

function sortRichest() {}

function calculateTotalWealth() {}

// Event Listeners
// ===================================================
addUserBtn.addEventListener('click', () => addUser());
doubleMoneyBtn.addEventListener('click', () => doubleMoney());
showMillionairesBtn.addEventListener('click', () => showOnlyMillionaires());
sortBtn.addEventListener('click', () => sortRichest());
calculateWealthBtn.addEventListener('click', () => calculateTotalWealth());
window.addEventListener('DOMContentLoaded', () => {
  addUser();
  addUser();
  //   addUser();
});
