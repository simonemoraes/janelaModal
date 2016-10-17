<!DOCTYPE html>
<html>
    <head>
        <title>Janela modal</title>

        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, inicial-scale=1.0"/>
        <link rel="stylesheet" href="css/font_awesome/css/font-awesome.min.css">

        <link rel="stylesheet" href="css/bootstrap.min.css" media = "all">
        <link rel="stylesheet" href="css/estilo.css" media = "all">

    </head>
    <body>
        <div class="container">

        <h2>

            Contato
        </h2>
        <form id="contact-form" class='contact-form'>
            <div class="contact-form-loader"></div>
            <fieldset>
                <label class="name">
                    <input type="text" name="name" placeholder="Nome:" value="" data-constraints="@Required @JustLetters"/>
                    <span class="empty-message">*Esse campo é obrigatorio.</span>
                    <span class="error-message">*Nome invalido.</span>
                </label>              

                <label class="phone">
                    <input type="text" name="phone" placeholder="Telefone:" value="" data-constraints="@JustNumbers"/>

                    <span class="empty-message">*Esse campo é obrigatorio.</span>
                    <span class="error-message">*Telefone invalido.</span>
                </label>

                <label class="email">
                    <input type="text" name="email" placeholder="Email:" value="" data-constraints="@Required @Email"/>

                    <span class="empty-message">*Esse campo é obrigatorio.</span>
                    <span class="error-message">*E-mail invalido.</span>
                </label>

                <label class="message">
                    <textarea name="message" placeholder="Mensagem" data-constraints='@Required @Length(min=20,max=999999)'></textarea>

                    <span class="empty-message">*Esse campo é obrigatorio.</span>
                    <span class="error-message">*Mensagem deve ter mais conteudo.</span>
                </label>

   <!--  <label class="recaptcha"> <span class="empty-message">*This field is required.</span> </label> -->

                <div class="btn-wr text-primary">
                    <a class="btn btn-primary" href="#" data-type="submit"  data-toggle="modal" data-target="#myModal">Enviar</a>
                </div>
            </fieldset>
            
            <div class="modal fade" id="myModal" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                                
                                &times;
                            </button>
                            <h4 class="modal-title">Modal title</h4>
                        </div>
                        <div class="modal-body">
                            Sua mensagem foi enviada com sucesso!
                        </div>
                    </div>
                </div>
            </div>
            
        </form>


    </div>
        <script src="js/jscript_1.js"></script>
        <script src="js/jquery-1.12.4.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        

        
    </body>
</html>
