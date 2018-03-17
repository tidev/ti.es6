import { default as Item } from './Item';

export default class MusicPlayer {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.Media.MusicPlayer')) {
			this._object = object;
		} else {
			this._object = undefined;
		}
	}

	// constants
	static get apiName () {
		return Titanium.Media.MusicPlayer.apiName;
	}
	static get nowPlaying () {
		return new Item(Titanium.Media.MusicPlayer.nowPlaying);
	}
	static get playbackState () {
		return Titanium.Media.MusicPlayer.playbackState;
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
	get currentPlaybackTime () {
		return this._object.currentPlaybackTime;
	}
	set currentPlaybackTime (value) {
		this._object.currentPlaybackTime = value;
	}
	get nowPlaying () {
		return new Item(this._object.nowPlaying);
	}
	get playbackState () {
		return this._object.playbackState;
	}
	get repeatMode () {
		return this._object.repeatMode;
	}
	set repeatMode (value) {
		this._object.repeatMode = value;
	}
	get shuffleMode () {
		return this._object.shuffleMode;
	}
	set shuffleMode (value) {
		this._object.shuffleMode = value;
	}
	get volume () {
		return this._object.volume;
	}
	set volume (value) {
		this._object.volume = value;
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
	pause () {
		return this._object.pause();
	}
	play () {
		return this._object.play();
	}
	seekBackward () {
		return this._object.seekBackward();
	}
	seekForward () {
		return this._object.seekForward();
	}
	setQueue (queue) {
		queue = normalize(queue);
		return this._object.setQueue(queue);
	}
	skipToBeginning () {
		return this._object.skipToBeginning();
	}
	skipToNext () {
		return this._object.skipToNext();
	}
	skipToPrevious () {
		return this._object.skipToPrevious();
	}
	stop () {
		return this._object.stop();
	}
	stopSeeking () {
		return this._object.stopSeeking();
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
	getCurrentPlaybackTime () {
		return this._object.getCurrentPlaybackTime();
	}
	setCurrentPlaybackTime (currentPlaybackTime) {
		return this._object.setCurrentPlaybackTime(currentPlaybackTime);
	}
	getNowPlaying () {
		return new Item(this._object.getNowPlaying());
	}
	getPlaybackState () {
		return this._object.getPlaybackState();
	}
	getRepeatMode () {
		return this._object.getRepeatMode();
	}
	setRepeatMode (repeatMode) {
		return this._object.setRepeatMode(repeatMode);
	}
	getShuffleMode () {
		return this._object.getShuffleMode();
	}
	setShuffleMode (shuffleMode) {
		return this._object.setShuffleMode(shuffleMode);
	}
	getVolume () {
		return this._object.getVolume();
	}
	setVolume (volume) {
		return this._object.setVolume(volume);
	}

	// modules
};
Object.freeze(MusicPlayer);

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