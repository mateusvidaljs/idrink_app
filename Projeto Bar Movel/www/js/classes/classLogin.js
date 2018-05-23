var Login = {
	isLogado: function(){
		console.log("ACESSOU A CLASSE LOGIN!");
		$$.get("http://192.168.1.101:5000/islogged", function(data, status){
			var obj = JSON.parse(data);
			
			console.log(obj["resposta"]);
	    });
	}
}