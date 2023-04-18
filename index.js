'use strict'

// Variables

const buttonShare = document.querySelector('.js-button-share')
const divShare = document.querySelector('.div-share')
const divStatic = document.querySelector('.div-static')
const spanIcons = document.querySelector('.js-hover-share-icons')

/**
 * 
 * @param {component}
 * is the html element to whom you want to remove display-none class
 */
const removeDisplayNoneClass = (component) => {
    component.classList.remove('display-none')
}

/**
 * 
 * @param {component}
 * is the html element to whom you want to add display-none class
 */
const addDisplayNoneClass = (component) => {
    component.classList.add('display-none')
}

const handleOut = () => {
    addDisplayNoneClass(spanIcons)
}

const handleOver = () => {
    removeDisplayNoneClass(spanIcons)
}

const handleClick = (ev) => {
    ev.preventDefault()
    removeDisplayNoneClass(divShare)
    addDisplayNoneClass(divStatic)
}

buttonShare.addEventListener('mouseout', handleOut)
buttonShare.addEventListener('mouseover', handleOver)
buttonShare.addEventListener('click', handleClick)