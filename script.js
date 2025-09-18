// Game data and state
const gameData = {
    recycling: {
        title: "♻️ Reciclaje",
        instruction: "Arrastra cada elemento a la categoría correcta: ¿Se puede reciclar o no?",
        categories: [
            {
                id: "recyclable",
                title: "Reciclable",
                icon: "♻️",
                description: "Se puede reciclar"
            },
            {
                id: "non-recyclable",
                title: "No Reciclable",
                icon: "🗑️",
                description: "No se puede reciclar"
            }
        ],
        items: [
            { id: "bottle", text: "Botella de plástico", icon: "🍼", category: "recyclable" },
            { id: "paper", text: "Papel", icon: "📄", category: "recyclable" },
            { id: "can", text: "Lata de aluminio", icon: "🥫", category: "recyclable" },
            { id: "glass", text: "Botella de vidrio", icon: "🍾", category: "recyclable" },
            { id: "battery", text: "Pila", icon: "🔋", category: "non-recyclable" },
            { id: "food", text: "Restos de comida", icon: "🍎", category: "non-recyclable" },
            { id: "diaper", text: "Pañal", icon: "👶", category: "non-recyclable" },
            { id: "cardboard", text: "Cartón", icon: "📦", category: "recyclable" }
        ]
    },
    food: {
        title: "🍎 Alimentación Saludable",
        instruction: "Clasifica los alimentos según sean saludables o no saludables",
        categories: [
            {
                id: "healthy",
                title: "Saludable",
                icon: "🥗",
                description: "Bueno para tu salud"
            },
            {
                id: "unhealthy",
                title: "No Saludable",
                icon: "🍟",
                description: "Consumir con moderación"
            }
        ],
        items: [
            { id: "apple", text: "Manzana", icon: "🍎", category: "healthy" },
            { id: "broccoli", text: "Brócoli", icon: "🥦", category: "healthy" },
            { id: "fish", text: "Pescado", icon: "🐟", category: "healthy" },
            { id: "nuts", text: "Nueces", icon: "🥜", category: "healthy" },
            { id: "burger", text: "Hamburguesa", icon: "🍔", category: "unhealthy" },
            { id: "fries", text: "Papas fritas", icon: "🍟", category: "unhealthy" },
            { id: "soda", text: "Refresco", icon: "🥤", category: "unhealthy" },
            { id: "candy", text: "Dulces", icon: "🍭", category: "unhealthy" }
        ]
    },
    body: {
        title: "👤 Partes del Cuerpo",
        instruction: "Clasifica las partes del cuerpo según pertenezcan a la cabeza o al cuerpo",
        categories: [
            {
                id: "head",
                title: "Cabeza",
                icon: "👤",
                description: "Partes de la cabeza"
            },
            {
                id: "body",
                title: "Cuerpo",
                icon: "🫱",
                description: "Partes del cuerpo"
            }
        ],
        items: [
            { id: "eyes", text: "Ojos", icon: "👀", category: "head" },
            { id: "nose", text: "Nariz", icon: "👃", category: "head" },
            { id: "mouth", text: "Boca", icon: "👄", category: "head" },
            { id: "ears", text: "Orejas", icon: "👂", category: "head" },
            { id: "hands", text: "Manos", icon: "🤲", category: "body" },
            { id: "feet", text: "Pies", icon: "🦶", category: "body" },
            { id: "arms", text: "Brazos", icon: "💪", category: "body" },
            { id: "legs", text: "Piernas", icon: "🦵", category: "body" }
        ]
    },
    animals: {
        title: "🐾 Hábitats de Animales",
        instruction: "Clasifica los animales según vivan en la tierra o en el agua",
        categories: [
            {
                id: "land",
                title: "Tierra",
                icon: "🌍",
                description: "Animales terrestres"
            },
            {
                id: "water",
                title: "Agua",
                icon: "🌊",
                description: "Animales acuáticos"
            }
        ],
        items: [
            { id: "lion", text: "León", icon: "🦁", category: "land" },
            { id: "elephant", text: "Elefante", icon: "🐘", category: "land" },
            { id: "dog", text: "Perro", icon: "🐕", category: "land" },
            { id: "cat", text: "Gato", icon: "🐱", category: "land" },
            { id: "fish", text: "Pez", icon: "🐠", category: "water" },
            { id: "whale", text: "Ballena", icon: "🐋", category: "water" },
            { id: "dolphin", text: "Delfín", icon: "🐬", category: "water" },
            { id: "octopus", text: "Pulpo", icon: "🐙", category: "water" }
        ]
    },
    colors: {
        title: "🎨 Colores",
        instruction: "Clasifica los colores según sean primarios o secundarios",
        categories: [
            {
                id: "primary",
                title: "Primarios",
                icon: "🔴",
                description: "Colores básicos"
            },
            {
                id: "secondary",
                title: "Secundarios",
                icon: "🟠",
                description: "Mezcla de primarios"
            }
        ],
        items: [
            { id: "red", text: "Rojo", icon: "🔴", category: "primary" },
            { id: "blue", text: "Azul", icon: "🔵", category: "primary" },
            { id: "yellow", text: "Amarillo", icon: "🟡", category: "primary" },
            { id: "green", text: "Verde", icon: "🟢", category: "secondary" },
            { id: "orange", text: "Naranja", icon: "🟠", category: "secondary" },
            { id: "purple", text: "Morado", icon: "🟣", category: "secondary" }
        ]
    },
    shapes: {
        title: "🔷 Formas Geométricas",
        instruction: "Clasifica las formas según tengan lados rectos o curvos",
        categories: [
            {
                id: "straight",
                title: "Lados Rectos",
                icon: "⬜",
                description: "Formas con líneas rectas"
            },
            {
                id: "curved",
                title: "Lados Curvos",
                icon: "⭕",
                description: "Formas con líneas curvas"
            }
        ],
        items: [
            { id: "square", text: "Cuadrado", icon: "⬜", category: "straight" },
            { id: "triangle", text: "Triángulo", icon: "🔺", category: "straight" },
            { id: "rectangle", text: "Rectángulo", icon: "▬", category: "straight" },
            { id: "diamond", text: "Rombo", icon: "🔷", category: "straight" },
            { id: "circle", text: "Círculo", icon: "⭕", category: "curved" },
            { id: "oval", text: "Óvalo", icon: "⭕", category: "curved" }
        ]
    }
};

