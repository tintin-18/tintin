//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
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

            //Muestro las imagenes en forma de galería
            showcartinfo(cartinfo.articles);
        }
    });
});

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

});




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