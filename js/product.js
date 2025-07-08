//product.js

//product data

window.products = [
  // Dairy Products
  { category: 'dairy-products', name: 'Milk - Aavin', img: 'images/dairy-products/milk/aavin_f1.jpg', price: 60, rating: 4.0 },
  { category: 'dairy-products', name: 'Milk - Heritage', img: 'images/dairy-products/milk/heritage_f2.jpg', price: 70, rating: 4.3 },
  { category: 'dairy-products', name: 'Curd - Aavin', img: 'images/dairy-products/curd/aavin_f1.jpg', price: 80, rating: 4.6 },
  { category: 'dairy-products', name: 'Curd - Hatsun', img: 'images/dairy-products/curd/hatsun_f2.jpg', price: 60, rating: 4.0 },
  { category: 'dairy-products', name: 'Butter - Amul', img: 'images/dairy-products/butter/amul_f1.jpg', price: 70, rating: 4.3 },
  { category: 'dairy-products', name: 'Butter - Britannia', img: 'images/dairy-products/butter/britannia_f2.jpg', price: 80, rating: 4.6 },
  { category: 'dairy-products', name: 'Ghee - Aavin', img: 'images/dairy-products/ghee/aavin_f1.jpg', price: 60, rating: 4.0 },
  { category: 'dairy-products', name: 'Ghee - GRB', img: 'images/dairy-products/ghee/grb_f2.jpg', price: 70, rating: 4.3 },
  { category: 'dairy-products', name: 'Cheese - Amul', img: 'images/dairy-products/cheese/amul_f1.jpg', price: 80, rating: 4.6 },
  { category: 'dairy-products', name: 'Cheese - Britannia', img: 'images/dairy-products/cheese/britannia_f2.jpg', price: 60, rating: 4.0 },

  // Household Cleaning
  { category: 'household-cleaning', name: 'Floor Cleaner - Lizol', img: 'images/household-cleaning/floor_cleaner/lizol_f1.jpg', price: 65, rating: 4.1 },
  { category: 'household-cleaning', name: 'Floor Cleaner - Harpic', img: 'images/household-cleaning/floor_cleaner/harpic_f2.jpg', price: 75, rating: 4.4 },
  { category: 'household-cleaning', name: 'Dishwash Liquid - Vim', img: 'images/household-cleaning/dishwash_liquid/vim_f1.jpg', price: 85, rating: 4.7 },
  { category: 'household-cleaning', name: 'Dishwash Liquid - Pril', img: 'images/household-cleaning/dishwash_liquid/pril_f2.jpg', price: 65, rating: 4.1 },
  { category: 'household-cleaning', name: 'Toilet Cleaner - Harpic', img: 'images/household-cleaning/toilet_cleaner/harpic_f1.jpg', price: 75, rating: 4.4 },
  { category: 'household-cleaning', name: 'Toilet Cleaner - Domex', img: 'images/household-cleaning/toilet_cleaner/domex_f2.jpg', price: 85, rating: 4.7 },
  { category: 'household-cleaning', name: 'Detergent Powder - Surf Excel', img: 'images/household-cleaning/detergent_powder/surf_excel_f1.jpg', price: 65, rating: 4.1 },
  { category: 'household-cleaning', name: 'Detergent Powder - Ariel', img: 'images/household-cleaning/detergent_powder/ariel_f2.jpg', price: 75, rating: 4.4 },
  { category: 'household-cleaning', name: 'Room Freshener - Odonil', img: 'images/household-cleaning/room_freshener/odonil_f1.jpg', price: 85, rating: 4.7 },
  { category: 'household-cleaning', name: 'Room Freshener - Godrej', img: 'images/household-cleaning/room_freshener/godrej_f2.jpg', price: 65, rating: 4.1 },

  // Fruits & Vegetables
  { category: 'fruits-vegetables', name: 'Apple - Local Farm', img: 'images/fruits-vegetables/apple/local_fresh.f1.jpg', price: 120, rating: 4.3 },
  { category: 'fruits-vegetables', name: 'Apple - FreshPick', img: 'images/fruits-vegetables/apple/local_fresh.f1.jpg', price: 125, rating: 4.4 },
  { category: 'fruits-vegetables', name: 'Banana - Local Farm', img: 'images/fruits-vegetables/banana/local_fresh.f1.jpg', price: 45, rating: 4.0 },
  { category: 'fruits-vegetables', name: 'Banana - FreshPick', img: 'images/fruits-vegetables/banana/local_fresh.f1.jpg', price: 48, rating: 4.2 },
  { category: 'fruits-vegetables', name: 'Tomato - Local Farm', img: 'images/fruits-vegetables/tomato/local_fresh.f1.jpg', price: 30, rating: 4.1 },
  { category: 'fruits-vegetables', name: 'Tomato - FreshPick', img: 'images/fruits-vegetables/tomato/local_fresh.f1.jpg', price: 32, rating: 4.3 },
  { category: 'fruits-vegetables', name: 'Potato - Local Farm', img: 'images/fruits-vegetables/potato/local_fresh.f1.jpg', price: 35, rating: 4.2 },
  { category: 'fruits-vegetables', name: 'Potato - FreshPick', img: 'images/fruits-vegetables/potato/local_fresh.f1.jpg', price: 38, rating: 4.3 },
  { category: 'fruits-vegetables', name: 'Carrot - Local Farm', img: 'images/fruits-vegetables/carrot/local_fresh.f1.jpg', price: 50, rating: 4.1 },
  { category: 'fruits-vegetables', name: 'Carrot - FreshPick', img: 'images/fruits-vegetables/carrot/local_fresh.f1.jpg', price: 52, rating: 4.2 },
  // Personal Care
  { category: 'personal-care', name: 'Shampoo - Dove', img: 'images/personal-care/shampoo/dove_f1.jpg', price: 95, rating: 4.4 },
  { category: 'personal-care', name: 'Shampoo - Clinic Plus', img: 'images/personal-care/shampoo/clinic_plus_f2.jpg', price: 85, rating: 4.2 },
  { category: 'personal-care', name: 'Soap - Lux', img: 'images/personal-care/soap/lux_f1.jpg', price: 35, rating: 4.1 },
  { category: 'personal-care', name: 'Soap - Dove', img: 'images/personal-care/soap/dove_f2.jpg', price: 45, rating: 4.3 },
  { category: 'personal-care', name: 'Toothpaste - Colgate', img: 'images/personal-care/toothpaste/colgate_f1.jpg', price: 55, rating: 4.4 },
  { category: 'personal-care', name: 'Toothpaste - Pepsodent', img: 'images/personal-care/toothpaste/pepsodent_f2.jpg', price: 52, rating: 4.2 },
  { category: 'personal-care', name: 'Face Wash - Himalaya', img: 'images/personal-care/face_wash/himalaya_f1.jpg', price: 60, rating: 4.3 },
  { category: 'personal-care', name: 'Face Wash - Garnier', img: 'images/personal-care/face_wash/garnier_f2.jpg', price: 65, rating: 4.4 },
  { category: 'personal-care', name: 'Body Lotion - Nivea', img: 'images/personal-care/body_lotion/nivea_f1.jpg', price: 90, rating: 4.5 },
  { category: 'personal-care', name: 'Body Lotion - Vaseline', img: 'images/personal-care/body_lotion/vaseline_f2.jpg', price: 95, rating: 4.6 },

  // Kitchen Essentials
  { category: 'kitchen-essentials', name: 'Cooking Oil - Fortune', img: 'images/kitchen-essentials/cooking_oil/fortune_f1.jpg', price: 110, rating: 4.2 },
  { category: 'kitchen-essentials', name: 'Cooking Oil - Gold Winner', img: 'images/kitchen-essentials/cooking_oil/gold_winner_f2.jpg', price: 115, rating: 4.3 },
  { category: 'kitchen-essentials', name: 'Rice - India Gate', img: 'images/kitchen-essentials/rice/india_gate_f1.jpg', price: 160, rating: 4.5 },
  { category: 'kitchen-essentials', name: 'Rice - Ponni', img: 'images/kitchen-essentials/rice/ponni_f2.jpg', price: 150, rating: 4.3 },
  { category: 'kitchen-essentials', name: 'Wheat Flour - Aashirvaad', img: 'images/kitchen-essentials/wheat_flour/aashirvaad_f1.jpg', price: 130, rating: 4.4 },
  { category: 'kitchen-essentials', name: 'Wheat Flour - Pillsbury', img: 'images/kitchen-essentials/wheat_flour/pillsbury_f2.jpg', price: 125, rating: 4.2 },
  { category: 'kitchen-essentials', name: 'Masala - Sakthi', img: 'images/kitchen-essentials/masala/sakthi_f1.jpg', price: 40, rating: 4.1 },
  { category: 'kitchen-essentials', name: 'Masala - Aachi', img: 'images/kitchen-essentials/masala/aachi_f2.jpg', price: 42, rating: 4.2 },
  { category: 'kitchen-essentials', name: 'Salt - Tata', img: 'images/kitchen-essentials/salt/tata_f1.jpg', price: 20, rating: 4.0 },
  { category: 'kitchen-essentials', name: 'Salt - Aashirvaad', img: 'images/kitchen-essentials/salt/aashirvaad_f2.jpg', price: 22, rating: 4.1 },

  // Electronics
  { category: 'electronics', name: 'Mobile Phone - Samsung', img: 'images/electronics/mobile_phone/samsung_f1.jpg', price: 12000, rating: 4.5 },
  { category: 'electronics', name: 'Mobile Phone - Redmi', img: 'images/electronics/mobile_phone/redmi_f2.jpg', price: 10000, rating: 4.4 },
  { category: 'electronics', name: 'Headphones - Boat', img: 'images/electronics/headphones/boat_f1.jpg', price: 999, rating: 4.3 },
  { category: 'electronics', name: 'Headphones - JBL', img: 'images/electronics/headphones/jbl_f2.jpg', price: 1499, rating: 4.4 },
  { category: 'electronics', name: 'Power Bank - Mi', img: 'images/electronics/power_bank/mi_f1.jpg', price: 899, rating: 4.2 },
  { category: 'electronics', name: 'Power Bank - Realme', img: 'images/electronics/power_bank/realme_f2.jpg', price: 950, rating: 4.3 },
  { category: 'electronics', name: 'USB Cable - Portronics', img: 'images/electronics/usb_cable/portronics_f1.jpg', price: 199, rating: 4.0 },
  { category: 'electronics', name: 'USB Cable - Mi', img: 'images/electronics/usb_cable/mi_f2.jpg', price: 180, rating: 4.1 },
  { category: 'electronics', name: 'Bluetooth Speaker - JBL', img: 'images/electronics/bluetooth_speaker/jbl_f1.jpg', price: 2500, rating: 4.5 },
  { category: 'electronics', name: 'Bluetooth Speaker - Boat', img: 'images/electronics/bluetooth_speaker/boat_f2.jpg', price: 2200, rating: 4.3 },

  // Fashion
  { category: 'fashion', name: 'T-shirt - Puma', img: 'images/fashion/t_shirt/puma_f1.jpg', price: 699, rating: 4.2 },
  { category: 'fashion', name: 'T-shirt - Adidas', img: 'images/fashion/t_shirt/adidas_f2.jpg', price: 749, rating: 4.3 },
  { category: 'fashion', name: 'Jeans - Levis', img: 'images/fashion/jeans/levis_f1.jpg', price: 1999, rating: 4.5 },
  { category: 'fashion', name: 'Jeans - Wrangler', img: 'images/fashion/jeans/wrangler_f2.jpg', price: 1899, rating: 4.4 },
  { category: 'fashion', name: 'Sneakers - Nike', img: 'images/fashion/sneakers/nike_f1.jpg', price: 2999, rating: 4.6 },
  { category: 'fashion', name: 'Sneakers - Puma', img: 'images/fashion/sneakers/puma_f2.jpg', price: 2899, rating: 4.5 },
  { category: 'fashion', name: 'Jacket - Allen Solly', img: 'images/fashion/jacket/allen_solly_f1.jpg', price: 3499, rating: 4.4 },
  { category: 'fashion', name: 'Jacket - Peter England', img: 'images/fashion/jacket/peter_england_f2.jpg', price: 3299, rating: 4.3 },
  { category: 'fashion', name: 'Sunglasses - Fastrack', img: 'images/fashion/sunglasses/fastrack_f1.jpg', price: 999, rating: 4.2 },
  { category: 'fashion', name: 'Sunglasses - Ray-Ban', img: 'images/fashion/sunglasses/rayban_f2.jpg', price: 2499, rating: 4.6 },

  // Beverages
  { category: 'beverages', name: 'Tea - Tata Tea', img: 'images/beverages/tea/tata_tea_f1.jpg', price: 120, rating: 4.3 },
  { category: 'beverages', name: 'Tea - Red Label', img: 'images/beverages/tea/red_label_f2.jpg', price: 125, rating: 4.4 },
  { category: 'beverages', name: 'Coffee - Bru', img: 'images/beverages/coffee/bru_f1.jpg', price: 130, rating: 4.4 },
  { category: 'beverages', name: 'Coffee - Nescafe', img: 'images/beverages/coffee/nescafe_f2.jpg', price: 135, rating: 4.5 },
  { category: 'beverages', name: 'Fruit Juice - Tropicana', img: 'images/beverages/fruit_juice/tropicana_f1.jpg', price: 90, rating: 4.2 },
  { category: 'beverages', name: 'Fruit Juice - Real', img: 'images/beverages/fruit_juice/real_f2.jpg', price: 95, rating: 4.3 },
  { category: 'beverages', name: 'Soft Drink - Pepsi', img: 'images/beverages/soft_drink/pepsi_f1.jpg', price: 40, rating: 4.1 },
  { category: 'beverages', name: 'Soft Drink - Coca-Cola', img: 'images/beverages/soft_drink/coca_cola_f2.jpg', price: 42, rating: 4.2 },
  { category: 'beverages', name: 'Energy Drink - Red Bull', img: 'images/beverages/energy_drink/red_bull_f1.jpg', price: 110, rating: 4.5 },
  { category: 'beverages', name: 'Energy Drink - Monster', img: 'images/beverages/energy_drink/monster_f2.jpg', price: 115, rating: 4.6 }
];


