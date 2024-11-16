document.querySelector('.video__play-button').addEventListener('click', () => {
  // Создаем iframe
  const iframe = document.createElement('iframe');

  // Определяем размеры iframe в зависимости от ширины экрана
  let width, height;
  if (window.innerWidth >= 1366) {
    width = '360';
    height = '230';
  } else if (window.innerWidth < 768) {
    width = '320';
    height = '170';
  } else {
    width = '270';
    height = '170';
  }

  // Устанавливаем атрибуты iframe
  iframe.src = 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1';
  iframe.width = width;
  iframe.height = height;
  iframe.frameBorder = '0';
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
  iframe.allowFullscreen = false;

  // Скрываем кнопку и обложку
  document.querySelector('.video__image').style.display = 'none';
  document.querySelector('.video__button-wrapper').style.display = 'none';

  // Добавляем iframe в контейнер
  document.querySelector('.video').appendChild(iframe);
});
