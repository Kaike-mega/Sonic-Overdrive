function abrirPopup(titulo, texto) {

    // Remove o popup anterior, caso exista
    const antigo = document.getElementById("popup");

    if (antigo) {
        antigo.remove();
    }

    // Fundo escuro
    const overlay = document.createElement("div");
    overlay.id = "popup";
    overlay.className = "popup-overlay";

    // Caixa
    const caixa = document.createElement("div");
    caixa.className = "popup-box";

    caixa.innerHTML = `
        <span class="popup-fechar">&times;</span>

        <h2>${titulo}</h2>

        <p>${texto}</p>

        <button class="popup-botao">
            Fechar
        </button>
    `;

    overlay.appendChild(caixa);

    document.body.appendChild(overlay);

    // Eventos

    caixa.querySelector(".popup-fechar").onclick = fecharPopup;

    caixa.querySelector(".popup-botao").onclick = fecharPopup;

    overlay.onclick = function(e){

        if(e.target === overlay){

            fecharPopup();

        }

    }

}

function fecharPopup(){

    const popup = document.getElementById("popup");

    if(popup){

        popup.remove();

    }

}