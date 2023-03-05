
/* Olá (@_@) */

// ter letras.


const load = document.createElement("div");
const offline = document.createElement("div");
offline.class = "the-lyrics";
offline.innerHTML = "<i style='font-size: 50px; color: gray;' class='bx bx-wifi-off '></i><br/>Nenhuma conexão de rede<br/><button id='tn'>Tente novamente</button>";
load.innerHTML='<div class="load"><p>buscando…</p><div class="spinner"><div class="bubble-1"></div><div class="bubble-2"></div></div>';
var artistaMusica = document.getElementById('artista-letra');
var tituloLetra = document.getElementById('tituto-letra');
var letraEx = document.getElementById('letra-ex');
const lyrics = document.querySelector(".lyrics");
const btnTraduzir = document.querySelector('.traduzir');
const btnCurtir = document.getElementById('curtir');

function getLyrics(cantor, cancao, trad) {
  const promise = fetch(`https://api.vagalume.com.br/search.php?apikey=05f9e0cc15692acb55052131909d36b0&art=${cantor}&mus=${cancao}`);
  var letra;

  if (lyrics.hasChildNodes()) {
    lyrics.removeChild(lyrics.firstChild);
  }

  promise
    .then(function(response) {
      const processingPromise = response.json();
      return processingPromise;
    })
    .then(function(processedResponse) {
		letra = processedResponse.mus[0].text;
		letra = letra.replace(/(\r\n|\n|\r)/gm, "<br>");
		var traducao = processedResponse.mus[0].translate[0].text;
		traducao = traducao.replace(/(\r\n|\n|\r)/gm, "<br>");
		artistaMusica.textContent = cantor;
		tituloLetra.textContent = cancao;
		if (!trad) {
			letraEx.innerHTML = letra || "Nenhuma letra encontrada";
		} else {
			letraEx.innerHTML = traducao || "Nenhuma letra encontrada";
		}
		lyrics.innerHTML = letra;
    });
}

var maProximo = document.querySelector('.musica-atual .proximo');
var maAnterior = document.querySelector('.musica-atual .anterior');

//

if (navigator.platform == "iPhone") {
	document.getElementById('container-volume2').style.display = "none";
}
const menuLinks = document.querySelectorAll(".menu-link");
const mLI = document.querySelectorAll(".menu-link i");
const cm = document.getElementById('containerMusica');
var slider = document.querySelector('.slider');
var musicaAtual = document.querySelector('.musica-atual'),
tituloMusicaAtual = document.getElementById('titulo--musica-atual');
var pp = document.querySelectorAll(".pp"),
prox = document.getElementById("proximo"),
ant = document.getElementById("anterior");
var audio = document.querySelector("audio");
var duracao = document.getElementById("duracao");
var duracaoFinal = document.getElementById("duracaoFinal");
var duracaoFinal2 = document.getElementById("duracaoFinal2");
var tempoAtual = document.getElementById("tempoAtual");
var tempoAtual2 = document.getElementById("tempoAtual2");
var musicaAtualTelaCheia = document.querySelector(".musica-atual-tela-cheia"),
areaDeRolagem = document.getElementById("area-de-rolagem");
var containerMusica = document.getElementById("musicaIndex");
var variedade = document.getElementById("variedade");
var variedade2 = document.getElementById("variedade2");
var barra = document.querySelector(".barra");
var movimentoY, comecoY;
var btnAbrirmusicaAtualTelaCheia = document.querySelector(".btn--abrir-musica-atual-tela-cheia"),
titulo = document.querySelector(".titulo"),
tituloArt = document.querySelector(".titulo-artista");
var msaImg = document.querySelector(".fundo-msa img");
var estaAberto = false,
estaMovendo = false;
var lArtista = document.getElementById("l-artista"),
	lTitulo = document.getElementById("l-titulo");
var pesquisar = document.querySelector("#pesquisar"),
titulomusicaAtualTelaCheia = document.querySelector(".titulo--musica-atual-tela-cheia");
var card = document.querySelector('.card');
var estado = document.querySelector('#estado');
var som = document.getElementById('som');
var select = document.querySelector('#idioma select');
var itemDaNav = document.querySelectorAll(".nav > div");
var cntrCfgrc = document.getElementById('container-configuracao');
var cntrFavorito = document.getElementById('container-favoritos');
var addF = document.querySelector('.add-f');
var corpo = document.querySelector('.corpo');
var info = document.querySelector('#info-f');

