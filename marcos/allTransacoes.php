<?php 
    require_once 'Conexao.php'; 
    
    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: *');
    
    $body = file_get_contents('php://input');
    
    $json = json_decode($body, true);


    $stmt = $conexao->prepare("SELECT tipo, sum(valor) as valor FROM transacoes group by tipo, d_e_l_e_t_ having d_e_l_e_t_ = ''");
    $stmt->bindvalue(":data", $json['data']);

    $stmt->execute();
    
    $dados = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    $jsonRetorno = json_encode($dados);
    
    echo $jsonRetorno;