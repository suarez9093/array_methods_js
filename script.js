// Variables
// ===================================================
const addUserBtn = document.getElementById('add-user');
const doubleMoneyBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

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
  console.log(user);
}

function doubleMoney() {}

function showOnlyMillionaires() {}

function sortRichest() {}

function calculateTotalWealth() {}

// Event Listeners
// ===================================================
addUserBtn.addEventListener('click', () => addUser());
doubleMoneyBtn.addEventListener('click', () => doubleMoney());
showMillionairesBtn.addEventListener('click', () => showOnlyMillionaires());
sortBtn.addEventListener('click', () => sortRichest());
calculateWealthBtn.addEventListener('click', () => calculateTotalWealth());
