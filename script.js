document.getElementById("FormularioDoacao").addEventListener("submit", function (e) {
    e.preventDefault();


    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let idade = parseFloat(document.getElementById("idade").value);
    let peso = parseFloat(document.getElementById("peso").value);
    let tipo_sangue = document.getElementById("tipo_sangue").value;
    let telefone = document.getElementById("telefone").value.trim();
    let cidade = document.getElementById("cidade").value.trim();
    let estado = document.getElementById("estado").value.trim();



    if (nome.length < 3) return alert("Nome inválido (mínimo 3 caracteres)");
    if (!email.includes("@")) return alert("Email inválido");
    if (isNaN(idade) || idade < 16) return alert("Obrigatório ter 16 anos ou mais");
    if (isNaN(peso) || peso < 49) return alert("Peso inválido");
    if (telefone.length < 8 || isNaN(telefone)) return alert("Telefone inválido");
    if (cidade === "") return alert("Cidade obrigatória");
    if (estado === "") return alert("Estado obrigatório");
    if (isNaN(idade) || idade < 0) return alert("Idade inválida");
    if (isNaN(peso) || peso < 0) return alert("Peso inválido");


    if (horas > 8) {
        alert("Atenção: o animal ficará muito tempo sozinho!");
    }



    document.getElementById("resultado").innerHTML =
        "✅ Cadastro realizado com sucesso!<br><br>" +
        "<strong>Nome:</strong> " + nome + "<br>" +
        "<strong>Email:</strong> " + email + "<br>" +
        "<strong>Idade:</strong> " + idade + "<br>" +
        "<strong>Peso:</strong> " + peso + "<br>" +
        "<strong>Tipo Sanguíneo:</strong> " + tipo_sangue + "<br>" +
        "<strong>Telefone:</strong> " + telefone + "<br>" +
        "<strong>Cidade:</strong> " + cidade + "<br>" +
        "<strong>Estado:</strong> " + estado + "<h>";
});