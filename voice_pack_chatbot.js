const xyz=window.speechSynthesis;
const textToSpeech=(string)=> {
	let voice=new SpeechSynthesisUtterance(string);
	voice.text=string;
	voice.lang="en-US";
	voice.volume=1;
	voice.rate=1;
	voice.pitch=2;
	xyz.speak(voice);

}