document.addEventListener('DOMContentLoaded', () => {
    const btnOke = document.getElementById('btnOke');
    const btnBatal = document.getElementById('btnBatal');
    const inputNama = document.getElementById('inputNama');
    const halamanInput = document.getElementById('halamanInput');
    const halamanTeks = document.getElementById('halamanTeks');
    const displayNama = document.getElementById('displayNama');

    btnOke.addEventListener('click', () => {
        const nama = inputNama.value.trim();
        if (nama !== "") {
            displayNama.textContent = nama;
            halamanInput.style.display = 'none';
            halamanTeks.style.display = 'block';
        } else {
            alert("Harap masukkan nama Anda.");
        }
    });

    btnBatal.addEventListener('click', () => {
        inputNama.value = "";
    });


    inputNama.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') btnOke.click();
    });
});