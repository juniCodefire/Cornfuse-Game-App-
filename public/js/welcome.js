const cards = Array.from(document.querySelectorAll('[data-game-brand] [data-game-holder]'));
//leaderBoxesholder
const firstLeaderPlayerBox = document.querySelector('[data-first-leader]');
const currentPlayerBox = document.querySelector('[data-current-player]');
//get the Ranks of the Leader board
const currentPlayerRank = document.querySelector('[data-current-player] div:nth-child(1) h4');
const firstLeaderPlayerRank = document.querySelector('[data-first-leader] div:nth-child(1) h4');
const secondLeaderPlayerRank = document.querySelector('[data-second-leader] div:nth-child(1) h4');
//get the player
const currentPlayer = document.querySelector('[data-current-player] div:nth-child(2) div:nth-child(2) span');
const firstLeaderPlayer = document.querySelector('[data-first-leader] div:nth-child(2) div:nth-child(2) span');
const secondLeaderPlayer = document.querySelector('[data-second-leader] div:nth-child(2) div:nth-child(2) span');
//get the player score
const currentPlayerScore = document.querySelector('[data-current-player] div:nth-child(3)  h4');
const firstLeaderPlayerScore = document.querySelector('[data-first-leader]  div:nth-child(3) h4');
const secondLeaderPlayerScore = document.querySelector('[data-second-leader] div:nth-child(3) h4');

let trap = 1;
const animCard_1 = (card_cover, i) => {
    setTimeout(() => {
        if (i === 0) {
            card_cover.classList.add('flip-card-inner_transform');
        }
    }, 500);
}

const animCard_2 = (card_cover, i) => {
    setTimeout(() => {
        if (i === 4) {
            card_cover.classList.add('flip-card-inner_transform');
            // card.style.transition = "1s all ease";
            setTimeout(() => {
                animManipualate_1(cards);
            }, 2000);
        }
    }, 1500);

}


const animCard_3 = (card_cover, i) => {
    setTimeout(() => {
        if (i === 2) {
            card_cover.classList.add('flip-card-inner_transform')
        }
    }, 7300);

}
const animCard_4 = (card_cover, i) => {
    setTimeout(() => {
        if (i === 3) {
            card_cover.classList.add('flip-card-inner_transform');
            // card.style.transition = "1s all ease";
            setTimeout(() => {
                animManipualate_2(cards);
            }, 2000);
        }
    }, 8300);

}


const animManipualate_1 = (cards) => {
    const card_cover_0 = document.querySelector(`[data-game-cover-0]`);
    const card_cover_4 = document.querySelector(`[data-game-cover-4]`);

    const notify_div = document.querySelector('.notify-block');
    const notify_text = document.querySelector('[data-notify-text]');

    //Update the point 
    const point_number = document.querySelector('.point-number');
    //Add a error red border arrouud the cards
    cards[0].classList.add('error_choice');
    cards[4].classList.add('error_choice');
    cards[0].classList.add('animated', 'shake');
    cards[4].classList.add('animated', 'shake');
    notify_div.style.display = "block";
    notify_text.innerHTML = 'You Lost!';
    point_number.innerHTML = "99pt";

    //Pop out a You lost Modal on the screen

    setTimeout(() => {
        card_cover_0.classList.remove('game_block_1');
        card_cover_4.classList.remove('game_block_2');
        card_cover_0.classList.remove('flip-card-inner_transform');
        card_cover_4.classList.remove('flip-card-inner_transform');
        cards[0].classList.remove('error_choice');
        cards[4].classList.remove('error_choice');
        cards[0].classList.remove('animated', 'shake');
        cards[4].classList.remove('animated', 'shake');
        trap == 1 ? firstLeaderPlayerBox.classList.remove('animated', 'fadeInLeft', 'list-animation-duration') : null;
        trap == 1 ? currentPlayerBox.classList.remove('animated', 'fadeIn') : null;
        trap = 0;
        notify_div.style.display = "none";
        notify_text.innerHTML = '';
    }, 3000);
}

