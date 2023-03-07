function confirmLineUp() {
  let i;
  const inputPlayerName = document.getElementById("inputText-1").value;
  const inputplayerPosition = document.getElementById("inputText-2").value;
  const inputplayerNumberShirt = document.getElementById("inputText-3").value;

  document.getElementById("inputText-1").value = "";
  document.getElementById("inputText-2").value = "";
  document.getElementById("inputText-3").value = "";

  const lineUpSection = document.getElementById("lineUp");

  const h3 = document.createElement("h3");
  h3.id = "h3-" + inputplayerNumberShirt;
  const ul = document.createElement("ul");
  ul.id = "shirt" + inputplayerNumberShirt;
  h3.innerText = "jogador" + i++;

  const nameLi = document.createElement("li");
  nameLi.innerText = "Nome:" + inputPlayerName;
  ul.appendChild(nameLi);

  const positionLi = document.createElement("li");
  positionLi.innerText = "Posição:" + inputplayerPosition;
  ul.appendChild(positionLi);

  const numberShirtLi = document.createElement("li");
  numberShirtLi.innerText = "Número da camisa:" + inputplayerNumberShirt;
  ul.appendChild(numberShirtLi);

  let answer = prompt(
    `Deseja salvar estas informações: \n${inputPlayerName}\n${inputplayerPosition}\n${inputplayerNumberShirt}\n(S/N)`
  );
  if (answer == "s" || answer == "S") {
    lineUpSection.append(h3, ul);
  } else {
    alert("Informação descartada");
  }
}

function removeLineUp() {
  const inputPlayerDelete = document.getElementById("inputDelete").value;
  document.getElementById("inputDelete").value = "";
  const h3Delete = document.getElementById("h3-" + inputPlayerDelete);
  const inputDelete = document.getElementById("shirt" + inputPlayerDelete);

  document.getElementById("lineUp").removeChild(inputDelete);
  document.getElementById("lineUp").removeChild(h3Delete);
}
