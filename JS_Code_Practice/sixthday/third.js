console.log('Hi-1')
setTimeout(function(){
    console.log('Hi-2')
},5000)
for(let i=0;i<5;i++)
{
    console.log(i);
}
setTimeout(function(){
    console.log('Hi-3')
},1000)

console.log('Hi-4')