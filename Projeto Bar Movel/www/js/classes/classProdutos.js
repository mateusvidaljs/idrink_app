var Produtos = {
	getProdutos: function(idcategoria){
		try{
			$$.get("http://192.168.1.107:5000/produtos/categoria/" + idcategoria, function(data, status){
				app.showPreloader("Buscando Produtos...");
				var obj = JSON.parse(data);
				var index = obj.length;

				if(index == 0){
					app.hidePreloader();
					app.alert("Não foram encontrados produtos.", "Ops!");
				}
				else{
					for(var i = 0; i < index; i++){
						var id = obj[i]["idproduto"];
						var nome = obj[i]["nomeproduto"];
						var foto = obj[i]["foto"];
						var preco = obj[i]["precovenda"].toFixed(2);
						var subcategoria = obj[i]["subcategoria"];
						var qtdebebida = obj[i]["qtdeunidade"];
						var unidade = obj[i]["unidade"];
						var teor = obj[i]["teoralcoolico"];
						var pais = obj[i]["pais"];
						var icone_pais = obj[i]["icone"];

						var produto = '';
						produto += '<a href="addcarrinho.html?idprod=' + id.toString() + '&nome=' + nome.toString() + '&foto=' + foto.toString() + '&preco=' + preco.toString() + '&categoria=' + subcategoria.toString() + '&qtde=' + qtdebebida.toString() + '&unidade=' + unidade.toString() + '&teor=' + teor.toString() + '&pais=' + pais.toString() + '&iconepais=' + icone_pais.toString() + '" class="produto-single col-33">';
						produto += '<div class="cervejas produtos panelprod color-orange">';
						produto += '<img class="fotos-produtos" src="' + obj[i]["foto"].toString() + '"><br/>';
						produto += '<hr>';
						produto += '<span id="txtNomeBebida_' + obj[i]["idproduto"].toString() + '" class="nome-bebida wspace-none">' + obj[i]["nomeproduto"].replace("Cerveja ", "") + '</span><br>';
						produto += '<span class="valor-unidade wspace-none">' + obj[i]["qtdeunidade"] + ' ' + obj[i]["unidade"] + '</span><br>';
						produto += '<span id="txtPrecoProduto_' + obj[i]["idproduto"].toString() + '" class="preco-prod wspace-none">R$ ' + obj[i]["precovenda"].toFixed(2).toString().replace(".",",") + '</span>';
						produto += '</div>';
						produto += '</a>';

						$$(".produtosbd").append(produto);
					}
					app.hidePreloader();
				}
		    });
		}
		catch(ex){
			app.hidePreloader();
			console.log(ex.toString());
		}
	},

	getProdutosLike: function(categoria, string){
		try{
			$$.get("http://192.168.1.107:5000/produtos/likenome/" + categoria + "/" + string, function(data, status){
				var obj = JSON.parse(data);
				var index = obj.length;

				if(index == 0){
					app.hidePreloader();
					app.alert("Não foram encontrados produtos.", "Ops!");
				}
				else{
					for(var i = 0; i < index; i++){
						var id = obj[i]["idproduto"];
						var nome = obj[i]["nomeproduto"];
						var foto = obj[i]["foto"];
						var preco = obj[i]["precovenda"].toFixed(2);
						var subcategoria = obj[i]["subcategoria"];
						var qtdebebida = obj[i]["qtdeunidade"];
						var unidade = obj[i]["unidade"];
						var teor = obj[i]["teoralcoolico"];
						var pais = obj[i]["pais"];
						var icone_pais = obj[i]["icone"];

						var produto = '';
						produto += '<a href="addcarrinho.html?idprod=' + id.toString() + '&nome=' + nome.toString() + '&foto=' + foto.toString() + '&preco=' + preco.toString() + '&categoria=' + subcategoria.toString() + '&qtde=' + qtdebebida.toString() + '&unidade=' + unidade.toString() + '&teor=' + teor.toString() + '&pais=' + pais.toString() + '&iconepais=' + icone_pais.toString() + '" class="produto-single col-33">';
						produto += '<div class="cervejas produtos panelprod color-orange">';
						produto += '<img class="fotos-produtos" src="' + obj[i]["foto"].toString() + '"><br/>';
						produto += '<hr>';
						produto += '<span id="txtNomeBebida_' + obj[i]["idproduto"].toString() + '" class="nome-bebida wspace-none">' + obj[i]["nomeproduto"].replace("Cerveja ", "") + '</span><br>';
						produto += '<span class="valor-unidade wspace-none">' + obj[i]["qtdeunidade"] + ' ' + obj[i]["unidade"] + '</span><br>';
						produto += '<span id="txtPrecoProduto_' + obj[i]["idproduto"].toString() + '" class="preco-prod wspace-none">R$ ' + obj[i]["precovenda"].toFixed(2).toString().replace(".",",") + '</span>';
						produto += '</div>';
						produto += '</a>';

						$$(".produtosbd").append(produto);
					}

					app.hidePreloader();
				}
		    });
		}
		catch(ex){
			app.hidePreloader();
			throw ex;
		}
	},

	getProdutosFiltrados: function(categoria, filtro){
		try{
			$$.get("http://192.168.1.107:5000/produtos/filtro/" + categoria + "/" + filtro, function(data, status){
				var obj = JSON.parse(data);
				var index = obj.length;

				for(var i = 0; i < index; i++){
					var id = obj[i]["idproduto"];
					var nome = obj[i]["nomeproduto"];
					var foto = obj[i]["foto"];
					var preco = obj[i]["precovenda"].toFixed(2);
					var subcategoria = obj[i]["subcategoria"];
					var qtdebebida = obj[i]["qtdeunidade"];
					var unidade = obj[i]["unidade"];
					var teor = obj[i]["teoralcoolico"];
					var pais = obj[i]["pais"];
					var icone_pais = obj[i]["icone"];

					var produto = '';
					produto += '<a href="addcarrinho.html?idprod=' + id.toString() + '&nome=' + nome.toString() + '&foto=' + foto.toString() + '&preco=' + preco.toString() + '&categoria=' + subcategoria.toString() + '&qtde=' + qtdebebida.toString() + '&unidade=' + unidade.toString() + '&teor=' + teor.toString() + '&pais=' + pais.toString() + '&iconepais=' + icone_pais.toString() + '" class="produto-single col-33">';
					produto += '<div class="cervejas produtos panelprod color-orange">';
					produto += '<img class="fotos-produtos" src="' + obj[i]["foto"].toString() + '"><br/>';
					produto += '<hr>';
					produto += '<span id="txtNomeBebida_' + obj[i]["idproduto"].toString() + '" class="nome-bebida wspace-none">' + obj[i]["nomeproduto"].replace("Cerveja ", "") + '</span><br>';
					produto += '<span class="valor-unidade wspace-none">' + obj[i]["qtdeunidade"] + ' ' + obj[i]["unidade"] + '</span><br>';
					produto += '<span id="txtPrecoProduto_' + obj[i]["idproduto"].toString() + '" class="preco-prod wspace-none">R$ ' + obj[i]["precovenda"].toFixed(2).toString().replace(".",",") + '</span>';
					produto += '</div>';
					produto += '</a>';

					$$(".produtosbd").append(produto);
				}

				app.hidePreloader();
		    });
		}
		catch(ex){
			throw ex;
		}
	},

	getProdutosDestaques: function(){
		try{
			$$.get("http://192.168.1.107:5000/produtos/filtros/maisvendidos", function(data, status){
				var obj = JSON.parse(data);
				var index = obj.length;

				for(var i = 0; i < index; i++){
					var id = obj[i]["idproduto"];
					var nome = obj[i]["nomeproduto"];
					var foto = obj[i]["foto"];
					var preco = obj[i]["precovenda"].toFixed(2);
					var subcategoria = obj[i]["subcategoria"];
					var qtdebebida = obj[i]["qtdeunidade"];
					var unidade = obj[i]["unidade"];
					var teor = obj[i]["teoralcoolico"];
					var pais = obj[i]["pais"];
					var icone_pais = obj[i]["icone"];

					var produto = '';
					produto += '<a href="addcarrinho.html?idprod=' + id.toString() + '&nome=' + nome.toString() + '&foto=' + foto.toString() + '&preco=' + preco.toString() + '&categoria=' + subcategoria.toString() + '&qtde=' + qtdebebida.toString() + '&unidade=' + unidade.toString() + '&teor=' + teor.toString() + '&pais=' + pais.toString() + '&iconepais=' + icone_pais.toString() + '" class="produto-single-home col-33">';
					produto += '<div class="cervejas produtos panelprod color-orange">';
					produto += '<img class="fotos-produtos" src="' + obj[i]["foto"].toString() + '"><br/>';
					produto += '<hr>';
					produto += '<span id="txtNomeBebida_' + obj[i]["idproduto"].toString() + '" class="nome-bebida wspace-none">' + obj[i]["nomeproduto"].replace("Cerveja ", "") + '</span><br>';
					produto += '<span class="valor-unidade wspace-none">' + obj[i]["qtdeunidade"] + ' ' + obj[i]["unidade"] + '</span><br>';
					produto += '<span id="txtPrecoProduto_' + obj[i]["idproduto"].toString() + '" class="preco-prod wspace-none">R$ ' + obj[i]["precovenda"].toFixed(2).toString().replace(".",",") + '</span>';
					produto += '</div>';
					produto += '</a>';

					$$(".destaques").append(produto);
				}
		    });
		}
		catch(ex){
			throw ex;
		}
	},

	callProdLike: function(categoria, string){
		if(string == null || string == ''){
			$$(".produto-single").remove();
			Produtos.getProdutos(categoria);
		}
		else{
			$$(".produto-single").remove();
			app.showPreloader("Filtrando...");
			Produtos.getProdutosLike(categoria, string);
		}
		
	},

	getSelectFilter: function(categoria){
		$$("#txtFiltro").change(function(){
			var filtro = $$("#txtFiltro").val();

			switch(filtro){
				case "precbaixo":
					$$(".produto-single").remove();
					app.showPreloader("Filtrando...");
					Produtos.getProdutosFiltrados(categoria, filtro);
				break;
				case "precalto":
					$$(".produto-single").remove();
					app.showPreloader("Filtrando...");
					Produtos.getProdutosFiltrados(categoria, filtro);
				break;
				case "ordcre":
					$$(".produto-single").remove();
					app.showPreloader("Filtrando...");
					Produtos.getProdutosFiltrados(categoria, filtro);
				break;
				case "orddec":
					$$(".produto-single").remove();
					app.showPreloader("Filtrando...");
					Produtos.getProdutosFiltrados(categoria, filtro);
				break;
				case "teoralc":
					$$(".produto-single").remove();
					app.showPreloader("Filtrando...");
					Produtos.getProdutosFiltrados(categoria, filtro);
				break;
			}
		});
	}
}