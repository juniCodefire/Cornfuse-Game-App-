const cornfuse_gamer_data = JSON.parse(localStorage.getItem('cornfuse_gamer_data'));
const {token, user} = cornfuse_gamer_data;
console.log(token, user);

const {id, username, image} = user;

