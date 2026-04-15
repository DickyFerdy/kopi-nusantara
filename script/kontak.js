const formTamu = document.getElementById('formBukuTamu');
const tabelTamu = document.getElementById('isiTabelTamu');
const alertSukses = document.getElementById('alertSukses');
const hapusSemuaBtn = document.getElementById('hapusSemuaBtn');

let dataTamu = JSON.parse(localStorage.getItem('bukuTamuKopiNusantara')) || [
    {
        tanggal: '12/04/2026',
        nama: 'Budi',
        kategori: 'Pelanggan',
        pesan: 'Kopinya mantap, tempatnya nyaman buat nongkrong dan kerja.'
    }
];

function simpanKeLocalStorage() {
    localStorage.setItem('bukuTamuKopiNusantara', JSON.stringify(dataTamu));
}

function renderTabel() {
    tabelTamu.innerHTML = '';

    if (dataTamu.length === 0) {
        tabelTamu.innerHTML = `
            <tr>
                <td colspan="5" class="text-center text-muted">Belum ada pesan tamu.</td>
            </tr>
        `;
        return;
    }

    dataTamu.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="text-center">${index + 1}</td>
            <td>${item.tanggal}</td>
            <td>${item.nama}</td>
            <td>${item.kategori}</td>
            <td>${item.pesan}</td>
        `;
        tabelTamu.appendChild(row);
    });
}

formTamu.addEventListener('submit', function (event) {
    event.preventDefault();

    const nama = document.getElementById('namaTamu').value.trim();
    const kategori = document.getElementById('kategoriTamu').value;
    const pesan = document.getElementById('pesanTamu').value.trim();
    const tanggalSekarang = new Date().toLocaleDateString('id-ID');

    if (!nama || !kategori || !pesan) {
        return;
    }

    const dataBaru = {
        tanggal: tanggalSekarang,
        nama: nama,
        kategori: kategori,
        pesan: pesan
    };

    dataTamu.push(dataBaru);
    simpanKeLocalStorage();
    renderTabel();
    formTamu.reset();

    alertSukses.style.display = 'block';
    setTimeout(() => {
        alertSukses.style.display = 'none';
    }, 2500);
});

hapusSemuaBtn.addEventListener('click', function () {
    const yakin = confirm('Apakah Anda yakin ingin menghapus semua pesan tamu?');
    if (yakin) {
        dataTamu = [];
        simpanKeLocalStorage();
        renderTabel();
    }
});

renderTabel();