const user={
    username:"rajiv",
    userid:1234,
    add:{
        city:'pune',
        state:'Maha'
    }
}

const {username,userid,add:{state}} = user
console.log(username,userid,state)

function userIntro({username,userid})
{
    console.log(username,userid);
}
userIntro(user)
