let items = [Notebook, Pen, Pencil, Eraser, Sharpener];
function displayItems(products) {
	if (products.length === 0) {
		document.getElementById("list-items").innerHTML =
			'<li class="list-group-item">No items to display</li>';
		return;
	}
	let eachProduct = "";
	products.forEach((item, i) => {
		eachProduct += `
        <li class="list-group-item list-group-item-success" id="list-items">
			${item}
		</li>
        <button class="btn btn-primary float-end"  onclick="deleteItem(${i})">X</button>
        
        `;
	});
	
}
deleteItem(items);
document.getElementById("list-items").innerHTML = eachProduct;
	function deleteItem(index) {
		items.splice(index, 1);
		displayItems(items);
	}
