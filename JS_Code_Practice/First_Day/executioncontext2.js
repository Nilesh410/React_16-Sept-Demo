debugger
console.log("a=",a)
var a=10

function display()
{
    console.log("b=",b)
    var b=20
    console.log("a=",a)
    console.log("b=",b)
    two()
}
function two()
{
    var c=30
    console.log('from two','c=',c)
}

display()