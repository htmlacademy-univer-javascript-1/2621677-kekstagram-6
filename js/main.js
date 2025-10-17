// js/main.js

// Функция для генерации случайного числа в диапазоне
const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Генератор уникальных ID для комментариев
const generateCommentId = () => {
  let lastId = 0;
  return () => {
    lastId += 1;
    return lastId;
  };
};

const createCommentId = generateCommentId();

// Данные для генерации
const DESCRIPTIONS = [
  'Прекрасный закат на море',
  'Горный пейзаж в утреннем тумане',
  'Улочки старого города',
  'Архитектурный шедевр',
  'Летний день в парке',
  'Зимняя сказка в лесу',
  'Городские огни ночью',
  'Путешествие по неизведанным местам',
  'Моменты счастья',
  'Красота природы',
  'Уютный вечер дома',
  'Приключения ждут',
  'Тишина и спокойствие',
  'Яркие краски жизни',
  'Воспоминания о лете',
  'Прогулка под дождем',
  'Солнечный день в горах',
  'Морской бриз и волны',
  'История в каждом кадре',
  'Эмоции, застывшие во времени',
  'Мир в объективе',
  'Невероятные приключения',
  'Красота в простом',
  'Моменты, которые стоит помнить',
  'Искусство фотографии'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Артём',
  'Мария',
  'Александр',
  'Елена',
  'Дмитрий',
  'Ольга',
  'Сергей',
  'Анна',
  'Иван',
  'Наталья',
  'Михаил',
  'Виктория',
  'Андрей',
  'Юлия',
  'Павел',
  'Екатерина',
  'Роман',
  'Алина',
  'Никита',
  'Ксения'
];

// Функция для получения случайного элемента массива
const getRandomArrayElement = (elements) => {
  return elements[getRandomInteger(0, elements.length - 1)];
};

// Создание одного комментария
const createComment = () => {
  return {
    id: createCommentId(),
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
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
    description: DESCRIPTIONS[id - 1] || `Фотография ${id}`,
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

// Выводим в консоль для проверки
console.log('Сгенерировано фотографий:', photos.length);
console.log(photos);
