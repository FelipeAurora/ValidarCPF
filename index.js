let verifcar = [];
let cpf;

let verificar = () =>{
    cpf = document.getElementById('cpf').value;
    let valor1 = 0;
    let valor2 = 0;
    let mult1 = 10;
    let mult2 = 11;

    for(let i = 0; i <= 11 ; i++)
    {
        verificar = cpf.split("");
    }
    
    for(let i = 0; i <= 8 ; i++)
    {
        valor1 = valor1 + (verificar[i] * mult1);
        mult1--;       
    }

    for(let i = 0; i <= 9 ; i++)
    {
        valor2 = valor2 + (verificar[i] * mult2);
        mult2--;        
    }

    valor1 = (valor1*10) % 11;
    valor2 = (valor2*10) % 11;

    if(valor1 == verificar[9] && valor2 == verificar[10])
    {
        let a = document.getElementById('resultado');
        a.style.color = "green";

        document.getElementById('resultado').innerHTML = verificar[0] + verificar[1]+verificar[2] + "."+verificar[3]+verificar[4]+verificar[5] + 
        "."+verificar[6]+verificar[7]+verificar[8] + "-"+verificar[9]+verificar[10];
    }

    if(valor1 != verificar[9] && valor2 != verificar[10])
    {
        let a = document.getElementById('resultado');
        a.style.color = "red";

        document.getElementById('resultado').innerHTML = verificar[0] + verificar[1]+verificar[2] + "."+verificar[3]+verificar[4]+verificar[5] + 
        "."+verificar[6]+verificar[7]+verificar[8] + "-"+verificar[9]+verificar[10];
    }
}

const limpar = () =>
{
    verificar = [];
    console.log(verificar);
}