const library = [
  ["Inception", "The Matrix", "Interstellar"],
  ["1984", "Brave New World", "Fahrenheit 451"],
  ["The Godfather", "Pulp Fiction", "The Dark Knight"]
];

console.log(library[0][0]);
console.log(library[0][1]);
console.log(library[0][2]);
console.log(library[1][0]);
console.log(library[1][1]);
console.log(library[1][2]);
console.log(library[2][0]);
console.log(library[2][1]);
console.log(library[2][2]);

for (let row = 0; row < library.length; row++) {
  for (let item = 0; item < library[row].length; item++) {
    console.log(library[row][item]);
  }
}

for (let i = 0; i < library[1].length; i++) {
  console.log(library[1][i]);
}
