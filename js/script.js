window.addEventListener('DOMContentLoaded', function () {
    let tab = document.querySelectorAll('.info-header-tab'),
        tabContent = document.querySelectorAll('.info-tabcontent'),
        info = document.querySelector('.info-header');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    };
    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            hideTabContent(0);
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', (event) => {
        let target = event.target;
        if (target.className == 'info-header-tab') {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    showTabContent(i);
                    break;
                }
            }
        };
    });

    let deadline = '2020-08-25';

    function countDeadline(endtime) {
        let time = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((time / 1000) % 60),
            minutes = Math.floor((time / 1000 / 60) % 60),
            hours = Math.floor(time / (1000 * 60 * 60));

        return {
            'total': time,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    };

    function startClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds');

        function reloadClock() {
            let time = countDeadline(endtime);
            hours.innerHTML = time.hours;
            minutes.innerHTML = time.minutes;
            seconds.innerHTML = time.seconds;

            if (time.total <= 0) {
                clearInterval(timeInterval);
            }
        };
        reloadClock();
        let timeInterval = setInterval(reloadClock, 1000);
    };
    startClock('timer', deadline);
    // modals
    let btnModalOpen = document.querySelector('.more'),
        btnModalClose = document.querySelector('.popup-close'),
        modal = document.querySelector('.overlay');

    btnModalOpen.addEventListener('click', function () {
        this.classList.add('more-splash');
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    btnModalClose.addEventListener('click', function () {
        modal.style.display = 'none';
        btnModalOpen.classList.remove('more-splash');
        document.body.style.overflow = '';
    });
});