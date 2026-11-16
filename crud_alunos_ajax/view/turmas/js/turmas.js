const urlBase = document.getElementById("confUrlBase").dataset.urlBase;
const selDisc = document.querySelector("#selDisciplina");
const inputAno = document.querySelector("#txtAno");


listarDisciplinasAssinc();
function listarDisciplinasAssinc() {
    selDisc.innerHTML = "";

    criarOpcao(0, "---Selecione---  ");
    const idCurso = document.getElementById("selCurso").value;

    const url = urlBase + "/api/lista_disciplinas.php?id_curso=" + idCurso;
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url);
    xhttp.onload = function () {
        var json = xhttp.responseText;
        //console.log(json);

        var disciplinas = JSON.parse(json);
        disciplinas.forEach(disc => {
            criarOpcao(disc.id, disc.codigo + " - " + disc.nome, idDiscSelecionada);

        });
    }

    xhttp.send();



    const idDiscSelecionada = selDisc.getAttribute("idSelecionada");



}

//listarDisciplinas();
function listarDisciplinas() {
    selDisc.innerHTML = "";

    criarOpcao(0, "---Selecione---  ");
    const idCurso = document.getElementById("selCurso").value;

    const url = urlBase + "/api/lista_disciplinas.php?id_curso=" + idCurso;
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.send();

    var json = xhttp.responseText;
    //console.log(json);

    const idDiscSelecionada = selDisc.getAttribute("idSelecionada");

    var disciplinas = JSON.parse(json);
    disciplinas.forEach(disc => {
        criarOpcao(disc.id, disc.codigo + " - " + disc.nome, idDiscSelecionada);

    });

}

function criarOpcao(id, descricao, idDiscSelecionada = -1) {
    var option = document.createElement("option");
    option.value = id;
    option.innerHTML = descricao;

    if (id == idDiscSelecionada) {
        option.selected = true;
    }

    selDisc.appendChild(option);
}

function salvarTurma(){
    //alert("Chamou!")

    var idDisc = selDisc.value;
    var ano = inputAno.value;

    alert(idDisc + " - " + ano);
    
}