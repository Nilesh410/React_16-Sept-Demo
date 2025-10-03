function add()
{
    let sum=0
   for(let i=0;i<arguments.length;i++)
   {
        sum=sum+arguments[i]
        
   }
   console.log(`sum=${sum}`)
}
add(3,4,5,6)