function mostrarResposta() {

    const respostaElement = document.getElementById("resposta");
    const respostaImg = document.getElementById("resposta-img");
    const buttonNao = document.getElementById("no");
  
    respostaElement.style.display = "block";
    respostaElement.innerHTML = "Te amo! ❤️";
    buttonNao.style.display = "none";
  
    respostaImg.style.display = "block";
    respostaImg.src =
      "https://gpsbrasilia.com.br/wp-content/uploads/2023/12/Design-sem-nome-2023-12-12T113049.133.jpg";
    respostaImg.height = 300;
}
  
  function mudarPosicao() {
    const buttonNao = document.getElementById("no");
    const buttonWidth = buttonNao.offsetWidth;
    const buttonHeight = buttonNao.offsetHeight;
  
    const randomX = Math.random() * (window.innerWidth - buttonWidth); 
    const randomY = Math.random() * (window.innerHeight - buttonHeight);
  
    buttonNao.style.position = "absolute";
    buttonNao.style.left = `${randomX}px`;
    buttonNao.style.top = `${randomY}px`;
  }
  