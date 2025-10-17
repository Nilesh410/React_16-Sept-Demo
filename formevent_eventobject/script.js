const usernameInput=document.querySelector('#username')
const paragraph=document.querySelector('p')
const form=document.querySelector('form')

// usernameInput.addEventListener('click',()=>{
//     console.log('cliked event');
// })

// usernameInput.addEventListener('dblclick',()=>{
//     console.log('Double cliked event');
// })
let userinput
// usernameInput.addEventListener('input',(e)=>{
//     console.log(e.target.value)
//     userinput=e.target.value
//     paragraph.innerText=e.target.value;
    
// })

// usernameInput.addEventListener('change',(e)=>{
//     console.log(e.target.value)
//     userinput=e.target.value
//     paragraph.innerText=e.target.value
// })
// usernameInput.addEventListener('blur',(e)=>{
//     console.log(e.type)
//     paragraph.innerText=e.target.value
// })
// usernameInput.addEventListener('focus',(e)=>{
//     console.log(e.type)
//     paragraph.innerText=e.target.value
// })

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log(e)
})