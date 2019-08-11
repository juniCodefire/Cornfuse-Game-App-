const cards = Array.from(document.querySelectorAll('[data-game-brand] [data-game-holder]'));
console.log(cards);
// cardValue = {
//     0: ""
// }

const animCard_1 = (card_cover, i) =>
{
    setTimeout(() =>
    {
        if (i === 0)
        {
            card_cover.classList.add('game_block_1');

            setTimeout(() =>
            {
                card_cover.style.visibility = "hidden";
            }, 2000);
        }
    }, 500);
}

const animCard_2 = (card_cover, i) =>
{
    setTimeout(() =>
    {
        if (i === 4)
        {
            card_cover.classList.add('game_block_2');
            // card.style.transition = "1s all ease";
            setTimeout(() =>
            {
                card_cover.style.visibility = "hidden";
                animManipualate_1(cards);
            }, 2000);
        }
    }, 1500);

}


const animCard_3 = (card_cover, i) =>
{
    setTimeout(() =>
    {
        if (i === 2)
        {
            card_cover.classList.add('game_block_3');
            // card.style.transition = "1s all ease";
            setTimeout(() =>
            {
                card_cover.style.visibility = "hidden";
            }, 2000);
        }
    }, 5700);

}
const animCard_4 = (card_cover, i) =>
{
    setTimeout(() =>
    {
        if (i === 3)
        {
            card_cover.classList.add('game_block_1');
            // card.style.transition = "1s all ease";
            setTimeout(() =>
            {
                card_cover.style.visibility = "hidden";
                animManipualate_2(cards);
            }, 2000);
        }
    }, 6500);

}


const animManipualate_1 = (cards) =>
{
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

    setTimeout(() =>
    {
        card_cover_0.classList.remove('game_block_1');
        card_cover_4.classList.remove('game_block_2');
        card_cover_0.style.visibility = "visible";
        card_cover_4.style.visibility = "visible";
        cards[0].classList.remove('error_choice');
        cards[4].classList.remove('error_choice');
        cards[0].classList.remove('animated', 'shake');
        cards[4].classList.remove('animated', 'shake');
        notify_div.style.display = "none";
        notify_text.innerHTML = '';
    }, 3000);
}

const animManipualate_2 = (cards) =>
{
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


    //Pop out a You lost Modal on the screen

    setTimeout(() =>
    {
        card_cover_2.classList.remove('game_block_3');
        card_cover_3.classList.remove('game_block_1');
        card_cover_2.style.visibility = "visible";
        card_cover_3.style.visibility = "visible";
        cards[2].classList.remove('correct_choice');
        cards[3].classList.remove('correct_choice');
        cards[2].classList.remove('animated', 'shake');
        cards[3].classList.remove('animated', 'shake');
        notify_div.style.display = "none";
        notify_div.style.color = "tomato";
        notify_text.innerHTML = '';
        point_number.innerHTML = "100pt";
    }, 3000);
}


const animationMaster = (cards) =>
{
    cards.map((card, i) =>
    {
        const card_cover = document.querySelector(`[data-game-cover-${ i }]`);
        const card_value = document.querySelector(`#game-value-${ i }`);
        console.log(card_value);

        animCard_1(card_cover, i);
        animCard_2(card_cover, i);
        animCard_3(card_cover, i);
        animCard_4(card_cover, i);


    });
}


setInterval(() =>
{
    animationMaster(cards);
}, 12000);
animationMaster(cards);



console.log('confuse App');

