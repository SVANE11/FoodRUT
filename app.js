// Данные меню
const menuData = {
    "items": [
        // Основные блюда
        {
            "id": 1,
            "name": "Пицца Маргарита",
            "description": "Классическая пицца с томатным соусом, моцареллой и базиликом",
            "price": 450,
            "category": "food",
            "image": "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg"
        },
        {
            "id": 2,
            "name": "Бургер Чизбургер",
            "description": "Аппетитный бургер с говяжьей котлетой, сыром и овощами",
            "price": 350,
            "category": "food",
            "image": "https://img.freepik.com/free-photo/front-view-tasty-meat-burger-with-cheese-salad-dark-background_140725-89597.jpg"
        },
        
        // Гарниры
        {
            "id": 8,
            "name": "Картофельное пюре",
            "description": "Нежное пюре с молоком и маслом",
            "price": 75,
            "category": "garnishes",
            "image": "https://img.freepik.com/free-photo/mashed-potatoes_1194-6938.jpg"
        },
        {
            "id": 9,
            "name": "Гречка",
            "description": "Ароматная гречневая каша",
            "price": 55,
            "category": "garnishes",
            "image": "https://www.freepik.com/free-photo/buckwheat-porridge-wooden-bowl_7090600.htm#fromView=search&page=1&position=3&uuid=9565d93d-ac46-42e2-a86a-e57b94cbb8e0&query=гречка"
        },
        {
            "id": 10,
            "name": "Макароны",
            "description": "Итальянские макароны al dente",
            "price": 55,
            "category": "garnishes",
            "image": "https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_1150-42580.jpg"
        },
        {
            "id": 11,
            "name": "Рис",
            "description": "Рис отварной с маслом",
            "price": 55,
            "category": "garnishes",
            "image": "https://img.freepik.com/free-photo/rice_144627-34290.jpg"
        },
        {
            "id": 12,
            "name": "Брокколи",
            "description": "Свежая брокколи на пару",
            "price": 85,
            "category": "garnishes",
            "image": "https://img.freepik.com/free-photo/broccoli_144627-25591.jpg"
        },
        {
            "id": 13,
            "name": "Фасоль",
            "description": "Стручковая фасоль с чесноком",
            "price": 85,
            "category": "garnishes",
            "image": "https://img.freepik.com/free-photo/green-beans_144627-25590.jpg"
        },
        {
            "id": 14,
            "name": "Картофель по-деревенски",
            "description": "Ароматный запечённый картофель с травами",
            "price": 80,
            "category": "garnishes",
            "image": "https://img.freepik.com/free-photo/rustic-potatoes_144627-25592.jpg"
        },
        {
            "id": 15,
            "name": "Картофель фри",
            "description": "Хрустящий картофель фри",
            "price": 80,
            "category": "garnishes",
            "image": "https://img.freepik.com/free-photo/french-fries_144627-25593.jpg"
        },
        
        // Вторые блюда
        {
            "id": 16,
            "name": "Шницель куриный",
            "description": "Нежный куриный шницель в панировке",
            "price": 175,
            "category": "main_courses",
            "image": "https://img.freepik.com/free-photo/chicken-schnitzel_144627-25594.jpg"
        },
        {
            "id": 17,
            "name": "Курица по-французски",
            "description": "Курица под сырной корочкой",
            "price": 190,
            "category": "main_courses",
            "image": "https://img.freepik.com/free-photo/french-chicken_144627-25595.jpg"
        },
        {
            "id": 18,
            "name": "Котлета говяжья",
            "description": "Сочная котлета из говядины",
            "price": 140,
            "category": "main_courses",
            "image": "https://img.freepik.com/free-photo/beef-cutlet_144627-25596.jpg"
        },
        {
            "id": 19,
            "name": "Гуляш",
            "description": "Гуляш из говядины с подливкой",
            "price": 140,
            "category": "main_courses",
            "image": "https://img.freepik.com/free-photo/beef-goulash_144627-25597.jpg"
        },
        {
            "id": 20,
            "name": "Треска в духовке",
            "description": "Нежная треска с лимоном и травами",
            "price": 180,
            "category": "main_courses",
            "image": "https://img.freepik.com/free-photo/baked-cod_144627-25598.jpg"
        },
        
        // Салаты
        {
            "id": 21,
            "name": "Салат Цезарь с курицей",
            "description": "Классический Цезарь с курицей и соусом",
            "price": 180,
            "category": "salads",
            "image": "https://img.freepik.com/free-photo/caesar-salad_144627-25599.jpg"
        },
        {
            "id": 22,
            "name": "Греческий салат",
            "description": "Свежие овощи с фетой и оливками",
            "price": 100,
            "category": "salads",
            "image": "https://img.freepik.com/free-photo/greek-salad_144627-25600.jpg"
        },
        {
            "id": 23,
            "name": "Оливье",
            "description": "Классический салат Оливье",
            "price": 80,
            "category": "salads",
            "image": "https://img.freepik.com/free-photo/olivier-salad_144627-25601.jpg"
        },
        {
            "id": 24,
            "name": "Курица с ананасом",
            "description": "Нежный салат с курицей и ананасами",
            "price": 95,
            "category": "salads",
            "image": "https://img.freepik.com/free-photo/chicken-pineapple-salad_144627-25602.jpg"
        },
        {
            "id": 25,
            "name": "Винегрет",
            "description": "Овощной винегрет с фасолью",
            "price": 65,
            "category": "salads",
            "image": "https://img.freepik.com/free-photo/vinegret_144627-25603.jpg"
        },
        {
            "id": 26,
            "name": "Сельдь под шубой",
            "description": "Классическая селёдка под шубой",
            "price": 110,
            "category": "salads",
            "image": "https://img.freepik.com/free-photo/herring-under-fur-coat_144627-25604.jpg"
        },
        {
            "id": 27,
            "name": "Овощной салат",
            "description": "Свежие сезонные овощи",
            "price": 65,
            "category": "salads",
            "image": "https://img.freepik.com/free-photo/vegetable-salad_144627-25605.jpg"
        },
        
        // Напитки и десерты
        {
            "id": 4,
            "name": "Кола",
            "description": "Освежающий газированный напиток",
            "price": 120,
            "category": "drinks",
            "image": "https://img.freepik.com/free-photo/cola-drink-glass_144627-16201.jpg"
        },
        {
            "id": 5,
            "name": "Апельсиновый сок",
            "description": "Натуральный свежевыжатый апельсиновый сок",
            "price": 180,
            "category": "drinks",
            "image": "https://img.freepik.com/free-photo/glass-fresh-orange-juice_144627-26425.jpg"
        }
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
