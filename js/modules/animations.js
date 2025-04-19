// Função debounce para otimizar performance
function debounce(func, wait, immediate) {
    let timeout;
    return function(...args) {
        const context = this;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Função para animação de scroll
function animeScroll() {
    const target = document.querySelectorAll('[data-anime]');
    if (!target.length) {
        console.log('Nenhum elemento com data-anime encontrado');
        return;
    }
    const animationClass = 'animate';

    const windowTop = window.scrollY + (window.innerHeight * 0.30);

    target.forEach((element) => {
        if (!element) return;
        const elementTop = element.getBoundingClientRect().top + window.scrollY;
        if (windowTop > elementTop) {
            element.classList.add(animationClass);
        } else {
            element.classList.remove(animationClass);
        }
    });
}
    

// Função para animação do botão ripple
function setupRippleButton() {
    const rippleButton = document.getElementById('ripple-button');
    if (!rippleButton) {
        console.log('Botão ripple não encontrado');
        return;
    }

    $(rippleButton).on('click', function(event) {
        const button = $(this);
        const ripple = $('<span class="ripple"></span>');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        ripple.css({
            width: size,
            height: size,
            left: x,
            top: y
        });

        button.append(ripple);

        ripple.on('animationend', function() {
            $(this).remove();
        });
    });
}

// Função para animação do botão shadow
function setupShadowButton() {
    const shadowButton = document.getElementById('shadowIn-button');
    if (!shadowButton) {
        console.log('Botão shadow não encontrado');
        return;
    }

    $(shadowButton).on('click', function(){
        $(this).toggleClass('shadow-in');
    });
}

// Função para inicializar todas as animações
export function initAnimations() {
    console.log('Inicializando animações...');

    // Configura animação de scroll
    const handleScroll = debounce(animeScroll, 200);
    window.addEventListener('scroll', handleScroll);
    animeScroll(); // Chama uma vez para animar elementos já visíveis

    // Configura animações dos botões
    setupRippleButton();
    setupShadowButton();

    // Adiciona efeito ao menu
    const cabecalho = document.getElementById('cabecalho');
    if (cabecalho) {
        $(cabecalho).css({
            'transform': 'translateY(0)',
            'opacity': '1',
            'transition': 'all 0.8s'
        });
    } else {
        console.log('Elemento cabecalho não encontrado');
    }
} 