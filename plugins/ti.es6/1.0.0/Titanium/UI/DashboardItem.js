export default class DashboardItem {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.UI.DashboardItem')) {
			this._object = object;
		} else {
			this._object = Titanium.UI.createDashboardItem(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.UI.DashboardItem.apiName;
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
	get badge () {
		return this._object.badge;
	}
	set badge (value) {
		this._object.badge = value;
	}
	get canDelete () {
		return this._object.canDelete;
	}
	set canDelete (value) {
		this._object.canDelete = value;
	}
	get image () {
		return this._object.image;
	}
	set image (value) {
		this._object.image = value;
	}
	get selectedImage () {
		return this._object.selectedImage;
	}
	set selectedImage (value) {
		this._object.selectedImage = value;
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
	getBadge () {
		return this._object.getBadge();
	}
	setBadge (badge) {
		return this._object.setBadge(badge);
	}
	getCanDelete () {
		return this._object.getCanDelete();
	}
	setCanDelete (canDelete) {
		return this._object.setCanDelete(canDelete);
	}
	getImage () {
		return this._object.getImage();
	}
	setImage (image) {
		return this._object.setImage(image);
	}
	getSelectedImage () {
		return this._object.getSelectedImage();
	}
	setSelectedImage (selectedImage) {
		return this._object.setSelectedImage(selectedImage);
	}
};
Object.freeze(DashboardItem);

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