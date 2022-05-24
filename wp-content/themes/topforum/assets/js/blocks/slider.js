function slider() {
    const sliderPlace = document.querySelectorAll('.slider-place');

    sliderPlace.forEach(sliderRow => {
        const slider = sliderRow.querySelector('.slider-row'),
              sliderItems = sliderRow.querySelectorAll('.slider-item'),
              leftArrow = sliderRow.querySelectorAll('.slider-left'),
              rightArrow = sliderRow.querySelectorAll('.slider-right');
        
        slider.style.width = `${sliderItems.length * 100}%`;

        let itemWidth = sliderItems[0].clientWidth + +window.getComputedStyle(sliderItems[0]).marginRight.replace(/[a-zа-яё]/gi, ''),
            count = 0;
    
        if (sliderItems.length <= 1) {
            leftArrow.forEach(arr => arr.remove());
            rightArrow.forEach(arr => arr.remove());
        }
    
        leftArrow.forEach(arr => {
            arr.addEventListener('click', () => {
                count == 0 ? count = sliderItems.length - 1 : count--;
                slider.style.transform = `translateX(-${count * itemWidth}px)`;
            });
        });
    
        rightArrow.forEach(arr => {
            arr.addEventListener('click', () => {
                count == sliderItems.length - 1 ? count = 0 : count++;
                slider.style.transform = `translateX(-${count * itemWidth}px)`;
            });
        });
    
        let startPos = 0;
    
        slider.addEventListener('touchstart', (e) => {
            startPos = e.changedTouches[0].screenX;
        });
    
        slider.addEventListener('touchend', (e) => {
            if (startPos - e.changedTouches[0].screenX > 150) {
                count == sliderItems.length - 1 ? count = 0 : count++;
                slider.style.transform = `translateX(-${count * itemWidth}px)`;
            } else if (startPos - e.changedTouches[0].screenX < 150) {
                count == 0 ? count = sliderItems.length - 1 : count--;
                slider.style.transform = `translateX(-${count * itemWidth}px)`;
            }
        });
    });
}

export default slider;