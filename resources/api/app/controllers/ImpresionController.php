<?php
use \Phalcon\Mvc\Controller as Controller;
include __DIR__ .'/../library/funciones.php';
include __DIR__ .'/../library/phpmailer/class.phpmailer.php';
include __DIR__ .'/../library/phpmailer/class.pop3.php';
include __DIR__ .'/../library/phpmailer/class.smtp.php';
include __DIR__ .'/../library/fpdf/fpdf.php';
include __DIR__ .'/../library/fpdf/exfpdf.php';
include __DIR__ .'/../library/fpdf/jspdf.php';

class ImpresionController extends Controller
{
   // public function initialize(){$this->view->disable(); }
   
   /* public function impresionnotaAction()
    {
      
            //Impresion de Factura ** Modelo soluma **
            $request  = new Phalcon\Http\Request();
            $id       =  $request->get("id");
            $data     = array($id);
            $cliente  =  json_decode(Facturacion::datosFacturacionCliente($data));       
            $detalle  =  json_decode(Facturacion::detalleFacturacion($data));
            
            
            //$pdf = new exFPDF('P','mm','A4');
            $pdf = new jsPDF('P','mm','A4');
            
            #Establecemos los márgenes izquierda, arriba y derecha: 
            $pdf->SetAutoPageBreak(true,1);//5
            $wg   = 188 ;//Ancho total
            $in   = 6; //Interlineado
            $font = 'courier';
            $tam  = 9;
            $total_sin_imp =0;
            foreach ((array)$cliente->data as $row)
            {
              $mes     = $row->mes;
              $dia     = $row->dia;
              $anio    = $row->anio;
              $nombrecliente = $row->nomcompleto;
              $direccion =  $row->domiciper;
              $dni       = $row->numdocper;
              $ruc       = $row->numrucper;
              $formapago       = $row->formapago;
              $numeroguia       = $row->numeroguia;
              $incluyeigv       = $row->incluyeigv;

            }

            $h = new FuncionesHelpers();

            $pdf->AddPage();            
            $pdf->SetFont($font,'',$tam);
            $pdf->ln(47); //41
            $pdf->setX(30);
            $pdf->SetFontSpacing(1);
            $pdf->Cell(110,7,pinta( strtoupper($nombrecliente)),0,0,'L');

            
            $pdf->cell(8,7,pinta($dia),0,0,'R');
            $pdf->cell(29,7,pinta( $h->nombreMes($mes)),0,0,'C');
            $pdf->cell(28,7,pinta($anio),0,1,'C');
            $pdf->Ln(1.5);
            $pdf->setX(30);
            $pdf->Multicell(120,4,pinta($direccion),0,'J');
            $pdf->Ln(1.5);
            $pdf->setX(30);
            $pdf->cell(70,7,pinta($ruc),0,0,'L');
            $pdf->cell(40,7,pinta($numeroguia),0,0,'L');
            
            if(substr(trim($formapago),0,6) == 'CHEQUE')
              $pdf->cell(50,7,pinta(substr($formapago,0,20)),0,1,'R');
            else 
                $pdf->cell(50,7,pinta($formapago),0,1,'R');

            $fila = $pdf->getY();
            //================= Detalle de Factura ================================
            $pdf->Ln(8);
            foreach ((array)$detalle->data as $row)
            {
              $pdf->setX(8);
              $pdf->Cell(15,4,pinta($row->cantidad),0,0,'C');
              $pdf->Cell(15,4,pinta($row->um),0,0,'C');
              $pdf->MultiCell(105,4,pinta(trim($row->producto)),0,'L');
              $pdf->SetFont($font,'',$tam);
              $pdf->setXY(160,$pdf->getY() - 5);
              $pdf->Cell(15,4,pinta( number_format($row->precio, 2, '.',' ')),0,0,'R');
              $pdf->Cell(20,4,pinta( number_format($row->total, 2, '.',' ')),0,1,'R');
              $pdf->Ln(1.5);
              
              $total_sin_imp += $row->total;
             }
   
              //$pdf->SetXY(20,265);
              $pdf->SetXY(20,256);
              
              $pdf->Cell(0,2,'  ' . strtoupper( pinta(convertir_a_letras($total_sin_imp))),0,1,'L');
              //$pdf->SetXY(173,250 - 4);
              $pdf->SetXY(170,260);
              $pdf->Cell(30,4,'S/. '.pinta(number_format($total_sin_imp / 1.18 , 2, '.',' ')),0,1,'R');
              //$fila = $pdf->getY();
              //*$pdf->SetXY(173,$fila -1);
              $pdf->SetXY(150,266);
              $pdf->Cell(30,4,pinta('18 %'),0,0,'R');
              $pdf->SetXY(170,266);
              $pdf->Cell(30,4,'S/. '.pinta(number_format($total_sin_imp - ($total_sin_imp / 1.18), 2, '.',' ')),0,1,'R');
              //*$pdf->SetXY(173,$fila + 8 );
              $pdf->SetXY(170,275);
              $pdf->Cell(30,4,'S/. '. pinta(number_format($total_sin_imp , 2, '.',' ')),0,1,'R');

           
            
            //$pdf->AutoPrint();
            //$pdf->Output('D','factura',true);
            $pdf->Output();
             
    }*/

