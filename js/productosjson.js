document.addEventListener('DOMContentLoaded', () => {
    const products = fetch("data/productos.json")
        .then(response => response.json())
        .then(products => {
            displayProducts(products);
        })
        .catch(error => console.error('Error al cargar los productos:', error));

    function displayProducts(products) {
        const productsContainer = document.querySelector('.productosContainer');
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('producto');
            productElement.innerHTML = `
                <h2>${product.title}</h2>
                <img src="${product.image}" alt="${product.title}">
                <p><a href="${product.url}" target="_blank">${product.author}</a></p>
            `;
            productsContainer.appendChild(productElement);
        });
    }
});
