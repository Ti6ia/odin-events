const btn2 = document.querySelector('#btn2');
btn2.onclick = () => alert('Hello World 2');

const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
    alert('Hello World 3');
});

function alertFunction(){
    alert('YAY! YOU DID IT!');
}

const btn5 = document.querySelector('#btn5');
btn5.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});
  

const buttons = document.querySelectorAll('.buttons');

buttons.forEach((button) => {
    button.addEventListener('click', () => alert(button.className));
});