function traduzir() {
	var bool;
	switch (btnTraduzir.textContent) {
		case 'Traduzir':
			btnTraduzir.textContent = 'Ver original'
			bool = true;
			break;
		case 'Ver original' :
			btnTraduzir.textContent = 'Traduzir';
			bool = false;
			break;
	}
	getLyrics(musicas[posicaoMusicaAtual()].artista, musicas[posicaoMusicaAtual()].titulo, bool);
}
btnTraduzir.addEventListener('click', traduzir, false);



function adicionarMusica(objeto) {
	
	var itens = document.getElementsByClassName("item");
	var img = document.querySelector('.img img');
	
	for (var i = 0; i < itens.length; i++) {
	
		if (itens[i].textContent.indexOf(objeto.titulo.toLowerCase()) !== - 1) itens[i].id = "ativo";
	
		else if (itens[i].hasAttribute("id")) itens[i].removeAttribute("id");
	};
	
	objeto.ft == ""? titulo.innerHTML = objeto.titulo + '<br><small class="artista">' + objeto.artista + '</small>': titulo.innerHTML = objeto.titulo + '<br><small class="artista">' + objeto.artista + ' ft ' + objeto.ft + '</small>';
	lArtista.textContent = objeto.artista;
	lTitulo.textContent = objeto.titulo;

	audio.src = "musica/" + objeto.caminho;


	if (objeto.titulo == 'wish') {
		artistaMusica.textContent = objeto.artista;
		tituloLetra.textContent = objeto.titulo;
		letraEx.innerHTML = "Ooh, baby, what you wishin' for?<br>Maybe you should wish it more<br>Maybe the world is yours<br>Maybe when it rains, it pours (Keep on wishin')<br>I don't know how to wish anymore (Keep on wishin')<br>I don't know how to wish anymore<br>(I don't know how to wish anymore)<br>Or do I?<br><br>Wish you'd get out my face, might go MIA<br>Might just blow my brain, I'd be Kurt Cobain<br>I can't feel my face, I can't feel my face<br>I can't feel my face, I can't feel my face<br><br>I wish you would find your chill<br>'Cause Lord knows this shit get real<br>And for this price you know you'd kill<br>Man it's big brackin', know the deal<br>Man it's big slatt, you know the deal<br>Draco a big dragon, fire and hell<br>Can't save me man, save yourself<br>'Cause I do not need no help<br><br>Keep on wishin'<br>Keep on wishin'<br>Keep on wishin'<br>Ooh, ohh, ahh<br><br>Ooh, baby, what you wishin' for?<br>Maybe you should wish it more<br>Maybe the world is yours<br>Maybe when it rains, it pours (Keep on wishin')<br>I don't know how to wish anymore (Keep on wishin')<br>I don't know how to wish anymore<br>(I don't know how to wish anymore)<br>Or do I?<br><br>Wish you'd get out my face, might go MIA<br>Might just blow my brain, I'd be Kurt Cobain<br>I can't feel my face, I can't feel my face<br>I can't feel my face, I can't feel my face<br><br>Ooh, baby, what you wishin' for?<br>Maybe you should wish it more<br>Maybe the world is yours<br>Maybe when it rains, it pours<br>I don't know how to wish anymore<br>I don't know how to wish anymore<br>Or do I?<br><br>Ooh, ohh, ahh";
	} else getLyrics(objeto.artista, objeto.titulo, false);
	
	if (objeto.favorito) {
		addF.firstChild.classList.add('curtida');
		addF.firstChild.classList.remove('n-curtida');
		btnCurtir.textContent = 'Curtida';
	} else {
		addF.firstChild.classList.add('n-curtida');
		addF.firstChild.classList.remove('curtida');
		btnCurtir.textContent = 'Curtir';
	}
	objeto.ft == ""?tituloMusicaAtual.innerHTML = objeto.titulo.toLowerCase() + '<br><small class="artista">' + objeto.artista.toLowerCase() + '</small>': tituloMusicaAtual.innerHTML = objeto.titulo.toLowerCase() + '<br><small class="artista">' + objeto.artista.toLowerCase() + ' ft '+ objeto.ft.toLowerCase() + '</small>';

       img.src = "imagem/" + objeto.fundo;
	
	if (objeto.fundo !== "") {
             msaImg.src = "imagem/" + objeto.fundo;
	}
	else {
         msaImg.src = "imagem/preto.PNG";
	}
}
/* adicionar música favorita*/