    public function impresionnotaAction()
    {
      $request  = new Phalcon\Http\Request();
      $id       =  $request->get("id");
      $data     = array($id);
      $cliente  =  json_decode(Facturacion::datosFacturacionCliente($data));       
      $detalle  =  json_decode(Facturacion::detalleFacturacion($data));
      $this->view->cliente = $cliente;
      $this->view->detalle = $detalle;
    }
   public function impresionguiaremisionAction()
   {
     
          $request  = new Phalcon\Http\Request();
          $id       =  $request->get("id");
          $data     = array($id);
          $guiaremision  =  json_decode(GuiaRemision::guiaremisionbuscar($data));       
          
          $pdf = new jsPDF('P','mm','A4');
          #Establecemos los márgenes izquierda, arriba y derecha: 
          $pdf->SetAutoPageBreak(true, 5);
          $wg = 188 ;//Ancho total
          $in = 6; //Interlineado
          $font = 'Arial';
          $tam = 9;
          $borde = 0;
          foreach ((array)$guiaremision->data as $row)
          {
            $fechaEmision     = $row->fechaemision;
            $fechaTraslado    = $row->fechatraslado;
            $puntoPartida     = $row->puntopartida;
            $puntoLLegada     = $row->puntollegada;
            $destinatario_razonsocial =  $row->destinatario_razonsocial;
            $destinatario_ruc         = $row->destinatario_ruc;
            $destinatario_dni         = $row->destinatario_dni;
            $unidad_placa             = $row->unidad_placa;
            $unidad_certificado       = $row->unidad_certificado;
            $unidad_licencia          = $row->unidad_licencia;
            $transportista_nombre     = $row->transportista_nombre;
            $transportista_ruc        = $row->transportista_ruc;
            $detalle                  = $row->detalle;
          }

       
          $h = new FuncionesHelpers();

          $pdf->AddPage();            
          $pdf->SetFont($font,'',$tam);
          $pdf->ln(50);
          $pdf->setX(36);
          $pdf->SetFontSpacing(1);
          $pdf->cell(110,5,pinta($fechaEmision),$borde,0,'L');
          $pdf->cell(0,5,pinta($fechaTraslado),$borde,1,'L');
          $pdf->Ln(2);
          $pdf->setX(35);
          $pdf->cell(0,5,pinta(strtoupper($puntoPartida)),$borde,1,'L');
          $pdf->setX(35);
          $pdf->cell(0,5,pinta(strtoupper($puntoLLegada)),$borde,1,'L');
          $pdf->Ln(8);$pdf->setX(20); // *****
          $pdf->cell(150,5,pinta('                                    '.$destinatario_razonsocial),0,0,'J');
          $pdf->cell(0,5,pinta($unidad_placa),0,1,'L');
          $pdf->ln(6);$pdf->setX(45);
          $pdf->cell(100,5,pinta($destinatario_ruc),$borde,0,'J');
          $fila = $pdf->getY();
          $pdf->setXY(150,$fila - 3);
          $pdf->cell(50,5,pinta($unidad_certificado),$borde,0,'C');
          $pdf->setXY(150,$fila + 3);
          $pdf->cell(50,5,pinta($unidad_licencia),$borde,0,'C');
          $pdf->Ln(12);

          
          foreach((array)$detalle as $row)
          {
            $pdf->setX(13);
            $pdf->Cell(20,5,pinta($row->cantidad),0,0,'C');
            $pdf->MultiCell(120,5, substr(pinta(trim($row->nombre)),0,63),0,'J');
            $pdf->Ln(1.5);
          }
          
          $pdf->SetY(282);
          $borde=0;$pdf->SetX(20);
          $pdf->Cell(0,5,pinta($transportista_nombre),$borde,1,'J')  ;$pdf->SetX(20);
          $pdf->Cell(0,5,pinta($transportista_ruc),$borde,1,'J')  ;
        
          $pdf->AutoPrint();
          $pdf->Output();

      
   }
      
   public function visualizarnotaAction(){
    $request  = new Phalcon\Http\Request();
    $id   =  $request->get("id");
    $data     = array($id);
    $cliente  =  json_decode(Facturacion::datosFacturacionCliente($data));       
    $detalle  =  json_decode(Facturacion::detalleFacturacion($data));
    $this->view->cliente = $cliente;
    $this->view->detalle = $detalle;   
   }
    
