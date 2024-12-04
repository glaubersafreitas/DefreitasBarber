function ebook (){
  alert ("Pedimos desculpas, mas no momento não temos nenhum e-book disponível para donwload!")
}

//Seleciona o botão e a chave Pix //
const copyButton = document.getElementById('copyPix');
const pixKey = document.getElementById('pixKey');

//Clique para copiar a chave Pix//
copyButton.addEventListener ('click', ()=> {
  const pixKeyText = pixKey.textContent; // Pega o valor da chave PIX

  //Usa a API de área de transferência para copiar
  navigator.clipboard.writeText(pixKeyText)
  .then(() => {
    alert("Chave Pix Copiada com Sucesso!")
  })
  .catch(err => {
    console.error('Erro ao copiar chave Pix', err);
  });

});








