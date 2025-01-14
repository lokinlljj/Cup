// 初始化粒子效果
particlesJS.load('particles-js', 'js/particles.json', function() {
    console.log('粒子效果初始化成功');
    // 调整粒子效果层级
    const particles = document.getElementById('particles-js');
    particles.style.zIndex = 0;
});

// 页面加载动画
document.addEventListener('DOMContentLoaded', function() {
    // 导航栏动画
    const navbar = document.querySelector('.navbar');
    navbar.style.opacity = '1';
    navbar.style.transform = 'translateY(0)';
    
    // 首页内容动画
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.opacity = '1';
    heroContent.style.transform = 'translateY(0)';
    heroContent.style.transition = 'opacity 1s ease, transform 1s ease';
    
    // 背景图片视差效果
    const heroBg = document.querySelector('.hero-bg');
    window.addEventListener('mousemove', function(e) {
        const x = (window.innerWidth - e.pageX * 8) / 90;
        const y = (window.innerHeight - e.pageY * 8) / 90;
        heroBg.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
});

// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 响应式导航菜单
const mobileMenuBtn = document.createElement('div');
mobileMenuBtn.className = 'mobile-menu-btn';
mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
document.querySelector('.navbar').appendChild(mobileMenuBtn);

mobileMenuBtn.addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});

// 动态加载Font Awesome
const faScript = document.createElement('script');
faScript.src = 'https://kit.fontawesome.com/your-kit-id.js';
faScript.crossOrigin = 'anonymous';
document.head.appendChild(faScript);