// Game state
let currentLevel = null;
let currentItems = [];
let correctCount = 0;
let incorrectCount = 0;
let score = 0;
let totalItems = 0;
let completedItems = 0;

// DOM elements
const levelSelection = document.getElementById('level-selection');
const gameArea = document.getElementById('game-area');
const levelTitlePlaying = document.getElementById('level-title-playing');
const gameInstruction = document.getElementById('game-instruction');
const draggableItems = document.getElementById('draggable-items');
const dropZones = document.getElementById('drop-zones');
const feedback = document.getElementById('feedback');
const progressFill = document.getElementById('progress-fill');
const correctCountEl = document.getElementById('correct-count');
const incorrectCountEl = document.getElementById('incorrect-count');
const scoreEl = document.getElementById('score');
const backBtn = document.getElementById('back-btn');
const resultsModal = document.getElementById('results-modal');
const statsModal = document.getElementById('stats-modal');
const settingsBtn = document.getElementById('settings-btn');

// Audio elements
const correctSound = document.getElementById('correct-sound');
const incorrectSound = document.getElementById('incorrect-sound');
const completeSound = document.getElementById('complete-sound');

// Initialize game
document.addEventListener('DOMContentLoaded', function() {
    initializeGame();
    loadStatistics();
});

function initializeGame() {
    // Level selection buttons
    document.querySelectorAll('.level-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const level = this.dataset.level;
            startLevel(level);
        });
    });

    // Back button
    backBtn.addEventListener('click', function() {
        showLevelSelection();
    });

    // Modal buttons
    document.getElementById('play-again-btn').addEventListener('click', function() {
        hideModal(resultsModal);
        startLevel(currentLevel);
    });

    document.getElementById('choose-level-btn').addEventListener('click', function() {
        hideModal(resultsModal);
        showLevelSelection();
    });

    document.getElementById('close-stats-btn').addEventListener('click', function() {
        hideModal(statsModal);
    });

    // Settings button
    settingsBtn.addEventListener('click', function() {
        showStatistics();
    });

    // Initialize drag and drop
    initializeDragAndDrop();
}

function startLevel(levelKey) {
    currentLevel = levelKey;
    const level = gameData[levelKey];
    
    // Reset game state
    correctCount = 0;
    incorrectCount = 0;
    score = 0;
    completedItems = 0;
    totalItems = level.items.length;
    
    // Shuffle items for variety
    currentItems = [...level.items].sort(() => Math.random() - 0.5);
    
    // Update UI
    levelTitlePlaying.textContent = level.title;
    gameInstruction.textContent = level.instruction;
    updateStats();
    updateProgress();
    
    // Create draggable items
    createDraggableItems();
    
    // Create drop zones
    createDropZones(level.categories);
    
    // Show game area
    levelSelection.style.display = 'none';
    gameArea.style.display = 'block';
    
    // Add entrance animation
    gameArea.style.opacity = '0';
    setTimeout(() => {
        gameArea.style.opacity = '1';
        gameArea.style.transition = 'opacity 0.5s ease';
    }, 100);
}

