// Данные меню
const menuData = {
    "items": [
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
        {
            "id": 3,
            "name": "Салат Цезарь",
            "description": "Свежий салат с курицей, листьями салата, сухариками и соусом Цезарь",
            "price": 300,
            "category": "food",
            "image": "https://img.freepik.com/free-photo/side-view-caesar-salad-with-chicken-parmesan-cheese-croutons-tomatoes-plate_141793-4763.jpg"
        },
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
        },
        {
            "id": 6,
            "name": "Тирамису",
            "description": "Итальянский десерт из печенья савоярди, сыра маскарпоне и кофе",
            "price": 280,
            "category": "desserts",
            "image": "https://img.freepik.com/free-photo/delicious-tiramisu-cake_144627-12484.jpg"
        },
        {
            "id": 7,
            "name": "Чизкейк",
            "description": "Нежный чизкейк с ягодным соусом",
            "price": 250,
            "category": "desserts",
            "image": "https://img.freepik.com/free-photo/slice-cake-with-berries_144627-26405.jpg"
        }
    ]
};

// Пример отзывов
let reviewsData = [
    {
        id: 1,
        name: "Иван",
        rating: 5,
        text: "Отличная пицца! Быстрая доставка, вкусно и горячо.",
        date: "2023-05-15"
    },
    {
        id: 2,
        name: "Мария",
        rating: 4,
        text: "Вкусные бургеры, но ждала доставку дольше чем обычно.",
        date: "2023-05-10"
    }
];

// Инициализация Telegram WebApp
document.addEventListener('DOMContentLoaded', function() {
    // Инициализация Telegram WebApp
    const tg = window.Telegram.WebApp;
    tg.expand();
    tg.ready();
    
    // Инициализация приложения
    initApp();
});

function initApp() {
    // Загрузка данных меню
    renderMenuItems(menuData.items);
    
    // Загрузка отзывов
    renderReviews(reviewsData);
    
    // Настройка табов
    setupTabs();
    
    // Настройка фильтрации по категориям
    setupCategoryFilter();
    
    // Настройка формы отзыва
    setupReviewForm();
}

// Функция для отображения элементов меню
function renderMenuItems(items) {
    const menuContainer = document.getElementById('menu-items');
    menuContainer.innerHTML = '';
    
    items.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.dataset.category = item.category;
        
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="menu-item-img">
            <div class="menu-item-info">
                <h3 class="menu-item-title">${item.name}</h3>
                <p class="menu-item-price">${item.price} ₽</p>
                <p class="menu-item-category">${getCategoryName(item.category)}</p>
            </div>
        `;
        
        menuContainer.appendChild(menuItem);
    });
}

// Функция для отображения отзывов
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
            <div class="review-author">${review.name}</div>
            <div class="review-rating">${getStars(review.rating)}</div>
            <p class="review-text">${review.text}</p>
            <div class="review-date">${review.date}</div>
        `;
        
        reviewsContainer.appendChild(reviewElement);
    });
}

// Настройка табов
function setupTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Удаляем active у всех кнопок и контента
            document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            
            // Добавляем active к выбранной кнопке и соответствующему контенту
            button.classList.add('active');
            const tabId = button.dataset.tab;
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// Настройка фильтрации по категориям
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

// Фильтрация элементов меню по категории
function filterMenuItems(category) {
    const allItems = menuData.items;
    
    if (category === 'all') {
        renderMenuItems(allItems);
        return;
    }
    
    const filteredItems = allItems.filter(item => item.category === category);
    renderMenuItems(filteredItems);
}

// Настройка формы отзыва
function setupReviewForm() {
    const form = document.getElementById('review-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('review-name').value;
        const rating = parseInt(document.getElementById('review-rating').value);
        const text = document.getElementById('review-text').value;
        
        // Создаем новый отзыв
        const newReview = {
            id: reviewsData.length + 1,
            name: name,
            rating: rating,
            text: text,
            date: new Date().toISOString().split('T')[0]
        };
        
        // Добавляем отзыв в массив
        reviewsData.unshift(newReview);
        
        // Обновляем список отзывов
        renderReviews(reviewsData);
        
        // Очищаем форму
        form.reset();
        
        // Переключаемся на вкладку с отзывами
        document.querySelector('.tab-button[data-tab="reviews"]').click();
        
        // Показываем уведомление
        alert('Спасибо за ваш отзыв!');
    });
}

// Вспомогательные функции
function getCategoryName(category) {
    const categories = {
        'food': 'Еда',
        'drinks': 'Напитки',
        'desserts': 'Десерты'
    };
    return categories[category] || category;
}

function getStars(rating) {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
}
