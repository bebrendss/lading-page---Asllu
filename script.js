$(document).ready(function() {
    $("#mobile_btn").on("click", function() {
        $("#mbl_menu, .btn_ctt_mbl").toggleClass("active");
    });

    $('#telefone').mask('(00) 00000-0000');

    var form = $('form[name="Contato"]');
    var successMessage = $('#mensagem-sucesso');

    form.on('submit', function(event) {
        event.preventDefault();
        var formData = $(this).serialize();

        $.ajax({
            method: 'POST',
            url: '/',
            data: formData,
            success: function() {
                console.log('Formulário enviado com sucesso!');
                form.hide();
                successMessage.show();
            },
            error: function(error) {
                console.error('Erro ao enviar o formulário:', error);
                alert('Ocorreu um erro ao enviar. Por favor, tente novamente.');
            }
        });
    });

    var carrosselWrapper = $("#carrossel .carrossel_wrapper");
    var slides = carrosselWrapper.find(".carrossel_slide");
    var prevBtn = $("#prev_btn");
    var nextBtn = $("#next_btn");
    var currentIndex = 0;

    if (slides.length > 0) {
        function moverCarrossel(index) {
            var slideWidth = slides.outerWidth(true);
            var offset = -index * slideWidth;
            carrosselWrapper.css("transform", `translateX(${offset}px)`);
            currentIndex = index;
        }

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

        setInterval(function() {
            nextBtn.click();
        }, 4000);
    }
});