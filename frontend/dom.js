const beerList = document.getElementsByClassName('beer-list-item')
const RefHeader = document.getElementById('header-title')

RefHeader.style.background = "#f4f4f4"
// Gray background for beer list
for(let i = 0; i < beerList.length; i++){
    beerList[i].style.backgroundColor = '#f4f4f4'
}