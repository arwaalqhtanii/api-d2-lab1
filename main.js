

fetch('https://fakestoreapi.com/products', {
    cache: 'no-cache',
    headers: {
        'Cache-Control': 'no-cache'
    }
})
.then(response => response.json())
.then(products => {
    products.sort((a, b) => a.price - b.price);

    const container = document.getElementById('products-container');

    products.forEach(product => {
      
        const productElement = document.createElement('div');
        productElement.className = 'col-sm-6 col-md-4 col-lg-3 mb-4'; // Responsive Bootstrap columns

        productElement.innerHTML = `
            <div class="card h-100">
                <img src="${product.image}" class="card-img-top" alt="${product.title}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text text-primary">Price: $${product.price}</p>
                </div>
            </div>
        `;

    
        container.appendChild(productElement);
    });
});
