const videoBtn = document.getElementById('videoBtn');
const audioBtn = document.getElementById('audioBtn');
const chatBtn = document.getElementById('chatBtn');
const messageBtn = document.getElementById('messageBtn');
const formBtn = document.getElementById('formBtn');

const mainForm = document.getElementById('mainForm');

const state = document.getElementById('state'); 
const communication = document.getElementById('communication'); 
const customStateInput = document.getElementById('custom-state-label');

state.onchange = customStateSelected;

function customStateSelected(){
	if (state.value === 'Написать своё...') {
		customStateInput.style.display = 'block';
	} else {
		customStateInput.removeAttribute('style');
	}
};

videoBtn.addEventListener('click', () => {
	communication.value = 'Видео консультация';
});

audioBtn.addEventListener('click', () => {
	communication.value = 'Аудио консультация';
});

chatBtn.addEventListener('click', () => {
	communication.value = 'Чат';
});

messageBtn.addEventListener('click', () => {
	communication.value = 'Онлайн сообщения';
});

formBtn.addEventListener('click', () => {
	mainForm.requestSubmit();
	mainForm.reset();
});

