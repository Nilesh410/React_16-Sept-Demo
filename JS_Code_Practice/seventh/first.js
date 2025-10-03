const arr1=[1,2,3,4]
const arr2=[5,6,7,8,9]
const newarray1=arr1.concat(arr2)
console.log(newarray1)
const str="Hello Programmer"

const newarray2=[...arr1,...arr2,...str]
console.log(newarray2)

const user={
    username:"rajiv",
    userid:1234
}
const newuser={...user,city:"Mumbai"}
console.log(newuser);
console.log(user);


