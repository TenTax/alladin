import { postData } from '../services/requests';
import checkInputs from './checkInputs';


const forms = () => {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        const inputs = form.querySelectorAll('input:not([type="checkbox"]), textarea');

        const clearInputs = () => {
            inputs.forEach(input => {
                input.parentNode.className = 'form__group';
                input.value = '';
            });
        }

        inputs.forEach(input => {
            input.addEventListener('input', () => {
                input.parentNode.className = 'form__group';
            });
        });

        form.addEventListener('submit', e => {
            e.preventDefault();

            if (checkInputs(form)) {
                const messageBlock = createMessageBlock();
                messageBlock.innerHTML = renderFetching();
                form.appendChild(messageBlock);

                const formData = new FormData(form);
                postData('send.php', formData)
                    .then(text => {
                        const json = JSON.parse(text);

                        if (json.result == 'success') {
                            messageBlock.innerHTML = renderSuccess();
                        } else {
                            messageBlock.innerHTML = renderServerError();
                        }
                    })
                    .catch(err => {
                        messageBlock.innerHTML = renderNetworkError();
                    })
                    .finally(() => {
                        clearInputs();
                        setTimeout(() => {
                            messageBlock.remove();
                        }, 5000);
                    })
            }
        });

        function createMessageBlock() {
            const div = document.createElement('div');
            div.className = 'form__message';
            return div;
        }

        function renderFetching() {
            return `
                <div class="form__fetch">
                    <div class="preloader">
                        <div class="preloader__item"></div>
                    </div>
                    <div class="form__sending">Отправка...</div>
                </div>
            `;
        }

        function renderServerError() {
            return `
                <div class="form__fetch form__fetch--error">Ошибка сервера, попробуйте повторить попытку позже...</div>
            `;
        }

        function renderNetworkError() {
            return `
                <div class="form__fetch form__fetch--error">Ошибка соединения, попробуйте перезагрузить страницу и повторить попытку...</div>
            `;
        }

        function renderSuccess() {
            return `
                <div class="form__fetch form__fetch--success">Ваше сообщение успешно отправлено!</div>
            `;
        }
    });
};

export default forms;