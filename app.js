// Данные меню
const menuData = {
    "items": [
        // Гарниры
        
        {
            "id": 8,
            "name": "Картофельное пюре",
            "description": "Нежное пюре с молоком и маслом",
            "price": 75,
            "category": "garnishes",
            "image": "https://img.freepik.com/free-photo/fresh-flavorful-mashed-potatoes_2829-11577.jpg"
        },
        {
            "id": 9,
            "name": "Гречка",
            "description": "Ароматная гречневая каша",
            "price": 55,
            "category": "garnishes",
            "image": "https://img.freepik.com/premium-photo/boiled-buckwheat-plate-isolated-white_711700-2035.jpg"
        },
        {
            "id": 10,
            "name": "Макароны",
            "description": "Итальянские макароны al dente",
            "price": 55,
            "category": "garnishes",
            "image": "https://img.freepik.com/free-photo/tortiglioni-pasta-bowl-wooden-table-high-angle-view_176474-7072.jpg"
        },
        {
            "id": 11,
            "name": "Рис",
            "description": "Рис отварной с маслом",
            "price": 55,
            "category": "garnishes",
            "image": "https://img.freepik.com/free-photo/elegant-minimalistic-rice-bowl_23-2149483988.jpg"
        },
        {
            "id": 12,
            "name": "Брокколи",
            "description": "Свежая брокколи на пару",
            "price": 85,
            "category": "garnishes",
            "image": "https://img.freepik.com/free-photo/green-broccoli-levitating-white-background_485709-79.jpg?ga=GA1.1.1211218396.1743407391&semt=ais_hybrid&w=740"
        },
        {
            "id": 13,
            "name": "Фасоль",
            "description": "Стручковая фасоль с чесноком",
            "price": 85,
            "category": "garnishes",
            "image": "https://img.freepik.com/free-photo/stewed-white-beans-tomato-sauce_2829-10306.jpg?ga=GA1.1.1211218396.1743407391&semt=ais_hybrid&w=740"
        },
        {
            "id": 14,
            "name": "Картофель по-деревенски",
            "description": "Ароматный запечённый картофель с травами",
            "price": 80,
            "category": "garnishes",
            "image": "https://img.freepik.com/premium-photo/baked-fried-potatoes-with-rosemary-coarse-salt-olive-oil-spice-paprika-iron-skillet_90251-1196.jpg?ga=GA1.1.1211218396.1743407391&semt=ais_hybrid&w=740"
        },
        {
            "id": 15,
            "name": "Картофель фри",
            "description": "Хрустящий картофель фри",
            "price": 80,
            "category": "garnishes",
            "image": "https://img.freepik.com/free-photo/crispy-french-fries-with-ketchup-mayonnaise_1150-26588.jpg?ga=GA1.1.1211218396.1743407391&semt=ais_hybrid&w=740"
        },
        
        // Вторые блюда
        {
            "id": 16,
            "name": "Шницель куриный",
            "description": "Нежный куриный шницель в панировке",
            "price": 175,
            "category": "main_courses",
            "image": "https://img.freepik.com/free-photo/chicken-fillet-batter-with-mayonnaise_140725-3076.jpg?ga=GA1.1.1211218396.1743407391&semt=ais_hybrid&w=740"
        },
        {
            "id": 17,
            "name": "Курица по-французски",
            "description": "Курица под сырной корочкой",
            "price": 190,
            "category": "main_courses",
            "image": "https://img.freepik.com/free-photo/top-view-baked-chicken-wedges-pan_23-2148682744.jpg?ga=GA1.1.1211218396.1743407391&semt=ais_hybrid&w=740"
        },
        {
            "id": 18,
            "name": "Котлета говяжья",
            "description": "Сочная котлета из говядины",
            "price": 140,
            "category": "main_courses",
            "image": "https://img.freepik.com/free-photo/juicy-delicious-meat-cutlets-dark-table-russian-cuisine_2829-7278.jpg?ga=GA1.1.1211218396.1743407391&semt=ais_hybrid&w=740"
        },
        {
            "id": 19,
            "name": "Гуляш",
            "description": "Гуляш из говядины с подливкой",
            "price": 140,
            "category": "main_courses",
            "image": "https://img.freepik.com/free-photo/delicious-goulash-ready-dinner_23-2149370863.jpg?ga=GA1.1.1211218396.1743407391&semt=ais_hybrid&w=740"
        },
        {
            "id": 20,
            "name": "Треска в духовке",
            "description": "Нежная треска с лимоном и травами",
            "price": 180,
            "category": "main_courses",
            "image": "https://img.freepik.com/free-photo/delicious-mahi-mahi-fish-still-life_23-2150457373.jpg?ga=GA1.1.1211218396.1743407391&semt=ais_hybrid&w=740"
        },
        
        // Салаты
        {
            "id": 21,
            "name": "Салат Цезарь с курицей",
            "description": "Классический Цезарь с курицей и соусом",
            "price": 180,
            "category": "salads",
            "image": "https://img.freepik.com/free-photo/chicken-parmesan-caesar-salad-with-lettuce-cherry-tomatoes-inside-white-bowl-served-with-sauce-bread_114579-204.jpg?ga=GA1.1.1211218396.1743407391&semt=ais_hybrid&w=740"
        },
        {
            "id": 22,
            "name": "Греческий салат",
            "description": "Свежие овощи с фетой и оливками",
            "price": 100,
            "category": "salads",
            "image": "https://img.freepik.com/free-photo/delicious-salad-plate-high-angle_23-2149598995.jpg?ga=GA1.1.1211218396.1743407391&semt=ais_hybrid&w=740"
        },
        {
            "id": 23,
            "name": "Оливье",
            "description": "Классический салат Оливье",
            "price": 80,
            "category": "salads",
            "image": "https://img.freepik.com/free-photo/traditional-russian-salad-olivier_2829-6254.jpg?ga=GA1.1.1211218396.1743407391&semt=ais_hybrid&w=740"
        },
        {
            "id": 24,
            "name": "Курица с ананасом",
            "description": "Нежный салат с курицей и ананасами",
            "price": 95,
            "category": "salads",
            "image": "https://img.freepik.com/premium-photo/chicken-salad-with-pineapple-corn-cucumber-dressed-with-greek-yogurt-crushed-nuts-cheese_1048944-8784349.jpg?ga=GA1.1.1211218396.1743407391&semt=ais_hybrid&w=740"
        },
        {
            "id": 25,
            "name": "Винегрет",
            "description": "Овощной винегрет с фасолью",
            "price": 65,
            "category": "salads",
            "image": "https://img.freepik.com/premium-photo/beet-salad-vinaigrette-white-bowl_2829-18595.jpg?ga=GA1.1.1211218396.1743407391&semt=ais_hybrid&w=740"
        },
        {
            "id": 26,
            "name": "Сельдь под шубой",
            "description": "Классическая селёдка под шубой",
            "price": 110,
            "category": "salads",
            "image": "https://img.freepik.com/premium-photo/traditional-russian-salad-herring-fur-coat-shuba-wooden-table-layered-salad-with-herring-beets-carrots-onions-potatoes-eggs_491799-3313.jpg?ga=GA1.1.1211218396.1743407391&semt=ais_hybrid&w=740"
        },
        {
            "id": 27,
            "name": "Овощной салат",
            "description": "Свежие сезонные овощи",
            "price": 65,
            "category": "salads",
            "image": "https://img.freepik.com/premium-photo/salad-tomatoes-cucumbers-plate-vegetables-wooden-table-healthy-food-concept_286393-1746.jpg?ga=GA1.1.1211218396.1743407391&semt=ais_hybrid&w=740"
        },
        
        // Напитки и десерты
        {
            "id": 4,
            "name": "Кола",
            "description": "Освежающий газированный напиток",
            "price": 120,
            "category": "drinks",
            "image": "https://img.freepik.com/free-photo/ice-falling-brown-drink_1194-1074.jpg?ga=GA1.1.1211218396.1743407391&semt=ais_hybrid&w=740"
        },
    ]
};

