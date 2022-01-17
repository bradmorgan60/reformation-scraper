

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


const odd = document.querySelectorAll('li:nth-child(odd)')
const even = document.querySelectorAll('li:nth-child(even)')

for(let i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = '#ccc'
    even[i].style.backgroundColor = '#f4f4f4'
}

// // parent node
// const beerList = document.querySelector('#beer-list')
// console.log(beerList.parentNode.parentNode)