// --- Category Names ---
const categoryNames = {
  'all': 'All Products',
  'offer': 'All Offer Products',
  'dairy-products': 'Dairy Products',
  'fruits-vegetables': 'Fruits & Vegetables',
  'household-cleaning': 'Household & Cleaning',
  'kitchen-essentials': 'Kitchen Essentials',
  'personal-care': 'Personal Care',
  'electronics': 'Electronics',
  'fashion': 'Fashion',
  'beverages': 'Beverages'
};

// --- Category Offers ---
window.categoryOffers = {
  'dairy-products': {0: 28, 1: 9, 4: 8, 6: 28, 9: 26},
  'household-cleaning': {0: 21, 1: 11, 6: 12, 7: 24, 8: 7},
  'fruits-vegetables': {0: 27, 3: 18, 5: 12, 6: 19, 8: 22},
  'personal-care': {0: 15, 1: 9, 4: 18, 6: 13, 9: 27},
  'kitchen-essentials': {0: 16, 1: 32, 3: 8, 5: 16, 9: 24},
  'electronics': {0: 17, 4: 34, 7: 7, 8: 14, 9: 22},
  'fashion': {0: 14, 3: 12, 5: 26, 8: 29, 9: 6},
  'beverages': {1: 19, 2: 10, 3: 25, 8: 16, 9: 31}
};

