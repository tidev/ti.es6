import { default as Window } from './UI/Window';
import { default as R } from './Android/R';
import { default as Activity } from './Android/Activity';
export { default as Service } from './Android/Service';
import { default as Service } from './Android/Service';
export { default as Intent } from './Android/Intent';
import { default as Intent } from './Android/Intent';
export { default as PendingIntent } from './Android/PendingIntent';
import { default as PendingIntent } from './Android/PendingIntent';
export { default as DrawerLayout } from './UI/Android/DrawerLayout';
import { default as DrawerLayout } from './UI/Android/DrawerLayout';
export { default as BigPictureStyle } from './Android/BigPictureStyle';
import { default as BigPictureStyle } from './Android/BigPictureStyle';
export { default as BigTextStyle } from './Android/BigTextStyle';
import { default as BigTextStyle } from './Android/BigTextStyle';
export { default as BroadcastReceiver } from './Android/BroadcastReceiver';
import { default as BroadcastReceiver } from './Android/BroadcastReceiver';
export { default as Notification } from './Android/Notification';
import { default as Notification } from './Android/Notification';
export { default as NotificationChannel } from './Android/NotificationChannel';
import { default as NotificationChannel } from './Android/NotificationChannel';
export { default as QuickSettingsService } from './Android/QuickSettingsService';
import { default as QuickSettingsService } from './Android/QuickSettingsService';
export { default as RemoteViews } from './Android/RemoteViews';
import { default as RemoteViews } from './Android/RemoteViews';

