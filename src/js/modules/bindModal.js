import { bodyLock, bodyUnLock } from './bodyLock';

const bindModal = (triggerSelector, modalSelector, closeSelector, activeClass) => {
    const trigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        close = modal.querySelector(closeSelector);

    trigger.forEach(item => {
        item.addEventListener('click', (e) => {
            if (e.target) e.preventDefault();
            bodyLock();
            modal.classList.add(activeClass);
        });
    });

    close.addEventListener('click', () => {
        modal.classList.remove(activeClass);
        bodyUnLock();
    });

    modal.addEventListener('click', (e) => {
        if (e.target.parentNode === modal) {
            modal.classList.remove(activeClass);
            bodyUnLock();
        }
    });
}

export default bindModal;