<?php 
    require_once 'Conexao.php'; 
    
    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: *');
    
    $body = file_get_contents('php://input');
    
    $json = json_decode($body, true);


    $stmt = $conexao->prepare("select * from transacoes where year(dataInclusao) = year(:data) and 
    month(dataInclusao) = month(:data) and d_e_l_e_t_ = '' order by id desc");
    $stmt->bindvalue(":data", $json['data']);

    $stmt->execute();
    
    $dados = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    $jsonRetorno = json_encode($dados);
    
    echo $jsonRetorno;