const person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(person.firstName);
console.log(person.age);
console.log(person.fullName());
console.log(person.fullName);

person.age = 26;
console.log(person.age);
console.log(person.hobby);

const peter = {
  firstName: "Peter",
  lastName: "Parker",
  age: 19,
};
console.log(peter);
console.log(person);

//console.log(peter.fullName()); Error

peter.fullName = function () {
  return `${this.firstName.toUpperCase()} ${this.lastName.toUpperCase()}`;
};
console.log(peter.fullName());
peter["hobby"] = "gaming";
console.log(peter);

let key = "hobby";
console.log(peter.key);
console.log(peter[key]);
console.log(peter["key"]);

for (k in peter) {
  console.log(`${k}->${peter}`);
  if (typeof peter[k] === "function") {
    console.log(peter[k]());
  }
}

// peter.'my dog' = "Bobik";
peter["my dog"] = " Bobik";
console.log(peter);
console.log(peter["my dog"]);

const mary = new Person(2000, "mary", "Poppins", 30);
console.log(mary);
console.log(mary.fullName());
const persons = [mary,person, new Person(3000,"jack","Brown",44),
    {
        id:4000,
        name:'bobik',
        golos: function(){
            console.log(("Gav Gav"));
            
        }
    }
]
console.log(persons);


function Person(id, firstName, lastName, age) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.fullName = function () {
    return this.firstName + " " + this.lastName;
  };
}
