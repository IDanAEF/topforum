function sponsorsTab() {
    try {
        const tabItems = document.querySelectorAll('.sponsors__clients-tab-item'),
              tabPages = document.querySelectorAll('.sponsors__clients-page'),
              tabArrow = document.querySelector('.sponsors__clients-tab-arrow'),
              tabSpan = document.querySelector('.sponsors__clients-tab span'),
              tabList = document.querySelector('.sponsors__clients-tab-list'),
              tabPlace = document.querySelector('.sponsors__clients-tab');

        function setPage(num = 0) {
            tabPages.forEach(item => item.classList.remove('hide'));
            tabPages.forEach(item => item.classList.add('hide'));
            tabPages[num].classList.remove('hide');

            tabSpan.textContent = tabItems[num].textContent;
        }

        setPage();

        tabPlace.addEventListener('click', () => {
            tabArrow.classList.toggle('active');
            tabList.classList.toggle('hide');
        });

        tabItems.forEach((tab, i) => {
            tab.addEventListener('click', () => {
                setPage(i);
            });
        });

        window.addEventListener('click', (e) => {
            if (!tabList.classList.contains('hide') && 
                !e.target.parentElement.classList.contains('sponsors__clients-tab') && 
                !e.target.classList.contains('sponsors__clients-tab-item') &&
                !e.target.classList.contains('sponsors__clients-tab')) {
                    
                tabArrow.classList.remove('active');
                tabList.classList.add('hide');
            }
        });
    } catch(e) {
        console.log(e.stack);
    }
}

export default sponsorsTab;