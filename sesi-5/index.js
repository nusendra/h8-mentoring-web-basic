console.log("halo js");
console.log("halo hacktiv8");

// number
var a = 2;
var b = 6;

console.log(a + b);

// string
const nama1 = "arifin";
let nama2 = "jess";
let nama3 = "saladin"; //mutable

nama3 = "nusendra";

console.log(nama3);

// var, let, const

// array
let mobil = ["sapi", "harimau", "siput"];

console.log(mobil[1]);
console.log(mobil[2]);

// object
let orang1 = {
  name: "nusendra",
  age: "25",
  email: "blabla@blabla.com",
};

let orang2 = {
  name: "saladin",
  age: "25",
  email: "sal@blabla.com",
};

let mobilBaru = [orang1, orang2];

let mobilLama = [
  { name: "aku", umur: 5 },
  { name: "adalah", umur: 5 },
  { name: "anak", umur: 5 },
  { name: "gembala", umur: 5 },
];

console.table(mobilLama);

// ------------
let aa = "aku";
let bb = "adalah";

console.log(aa + " " + bb);
console.log(`${aa} ${bb}`);

// -----------------

let kelas = "1A";
let semester = 2;

let murid = {
  nama: "nusendra",
  umur: 20,
};

let nilaiMatematika = 65;
let nilaiBiologi = 70;
let nilaiFisika = 90;

console.log(
  "Halo nama saya nusendra dari kelas 1A. Di semester 2 nilai rata rata saya adalah 50"
);
