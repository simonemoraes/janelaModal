$(document).ready(function () {

    /* Busca por cep 
    $('#btn_buscar').click(function () {

        var cep = $('#cep').val();


        var url = 'http://cep.republicavirtual.com.br/web_cep.php?cep=' + cep + '&formato=json';

        $.get(url, function (data, status) {
            if (data.resultado !== '') {

                $('.painelCep').show();
                $('#resultado_txt').html(data.resultado_txt);
                $('#tipoLogradouro').html(data.tipo_logradouro);
                $('#logradouro').html(data.logradouro);
                $('#bairro').html(data.bairro);
                $('#cidade').html(data.cidade);
                $('#uf').html(data.uf);

            } else {
                alert(status);
            }
        });
    });
    */
    /* fim busca por cep */

    /* Cadastro de Clientes */
    atualizaTabela();

   // piscar('.div_layout');


    /* Esta função salva os registros no banco */
    $('#btn_salvar').click(function () {
        var id = 'vazio';
      
        if ($('#id_paciente').val() !== '') {
            id = $('#id_paciente').val();
        }
       
            $.post('http://localhost:8080/consultorio/index.php/cadastrocliente_control/salvarPaciente', {
                id: id,
                dt_ult_atendimento: $('#dt_ult_atendimento').val(),
                nome: $('#nome_paciente').val(),
                email: $('#email_paciente').val(),
                cpf: $('#cpf_paciente').val(),
                dt_nasc: $('#dt_nasc').val(),
                telefone: $('#telefone').val(),
                celular: $('#celular').val()
            }, function (data, status) {
                alert(status);
                if (data) {
                    
                  
                    limparCampos();
                    mensagem(status);
                } else {
                    mensagem(status);
                }
            });
 
    });

    /* Esta função deleta os registros no banco */
    $('#btn_remover').click(function () {
        var id = 'vazio';

        if ($('#id_cliente').val() !== '') {
            id = $('#id_cliente').val();
        }

        if (valida()) {

            $.post('http://localhost:8080/cursos_phpExpert/cadastro_clientes/index.php/cadastrocliente_control/removerCliente', {
                id: id,
                nome: $('#nome_cliente').val(),
                email: $('#email_cliente').val(),
                cpf: $('#cpf_cliente').val()
            }, function (data, status) {
                if (data) {
                    limparCampos();
                    $("<p></p>").addClass("alert alert-success").text("Exclusão realizada com sucesso!")
                } else {
                    mensagem(status);
                }
            });
        }
    });

    $('#tabelaClientes tbody tr').hover(
            function () {
                $(this).addClass("destaque");
            },
            function () {
                $(this).removeClass("destaque");
            }
    );


    /* Edita o campo da tabela selecionado */
    $('#tabelaClientes tbody tr').each(function () {

        $(this).click(function () {

            $("td").removeClass("addCor");
            $(this).each(function () {
                $(this).children("*").addClass("addCor");

                var id = $(this).find('td[id=id]').text();

                $.post('http://localhost:8080/cursos_phpExpert/cadastro_clientes/index.php/cadastrocliente_control/editaCliente', {
                    id: id
                }, function (data, status) {
                    if (status === "success") {
                        preencheCampos(data);
                    } else {
                        mensagem();
                    }
                }, 'json');
            });
        });
    });
});

/* Função que preenche os campos da tabela */
function preencheCampos(data) {
    $('#id_cliente').val(data.id);
    $('#nome_cliente').val(data.nome);
    $('#email_cliente').val(data.email);
    $('#cpf_cliente').val(data.cpf);
}


/* Esta função fz as validações dos campos input, caso estejam vazio não será feito o submit do formulario
 * até que todos os campos estejam preenchidos */
function valida() {

    var verificaInput = 'verificar';
    var inputs = $('#form_cadastro').find('input[class*="' + verificaInput + '"]');

    var erros = [];

    erros.length = 0;

    $("#div_error").hide();

    $.each(inputs, function (i, value) {
        if (inputs[i].value === "") {
            erros[i] = $(inputs[i]).attr("itemid") + " deve ser preenchido!";
        }
    });

    if (erros.length > 0) {

        var texto = "";

        $.each(erros, function (i, value) {
            if (erros[i]) {
                texto = texto + erros[i] + "<br/>";
            }
        });

        $("#div_error").html(texto).addClass("alert alert-danger").show();

        return false;
    }

//    var verificaInput = 'verificar';
//    var inputs = $('#form_cadastro').find('input[class*="' + verificaInput + '"]');
//
//    $.each(inputs, function (i, value) {
//        if (inputs[i].value === "") {
//            alert("Campos obrigatórios faltando!");
//            inputs[i].val().focus();
//            return false;
//        }
//    });

    return true;
}

function atualizaTabela() {
    $('#btn_atualiza').click(function () {
        var url = ' http://localhost:8080/cursos_phpExpert/cadastro_clientes/index.php/cadastrocliente_control/formulario';
        window.location.href = url;
    });
}

function mensagem(status) {

    var sucesso = $("<p></p>").addClass("alert alert-success").text("Cadastro realizado com sucesso!").fadeIn(2000).css({
        "margin-top": "40px",
        "margin-bottom": "40px"
    });
    var erro = $("<p></p>").addClass("alert alert-danger").text("Operação não realizada!");

    if (status === "success") {
        $('.div_panel').before(sucesso);

        sucesso.fadeOut(3000);

    } else {
        $('.div_panel').before(erro);
    }

}

/* Esta função limpa os campos da formulario */
function limparCampos() {
    $("#form_cadastro").each(function () {
        this.reset();
    });
}

$('#mensagem').find('p').css({
    "margin-top": "50px"
}).fadeOut(5000);
/* Cadastro de Clientes */

function piscar(selector) {

    $(selector).addClass("testando alert alert-success");

    $(selector).fadeOut('slow', function () {
        $(this).fadeIn('slow', function () {
            piscar(this);
        });
    });
}




/* Arrastando elementos */

//function drag(ev) {
//    ev.dataTransfer.setData("text", ev.target.id);
//}
//
//function allowDrop(ev) {
//    ev.preventDefault();
//}
//
//function drop(ev) {
//    ev.preventDefault();
//    var data = ev.dataTransfer.getData("text");
//    ev.target.appendChild(document.getElementById(data));
//}



/*Testando drag and drop */
$("#drag").draggable();
$("#drop").droppable({
    drop:function(event, ui) {
        $(this).addClass("ui-state-highlight").find("p").html("Colocado!!!");
    }
});


/* Carrinho de compras com drag and drop */
$("#catalogo li").draggable({
    helper: "clone"
});
$("#carrinho ul").droppable({
    drop:function(event, ui){
        $(this).append($("<li/>").addClass("list-group-item").text(ui.draggable.text()));
        $(this).find(".mensagem").remove();
    }
});

/* Selecionando elementos */
$("#selectable").selectable();
        

/* Ordena elementos */
$("#sortable").sortable();

