'use strict';

const sons = {
    'A': 'boom.wav',
    'S': 'clap.wav',
    'D': 'hihat.wav',
    'F': 'kick.wav',
    'G': 'openhat.wav',
    'H': 'ride.wav',
    'J': 'snare.wav',
    'K': 'tink.wav',
    'L': 'tom.wav'

}

const divCreate = (text) => { // function to create a div
    const div = document.createElement('div');
    div.classList.add('key');
    div.id = text;
    div.textContent = text;
    document.getElementById('container').appendChild(div);
}

const show = (sons) => {
    Object.keys(sons).forEach(divCreate);
}
const playSounds = (word) => {
    const audio = new Audio(`./sounds/${sons[word]}`);
    audio.play();

}

const effectAdd = (word) => {
    document.getElementById(word)
            .classList.add('active');
}
const effectRemove = (word) => {
    const div = document.getElementById(word);
    const removeActive = () => { 
        div.classList.remove('active');
    }
    div.addEventListener('transitionend',  removeActive);

}

const divActive = (event) => {
    const word = event.type == 'click' ? event.target.id : event.key.toUpperCase();

    const validWord = sons.hasOwnProperty(word);
    
    if(validWord){
        effectAdd(word);
        playSounds(word);
        effectRemove(word);
    }
    
}
show(sons);

document.getElementById('container')
        .addEventListener('click', divActive);

window.addEventListener('keydown',divActive);