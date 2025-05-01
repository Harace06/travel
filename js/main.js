// 初始化 AOS 動畫
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        once: true
    });

    // 平滑滾動功能
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 處理表單提交
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('感謝您的訊息！我們會盡快回覆您。');
            this.reset();
        });
    }

    // 導航欄滾動效果
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            navbar.classList.remove('navbar-scrolled');
            return;
        }

        if (currentScroll > lastScroll) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
            navbar.classList.add('navbar-scrolled');
        }

        lastScroll = currentScroll;
    });
});