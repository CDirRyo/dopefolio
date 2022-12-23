const container = document.querySelector('.project-details__showcase-img-cont')
const image = document.querySelector('.project-details__showcase-img')
let containerHeight = container.clientHeight;

window.addEventListener('resize', () => {
    containerHeight = container.clientHeight;
})

image.addEventListener('mouseover', () => {
    const height = image.clientHeight;
    image.style.transform = `translateY(${containerHeight - height}px)`
})

image.addEventListener('mouseout', () => {
    image.style.transform = `translateY(0)`
});