<?php 
    require_once 'Conexao.php'; 
    
    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: *');
    
    $body = file_get_contents('php://input');
    
    $json = json_decode($body, true);
    
        $stmt = $conexao->prepare("insert into transacoes (dataInclusao, descricao, tipo, valor) values (:data, :descricao, :tipo, :valor)");
        $stmt->bindvalue(":data", $json['data']);
        $stmt->bindvalue(":descricao", $json['descricao']);
        $stmt->bindvalue(":tipo", $json['tipo']);
        $stmt->bindvalue(":valor", $json['valor']);
    
    $stmt->execute();
    
    echo $stmt->rowCount();
