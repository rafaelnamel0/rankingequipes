document.getElementById("thPosition").addEventListener("click", sortNumericColumn);
document.getElementById("thTeam").addEventListener("click", sortTextColumn);
document.getElementById("thClass").addEventListener("click", sortTextColumn);
document.getElementById("thScore").addEventListener("click", sortNumericColumn);
document.getElementById("thNote").addEventListener("click", sortNumericColumn);

function sortColumn(e, callback) {
  const tabela = document.getElementById("data-ranking");
  const column = e.target.cellIndex;
  //basicamente, essa função verificará se todos os elementos estão em ordem.

  f = false;
  while (!f) {//loop que se repete até que todas as linhas estejam ordenadas
    rows = tabela.rows;
    f = true;

    for (index = 0; index < rows.length - 1; index++) {
      toggle = false;
      
      if (callback(rows[index].getElementsByTagName("td")[column], rows[index + 1].getElementsByTagName("td")[column])) {
        toggle = true;
        break;
      }
    }

    if (toggle) {
      rows[index].parentNode.insertBefore(rows[index + 1], rows[index]);
      f = false;
    }
  }
}

function testText(row, nextRow) {
  return row.innerHTML.toLowerCase() > nextRow.innerHTML.toLowerCase(); 
}

function testTextDesc(row, nextRow) {
  return row.innerHTML.toLowerCase() < nextRow.innerHTML.toLowerCase();
}

function sortTextColumnAsc(e) {
    sortColumn(e, testText);
  } 
  
  function sortTextColumnDesc(e) {
    sortColumn(e, testTextDesc);
  }

// as duas acima tornam possível o retorno para a ordem inicial dos elementos em texto. sem essa função, apenas as colunas "posição", "pontuação", e "nota no boletim" voltam para as suas ordens "iniciais" da tabela.

function GetFloat(StrNumber) {
  return parseFloat(StrNumber.replace(",", "."));
} //essa função retornará o valor de uma coluna específica

function testNumber(row, nextRow) {
  return GetFloat(row.innerHTML) > GetFloat(nextRow.innerHTML);
}

function testNumberDesc(row, nextRow) {
  return GetFloat(row.innerHTML) < GetFloat(nextRow.innerHTML);
}

function sortTextColumn(e) {
    toggleSort(e, sortTextColumnAsc, sortTextColumnDesc);
  }
  
  function sortNumericColumnAsc(e) {
    sortColumn(e, testNumber);
  }
  
  function sortNumericColumnDesc(e) {
    sortColumn(e, testNumberDesc);
  }
  
  function sortNumericColumn(e) {
    toggleSort(e, sortNumericColumnAsc, sortNumericColumnDesc);
  }
  
// assim como mencionado anteriormente, essas duas funções também tornam possível que as colunas que possuem números sejam colocadas em ordem crescente ou decrescente.


function toggleSort(e, ascSort, descSort) {
  if (e.target.classList.contains("desc")) {
    e.target.classList.remove("desc");
    ascSort(e);
  } else {
    e.target.classList.add("desc");
    descSort(e);
  }
}

//essa função recebe três parâmetros: e (que aciona a função), ascSort (que é acionado quando não houver elemento da classe descSort) e descSort (que é acionado quando não há elemento da classe descSort). Em outras palavras, essa função auxilia na alternância entre a classificação descrescente e crescente.

