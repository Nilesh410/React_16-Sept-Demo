let arr=[23,12,67,44]
const obj={
    s_name:'rajiv',
    s_rollno:12201
}
// for(let i=0;i<arr.length;i++)
// {
//     console.log(arr[i]);
// }

for (const num of arr) {
    if(num>50)
    {
        console.log(num)
        break
    }
}
// for (const [key,value] of Object.entries(obj)) {
//     console.log(key,value)
// }
// for (const value in obj) {
//     console.log(value.s_name,value.s_rollno)

// arr.forEach(function(num,index){
//     console.log(`index ${index}=${num*num}`);
// })

arr.forEach((num,index)=>{
    console.log(`index ${index}=${num*num}`);
})

let result=arr.map((num,index)=> num*num
)
console.log(result);

let result1=arr.filter((num,index)=>num%2==0)
console.log(result1)

let result3=arr.reduce((sum,num)=>{
    return sum=sum+num
},0)
console.log(result3)