window.onload = function(){
    var url = 'https://profrodolfo.com.br/projeto/';
    var d = document.querySelector('.dados');

    function ExibirProdutos(){
        fetch(url)
        .then(resposta => {
            return resposta.json();
        })
        .then((json)=>{        
            for(x = 0; x < json.length; x++){
            		d.innerHTML+= `
                    <div class="row">
                        <div class="col-4">
                            <img class="img-fluid" src="https://profrodolfo.com.br/projeto/${json[x].foto}">
                        </div>
                        <div class="col-7">
                            <h1>${json[x].nome}</h1>
                            <h3>${json[x].valor}</h3>
                        </div>
                    </div>
                	`;
            }
        }).catch();
    }

    ExibirProdutos();

    function ExibirPorNome(nome){
    	fetch(url)
        .then(resposta => {
            return resposta.json();
        })
        .then((json)=>{
        	nome = nome.toUpperCase();      
            for(x = 0; x < json.length; x++){
            	if(json[x].nome.toUpperCase().includes(nome)){
            		d.innerHTML+= `
                    <div class="row">
                        <div class="col-4">
                            <img class="img-fluid" src="https://profrodolfo.com.br/projeto/${json[x].foto}">
                        </div>
                        <div class="col-7">
                            <h1>${json[x].nome}</h1>
                            <h3>${json[x].valor}</h3>
                        </div>
                    </div>
                	`;
            	}
            }
        }).catch();
    }

    function ExibirPorPreco(preco){
    	fetch(url)
        .then(resposta => {
            return resposta.json();
        })
        .then((json)=>{        
            for(x = 0; x < json.length; x++){
            	if(json[x].valor<=preco){
            		d.innerHTML+= `
                    <div class="row">
                        <div class="col-4">
                            <img class="img-fluid" src="https://profrodolfo.com.br/projeto/${json[x].foto}">
                        </div>
                        <div class="col-7">
                            <h1>${json[x].nome}</h1>
                            <h3>${json[x].valor}</h3>
                        </div>
                    </div>
                	`;
            	}
            }
        }).catch();
    }

    function ExibirPorPrecoENome(nome, preco){
    	fetch(url)
        .then(resposta => {
            return resposta.json();
        })
        .then((json)=>{        
        	nome = nome.toUpperCase();
            for(x = 0; x < json.length; x++){
            	if(json[x].valor<=preco && json[x].nome.toUpperCase().includes(nome)){
            		d.innerHTML+= `
                    <div class="row">
                        <div class="col-4">
                            <img class="img-fluid" src="https://profrodolfo.com.br/projeto/${json[x].foto}">
                        </div>
                        <div class="col-7">
                            <h1>${json[x].nome}</h1>
                            <h3>${json[x].valor}</h3>
                        </div>
                    </div>
                	`;
            	}
            }
        }).catch();
    }
    
    document.querySelector('#btn').addEventListener('click', ()=>{
    	d.innerHTML = '';
    	let nome = document.querySelector('#kurama').value;
    	let preco = Number(document.querySelector('#kurenai').value);
    	if(!nome){
    		ExibirPorPreco(preco);
    	}else if(!preco){
    		ExibirPorNome(nome);
    	}else if(nome && preco){
    		ExibirPorPrecoENome(nome, preco);
    	}
    })
}