function calcular() {
    
   
    let valor1 = parseFloat(document.getElementById('producto1').value) || 0;
    let valor2 = parseFloat(document.getElementById('producto2').value) || 0;
    let valor3 = parseFloat(document.getElementById('producto3').value) || 0;
    let valor4 = parseFloat(document.getElementById('producto4').value) || 0;
    let valor5 = parseFloat(document.getElementById('producto5').value) || 0;
    
    let subtotal = valor1+ valor2+valor3+valor4+valor5
    document.getElementById('subtotal').value = `L ${subtotal.toFixed(2)}`;

    let descuentoPorcentaje = 0;
    if (subtotal >= 1000 && subtotal < 5000) {
        descuentoPorcentaje = 10;
    }else if (subtotal >= 5000 && subtotal < 9000){
        descuentoPorcentaje = 20;
    }else if (subtotal >= 9000 && subtotal < 13000){
        descuentoPorcentaje = 30;
    }else if (subtotal >= 13000) {
        descuentoPorcentaje = 40;
    }       

    let descuento = (subtotal * descuentoPorcentaje) / 100;
    let total = subtotal - descuento;

    document.getElementById('descuentolb').innerText = `Descuento (${descuentoPorcentaje}%):`;
    document.getElementById('descuento').value = `L ${descuento.toFixed(2)}`;
    document.getElementById('total').value = `L ${total.toFixed(2)}`;

   
}

function limpiar() {
    document.getElementById('product1').value = '';
    document.getElementById('product2').value = '';
    document.getElementById('product3').value = '';
    document.getElementById('product4').value = '';
    document.getElementById('product5').value = '';
    document.getElementById('subtotal').value = '';
    document.getElementById('descuento').value = '';
    document.getElementById('total').value = '';
    document.getElementById('descuento').innerText = 'Descuento (0%):';
}