    public function enviarCotizacionAction(){


      $request    = new Phalcon\Http\Request();
      $idCot = 60;//$request->getPost("id");

      $dataEmpresa =  json_decode(Empresa::listar())->data[0];
      //print_r($dataEmpresa);die();
      $dataCotizacion =  json_decode(Cotizacion::buscarCotizacionPorId(array($idCot)))->data[0];
      //print_r($dataCotizacion);die();
      $dataDetalle =  json_decode(Cotizacion::detalleCotizacionVista(array($idCot)))->data;
      //print_r($dataDetalle);die();
      $dataPersona = json_decode(Persona::Buscar($dataCotizacion->idper))->data[0];;
      //print_r($dataPersona);die();



      $total_sin_imp = 0.00;
      $impuestos = 0.00;
      $total_cotizacion = 0.00;

      // ========== FPDF ==========  //
      $pdf = new exFPDF('P','mm','A4');

      $wg = 188 ;//Ancho total
      $in = 6; //Interlineado
      $font = 'Arial';
      $tam = 9;

      $pdf->AddPage();
      $pdf->SetFont($font,'',$tam);
      $pdf->MultiCell($wg,6,pinta($dataEmpresa->razonsocial),0,'L');
      $pdf->MultiCell($wg,$in, pinta($dataEmpresa->razonsocial),'T','L');
      $pdf->MultiCell($wg,$in, pinta($dataEmpresa->direccion),0,'L');
      $pdf->MultiCell($wg,$in,"RUC: ".$dataEmpresa->ruc,0,'L');
      $pdf->MultiCell($wg,$in,"Correo: ".pinta($dataEmpresa->correo),0,'L');
      $pdf->MultiCell($wg,$in,pinta("Teléfono: ".$dataEmpresa->telefono),'B','L');
      $pdf->MultiCell($wg,$in,pinta("Contacto: ".$dataEmpresa->contacto),0,'L');

      $pdf->Ln(4);

      $pdf->SetFont($font,'B',20);
      $pdf->MultiCell($wg,$in,pinta("Cotización # 00".$dataCotizacion->idcoti),0,'L');

      $pdf->Ln(5);

      $fila = $pdf->GetY();
      $pdf->SetFont($font,'B',$tam);
      $pdf->MultiCell(50,$in,"Fecha de presupuesto: ",0,'L');
      $pdf->SetXY(60,$fila);
      $pdf->MultiCell(80,$in,"Comercial: ",0,'L');
      $pdf->SetXY(140,$fila);
      $pdf->MultiCell(40,$in,"Forma de Pago: ",0,'R');

      $pdf->SetXY(10,$fila+6);
      $fila = $pdf->GetY();
      $pdf->SetFont($font,'',$tam);
      $pdf->MultiCell(50,$in,pinta($dataCotizacion->fechacoti),0,'L');
      $pdf->SetXY(60,$fila);
      $pdf->MultiCell(80,$in,pinta($dataCotizacion->nomcompleto),0,'L');
      $pdf->SetXY(140,$fila);
      $pdf->MultiCell(40,$in,pinta($dataCotizacion->formapago),0,'R');

      $pdf->Ln(5);

      //-----------------------------------
      //----------- LISTA PRODUCTOS DETALLE
      $table=new easyTable($pdf, '{105, 20, 20, 22, 22}', 'align:L; border:{B};');
         $table->rowStyle('font-style:B;');
         $table->easyCell(pinta('Descripción'), 'valign:B;border:{B};');
         $table->easyCell(pinta('Cantidad'), 'align:R;valign:B;border:{B};');
         $table->easyCell(pinta('Precio Unitario'),'align:R;valign:B;border:{B};');
         $table->easyCell(pinta('Impuestos'),'align:C;valign:B;border:{B};');
         $table->easyCell(pinta('Precio'),'align:R;valign:B');
         $table->printRow();

         foreach($dataDetalle as $row){
          $table->rowStyle('border-color:#ADADAD;');
          $table->easyCell(pinta($row->descripcion), 'align:L;');
          $table->easyCell(pinta($row->cantidad), 'align:R');
          $table->easyCell(pinta($row->precio), 'align:R');
          $table->easyCell(pinta(''), 'align:R');
          $table->easyCell(pinta($row->total), 'align:R');
          $total_sin_imp += $row->total;
          $table->printRow();
         }

      $table->endTable(4);
      //----------- FIN LISTA PRODUCTOS DETALLE
      //-----------------------------------


      $pdf->Ln(4);
      $total_cotizacion = $total_sin_imp + $impuestos;
      $table=new easyTable($pdf, '{22, 25}', 'align:R;border:{T};');
        $table->easyCell(pinta('Total sin impuestos'), 'align:L;valign:T;');
        $table->easyCell($total_sin_imp . ' S/.', 'align:R;valign:T;');
        $table->printRow();
        $table->rowStyle('min-height:7;border-color:#ADADAD;');
        $table->easyCell(pinta('Impuestos'), 'align:L;valign:M;');
        $table->easyCell($impuestos . ' S/.', 'align:R;valign:M;');
        $table->printRow();
        $table->rowStyle('min-height:7;font-style:B;');
        $table->easyCell(pinta('Total'), 'align:L;valign:B;');
        $table->easyCell($total_cotizacion . ' S/.', 'align:R;valign:B;');
        $table->printRow();
      $table->endTable(4);

      $pdf->Ln(10);

    //- Observaciones
    $pdf->MultiCell($wg,6,pinta($dataCotizacion->comentario),0,'L');


    $pdf->Output();

      //$pdf->Output('temp/cotizacion'.$dataCotizacion->idcoti.'.pdf','F');
      // ========== FPDF ==========  //

/*

      $email_user = "mailswebmsb@gmail.com";
      $email_password = "MSB2017*webmail";
      $the_subject = "Cotizacion";
      $address_to = "alecgz94@gmail.com";
      $from_name = "Molino Avila";
      $phpmailer = new PHPMailer();

      // ---------- datos de la cuenta de Gmail -------------------------------
      $phpmailer->Username = $email_user;
      $phpmailer->Password = $email_password;
      //-----------------------------------------------------------------------

      try {
          //$phpmailer->SMTPDebug = 1;
          $phpmailer->SMTPSecure = 'ssl';
          $phpmailer->Host = "smtp.gmail.com"; // GMail
          $phpmailer->Port = 465;
          $phpmailer->IsSMTP(); // use SMTP
          $phpmailer->SMTPAuth = true;

          $phpmailer->setFrom($phpmailer->Username,$from_name);
          $phpmailer->AddAddress($address_to); // recipients email

          $phpmailer->Subject = $the_subject;
          $phpmailer->addAttachment('temp/cotizacion'.$dataCotizacion->idcoti.'.pdf');
          $phpmailer->Body .="<h1 >Repuesta de Cotización</h1>";
          $phpmailer->Body .= "<p>Buenos dias. Adjunto la cotizacion solicitada.</p>";
          $phpmailer->Body .= "<p>Fecha y Hora: ".date("d-m-Y h:i:s")."</p>";
          $phpmailer->IsHTML(true);

          $phpmailer->Send();
          unlink('temp/cotizacion'.$dataCotizacion->idcoti.'.pdf');
          echo '{"error":0, "message": "Correo Enviado"}}';
      } catch (Exception $e) {
          echo '{"error":1, "message": "Hubo un error. Mensaje no enviado"}}';
          //echo 'Mensaje: ' . $phpmailer->ErrorInfo;
      }

*/
    }


