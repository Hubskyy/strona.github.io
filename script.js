document.getElementById('zatw').addEventListener('click', function(event) {
    // Inicjalizacja zmiennej do przechowywania wartości
    let selectedValue = null;

    // Wybór wszystkich radio buttonów
    const radios = document.querySelectorAll('input[type="radio"]');

    // Sprawdzenie zaznaczenia radio buttonów
    radios.forEach(radio => {
        if (radio.checked) {
            selectedValue = radio.value; // Przypisanie wartości zaznaczonego radio buttona
        }
    });

    // Sprawdzenie, czy zaznaczone pole ma wartość od 1 do 4
    if (selectedValue >= 1 && selectedValue <= 4) {
        // Przekierowanie na odpowiednią podstronę
        window.location.href = `index2.html`; // Przykładowy adres URL
    } 
    if (selectedValue >= 5 && selectedValue <= 6) {
        // Przekierowanie na odpowiednią podstronę
        window.location.href = `index3.html`; // Przykładowy adres URL
    } 
    if (selectedValue >= 7 && selectedValue <= 10) {
        // Przekierowanie na odpowiednią podstronę
        window.location.href = `index4.html`; // Przykładowy adres URL
    } 
});
