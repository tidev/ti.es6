import { default as Window } from './Window';
import { default as View } from './View';

export default class ListSection {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.UI.ListSection')) {
			this._object = object;
		} else {
			this._object = Titanium.UI.createListSection(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.UI.ListSection.apiName;
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
	get footerTitle () {
		return this._object.footerTitle;
	}
	set footerTitle (value) {
		this._object.footerTitle = value;
	}
	get headerTitle () {
		return this._object.headerTitle;
	}
	set headerTitle (value) {
		this._object.headerTitle = value;
	}
	get footerView () {
		return new View(this._object.footerView);
	}
	set footerView (value) {
		this._object.footerView = value;
	}
	get items () {
		return this._object.items;
	}
	set items (value) {
		this._object.items = value;
	}
	get headerView () {
		return new View(this._object.headerView);
	}
	set headerView (value) {
		this._object.headerView = value;
	}

	// methods
	applyProperties (props) {
		props = normalize(props);
		return this._object.applyProperties(props);
	}
	setItems (dataItems, animation) {
		return this._object.setItems(dataItems, animation);
	}
	appendItems (dataItems, animation) {
		return this._object.appendItems(dataItems, animation);
	}
	insertItemsAt (itemIndex, dataItems, animation) {
		return this._object.insertItemsAt(itemIndex, dataItems, animation);
	}
	replaceItemsAt (index, count, dataItems, animation) {
		return this._object.replaceItemsAt(index, count, dataItems, animation);
	}
	deleteItemsAt (itemIndex, count, animation) {
		return this._object.deleteItemsAt(itemIndex, count, animation);
	}
	getItemAt (itemIndex) {
		return this._object.getItemAt(itemIndex);
	}
	updateItemAt (index, dataItem, animation) {
		return this._object.updateItemAt(index, dataItem, animation);
	}
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
	getFooterTitle () {
		return this._object.getFooterTitle();
	}
	setFooterTitle (footerTitle) {
		return this._object.setFooterTitle(footerTitle);
	}
	getHeaderTitle () {
		return this._object.getHeaderTitle();
	}
	setHeaderTitle (headerTitle) {
		return this._object.setHeaderTitle(headerTitle);
	}
	getFooterView () {
		return new View(this._object.getFooterView());
	}
	setFooterView (footerView) {
		footerView = normalize(footerView);
		return this._object.setFooterView(footerView);
	}
	getItems () {
		return this._object.getItems();
	}
	setItems (items) {
		return this._object.setItems(items);
	}
	getHeaderView () {
		return new View(this._object.getHeaderView());
	}
	setHeaderView (headerView) {
		headerView = normalize(headerView);
		return this._object.setHeaderView(headerView);
	}

	// modules
};
Object.freeze(ListSection);

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