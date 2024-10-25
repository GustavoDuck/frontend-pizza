document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário
    let isValid = true;

    // Limpa mensagens de erro
    document.querySelectorAll('.error').forEach(error => {
        error.style.display = 'none';
    });

    // Valida nome no cartão
    const cardName = document.getElementById('cardName').value.trim();
    if (cardName === '') {
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }

    // Valida número do cartão
    const cardNumber = document.getElementById('cardNumber').value.trim();
    if (!/^\d{16}$/.test(cardNumber)) {
        document.getElementById('numberError').style.display = 'block';
        isValid = false;
    }

    // Valida data de validade
    const expiryDate = document.getElementById('expiryDate').value.trim();
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate)) {
        document.getElementById('expiryError').style.display = 'block';
        isValid = false;
    }

    // Valida CVV
    const cvv = document.getElementById('cvv').value.trim();
    if (!/^\d{3,4}$/.test(cvv)) {
        document.getElementById('cvvError').style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        alert('Pagamento confirmado!');
        // Aqui você pode adicionar o código para processar o pagamento
    }
});
