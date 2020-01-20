const games = Array.from(document.querySelectorAll(".games"));

const repeatAnim = () => {
	console.log('p')
	//Use the current zoom out class to get it;s image
    const currentBg = document.querySelector(".slick-current .game-image-holder img");
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
}, 8000);

//The Menu tooltip
const savedIcon = document.querySelector('#saved-icon-sty');
const logoutIcon = document.querySelector('#logout-icon-sty');

//The menu div to diactivate the tooltip
const showcaseMenu = document.querySelector('#showcase-menu');

const tooltip = (event, note) => {
    const customTooltip = document.querySelector('#custom-tooltip');

    if(note == 'off') {
        return customTooltip.style.opacity = '0';
    }
    customTooltip.innerHTML = `${note}`;
    customTooltip.style.opacity = '1';

}
savedIcon.addEventListener('mouseover', () => tooltip(event, note='Favorite Games'));
logoutIcon.addEventListener('mouseover', () => tooltip(event, note='Logout Here'))

//remove the tooltip

showcaseMenu.addEventListener('mouseout', () => tooltip(event, note='off'));


//Trigger the favorite and all game load 
const favoriteGamesIcon = document.querySelector('#favorite-games')
const triggerFavouriteGames = (event) => {
     event.preventDefault();
     favoriteGamesIcon.style.background = 'linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), #1c312d';
     allGamesIcon.style.background = 'none';
}

favoriteGamesIcon.addEventListener('click', event => triggerFavouriteGames(event))


//Trigger the all game load 
const allGamesIcon = document.querySelector('#all-games')
const triggerAllGames = (event) => {
     event.preventDefault();  

     favoriteGamesIcon.style.background = 'none';
     allGamesIcon.style.background = 'linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), #1c312d';
}

allGamesIcon.addEventListener('click', event => triggerAllGames(event))

