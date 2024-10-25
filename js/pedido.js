document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Obtém os valores dos campos
    const pizzaType = document.getElementById('pizzaType').value;
    const size = document.getElementById('size').value;
    const quantity = document.getElementById('quantity').value;

    // Valida os campos
    if (pizzaType && size && quantity > 0) {
        // Exibe uma mensagem de confirmação
        const orderConfirmation = document.getElementById('orderConfirmation');
        orderConfirmation.style.display = 'block';
        orderConfirmation.innerText = `Pedido confirmado: ${quantity} ${size} ${pizzaType}(s).`;
    } else {
        alert('Por favor, preencha todos os campos corretamente.');
    }
});
