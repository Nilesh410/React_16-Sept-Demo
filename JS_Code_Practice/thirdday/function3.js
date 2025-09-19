debugger
let a=10
let b=20;

// let addition=function (data1,data2)
// {
//     let result=data1+data2
//     console.log(`Addition of ${data1}and ${data2}=${result}`);
//     //return result
// }

(function(data1,data2){
    let result=data1+data2;
    console.log(`add=${result}`)
    return result
})(a,b);


// console.log(addition(a,b))