    public function reporteVentasAction(){
      ;
      $request        = new Phalcon\Http\Request();
      $response       = new \Phalcon\Http\Response();
      $desde = $request->get('desde');
      $hasta = $request->get('hasta');
      $rango = array($desde,$hasta);
      $listaCots =  json_decode(Cotizacion::listarCotizacionesParaFacturarPorFechas($rango))->data;

      // ========== FPDF ==========  //
      $pdf = new exFPDF('P','mm','A4');

      $wg = 188 ;//Ancho total
      $in = 6; //Interlineado
      $font = 'Arial';
      $tam = 8;


      $pdf->AddPage();
      $pdf->SetFont($font,'',$tam);
      $pdf->MultiCell($wg,6,pinta("REPORTE VENTAS"),0,'L');

      $pdf->Ln(4);

      $pdf->SetFont($font,'',$tam-2);
      //-----------------------------------
      //----------- LISTA PRODUCTOS DETALLE
      $table=new easyTable($pdf, '{20, 20, 18, 10, 45, 25, 18, 15, 15}', 'align:L; border:{B};');
        $table->rowStyle('font-style:B;');
        $table->easyCell(pinta('F.Cotización'), 'valign:B;border:{B};');
        $table->easyCell(pinta('F.Facturado'), 'valign:B;border:{B};bgcolor:#EBEBEB;');
        $table->easyCell(pinta('Doc.Interno'),'valign:B;border:{B};');
        $table->easyCell(pinta('Tipo'),'valign:B;border:{B};bgcolor:#EBEBEB;');
        $table->easyCell(pinta('Nombre/Razón Social'),'valign:B');
        $table->easyCell(pinta('Estado'),'valign:B;bgcolor:#EBEBEB;');
        $table->easyCell(pinta('F.Pago'),'valign:B');
        $table->easyCell(pinta('Total'),'valign:B;bgcolor:#EBEBEB;');
        $table->easyCell(pinta('A cuenta'),'valign:B');
        $table->easyCell(pinta('Saldo'),'valign:B;bgcolor:#EBEBEB;');
        $table->printRow();

        foreach($listaCots as $row){
          $table->rowStyle('border-color:#ADADAD;');
          $table->easyCell(pinta($row->fechacoti), 'align:L;');
          $table->easyCell(pinta($row->fechafact), 'align:L;bgcolor:#EBEBEB;');
          $table->easyCell(pinta($row->docinterno), 'align:L;');
          $table->easyCell(pinta($row->tipodoc), 'align:L;bgcolor:#EBEBEB;');
          $table->easyCell(pinta($row->nomcompleto), 'align:L;');
          $table->easyCell(pinta($row->descripcion), 'align:L;bgcolor:#EBEBEB;');
          $table->easyCell(pinta($row->formapago), 'align:L;');
          $table->easyCell(pinta($row->totalcoti), 'align:L;bgcolor:#EBEBEB;');
          $table->easyCell(pinta($row->pagoacuenta), 'align:L;');
          $table->easyCell(pinta($row->saldopagar), 'align:L;bgcolor:#EBEBEB;');
          $table->printRow();
        }

      $table->endTable(4);
      //----------- FIN LISTA PRODUCTOS DETALLE
      //-----------------------------------

      $pdf->Output();

    }

