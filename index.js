var music__log = [
    {
        "id": 1,
        "name":'Ed Sheeran',
        "music_name":"Shape of you",
        "music": './assets/Ed Sheeran - Shape of You (Lyrics) Shawn Mendes, Dua Lipa, DaBaby,....mp3'
    },
    {
        "id": 2,
        "name":'Harry Styles',
        "music_name":"As it Was",
        "music": './assets/Harry Styles - As It Was (Lyrics) Magic!, Justin Bieber,....mp3'
    },
    {
        "id": 3,
        "name":'Moira Dela Torre',
        "music_name":"KUMPAS",
        "music": './assets/Moira Dela Torre - KUMPAS (Lyrics).mp3'
    }
]
var musicTitles = document.querySelector('.title')
var musicAuthor = document.querySelector('.author')
var btnPrev = document.querySelector('.music__prev')
var btnPlay = document.querySelector('.music__play')
var btnNext = document.querySelector('.music__next')
var btnPause = document.querySelector('.music__pause')
var music__toggle = document.querySelector('.music__toggle')
//make an audio
var audio = new Audio()
console.log(audio)
let currentMusic = 0
let indexPosition

//PREVIOUS MUSIC BUTTON
btnPrev.addEventListener('click', () => {
    if(currentMusic == 0) {
        currentMusic = music__log.length - 1
    } else {
        currentMusic--;
    }
    musicTitles.innerHTML = music__log[currentMusic].music_name
    musicAuthor.innerHTML = music__log[currentMusic].name
    audio.src = music__log[currentMusic].music
    audio.play()
    btnPause.style.display = "block"
    btnPlay.style.display = "none"
})
// NEXT MUSIC BUTTON
btnNext.addEventListener('click', () => {
    if(currentMusic == music__log.length - 1) {
        currentMusic = 0
    } else {
        currentMusic++
    }
    musicTitles.innerHTML = music__log[currentMusic].music_name
    musicAuthor.innerHTML = music__log[currentMusic].name
    audio.src = music__log[currentMusic].music
    audio.play()
    btnPause.style.display = "block"
    btnPlay.style.display = "none"
})
musicTitles.innerHTML = music__log[currentMusic].music_name
musicAuthor.innerHTML = music__log[currentMusic].name

btnPlay.addEventListener('click', () => {
    btnPause.style.display = "block"
    btnPlay.style.display = "none"
    audio.src = music__log[currentMusic].music
    audio.play()
    
})
btnPause.addEventListener('click', () => {
    btnPause.style.display = "none"
    btnPlay.style.display = "block"
    audio.src = music__log[currentMusic].music
    audio.pause()
})