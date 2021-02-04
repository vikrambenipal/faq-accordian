document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        console.log(item.children[0]);
        item.children[0].classList.toggle('bold');
        item.children[1].classList.toggle('arrow-active');
        item.children[2].classList.toggle('content-active');
    })
})