const animManipualate_2 = (cards) => {
    const card_cover_2 = document.querySelector(`[data-game-cover-2]`);
    const card_cover_3 = document.querySelector(`[data-game-cover-3]`);

    const notify_div = document.querySelector('.notify-block');
    const notify_text = document.querySelector('[data-notify-text]');

    //Update the point 
    const point_number = document.querySelector('.point-number');
    //Add a error red border arrouud the cards
    cards[2].classList.add('correct_choice');
    cards[3].classList.add('correct_choice');
    cards[2].classList.add('animated', 'shake');
    cards[3].classList.add('animated', 'shake');
    notify_div.style.display = "block";
    notify_div.style.color = "lime";
    notify_text.innerHTML = 'You Won!';
    switchLeaderBoard(duty = 'add');


    //Pop out a You lost Modal on the screen

    setTimeout(() => {
        card_cover_2.classList.remove('game_block_3');
        card_cover_3.classList.remove('game_block_1');
        card_cover_2.classList.remove('flip-card-inner_transform');
        card_cover_3.classList.remove('flip-card-inner_transform');
        cards[2].classList.remove('correct_choice');
        cards[3].classList.remove('correct_choice');
        cards[2].classList.remove('animated', 'shake');
        cards[3].classList.remove('animated', 'shake');
        notify_div.style.display = "none";
        notify_div.style.color = "tomato";
        notify_text.innerHTML = '';
        point_number.innerHTML = "100pt";
        switchLeaderBoard(duty = 'remove');
    }, 3000);
}

const animationMaster = (cards) => {
    cards.map((card, i) => {
        const card_cover = document.querySelector(`[data-game-cover-${ i }]`);

        animCard_1(card_cover, i);
        animCard_2(card_cover, i);
        animCard_3(card_cover, i);
        animCard_4(card_cover, i);


    });
}


setInterval(() => {
    animationMaster(cards);
}, 14000);
animationMaster(cards);

switchLeaderBoard = (duty) => {
    //replace the first position to jammiegamer
    //fade in the rank
    if (duty == 'add') {
        firstLeaderPlayerRank.classList.add('animated', 'fadeIn');
        //the  username
        firstLeaderPlayer.textContent = 'jamiegamer';
        firstLeaderPlayer.classList.add("animated", 'fadeIn');
        //the scoreupdaate 
        firstLeaderPlayerScore.textContent = `6550`;
        firstLeaderPlayerScore.classList.add("animated", 'fadeIn');
        //Animate First leader box Holder
        firstLeaderPlayerBox.classList.add('animated', 'flash');
        //replace the second position
        secondLeaderPlayerRank.classList.add('animated', 'fadeIn');
        //the username 
        secondLeaderPlayer.textContent = 'trancybnks';
        secondLeaderPlayer.classList.add("animated", 'fadeIn');
        //the score update
        secondLeaderPlayerScore.textContent = '6500';
        secondLeaderPlayerScore.classList.add("animated", 'fadeIn');

        //replace the currrent player status
        currentPlayerRank.textContent = '#1';
        currentPlayerScore.classList.add('animated', 'fadeIn');

        currentPlayerScore.textContent = `6550`;
        currentPlayerScore.classList.add('animated', 'fadein');
        currentPlayerBox.classList.add('animated', 'pulse');
    } else if (duty == 'remove') {
        firstLeaderPlayerRank.classList.remove('animated', 'fadeIn');
        //the  username
        firstLeaderPlayer.textContent = 'trancybnks';
        firstLeaderPlayer.classList.remove("animated", 'fadeIn');
        //the scoreupdaate 
        firstLeaderPlayerScore.textContent = `6500`;
        firstLeaderPlayerScore.classList.remove("animated", 'fadeIn');

        firstLeaderPlayerBox.classList.remove('animated', 'flash');

        //replace the second position
        secondLeaderPlayerRank.classList.remove('animated', 'fadeIn');
        //the username 
        secondLeaderPlayer.textContent = 'jamiegamer';
        secondLeaderPlayer.classList.remove("animated", 'fadeIn');
        //the score update
        secondLeaderPlayerScore.textContent = '6450';
        secondLeaderPlayerScore.classList.remove("animated", 'fadeIn');

        //replace the currrent player status
        currentPlayerRank.textContent = '#2';
        currentPlayerScore.classList.remove('animated', 'fadeIn');
        currentPlayerBox.classList.remove('animated', 'pulse');

        currentPlayerScore.textContent = `6450`;
        currentPlayerScore.classList.remove('animated', 'fadein');
    }

}
//Redirect home 
const home = document.querySelector('#home');

const redirectHome = () => {
    window.location.href = window.location.origin;
}
if(home){
    home.addEventListener('click', redirectHome);
}
//Track Cursor Movement 
const body = document.querySelector('.authentication-body');
const cursor = document.querySelector('.cornfuse_cursor');
trackMouse = (event) => {
    const x = event.pageX;
    const y = event.pageY;

    cursor.style.display = `block`;
    cursor.style.top = `${y}px`;
    cursor.style.left = `${x}px`;

}

body.addEventListener("mousemove", (event) => trackMouse(event));

