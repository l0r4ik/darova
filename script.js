const blocks = document.querySelectorAll('.feture, .price__container');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, {
    threshold: 0.3
});

blocks.forEach(block => observer.observe(block));


const btnYearly = document.getElementById('btnyearly');
const btnMonthly = document.getElementById('btnmonthly');
const priceTitles = document.querySelectorAll('.price__title');

btnMonthly.addEventListener('click', () => {
    btnMonthly.classList.add('active');
    btnYearly.classList.remove('active');

    priceTitles.forEach(title => {
        title.innerHTML = title.dataset.monthly;
    });
});

btnYearly.addEventListener('click', () => {
    btnYearly.classList.add('active');
    btnMonthly.classList.remove('active');

    priceTitles.forEach(title => {
        title.innerHTML = title.dataset.yearly;
    });
});