document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        item.children[1].classList.toggle('arrow-active');
        item.children[2].classList.toggle('content-active');
    })
})