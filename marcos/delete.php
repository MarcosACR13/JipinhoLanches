<?php 
    require_once 'Conexao.php';
    
    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: *');
    
    $body = file_get_contents('php://input');
    
    $json = json_decode($body, true);

    if($json['id'])
    {
        $stmt = $conexao->prepare("update transacoes set d_e_l_e_t_ = '*' where id = :id");
        $stmt->bindvalue(":id", $json['id']);
        $stmt->execute();   
        
        if($stmt->rowCount() = 1){
            echo json_encode([{"status":"ok"}])
        };
    }
    else{
        echo json_encode([{"status":"id"}])
    }
