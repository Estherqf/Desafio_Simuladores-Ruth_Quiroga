function calcularEnfriamiento(){
    let t0=parseFloat(document.getElementById("t0").value);
    let ts=parseFloat(document.getElementById("ts").value);
    let k=parseFloat(document.getElementById("k").value);
    let t=parseFloat(document.getElementById("t").value);

    let exponente=Math.exp(-k*t);
    let temperatura=ts+((t0-ts)*exponente);
    let resultado=Math.round(temperatura);

    // Conectado dinámicamente al nuevo ID de salida
    document.getElementById("resultado-enfriamiento").innerHTML = "Temperatura Final: " + resultado + "°F";
}

function factorial(n){
    if(n<0) return 0;
    if(n===0||n===1) return 1;
    let total=1;
    for(let i=2; i<=n; i++){
        total=total*i;
    }
    return total;
}

function combinacion(n,r){
    if(r>n) return 0;
    let numerador=factorial(n);
    let denominador=factorial(r)*factorial(n-r);
    return numerador/denominador;
}

function calcularCombinaciones(){
    let n1=parseInt(document.getElementById("n1").value);
    let r1=parseInt(document.getElementById("r1").value);
    let n2=parseInt(document.getElementById("n2").value);
    let r2=parseInt(document.getElementById("r2").value);

    if(r1>n1||r2>n2){
        // Muestra el error directamente de forma vistosa en la interfaz
        document.getElementById("resultado-combinaciones").innerHTML = "❌ Error de validación: 'r' no puede ser mayor que 'n'.";
        return;
    }

    let comb1=combinacion(n1,r1);
    let comb2=combinacion(n2,r2);
    let totalCombinaciones=comb1*comb2;

    // Conectado dinámicamente al nuevo ID de salida y con formato de miles legible
    document.getElementById("resultado-combinaciones").innerHTML = "Combinaciones Totales: " + totalCombinaciones.toLocaleString('es-ES');
}