function showMessage(text){
 const box=document.getElementById('message');
 box.textContent=text;
 box.classList.add('show');
 setTimeout(()=>box.classList.remove('show'),2500);
}
