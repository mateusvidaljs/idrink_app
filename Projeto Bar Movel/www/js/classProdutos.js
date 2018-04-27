var Produtos = {
	getProdutos: function(){
		try{
			$$.get("http://192.168.1.108:5000/produtoporcategoria/1", function(data, status){
				var obj = JSON.parse(data);
				var index = obj.length;
				var proddata = [];

				for(var i = 0; i < index; i++){
					proddata.push({
						id: obj[i]["idproduto"],
						nome: obj[i]["nomeproduto"],
						preco: obj[i]["precocompra"]
					});

					var produto = '';
					produto += '<span id="txtPrecoProduto_' + obj[i]["idproduto"].toString() + '" class="produto-single col-33" onclick="Produtos.setCalculoProd(this.id)">';
					produto += '<div class="cervejas produtos panelprod color-orange">';
					produto += '<img class="fotos-produtos" src="img/icons/Heineken.png"><br/>';
					produto += '<hr>';
					produto += '<span id="txtNomeBebida_' + obj[i]["idproduto"].toString() + '" class="nome-bebida wspace-none">' + obj[i]["nomeproduto"].replace("Cerveja ", "") + '</span><br>';
					produto += '<span class="valor-unidade wspace-none">' + obj[i]["qtdeunidade"] + ' ' + obj[i]["unidade"] + '</span><br>';
					produto += '<span id="txtPrecoProduto_' + obj[i]["idproduto"].toString() + '" class="preco-prod wspace-none">$ ' + obj[i]["precocompra"].toString().replace(".",",") + '</span>';
					produto += '</div>';
					produto += '</span>';

					$$(".produtosbd").append(produto);
				}
		    });
		}
		catch(ex){
			throw ex;
		}
	},

	setCalculoProd: function(id){
		var id_format = id.split("_");
		var valorid = id_format[1];
		var valor_campo = $$("#txtPrecoProduto_" + valorid).text().split("$");
		var preco_produto = parseFloat(valor_campo[1].replace(",", "."));
		var estrutura = '<div class="item-input"><div class="row"><button type="button" class="button button-fill color-red" onclick="rmvQtdProd()"><i style="color: #fff" class="icon material-icons">remove</i></button><input type="number" id="txtQtdPedido" name="txtQtdPedido" value="1"><button type="button" id="btnAddQtd" class="button button-fill color-green" onclick="addQtdProd(' + preco_produto + ')"><i style="color: #fff" class="icon material-icons">add</i></button></div><br><div class="row row-precocalculado">$<span id="txtPrecoFinalCalc">' + preco_produto + '</span></div></div>';
		var novopreco;

		app.modal({
		    title: 'Quantidade',
		    text: estrutura,
		    buttons: [
		      {
		        text: 'Cancelar',
		        onClick: function() {
		          app.alert($$("#txtQtdPedido").val());
		        }
		      },
		      {
		        text: 'Confirmar',
		        onClick: function() {
		          //app.alert('You clicked second button!');
		          novopreco = $$("#txtPrecoFinalCalc").text();
		          Carrinho.addItem(valorid, novopreco);
		        }
		      },
		    ]
		  });

		//console.log(preco_produto);
	}
}