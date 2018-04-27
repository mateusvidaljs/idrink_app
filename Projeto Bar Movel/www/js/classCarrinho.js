var Carrinho = {
	carrinho: [],
	nomeprod: '',

	addItem: function(iditem, preco){
		var criatura = this.getDadosProduto(5);

		this.carrinho.push({
			id: iditem,
			preco: preco
		});

		console.log("YUGIOH: " + criatura);
	},

	getDadosProduto: function(id){
		var monstro = "LULU";
		try{
			$$.get("http://192.168.1.108:5000/produto/" + id, function(data, status){
				var obj = JSON.parse(data);
				this.nomeprod = obj[0]["nomeproduto"];
				console.log("varrer " + this.nomeprod);
		    });
		}
		catch(ex){
			throw ex;
		}

		return monstro;
	},

	getCarrinho: function(){

	}
}