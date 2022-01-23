
const RefHeader = document.getElementById('header-title')
RefHeader.style.background = "#ccc"


// Gray background for beer list
const beerList = document.getElementsByClassName('beer-list-item')
for(let i = 0; i < beerList.length; i++){
    beerList[i].style.backgroundColor = '#ccc'
}

// Border for header
const header = document.querySelector('#main-header')
header.style.borderBottom = 'solid 4px black'
header.style.borderTop = 'solid 4px black'
header.style.borderRight = 'solid 4px black'
header.style.borderLeft = 'solid 4px black'
header.style.backgroundColor = '#ccc'


const odd = document.querySelectorAll('li:nth-child(odd)')
const even = document.querySelectorAll('li:nth-child(even)')

for(let i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = '#f4f4f4'
    even[i].style.backgroundColor = 'black'
}

// // parent node
// const beerList = document.querySelector('#beer-list')
// console.log(beerList.parentNode.parentNode)

const button = document.getElementById('button').addEventListener('click', myBeer)

// document.addEventListener("click", myBeer);

// function myBeer() {
//   document.getElementById("woodstock-beer-list").innerHTML = "Beer 1";
// }


// gray background to web page
// document.querySelector('#main').style.backgroundColor = '#ccc'

// Background to list
const listBeer = document.querySelector('#main')
listBeer.style.backgroundColor = '#ccc'

(function myBeer() {
    const old = console.log;
    const logger = document.getElementById('main').addEventListener('click', myBeer);
    console.log = function (message) {
        if (typeof message == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : message) + '<br />';
        } else {
            logger.innerHTML += message + '<br />';
        }
    }
})();



