const sliderItems = document.querySelectorAll('.slider__img-container');
const slider = document.getElementById('slider');
const prevImgBtn = document.getElementById('prevImg');
const nextImgBtn = document.getElementById('nextImg');
const btns = document.getElementById('btns');
let i = 0;
let circleElement;

prevImgBtn.addEventListener('click', () => manualSlider('prev'));
nextImgBtn.addEventListener('click', () => manualSlider('next'));

sliderItems.forEach(() => {
    circleElement = document.createElement('div')
    circleElement.classList.add('circle');
    btns.appendChild(circleElement)
})
const circle = document.querySelectorAll('.circle')
window.addEventListener('load', () => {
    toggleItem(i);
})

const manualSlider = (direction) => {
    if (direction === 'next') {
        i = i === sliderItems.length - 1 ? 0 : i + 1;
    } else {
        i = i === 0 ? sliderItems.length - 1 : i - 1;
    }
    toggleItem(i);
}

circle.forEach((element, index) => {
    element.addEventListener('click', () => toggleItem(index))
})

const toggleItem = (toggleIndex) => {
    i = toggleIndex
    circle.forEach(element => {
        element.classList.remove('circle-active')
        circle[i].classList.add('circle-active')
    })
    slider.style.transform = `translatex(calc(-100% * ${i})`;
}

const automaticSlider = () => {
    setInterval(() => {
        manualSlider('next')
    }, 10000);
}
automaticSlider();