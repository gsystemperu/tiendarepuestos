<?php

use Phalcon\Mvc\Model;
use Phalcon\Mvc\Model\Resultset\Simple as Resultset;

class Empresa extends \Phalcon\Mvc\Model
{
    public static function listar()
    {
        $obj     = new SQLHelpers();
        $param   = array();
        $sql     =  $obj->executarJson('public','sp_empresa_listar',$param);
        return $sql;
    }
    public static function tiendas()
    {
        $obj     = new SQLHelpers();
        $param   = array();
        $sql     =  $obj->executarJson('public','sp_tienda_listar',$param);
        return $sql;
    }
    public static function actualizar($data)
    {
        $obj     = new SQLHelpers();
        $param   = $data;
        $sql     =  $obj->executar('public','sp_empresa_actualizar',$param);
        return $sql;
    }
    public static function tiendaEliminar($data)
    {
        $obj     = new SQLHelpers();
        $param   = $data;
        $sql     =  $obj->executar('public','sp_tienda_eliminar',$param);
        return $sql;
    }

    


}
