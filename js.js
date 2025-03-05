$(document).ready(function(){
    //Adicionando um efeito/animação ao menu 
    $('#cabecalho').css({'transform': 'translateY(0)', 'opacity': '1'},5000); //Mudando a posição do menu para cima e a opacidade para 1
    $('#cabecalho').css({'transition': 'all 0.8s'}); //Adiciona um efeito de transição para o menu
    $('#hover-button').click(function(){
        $('html, body').animate({scrollTop: $('#section-hover-1').offset().top}, 1000); //Adiciona um efeito de rolagem para o topo da página
    });

    //Adicionando um efeito de rolagem para o menu lateral
    

    //Função para alterar a visibilidade entre os botões da caixa de código
    function buttonsShow(showButton){

    }
    
   
    
})