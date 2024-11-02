// Initialize Lucide icons
lucide.createIcons();

// Get DOM elements
const chatButton = document.getElementById('chatButton');
const chatWindow = document.getElementById('chatWindow');
const closeChat = document.getElementById('closeChat');
const chatForm = document.getElementById('chatForm');
const messageInput = document.getElementById('messageInput');
const chatMessages = document.getElementById('chatMessages');

// Toggle chat window
chatButton.addEventListener('click', () => {
    chatWindow.classList.remove('hidden');
    chatButton.classList.add('hidden');
});

closeChat.addEventListener('click', () => {
    chatWindow.classList.add('hidden');
    chatButton.classList.remove('hidden');
});

// Handle message submission
chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = messageInput.value.trim();
    
    if (message) {
        // Add user message
        addMessage(message, 'user');
        messageInput.value = '';

        // Simulate admin response
        setTimeout(() => {
            addMessage('Terima kasih atas pertanyaan Anda. Customer service kami akan segera merespons.', 'admin');
        }, 1000);
    }
});

// Function to add message to chat
function addMessage(message, sender) {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const messageHTML = `
        <div class="flex ${sender === 'user' ? 'justify-end' : 'justify-start'}">
            <div class="max-w-[80%] rounded-lg p-3 ${
                sender === 'user' 
                    ? 'bg-orange-500 text-white' 
                    : 'bg-gray-100 text-gray-800'
            }">
                <p class="text-sm">${message}</p>
                <p class="text-xs mt-1 opacity-70">${time}</p>
            </div>
        </div>
    `;
    
    chatMessages.insertAdjacentHTML('beforeend', messageHTML);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}