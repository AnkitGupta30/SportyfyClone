console.log("Welcome to Spotify");
// initiazing the variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let song = [
    {songName: 'Salam-e-Ishq', filepath: "song/1.mp3", coverpath: 'covers/1.jpg'},
    {songName: 'Salam-e-Ishq', filepath: "song/2.mp3", coverpath: 'covers/2.jpg'},
    {songName: 'Salam-e-Ishq', filepath: "song/3.mp3", coverpath: 'covers/3.jpg'},
    {songName: 'Salam-e-Ishq', filepath: "song/4.mp3", coverpath: 'covers/4.jpg'},
    {songName: 'Salam-e-Ishq', filepath: "song/5.mp3", coverpath: 'covers/5.jpg'},
    {songName: 'Salam-e-Ishq', filepath: "song/6.mp3", coverpath: 'covers/6.jpg'},
    {songName: 'Salam-e-Ishq', filepath: "song/7.mp3", coverpath: 'covers/7.jpg'},
    {songName: 'Salam-e-Ishq', filepath: "song/8.mp3", coverpath: 'covers/8.jpg'},
    {songName: 'Salam-e-Ishq', filepath: "song/9.mp3", coverpath: 'covers/9.jpg'},
    {songName: 'Salam-e-Ishq', filepath: "song/10.mp3", coverpath: 'covers/10.jpg'},
    {songName: 'Salam-e-Ishq', filepath: "song/11.mp3", coverpath: 'covers/11.jpg'},
]

// songItems.foreach((Element, i)=>{
//     console.log(element, i);
//     Element.getElementsByTagName("img")[0].src = songs[i].coverpath;
//     element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
// })

// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    // update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;

})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-circle-play')
        element.classList.remove('fa-circle-pause')
    })

}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    Element.addEventListener('click', (e)=>{
        console.log(e.target);
        makeAllPlays();
        e.target.classList.remove('fa-circle-play')
        e.target.classList.add('fa-circle-pause')
    })

})
