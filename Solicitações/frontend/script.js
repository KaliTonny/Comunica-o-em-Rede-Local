const api =
"http://172.26.88.37:3000";

async function cadastrar(){

    const nome =
    document.getElementById("nome").value;

    const setor =
    document.getElementById("setor").value;

    const solicitacao =
    document.getElementById("solicitacao").value;

    await fetch(api + "/chamados", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            nome,
            setor,
            solicitacao
        })
    });

    carregar();
}

async function carregar(){

    const resposta =
    await fetch(api + "/chamados");

    const dados =
    await resposta.json();

    const lista =
    document.getElementById("lista");

    lista.innerHTML = "";

    dados.forEach((item) => {

        lista.innerHTML += `
            <p>
                ${item.nome} -
                ${item.setor} -
                ${item.solicitacao}
            </p>
        `;
    });
}

carregar();