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
    
// Função para animação do botão back-to-top
function setupBackToTop() {
    const backToTopButton = document.querySelector('.back-to-top');
    if(!backToTopButton){
        console.log('Botão back-to-top não encontrado');
        return;
    }

    // Função para verificar a posição do botão back-to-top
    function checkScroll() {
        const scrollTop = $(window).scrollTop();
        console.log('ScrollTop: ', scrollTop); // Log para verificar o valor do scroll

        if(scrollTop === 0){
            $('#hover-title').css('border-bottom', '2px solid #646cff');
            $('#animation-title').css('border-bottom', 'none');
            $(backToTopButton).hide();
        } else if (scrollTop >= 2070){
            $('#hover-title').css('border-bottom', 'none');
            $('#animation-title').css('border-bottom', '2px solid #646cff');
        } else {
            $(backToTopButton).show();
        }
    }

    // Verifica a posição inicial
    checkScroll();

    // Adiciona um evento de scroll
    $(window).scroll(function(){
        checkScroll();
    });

    // Adiciona um evento de clique
    $(backToTopButton).click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
        $('#hover-title').css('border-bottom', 'none');
        $('#animation-title').css('border-bottom', 'none');
    });
    
}

// Função para animação do botão ripple
function setupRippleButton() {

    const rippleButton = document.querySelector('.ripple-button');
    if (!rippleButton) {
        console.log('Botão ripple não encontrado');
        return;
    }

    console.log('Botão ripple encontrado:', rippleButton);

    $(rippleButton).on('click', function(event) {
        console.log('Botão clicado');
        
        const button = $(this);
        const ripple = $('<span class="ripple"></span>');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        // Verificar a posição do clique
        console.log('Posição do clique:', {x, y});
        console.log('Tamanho do ripple:', size);

        // Remove qualquer ripple existente
        button.find('.ripple').remove();

        ripple.css({
            width: size,
            height: size,
            left: x,
            top: y
        });

        // Adiciona o ripple ao botão
        button.append(ripple);

        // Força a animação
        setTimeout(() => {
            ripple.css('animation', 'ripple-animation 0.6s linear');
        }, 10);

        // Remove o ripple após a animação
        ripple.on('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function() {
            console.log('Animação terminou');
            $(this).remove();
        });
    });
}

// Adiciona um evento para quando novos botões forem adicionados ao DOM
$(document).on('click', '.ripple-button', function(event) {
    const button = $(this);
    const ripple = $('<span class="ripple"></span>');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    // Remove qualquer ripple existente
    button.find('.ripple').remove();

    // Configura o ripple
    ripple.css({
        width: size,
        height: size,
        left: x,
        top: y
    });

    // Adiciona o ripple ao botão
    button.append(ripple);

    // Força a animação
    setTimeout(() => {
        ripple.css('animation', 'ripple-animation 0.6s linear');
    }, 10);

    // Remove o ripple após a animação
    ripple.on('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function() {
        $(this).remove();
    });
});

// Função para animação do botão shadow
function setupShadowButton() {
    // Usamos um seletor mais genérico
    const shadowButton = document.querySelector('.shadowIn-button');
    if (!shadowButton) {
        console.log('Botão shadow não encontrado');
        return;
    }

    console.log('Botão shadow encontrado:', shadowButton);

    $(shadowButton).on('click', function(){
        console.log('Botão shadow clicado');
        $(this).toggleClass('shadow-in');
    });
}

// Adicionando um evento delegado para botões criados dinamicamente
$(document).on('click', '.shadowIn-button', function(){
    console.log('Botão shadow clicado (delegado)');
    $(this).toggleClass('shadow-in');
});

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
    setupBackToTop();

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