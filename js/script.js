// -------------------------------responsive navbar------------------------------



const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})


// ---------------------------------- sliderImages  -----------------------------



const myslide = document.querySelectorAll('.myslide'),
	  dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 5000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 5000);
}

function slidefun(n) {
	
	let i;
	for(i = 0;i<myslide.length;i++){ 
		myslide[i].style.display = "none";
	}
	for(i = 0;i<dot.length;i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	if(n > myslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myslide.length;
	   }
	myslide[counter - 1].style.display = "block";
	dot[counter - 1].className += " active";
}



 /*--------------------FORMJSON------------------------------*/ 

 function submitData(){
  
  var Email=$('#email').val();
  var password=$('#password').val();
  var msg =$('#text').val();
  
 

   jsonObject={
      "Email":"",
      "password":"",
      "msg":"",
      
   }

   jsonObject.Email=Email;
   jsonObject.password=password;
   jsonObject.msg=msg;
  
   var  str=JSON.stringify(jsonObject);
  document.getElementById('showjson').innerHTML=str;

}



// /* /* ------------------------------- FETCH-------------------------------------------------  */

const postSection = document.querySelector('#posts');
const postTemplate = document.querySelector('#post-template');

getData()
  .catch(err => console.error(err));
  console.log('getData', getData);

async function getData() {
  const postStream = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await postStream.json();
  let i = 0;

  // throw 'Get Data Error';
  // console.log(posts);

  posts.forEach(post => {
    i++;
    if(i < 10) {
      const title = post.title;
      const body = post.body;

      fetch('https://unsplash.it/300/200')
        .then(res => res.blob())
        .then(blob => {
          console.log('blob', blob);
          const newPost = document.importNode(postTemplate.content, true);
          const postTitle = newPost.querySelector('.post__title');
          const postBody = newPost.querySelector('.post__body');
          const postImg = newPost.querySelector('.post__img');

          // throw 'Image Fetch Error';

          postImg.src = URL.createObjectURL(blob);
          postTitle.innerText = title;
          postBody.innerText = body;
          postSection.appendChild(newPost);
        })
        .catch(err => console.error(err));
    }
  })
}



// /* /* ------------------------------- Dark Moood -------------------------------------------------  */


const toggle = document.getElementById('toggledark');
   const body = document.querySelector('body');

toggle.addEventListener('click', function(){

    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background="white";
        body.style.color='black';
        body.style.transition= "2s";
        
    }
    else{
       
        body.style.background="black";
        body.style.color="white";
        body.style.transition= "2s";
       
        
    }
});














