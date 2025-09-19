debugger
let a=10
let b=20
addition(a,b)
let addition=function (data1,data2)
{
    let result=data1+data2
    console.log(`Addition of ${data1}and ${data2}=${result}`);
    //return result
}


console.log(addition(a,b))
