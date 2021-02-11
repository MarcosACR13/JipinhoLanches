<?php
$json = '[{"id":"414","dataInclusao":"2020-05-04","descricao":"teste","tipo":"r","valor":"3335","d_e_l_e_t_":""},{"id":"413","dataInclusao":"2020-05-04","descricao":"marcos","tipo":"r","valor":"2424","d_e_l_e_t_":""},{"id":"412","dataInclusao":"2020-05-04","descricao":"teste","tipo":"r","valor":"220","d_e_l_e_t_":""},{"id":"411","dataInclusao":"2020-05-04","descricao":"marquitos","tipo":"r","valor":"666","d_e_l_e_t_":""},{"id":"410","dataInclusao":"2020-05-04","descricao":"teste","tipo":"r","valor":"66666","d_e_l_e_t_":""},{"id":"409","dataInclusao":"2020-05-04","descricao":"teste","tipo":"c","valor":"3335","d_e_l_e_t_":""},{"id":"408","dataInclusao":"2020-05-04","descricao":"teste","tipo":"r","valor":"11111100","d_e_l_e_t_":""},{"id":"376","dataInclusao":"2020-05-04","descricao":"teste","tipo":"r","valor":"5556","d_e_l_e_t_":""},{"id":"369","dataInclusao":"2020-05-04","descricao":"teste","tipo":"r","valor":"3335","d_e_l_e_t_":""}]';

$dados = json_decode($json, true);

foreach($dados as $valor){
    echo $valor['id'].'       ' ;
    
};
