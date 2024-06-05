<?php
require_once "config.php";
$valido['success']=array('success'=>false,'mensaje'=>"",'nombre'=>"");

if($_POST){
    $correo=$_POST['correo'];
    $password=($_POST['password']);
   
    $sql="SELECT * FROM usuario1 WHERE correo='$correo' AND password='$password'";
    $resultado=$cx->query($sql);
    $n=$resultado->num_rows;
    if($n>0){
            $row=$resultado->fetch_array();
            $valido['success']=true;
            $valido['mensaje']="Hola".$row['nombre'];
            $valido['nombre']=$row['nombre'];
            

        }
    else{
       $valido['success']=false;
       $valido['mensaje']="contraseña o correo incorrectos";
    }
 } else{
    $valido['success']=false;
    $valido['mensaje']=" mal";
    }

echo json_encode($valido);
?>