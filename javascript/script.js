document.addEventListener('DOMContentLoaded', function() {
    // Menghitung Luas Segitiga
    const luasForm = document.querySelector('.left-section form');
    luasForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const alas = parseFloat(document.getElementById('panjang-alas').value);
        const tinggi = parseFloat(document.getElementById('tinggi').value);
        const luas = 0.5 * alas * tinggi;
        document.getElementById('luas-result').textContent = `Hasil Perhitungan: ${luas}`;
    });

    // Menghitung Keliling Segitiga
    const kelilingForm = document.querySelector('.right-section form');
    kelilingForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const sisiA = parseFloat(document.getElementById('sisi-a').value);
        const sisiB = parseFloat(document.getElementById('sisi-b').value);
        const sisiC = parseFloat(document.getElementById('sisi-c').value);
        const keliling = sisiA + sisiB + sisiC;
        document.getElementById('keliling-result').textContent = `Hasil Perhitungan: ${keliling}`;
    });
});
