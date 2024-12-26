// Task 1: Create an array containing information about different products, including their names, prices, and descriptions

let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" },
    { name: "Desktop", price: 2999.99, description: "Powerful home/office based computing"}
];

// Task 2: Write a function to display the product information on the webpage dynamically

function displayProducts() {
    const productContainer = document.getElementById("container");
    
    productContainer.innerHTML = '';

    products.forEach(product => {
        const productItem = document.createElement("div");
        productItem.classList.add("product");
        
        productItem.innerHTML = 
            `<h3>${product.name}</h3>
            <p><strong>Price:</strong> $${product.price}</p>
            <p><strong>Description:</strong> ${product.description}</p><br>`;
        
        productContainer.appendChild(productItem);
    });
}

// Task 3: Implement an event listener to trigger the display of products when the page loads

document.addEventListener("DOMContentLoaded", () => {
    displayProducts();
});