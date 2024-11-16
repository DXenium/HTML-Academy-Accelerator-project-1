document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.price__tab-button');
  const tabPanes = document.querySelectorAll('.price__content-list');

  tabButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
      // Убираем активный класс у всех кнопок и панелей
      tabButtons.forEach((btn) => btn.classList.remove('price__tab-button--active'));
      tabPanes.forEach((pane) => pane.classList.remove('price__content-list--active'));

      // Добавляем активный класс к выбранной кнопке и панели
      this.classList.add('price__tab-button--active');
      tabPanes[index].classList.add('price__content-list--active');
    });
  });
});
