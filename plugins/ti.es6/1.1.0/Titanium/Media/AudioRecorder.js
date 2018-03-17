import { default as Window } from './../UI/Window';
import { default as File } from './../Filesystem/File';

export default class AudioRecorder {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.Media.AudioRecorder')) {
			this._object = object;
		} else {
			this._object = Titanium.Media.createAudioRecorder(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.Media.AudioRecorder.apiName;
	}
	static get paused () {
		return Titanium.Media.AudioRecorder.paused;
	}
	static get recording () {
		return Titanium.Media.AudioRecorder.recording;
	}
	static get stopped () {
		return Titanium.Media.AudioRecorder.stopped;
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
	get compression () {
		return this._object.compression;
	}
	set compression (value) {
		this._object.compression = value;
	}
	get format () {
		return this._object.format;
	}
	set format (value) {
		this._object.format = value;
	}
	get paused () {
		return this._object.paused;
	}
	get recording () {
		return this._object.recording;
	}
	get stopped () {
		return this._object.stopped;
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
	resume () {
		return this._object.resume();
	}
	start () {
		return this._object.start();
	}
	stop () {
		return new File(this._object.stop());
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
	getCompression () {
		return this._object.getCompression();
	}
	setCompression (compression) {
		return this._object.setCompression(compression);
	}
	getFormat () {
		return this._object.getFormat();
	}
	setFormat (format) {
		return this._object.setFormat(format);
	}
	getPaused () {
		return this._object.getPaused();
	}
	getRecording () {
		return this._object.getRecording();
	}
	getStopped () {
		return this._object.getStopped();
	}

	// modules
};
Object.freeze(AudioRecorder);

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