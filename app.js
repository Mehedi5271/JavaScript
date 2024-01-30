// const title = document.getElementById('title')
// title.innerHTML = 'hacked';
// console.log(title);


// const paragraph = document.getElementsByClassName('para') 
// // console.log(paragraph);
// for(let v of paragraph){
//     v.style.color = 'red';
// }
window.onload = function (){
    main();
}

function main(){
    const btn = document.getElementById('click_btn');
    btn.addEventListener('click', function(){
    alert('click kora hoyeche');
   })
}