function adicionarMusicaFavoritaTC() {
	

		var musicaFavorita = document.createElement('div');
		musicaFavorita.className = 'item';
		var indece;
	
	
		if (musicas[posicaoMusicaAtual()].favorito !== true) {

			btnCurtir.textContent = 'Curtida';
		
			musicas[posicaoMusicaAtual()].favorito = true;
			
			addF.firstChild.classList.add('curtida');
			addF.firstChild.classList.remove('n-curtida');
			
			info.textContent = '';
			
			var imagemItem = musicas[posicaoMusicaAtual()].fundo? musicas[posicaoMusicaAtual()].fundo : 'preto.PNG';
			musicas[posicaoMusicaAtual()].ft !== ""? musicaFavorita.innerHTML = '<div class="fundo-item"><img src="imagem/' + imagemItem  + '"/></div><div class="titulo-artista">' + musicas[posicaoMusicaAtual()].titulo.toLowerCase() + '<br><small class="artista">' + musicas[posicaoMusicaAtual()].artista.toLowerCase()  + ' ft ' + musicas[posicaoMusicaAtual()].ft.toLowerCase() + '</small></div': musicaFavorita.innerHTML = '<div class="fundo-item"><img src="imagem/' + imagemItem  + '"/></div><div class="titulo-artista">' + musicas[posicaoMusicaAtual()].titulo.toLowerCase() + '<br><small class="artista">' + musicas[posicaoMusicaAtual()].artista.toLowerCase() + '</small></div';
			
			musicasFavoritas.push(musicaFavorita.lastChild.firstChild.nodeValue, musicaFavorita);
			cntrFavorito.appendChild(musicaFavorita);

		} else {

			btnCurtir.textContent = 'Curtir';
			
			addF.firstChild.classList.add('n-curtida');
			addF.firstChild.classList.remove('curtida');
			
			musicas[posicaoMusicaAtual()].favorito = false;
			
			indece = musicasFavoritas.indexOf(musicas[posicaoMusicaAtual()].titulo.toLowerCase());
			cntrFavorito.removeChild(musicasFavoritas[indece + 1]);
			
			if (indece  != -1) {
				musicasFavoritas.splice(indece + 1, 1);
				musicasFavoritas.splice(indece, 1);
			}
		}
		
		if (musicasFavoritas.length <= 1) {
            if (select.value.indexOf("pt") !== -1) 
                info.textContent = 'sem músicas';
            else if (select.value.indexOf("en") !== -1)
                info.textContent = "no songs";
        }
}

btnCurtir.addEventListener('click', adicionarMusicaFavoritaTC, false)

/* */

addF.addEventListener('click', adicionarMusicaFavoritaTC, false);


/*Adicionar Músicas na tela */

(function () { 
	for (var i = 0; i < musicas.length; i++) {
			
		var item = document.createElement("div");
              item.className = "item";
 
			
		musicas.sort(function (a, b) {
			var tituloA = a.titulo.toUpperCase();
			var tituloB = b.titulo.toUpperCase();
				
			if (tituloA > tituloB) return 1;
			if (tituloA < tituloB) return -1;
				
			return 0;
		});
        var imagemItem = musicas[i].fundo? musicas[i].fundo : 'preto.PNG';
		var valorIndex;

		if (i < 10) {
			valorIndex = '0' + Number(i+1);
		} else {
			valorIndex = i;
		}

		musicas[i].ft !== ""?item.innerHTML = '<div class="fundo-item"><img src="imagem/' + imagemItem  + '"/></div><div class="titulo-artista">' + musicas[i].titulo.toLowerCase() + '<br><small class="artista">' + musicas[i].artista.toLowerCase() + ' <span style="text-transform: lowercase;">ft</span> ' + musicas[i].ft.toLowerCase() + '</small></div>': item.innerHTML = '<div class="fundo-item"><img src="imagem/' + imagemItem  + '"/></div><div class="titulo-artista">' + musicas[i].titulo.toLowerCase() + '<br><small class="artista">' + musicas[i].artista.toLowerCase() + '</small></div>';
		containerMusica.appendChild(item);
		adicionarMusica(musicas[0]);

	};
      
}());

