import { default as Window } from './../UI/Window';
import { default as Blob } from './../Blob';

export default class Person {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.Contacts.Person')) {
			this._object = object;
		} else {
			this._object = Titanium.Contacts.createPerson(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.Contacts.Person.apiName;
	}
	static get created () {
		return Titanium.Contacts.Person.created;
	}
	static get fullName () {
		return Titanium.Contacts.Person.fullName;
	}
	static get id () {
		return Titanium.Contacts.Person.id;
	}
	static get identifier () {
		return Titanium.Contacts.Person.identifier;
	}
	static get modified () {
		return Titanium.Contacts.Person.modified;
	}
	static get prefix () {
		return Titanium.Contacts.Person.prefix;
	}
	static get suffix () {
		return Titanium.Contacts.Person.suffix;
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
	get address () {
		return this._object.address;
	}
	set address (value) {
		this._object.address = value;
	}
	get alternateBirthday () {
		return this._object.alternateBirthday;
	}
	set alternateBirthday (value) {
		this._object.alternateBirthday = value;
	}
	get birthday () {
		return this._object.birthday;
	}
	set birthday (value) {
		this._object.birthday = value;
	}
	get created () {
		return this._object.created;
	}
	get date () {
		return this._object.date;
	}
	set date (value) {
		this._object.date = value;
	}
	get department () {
		return this._object.department;
	}
	set department (value) {
		this._object.department = value;
	}
	get email () {
		return this._object.email;
	}
	set email (value) {
		this._object.email = value;
	}
	get firstName () {
		return this._object.firstName;
	}
	set firstName (value) {
		this._object.firstName = value;
	}
	get firstPhonetic () {
		return this._object.firstPhonetic;
	}
	set firstPhonetic (value) {
		this._object.firstPhonetic = value;
	}
	get fullName () {
		return this._object.fullName;
	}
	get id () {
		return this._object.id;
	}
	get identifier () {
		return this._object.identifier;
	}
	get image () {
		return new Blob(this._object.image);
	}
	set image (value) {
		this._object.image = value;
	}
	get instantMessage () {
		return this._object.instantMessage;
	}
	set instantMessage (value) {
		this._object.instantMessage = value;
	}
	get jobTitle () {
		return this._object.jobTitle;
	}
	set jobTitle (value) {
		this._object.jobTitle = value;
	}
	get kind () {
		return this._object.kind;
	}
	set kind (value) {
		this._object.kind = value;
	}
	get lastName () {
		return this._object.lastName;
	}
	set lastName (value) {
		this._object.lastName = value;
	}
	get lastPhonetic () {
		return this._object.lastPhonetic;
	}
	set lastPhonetic (value) {
		this._object.lastPhonetic = value;
	}
	get middleName () {
		return this._object.middleName;
	}
	set middleName (value) {
		this._object.middleName = value;
	}
	get middlePhonetic () {
		return this._object.middlePhonetic;
	}
	set middlePhonetic (value) {
		this._object.middlePhonetic = value;
	}
	get modified () {
		return this._object.modified;
	}
	get nickname () {
		return this._object.nickname;
	}
	set nickname (value) {
		this._object.nickname = value;
	}
	get note () {
		return this._object.note;
	}
	set note (value) {
		this._object.note = value;
	}
	get organization () {
		return this._object.organization;
	}
	set organization (value) {
		this._object.organization = value;
	}
	get phone () {
		return this._object.phone;
	}
	set phone (value) {
		this._object.phone = value;
	}
	get prefix () {
		return this._object.prefix;
	}
	get recordId () {
		return this._object.recordId;
	}
	set recordId (value) {
		this._object.recordId = value;
	}
	get relatedNames () {
		return this._object.relatedNames;
	}
	set relatedNames (value) {
		this._object.relatedNames = value;
	}
	get socialProfile () {
		return this._object.socialProfile;
	}
	set socialProfile (value) {
		this._object.socialProfile = value;
	}
	get suffix () {
		return this._object.suffix;
	}
	get url () {
		return this._object.url;
	}
	set url (value) {
		this._object.url = value;
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
	getAddress () {
		return this._object.getAddress();
	}
	setAddress (address) {
		address = normalize(address);
		return this._object.setAddress(address);
	}
	getAlternateBirthday () {
		return this._object.getAlternateBirthday();
	}
	setAlternateBirthday (alternateBirthday) {
		alternateBirthday = normalize(alternateBirthday);
		return this._object.setAlternateBirthday(alternateBirthday);
	}
	getBirthday () {
		return this._object.getBirthday();
	}
	setBirthday (birthday) {
		return this._object.setBirthday(birthday);
	}
	getCreated () {
		return this._object.getCreated();
	}
	getDate () {
		return this._object.getDate();
	}
	setDate (date) {
		date = normalize(date);
		return this._object.setDate(date);
	}
	getDepartment () {
		return this._object.getDepartment();
	}
	setDepartment (department) {
		return this._object.setDepartment(department);
	}
	getEmail () {
		return this._object.getEmail();
	}
	setEmail (email) {
		email = normalize(email);
		return this._object.setEmail(email);
	}
	getFirstName () {
		return this._object.getFirstName();
	}
	setFirstName (firstName) {
		return this._object.setFirstName(firstName);
	}
	getFirstPhonetic () {
		return this._object.getFirstPhonetic();
	}
	setFirstPhonetic (firstPhonetic) {
		return this._object.setFirstPhonetic(firstPhonetic);
	}
	getFullName () {
		return this._object.getFullName();
	}
	getId () {
		return this._object.getId();
	}
	getIdentifier () {
		return this._object.getIdentifier();
	}
	getImage () {
		return new Blob(this._object.getImage());
	}
	setImage (image) {
		image = normalize(image);
		return this._object.setImage(image);
	}
	getInstantMessage () {
		return this._object.getInstantMessage();
	}
	setInstantMessage (instantMessage) {
		instantMessage = normalize(instantMessage);
		return this._object.setInstantMessage(instantMessage);
	}
	getJobTitle () {
		return this._object.getJobTitle();
	}
	setJobTitle (jobTitle) {
		return this._object.setJobTitle(jobTitle);
	}
	getKind () {
		return this._object.getKind();
	}
	setKind (kind) {
		return this._object.setKind(kind);
	}
	getLastName () {
		return this._object.getLastName();
	}
	setLastName (lastName) {
		return this._object.setLastName(lastName);
	}
	getLastPhonetic () {
		return this._object.getLastPhonetic();
	}
	setLastPhonetic (lastPhonetic) {
		return this._object.setLastPhonetic(lastPhonetic);
	}
	getMiddleName () {
		return this._object.getMiddleName();
	}
	setMiddleName (middleName) {
		return this._object.setMiddleName(middleName);
	}
	getMiddlePhonetic () {
		return this._object.getMiddlePhonetic();
	}
	setMiddlePhonetic (middlePhonetic) {
		return this._object.setMiddlePhonetic(middlePhonetic);
	}
	getModified () {
		return this._object.getModified();
	}
	getNickname () {
		return this._object.getNickname();
	}
	setNickname (nickname) {
		return this._object.setNickname(nickname);
	}
	getNote () {
		return this._object.getNote();
	}
	setNote (note) {
		return this._object.setNote(note);
	}
	getOrganization () {
		return this._object.getOrganization();
	}
	setOrganization (organization) {
		return this._object.setOrganization(organization);
	}
	getPhone () {
		return this._object.getPhone();
	}
	setPhone (phone) {
		phone = normalize(phone);
		return this._object.setPhone(phone);
	}
	getPrefix () {
		return this._object.getPrefix();
	}
	getRecordId () {
		return this._object.getRecordId();
	}
	setRecordId (recordId) {
		return this._object.setRecordId(recordId);
	}
	getRelatedNames () {
		return this._object.getRelatedNames();
	}
	setRelatedNames (relatedNames) {
		relatedNames = normalize(relatedNames);
		return this._object.setRelatedNames(relatedNames);
	}
	getSocialProfile () {
		return this._object.getSocialProfile();
	}
	setSocialProfile (socialProfile) {
		socialProfile = normalize(socialProfile);
		return this._object.setSocialProfile(socialProfile);
	}
	getSuffix () {
		return this._object.getSuffix();
	}
	getUrl () {
		return this._object.getUrl();
	}
	setUrl (url) {
		url = normalize(url);
		return this._object.setUrl(url);
	}

	// modules
};
Object.freeze(Person);

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