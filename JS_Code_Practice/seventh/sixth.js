//Destrucuturing in jS
///1. array
const colors=['read','blue','yellow','green','orange','black','pink']
// const color1=colors[0]
// const color2=colors[1]
// const color3=colors[2]

 const [color1,color2,color3]=colors   //desctrutruing the array
 //const [, , ,color4]=colors
//  console.log(color4)
const {4:color4}=colors
console.log(color4)