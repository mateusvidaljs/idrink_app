const app = new Framework7({
    material: true,
    domCache: true,
    pushState: true
});

const $$ = Dom7;
const mainView = app.addView('.view-main', {});

var slider = app.swiper('.swiper-container', {
    pagination:'.swiper-pagination',
    autoplay: 5000,
    speed: 800,
    autoplayDisableOnInteraction: false
});

/*
    Scripts de inicialização das páginas
*/

app.onPageInit('usuario', function (page) {
    app.closePanel();

    Usuario.deslogarUsuario();

    if($$("#txtTipoUsuario").text() == "Premium"){
        $$("#txtTipoUsuario").css("font-weight", "bold");
        $$("#txtTipoUsuario").css("color", "#333");
    }
});

app.onPageInit('cervejas', function (page) {
	Produtos.getProdutos('Cerveja');
	Produtos.getSelectFilter('Cerveja');
    $$("#txtPesquisarProd").attr("onsearch", "Produtos.callProdLike('Cerveja', this.value)");
});

app.onPageInit('chopes', function (page) {
    Produtos.getProdutos('Chopes');
    Produtos.getSelectFilter('Chopes');
    $$("#txtPesquisarProd").attr("onsearch", "Produtos.callProdLike('Chopes', this.value)");
});

app.onPageInit('petiscos', function (page) {
	Produtos.getProdutos('Aperitivos');
	Produtos.getSelectFilter('Aperitivos');
    $$("#txtPesquisarProd").attr("onsearch", "Produtos.callProdLike('Aperitivos', this.value)");
});

app.onPageInit('vinhos', function (page) {
	Produtos.getProdutos('Vinho');
	Produtos.getSelectFilter('Vinho');
    $$("#txtPesquisarProd").attr("onsearch", "Produtos.callProdLike('Vinho', this.value)");
});

app.onPageInit('champagne', function (page) {
	Produtos.getProdutos('Espumante');
	Produtos.getSelectFilter('Espumante');
    $$("#txtPesquisarProd").attr("onsearch", "Produtos.callProdLike('Espumante', this.value)");
});

app.onPageInit('whiskey', function (page) {
	Produtos.getProdutos('Whiskey');
	Produtos.getSelectFilter('Whiskey');
    $$("#txtPesquisarProd").attr("onsearch", "Produtos.callProdLike('Whiskey', this.value)");
});

app.onPageInit('vodka', function (page) {
	Produtos.getProdutos('Vodka');
	Produtos.getSelectFilter('Vodka');
    $$("#txtPesquisarProd").attr("onsearch", "Produtos.callProdLike('Vodka', this.value)");
});

app.onPageInit('tequila', function (page) {
    Produtos.getProdutos('Tequila');
    Produtos.getSelectFilter('Tequila');
    $$("#txtPesquisarProd").attr("onsearch", "Produtos.callProdLike('Tequila', this.value)");
});

app.onPageInit('rum', function (page) {
    Produtos.getProdutos('Rum');
    Produtos.getSelectFilter('Rum');
    $$("#txtPesquisarProd").attr("onsearch", "Produtos.callProdLike('Rum', this.value)");
});

app.onPageInit('cachaca', function (page) {
    Produtos.getProdutos('Cachaça');
    Produtos.getSelectFilter('Cachaça');
    $$("#txtPesquisarProd").attr("onsearch", "Produtos.callProdLike('Cachaça', this.value)");
});

app.onPageInit('energetico', function (page) {
    Produtos.getProdutos('Energeticos');
    Produtos.getSelectFilter('Energeticos');
    $$("#txtPesquisarProd").attr("onsearch", "Produtos.callProdLike('Energeticos', this.value)");
});

app.onPageInit('refrigerante', function (page) {
    Produtos.getProdutos('Refrigerante');
    Produtos.getSelectFilter('Refrigerante');
    $$("#txtPesquisarProd").attr("onsearch", "Produtos.callProdLike('Refrigerante', this.value)");
});

app.onPageInit('addcarrinho', function (page) {
	Carrinho.setItemData(page);
});

/*
    Seção de funções customizadas
*/

function confirmacao() {
    app.modal({
        title: 'Antes de Prosseguir...',
        text: 'Você possui mais de 18 anos?',
        buttons: [{
                text: 'Não',
                bold: true,
                onClick: function(){
                    navigator.app.exitApp();
                }
            },
            {
                text: 'Sim',
                bold: true
            },
        ]
    });
}

function init(){
    confirmacao();
    Produtos.getProdutosDestaques();
}