function telas(x, code, codeelse) {
	if (x.matches) { 
		code();
	} else {
		codeelse();
	}
  }
  
  var x = window.matchMedia("(max-width: 948px)");

  telas(x, function () {
	musicaAtual.addEventListener("click", abrirTC, false);
  }, function () {
	musicaAtual.removeEventListener("click", abrirTC, false);
  });

x.addListener(telas);

var itensGeral = document.querySelectorAll(".item");

/* Selecionar Músicas */

itensGeral.forEach(function (itens) {
itens.addEventListener("click", function() {
		for (var i in musicas) {
			if (itens.textContent.indexOf(musicas[i].artista.toLowerCase()) !== -1 && itens.textContent.indexOf(musicas[i].titulo.toLowerCase()) !== -1) {

				adicionarMusica(musicas[i]);
				audio.play();
       
				telas(x, function () {
					abrirTC();
				}, function () {
					//
				});
			}
		}
}, false);
})

var btnCancelarPesquisa = document.querySelector('.btn-cancelar');

pesquisar.addEventListener('focus', () => {
	var inicio = document.querySelector('.inicio');
	var itens = document.querySelectorAll('.item');

	cm.style.display = 'block';
	cntrCfgrc.style.display = 'none';
	cntrFavorito.style.display = 'none';

	menuLinks.forEach((link, n) => {
		menuLinks.forEach((link) => {
			link.classList.remove('esta-ativo');
		});
	});
	inicio.classList.add("esta-ativo");
	
	pesquisar.addEventListener("input", (e) => {
		var valorE = pesquisar.value.toLowerCase();
		
		for (var i in itens) {
			
			if (itens[i].textContent.indexOf(valorE) !== - 1) {
				itens[i].style.display = 'flex';
			} else {
				itens[i].style.display = "none";
                    }
		}
	}, false);
	btnCancelarPesquisa.addEventListener('click', cancelarPesquisa, false);
}, false);

function cancelarPesquisa() {
    
	pesquisar.style.width = "90%";
	btnCancelarPesquisa.style.display = "none";
       pesquisar.value ="";
       var itens = document.getElementsByClassName('item');
       for (var i in itens) {
		     itens[i].style.display = 'flex';
		}
}

function posicaoMusicaAtual() {
	var ativo = document.getElementById("ativo");
	var item = document.getElementsByClassName("item");
	for (var i = 0; i < item.length; i++) {
		if (item[i] === ativo) {
			return i;
			break;
		} else {
			continue;
		}
	}
};
	
function proxMusica() { 
	var proxima = posicaoMusicaAtual() + 1;
	adicionarMusica(musicas[proxima]);
	for (var i = 0; i < pp.length; i++) {
		if (!(pp[i].innerHTML.indexOf("play") !== -1)) audio.play();
	}
	
}
	
function musicaAnt() {
	var anterior = posicaoMusicaAtual() - 1;
	if (audio.currentTime >= 5) audio.currentTime = 0;
	else {
		adicionarMusica(musicas[anterior]);
		for (var i = 0; i < pp.length; i++) {
			if (!(pp[i].innerHTML.indexOf("play") !== -1)) audio.play();	
		}
	}
}
	
prox.addEventListener("click", proxMusica, false);
maProximo.addEventListener("click", function (e) {
	e.stopPropagation();
	proxMusica();
}, false);
ant.addEventListener("click", musicaAnt, false);
maAnterior.addEventListener("click", function (e) {
	e.stopPropagation();
	musicaAnt();
}, false);
	
