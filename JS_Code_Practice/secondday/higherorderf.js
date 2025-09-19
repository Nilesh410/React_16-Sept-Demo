debugger
function higherorder(parameter)
{
    console.log(typeof(parameter))
    console.dir(parameter)
    console.log("it is higher order function")
    parameter()
}

function test()
{
    var a=10
    console.log("from call back function",a)
}

higherorder(test)