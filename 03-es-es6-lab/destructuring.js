let persons2 = [
  {
    name: "Michael Harrison",
    parents: {
      mother: "Melinda Harrison",
      father: "Simon Harrison",
    },
    age: 35,
  },
  {
    name: "Robert Moore",
    parents: {
      mother: "Sheila Moore",
      father: "John Moore",
    },
    age: 25,
  },
];
//Destructuring
for (let {
  name: n,
  parents: { mother: f },
  age,
} of persons2) {
  console.log(`Name: ${n}, Mother: ${f}, age: ${age}`);
}
