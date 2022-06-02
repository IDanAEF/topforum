function registration() {
    try {
        const tabs = document.querySelectorAll('.registration__tab');

        tabs.forEach(tab => {
            const tabItems = tab.querySelectorAll('.registration__tab-item'),
                  tabArrow = tab.querySelector('.registration__tab-arrow'),
                  tabSpan = tab.querySelector('.registration__tab span'),
                  tabList = tab.querySelector('.registration__tab-list');

            function setPage(num = 0) {
                tabSpan.textContent = tabItems[num].textContent;
                document.querySelector('#' + tab.getAttribute('data-inp')).value = tabItems[num].textContent;
            }

            setPage();

            tab.addEventListener('click', () => {
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
                    !e.target.parentElement.classList.contains('registration__tab') && 
                    !e.target.classList.contains('registration__tab-item') &&
                    !e.target.classList.contains('registration__tab')) {
                        
                    tabArrow.classList.remove('active');
                    tabList.classList.add('hide');
                }
            });
        });

        function setBlocks(place, items) {
            items.forEach(item => {
                item.addEventListener('click', () => {
                    items.forEach(it => it.classList.remove('active'));
                    item.classList.add('active');
                    document.querySelector('#' + place.getAttribute('data-inp')).value = item.getAttribute('data-val');
                });
            });
        }

        setBlocks(document.querySelector('.paym'), document.querySelectorAll('.paym span'));
        setBlocks(document.querySelector('.pack'), document.querySelectorAll('.pack span'));
    } catch(e) {
        console.log(e.stack);
    }
}

export default registration;