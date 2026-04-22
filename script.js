// Получаем элементы
const btnTwenty = document.getElementById('btnTwenty');
const btnEighteen = document.getElementById('btnEighteen');
const modalOverlay = document.getElementById('modalOverlay');
const modalDynamicBody = document.getElementById('modalDynamicBody');
const closeModalBtn = document.getElementById('closeModalBtn');


const YOUR_IMAGE_URL = "загруженное.jpg"; // <--- ИЗМЕНИТЕ ЗДЕСЬ

// ========== СОБСТВЕННАЯ АНИМАЦИЯ КОНФЕТТИ ==========
function launchConfetti() {
    const colors = [
        '#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff',
        '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeead', '#ffcc5c',
        '#ff6b6b', '#f9d56e', '#ff8a9f', '#a8e6cf', '#ffd3b6', '#ffaaa5'
    ];
    
    const confettiCount = 200;
    
    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            
            // Случайный цвет
            const color = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.backgroundColor = color;
            
            // Случайный размер
            const size = Math.random() * 8 + 4;
            confetti.style.width = size + 'px';
            confetti.style.height = size + 'px';
            
            // Случайная форма (иногда квадрат, иногда прямоугольник)
            if (Math.random() > 0.5) {
                confetti.style.borderRadius = '50%';
            }
            
            // Случайная позиция по горизонтали
            const startX = Math.random() * window.innerWidth;
            confetti.style.left = startX + 'px';
            confetti.style.top = '-20px';
            
            // Случайная длительность анимации
            const duration = Math.random() * 2 + 2;
            confetti.style.animation = `fall ${duration}s linear forwards`;
            
            // Случайная задержка
            const delay = Math.random() * 0.5;
            confetti.style.animationDelay = delay + 's';
            
            document.body.appendChild(confetti);
            
            // Удаляем элемент после анимации
            setTimeout(() => {
                confetti.remove();
            }, (duration + delay) * 1000);
        }, i * 15);
    }
    
    // Второй залп через 0.5 секунды
    setTimeout(() => {
        for (let i = 0; i < 100; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.classList.add('confetti');
                const color = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.backgroundColor = color;
                const size = Math.random() * 8 + 4;
                confetti.style.width = size + 'px';
                confetti.style.height = size + 'px';
                const startX = Math.random() * window.innerWidth;
                confetti.style.left = startX + 'px';
                confetti.style.top = '-20px';
                const duration = Math.random() * 2 + 2;
                confetti.style.animation = `fall ${duration}s linear forwards`;
                document.body.appendChild(confetti);
                setTimeout(() => confetti.remove(), duration * 1000);
            }, i * 10);
        }
    }, 500);
}

// Функция закрытия модального окна
function closeModal() {
    modalOverlay.classList.remove('active');
}

// Функция открытия модалки
function openModal(type) {
    if (type === 'wrong') {
        modalDynamicBody.innerHTML = `
            <div style="text-align: center;">
                <div style="font-size: 4rem; margin-bottom: 0.5rem;">🤔</div>
                <div class="modal-title">Не-а, не угадала!</div>
                <div class="modal-text">
                    ⚡️ <strong>Неправильно...</strong> подумай ещё!<br>
                    Ведь твоя душа всегда юна, а возраст — это всего лишь цифры ✨<br>
                    Попробуй другой вариант 😉
                </div>
                <div style="font-size: 2rem; margin-top: 0.5rem;">🎈🎀</div>
            </div>
        `;
    } 
    else if (type === 'congrats') {
        let imageHtml = '';
        
        // Если указана своя картинка
        if (YOUR_IMAGE_URL && YOUR_IMAGE_URL !== "моя_картинка.jpg") {
            imageHtml = `
                <img src="${YOUR_IMAGE_URL}" alt="Поздравление" class="your-congrats-image" 
                     onerror="this.style.display='none'; this.insertAdjacentHTML('afterend', '<div style=\\'font-size: 5rem; margin: 1rem;\\'>🎂🎉✨</div>')">
            `;
        } else {
            // Красивое поздравление с эмодзи
            imageHtml = `
                <div style="font-size: 6rem; margin: 0.5rem 0;">
                    🎂🎉✨💖
                </div>
            `;
        }
        
        modalDynamicBody.innerHTML = `
            <div style="text-align: center;">
                ${imageHtml}
                <div class="modal-title">🎂 С Днём Рождения, красавица! 🎂</div>
                <div class="modal-text">
                    🌸 <strong>Вечно 18!</strong> Именно так! 🌸<br><br>
                    Пусть каждый день дарит улыбки, волшебство и радость.<br>
                    Ты — самая чудесная подруга, оставайся такой же искренней, лёгкой и неповторимой!<br><br>
                    🥂 Здоровья, счастья, любви и исполнения всех мечтаний! ✨
                </div>
                <div style="font-size: 2rem; margin-top: 0.2rem;">🎁💐🍰</div>
            </div>
        `;
    }
    
    modalOverlay.classList.add('active');
}

// ========== ОБРАБОТЧИКИ КНОПОК ==========

// Кнопка "20 лет"
if (btnTwenty) {
    btnTwenty.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Кнопка 20 лет нажата');
        openModal('wrong');
        if (window.navigator && window.navigator.vibrate) {
            window.navigator.vibrate(50);
        }
    });
}

// Кнопка "Вечно 18 лет"
if (btnEighteen) {
    btnEighteen.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Кнопка Вечно 18 нажата! 🎉');
        
        // Запускаем конфетти
        launchConfetti();
        
        // Виброотклик
        if (window.navigator && window.navigator.vibrate) {
            window.navigator.vibrate(100);
        }
        
        // Показываем поздравление
        openModal('congrats');
    });
}

// Закрытие модального окна
if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
}

// Закрытие по клику на фон
if (modalOverlay) {
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
}

// Закрытие по Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
    }
});

// Блокировка скролла при открытой модалке
if (modalOverlay) {
    modalOverlay.addEventListener('touchmove', function(e) {
        if (modalOverlay.classList.contains('active')) {
            e.preventDefault();
        }
    }, { passive: false });
}

function toggleBodyScroll(disable) {
    if (disable) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mut) {
        if (mut.attributeName === 'class') {
            if (modalOverlay.classList.contains('active')) {
                toggleBodyScroll(true);
            } else {
                toggleBodyScroll(false);
            }
        }
    });
});

if (modalOverlay) {
    observer.observe(modalOverlay, { attributes: true });
}

toggleBodyScroll(false);

console.log('Скрипт загружен, всё работает! 🎉');
console.log('Конфетти будут летать своими силами! ✨');