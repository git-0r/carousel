// selecting required DOM elements using queryselector

const container = document.querySelector('.container')
const sliderImagesNodeList = document.querySelectorAll('.slider-image')
const previousBtn = document.querySelector('.btn-previous')
const nextBtn = document.querySelector('.btn-next')

// create array of images from node list
const sliderImages = Array.from(sliderImagesNodeList)

let activeImageIndex = 0

// add "active" class which sets the display property to "block" fot first image when page loads
sliderImages[0].classList.add("active")

// following functions change the active image by switching "active" class
const getNextImage = () => {

    sliderImages[activeImageIndex].classList.remove("active")

    activeImageIndex = activeImageIndex === sliderImages.length - 1 ? 0 : (activeImageIndex + 1)

    sliderImages[`${activeImageIndex}`].classList.add("active")

}

const getPreviousImage = () => {
    sliderImages[activeImageIndex].classList.remove("active")

    activeImageIndex = activeImageIndex < 1 ? sliderImages.length - 1 : activeImageIndex - 1

    sliderImages[activeImageIndex].classList.add("active")
}

// change active image onClick event
nextBtn.addEventListener('click', () => getNextImage())

previousBtn.addEventListener('click', () => getPreviousImage())

// change image continously for infinite rotation using setInterval
setInterval(() => getNextImage(), 2500)

// chage active image using arrow keys when focused
container.addEventListener('keydown', (e) => {

    switch (e.code) {
        case "ArrowLeft": getPreviousImage(); break;
        case "ArrowRight": getNextImage(); break;
    }
})