//
function fecharmusicaAtualTelaCheia(e) {
	musicaAtualTelaCheia.style.transform = "translateY(100%)";
	musicaAtualTelaCheia.style.transition = 'transform .27s';
	card.style.opacity = 1;
	estado.style.opacity = 1;
	setTimeout(function () {
		if (estaAberto) {
			musicaAtualTelaCheia.style.display = "none";
			estaAberto = false;
		}
	}, 270);
}
	



function abrirTC() {
	if (!estaAberto) { 
			
		musicaAtualTelaCheia.style.display = 'block';
		musicaAtualTelaCheia.style.transition = "transform .27s ease";
		
		musicaAtualTelaCheia.style.transform = 'translateY(100%)';
		setTimeout(function() { 
                 musicaAtualTelaCheia.style.transform = "translateY(0)"
             }, 10);
		estaAberto = true;
			
	}
}

/* */

areaDeRolagem.addEventListener("touchstart", function (e) {
	comecoY = e.targetTouches[0].clientY;
}, false);
	
areaDeRolagem.addEventListener("touchmove", function (e) {
	movimentoY = e.changedTouches[0].clientY - comecoY;
	if (movimentoY > 0) {
		musicaAtualTelaCheia.style.transform = "translateY(" + movimentoY + "px)";
		musicaAtualTelaCheia.classList.add('sem-transicao');
		if (movimentoY > 10) estaMovendo = true;	
	};
}, false);
	
		
areaDeRolagem.addEventListener("touchend", function () {
	musicaAtualTelaCheia.classList.remove('sem-transicao');
	if (movimentoY >= 200 && estaMovendo) fecharmusicaAtualTelaCheia();
	else {
		musicaAtualTelaCheia.style.transform = "translateY(0)";
		musicaAtualTelaCheia.style.transition = "transform .17s ease";
	}
	movimentoY = 0;
	comecoY = 0;
	estaMovendo = false;
}, false);

for (let i = 0; i < pp.length; i++) {
	pp[i].addEventListener("click",  function (e) {
		if (audio.paused) audio.play();
		else audio.pause();
              e.stopPropagation();
	}, false);
}

audio.addEventListener("pause", function () {
	for (var i = 0; i < pp.length; i++) {
		pp[i].innerHTML = '<i class="play bx bx-play"></i>';
	}
});
	
audio.addEventListener("play", function () {
	for (var i = 0; i < pp.length; i++) {
		pp[i].innerHTML = '<i class="bx bx-pause"></i>';
	}
});
		
audio.addEventListener("timeupdate", function () {
	
	if (audio.duration == audio.currentTime) {
		proxMusica();
		audio.play();	
	}
		
	variedade.value = audio.currentTime;
	variedade2.value = audio.currentTime;
		
	var segundosAtual = cPS(audio.currentTime),
	sA = segundosAtual < 10? "0" + segundosAtual: segundosAtual;
		
	var minutosAtual = cPM(audio.currentTime),
	mA = minutosAtual < 10? "0" + minutosAtual: minutosAtual;
		
	tempoAtual.textContent = mA + ':' + sA;
	tempoAtual2.textContent = mA + ':' + sA;
});
	
variedade.addEventListener("input", function (e) {
	
	var estaPausado = audio.paused? true: false;
	
	audio.currentTime = variedade.value;
	
	e.target.addEventListener('change', function () {
		if (estaPausado) audio.pause();
		else audio.play();
	});
});
variedade2.addEventListener("input", function (e) {
	
	var estaPausado = audio.paused? true: false;
	
	audio.currentTime = variedade.value;
	audio.currentTime = variedade2.value;
	
	e.target.addEventListener('change', function () {
		if (estaPausado) audio.pause();
		else audio.play();
	});
});
	
audio.addEventListener("loadeddata", function () {
	variedade.max = audio.duration;
	variedade2.max = audio.duration;
		
	var duracaoDoSegundos = cPS(audio.duration),
	dS = duracaoDoSegundos < 10? '0' + duracaoDoSegundos: duracaoDoSegundos;
		
	var duracaoDoMinutos = cPM(audio.duration),
	dM = duracaoDoMinutos < 10? '0' + duracaoDoMinutos: duracaoDoMinutos;
		
	duracaoFinal.textContent = dM + ':' + dS;
	duracaoFinal2.textContent = dM + ':' + dS;
});
	
