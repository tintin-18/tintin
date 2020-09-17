var product = {};
function showcommentsList(comentarios){
    let htmlContentToAppend = "";
    for(let i = 0; i < comentarios.length; i++){
        let comment = comentarios[i];

                htmlContentToAppend += `                      
                    <div class="col">

                         <h6 class="mb-1">`+ comment.user +`</h6>
                            <a>` + comment.description + ` </a>                     
                        <p>`+comment.score+`/5</p>
                        <b> `+comment.dateTime+` </b>
                        <hr></hr>
                        
                    </div>`
                    
        }

        document.getElementById("comment").innerHTML = htmlContentToAppend;
    }

function showImages(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImages").innerHTML = htmlContentToAppend;
    }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            product = resultObj.data;

            let productNameHTML  = document.getElementById("productName");
            let productDescriptionHTML = document.getElementById("productDescription");
            let productCostHTML = document.getElementById("productCost");
            let productCurrencyHTML = document.getElementById("productCurrency");
            let productSoldCountHTML = document.getElementById("productSoldCount");
            let productCategoryHTML = document.getElementById("productCategory");
            let productImagesHTML = document.getElementById("productImages");
        
            productNameHTML.innerHTML = product.name;
            productDescriptionHTML.innerHTML = product.description;
            productCostHTML.innerHTML = product.cost;
            productCurrencyHTML.innerHTML = product.currency;
            productSoldCountHTML.innerHTML = product.soldCount;
            productCategoryHTML.innerHTML = product.category;
            productImagesHTML.innerHTML = product.Images;


            //Muestro las imagenes en forma de galería
            showImages(product.images);
        
        }
    });
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            productcoments = resultObj.data;

            


            //Muestro las imagenes en forma de galería
            showcommentsList(productcoments);
        }
    });
});