export default class Android {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.Android')) {
			this._object = object;
		} else {
			this._object = undefined;
		}
	}

	// constants
	static get apiName () {
		return Titanium.Android.apiName;
	}
	static get ACTION_AIRPLANE_MODE_CHANGED () {
		return Titanium.Android.ACTION_AIRPLANE_MODE_CHANGED;
	}
	static get ACTION_ALL_APPS () {
		return Titanium.Android.ACTION_ALL_APPS;
	}
	static get ACTION_ANSWER () {
		return Titanium.Android.ACTION_ANSWER;
	}
	static get ACTION_ATTACH_DATA () {
		return Titanium.Android.ACTION_ATTACH_DATA;
	}
	static get ACTION_BATTERY_CHANGED () {
		return Titanium.Android.ACTION_BATTERY_CHANGED;
	}
	static get ACTION_BATTERY_LOW () {
		return Titanium.Android.ACTION_BATTERY_LOW;
	}
	static get ACTION_BATTERY_OKAY () {
		return Titanium.Android.ACTION_BATTERY_OKAY;
	}
	static get ACTION_BOOT_COMPLETED () {
		return Titanium.Android.ACTION_BOOT_COMPLETED;
	}
	static get ACTION_BUG_REPORT () {
		return Titanium.Android.ACTION_BUG_REPORT;
	}
	static get ACTION_CALL () {
		return Titanium.Android.ACTION_CALL;
	}
	static get ACTION_CALL_BUTTON () {
		return Titanium.Android.ACTION_CALL_BUTTON;
	}
	static get ACTION_CAMERA_BUTTON () {
		return Titanium.Android.ACTION_CAMERA_BUTTON;
	}
	static get ACTION_CHOOSER () {
		return Titanium.Android.ACTION_CHOOSER;
	}
	static get ACTION_CLOSE_SYSTEM_DIALOGS () {
		return Titanium.Android.ACTION_CLOSE_SYSTEM_DIALOGS;
	}
	static get ACTION_CONFIGURATION_CHANGED () {
		return Titanium.Android.ACTION_CONFIGURATION_CHANGED;
	}
	static get ACTION_CREATE_SHORTCUT () {
		return Titanium.Android.ACTION_CREATE_SHORTCUT;
	}
	static get ACTION_DATE_CHANGED () {
		return Titanium.Android.ACTION_DATE_CHANGED;
	}
	static get ACTION_DEFAULT () {
		return Titanium.Android.ACTION_DEFAULT;
	}
	static get ACTION_DELETE () {
		return Titanium.Android.ACTION_DELETE;
	}
	static get ACTION_DEVICE_STORAGE_LOW () {
		return Titanium.Android.ACTION_DEVICE_STORAGE_LOW;
	}
	static get ACTION_DIAL () {
		return Titanium.Android.ACTION_DIAL;
	}
	static get ACTION_EDIT () {
		return Titanium.Android.ACTION_EDIT;
	}
	static get ACTION_GET_CONTENT () {
		return Titanium.Android.ACTION_GET_CONTENT;
	}
	static get ACTION_GTALK_SERVICE_CONNECTED () {
		return Titanium.Android.ACTION_GTALK_SERVICE_CONNECTED;
	}
	static get ACTION_GTALK_SERVICE_DISCONNECTED () {
		return Titanium.Android.ACTION_GTALK_SERVICE_DISCONNECTED;
	}
	static get ACTION_HEADSET_PLUG () {
		return Titanium.Android.ACTION_HEADSET_PLUG;
	}
	static get ACTION_INPUT_METHOD_CHANGED () {
		return Titanium.Android.ACTION_INPUT_METHOD_CHANGED;
	}
	static get ACTION_INSERT () {
		return Titanium.Android.ACTION_INSERT;
	}
	static get ACTION_INSERT_OR_EDIT () {
		return Titanium.Android.ACTION_INSERT_OR_EDIT;
	}
	static get ACTION_MAIN () {
		return Titanium.Android.ACTION_MAIN;
	}
	static get ACTION_MANAGE_PACKAGE_STORAGE () {
		return Titanium.Android.ACTION_MANAGE_PACKAGE_STORAGE;
	}
	static get ACTION_MEDIA_BAD_REMOVAL () {
		return Titanium.Android.ACTION_MEDIA_BAD_REMOVAL;
	}
	static get ACTION_MEDIA_BUTTON () {
		return Titanium.Android.ACTION_MEDIA_BUTTON;
	}
	static get ACTION_MEDIA_CHECKING () {
		return Titanium.Android.ACTION_MEDIA_CHECKING;
	}
	static get ACTION_MEDIA_EJECT () {
		return Titanium.Android.ACTION_MEDIA_EJECT;
	}
	static get ACTION_MEDIA_MOUNTED () {
		return Titanium.Android.ACTION_MEDIA_MOUNTED;
	}
	static get ACTION_MEDIA_NOFS () {
		return Titanium.Android.ACTION_MEDIA_NOFS;
	}
	static get ACTION_MEDIA_REMOVED () {
		return Titanium.Android.ACTION_MEDIA_REMOVED;
	}
	static get ACTION_MEDIA_SCANNER_FINISHED () {
		return Titanium.Android.ACTION_MEDIA_SCANNER_FINISHED;
	}
	static get ACTION_MEDIA_SCANNER_SCAN_FILE () {
		return Titanium.Android.ACTION_MEDIA_SCANNER_SCAN_FILE;
	}
	static get ACTION_MEDIA_SCANNER_STARTED () {
		return Titanium.Android.ACTION_MEDIA_SCANNER_STARTED;
	}
	static get ACTION_MEDIA_SHARED () {
		return Titanium.Android.ACTION_MEDIA_SHARED;
	}
	static get ACTION_MEDIA_UNMOUNTABLE () {
		return Titanium.Android.ACTION_MEDIA_UNMOUNTABLE;
	}
	static get ACTION_MEDIA_UNMOUNTED () {
		return Titanium.Android.ACTION_MEDIA_UNMOUNTED;
	}
	static get ACTION_NEW_OUTGOING_CALL () {
		return Titanium.Android.ACTION_NEW_OUTGOING_CALL;
	}
	static get ACTION_PACKAGE_ADDED () {
		return Titanium.Android.ACTION_PACKAGE_ADDED;
	}
	static get ACTION_PACKAGE_CHANGED () {
		return Titanium.Android.ACTION_PACKAGE_CHANGED;
	}
	static get ACTION_PACKAGE_DATA_CLEARED () {
		return Titanium.Android.ACTION_PACKAGE_DATA_CLEARED;
	}
	static get ACTION_PACKAGE_INSTALL () {
		return Titanium.Android.ACTION_PACKAGE_INSTALL;
	}
	static get ACTION_PACKAGE_REMOVED () {
		return Titanium.Android.ACTION_PACKAGE_REMOVED;
	}
	static get ACTION_PACKAGE_REPLACED () {
		return Titanium.Android.ACTION_PACKAGE_REPLACED;
	}
	static get ACTION_PACKAGE_RESTARTED () {
		return Titanium.Android.ACTION_PACKAGE_RESTARTED;
	}
	static get ACTION_PICK () {
		return Titanium.Android.ACTION_PICK;
	}
	static get ACTION_PICK_ACTIVITY () {
		return Titanium.Android.ACTION_PICK_ACTIVITY;
	}
	static get ACTION_POWER_CONNECTED () {
		return Titanium.Android.ACTION_POWER_CONNECTED;
	}
	static get ACTION_POWER_DISCONNECTED () {
		return Titanium.Android.ACTION_POWER_DISCONNECTED;
	}
	static get ACTION_POWER_USAGE_SUMMARY () {
		return Titanium.Android.ACTION_POWER_USAGE_SUMMARY;
	}
	static get ACTION_PROVIDER_CHANGED () {
		return Titanium.Android.ACTION_PROVIDER_CHANGED;
	}
	static get ACTION_REBOOT () {
		return Titanium.Android.ACTION_REBOOT;
	}
	static get ACTION_RUN () {
		return Titanium.Android.ACTION_RUN;
	}
	static get ACTION_SCREEN_OFF () {
		return Titanium.Android.ACTION_SCREEN_OFF;
	}
	static get ACTION_SCREEN_ON () {
		return Titanium.Android.ACTION_SCREEN_ON;
	}
	static get ACTION_SEARCH () {
		return Titanium.Android.ACTION_SEARCH;
	}
	static get ACTION_SEARCH_LONG_PRESS () {
		return Titanium.Android.ACTION_SEARCH_LONG_PRESS;
	}
	static get ACTION_SEND () {
		return Titanium.Android.ACTION_SEND;
	}
	static get ACTION_SENDTO () {
		return Titanium.Android.ACTION_SENDTO;
	}
	static get ACTION_SEND_MULTIPLE () {
		return Titanium.Android.ACTION_SEND_MULTIPLE;
	}
	static get ACTION_SET_WALLPAPER () {
		return Titanium.Android.ACTION_SET_WALLPAPER;
	}
	static get ACTION_SHUTDOWN () {
		return Titanium.Android.ACTION_SHUTDOWN;
	}
	static get ACTION_SYNC () {
		return Titanium.Android.ACTION_SYNC;
	}
	static get ACTION_SYSTEM_TUTORIAL () {
		return Titanium.Android.ACTION_SYSTEM_TUTORIAL;
	}
	static get ACTION_TIME_CHANGED () {
		return Titanium.Android.ACTION_TIME_CHANGED;
	}
	static get ACTION_TIME_TICK () {
		return Titanium.Android.ACTION_TIME_TICK;
	}
	static get ACTION_UID_REMOVED () {
		return Titanium.Android.ACTION_UID_REMOVED;
	}
	static get ACTION_UMS_CONNECTED () {
		return Titanium.Android.ACTION_UMS_CONNECTED;
	}
	static get ACTION_UMS_DISCONNECTED () {
		return Titanium.Android.ACTION_UMS_DISCONNECTED;
	}
	static get ACTION_USER_PRESENT () {
		return Titanium.Android.ACTION_USER_PRESENT;
	}
	static get ACTION_VIEW () {
		return Titanium.Android.ACTION_VIEW;
	}
	static get ACTION_VOICE_COMMAND () {
		return Titanium.Android.ACTION_VOICE_COMMAND;
	}
	static get ACTION_WALLPAPER_CHANGED () {
		return Titanium.Android.ACTION_WALLPAPER_CHANGED;
	}
	static get ACTION_WEB_SEARCH () {
		return Titanium.Android.ACTION_WEB_SEARCH;
	}
	static get CATEGORY_ALTERNATIVE () {
		return Titanium.Android.CATEGORY_ALTERNATIVE;
	}
	static get CATEGORY_BROWSABLE () {
		return Titanium.Android.CATEGORY_BROWSABLE;
	}
	static get CATEGORY_DEFAULT () {
		return Titanium.Android.CATEGORY_DEFAULT;
	}
	static get CATEGORY_DEVELOPMENT_PREFERENCE () {
		return Titanium.Android.CATEGORY_DEVELOPMENT_PREFERENCE;
	}
	static get CATEGORY_EMBED () {
		return Titanium.Android.CATEGORY_EMBED;
	}
	static get CATEGORY_FRAMEWORK_INSTRUMENTATION_TEST () {
		return Titanium.Android.CATEGORY_FRAMEWORK_INSTRUMENTATION_TEST;
	}
	static get CATEGORY_HOME () {
		return Titanium.Android.CATEGORY_HOME;
	}
	static get CATEGORY_INFO () {
		return Titanium.Android.CATEGORY_INFO;
	}
	static get CATEGORY_LAUNCHER () {
		return Titanium.Android.CATEGORY_LAUNCHER;
	}
	static get CATEGORY_MONKEY () {
		return Titanium.Android.CATEGORY_MONKEY;
	}
	static get CATEGORY_OPENABLE () {
		return Titanium.Android.CATEGORY_OPENABLE;
	}
	static get CATEGORY_PREFERENCE () {
		return Titanium.Android.CATEGORY_PREFERENCE;
	}
	static get CATEGORY_SAMPLE_CODE () {
		return Titanium.Android.CATEGORY_SAMPLE_CODE;
	}
	static get CATEGORY_SELECTED_ALTERNATIVE () {
		return Titanium.Android.CATEGORY_SELECTED_ALTERNATIVE;
	}
	static get CATEGORY_TAB () {
		return Titanium.Android.CATEGORY_TAB;
	}
	static get CATEGORY_TEST () {
		return Titanium.Android.CATEGORY_TEST;
	}
	static get CATEGORY_UNIT_TEST () {
		return Titanium.Android.CATEGORY_UNIT_TEST;
	}
	static get EXTRA_ALARM_COUNT () {
		return Titanium.Android.EXTRA_ALARM_COUNT;
	}
	static get EXTRA_BCC () {
		return Titanium.Android.EXTRA_BCC;
	}
	static get EXTRA_CC () {
		return Titanium.Android.EXTRA_CC;
	}
	static get EXTRA_DATA_REMOVED () {
		return Titanium.Android.EXTRA_DATA_REMOVED;
	}
	static get EXTRA_DONT_KILL_APP () {
		return Titanium.Android.EXTRA_DONT_KILL_APP;
	}
	static get EXTRA_EMAIL () {
		return Titanium.Android.EXTRA_EMAIL;
	}
	static get EXTRA_INTENT () {
		return Titanium.Android.EXTRA_INTENT;
	}
	static get EXTRA_KEY_EVENT () {
		return Titanium.Android.EXTRA_KEY_EVENT;
	}
	static get EXTRA_PHONE_NUMBER () {
		return Titanium.Android.EXTRA_PHONE_NUMBER;
	}
	static get EXTRA_REPLACING () {
		return Titanium.Android.EXTRA_REPLACING;
	}
	static get EXTRA_SHORTCUT_ICON () {
		return Titanium.Android.EXTRA_SHORTCUT_ICON;
	}
	static get EXTRA_SHORTCUT_ICON_RESOURCE () {
		return Titanium.Android.EXTRA_SHORTCUT_ICON_RESOURCE;
	}
	static get EXTRA_SHORTCUT_INTENT () {
		return Titanium.Android.EXTRA_SHORTCUT_INTENT;
	}
	static get EXTRA_SHORTCUT_NAME () {
		return Titanium.Android.EXTRA_SHORTCUT_NAME;
	}
	static get EXTRA_STREAM () {
		return Titanium.Android.EXTRA_STREAM;
	}
	static get EXTRA_SUBJECT () {
		return Titanium.Android.EXTRA_SUBJECT;
	}
	static get EXTRA_TEMPLATE () {
		return Titanium.Android.EXTRA_TEMPLATE;
	}
	static get EXTRA_TEXT () {
		return Titanium.Android.EXTRA_TEXT;
	}
	static get EXTRA_TITLE () {
		return Titanium.Android.EXTRA_TITLE;
	}
	static get EXTRA_UID () {
		return Titanium.Android.EXTRA_UID;
	}
	static get FILL_IN_ACTION () {
		return Titanium.Android.FILL_IN_ACTION;
	}
	static get FILL_IN_CATEGORIES () {
		return Titanium.Android.FILL_IN_CATEGORIES;
	}
	static get FILL_IN_COMPONENT () {
		return Titanium.Android.FILL_IN_COMPONENT;
	}
	static get FILL_IN_DATA () {
		return Titanium.Android.FILL_IN_DATA;
	}
	static get FILL_IN_PACKAGE () {
		return Titanium.Android.FILL_IN_PACKAGE;
	}
	static get FLAG_ACTIVITY_BROUGHT_TO_FRONT () {
		return Titanium.Android.FLAG_ACTIVITY_BROUGHT_TO_FRONT;
	}
	static get FLAG_ACTIVITY_CLEAR_TOP () {
		return Titanium.Android.FLAG_ACTIVITY_CLEAR_TOP;
	}
	static get FLAG_ACTIVITY_CLEAR_WHEN_TASK_RESET () {
		return Titanium.Android.FLAG_ACTIVITY_CLEAR_WHEN_TASK_RESET;
	}
	static get FLAG_ACTIVITY_EXCLUDE_FROM_RECENTS () {
		return Titanium.Android.FLAG_ACTIVITY_EXCLUDE_FROM_RECENTS;
	}
	static get FLAG_ACTIVITY_FORWARD_RESULT () {
		return Titanium.Android.FLAG_ACTIVITY_FORWARD_RESULT;
	}
	static get FLAG_ACTIVITY_LAUNCHED_FROM_HISTORY () {
		return Titanium.Android.FLAG_ACTIVITY_LAUNCHED_FROM_HISTORY;
	}
	static get FLAG_ACTIVITY_MULTIPLE_TASK () {
		return Titanium.Android.FLAG_ACTIVITY_MULTIPLE_TASK;
	}
	static get FLAG_ACTIVITY_NEW_TASK () {
		return Titanium.Android.FLAG_ACTIVITY_NEW_TASK;
	}
	static get FLAG_ACTIVITY_NO_ANIMATION () {
		return Titanium.Android.FLAG_ACTIVITY_NO_ANIMATION;
	}
	static get FLAG_ACTIVITY_NO_HISTORY () {
		return Titanium.Android.FLAG_ACTIVITY_NO_HISTORY;
	}
	static get FLAG_ACTIVITY_NO_USER_ACTION () {
		return Titanium.Android.FLAG_ACTIVITY_NO_USER_ACTION;
	}
	static get FLAG_ACTIVITY_PREVIOUS_IS_TOP () {
		return Titanium.Android.FLAG_ACTIVITY_PREVIOUS_IS_TOP;
	}
	static get FLAG_ACTIVITY_REORDER_TO_FRONT () {
		return Titanium.Android.FLAG_ACTIVITY_REORDER_TO_FRONT;
	}
	static get FLAG_ACTIVITY_RESET_TASK_IF_NEEDED () {
		return Titanium.Android.FLAG_ACTIVITY_RESET_TASK_IF_NEEDED;
	}
	static get FLAG_ACTIVITY_SINGLE_TOP () {
		return Titanium.Android.FLAG_ACTIVITY_SINGLE_TOP;
	}
	static get FLAG_DEBUG_LOG_RESOLUTION () {
		return Titanium.Android.FLAG_DEBUG_LOG_RESOLUTION;
	}
	static get FLAG_FROM_BACKGROUND () {
		return Titanium.Android.FLAG_FROM_BACKGROUND;
	}
	static get FLAG_GRANT_READ_URI_PERMISSION () {
		return Titanium.Android.FLAG_GRANT_READ_URI_PERMISSION;
	}
	static get FLAG_GRANT_WRITE_URI_PERMISSION () {
		return Titanium.Android.FLAG_GRANT_WRITE_URI_PERMISSION;
	}
	static get FLAG_RECEIVER_REGISTERED_ONLY () {
		return Titanium.Android.FLAG_RECEIVER_REGISTERED_ONLY;
	}
	static get FLAG_CANCEL_CURRENT () {
		return Titanium.Android.FLAG_CANCEL_CURRENT;
	}
	static get FLAG_NO_CREATE () {
		return Titanium.Android.FLAG_NO_CREATE;
	}
	static get FLAG_ONE_SHOT () {
		return Titanium.Android.FLAG_ONE_SHOT;
	}
	static get FLAG_UPDATE_CURRENT () {
		return Titanium.Android.FLAG_UPDATE_CURRENT;
	}
	static get CATEGORY_ALARM () {
		return Titanium.Android.CATEGORY_ALARM;
	}
	static get CATEGORY_CALL () {
		return Titanium.Android.CATEGORY_CALL;
	}
	static get CATEGORY_EMAIL () {
		return Titanium.Android.CATEGORY_EMAIL;
	}
	static get CATEGORY_ERROR () {
		return Titanium.Android.CATEGORY_ERROR;
	}
	static get CATEGORY_EVENT () {
		return Titanium.Android.CATEGORY_EVENT;
	}
	static get CATEGORY_MESSAGE () {
		return Titanium.Android.CATEGORY_MESSAGE;
	}
	static get CATEGORY_PROGRESS () {
		return Titanium.Android.CATEGORY_PROGRESS;
	}
	static get CATEGORY_PROMO () {
		return Titanium.Android.CATEGORY_PROMO;
	}
	static get CATEGORY_RECOMMENDATION () {
		return Titanium.Android.CATEGORY_RECOMMENDATION;
	}
	static get CATEGORY_SERVICE () {
		return Titanium.Android.CATEGORY_SERVICE;
	}
	static get CATEGORY_SOCIAL () {
		return Titanium.Android.CATEGORY_SOCIAL;
	}
	static get CATEGORY_STATUS () {
		return Titanium.Android.CATEGORY_STATUS;
	}
	static get CATEGORY_TRANSPORT () {
		return Titanium.Android.CATEGORY_TRANSPORT;
	}
	static get DEFAULT_ALL () {
		return Titanium.Android.DEFAULT_ALL;
	}
	static get DEFAULT_LIGHTS () {
		return Titanium.Android.DEFAULT_LIGHTS;
	}
	static get DEFAULT_SOUND () {
		return Titanium.Android.DEFAULT_SOUND;
	}
	static get DEFAULT_VIBRATE () {
		return Titanium.Android.DEFAULT_VIBRATE;
	}
	static get FLAG_AUTO_CANCEL () {
		return Titanium.Android.FLAG_AUTO_CANCEL;
	}
	static get FLAG_INSISTENT () {
		return Titanium.Android.FLAG_INSISTENT;
	}
	static get FLAG_NO_CLEAR () {
		return Titanium.Android.FLAG_NO_CLEAR;
	}
	static get FLAG_ONGOING_EVENT () {
		return Titanium.Android.FLAG_ONGOING_EVENT;
	}
	static get FLAG_ONLY_ALERT_ONCE () {
		return Titanium.Android.FLAG_ONLY_ALERT_ONCE;
	}
	static get FLAG_SHOW_LIGHTS () {
		return Titanium.Android.FLAG_SHOW_LIGHTS;
	}
	static get PRIORITY_MAX () {
		return Titanium.Android.PRIORITY_MAX;
	}
	static get PRIORITY_HIGH () {
		return Titanium.Android.PRIORITY_HIGH;
	}
	static get PRIORITY_DEFAULT () {
		return Titanium.Android.PRIORITY_DEFAULT;
	}
	static get PRIORITY_LOW () {
		return Titanium.Android.PRIORITY_LOW;
	}
	static get PRIORITY_MIN () {
		return Titanium.Android.PRIORITY_MIN;
	}
	static get VISIBILITY_PRIVATE () {
		return Titanium.Android.VISIBILITY_PRIVATE;
	}
	static get VISIBILITY_PUBLIC () {
		return Titanium.Android.VISIBILITY_PUBLIC;
	}
	static get VISIBILITY_SECRET () {
		return Titanium.Android.VISIBILITY_SECRET;
	}
	static get TILE_STATE_UNAVAILABLE () {
		return Titanium.Android.TILE_STATE_UNAVAILABLE;
	}
	static get TILE_STATE_INACTIVE () {
		return Titanium.Android.TILE_STATE_INACTIVE;
	}
	static get TILE_STATE_ACTIVE () {
		return Titanium.Android.TILE_STATE_ACTIVE;
	}
	static get WAKE_LOCK_PARTIAL () {
		return Titanium.Android.WAKE_LOCK_PARTIAL;
	}
	static get WAKE_LOCK_FULL () {
		return Titanium.Android.WAKE_LOCK_FULL;
	}
	static get WAKE_LOCK_SCREEN_DIM () {
		return Titanium.Android.WAKE_LOCK_SCREEN_DIM;
	}
	static get WAKE_LOCK_SCREEN_BRIGHT () {
		return Titanium.Android.WAKE_LOCK_SCREEN_BRIGHT;
	}
	static get WAKE_LOCK_ACQUIRE_CAUSES_WAKEUP () {
		return Titanium.Android.WAKE_LOCK_ACQUIRE_CAUSES_WAKEUP;
	}
	static get WAKE_LOCK_ON_AFTER_RELEASE () {
		return Titanium.Android.WAKE_LOCK_ON_AFTER_RELEASE;
	}
	static get PENDING_INTENT_FOR_ACTIVITY () {
		return Titanium.Android.PENDING_INTENT_FOR_ACTIVITY;
	}
	static get PENDING_INTENT_FOR_BROADCAST () {
		return Titanium.Android.PENDING_INTENT_FOR_BROADCAST;
	}
	static get PENDING_INTENT_FOR_SERVICE () {
		return Titanium.Android.PENDING_INTENT_FOR_SERVICE;
	}
	static get PENDING_INTENT_MAX_VALUE () {
		return Titanium.Android.PENDING_INTENT_MAX_VALUE;
	}
	static get R () {
		return new R(Titanium.Android.R);
	}
	static get RESULT_CANCELED () {
		return Titanium.Android.RESULT_CANCELED;
	}
	static get RESULT_FIRST_USER () {
		return Titanium.Android.RESULT_FIRST_USER;
	}
	static get RESULT_OK () {
		return Titanium.Android.RESULT_OK;
	}
	static get SCREEN_ORIENTATION_BEHIND () {
		return Titanium.Android.SCREEN_ORIENTATION_BEHIND;
	}
	static get SCREEN_ORIENTATION_LANDSCAPE () {
		return Titanium.Android.SCREEN_ORIENTATION_LANDSCAPE;
	}
	static get SCREEN_ORIENTATION_NOSENSOR () {
		return Titanium.Android.SCREEN_ORIENTATION_NOSENSOR;
	}
	static get SCREEN_ORIENTATION_PORTRAIT () {
		return Titanium.Android.SCREEN_ORIENTATION_PORTRAIT;
	}
	static get SCREEN_ORIENTATION_SENSOR () {
		return Titanium.Android.SCREEN_ORIENTATION_SENSOR;
	}
	static get SCREEN_ORIENTATION_UNSPECIFIED () {
		return Titanium.Android.SCREEN_ORIENTATION_UNSPECIFIED;
	}
	static get SCREEN_ORIENTATION_USER () {
		return Titanium.Android.SCREEN_ORIENTATION_USER;
	}
	static get SHOW_AS_ACTION_ALWAYS () {
		return Titanium.Android.SHOW_AS_ACTION_ALWAYS;
	}
	static get SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW () {
		return Titanium.Android.SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW;
	}
	static get SHOW_AS_ACTION_IF_ROOM () {
		return Titanium.Android.SHOW_AS_ACTION_IF_ROOM;
	}
	static get SHOW_AS_ACTION_NEVER () {
		return Titanium.Android.SHOW_AS_ACTION_NEVER;
	}
	static get SHOW_AS_ACTION_WITH_TEXT () {
		return Titanium.Android.SHOW_AS_ACTION_WITH_TEXT;
	}
	static get NAVIGATION_MODE_STANDARD () {
		return Titanium.Android.NAVIGATION_MODE_STANDARD;
	}
	static get NAVIGATION_MODE_TABS () {
		return Titanium.Android.NAVIGATION_MODE_TABS;
	}
	static get START_NOT_STICKY () {
		return Titanium.Android.START_NOT_STICKY;
	}
	static get START_REDELIVER_INTENT () {
		return Titanium.Android.START_REDELIVER_INTENT;
	}
	static get STREAM_ALARM () {
		return Titanium.Android.STREAM_ALARM;
	}
	static get STREAM_DEFAULT () {
		return Titanium.Android.STREAM_DEFAULT;
	}
	static get STREAM_MUSIC () {
		return Titanium.Android.STREAM_MUSIC;
	}
	static get STREAM_NOTIFICATION () {
		return Titanium.Android.STREAM_NOTIFICATION;
	}
	static get STREAM_RING () {
		return Titanium.Android.STREAM_RING;
	}
	static get STREAM_SYSTEM () {
		return Titanium.Android.STREAM_SYSTEM;
	}
	static get STREAM_VOICE_CALL () {
		return Titanium.Android.STREAM_VOICE_CALL;
	}
	static get URI_INTENT_SCHEME () {
		return Titanium.Android.URI_INTENT_SCHEME;
	}
	static get IMPORTANCE_DEFAULT () {
		return Titanium.Android.IMPORTANCE_DEFAULT;
	}
	static get IMPORTANCE_HIGH () {
		return Titanium.Android.IMPORTANCE_HIGH;
	}
	static get IMPORTANCE_LOW () {
		return Titanium.Android.IMPORTANCE_LOW;
	}
	static get IMPORTANCE_MAX () {
		return Titanium.Android.IMPORTANCE_MAX;
	}
	static get IMPORTANCE_MIN () {
		return Titanium.Android.IMPORTANCE_MIN;
	}
	static get IMPORTANCE_NONE () {
		return Titanium.Android.IMPORTANCE_NONE;
	}
	static get IMPORTANCE_UNSPECIFIED () {
		return Titanium.Android.IMPORTANCE_UNSPECIFIED;
	}
	static get currentActivity () {
		return new Activity(Titanium.Android.currentActivity);
	}
	static get currentService () {
		return new Service(Titanium.Android.currentService);
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
	get ACTION_AIRPLANE_MODE_CHANGED () {
		return this._object.ACTION_AIRPLANE_MODE_CHANGED;
	}
	get ACTION_ALL_APPS () {
		return this._object.ACTION_ALL_APPS;
	}
	get ACTION_ANSWER () {
		return this._object.ACTION_ANSWER;
	}
	get ACTION_ATTACH_DATA () {
		return this._object.ACTION_ATTACH_DATA;
	}
	get ACTION_BATTERY_CHANGED () {
		return this._object.ACTION_BATTERY_CHANGED;
	}
	get ACTION_BATTERY_LOW () {
		return this._object.ACTION_BATTERY_LOW;
	}
	get ACTION_BATTERY_OKAY () {
		return this._object.ACTION_BATTERY_OKAY;
	}
	get ACTION_BOOT_COMPLETED () {
		return this._object.ACTION_BOOT_COMPLETED;
	}
	get ACTION_BUG_REPORT () {
		return this._object.ACTION_BUG_REPORT;
	}
	get ACTION_CALL () {
		return this._object.ACTION_CALL;
	}
	get ACTION_CALL_BUTTON () {
		return this._object.ACTION_CALL_BUTTON;
	}
	get ACTION_CAMERA_BUTTON () {
		return this._object.ACTION_CAMERA_BUTTON;
	}
	get ACTION_CHOOSER () {
		return this._object.ACTION_CHOOSER;
	}
	get ACTION_CLOSE_SYSTEM_DIALOGS () {
		return this._object.ACTION_CLOSE_SYSTEM_DIALOGS;
	}
	get ACTION_CONFIGURATION_CHANGED () {
		return this._object.ACTION_CONFIGURATION_CHANGED;
	}
	get ACTION_CREATE_SHORTCUT () {
		return this._object.ACTION_CREATE_SHORTCUT;
	}
	get ACTION_DATE_CHANGED () {
		return this._object.ACTION_DATE_CHANGED;
	}
	get ACTION_DEFAULT () {
		return this._object.ACTION_DEFAULT;
	}
	get ACTION_DELETE () {
		return this._object.ACTION_DELETE;
	}
	get ACTION_DEVICE_STORAGE_LOW () {
		return this._object.ACTION_DEVICE_STORAGE_LOW;
	}
	get ACTION_DIAL () {
		return this._object.ACTION_DIAL;
	}
	get ACTION_EDIT () {
		return this._object.ACTION_EDIT;
	}
	get ACTION_GET_CONTENT () {
		return this._object.ACTION_GET_CONTENT;
	}
	get ACTION_GTALK_SERVICE_CONNECTED () {
		return this._object.ACTION_GTALK_SERVICE_CONNECTED;
	}
	get ACTION_GTALK_SERVICE_DISCONNECTED () {
		return this._object.ACTION_GTALK_SERVICE_DISCONNECTED;
	}
	get ACTION_HEADSET_PLUG () {
		return this._object.ACTION_HEADSET_PLUG;
	}
	get ACTION_INPUT_METHOD_CHANGED () {
		return this._object.ACTION_INPUT_METHOD_CHANGED;
	}
	get ACTION_INSERT () {
		return this._object.ACTION_INSERT;
	}
	get ACTION_INSERT_OR_EDIT () {
		return this._object.ACTION_INSERT_OR_EDIT;
	}
	get ACTION_MAIN () {
		return this._object.ACTION_MAIN;
	}
	get ACTION_MANAGE_PACKAGE_STORAGE () {
		return this._object.ACTION_MANAGE_PACKAGE_STORAGE;
	}
	get ACTION_MEDIA_BAD_REMOVAL () {
		return this._object.ACTION_MEDIA_BAD_REMOVAL;
	}
	get ACTION_MEDIA_BUTTON () {
		return this._object.ACTION_MEDIA_BUTTON;
	}
	get ACTION_MEDIA_CHECKING () {
		return this._object.ACTION_MEDIA_CHECKING;
	}
	get ACTION_MEDIA_EJECT () {
		return this._object.ACTION_MEDIA_EJECT;
	}
	get ACTION_MEDIA_MOUNTED () {
		return this._object.ACTION_MEDIA_MOUNTED;
	}
	get ACTION_MEDIA_NOFS () {
		return this._object.ACTION_MEDIA_NOFS;
	}
	get ACTION_MEDIA_REMOVED () {
		return this._object.ACTION_MEDIA_REMOVED;
	}
	get ACTION_MEDIA_SCANNER_FINISHED () {
		return this._object.ACTION_MEDIA_SCANNER_FINISHED;
	}
	get ACTION_MEDIA_SCANNER_SCAN_FILE () {
		return this._object.ACTION_MEDIA_SCANNER_SCAN_FILE;
	}
	get ACTION_MEDIA_SCANNER_STARTED () {
		return this._object.ACTION_MEDIA_SCANNER_STARTED;
	}
	get ACTION_MEDIA_SHARED () {
		return this._object.ACTION_MEDIA_SHARED;
	}
	get ACTION_MEDIA_UNMOUNTABLE () {
		return this._object.ACTION_MEDIA_UNMOUNTABLE;
	}
	get ACTION_MEDIA_UNMOUNTED () {
		return this._object.ACTION_MEDIA_UNMOUNTED;
	}
	get ACTION_NEW_OUTGOING_CALL () {
		return this._object.ACTION_NEW_OUTGOING_CALL;
	}
	get ACTION_PACKAGE_ADDED () {
		return this._object.ACTION_PACKAGE_ADDED;
	}
	get ACTION_PACKAGE_CHANGED () {
		return this._object.ACTION_PACKAGE_CHANGED;
	}
	get ACTION_PACKAGE_DATA_CLEARED () {
		return this._object.ACTION_PACKAGE_DATA_CLEARED;
	}
	get ACTION_PACKAGE_INSTALL () {
		return this._object.ACTION_PACKAGE_INSTALL;
	}
	get ACTION_PACKAGE_REMOVED () {
		return this._object.ACTION_PACKAGE_REMOVED;
	}
	get ACTION_PACKAGE_REPLACED () {
		return this._object.ACTION_PACKAGE_REPLACED;
	}
	get ACTION_PACKAGE_RESTARTED () {
		return this._object.ACTION_PACKAGE_RESTARTED;
	}
	get ACTION_PICK () {
		return this._object.ACTION_PICK;
	}
	get ACTION_PICK_ACTIVITY () {
		return this._object.ACTION_PICK_ACTIVITY;
	}
	get ACTION_POWER_CONNECTED () {
		return this._object.ACTION_POWER_CONNECTED;
	}
	get ACTION_POWER_DISCONNECTED () {
		return this._object.ACTION_POWER_DISCONNECTED;
	}
	get ACTION_POWER_USAGE_SUMMARY () {
		return this._object.ACTION_POWER_USAGE_SUMMARY;
	}
	get ACTION_PROVIDER_CHANGED () {
		return this._object.ACTION_PROVIDER_CHANGED;
	}
	get ACTION_REBOOT () {
		return this._object.ACTION_REBOOT;
	}
	get ACTION_RUN () {
		return this._object.ACTION_RUN;
	}
	get ACTION_SCREEN_OFF () {
		return this._object.ACTION_SCREEN_OFF;
	}
	get ACTION_SCREEN_ON () {
		return this._object.ACTION_SCREEN_ON;
	}
	get ACTION_SEARCH () {
		return this._object.ACTION_SEARCH;
	}
	get ACTION_SEARCH_LONG_PRESS () {
		return this._object.ACTION_SEARCH_LONG_PRESS;
	}
	get ACTION_SEND () {
		return this._object.ACTION_SEND;
	}
	get ACTION_SENDTO () {
		return this._object.ACTION_SENDTO;
	}
	get ACTION_SEND_MULTIPLE () {
		return this._object.ACTION_SEND_MULTIPLE;
	}
	get ACTION_SET_WALLPAPER () {
		return this._object.ACTION_SET_WALLPAPER;
	}
	get ACTION_SHUTDOWN () {
		return this._object.ACTION_SHUTDOWN;
	}
	get ACTION_SYNC () {
		return this._object.ACTION_SYNC;
	}
	get ACTION_SYSTEM_TUTORIAL () {
		return this._object.ACTION_SYSTEM_TUTORIAL;
	}
	get ACTION_TIME_CHANGED () {
		return this._object.ACTION_TIME_CHANGED;
	}
	get ACTION_TIME_TICK () {
		return this._object.ACTION_TIME_TICK;
	}
	get ACTION_UID_REMOVED () {
		return this._object.ACTION_UID_REMOVED;
	}
	get ACTION_UMS_CONNECTED () {
		return this._object.ACTION_UMS_CONNECTED;
	}
	get ACTION_UMS_DISCONNECTED () {
		return this._object.ACTION_UMS_DISCONNECTED;
	}
	get ACTION_USER_PRESENT () {
		return this._object.ACTION_USER_PRESENT;
	}
	get ACTION_VIEW () {
		return this._object.ACTION_VIEW;
	}
	get ACTION_VOICE_COMMAND () {
		return this._object.ACTION_VOICE_COMMAND;
	}
	get ACTION_WALLPAPER_CHANGED () {
		return this._object.ACTION_WALLPAPER_CHANGED;
	}
	get ACTION_WEB_SEARCH () {
		return this._object.ACTION_WEB_SEARCH;
	}
	get CATEGORY_ALTERNATIVE () {
		return this._object.CATEGORY_ALTERNATIVE;
	}
	get CATEGORY_BROWSABLE () {
		return this._object.CATEGORY_BROWSABLE;
	}
	get CATEGORY_DEFAULT () {
		return this._object.CATEGORY_DEFAULT;
	}
	get CATEGORY_DEVELOPMENT_PREFERENCE () {
		return this._object.CATEGORY_DEVELOPMENT_PREFERENCE;
	}
	get CATEGORY_EMBED () {
		return this._object.CATEGORY_EMBED;
	}
	get CATEGORY_FRAMEWORK_INSTRUMENTATION_TEST () {
		return this._object.CATEGORY_FRAMEWORK_INSTRUMENTATION_TEST;
	}
	get CATEGORY_HOME () {
		return this._object.CATEGORY_HOME;
	}
	get CATEGORY_INFO () {
		return this._object.CATEGORY_INFO;
	}
	get CATEGORY_LAUNCHER () {
		return this._object.CATEGORY_LAUNCHER;
	}
	get CATEGORY_MONKEY () {
		return this._object.CATEGORY_MONKEY;
	}
	get CATEGORY_OPENABLE () {
		return this._object.CATEGORY_OPENABLE;
	}
	get CATEGORY_PREFERENCE () {
		return this._object.CATEGORY_PREFERENCE;
	}
	get CATEGORY_SAMPLE_CODE () {
		return this._object.CATEGORY_SAMPLE_CODE;
	}
	get CATEGORY_SELECTED_ALTERNATIVE () {
		return this._object.CATEGORY_SELECTED_ALTERNATIVE;
	}
	get CATEGORY_TAB () {
		return this._object.CATEGORY_TAB;
	}
	get CATEGORY_TEST () {
		return this._object.CATEGORY_TEST;
	}
	get CATEGORY_UNIT_TEST () {
		return this._object.CATEGORY_UNIT_TEST;
	}
	get EXTRA_ALARM_COUNT () {
		return this._object.EXTRA_ALARM_COUNT;
	}
	get EXTRA_BCC () {
		return this._object.EXTRA_BCC;
	}
	get EXTRA_CC () {
		return this._object.EXTRA_CC;
	}
	get EXTRA_DATA_REMOVED () {
		return this._object.EXTRA_DATA_REMOVED;
	}
	get EXTRA_DONT_KILL_APP () {
		return this._object.EXTRA_DONT_KILL_APP;
	}
	get EXTRA_EMAIL () {
		return this._object.EXTRA_EMAIL;
	}
	get EXTRA_INTENT () {
		return this._object.EXTRA_INTENT;
	}
	get EXTRA_KEY_EVENT () {
		return this._object.EXTRA_KEY_EVENT;
	}
	get EXTRA_PHONE_NUMBER () {
		return this._object.EXTRA_PHONE_NUMBER;
	}
	get EXTRA_REPLACING () {
		return this._object.EXTRA_REPLACING;
	}
	get EXTRA_SHORTCUT_ICON () {
		return this._object.EXTRA_SHORTCUT_ICON;
	}
	get EXTRA_SHORTCUT_ICON_RESOURCE () {
		return this._object.EXTRA_SHORTCUT_ICON_RESOURCE;
	}
	get EXTRA_SHORTCUT_INTENT () {
		return this._object.EXTRA_SHORTCUT_INTENT;
	}
	get EXTRA_SHORTCUT_NAME () {
		return this._object.EXTRA_SHORTCUT_NAME;
	}
	get EXTRA_STREAM () {
		return this._object.EXTRA_STREAM;
	}
	get EXTRA_SUBJECT () {
		return this._object.EXTRA_SUBJECT;
	}
	get EXTRA_TEMPLATE () {
		return this._object.EXTRA_TEMPLATE;
	}
	get EXTRA_TEXT () {
		return this._object.EXTRA_TEXT;
	}
	get EXTRA_TITLE () {
		return this._object.EXTRA_TITLE;
	}
	get EXTRA_UID () {
		return this._object.EXTRA_UID;
	}
	get FILL_IN_ACTION () {
		return this._object.FILL_IN_ACTION;
	}
	get FILL_IN_CATEGORIES () {
		return this._object.FILL_IN_CATEGORIES;
	}
	get FILL_IN_COMPONENT () {
		return this._object.FILL_IN_COMPONENT;
	}
	get FILL_IN_DATA () {
		return this._object.FILL_IN_DATA;
	}
	get FILL_IN_PACKAGE () {
		return this._object.FILL_IN_PACKAGE;
	}
	get FLAG_ACTIVITY_BROUGHT_TO_FRONT () {
		return this._object.FLAG_ACTIVITY_BROUGHT_TO_FRONT;
	}
	get FLAG_ACTIVITY_CLEAR_TOP () {
		return this._object.FLAG_ACTIVITY_CLEAR_TOP;
	}
	get FLAG_ACTIVITY_CLEAR_WHEN_TASK_RESET () {
		return this._object.FLAG_ACTIVITY_CLEAR_WHEN_TASK_RESET;
	}
	get FLAG_ACTIVITY_EXCLUDE_FROM_RECENTS () {
		return this._object.FLAG_ACTIVITY_EXCLUDE_FROM_RECENTS;
	}
	get FLAG_ACTIVITY_FORWARD_RESULT () {
		return this._object.FLAG_ACTIVITY_FORWARD_RESULT;
	}
	get FLAG_ACTIVITY_LAUNCHED_FROM_HISTORY () {
		return this._object.FLAG_ACTIVITY_LAUNCHED_FROM_HISTORY;
	}
	get FLAG_ACTIVITY_MULTIPLE_TASK () {
		return this._object.FLAG_ACTIVITY_MULTIPLE_TASK;
	}
	get FLAG_ACTIVITY_NEW_TASK () {
		return this._object.FLAG_ACTIVITY_NEW_TASK;
	}
	get FLAG_ACTIVITY_NO_ANIMATION () {
		return this._object.FLAG_ACTIVITY_NO_ANIMATION;
	}
	get FLAG_ACTIVITY_NO_HISTORY () {
		return this._object.FLAG_ACTIVITY_NO_HISTORY;
	}
	get FLAG_ACTIVITY_NO_USER_ACTION () {
		return this._object.FLAG_ACTIVITY_NO_USER_ACTION;
	}
	get FLAG_ACTIVITY_PREVIOUS_IS_TOP () {
		return this._object.FLAG_ACTIVITY_PREVIOUS_IS_TOP;
	}
	get FLAG_ACTIVITY_REORDER_TO_FRONT () {
		return this._object.FLAG_ACTIVITY_REORDER_TO_FRONT;
	}
	get FLAG_ACTIVITY_RESET_TASK_IF_NEEDED () {
		return this._object.FLAG_ACTIVITY_RESET_TASK_IF_NEEDED;
	}
	get FLAG_ACTIVITY_SINGLE_TOP () {
		return this._object.FLAG_ACTIVITY_SINGLE_TOP;
	}
	get FLAG_DEBUG_LOG_RESOLUTION () {
		return this._object.FLAG_DEBUG_LOG_RESOLUTION;
	}
	get FLAG_FROM_BACKGROUND () {
		return this._object.FLAG_FROM_BACKGROUND;
	}
	get FLAG_GRANT_READ_URI_PERMISSION () {
		return this._object.FLAG_GRANT_READ_URI_PERMISSION;
	}
	get FLAG_GRANT_WRITE_URI_PERMISSION () {
		return this._object.FLAG_GRANT_WRITE_URI_PERMISSION;
	}
	get FLAG_RECEIVER_REGISTERED_ONLY () {
		return this._object.FLAG_RECEIVER_REGISTERED_ONLY;
	}
	get FLAG_CANCEL_CURRENT () {
		return this._object.FLAG_CANCEL_CURRENT;
	}
	get FLAG_NO_CREATE () {
		return this._object.FLAG_NO_CREATE;
	}
	get FLAG_ONE_SHOT () {
		return this._object.FLAG_ONE_SHOT;
	}
	get FLAG_UPDATE_CURRENT () {
		return this._object.FLAG_UPDATE_CURRENT;
	}
	get CATEGORY_ALARM () {
		return this._object.CATEGORY_ALARM;
	}
	get CATEGORY_CALL () {
		return this._object.CATEGORY_CALL;
	}
	get CATEGORY_EMAIL () {
		return this._object.CATEGORY_EMAIL;
	}
	get CATEGORY_ERROR () {
		return this._object.CATEGORY_ERROR;
	}
	get CATEGORY_EVENT () {
		return this._object.CATEGORY_EVENT;
	}
	get CATEGORY_MESSAGE () {
		return this._object.CATEGORY_MESSAGE;
	}
	get CATEGORY_PROGRESS () {
		return this._object.CATEGORY_PROGRESS;
	}
	get CATEGORY_PROMO () {
		return this._object.CATEGORY_PROMO;
	}
	get CATEGORY_RECOMMENDATION () {
		return this._object.CATEGORY_RECOMMENDATION;
	}
	get CATEGORY_SERVICE () {
		return this._object.CATEGORY_SERVICE;
	}
	get CATEGORY_SOCIAL () {
		return this._object.CATEGORY_SOCIAL;
	}
	get CATEGORY_STATUS () {
		return this._object.CATEGORY_STATUS;
	}
	get CATEGORY_TRANSPORT () {
		return this._object.CATEGORY_TRANSPORT;
	}
	get DEFAULT_ALL () {
		return this._object.DEFAULT_ALL;
	}
	get DEFAULT_LIGHTS () {
		return this._object.DEFAULT_LIGHTS;
	}
	get DEFAULT_SOUND () {
		return this._object.DEFAULT_SOUND;
	}
	get DEFAULT_VIBRATE () {
		return this._object.DEFAULT_VIBRATE;
	}
	get FLAG_AUTO_CANCEL () {
		return this._object.FLAG_AUTO_CANCEL;
	}
	get FLAG_INSISTENT () {
		return this._object.FLAG_INSISTENT;
	}
	get FLAG_NO_CLEAR () {
		return this._object.FLAG_NO_CLEAR;
	}
	get FLAG_ONGOING_EVENT () {
		return this._object.FLAG_ONGOING_EVENT;
	}
	get FLAG_ONLY_ALERT_ONCE () {
		return this._object.FLAG_ONLY_ALERT_ONCE;
	}
	get FLAG_SHOW_LIGHTS () {
		return this._object.FLAG_SHOW_LIGHTS;
	}
	get PRIORITY_MAX () {
		return this._object.PRIORITY_MAX;
	}
	get PRIORITY_HIGH () {
		return this._object.PRIORITY_HIGH;
	}
	get PRIORITY_DEFAULT () {
		return this._object.PRIORITY_DEFAULT;
	}
	get PRIORITY_LOW () {
		return this._object.PRIORITY_LOW;
	}
	get PRIORITY_MIN () {
		return this._object.PRIORITY_MIN;
	}
	get VISIBILITY_PRIVATE () {
		return this._object.VISIBILITY_PRIVATE;
	}
	get VISIBILITY_PUBLIC () {
		return this._object.VISIBILITY_PUBLIC;
	}
	get VISIBILITY_SECRET () {
		return this._object.VISIBILITY_SECRET;
	}
	get TILE_STATE_UNAVAILABLE () {
		return this._object.TILE_STATE_UNAVAILABLE;
	}
	get TILE_STATE_INACTIVE () {
		return this._object.TILE_STATE_INACTIVE;
	}
	get TILE_STATE_ACTIVE () {
		return this._object.TILE_STATE_ACTIVE;
	}
	get WAKE_LOCK_PARTIAL () {
		return this._object.WAKE_LOCK_PARTIAL;
	}
	get WAKE_LOCK_FULL () {
		return this._object.WAKE_LOCK_FULL;
	}
	get WAKE_LOCK_SCREEN_DIM () {
		return this._object.WAKE_LOCK_SCREEN_DIM;
	}
	get WAKE_LOCK_SCREEN_BRIGHT () {
		return this._object.WAKE_LOCK_SCREEN_BRIGHT;
	}
	get WAKE_LOCK_ACQUIRE_CAUSES_WAKEUP () {
		return this._object.WAKE_LOCK_ACQUIRE_CAUSES_WAKEUP;
	}
	get WAKE_LOCK_ON_AFTER_RELEASE () {
		return this._object.WAKE_LOCK_ON_AFTER_RELEASE;
	}
	get PENDING_INTENT_FOR_ACTIVITY () {
		return this._object.PENDING_INTENT_FOR_ACTIVITY;
	}
	get PENDING_INTENT_FOR_BROADCAST () {
		return this._object.PENDING_INTENT_FOR_BROADCAST;
	}
	get PENDING_INTENT_FOR_SERVICE () {
		return this._object.PENDING_INTENT_FOR_SERVICE;
	}
	get PENDING_INTENT_MAX_VALUE () {
		return this._object.PENDING_INTENT_MAX_VALUE;
	}
	get R () {
		return new R(this._object.R);
	}
	get RESULT_CANCELED () {
		return this._object.RESULT_CANCELED;
	}
	get RESULT_FIRST_USER () {
		return this._object.RESULT_FIRST_USER;
	}
	get RESULT_OK () {
		return this._object.RESULT_OK;
	}
	get SCREEN_ORIENTATION_BEHIND () {
		return this._object.SCREEN_ORIENTATION_BEHIND;
	}
	get SCREEN_ORIENTATION_LANDSCAPE () {
		return this._object.SCREEN_ORIENTATION_LANDSCAPE;
	}
	get SCREEN_ORIENTATION_NOSENSOR () {
		return this._object.SCREEN_ORIENTATION_NOSENSOR;
	}
	get SCREEN_ORIENTATION_PORTRAIT () {
		return this._object.SCREEN_ORIENTATION_PORTRAIT;
	}
	get SCREEN_ORIENTATION_SENSOR () {
		return this._object.SCREEN_ORIENTATION_SENSOR;
	}
	get SCREEN_ORIENTATION_UNSPECIFIED () {
		return this._object.SCREEN_ORIENTATION_UNSPECIFIED;
	}
	get SCREEN_ORIENTATION_USER () {
		return this._object.SCREEN_ORIENTATION_USER;
	}
	get SHOW_AS_ACTION_ALWAYS () {
		return this._object.SHOW_AS_ACTION_ALWAYS;
	}
	get SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW () {
		return this._object.SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW;
	}
	get SHOW_AS_ACTION_IF_ROOM () {
		return this._object.SHOW_AS_ACTION_IF_ROOM;
	}
	get SHOW_AS_ACTION_NEVER () {
		return this._object.SHOW_AS_ACTION_NEVER;
	}
	get SHOW_AS_ACTION_WITH_TEXT () {
		return this._object.SHOW_AS_ACTION_WITH_TEXT;
	}
	get NAVIGATION_MODE_STANDARD () {
		return this._object.NAVIGATION_MODE_STANDARD;
	}
	get NAVIGATION_MODE_TABS () {
		return this._object.NAVIGATION_MODE_TABS;
	}
	get START_NOT_STICKY () {
		return this._object.START_NOT_STICKY;
	}
	get START_REDELIVER_INTENT () {
		return this._object.START_REDELIVER_INTENT;
	}
	get STREAM_ALARM () {
		return this._object.STREAM_ALARM;
	}
	get STREAM_DEFAULT () {
		return this._object.STREAM_DEFAULT;
	}
	get STREAM_MUSIC () {
		return this._object.STREAM_MUSIC;
	}
	get STREAM_NOTIFICATION () {
		return this._object.STREAM_NOTIFICATION;
	}
	get STREAM_RING () {
		return this._object.STREAM_RING;
	}
	get STREAM_SYSTEM () {
		return this._object.STREAM_SYSTEM;
	}
	get STREAM_VOICE_CALL () {
		return this._object.STREAM_VOICE_CALL;
	}
	get URI_INTENT_SCHEME () {
		return this._object.URI_INTENT_SCHEME;
	}
	get IMPORTANCE_DEFAULT () {
		return this._object.IMPORTANCE_DEFAULT;
	}
	get IMPORTANCE_HIGH () {
		return this._object.IMPORTANCE_HIGH;
	}
	get IMPORTANCE_LOW () {
		return this._object.IMPORTANCE_LOW;
	}
	get IMPORTANCE_MAX () {
		return this._object.IMPORTANCE_MAX;
	}
	get IMPORTANCE_MIN () {
		return this._object.IMPORTANCE_MIN;
	}
	get IMPORTANCE_NONE () {
		return this._object.IMPORTANCE_NONE;
	}
	get IMPORTANCE_UNSPECIFIED () {
		return this._object.IMPORTANCE_UNSPECIFIED;
	}
	get currentActivity () {
		return new Activity(this._object.currentActivity);
	}
	get currentService () {
		return new Service(this._object.currentService);
	}

	// static properties
	static get bubbleParent () {
		return Titanium.Android.bubbleParent;
	}
	static set bubbleParent (value) {
		Titanium.Android.bubbleParent = value;
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
	createDrawerLayout (parameters) {
		parameters = normalize(parameters);
		return new DrawerLayout(this._object.createDrawerLayout(parameters));
	}
	hasPermission (permission) {
		return this._object.hasPermission(permission);
	}
	requestPermissions (permissions, callback) {
		if (!callback) {
			return new Promise(resolve => this._object.requestPermissions(permissions, resolve));
		}
		return this._object.requestPermissions(permissions, callback);
	}
	isServiceRunning (intent) {
		intent = normalize(intent);
		return this._object.isServiceRunning(intent);
	}
	registerBroadcastReceiver (broadcastReceiver, actions) {
		broadcastReceiver = normalize(broadcastReceiver);
		return this._object.registerBroadcastReceiver(broadcastReceiver, actions);
	}
	unregisterBroadcastReceiver (broadcastReceiver) {
		broadcastReceiver = normalize(broadcastReceiver);
		return this._object.unregisterBroadcastReceiver(broadcastReceiver);
	}
	startService (intent) {
		intent = normalize(intent);
		return this._object.startService(intent);
	}
	stopService (intent) {
		intent = normalize(intent);
		return this._object.stopService(intent);
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
	createNotificationChannel (parameters) {
		parameters = normalize(parameters);
		return new NotificationChannel(this._object.createNotificationChannel(parameters));
	}
	createQuickSettingsService (parameters) {
		parameters = normalize(parameters);
		return new QuickSettingsService(this._object.createQuickSettingsService(parameters));
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
	static hasPermission (permission) {
		return this._object.hasPermission(permission);
	}
	static requestPermissions (permissions, callback) {
		if (!callback) {
			return new Promise(resolve => this._object.requestPermissions(permissions, resolve));
		}
		return this._object.requestPermissions(permissions, callback);
	}
	static isServiceRunning (intent) {
		intent = normalize(intent);
		return this._object.isServiceRunning(intent);
	}
	static registerBroadcastReceiver (broadcastReceiver, actions) {
		broadcastReceiver = normalize(broadcastReceiver);
		return this._object.registerBroadcastReceiver(broadcastReceiver, actions);
	}
	static unregisterBroadcastReceiver (broadcastReceiver) {
		broadcastReceiver = normalize(broadcastReceiver);
		return this._object.unregisterBroadcastReceiver(broadcastReceiver);
	}
	static startService (intent) {
		intent = normalize(intent);
		return this._object.startService(intent);
	}
	static stopService (intent) {
		intent = normalize(intent);
		return this._object.stopService(intent);
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

	// modules
	static get Service () {
		return Service;
	}
	static get Intent () {
		return Intent;
	}
	static get PendingIntent () {
		return PendingIntent;
	}
	static get DrawerLayout () {
		return DrawerLayout;
	}
	static get BigPictureStyle () {
		return BigPictureStyle;
	}
	static get BigTextStyle () {
		return BigTextStyle;
	}
	static get BroadcastReceiver () {
		return BroadcastReceiver;
	}
	static get Notification () {
		return Notification;
	}
	static get NotificationChannel () {
		return NotificationChannel;
	}
	static get QuickSettingsService () {
		return QuickSettingsService;
	}
	static get RemoteViews () {
		return RemoteViews;
	}
};
Object.freeze(Android);

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