function calculadoraIMC() {
    const input1 = prompt("Por favor, ingrese su peso (kg): ");
    const input2 = prompt("Por favor, ingrese su altura (m): ");
    const peso = parseFloat(input1.trim());
    const altura = parseFloat(input2.trim());
    if (isNaN(peso) || isNaN(altura)) {
        console.log("Por favor, ingrese numeros validos.");
        return;
    }
    let calculo_imc;
    calculo_imc = (peso / (altura) ** 2);
    console.log(`Su peso ingresado es: ${peso}kg`)
    console.log(`Su altura ingresada es: ${altura}m`)
    console.log(`Su IMC es: ${calculo_imc.toFixed(2)}`);
    if (calculo_imc < 18.5) {
        console.log("Usted se encuentra por debajo del peso normal.");
    } else if (calculo_imc < 24.9) {
        console.log("Usted se encuentra en el rango de peso normal.");
    } else if (calculo_imc < 29.9) {
        console.log("Usted se encuentra en el rango de sobrepeso.");
    } else if (calculo_imc < 34.9) {
        console.log("Usted se encuentra en el rango de obesidad grado 1.");
    } else if (calculo_imc < 39.9) {
        console.log("Usted se encuentra en el rango de obesidad grado 2.");
    } else {
        console.log("Usted se encuentra en el rango de obesidad grado 3.");
    }
}
calculadoraIMC()