

//Get the username input spot 
const userNameInsert = document.querySelector('[data-username]') 
const userImageInsert = document.querySelector('[data-user-img]');

//cornfuse-default.png
//Inser into the DOM
userNameInsert.innerHTML = `@${username}`;
userImageInsert.src = `https://res.cloudinary.com/getfiledata/image/upload/${image}`;
