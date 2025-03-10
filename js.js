$(document).ready(function(){
    //Adicionando um efeito/animação ao menu 
    $('#cabecalho').css({'transform': 'translateY(0)', 'opacity': '1'},5000); //Mudando a posição do menu para cima e a opacidade para 1
    $('#cabecalho').css({'transition': 'all 0.8s'}); //Adiciona um efeito de transição para o menu
    $('#hover-button').click(function(){
        $('html, body').animate({scrollTop: $('#section-hover-1').offset().top}, 1000); //Adiciona um efeito de rolagem para o topo da página
    });

    //Adicionando um efeito de rolagem para o menu lateral
    

    //Função para alterar a visibilidade entre as áreas da caixa de código
    function visibilityButton(codeVisible){
        if(codeVisible == 'HTML-button'){
            //Alterando a classe do botão HTML
            $('.html-code-area').toggleClass('active'); //Adiciona a classe active

            //Alterando a visibilidade da caixa de código 
            $('.html-code-area').show(); //Esconde a caixa de código HTML
            $('.css-area-code').hide(); //Mostra a caixa de código CSS
            $('.code-area-js').hide(); //Mostra a caixa de código JS
            $('.result-area').hide(); //Mostra a caixa de resultado

            //Alterando valores no CSS da classe code-box
            $('.code-box').css({'min-height': '450px'}); //Muda a altura mínima da caixa de código
        }else if(codeVisible == 'CSS-button'){
            //Alterando a classe do botão CSS
            $('#code-area-css').toggleClass('active'); //Adiciona a classe active

            //Alterando a visibilidade da caixa de código 
            $('.html-code-area').hide(); //Mostra a caixa de código HTML
            $('.css-area-code').show(); //Esconde a caixa de código CSS
            $('.code-area-js').hide(); //Mostra a caixa de código JS
            $('.result-area').hide(); //Mostra a caixa de resultado

            //Alterando valores no CSS da classe code-box
            $('.code-box').css({'min-height': '450px'}); //Muda a altura mínima da caixa de código
        }else if(codeVisible == 'JS-button'){
            //Alterando a classe do botão JS
            $('.code-area-js').toggleClass('active'); //Adiciona a classe active 

            //Alterando a visibilidade da caixa de código 
            $('.html-code-area').hide(); //Mostra a caixa de código HTML
            $('.css-area-code').hide(); //Mostra a caixa de código CSS
            $('.code-area-js').show(); //Esconde a caixa de código JS
            $('.result-area').hide(); //Mostra a caixa de resultado

        }else{
            //Alterando a classe do botão Resultado
            $('.result-area').toggleClass('active'); //Adiciona a classe active

            //Alterando a visibilidade da caixa de código
            $('.html-code-area').hide(); //Mostra a caixa de código HTML
            $('.css-area-code').hide(); //Mostra a caixa de código CSS
            $('.code-area-js').hide(); //Mostra a caixa de código JS
            $('.result-area').show(); //Esconde a caixa de resultado

        }
    }
    
    //Evento de clique para o botão de código html
   $('.html-button').click(function(){ //Quando o botão HTML for clicado  
        visibilityButton('HTML-button'); //Chama a função visibilityButton
    })

   $('.css-button').click(function(){ //Quando o botão CSS for clicado
        visibilityButton('CSS-button'); //Chama a função visibilityButton
    })
    
   $('.js-button').click(function(){ //Quando o botão JS for clicado
        visibilityButton('JS-button'); //Chama a função visibilityButton
    });

   $('.result-button').click(function(){ //Quando o botão Resultado for clicado
        visibilityButton('Result-button'); //Chama a função visibilityButton
    }); 
    
})