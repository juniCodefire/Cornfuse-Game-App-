const games = Array.from(document.querySelectorAll(".games"));
const currentBg_de = document.querySelector(".slick-current img");

const repeatAnim = () => {
	console.log('p')
	//Use the current zoom out class to get it;s image
    const currentBg = document.querySelector(".slick-current img");
    console.log(currentBg)
    //get the website background
    const gameBg = document.querySelector("[data-game-bg]")
    //add fadeIn to the background
    gameBg.classList.add("animated", "fadeIn")
    //replace the background
    gameBg.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)),url('${currentBg.src}')`;

}
//repeat interval depending on the slide speed to simulate flow process
const switchBg = setInterval(() => {
    repeatAnim()
}, 4000);

// //Add a hover event to show play btn

// const showPlayBtn = () => {
// 	clearInterval(switchBg);
// 	currentBg_de.

// }
// showPlayBtn.addEventListener('hover', (event))