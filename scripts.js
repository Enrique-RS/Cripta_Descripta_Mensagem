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
				
		entraTexto.setAttribute( 'placeholder', 'Digite sua mensagem aqui primeiro!');

		seMensagem.style.display = 'flex';
		coMensagem.style.display = 'none';
		
	} else {

		texto = entraTexto.value;

		seMensagem.style.display = 'none';
		coMensagem.style.display = 'flex';

		
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
	
	saiTexto.value = descripta;
	
}
function copia() {
	
	saiTexto.select();
	saiTexto.setSelectionRange( 0, 99999);
	navigator.clipboard.writeText(saiTexto.value);
	
}

btnCripto.addEventListener('click', criptografar);
btnDescripto.addEventListener('click', descriptografar);

btnCopia.addEventListener('click', copia);