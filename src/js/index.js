import * as typeformEmbed from '@typeform/embed';

const element = document.querySelector('.contact-btn');

const pop = typeformEmbed.makePopup(
    'https://robertvenanzi.typeform.com/to/us9FQP',
    {
        mode: 'drawer_right',
        hideHeaders: true,
        hideFooters: true
    }
);


element.addEventListener('click', e => {
    e.preventDefault();
    pop.open()
});