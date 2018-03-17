import { default as Window } from './../UI/Window';
import { default as File } from './../Filesystem/File';
import { default as ResultSet } from './ResultSet';

export default class DB {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.Database.DB')) {
			this._object = object;
		} else {
			this._object = undefined;
		}
	}

	// constants
	static get apiName () {
		return Titanium.Database.DB.apiName;
	}
	static get file () {
		return new File(Titanium.Database.DB.file);
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
	get file () {
		return new File(this._object.file);
	}
	get lastInsertRowId () {
		return this._object.lastInsertRowId;
	}
	set lastInsertRowId (value) {
		this._object.lastInsertRowId = value;
	}
	get name () {
		return this._object.name;
	}
	set name (value) {
		this._object.name = value;
	}
	get rowsAffected () {
		return this._object.rowsAffected;
	}
	set rowsAffected (value) {
		this._object.rowsAffected = value;
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
	close () {
		return this._object.close();
	}
	execute (sql, vararg) {
		vararg = normalize(vararg);
		return new ResultSet(this._object.execute(sql, vararg));
	}
	remove () {
		return this._object.remove();
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
	getFile () {
		return new File(this._object.getFile());
	}
	getLastInsertRowId () {
		return this._object.getLastInsertRowId();
	}
	setLastInsertRowId (lastInsertRowId) {
		return this._object.setLastInsertRowId(lastInsertRowId);
	}
	getName () {
		return this._object.getName();
	}
	setName (name) {
		return this._object.setName(name);
	}
	getRowsAffected () {
		return this._object.getRowsAffected();
	}
	setRowsAffected (rowsAffected) {
		return this._object.setRowsAffected(rowsAffected);
	}

	// modules
};
Object.freeze(DB);

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