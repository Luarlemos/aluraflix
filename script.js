var filmeLista = [];
var nomeLista = [];
var aux=0;
var cont = 0;

function adicionarFilme(){
  var campoFilmeFavorito = document.getElementById("filme").value;
  var campoNomeFilme = document.getElementById("nomeFilme").value;
  var elementoAviso = document.getElementById("aviso");
  
  if(campoFilmeFavorito.endsWith(".jpg")||campoFilmeFavorito.endsWith(".png")){
    elementoAviso.innerHTML = "";
    listarFilmesNaTela(campoFilmeFavorito,campoNomeFilme);
  }else{
    elementoAviso.innerHTML = "URL inválida, a URL da imagem do filme não termina com .jpg ou .png";
    console.error("Endereço de filme inválido");
  }
    
  document.getElementById("filme").value = "";
  document.getElementById("nomeFilme").value = "";
}

function listarFilmesNaTela(filmeFavorito,nomeFilme){
  //console.log(nomeFilme)
  var indiceFilme;
  var listaReset ="listaFilmes"
  var listaFilm = "listaFilm";
  var listaNome = "listaNome";
  var listaFilmes=[];
  var listaNomeFilme = [];
  var cont2 = 0;
  var elementoListaResultado = document.getElementById("listaResultado");
  var elementoListaFilmes = document.getElementById("listaFilmes");
  var elementoAviso = document.getElementById("aviso");
  
  if(filmeFavorito!=""){
    listaFilmes.push(filmeFavorito);
    listaNomeFilme.push(nomeFilme);
    console.log(cont);
    if(cont>0){
      Reset();
    }
    console.log(aux);
    
    for(var i = 0; i<filmeLista.length && i<nomeLista.length;i++){
      if(filmeFavorito==filmeLista[i] || nomeFilme==nomeLista[i]){
        cont2++;
      }
    }
    if(cont2>0){
      elementoAviso.innerHTML = "O filme digitado já existe no catálogo, adicione outro filme";
    }else{
      elementoAviso.innerHTML = "";
      filmeLista.push(filmeFavorito);
      nomeLista.push(nomeFilme);
    //console.log(filmeLista);
      indiceFilme = nomeLista.indexOf(nomeFilme);
      console.log(indiceFilme);
      console.log(nomeLista);
        
      aux = aux.toString();
    
      elementoListaFilmes.innerHTML+= "<div id="+listaFilm+aux+" class="+listaFilm+"><div><img src="+ filmeLista[indiceFilme]+"></div><div class="+listaNome+">"+nomeLista[indiceFilme]+"</div></div>";
      aux=parseInt(aux);
      aux++; 
    }
     
  }else{
      Reset();
      elementoAviso.innerHTML = "";
      indiceFilme = nomeLista.indexOf(nomeFilme);
      var filme = document.getElementById(listaFilm+indiceFilme.toString());
      console.log(indiceFilme);
      for(var i = 0; i<nomeLista.length;i++){
        if(nomeFilme==nomeLista[i]){
          cont2++;
        }
      }
      if(cont2==0){
        elementoAviso.innerHTML = "Nome do filme inválido, digite o nome de acordo com o catálogo";
      }else{ 
        elementoAviso.innerHTML = "";
        
        filme.outerHTML = ""; //remover filme

        nomeLista.splice(indiceFilme,1);
        filmeLista.splice(indiceFilme,1);

        console.log(nomeLista);
        cont++;
        
      }
  }
}

function RemoverFilme(){
  var campoFilmeFavorito = "";
  var campoRemoverFilme = document.getElementById("remover").value;
  listarFilmesNaTela(campoFilmeFavorito,campoRemoverFilme);
  document.getElementById("remover").value = "";
}

function Reset(){
  indiceFilme = nomeLista.indexOf(nomeFilme);
      
  var reset;  
  var resetFilme;
      
  console.log(nomeLista);
  aux=0;
  for(var i = 0; i<filmeLista.length && i<nomeLista.length;i++){
    aux = aux.toString();
    console.log(aux);
    reset= document.getElementsByClassName("listaFilm")[i].getAttribute("id");
    console.log(reset);
    resetFilme= document.getElementById(reset);
    resetFilme.id = "listaFilm"+aux;
        
    aux=parseInt(aux);
    aux++;
  }
  cont=0;
}