// ===== Globals & DOM References ==========================================
const grid = document.getElementById('productGrid');
const searchInput = document.getElementById('searchInput');
const searchDropdown = document.getElementById('searchDropdown');
window.cart = JSON.parse(localStorage.getItem('cart')) || {};
window.selectedVariants = JSON.parse(localStorage.getItem('selectedVariants')) || {};
let currentCategory = 'all';
let selectedFilters = {product: '', brand: '', pack: ''};
let sortPreference = 'Relevance';


// ===== Utility Helpers ====================================================

window.uniqueKey = function(name, variant) {
  return `${name}|${variant}`;
}
function isSolid(c) { return ['fruits-vegetables', 'kitchen-essentials', 'personal-care', 'fashion'].includes(c); }
function isLiquid(c) { return ['dairy-products', 'household-cleaning', 'beverages'].includes(c); }
function isColorCategory(c) { return ['electronics', 'fashion'].includes(c); }
function getVariantOptions(c) {
  if (isColorCategory(c)) return ['White', 'Black', 'Red', 'Blue'];
  if (isSolid(c)) return ['500g', '1kg'];
  if (isLiquid(c)) return ['500ml', '1L'];
  return [];
}

window.getAdjustedPrice = function(b, v){
  if (!v) return b;
  if (v.includes('1kg') || v.includes('1L')) return b * 2;
  return b;
}
function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
  localStorage.setItem('selectedVariants', JSON.stringify(selectedVariants));
  updateCartCount();
}
function updateCartCount() {
  const count = Object.values(cart).reduce((s, q) => s + q, 0);
  const el = document.getElementById('cartCount');
  if (el) el.textContent = count;
}
// ===== Main Product Card ==================================================
function renderProductCard(p, i) {
  const realIndex = products.findIndex(prod => prod.name === p.name && prod.category === p.category);
  const o = (categoryOffers[p.category] && categoryOffers[p.category][realIndex % 10]) || null;
  const b = p.price;
  const r = p.rating;
  const v = getVariantOptions(p.category);
  const f = selectedFilters.pack;
  const s = f && v.includes(f) ? f : (selectedVariants[p.name] || v[0]);
  selectedVariants[p.name] = s;
  const k = uniqueKey(p.name, s);
  const a = getAdjustedPrice(b, s);
  const d = o ? Math.floor(a * (o / 100)) : 0;
  const fPrice = a - d;
  const q = cart[k] || 0;
  const old = o ? `<s>₹${a}</s>` : '';

  const card = document.createElement('div');
  card.className = 'product-card';
  card.innerHTML = `
    ${o ? `<div class="discount-tag">${o}% OFF</div>` : ''}
    <img src="${p.img}" alt="${p.name}">
    <h3>${p.name}</h3>
    <select class="variant-select" onchange="updateVariantAndPrice(this,'${p.name}',${b},${o || 0})">
      ${v.map(opt => `<option value="${opt}" ${opt === s ? 'selected' : ''}>${opt}</option>`).join('')}
    </select>
    <p class="price-display">${old} <strong>₹${fPrice}</strong></p>
    <div class="rating">⭐ ${r}</div>
    <div class="qty-btns">
      ${
        q === 0
          ? `<button class="add-btn" onclick="increaseQty('${p.name}','${s}')">Add</button>`
          : `<button onclick="decreaseQty('${p.name}','${s}')">-</button><span>${q}</span><button onclick="increaseQty('${p.name}','${s}')">+</button>`
      }
    </div>
    <p class="delivery-info">Delivery by Tomorrow, 6–8 AM | ₹10 extra for express</p>
  `;
  return card;
}

