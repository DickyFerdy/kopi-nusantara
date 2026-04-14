const formTamu = document.getElementById('formBukuTamu');
const tabelTamu = document.getElementById('isiTabelTamu');

formTamu.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nama = document.getElementById('namaTamu').value;
    const pesan = document.getElementById('pesanTamu').value;
    
    const tanggalSekarang = new Date().toLocaleDateString('id-ID');

    const barisBaru = document.createElement('tr');
    barisBaru.innerHTML = `
        <td>${tanggalSekarang}</td>
        <td>${nama}</td>
        <td>${pesan}</td>
    `;

    tabelTamu.appendChild(barisBaru);

    formTamu.reset();
});