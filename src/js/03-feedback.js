var throttle = require('lodash.throttle');

const formRef = document.querySelector('.feedback-form');
const emailRef = document.querySelector('input[type="email"]');
const messageRef = document.querySelector('textarea[name="message"]');

const LOCAL_KEY = 'feedback-form-state';
const feedbackData = {
  email: '',
  message: '',
};

formRef.addEventListener('input', throttle(onFillFormData, 500));
formRef.addEventListener('submit', onSubmitForm);

function onFillFormData(e) {
  feedbackData[e.target.name] = e.target.value;
  localStorage.setItem(LOCAL_KEY, JSON.stringify(feedbackData));
}

function resetPage() {
  const savedData = JSON.parse(localStorage.getItem(LOCAL_KEY));

  if (savedData) {
    emailRef.value = savedData.email;
    messageRef.value = savedData.message;

    feedbackData.email = savedData.email;
    feedbackData.message = savedData.message;
  }
}

resetPage();

function onSubmitForm(e) {
  e.preventDefault();

  if (formRef.email.value === '' || formRef.message.value === '') {
    alert('Будь лакска введіть ваші данні');
    return;
  }

  console.log(feedbackData);

  e.currentTarget.reset();
  localStorage.removeItem(LOCAL_KEY);
  feedbackData.email = '';
  feedbackData.message = '';
}
