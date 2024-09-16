
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
        productElement.className = 'product';

        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h2>${product.title}</h2>
            <p>Price: $${product.price}</p>
          
        `;

      
        container.appendChild(productElement);
    });
});