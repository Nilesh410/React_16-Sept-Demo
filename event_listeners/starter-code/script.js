const container=document.querySelector('.container')
const card=document.querySelector('.card')
let count=0;
card.addEventListener('click',()=>{
    const newCard=document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText=++count;
    container.append(newCard)
})
