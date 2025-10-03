//Rest Param
const data1=[1,2,3,4]

function add()
{
    return [...arguments].reduce((sum,ele)=>{
       return  sum=sum+ele
    })
}
const result=add(...data1)
console.log(result)