
    
function exibirResultado(){
    let idade = document.getElementById("idade").value;
    if(idade >= 18){
        document.getElementById("resultado").innerHTML="Maior de Idade";
    }else{
        document.getElementById("resultado").innerText="Menor de Idade";
    }
}
