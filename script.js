const menu = [
    { name: "Paneer Tikka", price: 329, type: "veg", img: "images/paneer.jpg" },
    { name: "Veg Hakka Noodles", price: 269, type: "veg", img: "images/noodles.jpg" },
    { name: "Butter Chicken", price: 449, type: "nonveg", img: "images/chicken.jpg" },
    { name: "Chicken Biryani", price: 349, type: "nonveg", img: "images/biryani.jpg" },
    { name: "Gulab Jamun", price: 79, type: "veg", img: "images/gulab.jpg" },
];

const container = document.getElementById("menuContainer");
const searchInput = document.getElementById("search");

function displayMenu(items) {
    container.innerHTML = "";

    items.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${item.img}">
            <h3>${item.name}</h3>
            <p>₹${item.price}</p>
        `;

        container.appendChild(card);

        setTimeout(() => card.classList.add("show"), 100);
    });
}

// Filter
function filterMenu(type) {
    if (type === "all") {
        displayMenu(menu);
    } else {
        displayMenu(menu.filter(item => item.type === type));
    }
}

// Search
searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();
    const filtered = menu.filter(item =>
        item.name.toLowerCase().includes(value)
    );
    displayMenu(filtered);
});

// Initial load
displayMenu(menu);