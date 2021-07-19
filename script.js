const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');
const currTime = document.querySelector('#currTime');
const durTime = document.querySelector('#durTime');

// Song titles
const songs = ['hey', 'summer', 'ukulele','sunnraha','tuhitu','maindhoondhane','JudaHoke','Kabira','Kyun Main Jaagoon','Tum Hi Ho Aashiqui 2','Zara Sa','Yun Hi Chala Chal','Woh Kisna Hain ','Uncha Lamba Kad ','Tumhare Siva Kuch Na Chahat Karenge','Tum Mile ','TUjanne na ','Toh Phir Aao ','Sunn Raha Hai Na Tu ','Soniyo Full Video ','Sanam Teri Kasam','Sach Keh Raha Hai ','Saans Song ','Ramta Jogi Lyrical','O Jaana Na Jaana ','Neele Neele Ambar Par - Male Version Lyric Video -(MP3_160K)','Muskurane ','Murder 2_ Aye Khuda ','Mere Samne Wali Khidki Mein','Mere Mehboob Qayamat Hogi ','Mera Intkam Dekhegi _ Shaadi Mein Zaroor Ana','LYRICAL_ Tu Hi Tu ','Lagan Lagi - Salman Khan - ','Kun Faya Kun Full Video Song Rockstar ','Kal Ho Naa Ho Full Video ','Jo Tere Sang ','Jhanjhariya (Male) ','Jhalak Dikhla Ja ','Jay-Jaykara ','Janam Janam – Dilwale','Jai Ho Lyrics Full Video HD ','Iktara ','Haule Haule - Full Song _ Rab Ne Bana Di Jodi','main dhoodhane','Hamdard Full Video Song _ Ek Villain ','Haan Tu Hain Full Video - Jannat_Emraan Hashmi','Sau Dard _ Jaan-E-Mann ','Hamdard Full Video Song _ Ek Villain ','Haan Tu Hain Full Video - Jannat_Emraan Hashmi','Full Video_ Masakali','Full Video_ Kya Mujhe Pyaar Hai _ Woh Lamhe','Full Video _Tum Mere Ho Song _ Hate Story IV','Ek Number Official Video Song _ Sanam Teri Kasam _(MP3_160K)','Dulhe Ka Sehra - HD VIDEO SONG _ Akshay Kumar _ Sh(MP3_160K)','Dil Sambhal Ja Zara Phir Mohabbat (Murder 2) Emraa(MP3_160K)','Dard E Disco Full Video HD Song _ Om Shanti Om _ S(MP3_160K)','Chand Sifarish _ Full Song _ Fanaa _ Aamir Khan_ K(MP3_160K)','Chala Jata Hoon - Mere Jeevan Saathi_ Kishore Kuma(MP3_160K)','Chak De India Title Song _ Shah Rukh Khan _ Sukhvi(MP3_160K)','Chaiyya Chaiyya _ 8D Audio(MP3_160K)','Bhula Denge Tumko Sanam [Full Song] Humko Deewana(MP3_160K)','Banjaara Full Video Song _ Ek Villain _ Shraddha K(MP3_160K)','Banjaara - Full Song _ Ek Tha Tiger _ Salman Khan(MP3_160K)','Ajay-Atul - Abhi Mujh Mein Kahin Best Lyric_Agneep(MP3_160K)','Agar Tum Saath Ho FULL AUDIO Song _ Tamasha _ Ranb(MP3_160K)','Aashiq Banaya Aapne - II (Remix) (Full Song) Film(MP3_160K)','Aap Ki Kashish Full Song with Lyrics _ Aashiq Bana(MP3_160K)','Aa Bhi Ja Sanam - Lyrical Video _ Prince _ Vivek O(MP3_160K)'];

// Keep track of song
let songIndex = 2;

// Initially load song details into DOM
loadSong(songs[songIndex]);

// Update song details
function loadSong(song) {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `images/${song}.jpg`;
}

// Play song
function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');

  audio.play();
}

// Pause song
function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');

  audio.pause();
}

// Previous song
function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// Next song
function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// Update progress bar
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

// Set progress bar
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

//get duration & currentTime for Time of song
function DurTime (e) {
	const {duration,currentTime} = e.srcElement;
	var sec;
	var sec_d;

	// define minutes currentTime
	let min = (currentTime==null)? 0:
	 Math.floor(currentTime/60);
	 min = min <10 ? '0'+min:min;

	// define seconds currentTime
	function get_sec (x) {
		if(Math.floor(x) >= 60){
			
			for (var i = 1; i<=60; i++){
				if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) {
					sec = Math.floor(x) - (60*i);
					sec = sec <10 ? '0'+sec:sec;
				}
			}
		}else{
		 	sec = Math.floor(x);
		 	sec = sec <10 ? '0'+sec:sec;
		 }
	} 

	get_sec (currentTime,sec);

	// change currentTime DOM
	currTime.innerHTML = min +':'+ sec;

	// define minutes duration
	let min_d = (isNaN(duration) === true)? '0':
		Math.floor(duration/60);
	 min_d = min_d <10 ? '0'+min_d:min_d;


	 function get_sec_d (x) {
		if(Math.floor(x) >= 60){
			
			for (var i = 1; i<=60; i++){
				if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) {
					sec_d = Math.floor(x) - (60*i);
					sec_d = sec_d <10 ? '0'+sec_d:sec_d;
				}
			}
		}else{
		 	sec_d = (isNaN(duration) === true)? '0':
		 	Math.floor(x);
		 	sec_d = sec_d <10 ? '0'+sec_d:sec_d;
		 }
	} 

	// define seconds duration
	
	get_sec_d (duration);

	// change duration DOM
	durTime.innerHTML = min_d +':'+ sec_d;
		
};

// Event listeners
playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// Change song
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Time/song update
audio.addEventListener('timeupdate', updateProgress);

// Click on progress bar
progressContainer.addEventListener('click', setProgress);

// Song ends
audio.addEventListener('ended', nextSong);

// Time of song
audio.addEventListener('timeupdate',DurTime);