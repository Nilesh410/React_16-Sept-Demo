//Rest Param
const data1=[1,2,3,4]

function add(...nums)
{
    console.log(nums)
    return nums.reduce((sum,ele)=>{
       return  sum=sum+ele
    })
}
const result=add(...data1)
console.log(result)