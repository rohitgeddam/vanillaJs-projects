const heading1 = document.querySelector('h1')
const container = document.querySelector('.container')
const sidebar = document.querySelector('aside')

const addNewUser = document.querySelector('#add-new-usr')
const doubleMoney = document.querySelector('#double-money')
const millionare = document.querySelector('#millionare')
const total = document.querySelector('#total')
const main = document.querySelector('main')
const heading2 = document.querySelector('h2')

let data = []

// addUser();
// addUser();
// addUser();


function draw(){
   
    main.innerHTML = `<h2><strong>Person</strong><span>Wealth</span></h2>`
    data.forEach(user => {
        const div = document.createElement('div')
        div.classList.add('person')
        div.innerHTML += `<strong>${user.firstname} ${user.lastname}</strong>
        <span>${user.wealth}</span>`

        main.appendChild(div);

    })
}
async function addUser(){
    const res = await fetch('https://randomuser.me/api/')
    const data = await res.json();
    const user = {
        firstname: data.results[0].name.first,
        lastname: data.results[0].name.last,
        wealth: Math.floor(Math.random() * 1000000)
    }
    addUserToList(user)
}

function addUserToList(user){
    data.push(user)
    draw();

}

function doubleIt(){
    data = data.map(item => ({...item, wealth: item.wealth * 2}))
    draw();
}



addNewUser.addEventListener('click',addUser);
doubleMoney.addEventListener('click',doubleIt)