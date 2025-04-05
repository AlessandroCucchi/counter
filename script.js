let num = 0;

const numberElement = document.querySelector('.numbers')

function updateNumber(){
  numberElement.textContent = num.toString().padStart(6,'0')
}

document.querySelector('.btn-add').addEventListener('click',()=>{
  num++;
  updateNumber()
})

document.querySelector('.btn-subtract').addEventListener('click',()=>{
  if(num>0){
    num--
  }
  updateNumber()
})

document.querySelector('.btn-reset').addEventListener('click',()=>{
  document.querySelector('.auto-front').innerHTML = 'Auto'
  document.querySelector('.auto-front').classList.remove('stop')
  clearInterval(intervalId)
  intervalId= null;
  num = 0;
  updateNumber()
})

let intervalId = null

document.querySelector('.btn-auto').addEventListener('click', () => {
  if (intervalId === null) {
    document.querySelector('.auto-front').innerHTML = 'Stop'
    document.querySelector('.auto-front').classList.add('stop')
    intervalId = setInterval(() => {
      num++;
      updateNumber();
    }, 500);
  } else{
    document.querySelector('.auto-front').innerHTML = 'Auto'
    document.querySelector('.auto-front').classList.remove('stop')
    clearInterval(intervalId);
    intervalId= null;
}
})

let pressTimer;

document.querySelector('.btn-add').addEventListener('pointerdown',()=>{
  pressTimer = setTimeout(() => {
intervalId= setInterval(() => {
  num++;
  updateNumber();
}, 10);
 },1000);
});

document.querySelector('.btn-subtract').addEventListener('pointerdown',()=>{
  pressTimer = setTimeout(() => {
  if (num > 0) {
    intervalId = setInterval(() => {
      if (num > 0) {
        num--;
        updateNumber();
      } else {
        clearInterval(intervalId); 
      }
    }, 10);
  }
  },1000);
});

document.querySelector('.btn-add').addEventListener('pointerleave', () => {
  document.querySelector('.front-add').innerHTML = '+'
  clearTimeout(pressTimer);
  clearInterval(intervalId);
});
document.querySelector('.btn-subtract').addEventListener('pointerleave', () => {
  clearTimeout(pressTimer);
  clearInterval(intervalId);
});


document.querySelector('.btn-add').addEventListener('pointerup', () => {
  clearTimeout(pressTimer);
  clearInterval(intervalId);
  intervalId = null;  
});

document.querySelector('.btn-subtract').addEventListener('pointerup', () => {
  clearTimeout(pressTimer);
  clearInterval(intervalId);
  intervalId = null;  
});
