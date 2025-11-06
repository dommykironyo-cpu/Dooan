const products = [
  { name: "3mm Clear Glass", price: 50, image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be" },
  { name: "4mm Mirror", price: 100, image: "https://images.unsplash.com/photo-1616627458505-5b9f9d4c17d5" },
  { name: "5mm One-way Blue", price: 125, image: "https://images.unsplash.com/photo-1604079628040-9438e311a39b" },
  { name: "4mm Oneway Grey", price: 105, image: "https://images.unsplash.com/photo-1521747116042-5a810fda9664" },
  { name: "Premium Putty", price: 2000, image: "https://images.unsplash.com/photo-1621605815971-9beeb7e94d2f" },
  { name: "Glass Cutter", price: 250, image: "https://images.unsplash.com/photo-1581093588401-22c9b6f94f16" },
  { name: "Mirror Screws", price: 1050, image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61" },
  { name: "Glass Sticker", price: 20, image: "https://images.unsplash.com/photo-1606813903172-04a0da9e4d7a" },
];

function displayProducts(list) {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = "";

  list.forEach((p) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>Ksh ${p.price}</p>
      <button onclick="contactDoan('${p.name}')">Enquire</button>
    `;
    grid.appendChild(card);
  });
}

function searchProducts() {
  const query = document.getElementById("searchBox").value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(query));
  displayProducts(filtered);
}

function contactDoan(product) {
  const msg = encodeURIComponent(`Hello Doan Company, I would like to know more about: ${product}`);
  window.open(`https://wa.me/254700000000?text=${msg}`, "_blank");
}

displayProducts(products);

