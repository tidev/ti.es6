export { default as UserDefaults } from './iOS/UserDefaults';
import { default as UserDefaults } from './iOS/UserDefaults';
import { default as BackgroundService } from './iOS/BackgroundService';
import { default as LocalNotification } from './iOS/LocalNotification';
export { default as SearchQuery } from './iOS/SearchQuery';
import { default as SearchQuery } from './iOS/SearchQuery';
export { default as SearchableIndex } from './iOS/SearchableIndex';
import { default as SearchableIndex } from './iOS/SearchableIndex';
export { default as SearchableItem } from './iOS/SearchableItem';
import { default as SearchableItem } from './iOS/SearchableItem';
export { default as SearchableItemAttributeSet } from './iOS/SearchableItemAttributeSet';
import { default as SearchableItemAttributeSet } from './iOS/SearchableItemAttributeSet';
export { default as UserActivity } from './iOS/UserActivity';
import { default as UserActivity } from './iOS/UserActivity';
export { default as UserNotificationAction } from './iOS/UserNotificationAction';
import { default as UserNotificationAction } from './iOS/UserNotificationAction';
export { default as UserNotificationCategory } from './iOS/UserNotificationCategory';
import { default as UserNotificationCategory } from './iOS/UserNotificationCategory';

export default class iOS {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.App.iOS')) {
			this._object = object;
		} else {
			this._object = undefined;
		}
	}

	// constants
	static get apiName () {
		return Titanium.App.iOS.apiName;
	}
	static get EVENT_ACCESSIBILITY_LAYOUT_CHANGED () {
		return Titanium.App.iOS.EVENT_ACCESSIBILITY_LAYOUT_CHANGED;
	}
	static get EVENT_ACCESSIBILITY_SCREEN_CHANGED () {
		return Titanium.App.iOS.EVENT_ACCESSIBILITY_SCREEN_CHANGED;
	}
	static get BACKGROUNDFETCHINTERVAL_MIN () {
		return Titanium.App.iOS.BACKGROUNDFETCHINTERVAL_MIN;
	}
	static get BACKGROUNDFETCHINTERVAL_NEVER () {
		return Titanium.App.iOS.BACKGROUNDFETCHINTERVAL_NEVER;
	}
	static get USER_NOTIFICATION_TYPE_NONE () {
		return Titanium.App.iOS.USER_NOTIFICATION_TYPE_NONE;
	}
	static get USER_NOTIFICATION_TYPE_BADGE () {
		return Titanium.App.iOS.USER_NOTIFICATION_TYPE_BADGE;
	}
	static get USER_NOTIFICATION_TYPE_SOUND () {
		return Titanium.App.iOS.USER_NOTIFICATION_TYPE_SOUND;
	}
	static get USER_NOTIFICATION_TYPE_ALERT () {
		return Titanium.App.iOS.USER_NOTIFICATION_TYPE_ALERT;
	}
	static get USER_NOTIFICATION_ACTIVATION_MODE_BACKGROUND () {
		return Titanium.App.iOS.USER_NOTIFICATION_ACTIVATION_MODE_BACKGROUND;
	}
	static get USER_NOTIFICATION_ACTIVATION_MODE_FOREGROUND () {
		return Titanium.App.iOS.USER_NOTIFICATION_ACTIVATION_MODE_FOREGROUND;
	}
	static get USER_NOTIFICATION_BEHAVIOR_DEFAULT () {
		return Titanium.App.iOS.USER_NOTIFICATION_BEHAVIOR_DEFAULT;
	}
	static get USER_NOTIFICATION_BEHAVIOR_TEXTINPUT () {
		return Titanium.App.iOS.USER_NOTIFICATION_BEHAVIOR_TEXTINPUT;
	}
	static get UTTYPE_TEXT () {
		return Titanium.App.iOS.UTTYPE_TEXT;
	}
	static get UTTYPE_PLAIN_TEXT () {
		return Titanium.App.iOS.UTTYPE_PLAIN_TEXT;
	}
	static get UTTYPE_UTF8_PLAIN_TEXT () {
		return Titanium.App.iOS.UTTYPE_UTF8_PLAIN_TEXT;
	}
	static get UTTYPE_UTF16_EXTERNAL_PLAIN_TEXT () {
		return Titanium.App.iOS.UTTYPE_UTF16_EXTERNAL_PLAIN_TEXT;
	}
	static get UTTYPE_UTF16_PLAIN_TEXT () {
		return Titanium.App.iOS.UTTYPE_UTF16_PLAIN_TEXT;
	}
	static get UTTYPE_RTF () {
		return Titanium.App.iOS.UTTYPE_RTF;
	}
	static get UTTYPE_HTML () {
		return Titanium.App.iOS.UTTYPE_HTML;
	}
	static get UTTYPE_XML () {
		return Titanium.App.iOS.UTTYPE_XML;
	}
	static get UTTYPE_PDF () {
		return Titanium.App.iOS.UTTYPE_PDF;
	}
	static get UTTYPE_RTFD () {
		return Titanium.App.iOS.UTTYPE_RTFD;
	}
	static get UTTYPE_FLAT_RTFD () {
		return Titanium.App.iOS.UTTYPE_FLAT_RTFD;
	}
	static get UTTYPE_TXN_TEXT_AND_MULTIMEDIA_DATA () {
		return Titanium.App.iOS.UTTYPE_TXN_TEXT_AND_MULTIMEDIA_DATA;
	}
	static get UTTYPE_WEB_ARCHIVE () {
		return Titanium.App.iOS.UTTYPE_WEB_ARCHIVE;
	}
	static get UTTYPE_IMAGE () {
		return Titanium.App.iOS.UTTYPE_IMAGE;
	}
	static get UTTYPE_JPEG () {
		return Titanium.App.iOS.UTTYPE_JPEG;
	}
	static get UTTYPE_JPEG2000 () {
		return Titanium.App.iOS.UTTYPE_JPEG2000;
	}
	static get UTTYPE_TIFF () {
		return Titanium.App.iOS.UTTYPE_TIFF;
	}
	static get UTTYPE_PICT () {
		return Titanium.App.iOS.UTTYPE_PICT;
	}
	static get UTTYPE_GIF () {
		return Titanium.App.iOS.UTTYPE_GIF;
	}
	static get UTTYPE_PNG () {
		return Titanium.App.iOS.UTTYPE_PNG;
	}
	static get UTTYPE_QUICKTIME_IMAGE () {
		return Titanium.App.iOS.UTTYPE_QUICKTIME_IMAGE;
	}
	static get UTTYPE_APPLE_ICNS () {
		return Titanium.App.iOS.UTTYPE_APPLE_ICNS;
	}
	static get UTTYPE_BMP () {
		return Titanium.App.iOS.UTTYPE_BMP;
	}
	static get UTTYPE_ICO () {
		return Titanium.App.iOS.UTTYPE_ICO;
	}
	static get UTTYPE_MOVIE () {
		return Titanium.App.iOS.UTTYPE_MOVIE;
	}
	static get UTTYPE_VIDEO () {
		return Titanium.App.iOS.UTTYPE_VIDEO;
	}
	static get UTTYPE_AUDIO () {
		return Titanium.App.iOS.UTTYPE_AUDIO;
	}
	static get UTTYPE_QUICKTIME_MOVIE () {
		return Titanium.App.iOS.UTTYPE_QUICKTIME_MOVIE;
	}
	static get UTTYPE_MPEG () {
		return Titanium.App.iOS.UTTYPE_MPEG;
	}
	static get UTTYPE_MPEG4 () {
		return Titanium.App.iOS.UTTYPE_MPEG4;
	}
	static get UTTYPE_MP3 () {
		return Titanium.App.iOS.UTTYPE_MP3;
	}
	static get UTTYPE_MPEG4_AUDIO () {
		return Titanium.App.iOS.UTTYPE_MPEG4_AUDIO;
	}
	static get UTTYPE_APPLE_PROTECTED_MPEG4_AUDIO () {
		return Titanium.App.iOS.UTTYPE_APPLE_PROTECTED_MPEG4_AUDIO;
	}
	static get currentUserNotificationSettings () {
		return Titanium.App.iOS.currentUserNotificationSettings;
	}
	static get supportedUserActivityTypes () {
		return Titanium.App.iOS.supportedUserActivityTypes;
	}
	static get applicationOpenSettingsURL () {
		return Titanium.App.iOS.applicationOpenSettingsURL;
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
	get EVENT_ACCESSIBILITY_LAYOUT_CHANGED () {
		return this._object.EVENT_ACCESSIBILITY_LAYOUT_CHANGED;
	}
	get EVENT_ACCESSIBILITY_SCREEN_CHANGED () {
		return this._object.EVENT_ACCESSIBILITY_SCREEN_CHANGED;
	}
	get BACKGROUNDFETCHINTERVAL_MIN () {
		return this._object.BACKGROUNDFETCHINTERVAL_MIN;
	}
	get BACKGROUNDFETCHINTERVAL_NEVER () {
		return this._object.BACKGROUNDFETCHINTERVAL_NEVER;
	}
	get USER_NOTIFICATION_TYPE_NONE () {
		return this._object.USER_NOTIFICATION_TYPE_NONE;
	}
	get USER_NOTIFICATION_TYPE_BADGE () {
		return this._object.USER_NOTIFICATION_TYPE_BADGE;
	}
	get USER_NOTIFICATION_TYPE_SOUND () {
		return this._object.USER_NOTIFICATION_TYPE_SOUND;
	}
	get USER_NOTIFICATION_TYPE_ALERT () {
		return this._object.USER_NOTIFICATION_TYPE_ALERT;
	}
	get USER_NOTIFICATION_ACTIVATION_MODE_BACKGROUND () {
		return this._object.USER_NOTIFICATION_ACTIVATION_MODE_BACKGROUND;
	}
	get USER_NOTIFICATION_ACTIVATION_MODE_FOREGROUND () {
		return this._object.USER_NOTIFICATION_ACTIVATION_MODE_FOREGROUND;
	}
	get USER_NOTIFICATION_BEHAVIOR_DEFAULT () {
		return this._object.USER_NOTIFICATION_BEHAVIOR_DEFAULT;
	}
	get USER_NOTIFICATION_BEHAVIOR_TEXTINPUT () {
		return this._object.USER_NOTIFICATION_BEHAVIOR_TEXTINPUT;
	}
	get UTTYPE_TEXT () {
		return this._object.UTTYPE_TEXT;
	}
	get UTTYPE_PLAIN_TEXT () {
		return this._object.UTTYPE_PLAIN_TEXT;
	}
	get UTTYPE_UTF8_PLAIN_TEXT () {
		return this._object.UTTYPE_UTF8_PLAIN_TEXT;
	}
	get UTTYPE_UTF16_EXTERNAL_PLAIN_TEXT () {
		return this._object.UTTYPE_UTF16_EXTERNAL_PLAIN_TEXT;
	}
	get UTTYPE_UTF16_PLAIN_TEXT () {
		return this._object.UTTYPE_UTF16_PLAIN_TEXT;
	}
	get UTTYPE_RTF () {
		return this._object.UTTYPE_RTF;
	}
	get UTTYPE_HTML () {
		return this._object.UTTYPE_HTML;
	}
	get UTTYPE_XML () {
		return this._object.UTTYPE_XML;
	}
	get UTTYPE_PDF () {
		return this._object.UTTYPE_PDF;
	}
	get UTTYPE_RTFD () {
		return this._object.UTTYPE_RTFD;
	}
	get UTTYPE_FLAT_RTFD () {
		return this._object.UTTYPE_FLAT_RTFD;
	}
	get UTTYPE_TXN_TEXT_AND_MULTIMEDIA_DATA () {
		return this._object.UTTYPE_TXN_TEXT_AND_MULTIMEDIA_DATA;
	}
	get UTTYPE_WEB_ARCHIVE () {
		return this._object.UTTYPE_WEB_ARCHIVE;
	}
	get UTTYPE_IMAGE () {
		return this._object.UTTYPE_IMAGE;
	}
	get UTTYPE_JPEG () {
		return this._object.UTTYPE_JPEG;
	}
	get UTTYPE_JPEG2000 () {
		return this._object.UTTYPE_JPEG2000;
	}
	get UTTYPE_TIFF () {
		return this._object.UTTYPE_TIFF;
	}
	get UTTYPE_PICT () {
		return this._object.UTTYPE_PICT;
	}
	get UTTYPE_GIF () {
		return this._object.UTTYPE_GIF;
	}
	get UTTYPE_PNG () {
		return this._object.UTTYPE_PNG;
	}
	get UTTYPE_QUICKTIME_IMAGE () {
		return this._object.UTTYPE_QUICKTIME_IMAGE;
	}
	get UTTYPE_APPLE_ICNS () {
		return this._object.UTTYPE_APPLE_ICNS;
	}
	get UTTYPE_BMP () {
		return this._object.UTTYPE_BMP;
	}
	get UTTYPE_ICO () {
		return this._object.UTTYPE_ICO;
	}
	get UTTYPE_MOVIE () {
		return this._object.UTTYPE_MOVIE;
	}
	get UTTYPE_VIDEO () {
		return this._object.UTTYPE_VIDEO;
	}
	get UTTYPE_AUDIO () {
		return this._object.UTTYPE_AUDIO;
	}
	get UTTYPE_QUICKTIME_MOVIE () {
		return this._object.UTTYPE_QUICKTIME_MOVIE;
	}
	get UTTYPE_MPEG () {
		return this._object.UTTYPE_MPEG;
	}
	get UTTYPE_MPEG4 () {
		return this._object.UTTYPE_MPEG4;
	}
	get UTTYPE_MP3 () {
		return this._object.UTTYPE_MP3;
	}
	get UTTYPE_MPEG4_AUDIO () {
		return this._object.UTTYPE_MPEG4_AUDIO;
	}
	get UTTYPE_APPLE_PROTECTED_MPEG4_AUDIO () {
		return this._object.UTTYPE_APPLE_PROTECTED_MPEG4_AUDIO;
	}
	get currentUserNotificationSettings () {
		return this._object.currentUserNotificationSettings;
	}
	get supportedUserActivityTypes () {
		return this._object.supportedUserActivityTypes;
	}
	get applicationOpenSettingsURL () {
		return this._object.applicationOpenSettingsURL;
	}

	// static properties
	static get bubbleParent () {
		return Titanium.App.iOS.bubbleParent;
	}
	static set bubbleParent (value) {
		Titanium.App.iOS.bubbleParent = value;
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
	cancelAllLocalNotifications () {
		return this._object.cancelAllLocalNotifications();
	}
	cancelLocalNotification (id) {
		return this._object.cancelLocalNotification(id);
	}
	registerBackgroundService (params) {
		params = normalize(params);
		return new BackgroundService(this._object.registerBackgroundService(params));
	}
	registerUserNotificationSettings (params) {
		return this._object.registerUserNotificationSettings(params);
	}
	scheduleLocalNotification (params) {
		return new LocalNotification(this._object.scheduleLocalNotification(params));
	}
	setMinimumBackgroundFetchInterval (fetchInterval) {
		return this._object.setMinimumBackgroundFetchInterval(fetchInterval);
	}
	endBackgroundHandler (handlerID) {
		return this._object.endBackgroundHandler(handlerID);
	}
	sendWatchExtensionReply (handlerId, userInfo) {
		userInfo = normalize(userInfo);
		return this._object.sendWatchExtensionReply(handlerId, userInfo);
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
	getCurrentUserNotificationSettings () {
		return this._object.getCurrentUserNotificationSettings();
	}
	getSupportedUserActivityTypes () {
		return this._object.getSupportedUserActivityTypes();
	}
	getApplicationOpenSettingsURL () {
		return this._object.getApplicationOpenSettingsURL();
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
	static cancelAllLocalNotifications () {
		return this._object.cancelAllLocalNotifications();
	}
	static cancelLocalNotification (id) {
		return this._object.cancelLocalNotification(id);
	}
	static registerBackgroundService (params) {
		params = normalize(params);
		return new BackgroundService(this._object.registerBackgroundService(params));
	}
	static registerUserNotificationSettings (params) {
		return this._object.registerUserNotificationSettings(params);
	}
	static scheduleLocalNotification (params) {
		return new LocalNotification(this._object.scheduleLocalNotification(params));
	}
	static setMinimumBackgroundFetchInterval (fetchInterval) {
		return this._object.setMinimumBackgroundFetchInterval(fetchInterval);
	}
	static endBackgroundHandler (handlerID) {
		return this._object.endBackgroundHandler(handlerID);
	}
	static sendWatchExtensionReply (handlerId, userInfo) {
		userInfo = normalize(userInfo);
		return this._object.sendWatchExtensionReply(handlerId, userInfo);
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
	static getCurrentUserNotificationSettings () {
		return this._object.getCurrentUserNotificationSettings();
	}
	static getSupportedUserActivityTypes () {
		return this._object.getSupportedUserActivityTypes();
	}
	static getApplicationOpenSettingsURL () {
		return this._object.getApplicationOpenSettingsURL();
	}

	// modules
	static get UserDefaults () {
		return UserDefaults;
	}
	static get SearchQuery () {
		return SearchQuery;
	}
	static get SearchableIndex () {
		return SearchableIndex;
	}
	static get SearchableItem () {
		return SearchableItem;
	}
	static get SearchableItemAttributeSet () {
		return SearchableItemAttributeSet;
	}
	static get UserActivity () {
		return UserActivity;
	}
	static get UserNotificationAction () {
		return UserNotificationAction;
	}
	static get UserNotificationCategory () {
		return UserNotificationCategory;
	}
};
Object.freeze(iOS);

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