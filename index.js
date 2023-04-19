'use strict'

// Variables

const buttonShare = document.querySelector('.js-button-share')
const divShare = document.querySelector('.div-share')
const triangleShare = document.querySelector('.js-triangle')
const mediaQuery = window.matchMedia('(min-width: 900px)')

const handleMedia = () => {
    // divShare.classList.remove('display-none')
    triangleShare.classList.toggle('display-none')
    divShare.classList.toggle('test-style-active-state-div')
    triangleShare.classList.toggle('test-style-active-state-triangle')
}

const handleClick = (ev) => {
    ev.preventDefault()
    if (mediaQuery.matches) {
        handleMedia()
    }
    divShare.classList.toggle('display-none')
}

mediaQuery.addListener(handleMedia)
buttonShare.addEventListener('click', handleClick)