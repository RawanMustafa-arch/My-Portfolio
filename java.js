function calculateTotal() {
    // Get input values
    let qty1 = document.getElementById("qty1").value;
    let qty2 = document.getElementById("qty2").value;
    let qty3 = document.getElementById("qty3").value;

    let price1 = document.getElementById("price1").value;
    let price2 = document.getElementById("price2").value;
    let price3 = document.getElementById("price3").value;

    // Calculate totals
    let total1 = qty1 * price1;
    let total2 = qty2 * price2;
    let total3 = qty3 * price3;

    // Display individual totals
    document.getElementById("total1").textContent = total1.toFixed(2);
    document.getElementById("total2").textContent = total2.toFixed(2);
    document.getElementById("total3").textContent = total3.toFixed(2);

    // Calculate grand total
    let grandTotal = total1 + total2 + total3;
    document.getElementById("grandTotal").textContent = grandTotal.toFixed(2);
}