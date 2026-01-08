let items = [
	{
		id: 101,
		pName: "iWatch",
		imgUrl: "https://m.media-amazon.com/images/I/61bJZx1v8GL.jpg",
		price: 65000,
		rating: 4.2,
		qty: 1,
	},
	{
		id: 102,
		pName: "iPhone",
		imgUrl:
			"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-card-40-17pro-202509_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=WVVFRzUzVk1oblJhbW9PbGNSU25ja3doNjVzb1FWSTVwZWJJYThYTHlrNzQzbUlIR1RvazhDRHNOQlYvM3g2dFIwdkZSSnBZYjhOaHBpM2lkYTFBUEZHTmVoMWFVZloyU3lqdmZCOUFEeDF6K2N6UFd4K21VWHNnbWZBQ3hSanQ",
		price: 120000,
		rating: 4.9,
		qty: 1,
	},
	{
		id: 107,
		pName: "Mac",
		imgUrl:
			"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mba13-skyblue-select-202503?wid=892&hei=820&fmt=jpeg&qlt=90&.v=M2RyY09CWXlTQUp1KzEveHR6VXNxcTQ1bzN1SitYTU83Mm9wbk1xa1lWN2h4SGtCQ2R3aStVaDRhL2VUV1NjdkJkRlpCNVhYU3AwTldRQldlSnpRa0lIV0Fmdk9rUlVsZ3hnNXZ3K3lEVlk",
		price: 150000,
		rating: 4.8,
		qty: 1,
	},
	{
		id: 109,
		pName: "iPad",
		imgUrl: "https://inventstore.in/wp-content/uploads/2024/05/32.png",
		price: 45000,
		rating: 4.3,
		qty: 1,
	},
	{
		id: 109,
		pName: "Mac Mini",
		imgUrl: "https://inventstore.in/wp-content/uploads/2024/11/7-scaled.webp",
		price: 55000,
		rating: 4.7,
		qty: 1,
	},
	{
		id: 144,
		pName: "Headset",
		imgUrl:
			"https://www.designinfo.in/wp-content/uploads/2024/04/Apple-AirPods-Max-Silver-1.webp",
		price: 65000,
		rating: 3.9,
		qty: 1,
	},
	{
		id: 124,
		pName: "Vision Pro",
		imgUrl:
			"https://www.designinfo.in/wp-content/uploads/2024/02/apple-vision-pro-256gb-21-485x485-optimized.webp",
		price: 455000,
		rating: 3.9,
		qty: 1,
	},
	{
		id: 129,
		pName: "Airpods",
		imgUrl:
			"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-pro-compare-202509_FMT_WHH?wid=286&hei=324&fmt=png-alpha&.v=ZnlNck16RHdFMkxPbVgyckcxQ295TE02ak1jaHY5MHM0UFBuZUZVbFFyc3pjWXI4WEQ3UWRkKzlNcE1ISk5kVkpsaXN3MHNidUNvd1JEcVdBVnlCQ3JoLzFaYm9hR1F3Sk1JcjJiYVozdnk1dDgvV3BhU1hoSzFPUEZjam5HQ2g",
		price: 25000,
		rating: 4.1,
		qty: 1,
	},
];
// let items = []; // empty array to check...

// function to get products dynamically...
function getProducts(items) {
	let eachProduct = "";
	items.forEach((obj) => {
		eachProduct += `
        <div class="col-md-3 mb-4 my-5 items">
            <div class="card m-auto" style="width: 18rem">
 				<img
					src="${obj.imgUrl}"
					class="card-img-top img-fluid coustomImg"
					alt="Product Image"
				/>
				<div class="card-body">
					<h1 class="card-title fw-bold text-center">${obj.pName}</h1>
					<h4 class="card-text text-center p-2">&#8377;${obj.price}</h4>
					<h4 class="card-text text-center p-2">⭐️ ${obj.rating}</h4>
					<div class="bottom text-center">
						<div class="btn" id="btnDec">➖</div>
						<span id="CountNum">${obj.qty}</span>
					<div class="btn" id="btnInc">➕</div>
					</div>
				</div>
            </div>
		</div>
        `;
	});
	return eachProduct;
}
// document.getElementById("product").innerHTML = getProducts(items); // display products...
if (items.length === 0) {
	document.querySelector('#product').innerHTML =
		"<h2 class='text-center text-danger font-weight-bold fs-1'>No Products Available</h2>";
	// return;
}
let arr = [];
for (let prod of items) {
	if (prod.id == id) {
		console.log(prod);
		++prod.qty;
	} else {
		let newProd = { ...prod, qty: ++prod.qty };
		arr.push(newProd);
	}
}

let countbtn = document.getElementById("CountNum");
let count = localStorage.getItem("count") ? localStorage.getItem("count") : 0;
countbtn.textContent = count;

document.getElementById("btnDec").addEventListener("click", countDecrementHandle); // decrement button...
document.getElementById("btnInc").addEventListener("click", countIncrementHandle); // increment button...

// button for incrementing the count
function countIncrementHandle() {
	if (count >= 10) {
		alert("You can not add more than 10 items in the cart");
		return;
	}

	count++;
	window.localStorage.setItem("count", count);
	countbtn.textContent = localStorage.getItem("count", count);
}

// button for decrementing the count
function countDecrementHandle() {
	if (count < 1) {
		count = 0;
		return;
	}

	count--;
	localStorage.setItem("count", count);
	countbtn.textContent = localStorage.getItem("count", count);
}
