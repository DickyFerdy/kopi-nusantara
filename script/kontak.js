const formTamu = document.getElementById('formBukuTamu');
const tabelTamu = document.getElementById('isiTabelTamu');

let dataTamu = [
    {
        tanggal: '12/4/2026',
        nama: 'Budi',
        pesan: 'Kopinya mantap, tempatnya asik buat nongkrong!'
    }
];

function renderTabel() {
    tabelTamu.innerHTML = '';

    if (dataTamu.length === 0) {
        tabelTamu.innerHTML = `
            <tr>
                <td colspan="3" class="text-center text-muted">Belum ada pesan tamu.</td>
            </tr>
        `;
        return;
    }

    dataTamu.forEach((item) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.tanggal}</td>
            <td>${item.nama}</td>
            <td>${item.pesan}</td>
        `;
        tabelTamu.appendChild(row);
    });
}

formTamu.addEventListener('submit', function (event) {
    event.preventDefault();

    const nama = document.getElementById('namaTamu').value.trim();
    const pesan = document.getElementById('pesanTamu').value.trim();
    
    const sekarang = new Date();
    const tanggalSekarang = sekarang.toLocaleDateString('id-ID');

    if (!nama || !pesan) {
        return;
    }

    const dataBaru = {
        tanggal: tanggalSekarang,
        nama: nama,
        pesan: pesan
    };

    dataTamu.push(dataBaru);
    renderTabel();
    formTamu.reset();
});

renderTabel();