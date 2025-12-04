
const getPhotos = () => [
  {
    id: 1,
    url: 'photos/1.jpg',
    description: 'Кекс с ягодами на столе',
    likes: 15,
    comments: [
      {
        id: 1,
        avatar: 'img/avatar-1.svg',
        message: 'Всё отлично!',
        name: 'Артём'
      },
      {
        id: 2,
        avatar: 'img/avatar-2.svg',
        message: 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
        name: 'Мария'
      }
    ]
  },
  {
    id: 2,
    url: 'photos/2.jpg',
    description: 'Кот в шляпе смотрит в камеру',
    likes: 22,
    comments: [
      {
        id: 3,
        avatar: 'img/avatar-3.svg',
        message: 'Моя бабушка случайно чихнула с фотоаппаратом в руках.',
        name: 'Александр'
      }
    ]
  },
  {
    id: 3,
    url: 'photos/3.jpg',
    description: 'Кекс с кремом и фруктами',
    likes: 18,
    comments: []
  },
  {
    id: 4,
    url: 'photos/4.jpg',
    description: 'Кот спит на диване',
    likes: 10,
    comments: [
      {
        id: 4,
        avatar: 'img/avatar-4.svg',
        message: 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота.',
        name: 'Елена'
      }
    ]
  },
  {
    id: 5,
    url: 'photos/5.jpg',
    description: 'Кекс с шоколадной глазурью',
    likes: 25,
    comments: [
      {
        id: 5,
        avatar: 'img/avatar-5.svg',
        message: 'Лица у людей на фотке перекошены.',
        name: 'Дмитрий'
      },
      {
        id: 6,
        avatar: 'img/avatar-6.svg',
        message: 'В целом всё неплохо. Но не всё.',
        name: 'Ольга'
      }
    ]
  }
];

export { MESSAGES, NAMES, getPhotos };
