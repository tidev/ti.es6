import { default as Window } from './Window';

export default class ListItem {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.UI.ListItem')) {
			this._object = object;
		} else {
			this._object = undefined;
		}
	}

	// constants
	static get apiName () {
		return Titanium.UI.ListItem.apiName;
	}

	// properties
	get apiName () {
		return this._object.apiName;
	}
	get lifecycleContainer () {
		return new Window(this._object.lifecycleContainer);
	}
	set lifecycleContainer (value) {
		this._object.lifecycleContainer = value;
	}
	get accessoryType () {
		return this._object.accessoryType;
	}
	set accessoryType (value) {
		this._object.accessoryType = value;
	}
	get selectedBackgroundColor () {
		return this._object.selectedBackgroundColor;
	}
	set selectedBackgroundColor (value) {
		this._object.selectedBackgroundColor = value;
	}
	get selectedBackgroundImage () {
		return this._object.selectedBackgroundImage;
	}
	set selectedBackgroundImage (value) {
		this._object.selectedBackgroundImage = value;
	}
	get selectedBackgroundGradient () {
		return this._object.selectedBackgroundGradient;
	}
	set selectedBackgroundGradient (value) {
		this._object.selectedBackgroundGradient = value;
	}
	get canEdit () {
		return this._object.canEdit;
	}
	set canEdit (value) {
		this._object.canEdit = value;
	}
	get canInsert () {
		return this._object.canInsert;
	}
	set canInsert (value) {
		this._object.canInsert = value;
	}
	get canMove () {
		return this._object.canMove;
	}
	set canMove (value) {
		this._object.canMove = value;
	}
	get editActions () {
		return this._object.editActions;
	}
	set editActions (value) {
		this._object.editActions = value;
	}
	get searchableText () {
		return this._object.searchableText;
	}
	set searchableText (value) {
		this._object.searchableText = value;
	}
	get subtitleColor () {
		return this._object.subtitleColor;
	}
	set subtitleColor (value) {
		this._object.subtitleColor = value;
	}
	get selectedColor () {
		return this._object.selectedColor;
	}
	set selectedColor (value) {
		this._object.selectedColor = value;
	}
	get selectedSubtitleColor () {
		return this._object.selectedSubtitleColor;
	}
	set selectedSubtitleColor (value) {
		this._object.selectedSubtitleColor = value;
	}
	get font () {
		return this._object.font;
	}
	set font (value) {
		this._object.font = value;
	}
	get height () {
		return this._object.height;
	}
	set height (value) {
		this._object.height = value;
	}
	get image () {
		return this._object.image;
	}
	set image (value) {
		this._object.image = value;
	}
	get selectionStyle () {
		return this._object.selectionStyle;
	}
	set selectionStyle (value) {
		this._object.selectionStyle = value;
	}
	get backgroundColor () {
		return this._object.backgroundColor;
	}
	set backgroundColor (value) {
		this._object.backgroundColor = value;
	}
	get backgroundGradient () {
		return this._object.backgroundGradient;
	}
	set backgroundGradient (value) {
		this._object.backgroundGradient = value;
	}
	get backgroundImage () {
		return this._object.backgroundImage;
	}
	set backgroundImage (value) {
		this._object.backgroundImage = value;
	}
	get color () {
		return this._object.color;
	}
	set color (value) {
		this._object.color = value;
	}
	get itemId () {
		return this._object.itemId;
	}
	set itemId (value) {
		this._object.itemId = value;
	}
	get subtitle () {
		return this._object.subtitle;
	}
	set subtitle (value) {
		this._object.subtitle = value;
	}
	get title () {
		return this._object.title;
	}
	set title (value) {
		this._object.title = value;
	}

	// methods
	getApiName () {
		return this._object.getApiName();
	}
	getLifecycleContainer () {
		return new Window(this._object.getLifecycleContainer());
	}
	setLifecycleContainer (lifecycleContainer) {
		lifecycleContainer = normalize(lifecycleContainer);
		return this._object.setLifecycleContainer(lifecycleContainer);
	}
	getEditActions () {
		return this._object.getEditActions();
	}
	setEditActions (editActions) {
		return this._object.setEditActions(editActions);
	}
	getSelectedColor () {
		return this._object.getSelectedColor();
	}
	setSelectedColor (selectedColor) {
		return this._object.setSelectedColor(selectedColor);
	}
	getSelectedSubtitleColor () {
		return this._object.getSelectedSubtitleColor();
	}
	setSelectedSubtitleColor (selectedSubtitleColor) {
		return this._object.setSelectedSubtitleColor(selectedSubtitleColor);
	}

	// modules
};
Object.freeze(ListItem);

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