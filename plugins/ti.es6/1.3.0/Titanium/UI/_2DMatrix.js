import { default as Window } from './Window';

export default class _2DMatrix {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.UI.2DMatrix')) {
			this._object = object;
		} else {
			this._object = Titanium.UI.create2DMatrix(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.UI._2DMatrix.apiName;
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
	get a () {
		return this._object.a;
	}
	set a (value) {
		this._object.a = value;
	}
	get b () {
		return this._object.b;
	}
	set b (value) {
		this._object.b = value;
	}
	get c () {
		return this._object.c;
	}
	set c (value) {
		this._object.c = value;
	}
	get d () {
		return this._object.d;
	}
	set d (value) {
		this._object.d = value;
	}
	get tx () {
		return this._object.tx;
	}
	set tx (value) {
		this._object.tx = value;
	}
	get ty () {
		return this._object.ty;
	}
	set ty (value) {
		this._object.ty = value;
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
	invert () {
		return new _2DMatrix(this._object.invert());
	}
	multiply (t2) {
		t2 = normalize(t2);
		return new _2DMatrix(this._object.multiply(t2));
	}
	rotate (angle, toAngle) {
		return new _2DMatrix(this._object.rotate(angle, toAngle));
	}
	scale (sx, sy, toSx, toSy) {
		return new _2DMatrix(this._object.scale(sx, sy, toSx, toSy));
	}
	translate (tx, ty) {
		return new _2DMatrix(this._object.translate(tx, ty));
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
	getA () {
		return this._object.getA();
	}
	setA (a) {
		return this._object.setA(a);
	}
	getB () {
		return this._object.getB();
	}
	setB (b) {
		return this._object.setB(b);
	}
	getC () {
		return this._object.getC();
	}
	setC (c) {
		return this._object.setC(c);
	}
	getD () {
		return this._object.getD();
	}
	setD (d) {
		return this._object.setD(d);
	}
	getTx () {
		return this._object.getTx();
	}
	setTx (tx) {
		return this._object.setTx(tx);
	}
	getTy () {
		return this._object.getTy();
	}
	setTy (ty) {
		return this._object.setTy(ty);
	}

	// modules
};
Object.freeze(_2DMatrix);

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