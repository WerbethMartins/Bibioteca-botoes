// Função para navegação do menu principal
export function menuAnchor(targetId) {
    const target = $(`#${targetId}`);
    const hoverButtonId = 'hover-area';
    const animationButtonId = 'animation-area';

    if (target.length) {
        $('html, body').animate({ scrollTop: target.offset().top - 200 }, 1000); 

        // Remove a borda de todos os títulos antes de adicionar a nova
        $('#hover-title, #animation-title').css({'border-bottom': 'none'});

        // Verifica se o targetId corresponde ao ID da área de hover ou animação
        if (targetId === hoverButtonId) {
            $('#hover-title').css({'border-bottom': '2px solid #646cff'});
        } else if (targetId === animationButtonId) {
            $('#animation-title').css({'border-bottom': '2px solid #646cff'});
        }
    } else {
        console.log(`Elemento com id ${targetId} não encontrado.`);
    }
}

// Função para navegação do menu lateral
export function sideMenuAnchor(targetId, link) {
    const target = $(`#${targetId}`);
    if (target.length) {
        $('html, body').animate({ 
            scrollTop: target.offset().top - 200 
        }, 1000);
        
        // Adiciona efeito visual ao botão clicado
        $('.side-menu-link').removeClass('active');
        $(link).addClass('active');
    }
}

// Função para inicializar toda a navegação
export function initNavigation() {
    // Configuração do menu principal
    $('button').click(function(){
        const targetId = $(this).data('target');
        menuAnchor(targetId);
    });

    $('.side-menu-link').click(function(e){
        e.preventDefault();
        const targetId = $(this).attr('href').substring(1); // Remove o '#' do href
        sideMenuAnchor(targetId, this);

        if(targetId === hoverButtonId){
            $('#hover-title').css('border-bottom', '2px solid #646cff');
        } else if (targetId === animationButtonId){
            $('#animation-title').css('border-bottom', '2px solid #646cff');
        }
    });
} 