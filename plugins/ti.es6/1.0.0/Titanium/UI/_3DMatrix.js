export default class _3DMatrix {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.UI.3DMatrix')) {
			this._object = object;
		} else {
			this._object = Titanium.UI.create3DMatrix(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.UI._3DMatrix.apiName;
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
	get m11 () {
		return this._object.m11;
	}
	set m11 (value) {
		this._object.m11 = value;
	}
	get m12 () {
		return this._object.m12;
	}
	set m12 (value) {
		this._object.m12 = value;
	}
	get m13 () {
		return this._object.m13;
	}
	set m13 (value) {
		this._object.m13 = value;
	}
	get m14 () {
		return this._object.m14;
	}
	set m14 (value) {
		this._object.m14 = value;
	}
	get m21 () {
		return this._object.m21;
	}
	set m21 (value) {
		this._object.m21 = value;
	}
	get m22 () {
		return this._object.m22;
	}
	set m22 (value) {
		this._object.m22 = value;
	}
	get m23 () {
		return this._object.m23;
	}
	set m23 (value) {
		this._object.m23 = value;
	}
	get m24 () {
		return this._object.m24;
	}
	set m24 (value) {
		this._object.m24 = value;
	}
	get m31 () {
		return this._object.m31;
	}
	set m31 (value) {
		this._object.m31 = value;
	}
	get m32 () {
		return this._object.m32;
	}
	set m32 (value) {
		this._object.m32 = value;
	}
	get m33 () {
		return this._object.m33;
	}
	set m33 (value) {
		this._object.m33 = value;
	}
	get m34 () {
		return this._object.m34;
	}
	set m34 (value) {
		this._object.m34 = value;
	}
	get m41 () {
		return this._object.m41;
	}
	set m41 (value) {
		this._object.m41 = value;
	}
	get m42 () {
		return this._object.m42;
	}
	set m42 (value) {
		this._object.m42 = value;
	}
	get m43 () {
		return this._object.m43;
	}
	set m43 (value) {
		this._object.m43 = value;
	}
	get m44 () {
		return this._object.m44;
	}
	set m44 (value) {
		this._object.m44 = value;
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
		return new _3DMatrix(this._object.invert());
	}
	multiply (t2) {
		t2 = normalize(t2);
		return new _3DMatrix(this._object.multiply(t2));
	}
	rotate (angle, x, y, z) {
		return new _3DMatrix(this._object.rotate(angle, x, y, z));
	}
	scale (sx, sy, sz) {
		return new _3DMatrix(this._object.scale(sx, sy, sz));
	}
	translate (tx, ty, tz) {
		return new _3DMatrix(this._object.translate(tx, ty, tz));
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
	getM11 () {
		return this._object.getM11();
	}
	setM11 (m11) {
		return this._object.setM11(m11);
	}
	getM12 () {
		return this._object.getM12();
	}
	setM12 (m12) {
		return this._object.setM12(m12);
	}
	getM13 () {
		return this._object.getM13();
	}
	setM13 (m13) {
		return this._object.setM13(m13);
	}
	getM14 () {
		return this._object.getM14();
	}
	setM14 (m14) {
		return this._object.setM14(m14);
	}
	getM21 () {
		return this._object.getM21();
	}
	setM21 (m21) {
		return this._object.setM21(m21);
	}
	getM22 () {
		return this._object.getM22();
	}
	setM22 (m22) {
		return this._object.setM22(m22);
	}
	getM23 () {
		return this._object.getM23();
	}
	setM23 (m23) {
		return this._object.setM23(m23);
	}
	getM24 () {
		return this._object.getM24();
	}
	setM24 (m24) {
		return this._object.setM24(m24);
	}
	getM31 () {
		return this._object.getM31();
	}
	setM31 (m31) {
		return this._object.setM31(m31);
	}
	getM32 () {
		return this._object.getM32();
	}
	setM32 (m32) {
		return this._object.setM32(m32);
	}
	getM33 () {
		return this._object.getM33();
	}
	setM33 (m33) {
		return this._object.setM33(m33);
	}
	getM34 () {
		return this._object.getM34();
	}
	setM34 (m34) {
		return this._object.setM34(m34);
	}
	getM41 () {
		return this._object.getM41();
	}
	setM41 (m41) {
		return this._object.setM41(m41);
	}
	getM42 () {
		return this._object.getM42();
	}
	setM42 (m42) {
		return this._object.setM42(m42);
	}
	getM43 () {
		return this._object.getM43();
	}
	setM43 (m43) {
		return this._object.setM43(m43);
	}
	getM44 () {
		return this._object.getM44();
	}
	setM44 (m44) {
		return this._object.setM44(m44);
	}
};
Object.freeze(_3DMatrix);

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