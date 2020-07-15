'usr strict';

const words = [
    {'en': 'stingy', 'ja': 'ケチ'},
    {'en': 'frugal', 'ja': '倹約家'},
    {'en': 'hassle', 'ja': '面倒くさい'},
    {'en': 'clock-watcher', 'ja': 'やる気が出ない'},
    {'en': 'cats and dogs', 'ja': '土砂降り'},
    {'en': 'When pigs fly!', 'ja': 'ありえない！'},
    {'en': 'cut it out!', 'ja': 'いい加減にして！'},
    {'en': 'over the top', 'ja': 'やりすぎ'},
    {'en': 'no chemistry', 'ja': '相性が悪い'},
    {'en': 'iffy', 'ja': 'ビミョー'},
    {'en': 'Many drops make a shower', 'ja': '塵も積もれば山となる'},
    {'en': "can't see the wood for the trees", 'ja': '木を見て森を見ず'},
    {'en': 'When in Rome, do as the Romans do', 'ja': '郷に入っては郷に従え'},
    {'en': 'Make haste slowly', 'ja': '急がば回れ'},
    {'en': 'Birds of a feather flock together', 'ja': '類は友を呼ぶ'},
    {'en': 'A picture is worth a thousand words', 'ja': '百聞は一見にしかず'},
    {'en': 'Actions speak louder than words', 'ja': '行動に勝るものはない'},
    {'en': 'not my cup of tea', 'ja': '好みではない'},
]

const card = document.getElementById('card');
const cardFront = document.getElementById('card-front');
const cardBack = document.getElementById('card-back');
const nextBtn = document.getElementById('next');

card.addEventListener('click', () => {
    // card.classList.add('open');
    if(card.className === 'card') {
        card.classList.add('open');
    } else {
        card.classList = 'card';
    }
});


nextBtn.addEventListener('click', () => {
    next();
});

function next() {
    const num = Math.floor(Math.random() * words.length);
    cardFront.innerHTML = words[num]['en'];
    cardBack.innerHTML = words[num]['ja'];
}







