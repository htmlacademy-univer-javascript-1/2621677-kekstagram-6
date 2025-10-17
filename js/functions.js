// Функция для генерации случайного числа в диапазоне
const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Генератор уникальных ID для комментариев
const generateCommentId = () => {
  let lastId = 100;
  return () => {
    lastId += 1;
    return lastId;
  };
};

const createCommentId = generateCommentId();

// Массив сообщений для комментариев
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
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

// Создание одного комментария
const createComment = () => ({
  id: createCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES)
});

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
const createPhoto = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: `Описание фотографии ${id}`,
  likes: getRandomInteger(15, 200),
  comments: createComments()
});

// Генерация массива из 25 фотографий
const generatePhotos = () => {
  const photosArray = [];
  for (let i = 1; i <= 25; i++) {
    photosArray.push(createPhoto(i));
  }
  return photosArray;
};

// Создаем массив фотографий
const photos = generatePhotos();
