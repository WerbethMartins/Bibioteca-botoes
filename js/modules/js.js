// Função principal

$(document).ready(function(){   

    // Adicionando um efeito/animação ao menu 
    $('#cabecalho').css({'transform': 'translateY(0)', 'opacity': '1'},5000); //Mudando a posição do menu para cima e a opacidade para 1
    $('#cabecalho').css({'transition': 'all 0.8s'}); //Adiciona um efeito de transição para o menu


    // Lógica para animação ancora do menu principal

    function menuAnchor(targetId) {
        const target = $(`#${targetId}`); // Pega o elemento alvo
        const hoverButtonId = 'hover-area'; // ID da área de hover
        const animationButtonId = 'animation-area'; // ID da área de animação

        if (target.length) {
            $('html, body').animate({ scrollTop: target.offset().top - 200 }, 1000); 

            // Remove a borda de todos os títulos antes de adicionar a nova
            $('#hover-title, #animation-title').css({'border-bottom': 'none'});

            // Verifica se o targetId corresponde ao ID da área de hover ou animação
            if (targetId === hoverButtonId) {
                $('#hover-title').css({'border-bottom': '2px solid #646cff'}); // Adiciona uma borda inferior ao título de hover
            } else if (targetId === animationButtonId) {
                $('#animation-title').css({'border-bottom': '2px solid #646cff'}); // Adiciona uma borda inferior ao título de animação
            }
        } else {
            console.log(`Elemento com id ${targetId} não encontrado.`); // Caso o elemento não seja encontrado
        }
    }

    $(window).scroll(function() {
        if ($(this).scrollTop() === 0) {
            $('#hover-title, #animation-title').css('border', 'none'); // Remove a borda
        } else {
            $('#animation-title').css('border-bottom', '2px solid #646cff'); // Adiciona a borda novamente
        }
    });

    // Lógica para animação ancora do menu lateral
    $('.side-menu button').click(function(){
        const targetId = $(this).data('target');
        sideMenuAnchor(targetId);
    });

    function sideMenuAnchor(targetId) {
        const target = $(`#${targetId}`);
        if (target.length) {
            $('html, body').animate({ 
                scrollTop: target.offset().top - 100 
            }, 800);
            
            // Adiciona efeito visual ao botão clicado
            $('.side-menu a').removeClass('active');
            $(this).addClass('active');
        }
    }

    //Refatoração do código HTML
    const buttons = [
        {
            title: "Shadow hover effect",
            html: `
            <section id="hover-area">
                <section id="shadow-hover" class="button-area">
                    <button class="animated-button shadow-hover-button">SHADOW HOVER</button>
                </section>
            </section>`,
            css: `.shadow-hover-button {
                        border: 1px solid #000;
                        box-shadow: 0 0 0;
                        transition: all 200ms;
                    }
                    .shadow-hover-button:hover {
                        transform: translateY(-10px);
                        box-shadow: 0 12px 1px #141211;
                    }
                    .shadow-hover-button:active {
                        transform: translateY(10px);
                        box-shadow: 0 0 0;
                    }`
        },
        {
            title: "Hover for underline",
            html: `
            <section id="hover-underline" class="button-area">
                <button class="hover-underline">HOVER UNDERLINE</button>
            </section>`,
            css: `.hover-underline {
                font-size: 2rem;
                color: #ffffff;
                position: relative;
                display: inline-block;
            }
            .hover-underline::after,
            .hover-underline::before {
                content: '';
                position: absolute;
                width: 100%;
                height: 2px;
                background: linear-gradient(to right, #8374E3, #ffffff);
                bottom: -5px;
                left: 0;
                transform: scaleX(0);
                transform-origin: right;
                transition: transform 0.4s ease-out;
            }
            .hover-underline::before {
                top: -5px;
                transform-origin: left;
            }
            .hover-underline:hover::after,
            .hover-underline:hover::before {
                transform: scaleX(1);
            }`
        },
        {
            title: "Hover glitch",
            html: `<section id="hover-glitch" class="button-area"><button class="animated-button hover-glitch glitch" 
            data-animation="hover glitch">GLITCH EFFECT</button></section>`,
            css: `.hover-glich{
                position: relative;
                cursor: pointer;
                background: none;
                border: 2px solid #646cff;
                border-radius: 8px;
                color: #ffffff;
                font-size: 1rem;
                font-weight: 600;
                overflow: hidden;
                transition: all 0.3s ease;
            }
            .glitch{
                text-shadow: 0.05em 0 0
                rgba(255, 0, 0, 0.75)
                -0.025em -0.05em 0 rgba(0, 0, 255, 0.75)
                0.025em 0.05em 0 rgba(0, 255, 0, 0.75);
            }   
            .glitch:hover {
                animation: glitch 0.03s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
            }
            @keyframes glitch {
                0% {
                    transform: translate(0);
                }
                20% {
                    transform: translate(-4px, 4px);
                }
                40% {
                    transform: translate(-4px, -4px);
                }
                60% {
                    transform: translate(4px, 4px);
                }
                80% {
                    transform: translate(4px, -4px);
                }
                100% {
                    transform: translate(0);
                }
            }`    
        },
        {
            title: "Liquid fill hover",
            html: `<section id="liquid-fill-hover" class="button-area">
            <button class="animated-button liquid-fill-hover liquid" 
            data-animation="hover liquid fill">LIQUID FILL</button></section>`,
            css: `.liquid-fill-hover{
                position: relative;
                cursor: pointer;
                background: none;
                color: #ffffff;
                font-size: 1rem;
                font-weight: 600;
                border: 2px solid #646cff;
                border-radius: 8px;
                overflow: hidden;
                transition: all 0.3s ease;
            }
                
            .liquid {
                background: linear-gradient(#646cff 0 0) no-repeat
                calc(200% - var(--p, 0%)) 100% / 200% var(--p, 0.2em);
                transition: 0.3s var(--t, 0s), background-position 0.3s calc(0.3s - var(--t, 0s));
            }
                
            .liquid:hover {
                --p: 100%;
                --t: 0.3s;
                color: #fff;
            }`
        }, 
        {
            title: "ripple effect",
            html: `
                <section id="animation-area">
                    <section id="ripple-effect" class="button-area">
                        <button id="ripple-button" class="animated-button ripple-button ripple-effect" 
                        data-animation="animation ripple">RIPPLE EFFECT</button>
                    </section>
                </section>`,
            css: `.ripple-button {
                position: relative;
                overflow: hidden;
                cursor: pointer;
                background-color: #646cff;
                border: none;
                border-radius: 5px;
                color: #fff;
                outline: none;
                font-size: 1rem;
                padding: 10px 20px;
                transition: background-color 0.3s;
                }
                
            .ripple-button:focus {
                outline: none;
            }
                
            .ripple-button:hover {
                background-color: #4a54f1; /* Cor ao passar o mouse */
            }
                
            .ripple{
                position: absolute;
                background-color: rgba(255, 255, 255, 0.6);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple-animation 0.6s linear;
            }
                
            @keyframes ripple-animation {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }`,
            javascript: `// Animação do botão ripple em Javascript
                $('#ripple-button').on('click', function(event) {
                const button = $(this);
                const ripple = $('<span class="ripple"></span>');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = event.clientX - rect.left - size / 2;
                const y = event.clientY - rect.top - size / 2;
        
                ripple.css({
                    width: size, height: size,left: x, top: y 
                });
        
                button.append(ripple);
        
                ripple.on('animationend', function() {
                    $(this).remove();
                });
            });`
        },
        {
            title: "Shadow inside",
            html: `<section id="shadow-in" class="button-area">
            <button id="shadowIn-button" class="animated-button 
            shadowIn-button shadow-in">SHADOW INSIDE</button></section>`,
            css: `.shadowIn-button {
                position: relative;
                overflow: hidden;
                cursor: pointer;
                background: none;
                border: 2px solid #646cff;
                border-radius: 5px;
                color: #fff;
                font-size: 1rem;
                padding: 10px;
                box-shadow: 5px 5px 3px #646cff;
                transition: box-shadow 0.3s ease;
                }
                
            .shadowIn-button:active {
                box-shadow: 0 0 0;
            }
                
            .shadow-in {
                box-shadow: 15px 10px 5px rgb(135, 141, 250) inset;
                transition: all 0.5s ease-out;
            }`,
            javascript: `// Animação do botão shadow-in em Javascript
                $('#shadowIn-button').on('click', function(){
                //Adicionando a classe shadow-in ao botão
                $(this).toggleClass('shadow-in');
            });`

        }, 
        {
            title: "Pulse button",
            html: `<section id="pulse-button class="button-area">
            <button class="animated-button pulse-button pulse" 
            data-animation="pulse button">PULSE BUTTON</button></section>`,
            css: `.pulse-button {
            position: relative;
            cursor: pointer;
            border: none;
            color: #fff;
            font-size: 16px;
            padding: 10px 20px;
            margin: 10px;
            transition: all 0.3s ease;
            }

            .pulse {
                background-color: #3498db;
                color: white;
                animation: pulse 1.5s infinite;
            }

            @keyframes pulse {
                0% {
                    transform: scale(1);
                    box-shadow: 0 0 0 rgba(52, 152, 219, 0.7);
                }
                50% {
                    transform: scale(1.1);
                    box-shadow: 0 0 0 rgba(52, 152, 219, 0.5);
                }
                100% {
                    transform: scale(1);
                    box-shadow: 0 0 0 rgba(52, 152, 219, 0);   
                }
            }`
        }, 
        {
            title: "Switch button",
            html: `<section id="switch-button" class="button-area">
            <div class="animated-button switch-button switch" 
            data-animation="switch button">
                <label class="switch-label">
                    <input type="checkbox" id="switch-input" class="checkbox">
                    <div class="slide"></div>
                </label>
            </div></section>`,
            css: `.switch-button {
                position: relative;
                --light: #d8dbe0;
                --dark: #28292c;
                --link: rgb(27, 129, 112);
                --link-hover: rgb(24, 94, 82);
                width: 100px;
                height: 50px;

            }
            .switch-label {
                position: absolute;
                cursor: pointer;
                background-color: var(--dark);
                border: 1px solid var(--dark);
                border-radius: 25px;
                width: 100%;
                height: 50px;
                transform: translate(-50px, -30px);
                box-shadow: 2px 2px 3px #000;
            }
            .checkbox {
                position: absolute;
                display: none;
            }
            .slide {
                position: absolute;
                border-radius: 25px;
                -webkit-transition: 0.3s;
                width: 100%;
                height: 100%;
                transition: 0.3s;
            }
            .checkbox:checked ~ .slide {
                transform: translateX(0px);
                background-color: var(--light);
            }
            .slide::before{
                content: "";
                position: absolute;
                background-color: var(--dark);
                border-radius: 50%;
                -webkit-box-shadow: inset 12px -4px 0px 0px var(--light);
                -webkit-transition: 0.3s;
                top: 10px;
                left: 25px;
                width: 30px;
                height: 30px;
                box-shadow: inset 12px -4px 0px 0px var(--light);
                transition: 0.3s;
            }
            .checkbox:checked ~ .slide::before {
                -webkit-transform: translateX(50px);
                -ms-transform: translateX(50px);
                -webkit-box-shadow: none;
                background-color: var(--dark);
                transform: translateX(50px);
                box-shadow: none;
            }
            `
        }
    ];

    const gallery = document.getElementById('button-gallery');

    buttons.forEach(button => {
        const section = document.createElement('section');
        section.className = 'code-box hover-box';
        section.setAttribute('data-anime', 'right'); // Adicionando atributo data-anime
        section.setAttribute('data-anime-duration', '0.5s'); // Adicionando atributo data-anime-duration
        section.setAttribute('data-anime-delay', '0.2s'); // Adicionando atributo data-anime-delay
        section.setAttribute('data-anime-easing', 'ease-in-out'); // Adicionando atributo data-anime-easing
        section.innerHTML = button;

        let navButtons = `
        <nav class="nav-buttons">
            <button  id="html-button" class="code-button html-button" aria-label="HTML">HTML</button>
            <button  id="css-button" class="code-button css-button" aria-label="CSS">CSS</button> |
            <button  id="result-button" class="code-button result-button" aria-label="Resultado">RESULT</button>
         `;

        //Adicionando o botão js apenas se houver código js
        if(button.javascript){
            navButtons += `<button id="js-button" class="code-button js-button area-label="JS">JS</button>`; 
        }

        navButtons += `</nav>`; //Fechando a tag nav
        
        section.innerHTML = ` 
            <h3 id="code-title" class="code-title">${button.title}</h3>
            ${navButtons}
            <section id="html-code-area" class="html-code-area html-code code-invisible code-area">
                <h3>Código HTML</h3>
                <pre><code></code></pre>
            </section>
            <section id="css-code-area" class="css-area-code css-code code-invisible code-area">
                <h3>Código CSS</h3>
                <pre><code></code></pre>
            </section>
            <section id="js-code-area" class="js-area-code js-code code-invisible code-area">
                <h3>Código JS</h3>
                <pre><code></code></pre>
            </section>
            <section id="result-area" class="result-area">
                ${button.html}
            </section>
        `;

        // Selecionando os elementos de código e definindo o conteúdo
        const htmlCodeElement = section.querySelector('.html-code-area code');
        const cssCodeElement = section.querySelector('.css-area-code code');
        const jsCodeElement = section.querySelector('.js-area-code code');

        htmlCodeElement.textContent = button.html; // Usando textContent para evitar interpretação
        cssCodeElement.textContent = button.css; // Usando textContent para evitar interpretação
        jsCodeElement.textContent = button.javascript || ''; // Usando textContent para evitar interpretação

        gallery.appendChild(section);
    });

    //Area para criar as animações dos botões
    $('#ripple-button').on('click', function(event) { //First Button -- Ripple Effect
        const button = $(this);
        const ripple = $('<span class="ripple"></span>');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        ripple.css({
            width: size, height: size,left: x, top: y 
        });

        button.append(ripple);

        ripple.on('animationend', function() {
            $(this).remove();
        });
    });

    //Second Button -- Shadow inside
    $('#shadowIn-button').on('click', function(){
        //Adicionando a classe shadow-in ao botão
        $(this).toggleClass('shadow-in');
    })

    //Animação dos elementos da main
    const debounce = function(func, wait, immediate) {
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
    };
      
        const target = document.querySelectorAll('[data-anime]');
        const animationClass = 'animate';
      
        function animeScroll() {
            const windowTop = window.pageYOffset + (window.innerHeight * 0.30);
            let firstInvisible = true; // Flag para controlar o primeiro elemento invisível
        
            target.forEach((element) => {
                if (windowTop > element.offsetTop) {
                    element.classList.add(animationClass);
                    if (firstInvisible) {
                        // Se o elemento está visível e é o primeiro invisível, não o esconda
                        firstInvisible = true; 
                    } else {
                        // Se não é o primeiro invisível, remova a classe de animação
                        element.classList.remove(animationClass);
                    }
                } else {
                    // Se o elemento não está visível, mantenha-o invisível
                    element.classList.remove(animationClass);
                }
            });
        }
        
        animeScroll(); // Chama a função animeScroll para animar os elementos que já estão visíveis na tela
        
        const handleScroll = debounce(animeScroll, 200);
        
        if (target.length) { // Condição para verificar se o elemento existe na página 
            window.addEventListener('scroll', handleScroll);
        }

        function visibilityButton(codeVisible) {
            // Objeto criado para mapeia os botões para suas respectivas áreas
            const areas = {
                'html-button': '.html-code-area',
                'css-button': '.css-area-code',
                'js-button': '.js-area-code',
                'result-button': '.result-area'
            };
        
            // Ocultando todas as áreas de código e resultado
            $('.html-code-area, .css-area-code, .js-area-code, .result-area').hide();
            
            // Remove a classe 'active' de todos os botões
            $('.code-button').removeClass('active');
        
            // Condição para verificar se o botão clicado é um dos botões de código
            if (areas[codeVisible]) {
                // Mostra a área correspondente e adiciona a classe 'active' ao botão
                $(areas[codeVisible]).show().addClass('active');
            } else {
                $('.result-area').show().addClass('active');
            }
        
            // Altera a altura mínima da caixa de código
            $('.code-box').css({'min-height': '450px'});
        }
        
        $('.code-button').click(function() {
            const buttonId = $(this).attr('id'); // Obtém o ID do botão clicado
            visibilityButton(buttonId); // Chamada da função com o ID do botão
        });
})