    public function reportecuentacorrienteclienteAction(){
      
      $request        = new Phalcon\Http\Request();
      $response       = new \Phalcon\Http\Response();
      $vIdper         =  $request->get('idper');
      $vPersona       =  $request->get('persona');
      $data           = array($vIdper);

      $jsonData      = json_decode(Facturacion::buscarVentasCliente($data))->data;
      // ========== FPDF ==========  //
      $pdf = new fpdf('P','mm','A4');

      $wg = 188 ;//Ancho total
      $in = 6; //Interlineado
      $font = 'Arial';
      $tam = 8;


      $pdf->AddPage();
      $pdf->SetFont($font,'',$tam);
      $pdf->Cell($wg,4,pinta("CUENTA CORRIENTE CLIENTE : " . $vPersona),0,1,'L');

      $pdf->Ln(4);
      $pdf->Cell(30,4,'Fecha',1,0,'C');
      $pdf->Cell(30,4,'Documento',1,0,'C');
      $pdf->Cell(10,4,'Tipo',1,0,'C');
      $pdf->Cell(30,4,'Forma Pago',1,0,'C');
      $pdf->Cell(30,4,'Total',1,0,'C');
      $pdf->Cell(30,4,'Acuenta',1,0,'C');
      $pdf->Cell(30,4,'Saldo',1,1,'C');

      $total  = 0;
      $totalS = 0;
      $totalP = 0;

      foreach((array) $jsonData as $row){
          //if($row->formapago == 'CREDITO'){
              $pdf->Cell(30,4,pinta($row->fechafact),1,0,'C');
              $pdf->Cell(30,4,pinta($row->docinterno),1,0,'C');
              $pdf->Cell(10,4,pinta($row->tipodoc),1,0,'C');
              $pdf->Cell(30,4,pinta($row->formapago),1,0,'C');
              $pdf->Cell(30,4, number_format($row->totalcoti,2,'.',' '),1,0,'R');
              $pdf->Cell(30,4, number_format($row->pagoacuenta,2,'.',' '),1,0,'R');
              $pdf->Cell(30,4, number_format($row->saldopagar,2,'.',' '),1,1,'R');

              $total  += $row->totalcoti;
              $totalS += $row->pagoacuenta;
              $totalP += $row->saldopagar;
            //}
      }
      $pdf->Cell(100,4,'TOTALES',0,0,'R');
      $pdf->Cell(30,4, number_format($total,2,'.',' '),1,0,'R');
      $pdf->Cell(30,4, number_format($totalS,2,'.',' ') ,1,0,'R');
      $pdf->Cell(30,4, number_format($totalP,2,'.',' ') ,1,1,'R');

      $pdf->Output();

    }

    public function reporteventapagosclienteAction(){
     
      $request        = new Phalcon\Http\Request();
      $response       = new \Phalcon\Http\Response();



      $vIdper           =  $request->get('idper');
      $vPersona         =  $request->get('persona');
      $data           = array($vIdper);
      $jsonData      = json_decode(Facturacion::buscarVentasCliente($data))->data;
      //print_r($jsonData);die();
      // ========== FPDF ==========  //
      $pdf = new fpdf('P','mm','A4');

      $wg = 188 ;//Ancho total
      $in = 6; //Interlineado
      $font = 'Arial';
      $tam = 8;


      $pdf->AddPage();
      $pdf->SetFont($font,'',$tam);


      $pdf->Cell(20,4,pinta('CLIENTE :  ' . $vPersona),0,1,'L');
      $pdf->Ln();

      foreach( (array) $jsonData as $row)
      {
                  if($row->formapago == 'CREDITO'){

                    $pdf->Cell(20,4,pinta('Fecha Venta  '),1,0,'L');
                    $pdf->Cell(40,4,pinta($row->fechafact),1,0,'C');
                    $pdf->Cell(20,4,pinta('Forma Pago   '),1,0,'L');
                    $pdf->Cell(0,4,pinta($row->formapago),1,1,'L');
                    $pdf->Cell(20,4,pinta('Total Venta    '),1,0,'L');
                    $pdf->Cell(40,4,pinta( number_format($row->totalcoti,2,'.',' ')),1,1,'R');
                    $pdf->Cell(20,4,pinta('Total Acuenta   '),1,0,'L');
                    $pdf->Cell(40,4,pinta( number_format($row->pagoacuenta,2,'.',' ')),1,1,'R');
                    $pdf->Cell(20,4,pinta('Total Saldo    '),1,0,'L');
                    $pdf->Cell(40,4,pinta( number_format($row->saldopagar,2,'.',' ')),1,1,'R');


                    $pdf->SetFillColor(206, 202, 202);
                    $pdf->MultiCell(0,4,'PAGOS / ADELANTOS  ',1,'L',TRUE);

                    $datax           = array($row->idfacturacion);
                    $jsonDataD      = json_decode(Facturacion::buscarPagoAcuenta($datax))->data;
                    $total = 0;
                    foreach ((array) $jsonDataD as $rowd) {
                                    $pdf->Cell(20,4,  $rowd->fechat ,1,0,'C');
                                    $pdf->Cell(40,4, number_format($rowd->monto,2,'.',' '),1,1,'R');
                                    $total  += $rowd->monto;
                    }
                    $pdf->Cell(20,4,'Total Acuenta' ,1,0,'C',TRUE);
                    $pdf->Cell(40,4, number_format($total,2,'.',' '),1,1,'R',TRUE);

                    $pdf->Ln();
                  }
      }

      $pdf->Cell($wg,4,pinta("PAGOS DEL CLIENTE : " . $vPersona),0,1,'L');
      $pdf->Cell($wg,4,pinta("MONTO DEL PEDIDO  : " . $vMonto),0,1,'L');

      $pdf->Ln(4);
      $pdf->Cell(30,4,'Fecha',1,0,'C');
      $pdf->Cell(30,4,'Pago',1,1,'C');

      $total  = 0;
      foreach($jsonData as $row){

              $pdf->Cell(30,4,  $row->fechat ,1,0,'C');
              $pdf->Cell(30,4, number_format($row->monto,2,'.',' '),1,1,'R');
              $total  += $row->monto;

      }
      $pdf->Cell(30,4,'TOTAL',0,0,'R');
      $pdf->Cell(30,4, number_format($total,2,'.',' '),1,0,'R');

      $pdf->Output();

    }

    /*
      Impresion de Proforma
    */

