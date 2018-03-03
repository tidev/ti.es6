import { default as Window } from './Window';
import { default as View } from './View';
import { default as TableViewRow } from './TableViewRow';

export default class TableViewSection {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.UI.TableViewSection')) {
			this._object = object;
		} else {
			this._object = Titanium.UI.createTableViewSection(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.UI.TableViewSection.apiName;
	}
	static get rowCount () {
		return Titanium.UI.TableViewSection.rowCount;
	}
	static get rows () {
		return Titanium.UI.TableViewSection.rows;
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
	get footerTitle () {
		return this._object.footerTitle;
	}
	set footerTitle (value) {
		this._object.footerTitle = value;
	}
	get footerView () {
		return new View(this._object.footerView);
	}
	set footerView (value) {
		this._object.footerView = value;
	}
	get headerTitle () {
		return this._object.headerTitle;
	}
	set headerTitle (value) {
		this._object.headerTitle = value;
	}
	get headerView () {
		return new View(this._object.headerView);
	}
	set headerView (value) {
		this._object.headerView = value;
	}
	get rowCount () {
		return this._object.rowCount;
	}
	get rows () {
		return this._object.rows;
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
	add (row) {
		row = normalize(row);
		return this._object.add(row);
	}
	remove (row) {
		row = normalize(row);
		return this._object.remove(row);
	}
	rowAtIndex (index) {
		return new TableViewRow(this._object.rowAtIndex(index));
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
	getFooterTitle () {
		return this._object.getFooterTitle();
	}
	setFooterTitle (footerTitle) {
		return this._object.setFooterTitle(footerTitle);
	}
	getFooterView () {
		return new View(this._object.getFooterView());
	}
	setFooterView (footerView) {
		footerView = normalize(footerView);
		return this._object.setFooterView(footerView);
	}
	getHeaderTitle () {
		return this._object.getHeaderTitle();
	}
	setHeaderTitle (headerTitle) {
		return this._object.setHeaderTitle(headerTitle);
	}
	getHeaderView () {
		return new View(this._object.getHeaderView());
	}
	setHeaderView (headerView) {
		headerView = normalize(headerView);
		return this._object.setHeaderView(headerView);
	}
	getRowCount () {
		return this._object.getRowCount();
	}
	getRows () {
		return this._object.getRows();
	}

	// modules
};
Object.freeze(TableViewSection);

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