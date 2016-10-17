//$(document).ready(function () {
//    $("input").blur(function () {
//        if ($(this).val() == "")
//        {
//            $(this).css({"border": "1px solid #F00", "padding": "2px"});
//        }
//    });
//    $("#botao").click(function () {
//        var cont = 0;
//        $("#form input").each(function () {
//            if ($(this).val() == "")
//            {
//                $(this).css({"border": "1px solid #F00", "padding": "2px"});
//                cont++;
//            }
//        });
//        if (cont == 0)
//        {
//            $("#form").submit();
//        }
//    });
//
//
//
//});


(function ($) {

    $(document).ready(function () {

            
                $("#myModal").modal('show');
           
        

        $('#btn_enviar').click(function () {

            var nome = "", telefone = "", email = "", mensagem = "", vll_ok = true;
            var val_nome = $('#val_nome').html();


            var url = $('#contact-form').attr('itemid');

            //val_nome.css('color', 'red').hide();


            nome = $('#nome').val();


            validacao(nome, val_nome, vll_ok);


//
//            if (mensagem === "") {
//                $('#val_mensagem').css('color', 'red').show();
//                vll_ok = false;
//            }


            if (vll_ok) {

                $('#val_nome').css('color', 'red').hide();
                $('#val_telefone').css('color', 'red').hide();
                $('#val_email').css('color', 'red').hide();
                //$('#val_mensagem').css('color', 'red').hide();


                $.post(url, {
                    nome: nome,
                    telefone: telefone,
                    email: email,
                    mensagem: mensagem

                },
                function (data, status) {

                    $("#msg_sucesso").hide();
                    $("#msg_error").hide();

                    if (data === "sucesso") {
                        $('#contact-form').each(function () {
                            this.reset();
                        });
                        $("#msg_sucesso").show();
                    } else {
                        $("#msg_error").show();
                    }

                });



            } else {

                return vll_ok;
            }



        });

        function validacao(id_input, id_val, vll_ok) {

            //alert(id_input);

            if (id_input === "") {
                $(id_val).css('color', 'red');
                alert(id_val);
                vll_ok = false;
            }
        }

    });

})(jQuery);

$(document).ready(function () {

});