// Função para abrir o modal com os detalhes do card
function abrirDetalhesCard() {
    var modal = document.getElementById("card-details");
    modal.style.display = "flex";
}

// Função para fechar o modal
function fecharDetalhesCard() {
    var modal = document.getElementById("card-details");
    modal.style.display = "none";
}

// Função para cadastrar um novo card (usando o formulário da página de cadastro)
document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Captura os dados do formulário
    var nomeCliente = event.target[0].value;
    var numeroContrato = event.target[1].value;
    var dataAssinatura = event.target[2].value;
    var vigencia = event.target[3].value;
    var situacao = event.target[4].value;
    var objetoPrincipal = event.target[5].value;
    var diretorDelivery = event.target[6].value;
    var versaoHealthcheck = event.target[7].value;
    var area = event.target[8].value;
    var linguagensUtilizadas = event.target[9].value;
    var observacoes = event.target[10].value;
    var cadastradoPor = event.target[11].value;
    var email = event.target[12].value;

    // Criação do novo card
    var cardContainer = document.querySelector(".card-grid");
    var newCard = document.createElement("div");
    newCard.classList.add("card");
    newCard.innerHTML = `
        <p class="segment">${objetoPrincipal}</p>
        <img src="images/logo1.png" alt="Logo Cliente">
        <p class="service-type">${nomeCliente}</p>
    `;
    newCard.onclick = abrirDetalhesCard;
    cardContainer.appendChild(newCard);

    // Feedback de sucesso e redirecionamento para a Home
    alert("Card cadastrado com sucesso!");
    window.location.href = "index.html";
});

// Função para abrir a seção de filtro
document.querySelector(".filter-button").addEventListener("click", function() {
    alert("Seção de filtros será aberta futuramente.");
});

// Função de envio de formulário de suporte
document.getElementById("suporteForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Chamado enviado com sucesso!");
    event.target.reset();
});
