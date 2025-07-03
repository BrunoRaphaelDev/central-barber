// ===== MENU MOBILE TOGGLE =====
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    // Trocar ícone do menu com transição suave
    const icon = menuToggle.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.replace('bx-menu', 'bx-x');
    } else {
        icon.classList.replace('bx-x', 'bx-menu');
    }
});

// Fechar menu ao clicar em link e scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Fechar menu mobile ao clicar em um link
        navLinks.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.replace('bx-x', 'bx-menu');

        // Scroll suave para a seção
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const headerOffset = 80; // Altura do header fixo
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== ANIMAÇÃO ON SCROLL =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px"
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.opacity = "0";
            entry.target.style.transform = "translateY(30px)";

            setTimeout(() => {
                entry.target.style.transition = "all 0.6s ease";
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }, 100);

            observer.unobserve(entry.target);
        }
    });
}, observerOptions);


// ===== HEADER SCROLL EFFECT =====
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

  
    // Esconder/mostrar header baseado na direção do scroll (opcional)
    if (currentScroll > lastScroll && currentScroll > 100) {
        // Scroll para baixo - esconder header
        header.style.transform = 'translateY(-100%)';
    } else {
        // Scroll para cima - mostrar header
        header.style.transform = 'translateY(0)';
    }

    lastScroll = currentScroll;
});

// ===== BOTÃO WHATSAPP PULSANTE =====
setInterval(() => {
    const whatsappFloat = document.querySelector('.whatsapp-float');
    whatsappFloat.style.animation = 'pulse 1s';

    setTimeout(() => {
        whatsappFloat.style.animation = '';
    }, 1000);
}, 4000);




 