<?php
use \Phalcon\Mvc\Controller as Controller;

class EmpresaController extends Controller
{
    public function initialize(){$this->view->disable(); }
    public function listaAction(){
         $request        = new Phalcon\Http\Request();
         $response       = new \Phalcon\Http\Response();
         if($request->isGet() ==true)
         {
              $jsonData = Empresa::listar();
              $response->setContentType('application/json', 'UTF-8');
              $response->setContent($jsonData);
              return $response;
         }
    }
    public function seriesAction()
    {
        $request        = new Phalcon\Http\Request();
        $response       = new \Phalcon\Http\Response();
        if($request->isGet() ==true)
        {
             $jsonData = DocumentoVenta::series();
             $response->setContentType('application/json', 'UTF-8');
             $response->setContent($jsonData);
             return $response;
        }
   }
   public function serieseliminarAction()
   {
       $request        = new Phalcon\Http\Request();
       $response       = new \Phalcon\Http\Response();
       if($request->isPost() ==true)
       {    
            $jsonData = DocumentoVenta::series();
            $response->setContentType('application/json', 'UTF-8');
            $response->setContent($jsonData);
            return $response;
       }
  }



   public function ticketerasAction(){
        $request        = new Phalcon\Http\Request();
        $response       = new \Phalcon\Http\Response();
        if($request->isGet() ==true)
        {
            $jsonData = DocumentoVenta::ticketeras();
            $response->setContentType('application/json', 'UTF-8');
            $response->setContent($jsonData);
            return $response;
        }
    }
    public function tiendasAction(){
        $request        = new Phalcon\Http\Request();
        $response       = new \Phalcon\Http\Response();
        if($request->isGet() ==true)
        {
             $jsonData = Empresa::tiendas();
             $response->setContentType('application/json', 'UTF-8');
             $response->setContent($jsonData);
             return $response;
        }
    }
    public function actualizarAction(){
        $request        = new Phalcon\Http\Request();
        $response       = new \Phalcon\Http\Response();
        if($request->isPost() ==true)
        {
             $data = array(
                $request->getPost('id'),
                $request->getPost('razonsocial'),
                $request->getPost('ruc'),
                $request->getPost('direccion'),
                $request->getPost('lema'),
                $request->getPost('correo'),
                $request->getPost('telefono'),
                $request->getPost('tiendas'),
                $request->getPost('documentos'),
                $request->getPost('ticketeras')
             );
             $jsonData = Empresa::actualizar($data);
             $response->setContentType('application/json', 'UTF-8');
             $response->setContent(json_encode($jsonData[0], JSON_NUMERIC_CHECK));
             return $response;
        }
    }

}
