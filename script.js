let consumedFoods = [];
let totalCalories = 0;

// Cari makanan
function searchFood() {
    const query = document.getElementById('foodSearch').value.trim().toLowerCase();
    const resultsDiv = document.getElementById('searchResults');
    
    if (!query) {
        resultsDiv.innerHTML = '<p>Masukkan nama makanan</p>';
        return;
    }

    // Untuk database lokal:
    const results = Object.keys(foodDatabase)
        .filter(food => food.includes(query))
        .map(food => ({
            name: food,
            ...foodDatabase[food]
        }));

    // Untuk API (uncomment jika pakai API):
    // const results = await searchFoodAPI(query);

    displayResults(results);
}

// Tampilkan hasil
function displayResults(foods) {
    const resultsDiv = document.getElementById('searchResults');
    
    if (foods.length === 0) {
        resultsDiv.innerHTML = '<p>Makanan tidak ditemukan</p>';
        return;
    }

    resultsDiv.innerHTML = foods.map(food => `
        <div class="food-item">
            <span>${food.name} (${food.porsi})</span>
            <span>${food.kalori} kkal</span>
            <button onclick="addToConsumed('${food.name}', ${food.kalori})">+ Tambah</button>
        </div>
    `).join('');
}

// Tambahkan ke daftar konsumsi
function addToConsumed(foodName, calories) {
    consumedFoods.push({ name: foodName, calories });
    totalCalories += calories;
    updateConsumedList();
}

// Update tampilan daftar
function updateConsumedList() {
    const listElement = document.getElementById('foodList');
    listElement.innerHTML = consumedFoods.map(food => `
        <li>
            ${food.name} - ${food.calories} kkal
            <button onclick="removeFood(${consumedFoods.indexOf(food)})">×</button>
        </li>
    `).join('');
    
    document.getElementById('totalCalories').textContent = totalCalories;
}

// Hapus makanan
function removeFood(index) {
    totalCalories -= consumedFoods[index].calories;
    consumedFoods.splice(index, 1);
    updateConsumedList();
}

// Reset daftar
function resetList() {
    consumedFoods = [];
    totalCalories = 0;
    updateConsumedList();
}