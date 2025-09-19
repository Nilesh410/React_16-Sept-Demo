debugger
let global_var=10

function outerFunction()
{
    let outerVariable='I am outer variable'
    function innerFunction()
    {
        let innerVariable='I am inner variable'
        console.log(outerVariable)
        console.log(global_var)
        console.log(innerVariable)
    }
    innerFunction()
}
outerFunction()