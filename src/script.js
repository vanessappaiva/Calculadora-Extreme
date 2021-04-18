var tela = "";
var algs = [];

function mostrarUm()
{ 
  var cBtn = "1";
  tela = tela + cBtn;
  document.getElementById("output").innerHTML = tela;
  algs.push("1");
}

function mostrarDois()
{ 
  var cBtn = "2";
  tela = tela + cBtn;
  document.getElementById("output").innerHTML = tela;
  algs.push("2");
}

function mostrarTres()
{ 
  var cBtn = "3";
  tela = tela + cBtn;
  document.getElementById("output").innerHTML = tela;
  algs.push("3");
}

function mostrarQuatro()
{ 
  var cBtn = "4";
  tela = tela + cBtn;
  document.getElementById("output").innerHTML = tela;
  algs.push("4");
}

function mostrarCinco()
{ 
  var cBtn = "5";
  tela = tela + cBtn;
  document.getElementById("output").innerHTML = tela;
  algs.push("5");
}

function mostrarSeis()
{ 
  var cBtn = "6";
  tela = tela + cBtn;
  document.getElementById("output").innerHTML = tela;
  algs.push("6");
}

function mostrarSete()
{ 
  var cBtn = "7";
  tela = tela + cBtn;
  document.getElementById("output").innerHTML = tela;
  algs.push("7");
}

function mostrarOito()
{ 
  var cBtn = "8";
  tela = tela + cBtn;
  document.getElementById("output").innerHTML = tela;
  algs.push("8");
}

function mostrarNove()
{ 
  var cBtn = "9";
  tela = tela + cBtn;
  document.getElementById("output").innerHTML = tela;
  algs.push("9");
}

function mostrarZero()
{ 
  var cBtn = "0";
  tela = tela + cBtn;
  document.getElementById("output").innerHTML = tela;
  algs.push("0");
}

function mostrarPonto()
{ 
  var cBtn = ".";
  tela = tela + cBtn;
  document.getElementById("output").innerHTML = tela;
  //algs.push("ponto");
  algs.push(".");
}

function mostrarMais()
{ 
  var cBtn = "+";
  tela = tela + cBtn;
  document.getElementById("output").innerHTML = tela;
  //algs.push("mais");
  algs.push("+");
}

function mostrarMenos()
{ 
  var cBtn = "-";
  tela = tela + cBtn;
  document.getElementById("output").innerHTML = tela;
  //algs.push("menos");
  algs.push("-");
}

function mostrarVezes()
{ 
  var cBtn = "x";
  tela = tela + cBtn;
  document.getElementById("output").innerHTML = tela;
  //algs.push("mult");
  algs.push("*");
}

function mostrarDivisao()
{ 
  var cBtn = "÷";
  tela = tela + cBtn;
  document.getElementById("output").innerHTML = tela;
  //algs.push("div");
  algs.push("/");
}

function backspace()
{ 
  /*var auxTela = tela;
  for(i=0;i<auxTela.length;i++)
    {
      tela = auxTela[i];
    }
  */
  tela = tela.slice(0, -1);
  algs = algs.slice(0, -1);
  document.getElementById("output").innerHTML = tela;
}

function mostrarParDir()
{ 
  var cBtn = ")";
  tela = tela + cBtn;
  document.getElementById("output").innerHTML = tela;
  algs.push(")");
}

function mostrarParEsq()
{ 
  var cBtn = "(";
  tela = tela + cBtn;
  document.getElementById("output").innerHTML = tela;
  algs.push("(");
}

function clean()
{ 
  tela = "";
  algs = [];
  document.getElementById("output").innerHTML = tela;
}

function calcular()
{
  var expressao = "";
  var expressaoError = false;
  var tamanhoAlgs = algs.length-1;
  
  if((algs[0]=="+")||(algs[0]=="-")||(algs[0]=="/")||(algs[0]=="*")||(algs[0]==")")||(algs[tamanhoAlgs]=="+")||(algs[tamanhoAlgs]=="-")||(algs[tamanhoAlgs]=="/")||(algs[tamanhoAlgs]=="*")||(algs[tamanhoAlgs]=="(")){
    expressaoError = true;
  }
  
  for (i = 0; i <algs.length; i++)
    {
       expressao = expressao + algs[i];      
    }
  
  if((expressao)&&(expressaoError == false))
    {
      document.getElementById("output").innerHTML = eval(expressao);
      algs = [];
      tela = "";
    }else if(expressaoError == true){
      document.getElementById("output").innerHTML = "Tá errado isso ai!";
    }else{
      document.getElementById("output").innerHTML = "Oxe! Tem nada ai abestado!";
    }
    
}