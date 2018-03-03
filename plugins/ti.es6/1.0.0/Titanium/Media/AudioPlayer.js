import { default as Window } from './../UI/Window';

export default class AudioPlayer {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.Media.AudioPlayer')) {
			this._object = object;
		} else {
			this._object = Titanium.Media.createAudioPlayer(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.Media.AudioPlayer.apiName;
	}
	static get AUDIO_TYPE_ALARM () {
		return Titanium.Media.AudioPlayer.AUDIO_TYPE_ALARM;
	}
	static get AUDIO_TYPE_SIGNALLING () {
		return Titanium.Media.AudioPlayer.AUDIO_TYPE_SIGNALLING;
	}
	static get AUDIO_TYPE_MEDIA () {
		return Titanium.Media.AudioPlayer.AUDIO_TYPE_MEDIA;
	}
	static get AUDIO_TYPE_NOTIFICATION () {
		return Titanium.Media.AudioPlayer.AUDIO_TYPE_NOTIFICATION;
	}
	static get AUDIO_TYPE_RING () {
		return Titanium.Media.AudioPlayer.AUDIO_TYPE_RING;
	}
	static get AUDIO_TYPE_VOICE () {
		return Titanium.Media.AudioPlayer.AUDIO_TYPE_VOICE;
	}
	static get STATE_BUFFERING () {
		return Titanium.Media.AudioPlayer.STATE_BUFFERING;
	}
	static get STATE_INITIALIZED () {
		return Titanium.Media.AudioPlayer.STATE_INITIALIZED;
	}
	static get STATE_PAUSED () {
		return Titanium.Media.AudioPlayer.STATE_PAUSED;
	}
	static get STATE_PLAYING () {
		return Titanium.Media.AudioPlayer.STATE_PLAYING;
	}
	static get STATE_STARTING () {
		return Titanium.Media.AudioPlayer.STATE_STARTING;
	}
	static get STATE_STOPPED () {
		return Titanium.Media.AudioPlayer.STATE_STOPPED;
	}
	static get STATE_STOPPING () {
		return Titanium.Media.AudioPlayer.STATE_STOPPING;
	}
	static get STATE_WAITING_FOR_DATA () {
		return Titanium.Media.AudioPlayer.STATE_WAITING_FOR_DATA;
	}
	static get STATE_WAITING_FOR_QUEUE () {
		return Titanium.Media.AudioPlayer.STATE_WAITING_FOR_QUEUE;
	}
	static get duration () {
		return Titanium.Media.AudioPlayer.duration;
	}
	static get idle () {
		return Titanium.Media.AudioPlayer.idle;
	}
	static get playing () {
		return Titanium.Media.AudioPlayer.playing;
	}
	static get progress () {
		return Titanium.Media.AudioPlayer.progress;
	}
	static get state () {
		return Titanium.Media.AudioPlayer.state;
	}
	static get waiting () {
		return Titanium.Media.AudioPlayer.waiting;
	}

	// properties
	get apiName () {
		return this._object.apiName;
	}
	get bubbleParent () {
		return this._object.bubbleParent;
	}
	set bubbleParent (value) {
		this._object.bubbleParent = value;
	}
	get lifecycleContainer () {
		return new Window(this._object.lifecycleContainer);
	}
	set lifecycleContainer (value) {
		this._object.lifecycleContainer = value;
	}
	get AUDIO_TYPE_ALARM () {
		return this._object.AUDIO_TYPE_ALARM;
	}
	get AUDIO_TYPE_SIGNALLING () {
		return this._object.AUDIO_TYPE_SIGNALLING;
	}
	get AUDIO_TYPE_MEDIA () {
		return this._object.AUDIO_TYPE_MEDIA;
	}
	get AUDIO_TYPE_NOTIFICATION () {
		return this._object.AUDIO_TYPE_NOTIFICATION;
	}
	get AUDIO_TYPE_RING () {
		return this._object.AUDIO_TYPE_RING;
	}
	get AUDIO_TYPE_VOICE () {
		return this._object.AUDIO_TYPE_VOICE;
	}
	get audioFocus () {
		return this._object.audioFocus;
	}
	set audioFocus (value) {
		this._object.audioFocus = value;
	}
	get audioType () {
		return this._object.audioType;
	}
	set audioType (value) {
		this._object.audioType = value;
	}
	get STATE_BUFFERING () {
		return this._object.STATE_BUFFERING;
	}
	get STATE_INITIALIZED () {
		return this._object.STATE_INITIALIZED;
	}
	get STATE_PAUSED () {
		return this._object.STATE_PAUSED;
	}
	get STATE_PLAYING () {
		return this._object.STATE_PLAYING;
	}
	get STATE_STARTING () {
		return this._object.STATE_STARTING;
	}
	get STATE_STOPPED () {
		return this._object.STATE_STOPPED;
	}
	get STATE_STOPPING () {
		return this._object.STATE_STOPPING;
	}
	get STATE_WAITING_FOR_DATA () {
		return this._object.STATE_WAITING_FOR_DATA;
	}
	get STATE_WAITING_FOR_QUEUE () {
		return this._object.STATE_WAITING_FOR_QUEUE;
	}
	get allowBackground () {
		return this._object.allowBackground;
	}
	set allowBackground (value) {
		this._object.allowBackground = value;
	}
	get bitRate () {
		return this._object.bitRate;
	}
	set bitRate (value) {
		this._object.bitRate = value;
	}
	get duration () {
		return this._object.duration;
	}
	get idle () {
		return this._object.idle;
	}
	get paused () {
		return this._object.paused;
	}
	set paused (value) {
		this._object.paused = value;
	}
	get playing () {
		return this._object.playing;
	}
	get progress () {
		return this._object.progress;
	}
	get state () {
		return this._object.state;
	}
	get url () {
		return this._object.url;
	}
	set url (value) {
		this._object.url = value;
	}
	get volume () {
		return this._object.volume;
	}
	set volume (value) {
		this._object.volume = value;
	}
	get waiting () {
		return this._object.waiting;
	}
	get bufferSize () {
		return this._object.bufferSize;
	}
	set bufferSize (value) {
		this._object.bufferSize = value;
	}
	get time () {
		return this._object.time;
	}
	set time (value) {
		this._object.time = value;
	}

	// methods
	addEventListener (name, callback) {
		if (!callback) {
			return new Promise(resolve => this._object.addEventListener(name, resolve));
		}
		return this._object.addEventListener(name, callback);
	}
	applyProperties (props) {
		props = normalize(props);
		return this._object.applyProperties(props);
	}
	fireEvent (name, event) {
		event = normalize(event);
		return this._object.fireEvent(name, event);
	}
	removeEventListener (name, callback) {
		if (!callback) {
			return new Promise(resolve => this._object.removeEventListener(name, resolve));
		}
		return this._object.removeEventListener(name, callback);
	}
	release () {
		return this._object.release();
	}
	getAudioSessionId () {
		return this._object.getAudioSessionId();
	}
	stateDescription (state) {
		return this._object.stateDescription(state);
	}
	isPaused () {
		return this._object.isPaused();
	}
	isPlaying () {
		return this._object.isPlaying();
	}
	pause () {
		return this._object.pause();
	}
	play () {
		return this._object.play();
	}
	start () {
		return this._object.start();
	}
	stop () {
		return this._object.stop();
	}
	getPaused () {
		return this._object.getPaused();
	}
	setPaused (paused) {
		return this._object.setPaused(paused);
	}
	getPlaying () {
		return this._object.getPlaying();
	}
	getApiName () {
		return this._object.getApiName();
	}
	getBubbleParent () {
		return this._object.getBubbleParent();
	}
	setBubbleParent (bubbleParent) {
		return this._object.setBubbleParent(bubbleParent);
	}
	getLifecycleContainer () {
		return new Window(this._object.getLifecycleContainer());
	}
	setLifecycleContainer (lifecycleContainer) {
		lifecycleContainer = normalize(lifecycleContainer);
		return this._object.setLifecycleContainer(lifecycleContainer);
	}
	getAudioFocus () {
		return this._object.getAudioFocus();
	}
	setAudioFocus (audioFocus) {
		return this._object.setAudioFocus(audioFocus);
	}
	getAudioType () {
		return this._object.getAudioType();
	}
	setAudioType (audioType) {
		return this._object.setAudioType(audioType);
	}
	getAllowBackground () {
		return this._object.getAllowBackground();
	}
	setAllowBackground (allowBackground) {
		return this._object.setAllowBackground(allowBackground);
	}
	getBitRate () {
		return this._object.getBitRate();
	}
	setBitRate (bitRate) {
		return this._object.setBitRate(bitRate);
	}
	getDuration () {
		return this._object.getDuration();
	}
	getIdle () {
		return this._object.getIdle();
	}
	getPaused () {
		return this._object.getPaused();
	}
	setPaused (paused) {
		return this._object.setPaused(paused);
	}
	getPlaying () {
		return this._object.getPlaying();
	}
	getProgress () {
		return this._object.getProgress();
	}
	getState () {
		return this._object.getState();
	}
	getUrl () {
		return this._object.getUrl();
	}
	setUrl (url) {
		return this._object.setUrl(url);
	}
	getVolume () {
		return this._object.getVolume();
	}
	setVolume (volume) {
		return this._object.setVolume(volume);
	}
	getWaiting () {
		return this._object.getWaiting();
	}
	getBufferSize () {
		return this._object.getBufferSize();
	}
	setBufferSize (bufferSize) {
		return this._object.setBufferSize(bufferSize);
	}
	getTime () {
		return this._object.getTime();
	}
	setTime (time) {
		return this._object.setTime(time);
	}

	// modules
};
Object.freeze(AudioPlayer);

function normalize (object) {
	if (typeof object === 'object') {
		if (object._object) {
			return object._object;
		}

		for (let key in object) {
			if (typeof object[key] === 'object') {
				if (object[key]._object) {
					object[key] = object[key]._object;
				}
			}
		}
	}

	return object;
}