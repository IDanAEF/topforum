function mediaArt() {
    try {
        const artBtn = document.querySelector('.media__button'),
              artItems = document.querySelectorAll('.media__articles-item');

        let curr = 0,
            artCount = +document.querySelector('.media__articles').getAttribute('data-count'),
            way = artCount;
        
        function setArts() {
            for (let i = curr; i < way; i++) {
                if (!artItems[i]) {
                    artBtn.classList.add('hide');
                    break;
                }
                artItems[i].classList.remove('hide');
            }
            curr = way;
            way += artCount;
        }

        setArts();

        artBtn.addEventListener('click', () => {
            setArts();
        });
    } catch(e) {
        console.log(e.stack);
    }
}

export default mediaArt;