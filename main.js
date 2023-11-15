
const prompt = require('prompt-sync')();

let score = 0;
let jawaban_benar = 0;
let jawaban_salah = 0;
let point_per_soal = 1;

let soal = [
    {
        "q": "Yang merupakan member JKT 48?",
        "o": [
            'Jokowi',
            'Freya',
            'Nadin Amizah',
            'Igun Mama Takut',
        ],
        "a": 1
    },
    {
        "q": "Nama kakak Upin dan Ipin adalah...",
        "o": [
            'Kak Rose',
            'Kak Jeane',
            'Monkey D. Luffy',
            'Igun Mama Takut',
        ],
        "a": 0
    },
    // Tambahkan 3 soal lainnya 
    {
        "q": "Nama rektor primakara adalah...",
        "o": [
            'pak made',
            'pak artana',
            'made artana',
            'I Made Artana, S.Kom., M.M',
        ],
        "a": 3

    },
    {
        "q": "Nama presiden ke 7 adalah",
        "o": [
            'pak soeharto',
            'pak jokowi',
            'made artana',
            'Ir sorkarno',
        ],
        "a": 1

    },

    {
        "q": "kegiatan melepas setres pada semester 5",
        "o": [
            'mancing',
            'ngoding',
            'tidur',
            'makan',
        ],
        "a": 0

    },
];

let nama = prompt('Input nama:');

// Loop melalui setiap soal
for (let i = 0; i < soal.length; i++) {
   // Tampilkan pertanyaan
    console.log(`\nSoal ${i + 1}: ${soal[i].q}`);

        // Tampilkan opsi jawaban
    for (let jawaban = 0; jawaban < soal[i].o.length; jawaban++) {
        console.log(`${jawaban+1}. ${soal[i].o[jawaban]}`);
    }

    let jawaban = prompt('Masukkan nomor jawaban Anda: ');

    // Memeriksa apakah jawaban yang dimasukkan oleh pengguna sesuai dengan jawaban yang benar
    if (jawaban == soal[i].a + 1) {
        console.log('Jawaban Benar!');
            // Menginkrementasi jumlah jawaban benar
        score += point_per_soal;
        jawaban_benar++;
    } else {
        console.log('Jawaban Salah.');
        jawaban_salah++;
    }
}

console.log("\nKuis selesai");
console.log("\nStatistic Kuis");
console.log('Nama\t\t:', nama);
console.log('Score\t\t:', score);
console.log('Jawaban benar\t:', jawaban_benar);
console.log('Jawaban salah\t:', jawaban_salah);
