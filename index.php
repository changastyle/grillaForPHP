<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>GRILLA</title>
        <link rel="Stylesheet" href="index.css">
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
        <script src="index.js"></script>
        <style>
          
        </style>
    </head>
    <body onresize="resize();">
        
        
        <div class ="contenedoresDeTabla">
        
            <input type="text" id="filtroTablita">
            
            <table id="tablita" border="1">
                <thead id="tablitathead">
                    <tr>
                        <td class="tablitaHeader Header col-Identificadores">IDE</td>
                        <td class="tablitaHeader Header">H1<div class="botonUP"></div><div class="botonDOWN"></div></td>
                        <td class="tablitaHeader Header">H2</td>
                        <td class="tablitaHeader Header">H3</td>
                        <td class="tablitaHeader Header">H4</td>
                        <td class="tablitaHeader Header">H5</td>
                        <td class="tablitaHeader Header colOperaciones">Operaciones</td>
                    </tr>
                </thead>

                <tbody>
                    <?PHP 
                    for($n = 0 ; $n < 50 ;$n ++)
                    {
                        ?>
                        <tr>
                            <td class="tablitaData col-Identificadores"><button class="identificador" onclick="sel(this)"><?PHP echo $n?></button></td>
                            <td class="tablitaData"><?PHP echo rand(5 ,15) ?></td>
                            <td class="tablitaData"><?PHP echo rand(5 ,15) ?></td>>
                            <td class="tablitaData"><?PHP echo rand(5 ,15) ?></td>
                            <td class="tablitaData"><?PHP echo rand(5 ,15) ?></td>
                            <td class="tablitaData"><?PHP echo rand(5 ,15) ?></td>
                            <td class="tablitaData colOperaciones"><a href="">UPD</a>/<a href="">DEL</a></td>
                        </tr>  
                        <?PHP
                    }
                    ?>
                </tbody>
            </table>
        </div>
        
    </body>

</html>