//1
let z = 5;
let x, y;
x = z * 5;
z = c = b / 2;

// 2
let getAge = prompt("Whats your age?");
let getCurrentYear = new Date().getFullYear();

alert(`Your birth date is ${getCurrentYear - getAge}`);

// 3
let temperatureMeasurement = prompt(
  "What measurement you converting?",
  "C or F"
);
let getTemperature = prompt("Type the temperature");

if (temperatureMeasurement.toUpperCase() === "C") {
  alert(`Temperature in Fahrenheit is ${getTemperature * 1.8 + 32}`);
} else {
  alert(
    `Temperature in Celcius is ${Math.round(((getTemperature - 32) * 5) / 9)}`
  );
}

// 4
let a = prompt("Type 1st number");
let b = prompt("Type 2nd number");
let result;

if (!isNaN(a) && !isNaN(b) && b !== 0) {
  result = Math.floor(a / b);
  alert(result);
} else alert("Wrong input");

// 5
const RATE = 31.1234;
let getExchange = prompt("How much to exchange?");
let cashExchanged = (RATE * getExchange).toFixed(2);

alert(cashExchanged);

//  6
const RED = parseInt(prompt("Red value from 0 to 255"));
const GREEN = parseInt(prompt("Green value from 0 to 255"));
const BLUE = parseInt(prompt("Blue value from 0 to 255"));
let getColorRGB;

function GetHex(number) {
  let Hex = number.toString(16).padStart(2, "0");
  return Hex;
}
if (
  RED >= 0 &&
  RED <= 255 &&
  GREEN >= 0 &&
  GREEN <= 255 &&
  BLUE >= 0 &&
  BLUE <= 255
) {
  getColorRGB = "#" + GetHex(RED) + GetHex(GREEN) + GetHex(BLUE);
  alert(getColorRGB);
} else alert("Wrong input range or data");

// 7
let floors = parseInt(prompt("Amount of floors in house"));
let apartmensOnFloor = parseInt(prompt("Amount of apartments on the floor"));
let apartmentNumber = parseInt(prompt("Apartment nimber"));

let getTotalHouses = Math.ceil(apartmentNumber / (floors * apartmensOnFloor)); //сколько подїездов
let apartmentPosition = apartmentNumber % (floors * apartmensOnFloor); // позиция квартиры, проверка на последнюю в доме
if (apartmentPosition === 0) {
  apartmentPosition = floors * apartmensOnFloor;
}
let recuiredFloor = Math.ceil(apartmentPosition / apartmensOnFloor); //позиция в доме / всего ячеек на этаже

alert(`Your apartment in ${getTotalHouses} house on ${recuiredFloor} floor!`);
