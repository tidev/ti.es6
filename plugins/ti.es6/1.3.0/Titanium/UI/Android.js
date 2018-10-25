import { default as Window } from './Window';
export { default as CardView } from './Android/CardView';
import { default as CardView } from './Android/CardView';
export { default as DrawerLayout } from './Android/DrawerLayout';
import { default as DrawerLayout } from './Android/DrawerLayout';
export { default as ProgressIndicator } from './Android/ProgressIndicator';
import { default as ProgressIndicator } from './Android/ProgressIndicator';
export { default as SearchView } from './Android/SearchView';
import { default as SearchView } from './Android/SearchView';

export default class Android {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.UI.Android')) {
			this._object = object;
		} else {
			this._object = undefined;
		}
	}

	// constants
	static get apiName () {
		return Titanium.UI.Android.apiName;
	}
	static get GRAVITY_AXIS_CLIP () {
		return Titanium.UI.Android.GRAVITY_AXIS_CLIP;
	}
	static get GRAVITY_AXIS_PULL_AFTER () {
		return Titanium.UI.Android.GRAVITY_AXIS_PULL_AFTER;
	}
	static get GRAVITY_AXIS_PULL_BEFORE () {
		return Titanium.UI.Android.GRAVITY_AXIS_PULL_BEFORE;
	}
	static get GRAVITY_AXIS_SPECIFIED () {
		return Titanium.UI.Android.GRAVITY_AXIS_SPECIFIED;
	}
	static get GRAVITY_AXIS_X_SHIFT () {
		return Titanium.UI.Android.GRAVITY_AXIS_X_SHIFT;
	}
	static get GRAVITY_AXIS_Y_SHIFT () {
		return Titanium.UI.Android.GRAVITY_AXIS_Y_SHIFT;
	}
	static get GRAVITY_BOTTOM () {
		return Titanium.UI.Android.GRAVITY_BOTTOM;
	}
	static get GRAVITY_CENTER () {
		return Titanium.UI.Android.GRAVITY_CENTER;
	}
	static get GRAVITY_CENTER_HORIZONTAL () {
		return Titanium.UI.Android.GRAVITY_CENTER_HORIZONTAL;
	}
	static get GRAVITY_CENTER_VERTICAL () {
		return Titanium.UI.Android.GRAVITY_CENTER_VERTICAL;
	}
	static get GRAVITY_CLIP_HORIZONTAL () {
		return Titanium.UI.Android.GRAVITY_CLIP_HORIZONTAL;
	}
	static get GRAVITY_CLIP_VERTICAL () {
		return Titanium.UI.Android.GRAVITY_CLIP_VERTICAL;
	}
	static get GRAVITY_DISPLAY_CLIP_HORIZONTAL () {
		return Titanium.UI.Android.GRAVITY_DISPLAY_CLIP_HORIZONTAL;
	}
	static get GRAVITY_DISPLAY_CLIP_VERTICAL () {
		return Titanium.UI.Android.GRAVITY_DISPLAY_CLIP_VERTICAL;
	}
	static get GRAVITY_END () {
		return Titanium.UI.Android.GRAVITY_END;
	}
	static get GRAVITY_FILL () {
		return Titanium.UI.Android.GRAVITY_FILL;
	}
	static get GRAVITY_FILL_HORIZONTAL () {
		return Titanium.UI.Android.GRAVITY_FILL_HORIZONTAL;
	}
	static get GRAVITY_FILL_VERTICAL () {
		return Titanium.UI.Android.GRAVITY_FILL_VERTICAL;
	}
	static get GRAVITY_HORIZONTAL_GRAVITY_MASK () {
		return Titanium.UI.Android.GRAVITY_HORIZONTAL_GRAVITY_MASK;
	}
	static get GRAVITY_LEFT () {
		return Titanium.UI.Android.GRAVITY_LEFT;
	}
	static get GRAVITY_NO_GRAVITY () {
		return Titanium.UI.Android.GRAVITY_NO_GRAVITY;
	}
	static get GRAVITY_RELATIVE_HORIZONTAL_GRAVITY_MASK () {
		return Titanium.UI.Android.GRAVITY_RELATIVE_HORIZONTAL_GRAVITY_MASK;
	}
	static get GRAVITY_RELATIVE_LAYOUT_DIRECTION () {
		return Titanium.UI.Android.GRAVITY_RELATIVE_LAYOUT_DIRECTION;
	}
	static get GRAVITY_RIGHT () {
		return Titanium.UI.Android.GRAVITY_RIGHT;
	}
	static get GRAVITY_START () {
		return Titanium.UI.Android.GRAVITY_START;
	}
	static get GRAVITY_TOP () {
		return Titanium.UI.Android.GRAVITY_TOP;
	}
	static get GRAVITY_VERTICAL_GRAVITY_MASK () {
		return Titanium.UI.Android.GRAVITY_VERTICAL_GRAVITY_MASK;
	}
	static get LINKIFY_ALL () {
		return Titanium.UI.Android.LINKIFY_ALL;
	}
	static get LINKIFY_EMAIL_ADDRESSES () {
		return Titanium.UI.Android.LINKIFY_EMAIL_ADDRESSES;
	}
	static get LINKIFY_MAP_ADDRESSES () {
		return Titanium.UI.Android.LINKIFY_MAP_ADDRESSES;
	}
	static get LINKIFY_PHONE_NUMBERS () {
		return Titanium.UI.Android.LINKIFY_PHONE_NUMBERS;
	}
	static get LINKIFY_WEB_URLS () {
		return Titanium.UI.Android.LINKIFY_WEB_URLS;
	}
	static get OVER_SCROLL_ALWAYS () {
		return Titanium.UI.Android.OVER_SCROLL_ALWAYS;
	}
	static get OVER_SCROLL_IF_CONTENT_SCROLLS () {
		return Titanium.UI.Android.OVER_SCROLL_IF_CONTENT_SCROLLS;
	}
	static get OVER_SCROLL_NEVER () {
		return Titanium.UI.Android.OVER_SCROLL_NEVER;
	}
	static get PIXEL_FORMAT_A_8 () {
		return Titanium.UI.Android.PIXEL_FORMAT_A_8;
	}
	static get PIXEL_FORMAT_LA_88 () {
		return Titanium.UI.Android.PIXEL_FORMAT_LA_88;
	}
	static get PIXEL_FORMAT_L_8 () {
		return Titanium.UI.Android.PIXEL_FORMAT_L_8;
	}
	static get PIXEL_FORMAT_OPAQUE () {
		return Titanium.UI.Android.PIXEL_FORMAT_OPAQUE;
	}
	static get PIXEL_FORMAT_RGBA_4444 () {
		return Titanium.UI.Android.PIXEL_FORMAT_RGBA_4444;
	}
	static get PIXEL_FORMAT_RGBA_5551 () {
		return Titanium.UI.Android.PIXEL_FORMAT_RGBA_5551;
	}
	static get PIXEL_FORMAT_RGBA_8888 () {
		return Titanium.UI.Android.PIXEL_FORMAT_RGBA_8888;
	}
	static get PIXEL_FORMAT_RGBX_8888 () {
		return Titanium.UI.Android.PIXEL_FORMAT_RGBX_8888;
	}
	static get PIXEL_FORMAT_RGB_332 () {
		return Titanium.UI.Android.PIXEL_FORMAT_RGB_332;
	}
	static get PIXEL_FORMAT_RGB_565 () {
		return Titanium.UI.Android.PIXEL_FORMAT_RGB_565;
	}
	static get PIXEL_FORMAT_RGB_888 () {
		return Titanium.UI.Android.PIXEL_FORMAT_RGB_888;
	}
	static get PIXEL_FORMAT_TRANSLUCENT () {
		return Titanium.UI.Android.PIXEL_FORMAT_TRANSLUCENT;
	}
	static get PIXEL_FORMAT_TRANSPARENT () {
		return Titanium.UI.Android.PIXEL_FORMAT_TRANSPARENT;
	}
	static get PIXEL_FORMAT_UNKNOWN () {
		return Titanium.UI.Android.PIXEL_FORMAT_UNKNOWN;
	}
	static get PROGRESS_INDICATOR_DIALOG () {
		return Titanium.UI.Android.PROGRESS_INDICATOR_DIALOG;
	}
	static get PROGRESS_INDICATOR_STATUS_BAR () {
		return Titanium.UI.Android.PROGRESS_INDICATOR_STATUS_BAR;
	}
	static get PROGRESS_INDICATOR_INDETERMINANT () {
		return Titanium.UI.Android.PROGRESS_INDICATOR_INDETERMINANT;
	}
	static get PROGRESS_INDICATOR_DETERMINANT () {
		return Titanium.UI.Android.PROGRESS_INDICATOR_DETERMINANT;
	}
	static get SOFT_INPUT_ADJUST_PAN () {
		return Titanium.UI.Android.SOFT_INPUT_ADJUST_PAN;
	}
	static get SOFT_INPUT_ADJUST_RESIZE () {
		return Titanium.UI.Android.SOFT_INPUT_ADJUST_RESIZE;
	}
	static get SOFT_INPUT_ADJUST_UNSPECIFIED () {
		return Titanium.UI.Android.SOFT_INPUT_ADJUST_UNSPECIFIED;
	}
	static get SOFT_INPUT_STATE_ALWAYS_HIDDEN () {
		return Titanium.UI.Android.SOFT_INPUT_STATE_ALWAYS_HIDDEN;
	}
	static get SOFT_INPUT_STATE_ALWAYS_VISIBLE () {
		return Titanium.UI.Android.SOFT_INPUT_STATE_ALWAYS_VISIBLE;
	}
	static get SOFT_INPUT_STATE_HIDDEN () {
		return Titanium.UI.Android.SOFT_INPUT_STATE_HIDDEN;
	}
	static get SOFT_INPUT_STATE_UNSPECIFIED () {
		return Titanium.UI.Android.SOFT_INPUT_STATE_UNSPECIFIED;
	}
	static get SOFT_INPUT_STATE_VISIBLE () {
		return Titanium.UI.Android.SOFT_INPUT_STATE_VISIBLE;
	}
	static get SOFT_KEYBOARD_DEFAULT_ON_FOCUS () {
		return Titanium.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS;
	}
	static get SOFT_KEYBOARD_HIDE_ON_FOCUS () {
		return Titanium.UI.Android.SOFT_KEYBOARD_HIDE_ON_FOCUS;
	}
	static get SOFT_KEYBOARD_SHOW_ON_FOCUS () {
		return Titanium.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS;
	}
	static get SWITCH_STYLE_CHECKBOX () {
		return Titanium.UI.Android.SWITCH_STYLE_CHECKBOX;
	}
	static get SWITCH_STYLE_TOGGLEBUTTON () {
		return Titanium.UI.Android.SWITCH_STYLE_TOGGLEBUTTON;
	}
	static get SWITCH_STYLE_SWITCH () {
		return Titanium.UI.Android.SWITCH_STYLE_SWITCH;
	}
	static get WEBVIEW_PLUGINS_OFF () {
		return Titanium.UI.Android.WEBVIEW_PLUGINS_OFF;
	}
	static get WEBVIEW_PLUGINS_ON () {
		return Titanium.UI.Android.WEBVIEW_PLUGINS_ON;
	}
	static get WEBVIEW_PLUGINS_ON_DEMAND () {
		return Titanium.UI.Android.WEBVIEW_PLUGINS_ON_DEMAND;
	}
	static get WEBVIEW_LOAD_DEFAULT () {
		return Titanium.UI.Android.WEBVIEW_LOAD_DEFAULT;
	}
	static get WEBVIEW_LOAD_NO_CACHE () {
		return Titanium.UI.Android.WEBVIEW_LOAD_NO_CACHE;
	}
	static get WEBVIEW_LOAD_CACHE_ONLY () {
		return Titanium.UI.Android.WEBVIEW_LOAD_CACHE_ONLY;
	}
	static get WEBVIEW_LOAD_CACHE_ELSE_NETWORK () {
		return Titanium.UI.Android.WEBVIEW_LOAD_CACHE_ELSE_NETWORK;
	}
	static get TRANSITION_EXPLODE () {
		return Titanium.UI.Android.TRANSITION_EXPLODE;
	}
	static get TRANSITION_FADE_IN () {
		return Titanium.UI.Android.TRANSITION_FADE_IN;
	}
	static get TRANSITION_FADE_OUT () {
		return Titanium.UI.Android.TRANSITION_FADE_OUT;
	}
	static get TRANSITION_SLIDE_TOP () {
		return Titanium.UI.Android.TRANSITION_SLIDE_TOP;
	}
	static get TRANSITION_SLIDE_RIGHT () {
		return Titanium.UI.Android.TRANSITION_SLIDE_RIGHT;
	}
	static get TRANSITION_SLIDE_BOTTOM () {
		return Titanium.UI.Android.TRANSITION_SLIDE_BOTTOM;
	}
	static get TRANSITION_SLIDE_LEFT () {
		return Titanium.UI.Android.TRANSITION_SLIDE_LEFT;
	}
	static get TRANSITION_CHANGE_BOUNDS () {
		return Titanium.UI.Android.TRANSITION_CHANGE_BOUNDS;
	}
	static get TRANSITION_CHANGE_CLIP_BOUNDS () {
		return Titanium.UI.Android.TRANSITION_CHANGE_CLIP_BOUNDS;
	}
	static get TRANSITION_CHANGE_TRANSFORM () {
		return Titanium.UI.Android.TRANSITION_CHANGE_TRANSFORM;
	}
	static get TRANSITION_CHANGE_IMAGE_TRANSFORM () {
		return Titanium.UI.Android.TRANSITION_CHANGE_IMAGE_TRANSFORM;
	}
	static get TRANSITION_NONE () {
		return Titanium.UI.Android.TRANSITION_NONE;
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
	get GRAVITY_AXIS_CLIP () {
		return this._object.GRAVITY_AXIS_CLIP;
	}
	get GRAVITY_AXIS_PULL_AFTER () {
		return this._object.GRAVITY_AXIS_PULL_AFTER;
	}
	get GRAVITY_AXIS_PULL_BEFORE () {
		return this._object.GRAVITY_AXIS_PULL_BEFORE;
	}
	get GRAVITY_AXIS_SPECIFIED () {
		return this._object.GRAVITY_AXIS_SPECIFIED;
	}
	get GRAVITY_AXIS_X_SHIFT () {
		return this._object.GRAVITY_AXIS_X_SHIFT;
	}
	get GRAVITY_AXIS_Y_SHIFT () {
		return this._object.GRAVITY_AXIS_Y_SHIFT;
	}
	get GRAVITY_BOTTOM () {
		return this._object.GRAVITY_BOTTOM;
	}
	get GRAVITY_CENTER () {
		return this._object.GRAVITY_CENTER;
	}
	get GRAVITY_CENTER_HORIZONTAL () {
		return this._object.GRAVITY_CENTER_HORIZONTAL;
	}
	get GRAVITY_CENTER_VERTICAL () {
		return this._object.GRAVITY_CENTER_VERTICAL;
	}
	get GRAVITY_CLIP_HORIZONTAL () {
		return this._object.GRAVITY_CLIP_HORIZONTAL;
	}
	get GRAVITY_CLIP_VERTICAL () {
		return this._object.GRAVITY_CLIP_VERTICAL;
	}
	get GRAVITY_DISPLAY_CLIP_HORIZONTAL () {
		return this._object.GRAVITY_DISPLAY_CLIP_HORIZONTAL;
	}
	get GRAVITY_DISPLAY_CLIP_VERTICAL () {
		return this._object.GRAVITY_DISPLAY_CLIP_VERTICAL;
	}
	get GRAVITY_END () {
		return this._object.GRAVITY_END;
	}
	get GRAVITY_FILL () {
		return this._object.GRAVITY_FILL;
	}
	get GRAVITY_FILL_HORIZONTAL () {
		return this._object.GRAVITY_FILL_HORIZONTAL;
	}
	get GRAVITY_FILL_VERTICAL () {
		return this._object.GRAVITY_FILL_VERTICAL;
	}
	get GRAVITY_HORIZONTAL_GRAVITY_MASK () {
		return this._object.GRAVITY_HORIZONTAL_GRAVITY_MASK;
	}
	get GRAVITY_LEFT () {
		return this._object.GRAVITY_LEFT;
	}
	get GRAVITY_NO_GRAVITY () {
		return this._object.GRAVITY_NO_GRAVITY;
	}
	get GRAVITY_RELATIVE_HORIZONTAL_GRAVITY_MASK () {
		return this._object.GRAVITY_RELATIVE_HORIZONTAL_GRAVITY_MASK;
	}
	get GRAVITY_RELATIVE_LAYOUT_DIRECTION () {
		return this._object.GRAVITY_RELATIVE_LAYOUT_DIRECTION;
	}
	get GRAVITY_RIGHT () {
		return this._object.GRAVITY_RIGHT;
	}
	get GRAVITY_START () {
		return this._object.GRAVITY_START;
	}
	get GRAVITY_TOP () {
		return this._object.GRAVITY_TOP;
	}
	get GRAVITY_VERTICAL_GRAVITY_MASK () {
		return this._object.GRAVITY_VERTICAL_GRAVITY_MASK;
	}
	get LINKIFY_ALL () {
		return this._object.LINKIFY_ALL;
	}
	get LINKIFY_EMAIL_ADDRESSES () {
		return this._object.LINKIFY_EMAIL_ADDRESSES;
	}
	get LINKIFY_MAP_ADDRESSES () {
		return this._object.LINKIFY_MAP_ADDRESSES;
	}
	get LINKIFY_PHONE_NUMBERS () {
		return this._object.LINKIFY_PHONE_NUMBERS;
	}
	get LINKIFY_WEB_URLS () {
		return this._object.LINKIFY_WEB_URLS;
	}
	get OVER_SCROLL_ALWAYS () {
		return this._object.OVER_SCROLL_ALWAYS;
	}
	get OVER_SCROLL_IF_CONTENT_SCROLLS () {
		return this._object.OVER_SCROLL_IF_CONTENT_SCROLLS;
	}
	get OVER_SCROLL_NEVER () {
		return this._object.OVER_SCROLL_NEVER;
	}
	get PIXEL_FORMAT_A_8 () {
		return this._object.PIXEL_FORMAT_A_8;
	}
	get PIXEL_FORMAT_LA_88 () {
		return this._object.PIXEL_FORMAT_LA_88;
	}
	get PIXEL_FORMAT_L_8 () {
		return this._object.PIXEL_FORMAT_L_8;
	}
	get PIXEL_FORMAT_OPAQUE () {
		return this._object.PIXEL_FORMAT_OPAQUE;
	}
	get PIXEL_FORMAT_RGBA_4444 () {
		return this._object.PIXEL_FORMAT_RGBA_4444;
	}
	get PIXEL_FORMAT_RGBA_5551 () {
		return this._object.PIXEL_FORMAT_RGBA_5551;
	}
	get PIXEL_FORMAT_RGBA_8888 () {
		return this._object.PIXEL_FORMAT_RGBA_8888;
	}
	get PIXEL_FORMAT_RGBX_8888 () {
		return this._object.PIXEL_FORMAT_RGBX_8888;
	}
	get PIXEL_FORMAT_RGB_332 () {
		return this._object.PIXEL_FORMAT_RGB_332;
	}
	get PIXEL_FORMAT_RGB_565 () {
		return this._object.PIXEL_FORMAT_RGB_565;
	}
	get PIXEL_FORMAT_RGB_888 () {
		return this._object.PIXEL_FORMAT_RGB_888;
	}
	get PIXEL_FORMAT_TRANSLUCENT () {
		return this._object.PIXEL_FORMAT_TRANSLUCENT;
	}
	get PIXEL_FORMAT_TRANSPARENT () {
		return this._object.PIXEL_FORMAT_TRANSPARENT;
	}
	get PIXEL_FORMAT_UNKNOWN () {
		return this._object.PIXEL_FORMAT_UNKNOWN;
	}
	get PROGRESS_INDICATOR_DIALOG () {
		return this._object.PROGRESS_INDICATOR_DIALOG;
	}
	get PROGRESS_INDICATOR_STATUS_BAR () {
		return this._object.PROGRESS_INDICATOR_STATUS_BAR;
	}
	get PROGRESS_INDICATOR_INDETERMINANT () {
		return this._object.PROGRESS_INDICATOR_INDETERMINANT;
	}
	get PROGRESS_INDICATOR_DETERMINANT () {
		return this._object.PROGRESS_INDICATOR_DETERMINANT;
	}
	get SOFT_INPUT_ADJUST_PAN () {
		return this._object.SOFT_INPUT_ADJUST_PAN;
	}
	get SOFT_INPUT_ADJUST_RESIZE () {
		return this._object.SOFT_INPUT_ADJUST_RESIZE;
	}
	get SOFT_INPUT_ADJUST_UNSPECIFIED () {
		return this._object.SOFT_INPUT_ADJUST_UNSPECIFIED;
	}
	get SOFT_INPUT_STATE_ALWAYS_HIDDEN () {
		return this._object.SOFT_INPUT_STATE_ALWAYS_HIDDEN;
	}
	get SOFT_INPUT_STATE_ALWAYS_VISIBLE () {
		return this._object.SOFT_INPUT_STATE_ALWAYS_VISIBLE;
	}
	get SOFT_INPUT_STATE_HIDDEN () {
		return this._object.SOFT_INPUT_STATE_HIDDEN;
	}
	get SOFT_INPUT_STATE_UNSPECIFIED () {
		return this._object.SOFT_INPUT_STATE_UNSPECIFIED;
	}
	get SOFT_INPUT_STATE_VISIBLE () {
		return this._object.SOFT_INPUT_STATE_VISIBLE;
	}
	get SOFT_KEYBOARD_DEFAULT_ON_FOCUS () {
		return this._object.SOFT_KEYBOARD_DEFAULT_ON_FOCUS;
	}
	get SOFT_KEYBOARD_HIDE_ON_FOCUS () {
		return this._object.SOFT_KEYBOARD_HIDE_ON_FOCUS;
	}
	get SOFT_KEYBOARD_SHOW_ON_FOCUS () {
		return this._object.SOFT_KEYBOARD_SHOW_ON_FOCUS;
	}
	get SWITCH_STYLE_CHECKBOX () {
		return this._object.SWITCH_STYLE_CHECKBOX;
	}
	get SWITCH_STYLE_TOGGLEBUTTON () {
		return this._object.SWITCH_STYLE_TOGGLEBUTTON;
	}
	get SWITCH_STYLE_SWITCH () {
		return this._object.SWITCH_STYLE_SWITCH;
	}
	get WEBVIEW_PLUGINS_OFF () {
		return this._object.WEBVIEW_PLUGINS_OFF;
	}
	get WEBVIEW_PLUGINS_ON () {
		return this._object.WEBVIEW_PLUGINS_ON;
	}
	get WEBVIEW_PLUGINS_ON_DEMAND () {
		return this._object.WEBVIEW_PLUGINS_ON_DEMAND;
	}
	get WEBVIEW_LOAD_DEFAULT () {
		return this._object.WEBVIEW_LOAD_DEFAULT;
	}
	get WEBVIEW_LOAD_NO_CACHE () {
		return this._object.WEBVIEW_LOAD_NO_CACHE;
	}
	get WEBVIEW_LOAD_CACHE_ONLY () {
		return this._object.WEBVIEW_LOAD_CACHE_ONLY;
	}
	get WEBVIEW_LOAD_CACHE_ELSE_NETWORK () {
		return this._object.WEBVIEW_LOAD_CACHE_ELSE_NETWORK;
	}
	get TRANSITION_EXPLODE () {
		return this._object.TRANSITION_EXPLODE;
	}
	get TRANSITION_FADE_IN () {
		return this._object.TRANSITION_FADE_IN;
	}
	get TRANSITION_FADE_OUT () {
		return this._object.TRANSITION_FADE_OUT;
	}
	get TRANSITION_SLIDE_TOP () {
		return this._object.TRANSITION_SLIDE_TOP;
	}
	get TRANSITION_SLIDE_RIGHT () {
		return this._object.TRANSITION_SLIDE_RIGHT;
	}
	get TRANSITION_SLIDE_BOTTOM () {
		return this._object.TRANSITION_SLIDE_BOTTOM;
	}
	get TRANSITION_SLIDE_LEFT () {
		return this._object.TRANSITION_SLIDE_LEFT;
	}
	get TRANSITION_CHANGE_BOUNDS () {
		return this._object.TRANSITION_CHANGE_BOUNDS;
	}
	get TRANSITION_CHANGE_CLIP_BOUNDS () {
		return this._object.TRANSITION_CHANGE_CLIP_BOUNDS;
	}
	get TRANSITION_CHANGE_TRANSFORM () {
		return this._object.TRANSITION_CHANGE_TRANSFORM;
	}
	get TRANSITION_CHANGE_IMAGE_TRANSFORM () {
		return this._object.TRANSITION_CHANGE_IMAGE_TRANSFORM;
	}
	get TRANSITION_NONE () {
		return this._object.TRANSITION_NONE;
	}

	// static properties
	static get bubbleParent () {
		return Titanium.UI.Android.bubbleParent;
	}
	static set bubbleParent (value) {
		Titanium.UI.Android.bubbleParent = value;
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
	hideSoftKeyboard () {
		return this._object.hideSoftKeyboard();
	}
	openPreferences () {
		return this._object.openPreferences();
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
	static hideSoftKeyboard () {
		return this._object.hideSoftKeyboard();
	}
	static openPreferences () {
		return this._object.openPreferences();
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
	static get CardView () {
		return CardView;
	}
	static get DrawerLayout () {
		return DrawerLayout;
	}
	static get ProgressIndicator () {
		return ProgressIndicator;
	}
	static get SearchView () {
		return SearchView;
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