function alignTable(tabla)
{
    //console.log( "TABLA SELECCIONADA = "  +   $("#" + tabla.id)   );
    //console.log("THEAD :" + $("#" + tabla.id).find("thead") )

    console.log(  "CHILDRENS: " +  $("#" + tabla.id).find("thead td") .length );
    anchoColumnaIdentificadores = parseInt(   $(".col-Identificadores").css("width"))   ;
    console.log("anchoColumnaIdentificadores = " +   anchoColumnaIdentificadores);



    anchoPantalla = parseInt(   $("#" + tabla).innerWidth() );
    console.log("ANCHO PANTALLA = " +  anchoPantalla);

    columnas = parseInt($(".tablitaHeader").length);
    console.log("Columnas de la tabla = " + columnas);

    anchoUnitario =  (anchoPantalla - anchoColumnaIdentificadores)  / (columnas - 1) ;
     console.log("(anchoPantalla - anchoColumnaIdentificadores  ) / (Columnas - 1) = " +  anchoUnitario);

    $("." +tabla + "Header").each(function(index,element)
    {
        //console.log(index + " -> " + element + " = " + corresponde);

        $(element).css("width",  anchoUnitario);
    });
    $("." + tabla +"Data").each(function(index,element)
    {
        //console.log(index + " -> " + element + " = " + corresponde);

        $(element).css("width",  anchoUnitario);
    });

    $(".col-Identificadores").css("width",anchoColumnaIdentificadores);


                    //SE SEPARAN LAS FILAS PARES E IMPARES:
    //PAR 
    $("#" + tabla + " tbody tr:odd").each(function(index,element)
    {
        $(element).addClass("par");
    });
    //IMPAR
    $("#" + tabla + " tbody tr:even").each(function(index,element)
    {
        $(element).addClass("impar");
    });
}
function resize()
{
    alignTable("tablita");
}


$().ready(function()
{
    resize();
});
        
function sel(identificador)
{
    console.log("BOTON SELECCIONADO = " + identificador + " JQUERY OBJECT = "+ $("#"+identificador.id));
    
    $("#"+identificador.id).css("border" , "solid 2px black");
}