    public function imprimirproformaAction(){
      
            $request    = new Phalcon\Http\Request();
            $idCot      = $request->get("id");
            $dataEmpresa =  json_decode(Empresa::listar())->data[0];
            $dataCotizacion =  json_decode(Cotizacion::buscarCotizacionPorId(array($idCot)))->data[0];
            $dataDetalle =  json_decode(Cotizacion::detalleCotizacionVista(array($idCot)))->data;
            $dataPersona = json_decode(Persona::Buscar($dataCotizacion->idper))->data[0];;
            
            $total_sin_imp = 0.00;
            $impuestos = 0.18;
            $total_cotizacion = 0.00;
      
            // ========== FPDF ==========  //
            $pdf = new jsPDF('P','mm','A4');
            $wg = 100 ;//Ancho total
            $in = 5; //Interlineado
            $font = 'Arial';
            $tam = 8;
      
            $pdf->AddPage();
            $pdf->SetFont($font,'',$tam);
            $pdf->Ln(1);
            $pdf->Image('../public/img/logo.jpg', 10, 3, 28);
            $pdf->setX(100);
            $pdf->MultiCell($wg,$in, pinta($dataEmpresa->razonsocial),'T','L');
            $pdf->setX(100);
            $pdf->MultiCell($wg,$in, pinta(strtoupper($dataEmpresa->direccion)),0,'L');
            $pdf->setX(100);
            $pdf->MultiCell($wg,$in,"CORREO: ".pinta($dataEmpresa->correo),0,'L');
            $pdf->setX(100);
            $pdf->MultiCell($wg,$in,pinta("TELÉFONO: ".$dataEmpresa->telefono),'B','L');
          
            $tam = 9;
            $pdf->Ln(7);
      
            $pdf->SetFont($font,'B',20);
            $pdf->MultiCell(186,$in,pinta("COTIZACIÓN: ".$dataCotizacion->ctcodigo),0,'C');
            $pdf->Ln(5);
      
            $fila = $pdf->GetY();
            $pdf->SetFont($font,'B',$tam);
            //$pdf->Cell(40,$in,pinta("FECHA DE COTIZACIÓN: "),0,0,'L');
            $pdf->Cell(0,$in,pinta($dataCotizacion->fechacoti),0,1,'R');
            $pdf->Cell(20,$in,"CLIENTE: ",0,0,'L');
            $pdf->Cell(0,$in,pinta($dataCotizacion->nomcompleto),0,1,'L');
            $pdf->Cell(20,$in,"DIRECCION: ",0,0,'L');
            $pdf->Cell(0,$in,pinta($dataCotizacion->domiciper),0,1,'L');
            $pdf->Cell(20,$in,"RUC: ",0,0,'L');
            $pdf->Cell(0,$in,pinta($dataCotizacion->numrucper),0,1,'L');
            $pdf->Cell(20,$in,"TELEFONO: ",0,0,'L');
            $pdf->Cell(108,$in,pinta($dataCotizacion->telefper),0,0,'L');

            $pdf->Cell(47,6,pinta('COTIZACIÓN VALIDA HASTA : '),0,0,'L');
            $pdf->Cell(0,6,pinta($dataCotizacion->validohasta),0,1,'L');

            
            
            
            
          // print_r($dataCotizacion);die();
            $pdf->Ln(4);
              $pdf->Cell(10,5,pinta('Item'),1,0,'C');
              $pdf->Cell(110,5,pinta('Descripción'),1,0,'C');
              $pdf->Cell(10,5,pinta('Cant.'),1,0,'C');
              $pdf->Cell(15,5,pinta('Unidad'),1,0,'C');
              //$pdf->Cell(16,5,pinta('P. sin igv'),1,0,'C');
              $pdf->Cell(16,5,pinta('P. con igv'),1,0,'C');
              $pdf->Cell(32,5,pinta('Total'),1,1,'C');
                $item = 1;
                 foreach($dataDetalle as $row){
                  $pdf->SetFont($font,'',7);
                  $pdf->Cell(10,5,pinta($item++),1,0,'C'); 
                  $pdf->Cell(110,5,pinta($row->descripcion),1,0,'L');
                  
                  $pdf->Cell(10,5,pinta($row->cantidad),1,0,'C');
                  $pdf->Cell(15,5,pinta($row->um),1,0,'C');
                  //$pdf->Cell(16,5,pinta(number_format($row->precio / 1.18 , 2, '.',' ')),1,0,'R');
                  $pdf->Cell(16,5,pinta(number_format($row->precio, 2, '.',' ')),1,0,'R');
                  $pdf->Cell(32,5,pinta(number_format($row->total , 2, '.',' ')),1,1,'R');
                  $total_sin_imp += $row->total;
                 }
  
              $pdf->Ln(4);
              //$impuestos = $total_sin_imp * $impuestos;
              $total_cotizacion = $total_sin_imp; // $total_sin_imp + $impuestos;
           
          $pdf->SetFont($font,'',$tam);       
          if($dataCotizacion->incluyeigv == 1){
                $pdf->Cell(165,5,pinta('TOTAL'),0,0,'R');
                $pdf->Cell(22,5,pinta(number_format($total_cotizacion, 2, '.',' ')),'T',1,'R');
              }else{
                $pdf->Cell(168,5,pinta('SUB TOTAL'),0,0,'R');
                $pdf->Cell(22,5,pinta(number_format($total_cotizacion / 1.18 , 2, '.',' ')),'T',1,'R');
                $pdf->Cell(168,5,pinta('IGV'),0,0,'R');
                $pdf->Cell(22,5,pinta(number_format($total_cotizacion - ($total_cotizacion / 1.18 ) , 2, '.',' ')),'T',1,'R');
                $pdf->Cell(168,5,pinta('TOTAL'),0,0,'R');
                $pdf->Cell(22,5,pinta(number_format($total_cotizacion, 2, '.',' ')),'T',1,'R');
              }

          //$pdf->Ln();      
          //- Observaciones
          $pdf->SetFont($font,'',$tam);
          $pdf->Cell(0,6,pinta(''),'B',1,'L');
          $pdf->Cell(35,6,'LUGAR DE ENTREGA :',0,0,'L');
          $pdf->Cell(0,6,pinta($dataCotizacion->lugarentrega),0,1,'L');
          $pdf->MultiCell($wg,6,'OBSERVACIONES :',0,'L');
          $pdf->SetFont($font,'',$tam);
          $pdf->MultiCell($wg,6,pinta($dataCotizacion->comentario),0,'L');
          
          $pdf->Cell(35,6,pinta('CREDITOS Y COBRANZAS : '),0,1,'L');
          $pdf->MultiCell(0,4,pinta($dataCotizacion->creditoscobranzas),0,'J');
          /*$pdf->Ln();    
          $pdf->Cell(80,6,pinta('CUENTA CORRIENTE BCP  :'),0,0,'L');
          $pdf->Cell(0,6,pinta('S/: 191-2451784-0-93'),0,1,'L');
          $pdf->Cell(80,6,pinta('CUENTA CORRIENTE BCP  :'),0,0,'L');
          $pdf->Cell(0,6,pinta('$:  191-2471001-1-15'),0,1,'L');*/
        
          $pdf->AutoPrint();
          $pdf->Output();
      
      
          }

