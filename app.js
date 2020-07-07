fetch('https://api.github.com/users')
    .then((res) => res.json())
    .then((data) => {
        // console.log(data)
        data.forEach(user => {
            getData(user)
        });
    }).catch((err) => console.log(err))

var topMain = document.querySelector('.top-card');


var getData = (user) => {
    let topCard = document.createElement('div')
    topCard.setAttribute('class', 'top-card')
    let card1 = document.createElement('div')
    card1.setAttribute('class', 'card1')
    const img = document.createElement('img')
    img.setAttribute('src', `${user.avatar_url}`)
    img.setAttribute('class', 'img')

    const name = document.createElement('h4');
    name.setAttribute('id', 'name');
    name.innerHTML = user.login
    const id = document.createElement('span');
    id.setAttribute('id', 'id');
    id.innerHTML = user.id


    card1.appendChild(img)
    card1.appendChild(name)
    card1.appendChild(id)
        //topCard.append(card1)
    topMain.appendChild(card1)
        // console.log(name)

    document.querySelector('body').appendChild(topMain)
}
var input = document.getElementById('text')
const form = document.querySelector('form')
form.addEventListener('keyup', getValue)

function getValue(e) {
    e.preventDefault()

    const card = document.querySelectorAll('.card1')
        //const name = document.getElementById('name')
    inputValue = input.value.trim().toUpperCase();
    for (y = 0; y < card.length; y++) {
        let name = card[y].getElementsByTagName('h4')[0];
        if (name.innerHTML.toUpperCase().indexOf(inputValue) > -1) {
            card[y].style.display = ''
        } else {
            card[y].style.display = 'none'
        }

    }
}