const chat = document.querySelector('.chat-widget');
const input = chat.querySelector('.chat-widget__input');
const chatArea = chat.querySelector('.chat-widget__messages');
const container = chat.querySelector('.chat-widget__messages-container');
let data = new Date();

chat.addEventListener("click", event => {
    chat.classList.add("chat-widget_active");
});

const botMessageList = [
    "Добрый день",
    "До свидания", 
    "Вам помочь?"
];

const message = document.querySelector('.chat-widget__messages');
const message_container = document.querySelector('.chat-widget__messages-container')

input.addEventListener('keydown', (event) => {
    if (event.code === "Enter" && input.value != '') {
        let random = Math.floor(Math.random() * botMessageList.length);

        message.innerHTML += `
    <div class="message message_client">
            <div class="message__time">${data.getHours()}:${data.getMinutes()}</div>
            <div class="message__text">${input.value}</div>
       </div>
    <div class="message">
            <div class="message__time">${data.getHours()}:${data.getMinutes()}</div>
            <div class="message__text">${botMessageList[random]}</div>
        </div>
  `;
        input.value = '';
        container.scrollTop = container.scrollHeight;
    }
})