function updateVariantAndPrice(sel, name, base, offer) {
  const v = sel.value;
  selectedVariants[name] = v;
  const price = getAdjustedPrice(base, v);
  const discount = offer ? Math.floor(price * offer / 100) : 0;
  const final = price - discount;
  sel.nextElementSibling.innerHTML =
    (offer ? `<s>₹${price}</s> ` : '') + `<strong>₹${final}</strong>`;
  const btnWrap = sel.nextElementSibling.nextElementSibling.nextElementSibling;
  const k = uniqueKey(name, v);
  const q = cart[k] || 0;
  btnWrap.innerHTML =
    q === 0
      ? `<button class="add-btn" onclick="increaseQty('${name}','${v}')">Add</button>`
      : `<button onclick="decreaseQty('${name}','${v}')">-</button><span>${q}</span><button onclick="increaseQty('${name}','${v}')">+</button>`;
  saveCart();
}

// ===== Cart Quantity Handlers ============================================
function increaseQty(name, variant, isSearch = false) {
  const k = uniqueKey(name, variant);
  cart[k] = (cart[k] || 0) + 1;
  selectedVariants[name] = variant;
  saveCart();
  isSearch ? rerenderSearchSuggestions() : showProducts(currentCategory);
}
function decreaseQty(name, variant, isSearch = false) {
  const k = uniqueKey(name, variant);
  if (cart[k]) {
    cart[k]--;
    if (cart[k] <= 0) delete cart[k];
    saveCart();
    isSearch ? rerenderSearchSuggestions() : showProducts(currentCategory);
  }
}
// ===== Filter Sidebar =====================================================
function updateFilters(category, productList) {
  const sb = document.querySelector('.sidebar');
  sb.innerHTML = '<h3>Filter By</h3>';
  sb.innerHTML += `
    <button onclick="filterTab('all')">All Products</button>
    <button onclick="filterTab('offer')">All Offer Products</button>
  `;

  const makeSelect = (label, id, opts, key) => {
    const g = document.createElement('div');
    g.className = 'filter-group';
    g.innerHTML = `
      <label for="${id}">${label}</label>
      <select id="${id}" onchange="handleFilterChange('${key}', this.value)">
        <option value="">Choose ${label}</option>
        ${opts.map(o => `<option value="${o}" ${selectedFilters[key] === o ? 'selected' : ''}>${o}</option>`).join('')}
      </select>
    `;
    return g;
  };

  const allProducts = category === 'offer'
    ? products.filter((p, i) => categoryOffers[p.category] && categoryOffers[p.category][i % 10])
    : category === 'all'
    ? products
    : products.filter(p => p.category === category);

  const prodNames = [...new Set(allProducts.map(p => p.name.split(' - ')[0]))];
  sb.appendChild(makeSelect('Product', 'productSelect', prodNames, 'product'));

  const filteredByProduct = selectedFilters.product
    ? allProducts.filter(p => p.name.startsWith(selectedFilters.product + ' - '))
    : allProducts;

  const brands = [...new Set(filteredByProduct.map(p => p.name.split(' - ')[1]))].filter(Boolean);
  sb.appendChild(makeSelect('Brand', 'brandSelect', brands, 'brand'));

  const packOpts = selectedFilters.product
    ? getVariantOptions(filteredByProduct[0]?.category || category)
    : getVariantOptions(category);

  if (packOpts.length) {
    sb.appendChild(makeSelect('Pack Size / Color', 'packSelect', packOpts, 'pack'));
  }
}
function handleFilterChange(key, val) {
  selectedFilters[key] = val;
  showProducts(currentCategory);
}
// ===== Product List Rendering ============================================
function productMatchesFilters(p) {
  const [prod, brand] = p.name.split(' - ');
  const packOk = !selectedFilters.pack || getVariantOptions(p.category).includes(selectedFilters.pack);
  return (!selectedFilters.product || prod === selectedFilters.product) &&
         (!selectedFilters.brand || brand === selectedFilters.brand) &&
         packOk;
}
function showProducts(cat) {
  currentCategory = cat;
  grid.innerHTML = '';
  const list =
    cat === 'all'
      ? products
      : cat === 'offer'
      ? products.filter((p, i) => categoryOffers[p.category] && categoryOffers[p.category][i % 10])
      : products.filter(p => p.category === cat);
  let filtered = list.filter(productMatchesFilters);

  function getFinalPrice(p) {
    const v = selectedVariants[p.name] || getVariantOptions(p.category)[0];
    const base = p.price;
    const adj = getAdjustedPrice(base, v);
    const realIndex = products.findIndex(prod => prod.name === p.name && prod.category === p.category);
    const offer = categoryOffers[p.category]?.[realIndex % 10] || 0;
    const discount = Math.floor(adj * offer / 100);
    return adj - discount;
  }

  filtered.sort((a, b) => {
    const aPrice = getFinalPrice(a);
    const bPrice = getFinalPrice(b);
    if (sortPreference === 'Price: Low to High') return aPrice - bPrice;
    if (sortPreference === 'Price: High to Low') return bPrice - aPrice;
    return 0;
  });

  updateFilters(cat, list);
  filtered.forEach((p, i) => grid.appendChild(renderProductCard(p, i)));
  const title = document.getElementById('categoryTitle');
  if (title) title.textContent = categoryNames[cat] || 'All Products';
}
function filterTab(cat) {
  selectedFilters = {product: '', brand: '', pack: ''};
  showProducts(cat);
}