// Пример отзывов
let reviewsData = [
    {
        id: 1,
        name: "Иван",
        rating: 1,
        text: "Все ужасно.",
        date: "2025-03-11"
    },
    {
        id: 2,
        name: "Олег",
        rating: 2,
        text: "Отвратительное место!",
        date: "2025-03-11"
    }
];

// Инициализация Telegram WebApp
document.addEventListener('DOMContentLoaded', function() {
    const tg = window.Telegram.WebApp;
    tg.expand();
    tg.ready();
    
    // Автоподстановка имени пользователя Telegram
    if (tg.initDataUnsafe.user) {
        const userName = `${tg.initDataUnsafe.user.first_name} ${tg.initDataUnsafe.user.last_name || ''}`.trim();
        document.getElementById('review-name').value = userName;
    }
    
    initApp();
});

function initApp() {
    renderMenuItems(menuData.items);
    renderReviews(reviewsData);
    setupTabs();
    setupCategoryFilter();
    setupReviewForm();
    setupOrderButtons();
}

function renderMenuItems(items) {
    const menuContainer = document.getElementById('menu-items');
    menuContainer.innerHTML = '';
    
    items.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.dataset.category = item.category;
        menuItem.dataset.id = item.id;
        
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="menu-item-img">
            <div class="menu-item-info">
                <h3 class="menu-item-title">${item.name}</h3>
                <p class="menu-item-price">${item.price} ₽</p>
                <p class="menu-item-category">${getCategoryName(item.category)}</p>
                <button class="add-to-cart-btn" data-id="${item.id}">+</button>
            </div>
        `;
        
        menuContainer.appendChild(menuItem);
    });
}

function renderReviews(reviews) {
    const reviewsContainer = document.getElementById('reviews-list');
    reviewsContainer.innerHTML = '';
    
    if (reviews.length === 0) {
        reviewsContainer.innerHTML = '<p>Пока нет отзывов. Будьте первым!</p>';
        return;
    }
    
    reviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.className = 'review-card';
        
        reviewElement.innerHTML = `
            <div class="review-header">
                <span class="review-author">${review.name}</span>
                <span class="review-date">${review.date}</span>
            </div>
            <div class="review-rating">${getStars(review.rating)}</div>
            <p class="review-text">${review.text}</p>
        `;
        
        reviewsContainer.appendChild(reviewElement);
    });
}

function setupTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            
            button.classList.add('active');
            const tabId = button.dataset.tab;
            document.getElementById(tabId).classList.add('active');
        });
    });
}

function setupCategoryFilter() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const category = button.dataset.category;
            filterMenuItems(category);
        });
    });
}

function filterMenuItems(category) {
    const allItems = menuData.items;
    
    if (category === 'all') {
        renderMenuItems(allItems);
        return;
    }
    
    const filteredItems = allItems.filter(item => item.category === category);
    renderMenuItems(filteredItems);
}

function setupReviewForm() {
    const form = document.getElementById('review-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('review-name').value;
        const rating = parseInt(document.getElementById('review-rating').value);
        const text = document.getElementById('review-text').value;
        
        const newReview = {
            id: reviewsData.length + 1,
            name: name,
            rating: rating,
            text: text,
            date: new Date().toLocaleDateString('ru-RU')
        };
        
        reviewsData.unshift(newReview);
        renderReviews(reviewsData);
        form.reset();
        
        document.querySelector('.tab-button[data-tab="reviews"]').click();
        alert('Спасибо за ваш отзыв!');
    });
}

function setupOrderButtons() {
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart-btn')) {
            const itemId = parseInt(e.target.dataset.id);
            const item = menuData.items.find(i => i.id === itemId);
            addToCart(item);
        }
    });
}

let cartItems = [];

function addToCart(item) {
    cartItems.push(item);
    updateCartCounter();
    showToast(`${item.name} добавлен в корзину`);
}

function updateCartCounter() {
    const counter = document.getElementById('cart-counter');
    if (counter) {
        counter.textContent = cartItems.length;
        counter.style.display = cartItems.length > 0 ? 'flex' : 'none';
    }
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => document.body.removeChild(toast), 300);
    }, 3000);
}

// Вспомогательные функции
function getCategoryName(category) {
    const categories = {
        'food': 'Основные блюда',
        'drinks': 'Напитки',
        'desserts': 'Десерты',
        'garnishes': 'Гарниры',
        'main_courses': 'Вторые блюда',
        'salads': 'Салаты'
    };
    return categories[category] || category;
}

function getStars(rating) {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
}
