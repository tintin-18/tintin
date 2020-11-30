//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
//(Invoca al JSON y muestra la informacion de los articulos)
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            cartinfo = resultObj.data.articles[0];

            var nombredearticulo=document.getElementById("name-article");
            var preciodearticulo=document.getElementById("precio-unitario");
            var cantidaddearticulo=document.getElementById("cantidad-article");
            var monedadearticulo=document.getElementById("moneda-article");
           
            nombredearticulo.innerHTML= cartinfo.name;
            preciodearticulo.innerHTML= cartinfo.unitCost;
            cantidaddearticulo.innerHTML= cartinfo.count;
            monedadearticulo.innerHTML= cartinfo.currency;

            showcartinfo(cartinfo.articles);
        }
    });
});


//Funcion que define el subtotal multiplicando el precio por la cantidad.
function subtotalarticle(preciodearticulo, cantidaddearticulo){
var subtotal1=preciodearticulo*cantidaddearticulo;

}
  
//Funcion que trae el valor del input "cantidad" y multiplica por el costo unitario.
  document.getElementById("cantidad").addEventListener("change", function () {
    var num = document.getElementById("cantidad").value;

    impSubtotal = document.getElementById("sub-total");
    impSubtotal.innerHTML = num * 100;
    subT = 100 * num;
    subT = this.value

    subtotalarticle();
document.getElementById("productCostText").innerHTML = 100 * num
});

//funcion que calcula el costo de envio según el tipo
document.getElementById("goldradio").addEventListener("click", function () {
var porcentaje = document.getElementById("goldradio").value;

    impSubtotal = document.getElementById("sub-total").innerText;
    document.getElementById("comissionText").innerHTML = porcentaje * impSubtotal
    actualizarcostototal ()});
    
document.getElementById("premiumradio").addEventListener("click", function () {
        var porcentaje = document.getElementById("premiumradio").value;
        
            impSubtotal = document.getElementById("sub-total").innerText;
            document.getElementById("comissionText").innerHTML = porcentaje * impSubtotal
            actualizarcostototal ()});
            
document.getElementById("standardradio").addEventListener("click", function () {
                var porcentaje = document.getElementById("standardradio").value;
                
                    impSubtotal = document.getElementById("sub-total").innerText;
                    document.getElementById("comissionText").innerHTML = porcentaje * impSubtotal
                    actualizarcostototal ()});
                    
                    
                    
//funcion que calcula el costo total de la compra.                    
function actualizarcostototal () {                    
var subtotal2 = document.getElementById("sub-total").innerText;
var porcentaje2 = document.getElementById("comissionText").innerText;
                    
document.getElementById("totalCostText").innerHTML = subtotal2 * 1 + porcentaje2 * 1


};
//Funcion que inserta un html con la informacion de un articulo cuando se solicita.
function showcartinfo(array) {
    let htmlContentToAppend = "";

    for (let i = 0; i < array.length; i++) {
        let carrito = array[i];

        htmlContentToAppend +=`          
            <h4 class="mb-1">`+ carrito.name +`</h4>
          <small class="text-muted">` + carrito.count + ` artículos</small> 
                
 <p>`+carrito.unitCost + ` `+carrito.currency+`
                
                <img src="` + carrito.src + `" 
                       
                `
    document.getElementById("cart-articles").innerHTML = htmlContentToAppend;}}

//Funcion que confirma si el valor de campo esta completo
//y que no falta ninguno por completar.
function confirmacion(){
    let faltantes = 0
    
    if(document.getElementById("productName1").value == ""){
        alert("Debe completar el campo de Calle");
        faltantes ++
    } 
    if(document.getElementById("productName2").value == ""){
        alert("Debe completar el campo de Numero");
        faltantes ++
    }
    if(document.getElementById("productName3").value == ""){
        alert("Debe completar el campo de Esquina");
        faltantes ++
    }
    if(document.getElementById("facturacion").value == ""){
        alert("Debe completar el campo de ID de Facturacion");
        faltantes ++
    }

    if (faltantes == 0) {
        document.getElementById("mensajefinal").innerHTML = "Felicidades por tu compra"}
    else {
        document.getElementById("mensajefinal").innerHTML = "Debe completar toda la información"
    }
}
