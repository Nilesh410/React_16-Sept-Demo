debugger
function higherorder_fun(callback_func)
{
    console.log('I am in higherorderfunction')
    callback_func()
}


higherorder_fun(()=>{
    console.log("Hello I am call back function")
})