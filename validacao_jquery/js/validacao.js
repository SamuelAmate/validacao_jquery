//validacao simples
// $("#formExemplo").validate();

$('#formExemplo').validate({
    debug: true,
    rules: {
        txtemail: {
            required: true,
            email: true
        },
        txtnome: {
            required: true,
            minlength: 5,
            maxlength: 50
        },
        txtfilhos: {
            min: 0,
            max: 10,
            required: true
        },
        txtsalario: {
            min: 2000,
            max: 10000,
            required: true
        },
        txtredesocial:{
            url: true,
            required: true
        },
        txtadmissao: {
            dateISO: true,
            required: true
        }
    },
    messages: {
        txtemail:{
            required: "E-mail obrigatório",
            email: "Formato inválido de e-mail",
        },
        txtnome:{
            required: "Nome obrigatório",
            minlength: "Exigido 5 caracteres",
            maxlength: "Máximo de 50 caracteres",
        },
        txtfilhos:{
            required: "Números filhos obrigatório",
            min: "Valor mínimo: 0",
            max: "Valor máximo: 10",
        },
        txtsalario:{
            required: "Salário obrigatório",
            min: "Valor mínimo: 2000",
            max: "Valor máximo: 10000",
        },
        txtredesocial:{
            required: "Rede social obrigatoria",
            url: "O formato deve ser em url",
        },
        txtadmissao:{
            required: "Admissão obrigatória",
            dateISO: "Obrigatório no formato date"
        }
    }
});