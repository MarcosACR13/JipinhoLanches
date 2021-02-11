
<?php
$servidor= "127.0.0.1:3306";
$usuario = "u932496971_controleFinanc";
$senha   = "@Acr.Pwd.0916#";
$banco = "u932496971_controleFinanc";


try{
	$conexao = new PDO ('mysql:host=sql199.main-hosting.eu;dbname=u932496971_controleFinanc', $usuario, $senha);
	$conexao->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);	
	
}catch(PDOException $e){
	echo 'ERROR: '.$e->getMessage();
}

?>