// ===== Search Suggestions ===============================================
function rerenderSearchSuggestions() {
  const term = searchInput.value.toLowerCase();
  searchDropdown.innerHTML = '';
  if (!term) {
    searchDropdown.style.display = 'none';
    return;
  }
  const matched = products.filter(p => p.name.toLowerCase().includes(term)).slice(0, 6);
  matched.forEach((p, i) => {
    const o = (categoryOffers[p.category] && categoryOffers[p.category][i % 10]) || null;
    const b = p.price;
    const v = getVariantOptions(p.category);
    const s = selectedVariants[p.name] || v[0];
    const k = uniqueKey(p.name, s);
    const a = getAdjustedPrice(b, s);
    const d = o ? Math.floor(a * o / 100) : 0;
    const f = a - d;
    const offerTag = o ? `<div class="search-offer-tag">${o}% OFF</div>` : '';
    const variantHTML = v.map(opt => `<option value="${opt}" ${opt === s ? 'selected' : ''}>${opt}</option>`).join('');
    
    const item = document.createElement('div');
    item.className = 'search-suggestion';
    item.innerHTML = `
      <div class="search-image-section">
        <img src="${p.img}" alt="${p.name}">
        ${offerTag}
      </div>
      <div class="search-name">${p.name}</div>
      <div class="search-price-section">
        ${o ? `<span class="strike">₹${a}</span>` : ''} <span class="final">₹${f}</span>
      </div>
      <select class="variant-select" onchange="handleSearchVariantChange(this,'${p.name}',${b},${o || 0})">
        ${variantHTML}
      </select>
      <div class="qty-btns">
        ${
          cart[k]
            ? `<button onclick="decreaseQty('${p.name}','${s}',true)">-</button><span>${cart[k]}</span><button onclick="increaseQty('${p.name}','${s}',true)">+</button>`
            : `<button class="add-btn" onclick="increaseQty('${p.name}','${s}',true)">Add</button>`
        }
      </div>
    `;
    searchDropdown.appendChild(item);
  });
  searchDropdown.style.display = matched.length ? 'block' : 'none';
}

