const container = document.querySelector('.projects__row-img-cont')
const images = document.getElementsByClassName('projects__row-img')
let containerHeight = container.clientHeight;

window.addEventListener('resize', () => {
    containerHeight = container.clientHeight;
})

for (let i = 0; i < images.length; i++) {
    const image = images[i];
    image.addEventListener('mouseover', () => {
        const height = image.clientHeight;
        image.style.transform = `translateY(${containerHeight - height}px)`
    })
  
    image.addEventListener('mouseout', () => {
        image.style.transform = `translateY(0)`
    });
}
