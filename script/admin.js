let propertyType = document.getElementById("propertyType");
let propertyLocation = document.getElementById("propertyLocation");
let propertyBedrooms = document.getElementById("propertyBedrooms");
let propertyPrice = document.getElementById("propertyPrice");


if(localStorage.getItem("myPoducts") == null){
    productContainer = [];
}
else{
    productContainer=JSON.parse(localStorage.getItem("myPoducts"));
    displayProduct();
}




function addProduct(){
    console.log(propertyType);

    let product = {
        type: propertyType.value,
        location:propertyLocation.value,
        bedrooms:propertyBedrooms.value,
        price:propertyPrice.value
    }

    console.log(product);

    productContainer.push(product);

    localStorage.setItem("myPoducts", JSON.stringify(productContainer));

    displayProduct();

    clearForm();
}


function displayProduct(){
    let productItem="";
    
    for(let i=0; i<productContainer.length; i++){
        
        productItem+=
        `
        <tr>
            <td>`+(i+1)+`</td>
            <td>`+productContainer[i].type+`</td>
            <td>`+productContainer[i].location+`</td>
            <td>`+productContainer[i].bedrooms+`</td>
            <td>`+productContainer[i].price+`</td>
            <td> <button class="btn btn-outline-warning">Update</button> </td>
            <td> <button class="btn btn-outline-danger" onclick="deleteProduct(`+i+`)"> Delete</button> </td>
        </tr>
        
        `
    }

    document.getElementById("myBody").innerHTML=productItem;
}


function clearForm()
{
    propertyType.value ="";
    propertyLocation.value ="";
    propertyBedrooms.value ="";
    propertyPrice.value ="";
}


function deleteProduct(index)
{
    productContainer.splice(index,1);
    console.log(localStorage.getItem("myProducts"));
    localStorage.setItem("myProducts", JSON.stringify(productContainer));
    displayProduct();
}



