document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.faq__tab-button');
  const accordionContainers = document.querySelectorAll('.accordeon__container');
  const accordions = document.querySelectorAll('.accordeon__item');

  // Устанавливаем первый таб и первый аккордеон активными по умолчанию
  tabButtons[0].classList.add('faq__tab-button--active');
  accordionContainers[0].classList.add('accordeon__container--active');

  // Делаем первый аккордеон в каждом табе открытым по умолчанию
  accordionContainers.forEach((container) => {
    const firstAccordion = container.querySelector('.accordeon__item');
    if (firstAccordion) {
      firstAccordion.classList.add('accordeon__item--active');
      const button = firstAccordion.querySelector('.accordeon__button');
      if (button) {
        button.classList.add('accordeon__button--open');
      }
    }
  });

  // Обработчик для переключения табов
  tabButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
      // Убираем активный класс у всех табов
      tabButtons.forEach((btn) => btn.classList.remove('faq__tab-button--active'));
      // Добавляем активный класс на кликнутый таб
      this.classList.add('faq__tab-button--active');

      // Скрываем все аккордеоны
      accordionContainers.forEach((container) => {
        container.classList.remove('accordeon__container--active');
      });

      // Показываем аккордеоны для выбранного таба
      accordionContainers[index].classList.add('accordeon__container--active');
    });
  });

  // Обработчик для раскрытия/скрытия аккордеонов
  accordions.forEach((accordion) => {
    const button = accordion.querySelector('.accordeon__button');

    accordion.addEventListener('click', () => {
      accordion.classList.toggle('accordeon__item--active');
      button.classList.toggle('accordeon__button--open');
    });
  });

  // Добавляем возможность взаимодействия с клавиатурой
  tabButtons.forEach((button) => {
    button.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        button.click();
      }
    });
  });

  accordions.forEach((accordion) => {
    accordion.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        accordion.click();
      }
    });
  });
});
