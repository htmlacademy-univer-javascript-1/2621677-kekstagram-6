// Функция для генерации случайного числа в диапазоне
const getRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Генератор уникальных ID для комментариев
const generateCommentId = () => {
  let lastId = 100;
  return () => {
    lastId += 1;
    return lastId;
  };
};

const createCommentId = generateCommentId();

// Массив сообщений для комментариев (точно как в задании)
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

// Массив имен для комментаторов
const NAMES = [
  'Артём', 'Мария', 'Александр', 'Елена', 'Дмитрий',
  'Ольга', 'Сергей', 'Анна', 'Иван', 'Наталья',
  'Михаил', 'Виктория', 'Андрей', 'Юлия', 'Павел'
];

// Функция для получения случайного элемента массива
const getRandomArrayElement = (elements) => {
  return elements[getRandomInteger(0, elements.length - 1)];
};

// Создание одного комментария
const createComment = () => {
  return {
    id: createCommentId(),
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`, // Исправлено на img/
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES)
  };
};

// Создание массива комментариев
const createComments = () => {
  const commentsCount = getRandomInteger(0, 30);
  const comments = [];
  for (let i = 0; i < commentsCount; i++) {
    comments.push(createComment());
  }
  return comments;
};

// Создание объекта фотографии
const createPhoto = (id) => {
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: `Описание фотографии ${id}`,
    likes: getRandomInteger(15, 200),
    comments: createComments()
  };
};

// Генерация массива из 25 фотографий
const generatePhotos = () => {
  const photos = [];
  for (let i = 1; i <= 25; i++) {
    photos.push(createPhoto(i));
  }
  return photos;
};

// Создаем массив фотографий
const photos = generatePhotos();

// Вывод в консоль для проверки задания
console.log('Массив из 25 сгенерированных объектов:');
console.log(photos);

// Проверка что все условия выполнены
console.log('\n=== ПРОВЕРКА ВЫПОЛНЕНИЯ ЗАДАНИЯ ===');
console.log(`Количество объектов: ${photos.length}`);

// Проверка уникальности ID фотографий
const photoIds = photos.map(photo => photo.id);
const uniquePhotoIds = [...new Set(photoIds)];
console.log(`Уникальные ID фотографий: ${uniquePhotoIds.length === 25 ? '✓ OK' : '✗ ERROR'}`);

// Проверка URL фотографий
const urls = photos.map(photo => photo.url);
console.log(`URL фотографий: ${urls[0]}, ${urls[1]}, ... ${urls[24]}`);

// Проверка лайков
const likes = photos.map(photo => photo.likes);
console.log(`Лайки в диапазоне 15-200: ${likes.every(like => like >= 15 && like <= 200) ? '✓ OK' : '✗ ERROR'}`);

// Проверка комментариев
const commentsCounts = photos.map(photo => photo.comments.length);
console.log(`Комментарии в диапазоне 0-30: ${commentsCounts.every(count => count >= 0 && count <= 30) ? '✓ OK' : '✗ ERROR'}`);

// Проверка аватарок
const firstCommentAvatar = photos[0].comments[0]?.avatar;
console.log(`Путь аватарки: ${firstCommentAvatar || 'нет комментариев'}`);

// Пример первого объекта для проверки структуры
console.log('\n=== ПРИМЕР ПЕРВОГО ОБЪЕКТА ===');
console.log(JSON.stringify(photos[0], null, 2));
