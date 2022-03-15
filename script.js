function ConverterUsa() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmRealNumerico = parseFloat(valor);
  
    var valorEmDolar = valorEmRealNumerico * 0.19;
    var valorEmDolar = valorEmDolar.toFixed(2);
    console.log(valorEmDolar);
  
    var elementoValorConvertidoEmDolar = document.getElementById("valorEmDolar");
    var valorConvertidoEmDolar = valorEmDolar;
    elementoValorConvertidoEmDolar.innerHTML =
      "Valor em dolar: U$ " + valorConvertidoEmDolar;
  }
  
  function ConverterEur() {
  
    var valorElemento = parseFloat(document.getElementById("valor").value);
  
    var valorEmEuro = valorElemento * 0.18;
    var valorEmEuro = valorEmEuro.toFixed(2);
    console.log(valorEmEuro);
  

    var elementoValorConvertidoEmEuro = document.getElementById("valorEmEuro");

    elementoValorConvertidoEmEuro.innerHTML = `Valor em euro: € ${valorEmEuro}`;
  }
  