          public function imprimirstockinventarioAction(){  
            $this->view->disable();      
            $pdf = new fpdf('P','mm','A4');
            $request    = new Phalcon\Http\Request();
            
            $data = array($request->get('mes'));
            $jsonData = json_decode( Producto::listarInventario($data) );
            $pdf->AddPage(); 
            $pdf->SetFont('Arial','B',16);
            $fila = 0;
            $pdf->Cell(0,10,'Registro de Inventario',1,1,'C');
            $pdf->SetFont('Arial','',9);
            //print_r( $jsonData->data[0]);die();
            $pdf->Cell(30,5,'Codigo' ,1,0,'C');
            $pdf->Cell(100,5,'Producto' ,1,0,'C');
            $pdf->Cell(20,5,'Stock Fisico' ,1,0,'C');
            $pdf->Cell(20,5,'Inventario' ,1,0,'C');   
            $pdf->Cell(20,5,'Diferencia' ,1,1,'C');   
            $pdf->SetFont('Arial','',8);
           foreach ($jsonData->data as $row){
                //  $pdf->Code39(10,$pdf->getY(), $row->codigobarras ,0.5,10);
              $pdf->Cell(30,5,$row->codigoproducto  ,1,0,'C');
              $pdf->Cell(100,5,$row->nombre ,1,0,'L');
              $pdf->Cell(20,5,$row->stockfisico ,1,0,'C');
              $pdf->Cell(20,5,'' ,1,0,'C');   
              $pdf->Cell(20,5,'' ,1,1,'C');   
              
            }
      
            $pdf->Output();
        }  
        
