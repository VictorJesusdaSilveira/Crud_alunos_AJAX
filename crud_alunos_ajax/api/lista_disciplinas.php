<?php
require_once(__DIR__ . "/../controller/DisciplinaController.php");

//Entrada
$idCurso = 0;
if(isset($_GET["id_curso"])){
    $idCurso = $_GET["id_curso"];
}

//print $idCurso;

//Saída
$disciplinaCont = new DisciplinaController();
$disciplinas = $disciplinaCont->listarPorCurso($idCurso);

//print_r($disciplinas); 

print json_encode($disciplinas, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);



?>