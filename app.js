const listaUl = document.getElementById("listaAmigos");
const inputAmigo = document.getElementById("amigo");
const resultadoUl = document.getElementById("resultado");

// 🛠️ Lista de amigos começa vazia
let listaDeAmigos = [];

function adicionarAmigo() {
    const nome = inputAmigo.value.trim();
    if (nome !== "") {
        listaDeAmigos.push(nome);
        const li = document.createElement("li");
        li.textContent = nome;
        listaUl.appendChild(li);
        inputAmigo.value = "";
    }
}

function sortearAmigo() {
    if (listaDeAmigos.length > 2) {
        const indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
        const amigoSorteado = listaDeAmigos[indiceSorteado];
        
        // 🛠️ Mostra o resultado do sorteio
        resultadoUl.innerHTML = `<li>O amigo sorteado foi: <strong>${amigoSorteado}</strong></li>`;

        // 🕒 Temporizador pra mostrar o resultado por 3 segundos antes de "recarregar"
        setTimeout(() => {
            // 🛠️ Limpa a lista de amigos e o resultado
            listaDeAmigos = [];
            listaUl.innerHTML = "";
            resultadoUl.innerHTML = "";
        }, 3000); // 3000 milissegundos = 3 segundos

    } else {
        resultadoUl.innerHTML = `<li>Número de pessoas insuficientes!</li>`;
        
        // 🕒 Limpa a mensagem de erro depois de 2 segundos
        setTimeout(() => {
            resultadoUl.innerHTML = "";
        }, 2000);
    }
}
