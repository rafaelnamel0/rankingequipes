function procuraEquipe() {
  const pesquisa = document.getElementById("pesquisa");//obtém o que é colocado no campo de entrada 
  const f = pesquisa.value.toUpperCase(); //valor inserido no campo de entrada é convertido para letra maiúsculas
  const table = document.getElementById("data-ranking"); //coleta a tabela em questão
  const linhasTabela = table.getElementsByTagName("tr"); //obtém todas as linhas da tabela (<tr>)

  for (i = 0; i < linhasTabela.length; i++) { // o 'i' percorrerá até o limite da quantidade de elementos e por isso é menor do que o linhasTabela.length
    td = linhasTabela[i].getElementsByTagName("td")[2]; //o [2] significa que a terceira coluna será consultada. Ou seja, estamos determinando que apenas os nomes serão filtrados a partir do campo de entrada. 
    if (td) {
      if (td.textContent.toUpperCase().indexOf(f) > -1) {
        linhasTabela[i].style.display = ""; //se o termo inserido dentro do campo de entrada for correspondente a algum elemento, a linha a qual corresponde não será ocultada. Enquanto isso, todas as outras serão, deixando em evidência apenas aquela filtrada pelo usuário
      } else {
        linhasTabela[i].style.display = "none"; //oposto ao comentário anterior, se o que for inserido no campo de entrada não corresponder ao que está em alguma das linhas, nada será exibido
      }
    }
  }
}

pesquisa.addEventListener("input", procuraEquipe); //quando o usuário digitar algo no campo de entrada, a função procuraEquipe() será chamada