        public function imprimirticketeraAction()
        {
    
          $request    = new Phalcon\Http\Request();
          $idfactura = array($request->get("id"));
          $dataEmpresa =  json_decode(Empresa::listar())->data[0];
          $dataFacturacion =  json_decode(Facturacion::datosFacturacionCliente($idfactura))->data[0];
          $dataDetalle =   json_decode(Facturacion::detalleFacturacion($idfactura))->data;
          $dataTicketera = json_decode(DocumentoVenta::ticketeras())->data[0];
        //  print_r($dataFacturacion);die();

          
          $pdf = new fpdf('P','mm',array(100,250));
          $borde = 0;
          $pdf->SetMargins(0,0,0,0);
          $pdf->AddPage();
          
           // $pdf->Image('../../images/logo.jpg', 10, -10, 60);
          //$pdf->Ln();
          $pdf->setX(10);
          $pdf->setFont("Arial", "B", 9);
          $pdf->MultiCell(73, 4,"*** $dataEmpresa->razonsocial ***",0, "C");
          $pdf->setX(10);
          $pdf->Cell(80, 4,"-- R.U.C : $dataEmpresa->ruc --", $borde, 1, "C");
          $pdf->setFont("Arial", "", 8);
          $pdf->Ln(1);
          $pdf->setX(10);
          $pdf->MultiCell(65, 4, trim($dataEmpresa->direccion),0, "J");
          $pdf->setX(10);
          $pdf->Cell(20,4,"TELEFONOS :",0,0,"L");
          $pdf->Cell(50,4,$dataEmpresa->telefono,0,1,"L");
          $pdf->setX(10);
          $pdf->setFont("Arial","",8);
          $pdf->Cell(35, 5, "MAQUINA :". $dataTicketera->serie, $borde, 1, "L");
          $pdf->setX(10);
          $pdf->setFont("Arial","",8);
          $pdf->Cell(35, 5, "AUTORIZACION SUNAT :" . $dataTicketera->autorizacionsunat , $borde, 1, "L");
          
          $pdf->setX(10);
          $pdf->Cell(35, 5, "FECHA   :  ".$dataFacturacion->fecha, $borde, 1, "L");
          //$pdf->setX(10);
          //$pdf->Cell(35, 5, "HORA    :  ".$dataFacturacion->hora, $borde, 1, "L");
          
          $pdf->setX(10);
          $pdf->setFont("Arial", "", 8);
          if(substr($dataFacturacion->documento,0,1)=='B'){
            $pdf->Cell(65, 5,'** BOLETA ELECTRONICA :  '. $dataFacturacion->seriedoc.'-'.$dataFacturacion->numerodoc .' **' , 0, 2, "C");
          }else{
                if( substr($dataFacturacion->documento,0,1)=='N')
                {
                  $pdf->Cell(65, 5,'** NOTA PEDIDO :  '. $dataFacturacion->seriedoc.'-'.$dataFacturacion->numerodoc .' **', 0, 2, "C");  
                }
                else{
                  $pdf->Cell(65, 5,'** FACTURA ELECTRONICA :  '. $dataFacturacion->seriedoc.'-'.$dataFacturacion->numerodoc .' **', 0, 2, "C");
                }
          }

        $pdf->Ln(1);
        $pdf->setX(10);
    
        $pdf->setFont("Arial", "", 7);
        $pdf->Cell(32, 5, "DESCRIPCION", $borde, 0, "L");
        $pdf->Cell(10, 5, "CANT", $borde, 0, "L");
        $pdf->Cell(10, 5, "P.UNI.", $borde, 0, "R");
    
        $pdf->Cell(10, 5, "IMP.", $borde, 2, "R");
        $pdf->setX(10);
        $pdf->Cell(80, 5,'===================================================', $borde, 2, "L");
        //$pdf->Ln(5);
        $totalventa = 0;
        foreach ($dataDetalle as $row) {
          $pdf->setX(10);
            $pdf->setFont("Arial", "", 7);
            $pdf->MultiCell(65, 4, $row->producto, $borde, "L");
            
            $pdf->setFont("Arial", "", 10);
            if($row->cantidad == 1 && $row->unidadcantidad >0){
              $pdf->setX(36);
              $pdf->Cell(7, 5, $row->unidadcantidad .' und', $borde, 0, "R");
            }else{
              $pdf->setX(40);
              $pdf->Cell(7, 5, $row->cantidad, $borde, 0, "R");
            }
            $pdf->Cell(14, 5, number_format($row->precio, 2, ".", ","), $borde, 0, "R");
            $pdf->Cell(14, 5, number_format($row->total , 2, ".", ","), $borde, 1, "R");
            $totalventa = $totalventa + $row->total;
        }
    
        $pdf->Ln(5);
          $pdf->setX(42);
        if($dataFacturacion->iddocumento == 1){
          $pdf->setFont("Arial", "", 9);
          $pdf->Cell(15, 5, "SubTotal :", $borde, 0, "L");
          $pdf->setFont("Arial", "", 10);
          $pdf->Cell(14, 5, number_format($totalventa / 1.18 , 2, ".", ","), $borde, 2, "R");
          $pdf->setX(42);
          $pdf->setFont("Arial", "", 9);
          $pdf->Cell(15, 5, "IGV :", $borde, 0, "L");
          $pdf->setFont("Arial", "", 10);
          $pdf->Cell(14, 5, number_format( $totalventa - ($totalventa / 1.18) , 2, ".", ","), $borde, 2, "R");
          $pdf->setX(42);
          $pdf->setFont("Arial", "", 9);
          $pdf->Cell(15, 5, "Total :", $borde, 0, "L");
          $pdf->setFont("Arial", "", 10);
          $pdf->Cell(14, 5, number_format($totalventa , 2, ".", ","), $borde, 2, "R");
        }else{
          $pdf->setFont("Arial", "", 9);
          $pdf->setX(42);
          $pdf->setFont("Arial", "", 9);
          $pdf->Cell(15, 5, "Total :", $borde, 0, "L");
          $pdf->setFont("Arial", "", 10);
          $pdf->Cell(14, 5, number_format($totalventa, 2, ".", ","), $borde, 2, "R");
        }
        $pdf->setFont("Arial", "", 7);
        $pdf->setX(10);
          $pdf->Cell(80, 5, '====================================================', $borde, 2, "L");
          $pdf->setFont("Arial", "", 9);
          $pdf->Cell(20, 5, "CLIENTE : ", $borde, 0, "L");
          $pdf->setFont("Arial", "", 9);
          $pdf->Cell(65, 5, $dataFacturacion->nomcompleto, $borde, 2, "L");
          $pdf->setX(10);
          $pdf->Cell(20, 5, "RUC/DNI : ", $borde, 0, "L");
          $pdf->setFont("Arial", "", 9);
          $pdf->Cell(65, 5, $dataFacturacion->ruc_dni, $borde, 2, "L");
          $pdf->setX(10);
          $pdf->Ln();
          $pdf->setFont("Arial", "B", 8);
          $pdf->setX(10);
          $pdf->MultiCell(65, 5, "*** GRACIAS POR SU PREFERENCIA ***.",0, "C");
          $pdf->Ln(3);
          $pdf->output();
        }
      
}
