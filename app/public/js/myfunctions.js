$("#olho").mousedown(function() {
    $("#senha").attr("type", "text");
});

$("#olho").mouseup(function() {
    $("#senha").attr("type", "password");
});

$("#olhoEdit").mousedown(function() {
    $("#novaSenha").attr("type", "text");
});

$("#olhoEdit").mouseup(function() {
    $("#novaSenha").attr("type", "password");
});

function changeVisualizacao(radio) {
    var table_sec = document.getElementById("table-sec");
    var card_sec = document.getElementById("card-sec");
    if (radio.id === 'tabela') {
        table_sec.style.display = "";
        card_sec.style.display = "none";
    } else {
        table_sec.style.display = "none";
        card_sec.style.display = "";
    }
}