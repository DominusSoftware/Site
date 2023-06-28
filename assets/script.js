// Hover para mostrar texto do serviços
function expandDiv(clickedDiv) {
    var originalDiv = clickedDiv;
    var expandedDiv = document.querySelector('.ExpLojaOline');
    var expandedPesagens = document.querySelector('.ExpPesagens');
    var expandedDiv = document.querySelector('.ExpDelivery');
    var expandedDiv = document.querySelector('.Expmecanica');
    var expandedDiv = document.querySelector('.ExpOrdem');
    var expandedDiv = document.querySelector('.ExpLoja');
    // Exibir a div expandida
    expandedDiv.classList.toggle('show');
    expandedPesagens.classList.toggle('show');
  }
function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
    v=v.replace(/\D/g,""); //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}
function id( el ){
	return document.getElementById( el );
}
window.onload = function(){
	id('telefone').onkeyup = function(){
		mascara( this, mtel );
	}
}