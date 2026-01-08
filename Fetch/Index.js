function displayData(data) {
    let dataBox = document.getElementById("dataBox");
    dataBox.innerHTML = "";
    data.forEach((item) => {
        dataBox.innerHTML += `
            <div class="row my-5 p-3 border-none shadow-sm">
                <div class="col-6">
                    <img src="${item.image}" class="card-img-top product-img" alt="${item.title}"/>
                </div>
                <div class="col-6">
                    <h2 class="card-title mb-3 coustomHeading-product">${item.title}</h2>
                    <p class="card-text my-3">Category: ${item.category}</p>
                    <h3 class="card-subtitle mb-2 text-muted"> ₹${item.price}</h3>
                    <h5 class="card-text">  ⭐ ${item.rating.rate}</h5>
                </div>
            </div>
        `;
    });
}
function getData() {
    //Asynchronous javascript and XML

    //1.Create XMLHttpRequest Object

    let xhr = new XMLHttpRequest();

    //2.Create A Request

    xhr.open("GET", "https://fakestoreapi.com/products", true);

    //3.Send the request
    xhr.send();
    
    //4.onece the request has been sent,it may take some time to load the data from server
    xhr.addEventListener("progress", function () {
        let loaderEle = document.getElementById("loader-ele");
        loaderEle.innerHTML = "Data is loading...";
    });

    //5. onece theb data is loaded we have to process the data
    xhr.addEventListener("load", function () {
        let fetchData = JSON.parse(xhr.responseText);
        displayData(fetchData);
    });
}

// Call function
getData();
