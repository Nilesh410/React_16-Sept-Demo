
const arr1=[1,2,3,4]
const arr2=[5,6,7,8,9]
const newarray1=arr1.concat(arr2)
const newarray2=[...arr1,...arr2]
console.log(newarray2)
const user={
    username:"rajiv",
    userid:1234
}
function add()
{
    let sum=0
    console.log(arguments);
   for(let i=0;i<arguments.length;i++)
   {
        sum=sum+arguments[i]
        
   }
   console.log(`sum=${sum}`)
}
//add(...arr1,...arr2)
console.log(...user)