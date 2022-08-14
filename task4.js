let block  = document.querySelectorAll('.box_color')

let colorArr = ['#f80000', "#81007f", "#0021f8", "#086917", "#ce8540", "#eee8ac"]

block.forEach((item) =>{
    item.addEventListener("click", () => {
        item.style.background = colorArr[Math.floor(Math.random() * (5 + 1)) ]
    })
})

