//Access all images by using tag
const alliamges1=document.images
const alliamges=document.getElementsByTagName('img')

//access all elements using by class name
const allsubheading=document.getElementsByClassName('subheading')
allsubheading[0].innerText="itview solution1"

//access individual ele of the web page using getElementById
const frontendroadmapimage=document.getElementById('frontend-roadmap')


//access element by using query selector and query selector all and parameter by class, id and attribute
const image1=document.querySelector('#frontend-roadmap')
const image2=document.querySelector('[alt="javascript roadmap"]')
const allimages2=document.querySelectorAll('.Images')
const listitems=document.querySelectorAll('li ol')

const imagesurl=[
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1z3WO2y5h7YkHljxIsvwuOxP21OE_8tnedA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8DrfCOPRKpATgeIYL5of9HLyfax0V3GSlfg&s',
    'https://media.istockphoto.com/id/471926619/photo/moraine-lake-at-sunrise-banff-national-park-canada.jpg?s=612x612&w=0&k=20&c=mujiCtVk5QA697SD3d8V8BGmd91-8HlxCNHkolEA0Bo='
]
// allimages2[0].src=imagesurl[0]
// allimages2[1].src=imagesurl[1]
// allimages2[2].src=imagesurl[2]

// for(let i=0;i<allimages2.length;i++)
// {
//     allimages2[i].src=imagesurl[i]
// }

allimages2.forEach((image,index)=>{
    image.src=imagesurl[index]
})

// const subheading1=ul.querySelector('.subheading')