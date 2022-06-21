function city(cityName, population, country, mayor, division) {
    this.cityName = cityName;
    this.population = population;
    this.country = country;
    this.mayor = mayor;
    this.division = division;

}
//this example below we start by defining a dynamic function with parameters (line 10)//
//these parameters will carry the values of class city//
//from line 12 to 16 we are turning parameters into properties of class city//
//the new keyword "this" is identifying properties of an object(city)//

let Nairobi = new city("Nairobi", "10million", "kenya", "kylie", "makindye")

function city1(a, b, c, d, e) { 
    this.cityName = a; 
    this.country = b;
    this.division = c;
    this.mayor = d;
    this.population = e;
   
}
//creating a city
let kampala = new city1("kampala", "uganda", "makindye", "kylie", "20million")
let kigali = new city1("kigali", "rwanda", "rubavu", "nina", "5million")

function Food(name, type, place, flavour, taste) {
    this.name = name;
    this.type = type;
    this.place = place;
    this.flavour = flavour;
    this.taste = taste;
}

let food1 = new Food("sweet potatoes", "carbohydrates", "Mbale", "sweet", "sweet")
let food2 = new Food("Matooke",)
console.log(food1.flavour)

//classes are defined in singular//
const Lake = function (lName, fishType, waterType, location, size) {
    this.lName = lName;
    this.fishType = fishType;
    this.waterType = waterType;
    this.location = location;
    this.size = size;
};
//Irene and Steven, what happpens when I declare a function with const and without//
//the keyword "new" is called a constructor//
//it is used to create objects out of a class//
//a constructor is used to initate an instantiated object//
let lake1 = new Lake("L.Victoria", "Tilapia", "Fresh", "Central Uganda", "20,000 sq.km");
let lake2 = new Lake("L.Kyoga", "Silverfish", "Fresh", "N.East Uganda", "5000sq.km");
console.log(lake1)
console.log(lake2)
console.log(lake2.lName)
//To console log all values in the objects of a class//
console.log(Object.values(lake1))

function bird(bName, bColor, bLocation, bType) {
    this.bName = bName;
    this.bColor = bColor;
    this.bLocation = bLocation;
    this.bType = bType;

};
let bird1 = new bird(
    "Crested Crane",
    "Grey",
    "Uganda",
    "wild"
)
console.log(bird1)
//Tuesday//
function school(schName, motto, uniform, headTeacher, location, contact) {
    this.schName = schName;
    this.motto = motto;
    this.uniform = uniform;
    this.headTeacher = headTeacher;
    this.location = location;
    this.contact = contact;
    //this is a method// we access it with the word return//
    this.uneb = function () {
        return "The school is fully registerd by uneb"
    }
}
let school1 = new school(
    "Buddo S.S",
    "The struggle continues",
    "Blue and White",
    "Namugga Kylie",
    "Buddo,Kisozi",
    "0779150875"
)

console.log(school1)

//Irene and Steven//
