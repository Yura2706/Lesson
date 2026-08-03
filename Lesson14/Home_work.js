// Create variables - Создать переменные
const astronautName = "Ivan";
const planet = "Mars";
let astronautAge = 45;
let isCommander = true;
let missionDuration = 100;
//Use different types of data - Использовать разные типы данных
console.log("Astronaut name: ", astronautName);
console.log(typeof astronautName);
console.log("Planet: ", planet);
console.log(typeof planet);
console.log("Astronaut age: ", astronautAge);
console.log(typeof astronautAge);
console.log("Is commander: ", isCommander);
console.log(typeof isCommander);
console.log("Mission duration: ", missionDuration);
console.log(typeof missionDuration);

// Calculate: - the astronaut's age in 10 years - Посчитать: - возраст астронавта через 10 лет
let age10years = astronautAge + 10;
console.log("Astronaut age in 10 years: ", age10years);

//mission duration after a 30-day increase - длительность миссии после увеличения на 30 дней
let missionDurationInDays = missionDuration + 30;
console.log("Mission duration after 30 days: ", missionDurationInDays);

//astronaut's name - planet - commander status - astronaut's name - planet - commander status
console.log(
  "Astronaut name: ",
  astronautName + ", Planet: " + planet + ",isCommander: " + isCommander,
);

//
isCommander = false;
console.log("Is commander: ", isCommander);

// mission duration - commander status, длительность миссии - статус командира
console.log(missionDurationInDays, isCommander);
