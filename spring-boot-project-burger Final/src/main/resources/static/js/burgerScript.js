function pickburger() {
	// assign the select
	var inamelist = document.getElementById("iname").value;
	console.log(inamelist); // Display the selected value in the console

	if (inamelist == "Select Burger") {
		document.getElementById("price").value = 0;
	} else if (inamelist == "Chicken Burger") {
		document.getElementById("price").value = 200;
	} else if (inamelist == "Chicken Cheese Burger") {
		document.getElementById("price").value = 200;
	} else if (inamelist == "Charlie Burger") {
		document.getElementById("price").value = 300;
	} else if (inamelist == "Crispy Chicken Burger") {
		document.getElementById("price").value = 400;
	}
}

function pickPayType() {
	// assign the select
	var paymentType = document.getElementById("pType").value;
	console.log(paymentType); // Display the selected value in the console

}


function calTotal() {
	var iprice = document.getElementById("price").value;
	var iqty = document.getElementById("qty").value;
	var total = iprice * iqty;
	document.getElementById("total").value = total;
	console.log(total);
}


// #######################################################################

function updateClick() {
	// Build product object from inputs
	var burger = {
		id : 0,
		name : "",
		price : 0,
		qty : 0,
		pType : "",
		
	} // Attributes of the object
	burger = new Object(); //Object for product

	// bind the user entered values
	burger.id = $("#id").val();
	burger.name = $("#iname").val(); // get the values of form elements "name"
	burger.price = $("#price").val();
	burger.qty = $("#qty").val();
	burger.total = $("#total").val();
	burger.pType = $("#pType").val();
	productAdd(burger);
}

function productAdd(burger) { // Call Web API to save a Product
	$.ajax({
		url : "/",
		type : 'POST',
		contentType : "application/json;charset=utf-8",
		data : JSON.stringify(burger),
		success : function(burger) {
		productAddSuccess(burger);
		}
	});
}

function productAddSuccess(burger) {
	//productAddRow(burger);
	formClear();
}

function formClear() {
	$("#id").val("");
//	$("#cname").val("");
	$("#name").val("");
	$("#price").val("");
	$("#qty").val("");
	$("#total").val("");
	$("#total").val("");
	$("#pType").val("");
}
function addClick() {
	formClear();
}