function createDraggableItems() {
    draggableItems.innerHTML = '';
    
    currentItems.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.className = 'draggable-item';
        itemEl.draggable = true;
        itemEl.dataset.itemId = item.id;
        itemEl.dataset.category = item.category;
        
        itemEl.innerHTML = `
            <div class="item-icon">${item.icon}</div>
            <div class="item-text">${item.text}</div>
        `;
        
        draggableItems.appendChild(itemEl);
    });
}

function createDropZones(categories) {
    dropZones.innerHTML = '';
    
    categories.forEach(category => {
        const zoneEl = document.createElement('div');
        zoneEl.className = 'drop-zone';
        zoneEl.dataset.category = category.id;
        
        zoneEl.innerHTML = `
            <div class="zone-icon">${category.icon}</div>
            <div class="zone-title">${category.title}</div>
            <div class="zone-description">${category.description}</div>
            <div class="dropped-items"></div>
        `;
        
        dropZones.appendChild(zoneEl);
    });
}

function initializeDragAndDrop() {
    // Drag start
    document.addEventListener('dragstart', function(e) {
        if (e.target.classList.contains('draggable-item')) {
            e.target.classList.add('dragging');
            e.dataTransfer.setData('text/plain', e.target.dataset.itemId);
            e.dataTransfer.effectAllowed = 'move';
        }
    });

    // Drag end
    document.addEventListener('dragend', function(e) {
        if (e.target.classList.contains('draggable-item')) {
            e.target.classList.remove('dragging');
        }
    });

    // Drag over
    document.addEventListener('dragover', function(e) {
        if (e.target.closest('.drop-zone')) {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            e.target.closest('.drop-zone').classList.add('drag-over');
        }
    });

    // Drag leave
    document.addEventListener('dragleave', function(e) {
        if (e.target.closest('.drop-zone')) {
            e.target.closest('.drop-zone').classList.remove('drag-over');
        }
    });

    // Drop
    document.addEventListener('drop', function(e) {
        e.preventDefault();
        const dropZone = e.target.closest('.drop-zone');
        if (dropZone) {
            dropZone.classList.remove('drag-over');
            const itemId = e.dataTransfer.getData('text/plain');
            const draggedItem = document.querySelector(`[data-item-id="${itemId}"]`);
            
            if (draggedItem) {
                handleDrop(draggedItem, dropZone);
            }
        }
    });

    // Touch support for mobile
    let draggedElement = null;
    
    document.addEventListener('touchstart', function(e) {
        if (e.target.closest('.draggable-item')) {
            draggedElement = e.target.closest('.draggable-item');
            draggedElement.classList.add('dragging');
        }
    });

    document.addEventListener('touchmove', function(e) {
        if (draggedElement) {
            e.preventDefault();
            const touch = e.touches[0];
            const elementBelow = document.elementFromPoint(touch.clientX, touch.clientY);
            const dropZone = elementBelow?.closest('.drop-zone');
            
            // Remove drag-over from all zones
            document.querySelectorAll('.drop-zone').forEach(zone => {
                zone.classList.remove('drag-over');
            });
            
            // Add drag-over to current zone
            if (dropZone) {
                dropZone.classList.add('drag-over');
            }
        }
    });

    document.addEventListener('touchend', function(e) {
        if (draggedElement) {
            const touch = e.changedTouches[0];
            const elementBelow = document.elementFromPoint(touch.clientX, touch.clientY);
            const dropZone = elementBelow?.closest('.drop-zone');
            
            // Remove drag-over from all zones
            document.querySelectorAll('.drop-zone').forEach(zone => {
                zone.classList.remove('drag-over');
            });
            
            if (dropZone) {
                handleDrop(draggedElement, dropZone);
            }
            
            draggedElement.classList.remove('dragging');
            draggedElement = null;
        }
    });
}

function handleDrop(draggedItem, dropZone) {
    const itemCategory = draggedItem.dataset.category;
    const zoneCategory = dropZone.dataset.category;
    const isCorrect = itemCategory === zoneCategory;
    
    if (isCorrect) {
        handleCorrectDrop(draggedItem, dropZone);
    } else {
        handleIncorrectDrop(draggedItem, dropZone);
    }
}

function handleCorrectDrop(draggedItem, dropZone) {
    correctCount++;
    score += 10;
    completedItems++;
    
    // Visual feedback
    dropZone.classList.add('correct');
    setTimeout(() => dropZone.classList.remove('correct'), 600);
    
    // Move item to drop zone
    const droppedItemsContainer = dropZone.querySelector('.dropped-items');
    const droppedItem = document.createElement('div');
    droppedItem.className = 'dropped-item';
    droppedItem.textContent = draggedItem.querySelector('.item-text').textContent;
    droppedItemsContainer.appendChild(droppedItem);
    
    // Remove from draggable items
    draggedItem.remove();
    
    // Play sound and show feedback
    playSound(correctSound);
    showFeedback('¡Correcto! 🎉', 'correct');
    
    // Update UI
    updateStats();
    updateProgress();
    
    // Check if level is complete
    if (completedItems === totalItems) {
        setTimeout(() => {
            completeLevel();
        }, 1000);
    }
}

