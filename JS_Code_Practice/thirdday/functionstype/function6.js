debugger
const counter=function(){
    let count=0
    
    return function count_inc()
    {
        count++
        return count
    }
}


let counter_value=counter()
console.log(counter_value())