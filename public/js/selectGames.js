const games = Array.from(document.querySelectorAll(".games"));
console.log(games)

const repeatAnim = () => {
    const currentBg = document.querySelector(".slick-current img");
    const gameBg = document.querySelector("[data-game-bg]")
    gameBg.classList.add("animated", "fadeIn")
    gameBg.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)),url('${currentBg.src}')`;
    console.log(gameBg);
}
setInterval(() => {
    repeatAnim()
}, 4000);