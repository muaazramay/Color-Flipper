const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
btn.addEventListener('click', function () {
    randomNumber = Math.floor(Math.random() * colors.length);
    console.log(randomNumber);
    document.body.style.background = colors[randomNumber];
    color.textContent = colors[randomNumber];
})


// backgroundCol = document.body.style.background;
// backgroundCol = 'red';