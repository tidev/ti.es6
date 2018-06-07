import { default as Window } from './../UI/Window';

export default class ProcessingInstruction {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.XML.ProcessingInstruction')) {
			this._object = object;
		} else {
			this._object = Titanium.XML.Document.createProcessingInstruction(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.XML.ProcessingInstruction.apiName;
	}
	static get target () {
		return Titanium.XML.ProcessingInstruction.target;
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
	get data () {
		return this._object.data;
	}
	set data (value) {
		this._object.data = value;
	}
	get target () {
		return this._object.target;
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
	getData () {
		return this._object.getData();
	}
	setData (data) {
		return this._object.setData(data);
	}
	getTarget () {
		return this._object.getTarget();
	}

	// modules
};
Object.freeze(ProcessingInstruction);

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