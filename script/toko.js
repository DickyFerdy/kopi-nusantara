const categoryButtons = document.querySelectorAll('#categoryList .list-group-item');
const productItems = document.querySelectorAll('.product-item');
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartCount = document.getElementById('cartCount');
const alertCart = document.getElementById('alertCart');

let totalKeranjang = parseInt(localStorage.getItem('jumlahKeranjangKopi')) || 0;
cartCount.textContent = totalKeranjang;

categoryButtons.forEach(button => {
    button.addEventListener('click', function () {
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        const filter = this.getAttribute('data-filter');

        productItems.forEach(item => {
            const category = item.getAttribute('data-category');

            if (filter === 'all' || category === filter) {
                item.classList.remove('hide');
            } else {
                item.classList.add('hide');
            }
        });
    });
});

addToCartButtons.forEach(button => {
    button.addEventListener('click', function () {
        totalKeranjang++;
        cartCount.textContent = totalKeranjang;
        localStorage.setItem('jumlahKeranjangKopi', totalKeranjang);

        alertCart.style.display = 'block';
        setTimeout(() => {
            alertCart.style.display = 'none';
        }, 2000);
    });
});