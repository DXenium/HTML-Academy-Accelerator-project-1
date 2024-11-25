const form = document.querySelector('.free__form');
const inputList = Array.from(form.querySelectorAll('.free__input'));
const buttonElement = form.querySelector('.free__button');
const formErrorElement = form.querySelector('.free__empty--error');

startValidation();

function startValidation() {
  toggleButton();
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (hasInvalidInput()) {
      formError();
      inputList.forEach((inputElement) => {
        checkInputValidity(inputElement);
        toggleInputError(inputElement);
      });
    } else {
      submitForm(); // Отправка формы, если все поля валидны
    }
  });
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(inputElement);
      toggleButton();
    });
    inputElement.addEventListener('blur', () => {
      toggleInputError(inputElement);
    });
    inputElement.addEventListener('focus', () => {
      toggleErrorSpan(inputElement);
    });
  });
}

function checkInputValidity(inputElement) {
  if (inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity(inputElement.dataset.errorMessage);
  } else {
    inputElement.setCustomValidity(checkLengthMismatch(inputElement));
  }
  if (inputElement.validity.valid) {
    inputElement.setCustomValidity(''); // Очистка кастомной валидации, если поле валидно
  }
}

function checkLengthMismatch(inputElement) {
  if (inputElement.type !== 'text') {
    return '';
  }
  return '';
}

function toggleInputError(inputElement) {
  if (!inputElement.validity.valid) {
    toggleErrorSpan(inputElement, inputElement.validationMessage);
  } else {
    toggleErrorSpan(inputElement, '');
  }
}

function hasInvalidInput() {
  return (
    inputList.some((inputElement) => !inputElement.validity.valid)
  );
}

function toggleErrorSpan(inputElement, errorMessage){
  const errorElement = document.querySelector(`.${inputElement.id}__error`);
  if (errorMessage) {
    inputElement.classList.add('free__input--error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('free__error--active');
  } else {
    inputElement.classList.remove('free__input--error');
    errorElement.textContent = '';
    errorElement.classList.remove('free__error--active');
  }
}

function toggleButton() {
  if (hasInvalidInput()) {
    buttonElement.classList.add('free__button--inactive');
    buttonElement.setAttribute('aria-disabled', 'true');
  } else {
    buttonElement.classList.remove('free__button--inactive');
    buttonElement.setAttribute('aria-disabled', 'false');
    formErrorElement.textContent = '';
  }
}

function formError() {
  const errorMessage = 'Заполните все поля для отправки формы.';
  formErrorElement.textContent = errorMessage;
}

function submitForm() {
  form.submit(); // Отправка формы
}
