document.addEventListener('DOMContentLoaded', () => {
  const detailContainer = document.getElementById('productDetail');

  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id');

  const catalog = {
    // EXCLUSIV
    'exclusiv1': {
      name: 'Brățară Exclusiv',
      price: '1200 lei',
      img: 'images/exclusiv1.jpg',
      description: 'Brățară exclusivă din aur de 24K cu design modern și materiale de calitate superioară.'
    },
    'exclusiv2': {
      name: 'Lanț Exclusiv',
      price: '1500 lei',
      img: 'images/exclusiv2.jpg',
      description: 'Lanț din zarconiu realizat cu finețe, finisaje de lux pentru ocazii speciale.'
    },
    'exclusiv3': {
      name: 'Ceas Luxury',
      price: '5000 lei',
      img: 'images/exclusiv3.jpg',
      description: 'Ceas cu catran de aur, rezistent la apă.'
    },
    'exclusiv4': {
      name: 'Set Exclusiv',
      price: '1800 lei',
      img: 'images/exclusiv4.jpg',
      description: 'Set complet de bijuterii elegante pentru evenimente.'
    },
    'exclusiv5': {
      name: 'Inel Special',
      price: '950 lei',
      img: 'images/exclusiv5.jpg',
      description: 'Inel cu design modern, lucrat manual.'
    },

    // NOU
    'nou1': {
      name: 'Brățară Nouă',
      price: '900 lei',
      img: 'images/nou1.jpg',
      description: 'Brățară cu design minimalist și modern.'
    },
    'nou2': {
      name: 'Lanț Nou',
      price: '1100 lei',
      img: 'images/nou2.jpg',
      description: 'Lanț rafinat, potrivit pentru orice ținută.'
    },
    'nou3': {
      name: 'Ceas Modern',
      price: '4500 lei',
      img: 'images/nou3.jpg',
      description: 'Ceas cu design contemporan și mecanism de precizie.'
    },
    'nou4': {
      name: 'Inel Nou',
      price: '800 lei',
      img: 'images/nou4.jpg',
      description: 'Inel cu forme moderne, finisaje elegante.'
    },
    'nou5': {
      name: 'Set Nou',
      price: '1200 lei',
      img: 'images/nou5.jpg',
      description: 'Set de bijuterii nou, perfect pentru cadou.'
    },

    // BESTSELLER
    'best1': {
      name: 'Brățară Bestseller',
      price: '1000 lei',
      img: 'images/best1.jpg',
      description: 'Brățară apreciată pentru calitatea excepțională.'
    },
    'best2': {
      name: 'Lanț Bestseller',
      price: '1300 lei',
      img: 'images/best2.jpg',
      description: 'Lanț bestseller cu design atemporal.'
    },
    'best3': {
      name: 'Ceas Bestseller',
      price: '4800 lei',
      img: 'images/best3.jpg',
      description: 'Ceas cu mecanism fiabil, preferat de clienți.'
    },
    'best4': {
      name: 'Inel Bestseller',
      price: '850 lei',
      img: 'images/best4.jpg',
      description: 'Inel bestseller, combinație perfectă între stil și confort.'
    },
    'best5': {
      name: 'Set Bestseller',
      price: '1400 lei',
      img: 'images/best5.jpg',
      description: 'Set complet bestseller, ideal pentru ocazii speciale.'
    },

    // BĂRBAȚI
    'barbati1': {
      name: 'Brățară Bărbat',
      price: '900 lei',
      img: 'images/barbati1.jpg',
      description: 'Brățară de lux realizată manual pentru bărbați. Materiale premium.'
    },
    'barbati2': {
      name: 'Lanț Bărbat',
      price: '1100 lei',
      img: 'images/barbati2.jpg',
      description: 'Lanț elegant pentru bărbați. Finisaj lucios.'
    },
    'barbati3': {
      name: 'Ceas Bărbat',
      price: '4500 lei',
      img: 'images/barbati3.jpg',
      description: 'Ceas rafinat pentru bărbați cu mecanism precis.'
    },
    'barbati4': {
      name: 'Inel Bărbat',
      price: '800 lei',
      img: 'images/barbati4.jpg',
      description: 'Inel cu design masculin, lucrat cu atenție.'
    },
    'barbati5': {
      name: 'Set Bărbat',
      price: '1200 lei',
      img: 'images/barbati5.jpg',
      description: 'Set complet pentru bărbați cu stil.'
    },
    'barbati6': {
      name: 'Brățară Luxury',
      price: '950 lei',
      img: 'images/barbati6.jpg',
      description: 'Brățară luxury cu detalii fine.'
    },
    'barbati7': {
      name: 'Lanț Luxury',
      price: '1150 lei',
      img: 'images/barbati7.jpg',
      description: 'Lanț luxury cu finisaje impecabile.'
    },
    'barbati8': {
      name: 'Ceas Premium',
      price: '4700 lei',
      img: 'images/barbati8.jpg',
      description: 'Ceas premium pentru bărbați cu mecanism de top.'
    },
    'barbati9': {
      name: 'Inel Elegant',
      price: '850 lei',
      img: 'images/barbati9.jpg',
      description: 'Inel elegant cu design clasic.'
    },
    'barbati10': {
      name: 'Set Deluxe',
      price: '1300 lei',
      img: 'images/barbati10.jpg',
      description: 'Set deluxe pentru bărbați moderni.'
    },

    // FEMEI
    'femei1': {
      name: 'Brățară Femei',
      price: '950 lei',
      img: 'images/femei1.jpg',
      description: 'Brățară delicată pentru femei, lucrată cu grijă.'
    },
    'femei2': {
      name: 'Lanț Femei',
      price: '1200 lei',
      img: 'images/femei2.jpg',
      description: 'Lanț elegant, potrivit pentru orice ținută.'
    },
    'femei3': {
      name: 'Ceas Femei',
      price: '4300 lei',
      img: 'images/femei3.jpg',
      description: 'Ceas de damă cu mecanism de înaltă calitate.'
    },
    'femei4': {
      name: 'Inel Femei',
      price: '780 lei',
      img: 'images/femei4.jpg',
      description: 'Inel feminin cu detalii fine.'
    },
    'femei5': {
      name: 'Set Femei',
      price: '1400 lei',
      img: 'images/femei5.jpg',
      description: 'Set complet de bijuterii pentru femei elegante.'
    },
    'femei6': {
      name: 'Brățară Luxury',
      price: '980 lei',
      img: 'images/femei6.jpg',
      description: 'Brățară luxury cu pietre semiprețioase.'
    },
    'femei7': {
      name: 'Lanț Luxury',
      price: '1250 lei',
      img: 'images/femei7.jpg',
      description: 'Lanț luxury cu design sofisticat.'
    },
    'femei8': {
      name: 'Ceas Premium',
      price: '4400 lei',
      img: 'images/femei8.jpg',
      description: 'Ceas premium de damă cu curea din piele.'
    },
    'femei9': {
      name: 'Inel Elegant',
      price: '800 lei',
      img: 'images/femei9.jpg',
      description: 'Inel elegant cu design modern.'
    },
    'femei10': {
      name: 'Set Deluxe',
      price: '1450 lei',
      img: 'images/femei10.jpg',
      description: 'Set deluxe pentru femei, ideal pentru cadou.'
    }
  };

  const product = catalog[productId];

  if (!product) {
    detailContainer.innerHTML = '<p>Produsul nu a fost găsit.</p>';
    return;
  }

  detailContainer.innerHTML = `
    <div class="product-page">
      <div class="product-image">
        <img src="${product.img}" alt="${product.name}">
      </div>
      <div class="product-info">
        <h3>${product.name}</h3>
        <p class="price">${product.price}</p>
        <p class="description">${product.description}</p>
        <div class="quantity">
          <label for="qty">Cantitate:</label>
          <input type="number" id="qty" value="1" min="1">
        </div>
        <button id="add-to-cart">Adaugă în coș</button>
      </div>
    </div>
  `;

  document.getElementById('add-to-cart').addEventListener('click', () => {
    const qty = parseInt(document.getElementById('qty').value);
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existing = cart.find(item => item.id === productId);
    if (existing) {
      existing.qty += qty;
    } else {
      cart.push({ id: productId, name: product.name, price: product.price, img: product.img, qty });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Produs adăugat în coș!');
  });
});