function handleSearchVariantChange(sel, name, base, offer) {
  const v = sel.value;
  selectedVariants[name] = v;
  const priceSec = sel.previousElementSibling;
  const price = getAdjustedPrice(base, v);
  const disc = offer ? Math.floor(price * offer / 100) : 0;
  const final = price - disc;
  priceSec.innerHTML =
    (offer ? `<span class="strike">₹${price}</span> ` : '') + `<span class="final">₹${final}</span>`;
  const btnWrap = sel.nextElementSibling;
  const k = uniqueKey(name, v);
  const q = cart[k] || 0;
  btnWrap.innerHTML =
    q === 0
      ? `<button class="add-btn" onclick="increaseQty('${name}','${v}',true)">Add</button>`
      : `<button onclick="decreaseQty('${name}','${v}',true)">-</button><span>${q}</span><button onclick="increaseQty('${name}','${v}',true)">+</button>`;
  saveCart();
}
// ===== Initial Setup & Event Listeners ===================================
window.addEventListener('load', () => {
  updateCartCount();
  showProducts('all');
});
searchInput.addEventListener('input', rerenderSearchSuggestions);
searchInput.addEventListener('focus', rerenderSearchSuggestions);
document.addEventListener('click', e => {
  if (
    !searchDropdown.contains(e.target) &&
    e.target !== searchInput &&
    !e.target.closest('.qty-btns') &&
    !e.target.closest('.search-suggestion')
  ) {
    searchDropdown.style.display = 'none';
  }
});

document.querySelector('.sort-box').addEventListener('change', e => {
  sortPreference = e.target.value;
  showProducts(currentCategory);
});

window.staticPrices = {};
products.forEach(p => {
  window.staticPrices[p.name] = p.price;
});

