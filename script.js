const weight = document.querySelector('#weight')
const height = document.querySelector('#height')

function calculate() {
    const heightAoQuadrado = height.value ** 2
    const resultFinal = weight.value / heightAoQuadrado;

    if (resultFinal <= 18.5) { Swal.fire(`Seu IMC é: ${resultFinal.toFixed(2)}, Abaixo do peso`) }
    else if (resultFinal >= 18.5 && resultFinal <= 24.9) {  Swal.fire(`Seu IMC é: ${resultFinal.toFixed(2)}, Peso normal`) }
    else if (resultFinal >= 25 && resultFinal <= 29.9) { Swal.fire(`Seu IMC é: ${resultFinal.toFixed(2)}, Pré-obesidade`) }
    else if (resultFinal >= 30 && resultFinal <= 34.9) { Swal.fire(`Seu IMC é: ${resultFinal.toFixed(2)}, Obesidade Grau 1`) }
    else if (resultFinal >= 35 && resultFinal <= 39.1) { Swal.fire(`Seu IMC é: ${resultFinal.toFixed(2)}, Obesidade Grau 2`) }
    else if (resultFinal >= 40) { Swal.fire(`Seu IMC é: ${resultFinal.toFixed(2)}, Obesidade Grau 3`) }


}












