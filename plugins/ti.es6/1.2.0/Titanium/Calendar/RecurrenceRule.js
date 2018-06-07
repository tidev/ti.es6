export default class RecurrenceRule {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.Calendar.RecurrenceRule')) {
			this._object = object;
		} else {
			this._object = Titanium.Calendar.Event.createRecurrenceRule(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.Calendar.RecurrenceRule.apiName;
	}
	static get calendarID () {
		return Titanium.Calendar.RecurrenceRule.calendarID;
	}
	static get frequency () {
		return Titanium.Calendar.RecurrenceRule.frequency;
	}
	static get interval () {
		return Titanium.Calendar.RecurrenceRule.interval;
	}
	static get daysOfTheWeek () {
		return Titanium.Calendar.RecurrenceRule.daysOfTheWeek;
	}
	static get daysOfTheMonth () {
		return Titanium.Calendar.RecurrenceRule.daysOfTheMonth;
	}
	static get monthsOfTheYear () {
		return Titanium.Calendar.RecurrenceRule.monthsOfTheYear;
	}
	static get weeksOfTheYear () {
		return Titanium.Calendar.RecurrenceRule.weeksOfTheYear;
	}
	static get daysOfTheYear () {
		return Titanium.Calendar.RecurrenceRule.daysOfTheYear;
	}
	static get setPositions () {
		return Titanium.Calendar.RecurrenceRule.setPositions;
	}
	static get end () {
		return Titanium.Calendar.RecurrenceRule.end;
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
	get calendarID () {
		return this._object.calendarID;
	}
	get frequency () {
		return this._object.frequency;
	}
	get interval () {
		return this._object.interval;
	}
	get daysOfTheWeek () {
		return this._object.daysOfTheWeek;
	}
	get daysOfTheMonth () {
		return this._object.daysOfTheMonth;
	}
	get monthsOfTheYear () {
		return this._object.monthsOfTheYear;
	}
	get weeksOfTheYear () {
		return this._object.weeksOfTheYear;
	}
	get daysOfTheYear () {
		return this._object.daysOfTheYear;
	}
	get setPositions () {
		return this._object.setPositions;
	}
	get end () {
		return this._object.end;
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
	getCalendarID () {
		return this._object.getCalendarID();
	}
	getFrequency () {
		return this._object.getFrequency();
	}
	getInterval () {
		return this._object.getInterval();
	}
	getDaysOfTheWeek () {
		return this._object.getDaysOfTheWeek();
	}
	getDaysOfTheMonth () {
		return this._object.getDaysOfTheMonth();
	}
	getMonthsOfTheYear () {
		return this._object.getMonthsOfTheYear();
	}
	getWeeksOfTheYear () {
		return this._object.getWeeksOfTheYear();
	}
	getDaysOfTheYear () {
		return this._object.getDaysOfTheYear();
	}
	getSetPositions () {
		return this._object.getSetPositions();
	}
	getEnd () {
		return this._object.getEnd();
	}
};
Object.freeze(RecurrenceRule);

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