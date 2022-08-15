const counterText = document.getElementById('counter');
let counter = 0;
document.getElementById('btnPlus').addEventListener('click',()=>{
    counter++;
    counterText.innerText = counter;
})
document.getElementById('btnMinus').addEventListener('click',()=>{
    counter--;
    counterText.innerText = counter;
})
