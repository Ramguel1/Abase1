<?php
require_once "config.php";
$valido['success']=array('success'=>false,'mensaje'=>"");

if($_POST){
    $correo=$_POST['correo'];
    $password=($_POST['password']);
    $nombre=$_POST['nombre'];
    $apellido=$_POST['apellido'];
  
    $sql="SELECT * FROM usuario1 WHERE correo='$correo' " ;
    $resultado=$cx->query($sql);
    $n=$resultado->num_rows;
    if($n==0){
        $sqlInsertar="INSERT INTO usuario1 VALUES(null,'$correo','$password','$nombre','$apellido')";
        if($cx->query($sqlInsertar)===true){
            $valido['success']=true;
            $valido['mensaje']="Registrado";
        }else{
            $valido['success']=false;
            $valido['mensaje']="mal";
        }
    }else{
       $valido['success']=false;
       $valido['mensaje']="Introduce un correo electronico valido";
    }
       
 } else{
    $valido['success']=false;
    $valido['mensaje']="mal";
    }

echo json_encode($valido);
?>