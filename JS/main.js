const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

const festiveWords = ["elves", "carols","mistletoe","nativity","tinsel","scrooge","santa","frankincense","stocking","chimney","rudolph","holly","snowman","reindeer","presents","candy","sleigh","lights","snowball","tree","gingerbread","snow","star","baubles","trifle",
"candles","chocolate","cookies","turkey","stuffing","chestnuts","crackers","nutcracker","sprouts","advent"
]

const easyWords = festiveWords.filter(word => word.length < 5)
const intermediateWords = festiveWords.filter(word => word.length < 7)
const hardWords = festiveWords.filter(word => word.length < 10)

for(i = 0; i < alphabet.length; i++){
    let newDiv = document.createElement("div");
    newDiv.innerHTML = alphabet[i];
    newDiv.className = "key";
    newDiv.id = alphabet[i];
    $(".keyboard").append(newDiv);  
};

randomEasyWords()

function randomEasyWords(){
    let arrayLength = easyWords.length;
    let easyRandomNumber = randomNumber(arrayLength);
    let randomWord = easyWords[easyRandomNumber];
    console.log(randomWord);

    let letters = randomWord.split('');
    console.log(letters)

    $.each(letters, function(index, letter){
        console.log(index + ' ' + letter)
        console.log(typeof(letter))
        $(".word").append("<li class='letter'>" + letter + "</li>");
    }); 
}

function randomNumber(arrayLength){
    const randomNumber = Math.floor((Math.random()*arrayLength)); 
    return randomNumber;
}






