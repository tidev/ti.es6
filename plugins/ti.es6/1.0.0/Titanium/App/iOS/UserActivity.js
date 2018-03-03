export default class UserActivity {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.App.iOS.UserActivity')) {
			this._object = object;
		} else {
			this._object = Titanium.App.iOS.createUserActivity(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.App.iOS.UserActivity.apiName;
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
	get activityType () {
		return this._object.activityType;
	}
	set activityType (value) {
		this._object.activityType = value;
	}
	get eligibleForPublicIndexing () {
		return this._object.eligibleForPublicIndexing;
	}
	set eligibleForPublicIndexing (value) {
		this._object.eligibleForPublicIndexing = value;
	}
	get eligibleForSearch () {
		return this._object.eligibleForSearch;
	}
	set eligibleForSearch (value) {
		this._object.eligibleForSearch = value;
	}
	get eligibleForHandoff () {
		return this._object.eligibleForHandoff;
	}
	set eligibleForHandoff (value) {
		this._object.eligibleForHandoff = value;
	}
	get expirationDate () {
		return this._object.expirationDate;
	}
	set expirationDate (value) {
		this._object.expirationDate = value;
	}
	get keywords () {
		return this._object.keywords;
	}
	set keywords (value) {
		this._object.keywords = value;
	}
	get needsSave () {
		return this._object.needsSave;
	}
	set needsSave (value) {
		this._object.needsSave = value;
	}
	get requiredUserInfoKeys () {
		return this._object.requiredUserInfoKeys;
	}
	set requiredUserInfoKeys (value) {
		this._object.requiredUserInfoKeys = value;
	}
	get supported () {
		return this._object.supported;
	}
	set supported (value) {
		this._object.supported = value;
	}
	get title () {
		return this._object.title;
	}
	set title (value) {
		this._object.title = value;
	}
	get userInfo () {
		return this._object.userInfo;
	}
	set userInfo (value) {
		this._object.userInfo = value;
	}
	get webpageURL () {
		return this._object.webpageURL;
	}
	set webpageURL (value) {
		this._object.webpageURL = value;
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
	addContentAttributeSet (contentAttributeSet) {
		contentAttributeSet = normalize(contentAttributeSet);
		return this._object.addContentAttributeSet(contentAttributeSet);
	}
	becomeCurrent () {
		return this._object.becomeCurrent();
	}
	invalidate () {
		return this._object.invalidate();
	}
	resignCurrent () {
		return this._object.resignCurrent();
	}
	isSupported () {
		return this._object.isSupported();
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
	getActivityType () {
		return this._object.getActivityType();
	}
	setActivityType (activityType) {
		return this._object.setActivityType(activityType);
	}
	getEligibleForPublicIndexing () {
		return this._object.getEligibleForPublicIndexing();
	}
	setEligibleForPublicIndexing (eligibleForPublicIndexing) {
		return this._object.setEligibleForPublicIndexing(eligibleForPublicIndexing);
	}
	getEligibleForSearch () {
		return this._object.getEligibleForSearch();
	}
	setEligibleForSearch (eligibleForSearch) {
		return this._object.setEligibleForSearch(eligibleForSearch);
	}
	getEligibleForHandoff () {
		return this._object.getEligibleForHandoff();
	}
	setEligibleForHandoff (eligibleForHandoff) {
		return this._object.setEligibleForHandoff(eligibleForHandoff);
	}
	getExpirationDate () {
		return this._object.getExpirationDate();
	}
	setExpirationDate (expirationDate) {
		return this._object.setExpirationDate(expirationDate);
	}
	getKeywords () {
		return this._object.getKeywords();
	}
	setKeywords (keywords) {
		return this._object.setKeywords(keywords);
	}
	getNeedsSave () {
		return this._object.getNeedsSave();
	}
	setNeedsSave (needsSave) {
		return this._object.setNeedsSave(needsSave);
	}
	getRequiredUserInfoKeys () {
		return this._object.getRequiredUserInfoKeys();
	}
	setRequiredUserInfoKeys (requiredUserInfoKeys) {
		return this._object.setRequiredUserInfoKeys(requiredUserInfoKeys);
	}
	getSupported () {
		return this._object.getSupported();
	}
	setSupported (supported) {
		return this._object.setSupported(supported);
	}
	getTitle () {
		return this._object.getTitle();
	}
	setTitle (title) {
		return this._object.setTitle(title);
	}
	getUserInfo () {
		return this._object.getUserInfo();
	}
	setUserInfo (userInfo) {
		userInfo = normalize(userInfo);
		return this._object.setUserInfo(userInfo);
	}
	getWebpageURL () {
		return this._object.getWebpageURL();
	}
	setWebpageURL (webpageURL) {
		return this._object.setWebpageURL(webpageURL);
	}
};
Object.freeze(UserActivity);

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