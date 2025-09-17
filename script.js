$(document).ready(function() {
    // Código do menu (mantém o que já está funcionando)
    $("#mobile_btn").on("click", function (){
        $("#mbl_menu, .btn_ctt_mbl").toggleClass("active");
    });

    // CÓDIGO DO CARROSSEL CORRIGIDO
    // Apenas ativa o carrossel em telas com mais de 768px de largura
    if ($(window).width() > 768) {
        var carrosselWrapper = $("#carrossel .carrossel_wrapper");
        var slides = carrosselWrapper.find(".carrossel_slide");
        var prevBtn = $("#prev_btn"); 
        var nextBtn = $("#next_btn");
        var currentIndex = 0;
        
        function moverCarrossel(index) {
            var slideWidth = slides.outerWidth(true);
            var offset = -index * slideWidth;
            carrosselWrapper.css("transform", `translateX(${offset}px)`);
            currentIndex = index;
        }

        // Ação dos botões
        nextBtn.on("click", function() {
            var nextIndex = currentIndex + 1;
            if (nextIndex >= slides.length) {
                nextIndex = 0;
            }
            moverCarrossel(nextIndex);
        });

        prevBtn.on("click", function() {
            var prevIndex = currentIndex - 1;
            if (prevIndex < 0) {
                prevIndex = slides.length - 1;
            }
            moverCarrossel(prevIndex);
        });

        // Movimento automático
        setInterval(function() {
            nextBtn.click();
        }, 4000);
    }
});