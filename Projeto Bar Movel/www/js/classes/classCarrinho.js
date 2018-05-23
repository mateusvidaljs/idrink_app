var Carrinho = {
	carrinho: [],
	nomeprod: '',

	setItemData: function(page){
		var nome = page.query.nome;
		var id = page.query.idprod;
		var foto = page.query.foto;
		var preco = page.query.preco.replace(".", ",");
		var categoria = page.query.categoria;
		var qtdeunidade = page.query.qtde;
		var unidade = page.query.unidade;
		var teor = page.query.teor;
		var pais = page.query.pais;
		var icone_pais = page.query.iconepais;

		$$("#txtNomeProdutoTitle").text(nome);
		$$("#txtNomeProduto").text(nome);
		$$("#txtPrecoCart").text(preco);

		$$("#txtCategoriaCarrinho").text(categoria);
		$$("#txtQtdeCarrinho").text(qtdeunidade + " " + unidade);
		$$("#txtTeorCarrinho").text(teor + "%");
		$$("#txtPaisOrigem").text(pais);
		
		$$("#txtFotoProduto").attr("src", foto);
		$$("#imgIconePais").attr("src", icone_pais);
	},

	getCarrinho: function(){

	}
}