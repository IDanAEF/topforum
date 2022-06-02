function modals() {
    const modalPlace = document.querySelector('.modal');

    function closeBtnInit(btn, mdlItem) {
        btn.addEventListener('click', () => {
            modalPlace.classList.remove('active');
            mdlItem.classList.remove('active');
            document.querySelector('body').style.overflow = '';
        });
    }

    function showModal(mdlItem) {
        modalPlace.classList.add('active');
        mdlItem.classList.add('active');
        document.querySelector('body').style.overflow = 'hidden';
    }

    modalPlace.addEventListener('click', (e) => {
        if (e.target == modalPlace) {
            modalPlace.classList.remove('active');
            mdlItem.classList.remove('active');
            document.querySelector('body').style.overflow = '';
        }
    });

    //subscribe modal
    try {
        const modalSubs = document.querySelector('.modal__subscribe'),
              modalSubsClose = document.querySelector('.modal__close');

        if (!localStorage.getItem('isOpen')) {
            setTimeout(() => {
                showModal(modalSubs);
                localStorage.setItem('isOpen', 'open');
            }, 15000);
        }

        closeBtnInit(modalSubsClose, modalSubs);
    } catch(e) {
        console.log(e.stack);
    }
}

export default modals;