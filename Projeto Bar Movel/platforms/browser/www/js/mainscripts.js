// Initialize app
var app = new Framework7({
    material: true
});

var $$ = Dom7;
var mainView = app.addView('.view-main', {});

$$(document).on('deviceready', function() {
    console.log("Device is ready!");
    
});

app.onPageInit('welcome', function (page) {
    
});

app.onPageInit('usuario', function (page) {
	Usuario.deslogarUsuario();

	if($$("#txtTipoUsuario").text() == "Premium"){
		$$("#txtTipoUsuario").css("font-weight", "bold");
		$$("#txtTipoUsuario").css("color", "#333");
	}
});

app.onPageInit('cervejas', function (page) {
	Produtos.getProdutos();
});

app.onPageInit('carrinho', function (page) {
	cleanCart();
	getCartItems();
});

/** VARIAVEIS **/
var item;
var carrinho = [];

function getCartItems(){
	var qtdecarrinho = carrinho.length;
	
	try{
		if(qtdecarrinho == 0){
			$$("#alertzeroitens").css("display", "block");
			$$(".btn-carrinho").hide();
		}
		else{
			$$("#alertzeroitens").css("display", "none");
			$$(".btn-carrinho").show();
		}
	}
	catch(ex){
		throw ex.toString();
	}
}

function addQtdProd(valor){
	var atual = parseFloat($$("#txtQtdPedido").val());
	var newqtd = atual + 1;
	var calculovalor = valor * newqtd;

	$$("#txtQtdPedido").val(newqtd);
	$$("#txtPrecoFinalCalc").text(calculovalor.toFixed(2));
}

function rmvQtdProd(){
	var atual = parseFloat($$("#txtQtdPedido").val());

	if(atual != 0){
		var newqtd = atual - 1;
		$$("#txtQtdPedido").val(newqtd);
	}
}

function cleanCart(){
	$$("#btnLimparCarrinho").click(function(){
		$$("#txtTotalCompraCarrinho").text(0);
		$$("#lstCarrinho li").remove();

		var qtcarrinho = $$('ul#lstCarrinho li').length;
	
		if(parseFloat(qtcarrinho) == 0){
			$$("#alertzeroitens").css("display", "block");
			$$(".btn-carrinho").hide();
		}
		else{
			$$("#alertzeroitens").css("display", "none");
			$$(".btn-carrinho").show();
		}
	});
}