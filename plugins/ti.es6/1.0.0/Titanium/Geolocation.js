import { default as Window } from './UI/Window';

export default class Geolocation {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.Geolocation')) {
			this._object = object;
		} else {
			this._object = undefined;
		}
	}

	// constants
	static get apiName () {
		return Titanium.Geolocation.apiName;
	}
	static get ACCURACY_BEST () {
		return Titanium.Geolocation.ACCURACY_BEST;
	}
	static get ACCURACY_BEST_FOR_NAVIGATION () {
		return Titanium.Geolocation.ACCURACY_BEST_FOR_NAVIGATION;
	}
	static get ACCURACY_HUNDRED_METERS () {
		return Titanium.Geolocation.ACCURACY_HUNDRED_METERS;
	}
	static get ACCURACY_KILOMETER () {
		return Titanium.Geolocation.ACCURACY_KILOMETER;
	}
	static get ACCURACY_NEAREST_TEN_METERS () {
		return Titanium.Geolocation.ACCURACY_NEAREST_TEN_METERS;
	}
	static get ACCURACY_THREE_KILOMETERS () {
		return Titanium.Geolocation.ACCURACY_THREE_KILOMETERS;
	}
	static get ACCURACY_HIGH () {
		return Titanium.Geolocation.ACCURACY_HIGH;
	}
	static get ACCURACY_LOW () {
		return Titanium.Geolocation.ACCURACY_LOW;
	}
	static get ACTIVITYTYPE_AUTOMOTIVE_NAVIGATION () {
		return Titanium.Geolocation.ACTIVITYTYPE_AUTOMOTIVE_NAVIGATION;
	}
	static get ACTIVITYTYPE_FITNESS () {
		return Titanium.Geolocation.ACTIVITYTYPE_FITNESS;
	}
	static get ACTIVITYTYPE_OTHER () {
		return Titanium.Geolocation.ACTIVITYTYPE_OTHER;
	}
	static get ACTIVITYTYPE_OTHER_NAVIGATION () {
		return Titanium.Geolocation.ACTIVITYTYPE_OTHER_NAVIGATION;
	}
	static get AUTHORIZATION_ALWAYS () {
		return Titanium.Geolocation.AUTHORIZATION_ALWAYS;
	}
	static get AUTHORIZATION_AUTHORIZED () {
		return Titanium.Geolocation.AUTHORIZATION_AUTHORIZED;
	}
	static get AUTHORIZATION_DENIED () {
		return Titanium.Geolocation.AUTHORIZATION_DENIED;
	}
	static get AUTHORIZATION_RESTRICTED () {
		return Titanium.Geolocation.AUTHORIZATION_RESTRICTED;
	}
	static get AUTHORIZATION_UNKNOWN () {
		return Titanium.Geolocation.AUTHORIZATION_UNKNOWN;
	}
	static get AUTHORIZATION_WHEN_IN_USE () {
		return Titanium.Geolocation.AUTHORIZATION_WHEN_IN_USE;
	}
	static get ERROR_DENIED () {
		return Titanium.Geolocation.ERROR_DENIED;
	}
	static get ERROR_HEADING_FAILURE () {
		return Titanium.Geolocation.ERROR_HEADING_FAILURE;
	}
	static get ERROR_LOCATION_UNKNOWN () {
		return Titanium.Geolocation.ERROR_LOCATION_UNKNOWN;
	}
	static get ERROR_NETWORK () {
		return Titanium.Geolocation.ERROR_NETWORK;
	}
	static get ERROR_REGION_MONITORING_DELAYED () {
		return Titanium.Geolocation.ERROR_REGION_MONITORING_DELAYED;
	}
	static get ERROR_REGION_MONITORING_DENIED () {
		return Titanium.Geolocation.ERROR_REGION_MONITORING_DENIED;
	}
	static get ERROR_REGION_MONITORING_FAILURE () {
		return Titanium.Geolocation.ERROR_REGION_MONITORING_FAILURE;
	}
	static get PROVIDER_GPS () {
		return Titanium.Geolocation.PROVIDER_GPS;
	}
	static get PROVIDER_NETWORK () {
		return Titanium.Geolocation.PROVIDER_NETWORK;
	}
	static get PROVIDER_PASSIVE () {
		return Titanium.Geolocation.PROVIDER_PASSIVE;
	}
	static get hasCompass () {
		return Titanium.Geolocation.hasCompass;
	}
	static get locationServicesEnabled () {
		return Titanium.Geolocation.locationServicesEnabled;
	}
	static get lastGeolocation () {
		return Titanium.Geolocation.lastGeolocation;
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
	get frequency () {
		return this._object.frequency;
	}
	set frequency (value) {
		this._object.frequency = value;
	}
	get preferredProvider () {
		return this._object.preferredProvider;
	}
	set preferredProvider (value) {
		this._object.preferredProvider = value;
	}
	get purpose () {
		return this._object.purpose;
	}
	set purpose (value) {
		this._object.purpose = value;
	}
	get showCalibration () {
		return this._object.showCalibration;
	}
	set showCalibration (value) {
		this._object.showCalibration = value;
	}
	get trackSignificantLocationChange () {
		return this._object.trackSignificantLocationChange;
	}
	set trackSignificantLocationChange (value) {
		this._object.trackSignificantLocationChange = value;
	}
	get allowsBackgroundLocationUpdates () {
		return this._object.allowsBackgroundLocationUpdates;
	}
	set allowsBackgroundLocationUpdates (value) {
		this._object.allowsBackgroundLocationUpdates = value;
	}
	get activityType () {
		return this._object.activityType;
	}
	set activityType (value) {
		this._object.activityType = value;
	}
	get pauseLocationUpdateAutomatically () {
		return this._object.pauseLocationUpdateAutomatically;
	}
	set pauseLocationUpdateAutomatically (value) {
		this._object.pauseLocationUpdateAutomatically = value;
	}
	get ACCURACY_BEST () {
		return this._object.ACCURACY_BEST;
	}
	get ACCURACY_BEST_FOR_NAVIGATION () {
		return this._object.ACCURACY_BEST_FOR_NAVIGATION;
	}
	get ACCURACY_HUNDRED_METERS () {
		return this._object.ACCURACY_HUNDRED_METERS;
	}
	get ACCURACY_KILOMETER () {
		return this._object.ACCURACY_KILOMETER;
	}
	get ACCURACY_NEAREST_TEN_METERS () {
		return this._object.ACCURACY_NEAREST_TEN_METERS;
	}
	get ACCURACY_THREE_KILOMETERS () {
		return this._object.ACCURACY_THREE_KILOMETERS;
	}
	get ACCURACY_HIGH () {
		return this._object.ACCURACY_HIGH;
	}
	get ACCURACY_LOW () {
		return this._object.ACCURACY_LOW;
	}
	get ACTIVITYTYPE_AUTOMOTIVE_NAVIGATION () {
		return this._object.ACTIVITYTYPE_AUTOMOTIVE_NAVIGATION;
	}
	get ACTIVITYTYPE_FITNESS () {
		return this._object.ACTIVITYTYPE_FITNESS;
	}
	get ACTIVITYTYPE_OTHER () {
		return this._object.ACTIVITYTYPE_OTHER;
	}
	get ACTIVITYTYPE_OTHER_NAVIGATION () {
		return this._object.ACTIVITYTYPE_OTHER_NAVIGATION;
	}
	get AUTHORIZATION_ALWAYS () {
		return this._object.AUTHORIZATION_ALWAYS;
	}
	get AUTHORIZATION_AUTHORIZED () {
		return this._object.AUTHORIZATION_AUTHORIZED;
	}
	get AUTHORIZATION_DENIED () {
		return this._object.AUTHORIZATION_DENIED;
	}
	get AUTHORIZATION_RESTRICTED () {
		return this._object.AUTHORIZATION_RESTRICTED;
	}
	get AUTHORIZATION_UNKNOWN () {
		return this._object.AUTHORIZATION_UNKNOWN;
	}
	get AUTHORIZATION_WHEN_IN_USE () {
		return this._object.AUTHORIZATION_WHEN_IN_USE;
	}
	get ERROR_DENIED () {
		return this._object.ERROR_DENIED;
	}
	get ERROR_HEADING_FAILURE () {
		return this._object.ERROR_HEADING_FAILURE;
	}
	get ERROR_LOCATION_UNKNOWN () {
		return this._object.ERROR_LOCATION_UNKNOWN;
	}
	get ERROR_NETWORK () {
		return this._object.ERROR_NETWORK;
	}
	get ERROR_REGION_MONITORING_DELAYED () {
		return this._object.ERROR_REGION_MONITORING_DELAYED;
	}
	get ERROR_REGION_MONITORING_DENIED () {
		return this._object.ERROR_REGION_MONITORING_DENIED;
	}
	get ERROR_REGION_MONITORING_FAILURE () {
		return this._object.ERROR_REGION_MONITORING_FAILURE;
	}
	get PROVIDER_GPS () {
		return this._object.PROVIDER_GPS;
	}
	get PROVIDER_NETWORK () {
		return this._object.PROVIDER_NETWORK;
	}
	get PROVIDER_PASSIVE () {
		return this._object.PROVIDER_PASSIVE;
	}
	get accuracy () {
		return this._object.accuracy;
	}
	set accuracy (value) {
		this._object.accuracy = value;
	}
	get distanceFilter () {
		return this._object.distanceFilter;
	}
	set distanceFilter (value) {
		this._object.distanceFilter = value;
	}
	get headingFilter () {
		return this._object.headingFilter;
	}
	set headingFilter (value) {
		this._object.headingFilter = value;
	}
	get hasCompass () {
		return this._object.hasCompass;
	}
	get locationServicesAuthorization () {
		return this._object.locationServicesAuthorization;
	}
	set locationServicesAuthorization (value) {
		this._object.locationServicesAuthorization = value;
	}
	get locationServicesEnabled () {
		return this._object.locationServicesEnabled;
	}
	get lastGeolocation () {
		return this._object.lastGeolocation;
	}

	// static properties
	static get bubbleParent () {
		return Titanium.Geolocation.bubbleParent;
	}
	static set bubbleParent (value) {
		Titanium.Geolocation.bubbleParent = value;
	}
	static get showCalibration () {
		return Titanium.Geolocation.showCalibration;
	}
	static set showCalibration (value) {
		Titanium.Geolocation.showCalibration = value;
	}
	static get activityType () {
		return Titanium.Geolocation.activityType;
	}
	static set activityType (value) {
		Titanium.Geolocation.activityType = value;
	}
	static get accuracy () {
		return Titanium.Geolocation.accuracy;
	}
	static set accuracy (value) {
		Titanium.Geolocation.accuracy = value;
	}
	static get distanceFilter () {
		return Titanium.Geolocation.distanceFilter;
	}
	static set distanceFilter (value) {
		Titanium.Geolocation.distanceFilter = value;
	}
	static get headingFilter () {
		return Titanium.Geolocation.headingFilter;
	}
	static set headingFilter (value) {
		Titanium.Geolocation.headingFilter = value;
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
	forwardGeocoder (address, callback) {
		if (!callback) {
			return new Promise(resolve => this._object.forwardGeocoder(address, resolve));
		}
		return this._object.forwardGeocoder(address, callback);
	}
	getCurrentHeading (callback) {
		if (!callback) {
			return new Promise(resolve => this._object.getCurrentHeading(resolve));
		}
		return this._object.getCurrentHeading(callback);
	}
	getCurrentPosition (callback) {
		if (!callback) {
			return new Promise(resolve => this._object.getCurrentPosition(resolve));
		}
		return this._object.getCurrentPosition(callback);
	}
	reverseGeocoder (latitude, longitude, callback) {
		if (!callback) {
			return new Promise(resolve => this._object.reverseGeocoder(latitude, longitude, resolve));
		}
		return this._object.reverseGeocoder(latitude, longitude, callback);
	}
	hasLocationPermissions (authorizationType) {
		return this._object.hasLocationPermissions(authorizationType);
	}
	requestLocationPermissions (authorizationType, callback) {
		if (!callback) {
			return new Promise(resolve => this._object.requestLocationPermissions(authorizationType, resolve));
		}
		return this._object.requestLocationPermissions(authorizationType, callback);
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
	getFrequency () {
		return this._object.getFrequency();
	}
	setFrequency (frequency) {
		return this._object.setFrequency(frequency);
	}
	getPreferredProvider () {
		return this._object.getPreferredProvider();
	}
	setPreferredProvider (preferredProvider) {
		return this._object.setPreferredProvider(preferredProvider);
	}
	getPurpose () {
		return this._object.getPurpose();
	}
	setPurpose (purpose) {
		return this._object.setPurpose(purpose);
	}
	getShowCalibration () {
		return this._object.getShowCalibration();
	}
	setShowCalibration (showCalibration) {
		return this._object.setShowCalibration(showCalibration);
	}
	getTrackSignificantLocationChange () {
		return this._object.getTrackSignificantLocationChange();
	}
	setTrackSignificantLocationChange (trackSignificantLocationChange) {
		return this._object.setTrackSignificantLocationChange(trackSignificantLocationChange);
	}
	getAllowsBackgroundLocationUpdates () {
		return this._object.getAllowsBackgroundLocationUpdates();
	}
	setAllowsBackgroundLocationUpdates (allowsBackgroundLocationUpdates) {
		return this._object.setAllowsBackgroundLocationUpdates(allowsBackgroundLocationUpdates);
	}
	getActivityType () {
		return this._object.getActivityType();
	}
	setActivityType (activityType) {
		return this._object.setActivityType(activityType);
	}
	getPauseLocationUpdateAutomatically () {
		return this._object.getPauseLocationUpdateAutomatically();
	}
	setPauseLocationUpdateAutomatically (pauseLocationUpdateAutomatically) {
		return this._object.setPauseLocationUpdateAutomatically(pauseLocationUpdateAutomatically);
	}
	getAccuracy () {
		return this._object.getAccuracy();
	}
	setAccuracy (accuracy) {
		return this._object.setAccuracy(accuracy);
	}
	getDistanceFilter () {
		return this._object.getDistanceFilter();
	}
	setDistanceFilter (distanceFilter) {
		return this._object.setDistanceFilter(distanceFilter);
	}
	getHeadingFilter () {
		return this._object.getHeadingFilter();
	}
	setHeadingFilter (headingFilter) {
		return this._object.setHeadingFilter(headingFilter);
	}
	getHasCompass () {
		return this._object.getHasCompass();
	}
	getLocationServicesAuthorization () {
		return this._object.getLocationServicesAuthorization();
	}
	setLocationServicesAuthorization (locationServicesAuthorization) {
		return this._object.setLocationServicesAuthorization(locationServicesAuthorization);
	}
	getLocationServicesEnabled () {
		return this._object.getLocationServicesEnabled();
	}
	getLastGeolocation () {
		return this._object.getLastGeolocation();
	}

	// static methods
	static addEventListener (name, callback) {
		if (!callback) {
			return new Promise(resolve => this._object.addEventListener(name, resolve));
		}
		return this._object.addEventListener(name, callback);
	}
	static applyProperties (props) {
		props = normalize(props);
		return this._object.applyProperties(props);
	}
	static fireEvent (name, event) {
		event = normalize(event);
		return this._object.fireEvent(name, event);
	}
	static removeEventListener (name, callback) {
		if (!callback) {
			return new Promise(resolve => this._object.removeEventListener(name, resolve));
		}
		return this._object.removeEventListener(name, callback);
	}
	static forwardGeocoder (address, callback) {
		if (!callback) {
			return new Promise(resolve => this._object.forwardGeocoder(address, resolve));
		}
		return this._object.forwardGeocoder(address, callback);
	}
	static getCurrentHeading (callback) {
		if (!callback) {
			return new Promise(resolve => this._object.getCurrentHeading(resolve));
		}
		return this._object.getCurrentHeading(callback);
	}
	static getCurrentPosition (callback) {
		if (!callback) {
			return new Promise(resolve => this._object.getCurrentPosition(resolve));
		}
		return this._object.getCurrentPosition(callback);
	}
	static reverseGeocoder (latitude, longitude, callback) {
		if (!callback) {
			return new Promise(resolve => this._object.reverseGeocoder(latitude, longitude, resolve));
		}
		return this._object.reverseGeocoder(latitude, longitude, callback);
	}
	static hasLocationPermissions (authorizationType) {
		return this._object.hasLocationPermissions(authorizationType);
	}
	static requestLocationPermissions (authorizationType, callback) {
		if (!callback) {
			return new Promise(resolve => this._object.requestLocationPermissions(authorizationType, resolve));
		}
		return this._object.requestLocationPermissions(authorizationType, callback);
	}
	static getApiName () {
		return this._object.getApiName();
	}
	static getBubbleParent () {
		return this._object.getBubbleParent();
	}
	static setBubbleParent (bubbleParent) {
		return this._object.setBubbleParent(bubbleParent);
	}
	static getLifecycleContainer () {
		return new Window(this._object.getLifecycleContainer());
	}
	static setLifecycleContainer (lifecycleContainer) {
		lifecycleContainer = normalize(lifecycleContainer);
		return this._object.setLifecycleContainer(lifecycleContainer);
	}
	static getFrequency () {
		return this._object.getFrequency();
	}
	static setFrequency (frequency) {
		return this._object.setFrequency(frequency);
	}
	static getPreferredProvider () {
		return this._object.getPreferredProvider();
	}
	static setPreferredProvider (preferredProvider) {
		return this._object.setPreferredProvider(preferredProvider);
	}
	static getPurpose () {
		return this._object.getPurpose();
	}
	static setPurpose (purpose) {
		return this._object.setPurpose(purpose);
	}
	static getShowCalibration () {
		return this._object.getShowCalibration();
	}
	static setShowCalibration (showCalibration) {
		return this._object.setShowCalibration(showCalibration);
	}
	static getTrackSignificantLocationChange () {
		return this._object.getTrackSignificantLocationChange();
	}
	static setTrackSignificantLocationChange (trackSignificantLocationChange) {
		return this._object.setTrackSignificantLocationChange(trackSignificantLocationChange);
	}
	static getAllowsBackgroundLocationUpdates () {
		return this._object.getAllowsBackgroundLocationUpdates();
	}
	static setAllowsBackgroundLocationUpdates (allowsBackgroundLocationUpdates) {
		return this._object.setAllowsBackgroundLocationUpdates(allowsBackgroundLocationUpdates);
	}
	static getActivityType () {
		return this._object.getActivityType();
	}
	static setActivityType (activityType) {
		return this._object.setActivityType(activityType);
	}
	static getPauseLocationUpdateAutomatically () {
		return this._object.getPauseLocationUpdateAutomatically();
	}
	static setPauseLocationUpdateAutomatically (pauseLocationUpdateAutomatically) {
		return this._object.setPauseLocationUpdateAutomatically(pauseLocationUpdateAutomatically);
	}
	static getAccuracy () {
		return this._object.getAccuracy();
	}
	static setAccuracy (accuracy) {
		return this._object.setAccuracy(accuracy);
	}
	static getDistanceFilter () {
		return this._object.getDistanceFilter();
	}
	static setDistanceFilter (distanceFilter) {
		return this._object.setDistanceFilter(distanceFilter);
	}
	static getHeadingFilter () {
		return this._object.getHeadingFilter();
	}
	static setHeadingFilter (headingFilter) {
		return this._object.setHeadingFilter(headingFilter);
	}
	static getHasCompass () {
		return this._object.getHasCompass();
	}
	static getLocationServicesAuthorization () {
		return this._object.getLocationServicesAuthorization();
	}
	static setLocationServicesAuthorization (locationServicesAuthorization) {
		return this._object.setLocationServicesAuthorization(locationServicesAuthorization);
	}
	static getLocationServicesEnabled () {
		return this._object.getLocationServicesEnabled();
	}
	static getLastGeolocation () {
		return this._object.getLastGeolocation();
	}

	// modules
};
Object.freeze(Geolocation);

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