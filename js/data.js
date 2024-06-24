const user = {
  name: "Андрій",
  surname: "Саф'янов",
  userPhoto: "my-photo.jpg",
  qrQode: "qr-code.svg",
  dreams: [
    { src: "car.jpg", alt: "Авто моєї мрії" },
    { src: "home.jpg", alt: "Yamaha R1  998 куб. см" },
    { src: "voyage.jpg", alt: "зустріти Усика в живу" },
  ],
};

// arr це середня місячна платня по рокам
const arr = [
  500,
  700,
  800,
  1000,
  1200,
  1500,
  1800,
  2100,
  2400,
  2700,
  3000,
  3300,
];

const necessaryExpenses = 800;

const todo = [
  { month: "Червень", skill: "JavaScript" },
  { month: "Липень", skill: "Java" },
  { month: "Серпень", skill: "Python" },
  { month: "Вересень", skill: "Html" },
  { month: "Жовтень", skill: "Css" },
  { month: "Листопад", skill: "Робити сайти на замовлення" },
  { month: "Грудень", skill: "Розвинути креативність" },
  { month: "Січень", skill: "Зібрати команду" },
  { month: "Лютий", skill: "Нетворкінг" },
  { month: "Березень", skill: "Потратити зарплатню" },
  { month: "Квітень", skill: "Управління фінансами" },
  { month: "Травень", skill: "Стати успішним" },
];

export { user, arr, necessaryExpenses, todo };
