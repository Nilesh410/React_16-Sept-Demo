debugger
var global_var='I am global variable'
function outerFunction()
{
    let outerVariable='I am outer variable'
    function innerFunction()
    {
        let innerVariable='I am inner variable'
        console.log(outerVariable)
        
        console.log(innerVariable)
    }
    return innerFunction
}
const result=outerFunction()
result()