function handleIncorrectDrop(draggedItem, dropZone) {
    incorrectCount++;
    
    // Visual feedback
    dropZone.classList.add('incorrect');
    setTimeout(() => dropZone.classList.remove('incorrect'), 600);
    
    // Play sound and show feedback
    playSound(incorrectSound);
    showFeedback('¡Inténtalo de nuevo! 🤔', 'incorrect');
    
    // Update UI
    updateStats();
}

function updateStats() {
    correctCountEl.textContent = correctCount;
    incorrectCountEl.textContent = incorrectCount;
    scoreEl.textContent = score;
}

function updateProgress() {
    const progress = (completedItems / totalItems) * 100;
    progressFill.style.width = `${progress}%`;
}

function showFeedback(message, type) {
    feedback.textContent = message;
    feedback.className = `feedback ${type} show`;
    
    setTimeout(() => {
        feedback.classList.remove('show');
    }, 2000);
}

function playSound(audioElement) {
    if (audioElement) {
        audioElement.currentTime = 0;
        audioElement.play().catch(() => {
            // Ignore audio play errors (browser restrictions)
        });
    }
}

function completeLevel() {
    playSound(completeSound);
    
    // Save statistics
    saveStatistics();
    
    // Show results modal
    document.getElementById('final-correct').textContent = correctCount;
    document.getElementById('final-incorrect').textContent = incorrectCount;
    document.getElementById('final-score').textContent = score;
    
    showModal(resultsModal);
}

function showLevelSelection() {
    gameArea.style.display = 'none';
    levelSelection.style.display = 'block';
    
    // Reset game state
    currentLevel = null;
    correctCount = 0;
    incorrectCount = 0;
    score = 0;
    updateStats();
}

function showModal(modal) {
    modal.classList.add('show');
}

function hideModal(modal) {
    modal.classList.remove('show');
}

// Statistics functions
function saveStatistics() {
    const stats = getStatistics();
    const levelKey = currentLevel;
    
    if (!stats[levelKey]) {
        stats[levelKey] = {
            timesPlayed: 0,
            totalCorrect: 0,
            totalIncorrect: 0,
            totalScore: 0,
            bestScore: 0
        };
    }
    
    stats[levelKey].timesPlayed++;
    stats[levelKey].totalCorrect += correctCount;
    stats[levelKey].totalIncorrect += incorrectCount;
    stats[levelKey].totalScore += score;
    stats[levelKey].bestScore = Math.max(stats[levelKey].bestScore, score);
    
    localStorage.setItem('dragLearnStats', JSON.stringify(stats));
}

function getStatistics() {
    const stats = localStorage.getItem('dragLearnStats');
    return stats ? JSON.parse(stats) : {};
}

function loadStatistics() {
    // Statistics are loaded when needed
}

function showStatistics() {
    const stats = getStatistics();
    const statsContent = document.getElementById('stats-content');
    
    if (Object.keys(stats).length === 0) {
        statsContent.innerHTML = '<p>¡Aún no has jugado ningún nivel! 🎮</p>';
    } else {
        let html = '';
        
        Object.keys(stats).forEach(levelKey => {
            const levelStats = stats[levelKey];
            const levelData = gameData[levelKey];
            
            if (levelData) {
                const accuracy = levelStats.totalCorrect + levelStats.totalIncorrect > 0 
                    ? Math.round((levelStats.totalCorrect / (levelStats.totalCorrect + levelStats.totalIncorrect)) * 100)
                    : 0;
                
                html += `
                    <div class="stat-row">
                        <strong>${levelData.title}</strong>
                    </div>
                    <div class="stat-row">
                        <span>Veces jugado:</span>
                        <span>${levelStats.timesPlayed}</span>
                    </div>
                    <div class="stat-row">
                        <span>Precisión:</span>
                        <span>${accuracy}%</span>
                    </div>
                    <div class="stat-row">
                        <span>Mejor puntuación:</span>
                        <span>${levelStats.bestScore}</span>
                    </div>
                    <div class="stat-row">
                        <span>Puntuación total:</span>
                        <span>${levelStats.totalScore}</span>
                    </div>
                    <hr style="margin: 15px 0;">
                `;
            }
        });
        
        statsContent.innerHTML = html;
    }
    
    showModal(statsModal);
}

// Prevent default drag behavior on images
document.addEventListener('dragstart', function(e) {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
    }
});

// Add some fun animations
function addBounceAnimation(element) {
    element.classList.add('bounce');
    setTimeout(() => {
        element.classList.remove('bounce');
    }, 1000);
}

// Initialize the game when the page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeGame);
} else {
    initializeGame();
}