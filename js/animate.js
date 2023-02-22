const rect = document.querySelector('.rect');
const pos = document.querySelector('.pos');
const rectPos = {
    top: 45,
    left: 45
}
rect.addEventListener('mouseover', () => {
    
    var ranNum = Math.ceil(Math.random() * 30) * (Math.round(Math.random()) ? 1 : -1)
    var ranNum2 = Math.ceil(Math.random() * 30) * (Math.round(Math.random()) ? 1 : -1)

    rectPos.top += ranNum;
    rectPos.left += ranNum2;
    if (rectPos.top > 90 || rectPos.top < 10) {
        rectPos.top = 50;
    }
    if (rectPos.left > 90 || rectPos.left < 10) {
        rectPos.left = 50;
    }
    rect.style.top = `${rectPos.top}%`;
    rect.style.left = `${rectPos.left}%`;
    pos.innerHTML = `my current position<br>top: ${rectPos.top}%<br> left: ${rectPos.left}%`
    // console.log( )
});

// const container = document.getElementById('container');

// const numCols = Math.ceil(100 / 4); // calculate the number of columns needed to cover 100% of the page
// const numRows = Math.ceil(100 / 4); // calculate the number of rows needed to cover 100% of the page

// for (let i = 0; i < numCols * numRows; i++) {
//   const div = document.createElement('div');
//   div.style.width = '4%';
//   div.style.height = '4%';
//   container.appendChild(div);
// }