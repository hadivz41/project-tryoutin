function start() {
const nama = document.getElementById("nama").value;

if (nama === "") {
alert("Isi nama dulu 😑");
return;
}

localStorage.setItem("nama", nama);
window.location.href = "select.html";
}

function pilih(mapel) {
localStorage.setItem("mapel", mapel);
window.location.href = "quiz.html";
}

const nama = localStorage.getItem("nama");

if (nama) {
const nav = document.getElementById("navbar");
const user = document.createElement("span");
user.textContent = "Halo, " + nama;
nav.appendChild(user);
}

function selesaiQuiz() {
let benar = 8;
let salah = 2;

localStorage.setItem("benar", benar);
localStorage.setItem("salah", salah);

window.location.href = "result.html";
}

let indexSoal = 0;
let benar = 0;

const mapel = localStorage.getItem("mapel");
const soal = soalData[mapel];

function tampilSoal() {
const s = soal[indexSoal];
const container = document.getElementById("soal");

let html = `<h3>${s.soal}</h3>`;

s.pilihan.forEach(p => {
    html += `<button onclick="jawab('${p}')">${p}</button><br>`;
});

container.innerHTML = html;
}

function jawab(pilihan) {
if (pilihan === soal[indexSoal].jawaban) {
    benar++;
}

indexSoal++;

if (indexSoal < soal.length) {
    tampilSoal();
} else {
    selesaiQuiz();
}
}

function selesaiQuiz() {
let salah = soal.length - benar;

localStorage.setItem("benar", benar);
localStorage.setItem("salah", salah);

window.location.href = "result.html";
}

tampilSoal();