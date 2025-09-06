function openCheckout(itemName) {
  document.getElementById('checkout').style.display = 'block';
  document.getElementById('item').value = itemName;
}

fetch('/items')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('items-container');
    container.innerHTML = '';

    data.forEach(item => {
      const div = document.createElement('div');
      div.className = 'item';
      div.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <p><strong style="color: lime">${item.price}</strong></p>
        <button onclick="openCheckout('${item.name}')">Purchase</button>
      `;
      container.appendChild(div);
    });
  });