/* conversões */

function cPM() {
	return parseInt((arguments[0] / 60) % 60);
}
	
function cPS() {
	return parseInt(arguments[0] % 60);
}
var volume = document.querySelector('#volume');
var volume2 = document.querySelector('#volume2');
	
volume.addEventListener('input', function () {
	audio.volume = volume.value / 100;

}, false);
volume2.addEventListener('input', function () {
	audio.volume = volume2.value / 100;

}, false);

var btnCancelar = document.querySelector('.btn-cancelar');

var modo = document.querySelector('#modo-escuro input');

//modo-escuro

modo.addEventListener('change', function () {
var corpo = document.querySelector('.corpo');
		if (modo.checked) {
		
			/*itemDaNav.forEach((item) => {
				
				item.classList.add('modo-escuro-ativo');
			
			});*/
			
			document.body.className = 'modo-escuro-ativo';
			
			pesquisar.className = 'modo-escuro';
			
			musicaAtual.classList.add('modo-escuro-ativo');
			
			musicaAtualTelaCheia.classList.add('modo-escuro-ativo');
lyrics.style.backgroundColor = "rgb(50, 50, 50)";
lyrics.style.color = "white";

containerLyrics.style.background = "rgb(60, 60, 60)";

containerLyrics.style.color = "white";

//slider.style.background = "rgb(50, 50, 50)";

slider.style.color = "white";
			
			titulo.style.color = "white";
			
			itemDaNav[0].parentNode.style.background = 'white';
			
			for (var i = 0; i < pp.length; i++) {
			     pp[i].style.backgroundColor = 'rgb(80, 80, 80)';
                     }
		
		} else {
			//slider.style.background = "white";
                    slider.style.color = "black";
			/*itemDaNav.forEach((item) => {
				
				item.classList.remove('modo-escuro-ativo');
			
			});*/
			lyrics.style.backgroundColor = "white";
lyrics.style.color = "black";

containerLyrics.style.background = "ghostwhite";
			containerLyrics.style.color = "black";
			musicaAtualTelaCheia.classList.remove('modo-escuro-ativo');
			
			musicaAtual.classList.remove('modo-escuro-ativo');
			document.body.className = '';
			
			pesquisar.className = '';
			
			titulo.style.color = "black";
			
			
			pp[0].style.backgroundColor = 'ghostWhite';
			pp[1].style.backgroundColor = 'rgb(240, 240, 240)';
                    
			
			itemDaNav[0].parentNode.style.background = 'linear-gradient(to top, white, rgb(240, 240, 245))';
		}
}, false);

//Definir idioma

select.addEventListener('change', definirIdioma, false);

var devN = document.getElementById('dev-n');
var devI = document.getElementById('dev-i');
var subFI = document.querySelector('.subtitulo.f-i');
var subSobre = document.querySelector('.subtitulo.sobre');

var subM= document.querySelector('.subtitulo.musica');
var subL = document.querySelector('.subtitulo.letra');

