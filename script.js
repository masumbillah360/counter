const counterText = document.getElementById('counter');
let counter = 0;
document.getElementById('btnPlus').addEventListener('click',()=>{
    counter++;
    counterText.innerText = counter;
    document.getElementById('btnMinus').removeAttribute('disabled',true);
    
})
document.getElementById('btnMinus').addEventListener('click',()=>{
    
    if (counterText.innerText == 1) {
        document.getElementById('btnMinus').setAttribute('disabled',true);
    }
    counter--;
    counterText.innerText = counter;
})
