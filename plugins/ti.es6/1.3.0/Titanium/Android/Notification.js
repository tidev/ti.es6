import { default as Window } from './../UI/Window';
import { default as PendingIntent } from './PendingIntent';
import { default as RemoteViews } from './RemoteViews';
import { default as BigTextStyle } from './BigTextStyle';

export default class Notification {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.Android.Notification')) {
			this._object = object;
		} else {
			this._object = Titanium.Android.createNotification(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.Android.Notification.apiName;
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
	get audioStreamType () {
		return this._object.audioStreamType;
	}
	set audioStreamType (value) {
		this._object.audioStreamType = value;
	}
	get category () {
		return this._object.category;
	}
	set category (value) {
		this._object.category = value;
	}
	get contentIntent () {
		return new PendingIntent(this._object.contentIntent);
	}
	set contentIntent (value) {
		this._object.contentIntent = value;
	}
	get contentText () {
		return this._object.contentText;
	}
	set contentText (value) {
		this._object.contentText = value;
	}
	get contentTitle () {
		return this._object.contentTitle;
	}
	set contentTitle (value) {
		this._object.contentTitle = value;
	}
	get contentView () {
		return new RemoteViews(this._object.contentView);
	}
	set contentView (value) {
		this._object.contentView = value;
	}
	get defaults () {
		return this._object.defaults;
	}
	set defaults (value) {
		this._object.defaults = value;
	}
	get deleteIntent () {
		return new PendingIntent(this._object.deleteIntent);
	}
	set deleteIntent (value) {
		this._object.deleteIntent = value;
	}
	get flags () {
		return this._object.flags;
	}
	set flags (value) {
		this._object.flags = value;
	}
	get groupKey () {
		return this._object.groupKey;
	}
	set groupKey (value) {
		this._object.groupKey = value;
	}
	get groupSummary () {
		return this._object.groupSummary;
	}
	set groupSummary (value) {
		this._object.groupSummary = value;
	}
	get icon () {
		return this._object.icon;
	}
	set icon (value) {
		this._object.icon = value;
	}
	get largeIcon () {
		return this._object.largeIcon;
	}
	set largeIcon (value) {
		this._object.largeIcon = value;
	}
	get color () {
		return this._object.color;
	}
	set color (value) {
		this._object.color = value;
	}
	get ledARGB () {
		return this._object.ledARGB;
	}
	set ledARGB (value) {
		this._object.ledARGB = value;
	}
	get ledOffMS () {
		return this._object.ledOffMS;
	}
	set ledOffMS (value) {
		this._object.ledOffMS = value;
	}
	get ledOnMS () {
		return this._object.ledOnMS;
	}
	set ledOnMS (value) {
		this._object.ledOnMS = value;
	}
	get number () {
		return this._object.number;
	}
	set number (value) {
		this._object.number = value;
	}
	get priority () {
		return this._object.priority;
	}
	set priority (value) {
		this._object.priority = value;
	}
	get sound () {
		return this._object.sound;
	}
	set sound (value) {
		this._object.sound = value;
	}
	get style () {
		return new BigTextStyle(this._object.style);
	}
	set style (value) {
		this._object.style = value;
	}
	get tickerText () {
		return this._object.tickerText;
	}
	set tickerText (value) {
		this._object.tickerText = value;
	}
	get visibility () {
		return this._object.visibility;
	}
	set visibility (value) {
		this._object.visibility = value;
	}
	get wakeLock () {
		return this._object.wakeLock;
	}
	set wakeLock (value) {
		this._object.wakeLock = value;
	}
	get when () {
		return this._object.when;
	}
	set when (value) {
		this._object.when = value;
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
	setLatestEventInfo (contentTitle, contentText, contentIntent) {
		contentIntent = normalize(contentIntent);
		return this._object.setLatestEventInfo(contentTitle, contentText, contentIntent);
	}
	setProgress (max, progress, indeterminate) {
		return this._object.setProgress(max, progress, indeterminate);
	}
	addAction (icon, title, intent) {
		intent = normalize(intent);
		return this._object.addAction(icon, title, intent);
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
	getAudioStreamType () {
		return this._object.getAudioStreamType();
	}
	setAudioStreamType (audioStreamType) {
		return this._object.setAudioStreamType(audioStreamType);
	}
	getCategory () {
		return this._object.getCategory();
	}
	setCategory (category) {
		return this._object.setCategory(category);
	}
	getContentIntent () {
		return new PendingIntent(this._object.getContentIntent());
	}
	setContentIntent (contentIntent) {
		contentIntent = normalize(contentIntent);
		return this._object.setContentIntent(contentIntent);
	}
	getContentText () {
		return this._object.getContentText();
	}
	setContentText (contentText) {
		return this._object.setContentText(contentText);
	}
	getContentTitle () {
		return this._object.getContentTitle();
	}
	setContentTitle (contentTitle) {
		return this._object.setContentTitle(contentTitle);
	}
	setContentView (contentView) {
		contentView = normalize(contentView);
		return this._object.setContentView(contentView);
	}
	getDefaults () {
		return this._object.getDefaults();
	}
	setDefaults (defs) {
		return this._object.setDefaults(defs);
	}
	getDeleteIntent () {
		return new PendingIntent(this._object.getDeleteIntent());
	}
	setDeleteIntent (deleteIntent) {
		deleteIntent = normalize(deleteIntent);
		return this._object.setDeleteIntent(deleteIntent);
	}
	getFlags () {
		return this._object.getFlags();
	}
	setFlags (flags) {
		return this._object.setFlags(flags);
	}
	getGroupKey () {
		return this._object.getGroupKey();
	}
	setGroupKey (groupKey) {
		return this._object.setGroupKey(groupKey);
	}
	getGroupSummary () {
		return this._object.getGroupSummary();
	}
	setGroupSummary (groupSummary) {
		return this._object.setGroupSummary(groupSummary);
	}
	getIcon () {
		return this._object.getIcon();
	}
	setIcon (icon) {
		return this._object.setIcon(icon);
	}
	getLargeIcon () {
		return this._object.getLargeIcon();
	}
	setLargeIcon (largeIcon) {
		return this._object.setLargeIcon(largeIcon);
	}
	getColor () {
		return this._object.getColor();
	}
	setColor (color) {
		return this._object.setColor(color);
	}
	getLedARGB () {
		return this._object.getLedARGB();
	}
	setLedARGB (ledARGB) {
		return this._object.setLedARGB(ledARGB);
	}
	getLedOffMS () {
		return this._object.getLedOffMS();
	}
	setLedOffMS (ledOffMS) {
		return this._object.setLedOffMS(ledOffMS);
	}
	getLedOnMS () {
		return this._object.getLedOnMS();
	}
	setLedOnMS (ledOnMS) {
		return this._object.setLedOnMS(ledOnMS);
	}
	getNumber () {
		return this._object.getNumber();
	}
	setNumber (number) {
		return this._object.setNumber(number);
	}
	getPriority () {
		return this._object.getPriority();
	}
	setPriority (priority) {
		return this._object.setPriority(priority);
	}
	getSound () {
		return this._object.getSound();
	}
	setSound (sound) {
		return this._object.setSound(sound);
	}
	getStyle () {
		return new BigTextStyle(this._object.getStyle());
	}
	setStyle (style) {
		style = normalize(style);
		return this._object.setStyle(style);
	}
	getTickerText () {
		return this._object.getTickerText();
	}
	setTickerText (tickerText) {
		return this._object.setTickerText(tickerText);
	}
	getVisibility () {
		return this._object.getVisibility();
	}
	setVisibility (visibility) {
		return this._object.setVisibility(visibility);
	}
	getWakeLock () {
		return this._object.getWakeLock();
	}
	setWakeLock (wakeLock) {
		return this._object.setWakeLock(wakeLock);
	}
	getWhen () {
		return this._object.getWhen();
	}
	setWhen (when) {
		return this._object.setWhen(when);
	}

	// modules
};
Object.freeze(Notification);

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