function definirIdioma() {
	var idioma = document.querySelector('#idioma .titulo--difinicao'),
	modoEscuroTitulo = document.querySelector('#modo-escuro .titulo--difinicao');
	
	if (select.value === "pt") {
		document.querySelector('.navMusica span').textContent = 'Início'; 
		
		document.querySelector('.navConf span').textContent = 'Ajustes'; 
		
		document.querySelector('.navFavorito span').textContent = 'Curtidas'; 
		
		idioma.textContent = 'Idioma';

		devN.textContent = 'Criador';

		devI.textContent = 'My Instagram';
		
		btnCancelar.textContent = 'cancelar';

		subFI.textContent = 'Idioma';

		subM.textContent = 'Músicas';

		subL.textContent = 'Letras';

		subSobre.textContent = 'Sobre';

		devN.textContent = 'Desenvolvedor';

		devI.textContent = 'Meu Instagram';
		
		modoEscuroTitulo.textContent = 'Modo escuro';
		
		pesquisar.setAttribute('placeholder', 'Procurar por canções ou artistas');
		if (musicasFavoritas.length <= 1)
		    info.textContent = 'Sem músicas';
		
	} else if (select.value === "en") {
		subFI.textContent = 'Language';

		subSobre.textContent = 'About';

		idioma.textContent = 'Idioma';

		subM.textContent = 'Songs';

		subL.textContent = 'Lyrics';

		devN.textContent = 'Creator';

		devI.textContent = 'My Instagram';
	
		document.querySelector('.navMusica span').textContent = 'Home'; 
		
		document.querySelector('.navConf span').textContent = 'Settings'; 
		
		document.querySelector('.navFavorito span').textContent = 'Liked'; 
		
		idioma.textContent = 'Language';
		
		
		modoEscuroTitulo.textContent = 'Dark mode';
		
		pesquisar.setAttribute('placeholder', 'Search for songs or artists');
		
		btnCancelar.textContent = 'cancel';
		if (musicasFavoritas.length <= 1)
		     info.textContent = 'No songs';
	}
	
}
document.getElementById("fechar-TC").addEventListener("click", fecharmusicaAtualTelaCheia, false);

var loop = document.querySelector(".loop"),
      btnAleatorio = document.querySelector(".aleatorio");

function musicaAleatoria() {
   var aleatoria = Math.floor(Math.random() * musicas.length);
   adicionarMusica(musicas[aleatoria]);
   for (var i = 0; i < pp.length; i++) {
		if (!(pp[i].innerHTML.indexOf("play") !== -1)) audio.play();
	}
}
loop.addEventListener("click", function () {
    if(audio.loop == false) {
      audio.loop = true;
      loop.style.color = "mediumSlateBlue";
     } else {
       audio.loop = false;
       loop.style.color = "inherit";
     }
}, false);

btnAleatorio.addEventListener("click", function() {
  if (!btnAleatorio.firstChild.classList.contains("verdade")) {
   prox.removeEventListener("click", proxMusica, false);
   ant.removeEventListener("click", musicaAnt, false);
   prox.addEventListener("click", musicaAleatoria, false);
   ant.addEventListener("click", musicaAleatoria, false);
  
   btnAleatorio.firstChild.classList.add("verdade");
  } else {
   prox.addEventListener("click", proxMusica, false);
   ant.addEventListener("click", musicaAnt, false);
   prox.removeEventListener("click", musicaAleatoria, false);
   ant.removeEventListener("click", musicaAleatoria, false);
btnAleatorio.firstChild.classList.remove("verdade");
  }
}, false);

var containerLyrics = document.querySelector(".containerLyrics");

//Tentar novamente


document.querySelector("#abrirLyric").addEventListener("click", () => {

	var div = document.createElement('div');
	div.innerHTML = getLyrics(musicas[posicaoMusicaAtual()].artista, musicas[posicaoMusicaAtual()].titulo, false);

	lyrics.appendChild(div);

	containerLyrics.style.display = 'block';
	
		containerLyrics.style.transition = "transform .27s ease";
		
		containerLyrics.style.transform = 'translateX(100%)';
		setTimeout(function() { 
                 containerLyrics.style.transform = "translateX(0)";
             }, 10);
}, false);

document.querySelector("#fecharLyric").addEventListener("click", () => {
	containerLyrics.style.transform = "translateX(100%)";
	containerLyrics.style.transition = 'transform .27s';
	setTimeout(function() { 
     containerLyrics.style.transform = "translateX(100%)";
    }, 10);
	
	
}, false);

menuLinks.forEach((link, n) => {
	link.addEventListener("click", () => {
		menuLinks.forEach((link) => {
			link.classList.remove('esta-ativo');
			cm.style.display = 'none';
			cntrCfgrc.style.display = 'none';
			cntrFavorito.style.display = 'none';
		});
		link.classList.add("esta-ativo");
		if (link.classList.contains('inicio')) {
			cm.style.display = 'block';
		} else if (link.classList.contains('favoritos')) {
			cntrFavorito.style.display = 'block';
		} else if (link.classList.contains('cofg')) {
			cntrCfgrc.style.display = 'block';
		}
		
	});
});

/* #FIM (@_@) */
