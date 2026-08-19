function consultarDolar() {
    fetch('https://cl.dolarapi.com/v1/cotizaciones/usd')
        .then(res => res.json())
        .then(datos => document.getElementById("apiDolar").innerHTML=(datos.ultimoCierre))
    .catch(error => console.error('Error:', error));

}

function consultarEuro(){
    fetch('https://cl.dolarapi.com/v1/cotizaciones/eur')
        .then(res => res.json())
        .then(datos => document.getElementById("apiEuro").innerHTML=(datos.ultimoCierre))
    .catch(error => console.error('Error:', error));
}

function consultarRealBrasil(){
    fetch('https://cl.dolarapi.com/v1/cotizaciones/brl')
        .then(res => res.json())
        .then(datos => document.getElementById("apiRealBrasil").innerHTML=(datos.ultimoCierre))
}

function calculadora(specificSizeSelect,num1,num2){
    num1 = parseFloat(document.getElementById("specificSizeInputNum1").value);
    num2 = parseFloat(document.getElementById("specificSizeInputNum2").value);
    specificSizeSelect = document.getElementById("specificSizeSelect").value;

    if(isNaN(num1) || isNaN(num2)){
        document.getElementById("resultado").innerHTML="Ingresa un numero valido";
        return;
    }
    if(specificSizeSelect == "+"){
        document.getElementById("resultado").innerHTML=(num1+num2);
    }
    else if(specificSizeSelect == "-"){
        document.getElementById("resultado").innerHTML=(num1-num2);
    }
    else if(specificSizeSelect == "*"){
        document.getElementById("resultado").innerHTML=(num1*num2);
    }
    else if(specificSizeSelect == "/"){
        document.getElementById("resultado").innerHTML=(num1/num2);
    }
    else{
        document.getElementById("resultado").innerHTML=("Error del sistema");
    }
}

/*
function resetearFormulario() {
    document.getElementById('specificSizeInputNum1').value = '';
    document.getElementById('specificSizeInputNum2').value = '';


    if (document.getElementById('specificSizeSelect')) {
        document.getElementById('specificSizeSelect').selectedIndex = 0;
    }


    document.getElementById('product').value = '';
}*/
