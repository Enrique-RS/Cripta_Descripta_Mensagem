		/* DIVISORES DE TELA */

const seMensagem = document.querySelector('.sem_msg');
const coMensagem = document.querySelector('.mostra_msg');

		 /* CAMPOS DE TEXTO */
const entraTexto		= document.getElementById('entraTexto');
const saiTexto		= document.getElementById('saiTexto');
		
entraTexto.value = '';
saiTexto.value   = '';
		
			/* BOTÕES */
const btnCripto    = document.getElementById('btn_criptar');
const btnDescripto = document.getElementById('btn_descriptar');
const btnCopia	   = document.getElementById('btn_copiar');

function pegaTexto(entraTexto) {
	
	if(entraTexto.value == '' || entraTexto.value == ' ' || entraTexto.value == null) {
		
		entraTexto.value = '';
		
		entraTexto.style.color = 'red';
		
		entraTexto.setAttribute( 'placeholder', 'Digite sua mensagem aqui primeiro!');
		
	} else {

		texto = entraTexto.value;
		
		return texto;
	}
	
}

function criptografar() {
	
	let regras = [ ['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
	
	cripta = pegaTexto(entraTexto);
	cripta = cripta.toLowerCase();

	for( let i = 0; i < regras.length; i++) {
		
		if(cripta.includes(regras[i][0])){
			cripta = cripta.replaceAll(regras[i][0], regras[i][1]);
		}
	}
	
	seMensagem.style.display = 'none';
	coMensagem.style.display = 'block';

	saiTexto.value = cripta;
}
function descriptografar() {
	
	let regras = [ ['enter', 'e'], ['imes', 'i'], ['ai', 'a'], ['ober', 'o'], ['ufat', 'u'] ];
	
	descripta = pegaTexto(entraTexto);
	descripta = descripta.toLowerCase();
	
	for( let i = 0; i < regras.length; i++) {
		
		if(descripta.includes(regras[i][0])){
			descripta = descripta.replaceAll(regras[i][0], regras[i][1]);
		}
	}
	
	seMensagem.style.display = 'none';
	coMensagem.style.display = 'block';

	saiTexto.value = descripta;
	
}
function copia() {
	
	saiTexto.select();
	saiTexto.setSelectionRange( 0, 99999);
	navigator.clipboard.writeText(saiTexto.value);
	//saiTexto.value = '';
}

btnCripto.addEventListener('click', criptografar);
btnDescripto.addEventListener('click', descriptografar);

btnCopia.addEventListener('click', copia);


/*
As "chaves" de criptografia que utilizaremos são:

A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"

Requisitos:
- Deve funcionar apenas com letras minúsculas
- Não devem ser utilizados letras com acentos nem caracteres especiais
- Deve ser possível converter uma palavra para a versão criptografada e também retornar uma palavra criptografada para a versão original.

Por exemplo:
"gato" => "gaitober"
gaitober" => "gato"

Descubra qual é a nossa mensagem secreta!

"pairaibenterns poberr enterncairair enterssenter dentersaifimesober enter tenterr fimesnailimeszaidober enterlenter coberm sufatcenterssober!"

*/