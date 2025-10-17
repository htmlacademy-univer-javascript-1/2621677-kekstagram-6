const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateCommentId = () => {
  let lastId = 100;
  return () => {
    lastId += 1;
    return lastId;
  };
};

const createCommentId = generateCommentId();

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Артём', 'Мария', 'Александр', 'Елена', 'Дмитрий',
  'Ольга', 'Сергей', 'Анна', 'Иван', 'Наталья',
  'Михаил', 'Виктория', 'Андрей', 'Юлия', 'Павел'
];

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createComment = () => ({
  id: createCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES)
});

const createComments = () => {
  const commentsCount = getRandomInteger(0, 30);
  const comments = [];
  for (let i = 0; i < commentsCount; i++) {
    comments.push(createComment());
  }
  return comments;
};

const createPhoto = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: `Описание фотографии ${id}`,
  likes: getRandomInteger(15, 200),
  comments: createComments()
});

const generatePhotos = () => {
  const photosArray = [];
  for (let i = 1; i <= 25; i++) {
    photosArray.push(createPhoto(i));
  }
  return photosArray;
};

const photos = generatePhotos();

// Экспортируем переменную, чтобы она использовалась
export { photos };
