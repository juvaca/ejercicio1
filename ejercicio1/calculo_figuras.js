function calcular() {
    const figura = document.getElementById('figura').value;
    const base = parseFloat(document.getElementById('base').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(base)) {
        alert('Ingresa un valor numérico válido para la base/lado/radio.');
        return;
    }

    if (isNaN(altura) && figura !== 'circulo') {
        alert('Ingresa un valor numérico válido para la altura.');
        return;
    }

    let resultado = '';

    switch (figura) {
        case 'cuadrado':
            if (base !== altura) {
                alert('Para un cuadrado, la base y la altura deben ser iguales.');
                return;
            }
            resultado = `Área: ${base * base} cm²\nPerímetro: ${4 * base} cm`;
            break;
        case 'rectangulo':
            if (base === altura) {
                alert('Para un rectángulo, la base y la altura deben ser diferentes.');
                return;
            }
            resultado = `Área: ${base * altura} cm²\nPerímetro: ${2 * (base + altura)} cm`;
            break;
        case 'triangulo':
            if (isNaN(base) || isNaN(altura)) {
                alert('Ingresa valores numéricos válidos para base y altura.');
                return;
            }
            resultado = `Área: ${(base * altura) / 2} cm²\nPerímetro: ${base + altura + Math.sqrt(base ** 2 + altura ** 2)} cm`;
            break;
        case 'circulo':
            if (isNaN(base)) {
                alert('Ingresa un valor numérico válido para el radio.');
                return;
            }
            resultado = `Área: ${(Math.PI * base ** 2).toFixed(2)} cm²\nPerímetro: ${(2 * Math.PI * base).toFixed(2)} cm`;
            break;
        default:
            alert('Selecciona una figura válida.');
            return;
    }

    alert(resultado);
}
