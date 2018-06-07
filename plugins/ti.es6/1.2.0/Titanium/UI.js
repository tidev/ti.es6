export { default as Window } from './UI/Window';
import { default as Window } from './UI/Window';
import { default as Tab } from './UI/Tab';
export { default as _2DMatrix } from './UI/_2DMatrix';
import { default as _2DMatrix } from './UI/_2DMatrix';
export { default as View } from './UI/View';
import { default as View } from './UI/View';
export { default as _3DMatrix } from './UI/_3DMatrix';
import { default as _3DMatrix } from './UI/_3DMatrix';
export { default as ActivityIndicator } from './UI/ActivityIndicator';
import { default as ActivityIndicator } from './UI/ActivityIndicator';
export { default as AlertDialog } from './UI/AlertDialog';
import { default as AlertDialog } from './UI/AlertDialog';
export { default as Animation } from './UI/Animation';
import { default as Animation } from './UI/Animation';
export { default as AttributedString } from './UI/AttributedString';
import { default as AttributedString } from './UI/AttributedString';
export { default as Button } from './UI/Button';
import { default as Button } from './UI/Button';
export { default as ButtonBar } from './UI/ButtonBar';
import { default as ButtonBar } from './UI/ButtonBar';
export { default as CoverFlowView } from './UI/CoverFlowView';
import { default as CoverFlowView } from './UI/CoverFlowView';
export { default as DashboardItem } from './UI/DashboardItem';
import { default as DashboardItem } from './UI/DashboardItem';
export { default as DashboardView } from './UI/DashboardView';
import { default as DashboardView } from './UI/DashboardView';
export { default as EmailDialog } from './UI/EmailDialog';
import { default as EmailDialog } from './UI/EmailDialog';
export { default as ImageView } from './UI/ImageView';
import { default as ImageView } from './UI/ImageView';
export { default as Label } from './UI/Label';
import { default as Label } from './UI/Label';
export { default as ListSection } from './UI/ListSection';
import { default as ListSection } from './UI/ListSection';
export { default as ListView } from './UI/ListView';
import { default as ListView } from './UI/ListView';
export { default as MaskedImage } from './UI/MaskedImage';
import { default as MaskedImage } from './UI/MaskedImage';
export { default as Notification } from './UI/Notification';
import { default as Notification } from './UI/Notification';
export { default as OptionDialog } from './UI/OptionDialog';
import { default as OptionDialog } from './UI/OptionDialog';
export { default as Picker } from './UI/Picker';
import { default as Picker } from './UI/Picker';
export { default as PickerColumn } from './UI/PickerColumn';
import { default as PickerColumn } from './UI/PickerColumn';
export { default as PickerRow } from './UI/PickerRow';
import { default as PickerRow } from './UI/PickerRow';
export { default as ProgressBar } from './UI/ProgressBar';
import { default as ProgressBar } from './UI/ProgressBar';
export { default as RefreshControl } from './UI/RefreshControl';
import { default as RefreshControl } from './UI/RefreshControl';
export { default as ScrollView } from './UI/ScrollView';
import { default as ScrollView } from './UI/ScrollView';
export { default as ScrollableView } from './UI/ScrollableView';
import { default as ScrollableView } from './UI/ScrollableView';
export { default as SearchBar } from './UI/SearchBar';
import { default as SearchBar } from './UI/SearchBar';
export { default as Slider } from './UI/Slider';
import { default as Slider } from './UI/Slider';
export { default as Switch } from './UI/Switch';
import { default as Switch } from './UI/Switch';
export { default as TabGroup } from './UI/TabGroup';
import { default as TabGroup } from './UI/TabGroup';
export { default as TabbedBar } from './UI/TabbedBar';
import { default as TabbedBar } from './UI/TabbedBar';
export { default as TableView } from './UI/TableView';
import { default as TableView } from './UI/TableView';
export { default as TableViewRow } from './UI/TableViewRow';
import { default as TableViewRow } from './UI/TableViewRow';
export { default as TableViewSection } from './UI/TableViewSection';
import { default as TableViewSection } from './UI/TableViewSection';
export { default as TextArea } from './UI/TextArea';
import { default as TextArea } from './UI/TextArea';
export { default as TextField } from './UI/TextField';
import { default as TextField } from './UI/TextField';
export { default as Toolbar } from './UI/Toolbar';
import { default as Toolbar } from './UI/Toolbar';
export { default as WebView } from './UI/WebView';
import { default as WebView } from './UI/WebView';

export default class UI {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.UI')) {
			this._object = object;
		} else {
			this._object = undefined;
		}
	}

	// constants
	static get apiName () {
		return Titanium.UI.apiName;
	}
	static get ATTRIBUTE_LIGATURE () {
		return Titanium.UI.ATTRIBUTE_LIGATURE;
	}
	static get ATTRIBUTE_SUPERSCRIPT_STYLE () {
		return Titanium.UI.ATTRIBUTE_SUPERSCRIPT_STYLE;
	}
	static get ATTRIBUTE_SUBSCRIPT_STYLE () {
		return Titanium.UI.ATTRIBUTE_SUBSCRIPT_STYLE;
	}
	static get AUTODETECT_ADDRESS () {
		return Titanium.UI.AUTODETECT_ADDRESS;
	}
	static get AUTODETECT_ALL () {
		return Titanium.UI.AUTODETECT_ALL;
	}
	static get AUTODETECT_CALENDAR () {
		return Titanium.UI.AUTODETECT_CALENDAR;
	}
	static get AUTODETECT_LINK () {
		return Titanium.UI.AUTODETECT_LINK;
	}
	static get AUTODETECT_NONE () {
		return Titanium.UI.AUTODETECT_NONE;
	}
	static get AUTODETECT_PHONE () {
		return Titanium.UI.AUTODETECT_PHONE;
	}
	static get AUTOFILL_TYPE_USERNAME () {
		return Titanium.UI.AUTOFILL_TYPE_USERNAME;
	}
	static get AUTOFILL_TYPE_PASSWORD () {
		return Titanium.UI.AUTOFILL_TYPE_PASSWORD;
	}
	static get AUTOFILL_TYPE_NAME () {
		return Titanium.UI.AUTOFILL_TYPE_NAME;
	}
	static get AUTOFILL_TYPE_NAME_PREFIX () {
		return Titanium.UI.AUTOFILL_TYPE_NAME_PREFIX;
	}
	static get AUTOFILL_TYPE_GIVEN_NAME () {
		return Titanium.UI.AUTOFILL_TYPE_GIVEN_NAME;
	}
	static get AUTOFILL_TYPE_MIDDLE_NAME () {
		return Titanium.UI.AUTOFILL_TYPE_MIDDLE_NAME;
	}
	static get AUTOFILL_TYPE_FAMILY_NAME () {
		return Titanium.UI.AUTOFILL_TYPE_FAMILY_NAME;
	}
	static get AUTOFILL_TYPE_NAME_SUFFIX () {
		return Titanium.UI.AUTOFILL_TYPE_NAME_SUFFIX;
	}
	static get AUTOFILL_TYPE_NICKNAME () {
		return Titanium.UI.AUTOFILL_TYPE_NICKNAME;
	}
	static get AUTOFILL_TYPE_JOB_TITLE () {
		return Titanium.UI.AUTOFILL_TYPE_JOB_TITLE;
	}
	static get AUTOFILL_TYPE_ORGANIZATION_NAME () {
		return Titanium.UI.AUTOFILL_TYPE_ORGANIZATION_NAME;
	}
	static get AUTOFILL_TYPE_LOCATION () {
		return Titanium.UI.AUTOFILL_TYPE_LOCATION;
	}
	static get AUTOFILL_TYPE_ADDRESS () {
		return Titanium.UI.AUTOFILL_TYPE_ADDRESS;
	}
	static get AUTOFILL_TYPE_ADDRESS_LINE1 () {
		return Titanium.UI.AUTOFILL_TYPE_ADDRESS_LINE1;
	}
	static get AUTOFILL_TYPE_ADDRESS_LINE2 () {
		return Titanium.UI.AUTOFILL_TYPE_ADDRESS_LINE2;
	}
	static get AUTOFILL_TYPE_ADDRESS_CITY () {
		return Titanium.UI.AUTOFILL_TYPE_ADDRESS_CITY;
	}
	static get AUTOFILL_TYPE_ADDRESS_STATE () {
		return Titanium.UI.AUTOFILL_TYPE_ADDRESS_STATE;
	}
	static get AUTOFILL_TYPE_ADDRESS_CITY_STATE () {
		return Titanium.UI.AUTOFILL_TYPE_ADDRESS_CITY_STATE;
	}
	static get AUTOFILL_TYPE_SUBLOCALITY () {
		return Titanium.UI.AUTOFILL_TYPE_SUBLOCALITY;
	}
	static get AUTOFILL_TYPE_COUNTRY_NAME () {
		return Titanium.UI.AUTOFILL_TYPE_COUNTRY_NAME;
	}
	static get AUTOFILL_TYPE_POSTAL_CODE () {
		return Titanium.UI.AUTOFILL_TYPE_POSTAL_CODE;
	}
	static get AUTOFILL_TYPE_PHONE () {
		return Titanium.UI.AUTOFILL_TYPE_PHONE;
	}
	static get AUTOFILL_TYPE_EMAIL () {
		return Titanium.UI.AUTOFILL_TYPE_EMAIL;
	}
	static get AUTOFILL_TYPE_URL () {
		return Titanium.UI.AUTOFILL_TYPE_URL;
	}
	static get AUTOFILL_TYPE_CARD_NUMBER () {
		return Titanium.UI.AUTOFILL_TYPE_CARD_NUMBER;
	}
	static get AUTOFILL_TYPE_CARD_SECURITY_CODE () {
		return Titanium.UI.AUTOFILL_TYPE_CARD_SECURITY_CODE;
	}
	static get AUTOFILL_TYPE_CARD_EXPIRATION_DATE () {
		return Titanium.UI.AUTOFILL_TYPE_CARD_EXPIRATION_DATE;
	}
	static get AUTOFILL_TYPE_CARD_EXPIRATION_DAY () {
		return Titanium.UI.AUTOFILL_TYPE_CARD_EXPIRATION_DAY;
	}
	static get AUTOFILL_TYPE_CARD_EXPIRATION_MONTH () {
		return Titanium.UI.AUTOFILL_TYPE_CARD_EXPIRATION_MONTH;
	}
	static get AUTOFILL_TYPE_CARD_EXPIRATION_YEAR () {
		return Titanium.UI.AUTOFILL_TYPE_CARD_EXPIRATION_YEAR;
	}
	static get BLEND_MODE_CLEAR () {
		return Titanium.UI.BLEND_MODE_CLEAR;
	}
	static get BLEND_MODE_COLOR () {
		return Titanium.UI.BLEND_MODE_COLOR;
	}
	static get BLEND_MODE_COLOR_BURN () {
		return Titanium.UI.BLEND_MODE_COLOR_BURN;
	}
	static get BLEND_MODE_COLOR_DODGE () {
		return Titanium.UI.BLEND_MODE_COLOR_DODGE;
	}
	static get BLEND_MODE_COPY () {
		return Titanium.UI.BLEND_MODE_COPY;
	}
	static get BLEND_MODE_DARKEN () {
		return Titanium.UI.BLEND_MODE_DARKEN;
	}
	static get BLEND_MODE_DESTINATION_ATOP () {
		return Titanium.UI.BLEND_MODE_DESTINATION_ATOP;
	}
	static get BLEND_MODE_DESTINATION_IN () {
		return Titanium.UI.BLEND_MODE_DESTINATION_IN;
	}
	static get BLEND_MODE_DESTINATION_OUT () {
		return Titanium.UI.BLEND_MODE_DESTINATION_OUT;
	}
	static get BLEND_MODE_DESTINATION_OVER () {
		return Titanium.UI.BLEND_MODE_DESTINATION_OVER;
	}
	static get BLEND_MODE_DIFFERENCE () {
		return Titanium.UI.BLEND_MODE_DIFFERENCE;
	}
	static get BLEND_MODE_EXCLUSION () {
		return Titanium.UI.BLEND_MODE_EXCLUSION;
	}
	static get BLEND_MODE_HARD_LIGHT () {
		return Titanium.UI.BLEND_MODE_HARD_LIGHT;
	}
	static get BLEND_MODE_HUE () {
		return Titanium.UI.BLEND_MODE_HUE;
	}
	static get BLEND_MODE_LIGHTEN () {
		return Titanium.UI.BLEND_MODE_LIGHTEN;
	}
	static get BLEND_MODE_LUMINOSITY () {
		return Titanium.UI.BLEND_MODE_LUMINOSITY;
	}
	static get BLEND_MODE_MULTIPLY () {
		return Titanium.UI.BLEND_MODE_MULTIPLY;
	}
	static get BLEND_MODE_NORMAL () {
		return Titanium.UI.BLEND_MODE_NORMAL;
	}
	static get BLEND_MODE_OVERLAY () {
		return Titanium.UI.BLEND_MODE_OVERLAY;
	}
	static get BLEND_MODE_PLUS_DARKER () {
		return Titanium.UI.BLEND_MODE_PLUS_DARKER;
	}
	static get BLEND_MODE_PLUS_LIGHTER () {
		return Titanium.UI.BLEND_MODE_PLUS_LIGHTER;
	}
	static get BLEND_MODE_SATURATION () {
		return Titanium.UI.BLEND_MODE_SATURATION;
	}
	static get BLEND_MODE_SCREEN () {
		return Titanium.UI.BLEND_MODE_SCREEN;
	}
	static get BLEND_MODE_SOFT_LIGHT () {
		return Titanium.UI.BLEND_MODE_SOFT_LIGHT;
	}
	static get BLEND_MODE_SOURCE_ATOP () {
		return Titanium.UI.BLEND_MODE_SOURCE_ATOP;
	}
	static get BLEND_MODE_SOURCE_IN () {
		return Titanium.UI.BLEND_MODE_SOURCE_IN;
	}
	static get BLEND_MODE_SOURCE_OUT () {
		return Titanium.UI.BLEND_MODE_SOURCE_OUT;
	}
	static get BLEND_MODE_XOR () {
		return Titanium.UI.BLEND_MODE_XOR;
	}
	static get HINT_TYPE_STATIC () {
		return Titanium.UI.HINT_TYPE_STATIC;
	}
	static get HINT_TYPE_ANIMATED () {
		return Titanium.UI.HINT_TYPE_ANIMATED;
	}
	static get TEXT_ELLIPSIZE_TRUNCATE_WORD_WRAP () {
		return Titanium.UI.TEXT_ELLIPSIZE_TRUNCATE_WORD_WRAP;
	}
	static get TEXT_ELLIPSIZE_TRUNCATE_CHAR_WRAP () {
		return Titanium.UI.TEXT_ELLIPSIZE_TRUNCATE_CHAR_WRAP;
	}
	static get TEXT_ELLIPSIZE_TRUNCATE_CLIP () {
		return Titanium.UI.TEXT_ELLIPSIZE_TRUNCATE_CLIP;
	}
	static get TEXT_ELLIPSIZE_TRUNCATE_START () {
		return Titanium.UI.TEXT_ELLIPSIZE_TRUNCATE_START;
	}
	static get TEXT_ELLIPSIZE_TRUNCATE_MIDDLE () {
		return Titanium.UI.TEXT_ELLIPSIZE_TRUNCATE_MIDDLE;
	}
	static get TEXT_ELLIPSIZE_TRUNCATE_END () {
		return Titanium.UI.TEXT_ELLIPSIZE_TRUNCATE_END;
	}
	static get TEXT_ELLIPSIZE_TRUNCATE_MARQUEE () {
		return Titanium.UI.TEXT_ELLIPSIZE_TRUNCATE_MARQUEE;
	}
	static get TEXT_ELLIPSIZE_TRUNCATE_NONE () {
		return Titanium.UI.TEXT_ELLIPSIZE_TRUNCATE_NONE;
	}
	static get HIDDEN_BEHAVIOR_GONE () {
		return Titanium.UI.HIDDEN_BEHAVIOR_GONE;
	}
	static get HIDDEN_BEHAVIOR_INVISIBLE () {
		return Titanium.UI.HIDDEN_BEHAVIOR_INVISIBLE;
	}
	static get INPUT_TYPE_CLASS_NUMBER () {
		return Titanium.UI.INPUT_TYPE_CLASS_NUMBER;
	}
	static get INPUT_TYPE_CLASS_TEXT () {
		return Titanium.UI.INPUT_TYPE_CLASS_TEXT;
	}
	static get KEYBOARD_APPEARANCE_DARK () {
		return Titanium.UI.KEYBOARD_APPEARANCE_DARK;
	}
	static get KEYBOARD_APPEARANCE_LIGHT () {
		return Titanium.UI.KEYBOARD_APPEARANCE_LIGHT;
	}
	static get KEYBOARD_TYPE_DECIMAL_PAD () {
		return Titanium.UI.KEYBOARD_TYPE_DECIMAL_PAD;
	}
	static get KEYBOARD_TYPE_ASCII () {
		return Titanium.UI.KEYBOARD_TYPE_ASCII;
	}
	static get KEYBOARD_TYPE_DEFAULT () {
		return Titanium.UI.KEYBOARD_TYPE_DEFAULT;
	}
	static get KEYBOARD_TYPE_EMAIL () {
		return Titanium.UI.KEYBOARD_TYPE_EMAIL;
	}
	static get KEYBOARD_TYPE_NAMEPHONE_PAD () {
		return Titanium.UI.KEYBOARD_TYPE_NAMEPHONE_PAD;
	}
	static get KEYBOARD_TYPE_NUMBERS_PUNCTUATION () {
		return Titanium.UI.KEYBOARD_TYPE_NUMBERS_PUNCTUATION;
	}
	static get KEYBOARD_TYPE_NUMBER_PAD () {
		return Titanium.UI.KEYBOARD_TYPE_NUMBER_PAD;
	}
	static get KEYBOARD_TYPE_PHONE_PAD () {
		return Titanium.UI.KEYBOARD_TYPE_PHONE_PAD;
	}
	static get KEYBOARD_TYPE_WEBSEARCH () {
		return Titanium.UI.KEYBOARD_TYPE_WEBSEARCH;
	}
	static get KEYBOARD_TYPE_TWITTER () {
		return Titanium.UI.KEYBOARD_TYPE_TWITTER;
	}
	static get KEYBOARD_TYPE_URL () {
		return Titanium.UI.KEYBOARD_TYPE_URL;
	}
	static get CLIPBOARD_OPTION_LOCAL_ONLY () {
		return Titanium.UI.CLIPBOARD_OPTION_LOCAL_ONLY;
	}
	static get CLIPBOARD_OPTION_EXPIRATION_DATE () {
		return Titanium.UI.CLIPBOARD_OPTION_EXPIRATION_DATE;
	}
	static get RETURNKEY_CONTINUE () {
		return Titanium.UI.RETURNKEY_CONTINUE;
	}
	static get TABLE_VIEW_SEPARATOR_STYLE_NONE () {
		return Titanium.UI.TABLE_VIEW_SEPARATOR_STYLE_NONE;
	}
	static get TABLE_VIEW_SEPARATOR_STYLE_SINGLE_LINE () {
		return Titanium.UI.TABLE_VIEW_SEPARATOR_STYLE_SINGLE_LINE;
	}
	static get TEXT_STYLE_CALLOUT () {
		return Titanium.UI.TEXT_STYLE_CALLOUT;
	}
	static get TEXT_STYLE_TITLE1 () {
		return Titanium.UI.TEXT_STYLE_TITLE1;
	}
	static get TEXT_STYLE_TITLE2 () {
		return Titanium.UI.TEXT_STYLE_TITLE2;
	}
	static get TEXT_STYLE_TITLE3 () {
		return Titanium.UI.TEXT_STYLE_TITLE3;
	}
	static get currentWindow () {
		return new Window(Titanium.UI.currentWindow);
	}
	static get ANIMATION_CURVE_EASE_IN () {
		return Titanium.UI.ANIMATION_CURVE_EASE_IN;
	}
	static get ANIMATION_CURVE_EASE_IN_OUT () {
		return Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT;
	}
	static get ANIMATION_CURVE_EASE_OUT () {
		return Titanium.UI.ANIMATION_CURVE_EASE_OUT;
	}
	static get ANIMATION_CURVE_LINEAR () {
		return Titanium.UI.ANIMATION_CURVE_LINEAR;
	}
	static get AUTOLINK_ALL () {
		return Titanium.UI.AUTOLINK_ALL;
	}
	static get AUTOLINK_CALENDAR () {
		return Titanium.UI.AUTOLINK_CALENDAR;
	}
	static get AUTOLINK_EMAIL_ADDRESSES () {
		return Titanium.UI.AUTOLINK_EMAIL_ADDRESSES;
	}
	static get AUTOLINK_MAP_ADDRESSES () {
		return Titanium.UI.AUTOLINK_MAP_ADDRESSES;
	}
	static get AUTOLINK_NONE () {
		return Titanium.UI.AUTOLINK_NONE;
	}
	static get AUTOLINK_PHONE_NUMBERS () {
		return Titanium.UI.AUTOLINK_PHONE_NUMBERS;
	}
	static get AUTOLINK_URLS () {
		return Titanium.UI.AUTOLINK_URLS;
	}
	static get EXTEND_EDGE_ALL () {
		return Titanium.UI.EXTEND_EDGE_ALL;
	}
	static get EXTEND_EDGE_BOTTOM () {
		return Titanium.UI.EXTEND_EDGE_BOTTOM;
	}
	static get EXTEND_EDGE_LEFT () {
		return Titanium.UI.EXTEND_EDGE_LEFT;
	}
	static get EXTEND_EDGE_NONE () {
		return Titanium.UI.EXTEND_EDGE_NONE;
	}
	static get EXTEND_EDGE_RIGHT () {
		return Titanium.UI.EXTEND_EDGE_RIGHT;
	}
	static get EXTEND_EDGE_TOP () {
		return Titanium.UI.EXTEND_EDGE_TOP;
	}
	static get FACE_DOWN () {
		return Titanium.UI.FACE_DOWN;
	}
	static get FACE_UP () {
		return Titanium.UI.FACE_UP;
	}
	static get FILL () {
		return Titanium.UI.FILL;
	}
	static get INPUT_BORDERSTYLE_BEZEL () {
		return Titanium.UI.INPUT_BORDERSTYLE_BEZEL;
	}
	static get INPUT_BORDERSTYLE_LINE () {
		return Titanium.UI.INPUT_BORDERSTYLE_LINE;
	}
	static get INPUT_BORDERSTYLE_NONE () {
		return Titanium.UI.INPUT_BORDERSTYLE_NONE;
	}
	static get INPUT_BORDERSTYLE_ROUNDED () {
		return Titanium.UI.INPUT_BORDERSTYLE_ROUNDED;
	}
	static get INPUT_BUTTONMODE_ALWAYS () {
		return Titanium.UI.INPUT_BUTTONMODE_ALWAYS;
	}
	static get INPUT_BUTTONMODE_NEVER () {
		return Titanium.UI.INPUT_BUTTONMODE_NEVER;
	}
	static get INPUT_BUTTONMODE_ONBLUR () {
		return Titanium.UI.INPUT_BUTTONMODE_ONBLUR;
	}
	static get INPUT_BUTTONMODE_ONFOCUS () {
		return Titanium.UI.INPUT_BUTTONMODE_ONFOCUS;
	}
	static get KEYBOARD_APPEARANCE_ALERT () {
		return Titanium.UI.KEYBOARD_APPEARANCE_ALERT;
	}
	static get KEYBOARD_APPEARANCE_DEFAULT () {
		return Titanium.UI.KEYBOARD_APPEARANCE_DEFAULT;
	}
	static get KEYBOARD_ASCII () {
		return Titanium.UI.KEYBOARD_ASCII;
	}
	static get KEYBOARD_DECIMAL_PAD () {
		return Titanium.UI.KEYBOARD_DECIMAL_PAD;
	}
	static get KEYBOARD_DEFAULT () {
		return Titanium.UI.KEYBOARD_DEFAULT;
	}
	static get KEYBOARD_EMAIL () {
		return Titanium.UI.KEYBOARD_EMAIL;
	}
	static get KEYBOARD_NAMEPHONE_PAD () {
		return Titanium.UI.KEYBOARD_NAMEPHONE_PAD;
	}
	static get KEYBOARD_NUMBERS_PUNCTUATION () {
		return Titanium.UI.KEYBOARD_NUMBERS_PUNCTUATION;
	}
	static get KEYBOARD_NUMBER_PAD () {
		return Titanium.UI.KEYBOARD_NUMBER_PAD;
	}
	static get KEYBOARD_PHONE_PAD () {
		return Titanium.UI.KEYBOARD_PHONE_PAD;
	}
	static get KEYBOARD_URL () {
		return Titanium.UI.KEYBOARD_URL;
	}
	static get LANDSCAPE_LEFT () {
		return Titanium.UI.LANDSCAPE_LEFT;
	}
	static get LANDSCAPE_RIGHT () {
		return Titanium.UI.LANDSCAPE_RIGHT;
	}
	static get LIST_ACCESSORY_TYPE_CHECKMARK () {
		return Titanium.UI.LIST_ACCESSORY_TYPE_CHECKMARK;
	}
	static get LIST_ACCESSORY_TYPE_DETAIL () {
		return Titanium.UI.LIST_ACCESSORY_TYPE_DETAIL;
	}
	static get LIST_ACCESSORY_TYPE_DISCLOSURE () {
		return Titanium.UI.LIST_ACCESSORY_TYPE_DISCLOSURE;
	}
	static get LIST_ACCESSORY_TYPE_NONE () {
		return Titanium.UI.LIST_ACCESSORY_TYPE_NONE;
	}
	static get LIST_ITEM_TEMPLATE_CONTACTS () {
		return Titanium.UI.LIST_ITEM_TEMPLATE_CONTACTS;
	}
	static get LIST_ITEM_TEMPLATE_DEFAULT () {
		return Titanium.UI.LIST_ITEM_TEMPLATE_DEFAULT;
	}
	static get LIST_ITEM_TEMPLATE_SETTINGS () {
		return Titanium.UI.LIST_ITEM_TEMPLATE_SETTINGS;
	}
	static get LIST_ITEM_TEMPLATE_SUBTITLE () {
		return Titanium.UI.LIST_ITEM_TEMPLATE_SUBTITLE;
	}
	static get NOTIFICATION_DURATION_LONG () {
		return Titanium.UI.NOTIFICATION_DURATION_LONG;
	}
	static get NOTIFICATION_DURATION_SHORT () {
		return Titanium.UI.NOTIFICATION_DURATION_SHORT;
	}
	static get PICKER_TYPE_COUNT_DOWN_TIMER () {
		return Titanium.UI.PICKER_TYPE_COUNT_DOWN_TIMER;
	}
	static get PICKER_TYPE_DATE () {
		return Titanium.UI.PICKER_TYPE_DATE;
	}
	static get PICKER_TYPE_DATE_AND_TIME () {
		return Titanium.UI.PICKER_TYPE_DATE_AND_TIME;
	}
	static get PICKER_TYPE_PLAIN () {
		return Titanium.UI.PICKER_TYPE_PLAIN;
	}
	static get PICKER_TYPE_TIME () {
		return Titanium.UI.PICKER_TYPE_TIME;
	}
	static get PORTRAIT () {
		return Titanium.UI.PORTRAIT;
	}
	static get RETURNKEY_DEFAULT () {
		return Titanium.UI.RETURNKEY_DEFAULT;
	}
	static get RETURNKEY_DONE () {
		return Titanium.UI.RETURNKEY_DONE;
	}
	static get RETURNKEY_EMERGENCY_CALL () {
		return Titanium.UI.RETURNKEY_EMERGENCY_CALL;
	}
	static get RETURNKEY_GO () {
		return Titanium.UI.RETURNKEY_GO;
	}
	static get RETURNKEY_GOOGLE () {
		return Titanium.UI.RETURNKEY_GOOGLE;
	}
	static get RETURNKEY_JOIN () {
		return Titanium.UI.RETURNKEY_JOIN;
	}
	static get RETURNKEY_NEXT () {
		return Titanium.UI.RETURNKEY_NEXT;
	}
	static get RETURNKEY_ROUTE () {
		return Titanium.UI.RETURNKEY_ROUTE;
	}
	static get RETURNKEY_SEARCH () {
		return Titanium.UI.RETURNKEY_SEARCH;
	}
	static get RETURNKEY_SEND () {
		return Titanium.UI.RETURNKEY_SEND;
	}
	static get RETURNKEY_YAHOO () {
		return Titanium.UI.RETURNKEY_YAHOO;
	}
	static get SIZE () {
		return Titanium.UI.SIZE;
	}
	static get TEXT_ALIGNMENT_CENTER () {
		return Titanium.UI.TEXT_ALIGNMENT_CENTER;
	}
	static get TEXT_ALIGNMENT_LEFT () {
		return Titanium.UI.TEXT_ALIGNMENT_LEFT;
	}
	static get TEXT_ALIGNMENT_RIGHT () {
		return Titanium.UI.TEXT_ALIGNMENT_RIGHT;
	}
	static get TEXT_ALIGNMENT_JUSTIFY () {
		return Titanium.UI.TEXT_ALIGNMENT_JUSTIFY;
	}
	static get TEXT_AUTOCAPITALIZATION_ALL () {
		return Titanium.UI.TEXT_AUTOCAPITALIZATION_ALL;
	}
	static get TEXT_AUTOCAPITALIZATION_NONE () {
		return Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE;
	}
	static get TEXT_AUTOCAPITALIZATION_SENTENCES () {
		return Titanium.UI.TEXT_AUTOCAPITALIZATION_SENTENCES;
	}
	static get TEXT_AUTOCAPITALIZATION_WORDS () {
		return Titanium.UI.TEXT_AUTOCAPITALIZATION_WORDS;
	}
	static get TEXT_STYLE_BODY () {
		return Titanium.UI.TEXT_STYLE_BODY;
	}
	static get TEXT_STYLE_CAPTION1 () {
		return Titanium.UI.TEXT_STYLE_CAPTION1;
	}
	static get TEXT_STYLE_CAPTION2 () {
		return Titanium.UI.TEXT_STYLE_CAPTION2;
	}
	static get TEXT_STYLE_FOOTNOTE () {
		return Titanium.UI.TEXT_STYLE_FOOTNOTE;
	}
	static get TEXT_STYLE_HEADLINE () {
		return Titanium.UI.TEXT_STYLE_HEADLINE;
	}
	static get TEXT_STYLE_SUBHEADLINE () {
		return Titanium.UI.TEXT_STYLE_SUBHEADLINE;
	}
	static get TEXT_VERTICAL_ALIGNMENT_BOTTOM () {
		return Titanium.UI.TEXT_VERTICAL_ALIGNMENT_BOTTOM;
	}
	static get TEXT_VERTICAL_ALIGNMENT_CENTER () {
		return Titanium.UI.TEXT_VERTICAL_ALIGNMENT_CENTER;
	}
	static get TEXT_VERTICAL_ALIGNMENT_TOP () {
		return Titanium.UI.TEXT_VERTICAL_ALIGNMENT_TOP;
	}
	static get UNIT_CM () {
		return Titanium.UI.UNIT_CM;
	}
	static get UNIT_DIP () {
		return Titanium.UI.UNIT_DIP;
	}
	static get UNIT_IN () {
		return Titanium.UI.UNIT_IN;
	}
	static get UNIT_MM () {
		return Titanium.UI.UNIT_MM;
	}
	static get UNIT_PX () {
		return Titanium.UI.UNIT_PX;
	}
	static get UNKNOWN () {
		return Titanium.UI.UNKNOWN;
	}
	static get UPSIDE_PORTRAIT () {
		return Titanium.UI.UPSIDE_PORTRAIT;
	}
	static get URL_ERROR_AUTHENTICATION () {
		return Titanium.UI.URL_ERROR_AUTHENTICATION;
	}
	static get URL_ERROR_BAD_URL () {
		return Titanium.UI.URL_ERROR_BAD_URL;
	}
	static get URL_ERROR_CONNECT () {
		return Titanium.UI.URL_ERROR_CONNECT;
	}
	static get URL_ERROR_FILE () {
		return Titanium.UI.URL_ERROR_FILE;
	}
	static get URL_ERROR_FILE_NOT_FOUND () {
		return Titanium.UI.URL_ERROR_FILE_NOT_FOUND;
	}
	static get URL_ERROR_HOST_LOOKUP () {
		return Titanium.UI.URL_ERROR_HOST_LOOKUP;
	}
	static get URL_ERROR_REDIRECT_LOOP () {
		return Titanium.UI.URL_ERROR_REDIRECT_LOOP;
	}
	static get URL_ERROR_SSL_FAILED () {
		return Titanium.UI.URL_ERROR_SSL_FAILED;
	}
	static get URL_ERROR_TIMEOUT () {
		return Titanium.UI.URL_ERROR_TIMEOUT;
	}
	static get URL_ERROR_UNKNOWN () {
		return Titanium.UI.URL_ERROR_UNKNOWN;
	}
	static get URL_ERROR_UNSUPPORTED_SCHEME () {
		return Titanium.UI.URL_ERROR_UNSUPPORTED_SCHEME;
	}
	static get ATTRIBUTE_FONT () {
		return Titanium.UI.ATTRIBUTE_FONT;
	}
	static get ATTRIBUTE_FOREGROUND_COLOR () {
		return Titanium.UI.ATTRIBUTE_FOREGROUND_COLOR;
	}
	static get ATTRIBUTE_BACKGROUND_COLOR () {
		return Titanium.UI.ATTRIBUTE_BACKGROUND_COLOR;
	}
	static get ATTRIBUTE_STRIKETHROUGH_STYLE () {
		return Titanium.UI.ATTRIBUTE_STRIKETHROUGH_STYLE;
	}
	static get ATTRIBUTE_UNDERLINES_STYLE () {
		return Titanium.UI.ATTRIBUTE_UNDERLINES_STYLE;
	}
	static get ATTRIBUTE_LINK () {
		return Titanium.UI.ATTRIBUTE_LINK;
	}
	static get ATTRIBUTE_UNDERLINE_COLOR () {
		return Titanium.UI.ATTRIBUTE_UNDERLINE_COLOR;
	}
	static get ATTRIBUTE_KERN () {
		return Titanium.UI.ATTRIBUTE_KERN;
	}
	static get ATTRIBUTE_STROKE_COLOR () {
		return Titanium.UI.ATTRIBUTE_STROKE_COLOR;
	}
	static get ATTRIBUTE_STROKE_WIDTH () {
		return Titanium.UI.ATTRIBUTE_STROKE_WIDTH;
	}
	static get ATTRIBUTE_SHADOW () {
		return Titanium.UI.ATTRIBUTE_SHADOW;
	}
	static get ATTRIBUTE_WRITING_DIRECTION () {
		return Titanium.UI.ATTRIBUTE_WRITING_DIRECTION;
	}
	static get ATTRIBUTE_TEXT_EFFECT () {
		return Titanium.UI.ATTRIBUTE_TEXT_EFFECT;
	}
	static get ATTRIBUTE_BASELINE_OFFSET () {
		return Titanium.UI.ATTRIBUTE_BASELINE_OFFSET;
	}
	static get ATTRIBUTE_STRIKETHROUGH_COLOR () {
		return Titanium.UI.ATTRIBUTE_STRIKETHROUGH_COLOR;
	}
	static get ATTRIBUTE_OBLIQUENESS () {
		return Titanium.UI.ATTRIBUTE_OBLIQUENESS;
	}
	static get ATTRIBUTE_EXPANSION () {
		return Titanium.UI.ATTRIBUTE_EXPANSION;
	}
	static get ATTRIBUTE_LINE_BREAK () {
		return Titanium.UI.ATTRIBUTE_LINE_BREAK;
	}
	static get ATTRIBUTE_UNDERLINE_STYLE_NONE () {
		return Titanium.UI.ATTRIBUTE_UNDERLINE_STYLE_NONE;
	}
	static get ATTRIBUTE_UNDERLINE_STYLE_SINGLE () {
		return Titanium.UI.ATTRIBUTE_UNDERLINE_STYLE_SINGLE;
	}
	static get ATTRIBUTE_UNDERLINE_STYLE_THICK () {
		return Titanium.UI.ATTRIBUTE_UNDERLINE_STYLE_THICK;
	}
	static get ATTRIBUTE_UNDERLINE_STYLE_DOUBLE () {
		return Titanium.UI.ATTRIBUTE_UNDERLINE_STYLE_DOUBLE;
	}
	static get ATTRIBUTE_UNDERLINE_PATTERN_SOLID () {
		return Titanium.UI.ATTRIBUTE_UNDERLINE_PATTERN_SOLID;
	}
	static get ATTRIBUTE_UNDERLINE_PATTERN_DOT () {
		return Titanium.UI.ATTRIBUTE_UNDERLINE_PATTERN_DOT;
	}
	static get ATTRIBUTE_UNDERLINE_PATTERN_DASH () {
		return Titanium.UI.ATTRIBUTE_UNDERLINE_PATTERN_DASH;
	}
	static get ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT () {
		return Titanium.UI.ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT;
	}
	static get ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT_DOT () {
		return Titanium.UI.ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT_DOT;
	}
	static get ATTRIBUTE_UNDERLINE_BY_WORD () {
		return Titanium.UI.ATTRIBUTE_UNDERLINE_BY_WORD;
	}
	static get ATTRIBUTE_WRITING_DIRECTION_EMBEDDING () {
		return Titanium.UI.ATTRIBUTE_WRITING_DIRECTION_EMBEDDING;
	}
	static get ATTRIBUTE_WRITING_DIRECTION_OVERRIDE () {
		return Titanium.UI.ATTRIBUTE_WRITING_DIRECTION_OVERRIDE;
	}
	static get ATTRIBUTE_WRITING_DIRECTION_NATURAL () {
		return Titanium.UI.ATTRIBUTE_WRITING_DIRECTION_NATURAL;
	}
	static get ATTRIBUTE_WRITING_DIRECTION_LEFT_TO_RIGHT () {
		return Titanium.UI.ATTRIBUTE_WRITING_DIRECTION_LEFT_TO_RIGHT;
	}
	static get ATTRIBUTE_WRITING_DIRECTION_RIGHT_TO_LEFT () {
		return Titanium.UI.ATTRIBUTE_WRITING_DIRECTION_RIGHT_TO_LEFT;
	}
	static get ATTRIBUTE_LETTERPRESS_STYLE () {
		return Titanium.UI.ATTRIBUTE_LETTERPRESS_STYLE;
	}
	static get ATTRIBUTE_LINE_BREAK_BY_WORD_WRAPPING () {
		return Titanium.UI.ATTRIBUTE_LINE_BREAK_BY_WORD_WRAPPING;
	}
	static get ATTRIBUTE_LINE_BREAK_BY_CHAR_WRAPPING () {
		return Titanium.UI.ATTRIBUTE_LINE_BREAK_BY_CHAR_WRAPPING;
	}
	static get ATTRIBUTE_LINE_BREAK_BY_CLIPPING () {
		return Titanium.UI.ATTRIBUTE_LINE_BREAK_BY_CLIPPING;
	}
	static get ATTRIBUTE_LINE_BREAK_BY_TRUNCATING_HEAD () {
		return Titanium.UI.ATTRIBUTE_LINE_BREAK_BY_TRUNCATING_HEAD;
	}
	static get ATTRIBUTE_LINE_BREAK_BY_TRUNCATING_TAIL () {
		return Titanium.UI.ATTRIBUTE_LINE_BREAK_BY_TRUNCATING_TAIL;
	}
	static get ATTRIBUTE_LINE_BREAK_BY_TRUNCATING_MIDDLE () {
		return Titanium.UI.ATTRIBUTE_LINE_BREAK_BY_TRUNCATING_MIDDLE;
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
	get ATTRIBUTE_LIGATURE () {
		return this._object.ATTRIBUTE_LIGATURE;
	}
	get ATTRIBUTE_SUPERSCRIPT_STYLE () {
		return this._object.ATTRIBUTE_SUPERSCRIPT_STYLE;
	}
	get ATTRIBUTE_SUBSCRIPT_STYLE () {
		return this._object.ATTRIBUTE_SUBSCRIPT_STYLE;
	}
	get AUTODETECT_ADDRESS () {
		return this._object.AUTODETECT_ADDRESS;
	}
	get AUTODETECT_ALL () {
		return this._object.AUTODETECT_ALL;
	}
	get AUTODETECT_CALENDAR () {
		return this._object.AUTODETECT_CALENDAR;
	}
	get AUTODETECT_LINK () {
		return this._object.AUTODETECT_LINK;
	}
	get AUTODETECT_NONE () {
		return this._object.AUTODETECT_NONE;
	}
	get AUTODETECT_PHONE () {
		return this._object.AUTODETECT_PHONE;
	}
	get AUTOFILL_TYPE_USERNAME () {
		return this._object.AUTOFILL_TYPE_USERNAME;
	}
	get AUTOFILL_TYPE_PASSWORD () {
		return this._object.AUTOFILL_TYPE_PASSWORD;
	}
	get AUTOFILL_TYPE_NAME () {
		return this._object.AUTOFILL_TYPE_NAME;
	}
	get AUTOFILL_TYPE_NAME_PREFIX () {
		return this._object.AUTOFILL_TYPE_NAME_PREFIX;
	}
	get AUTOFILL_TYPE_GIVEN_NAME () {
		return this._object.AUTOFILL_TYPE_GIVEN_NAME;
	}
	get AUTOFILL_TYPE_MIDDLE_NAME () {
		return this._object.AUTOFILL_TYPE_MIDDLE_NAME;
	}
	get AUTOFILL_TYPE_FAMILY_NAME () {
		return this._object.AUTOFILL_TYPE_FAMILY_NAME;
	}
	get AUTOFILL_TYPE_NAME_SUFFIX () {
		return this._object.AUTOFILL_TYPE_NAME_SUFFIX;
	}
	get AUTOFILL_TYPE_NICKNAME () {
		return this._object.AUTOFILL_TYPE_NICKNAME;
	}
	get AUTOFILL_TYPE_JOB_TITLE () {
		return this._object.AUTOFILL_TYPE_JOB_TITLE;
	}
	get AUTOFILL_TYPE_ORGANIZATION_NAME () {
		return this._object.AUTOFILL_TYPE_ORGANIZATION_NAME;
	}
	get AUTOFILL_TYPE_LOCATION () {
		return this._object.AUTOFILL_TYPE_LOCATION;
	}
	get AUTOFILL_TYPE_ADDRESS () {
		return this._object.AUTOFILL_TYPE_ADDRESS;
	}
	get AUTOFILL_TYPE_ADDRESS_LINE1 () {
		return this._object.AUTOFILL_TYPE_ADDRESS_LINE1;
	}
	get AUTOFILL_TYPE_ADDRESS_LINE2 () {
		return this._object.AUTOFILL_TYPE_ADDRESS_LINE2;
	}
	get AUTOFILL_TYPE_ADDRESS_CITY () {
		return this._object.AUTOFILL_TYPE_ADDRESS_CITY;
	}
	get AUTOFILL_TYPE_ADDRESS_STATE () {
		return this._object.AUTOFILL_TYPE_ADDRESS_STATE;
	}
	get AUTOFILL_TYPE_ADDRESS_CITY_STATE () {
		return this._object.AUTOFILL_TYPE_ADDRESS_CITY_STATE;
	}
	get AUTOFILL_TYPE_SUBLOCALITY () {
		return this._object.AUTOFILL_TYPE_SUBLOCALITY;
	}
	get AUTOFILL_TYPE_COUNTRY_NAME () {
		return this._object.AUTOFILL_TYPE_COUNTRY_NAME;
	}
	get AUTOFILL_TYPE_POSTAL_CODE () {
		return this._object.AUTOFILL_TYPE_POSTAL_CODE;
	}
	get AUTOFILL_TYPE_PHONE () {
		return this._object.AUTOFILL_TYPE_PHONE;
	}
	get AUTOFILL_TYPE_EMAIL () {
		return this._object.AUTOFILL_TYPE_EMAIL;
	}
	get AUTOFILL_TYPE_URL () {
		return this._object.AUTOFILL_TYPE_URL;
	}
	get AUTOFILL_TYPE_CARD_NUMBER () {
		return this._object.AUTOFILL_TYPE_CARD_NUMBER;
	}
	get AUTOFILL_TYPE_CARD_SECURITY_CODE () {
		return this._object.AUTOFILL_TYPE_CARD_SECURITY_CODE;
	}
	get AUTOFILL_TYPE_CARD_EXPIRATION_DATE () {
		return this._object.AUTOFILL_TYPE_CARD_EXPIRATION_DATE;
	}
	get AUTOFILL_TYPE_CARD_EXPIRATION_DAY () {
		return this._object.AUTOFILL_TYPE_CARD_EXPIRATION_DAY;
	}
	get AUTOFILL_TYPE_CARD_EXPIRATION_MONTH () {
		return this._object.AUTOFILL_TYPE_CARD_EXPIRATION_MONTH;
	}
	get AUTOFILL_TYPE_CARD_EXPIRATION_YEAR () {
		return this._object.AUTOFILL_TYPE_CARD_EXPIRATION_YEAR;
	}
	get BLEND_MODE_CLEAR () {
		return this._object.BLEND_MODE_CLEAR;
	}
	get BLEND_MODE_COLOR () {
		return this._object.BLEND_MODE_COLOR;
	}
	get BLEND_MODE_COLOR_BURN () {
		return this._object.BLEND_MODE_COLOR_BURN;
	}
	get BLEND_MODE_COLOR_DODGE () {
		return this._object.BLEND_MODE_COLOR_DODGE;
	}
	get BLEND_MODE_COPY () {
		return this._object.BLEND_MODE_COPY;
	}
	get BLEND_MODE_DARKEN () {
		return this._object.BLEND_MODE_DARKEN;
	}
	get BLEND_MODE_DESTINATION_ATOP () {
		return this._object.BLEND_MODE_DESTINATION_ATOP;
	}
	get BLEND_MODE_DESTINATION_IN () {
		return this._object.BLEND_MODE_DESTINATION_IN;
	}
	get BLEND_MODE_DESTINATION_OUT () {
		return this._object.BLEND_MODE_DESTINATION_OUT;
	}
	get BLEND_MODE_DESTINATION_OVER () {
		return this._object.BLEND_MODE_DESTINATION_OVER;
	}
	get BLEND_MODE_DIFFERENCE () {
		return this._object.BLEND_MODE_DIFFERENCE;
	}
	get BLEND_MODE_EXCLUSION () {
		return this._object.BLEND_MODE_EXCLUSION;
	}
	get BLEND_MODE_HARD_LIGHT () {
		return this._object.BLEND_MODE_HARD_LIGHT;
	}
	get BLEND_MODE_HUE () {
		return this._object.BLEND_MODE_HUE;
	}
	get BLEND_MODE_LIGHTEN () {
		return this._object.BLEND_MODE_LIGHTEN;
	}
	get BLEND_MODE_LUMINOSITY () {
		return this._object.BLEND_MODE_LUMINOSITY;
	}
	get BLEND_MODE_MULTIPLY () {
		return this._object.BLEND_MODE_MULTIPLY;
	}
	get BLEND_MODE_NORMAL () {
		return this._object.BLEND_MODE_NORMAL;
	}
	get BLEND_MODE_OVERLAY () {
		return this._object.BLEND_MODE_OVERLAY;
	}
	get BLEND_MODE_PLUS_DARKER () {
		return this._object.BLEND_MODE_PLUS_DARKER;
	}
	get BLEND_MODE_PLUS_LIGHTER () {
		return this._object.BLEND_MODE_PLUS_LIGHTER;
	}
	get BLEND_MODE_SATURATION () {
		return this._object.BLEND_MODE_SATURATION;
	}
	get BLEND_MODE_SCREEN () {
		return this._object.BLEND_MODE_SCREEN;
	}
	get BLEND_MODE_SOFT_LIGHT () {
		return this._object.BLEND_MODE_SOFT_LIGHT;
	}
	get BLEND_MODE_SOURCE_ATOP () {
		return this._object.BLEND_MODE_SOURCE_ATOP;
	}
	get BLEND_MODE_SOURCE_IN () {
		return this._object.BLEND_MODE_SOURCE_IN;
	}
	get BLEND_MODE_SOURCE_OUT () {
		return this._object.BLEND_MODE_SOURCE_OUT;
	}
	get BLEND_MODE_XOR () {
		return this._object.BLEND_MODE_XOR;
	}
	get HINT_TYPE_STATIC () {
		return this._object.HINT_TYPE_STATIC;
	}
	get HINT_TYPE_ANIMATED () {
		return this._object.HINT_TYPE_ANIMATED;
	}
	get TEXT_ELLIPSIZE_TRUNCATE_WORD_WRAP () {
		return this._object.TEXT_ELLIPSIZE_TRUNCATE_WORD_WRAP;
	}
	get TEXT_ELLIPSIZE_TRUNCATE_CHAR_WRAP () {
		return this._object.TEXT_ELLIPSIZE_TRUNCATE_CHAR_WRAP;
	}
	get TEXT_ELLIPSIZE_TRUNCATE_CLIP () {
		return this._object.TEXT_ELLIPSIZE_TRUNCATE_CLIP;
	}
	get TEXT_ELLIPSIZE_TRUNCATE_START () {
		return this._object.TEXT_ELLIPSIZE_TRUNCATE_START;
	}
	get TEXT_ELLIPSIZE_TRUNCATE_MIDDLE () {
		return this._object.TEXT_ELLIPSIZE_TRUNCATE_MIDDLE;
	}
	get TEXT_ELLIPSIZE_TRUNCATE_END () {
		return this._object.TEXT_ELLIPSIZE_TRUNCATE_END;
	}
	get TEXT_ELLIPSIZE_TRUNCATE_MARQUEE () {
		return this._object.TEXT_ELLIPSIZE_TRUNCATE_MARQUEE;
	}
	get TEXT_ELLIPSIZE_TRUNCATE_NONE () {
		return this._object.TEXT_ELLIPSIZE_TRUNCATE_NONE;
	}
	get HIDDEN_BEHAVIOR_GONE () {
		return this._object.HIDDEN_BEHAVIOR_GONE;
	}
	get HIDDEN_BEHAVIOR_INVISIBLE () {
		return this._object.HIDDEN_BEHAVIOR_INVISIBLE;
	}
	get INPUT_TYPE_CLASS_NUMBER () {
		return this._object.INPUT_TYPE_CLASS_NUMBER;
	}
	get INPUT_TYPE_CLASS_TEXT () {
		return this._object.INPUT_TYPE_CLASS_TEXT;
	}
	get KEYBOARD_APPEARANCE_DARK () {
		return this._object.KEYBOARD_APPEARANCE_DARK;
	}
	get KEYBOARD_APPEARANCE_LIGHT () {
		return this._object.KEYBOARD_APPEARANCE_LIGHT;
	}
	get KEYBOARD_TYPE_DECIMAL_PAD () {
		return this._object.KEYBOARD_TYPE_DECIMAL_PAD;
	}
	get KEYBOARD_TYPE_ASCII () {
		return this._object.KEYBOARD_TYPE_ASCII;
	}
	get KEYBOARD_TYPE_DEFAULT () {
		return this._object.KEYBOARD_TYPE_DEFAULT;
	}
	get KEYBOARD_TYPE_EMAIL () {
		return this._object.KEYBOARD_TYPE_EMAIL;
	}
	get KEYBOARD_TYPE_NAMEPHONE_PAD () {
		return this._object.KEYBOARD_TYPE_NAMEPHONE_PAD;
	}
	get KEYBOARD_TYPE_NUMBERS_PUNCTUATION () {
		return this._object.KEYBOARD_TYPE_NUMBERS_PUNCTUATION;
	}
	get KEYBOARD_TYPE_NUMBER_PAD () {
		return this._object.KEYBOARD_TYPE_NUMBER_PAD;
	}
	get KEYBOARD_TYPE_PHONE_PAD () {
		return this._object.KEYBOARD_TYPE_PHONE_PAD;
	}
	get KEYBOARD_TYPE_WEBSEARCH () {
		return this._object.KEYBOARD_TYPE_WEBSEARCH;
	}
	get KEYBOARD_TYPE_TWITTER () {
		return this._object.KEYBOARD_TYPE_TWITTER;
	}
	get KEYBOARD_TYPE_URL () {
		return this._object.KEYBOARD_TYPE_URL;
	}
	get CLIPBOARD_OPTION_LOCAL_ONLY () {
		return this._object.CLIPBOARD_OPTION_LOCAL_ONLY;
	}
	get CLIPBOARD_OPTION_EXPIRATION_DATE () {
		return this._object.CLIPBOARD_OPTION_EXPIRATION_DATE;
	}
	get RETURNKEY_CONTINUE () {
		return this._object.RETURNKEY_CONTINUE;
	}
	get TABLE_VIEW_SEPARATOR_STYLE_NONE () {
		return this._object.TABLE_VIEW_SEPARATOR_STYLE_NONE;
	}
	get TABLE_VIEW_SEPARATOR_STYLE_SINGLE_LINE () {
		return this._object.TABLE_VIEW_SEPARATOR_STYLE_SINGLE_LINE;
	}
	get TEXT_STYLE_CALLOUT () {
		return this._object.TEXT_STYLE_CALLOUT;
	}
	get TEXT_STYLE_TITLE1 () {
		return this._object.TEXT_STYLE_TITLE1;
	}
	get TEXT_STYLE_TITLE2 () {
		return this._object.TEXT_STYLE_TITLE2;
	}
	get TEXT_STYLE_TITLE3 () {
		return this._object.TEXT_STYLE_TITLE3;
	}
	get backgroundColor () {
		return this._object.backgroundColor;
	}
	set backgroundColor (value) {
		this._object.backgroundColor = value;
	}
	get backgroundImage () {
		return this._object.backgroundImage;
	}
	set backgroundImage (value) {
		this._object.backgroundImage = value;
	}
	get orientation () {
		return this._object.orientation;
	}
	set orientation (value) {
		this._object.orientation = value;
	}
	get tintColor () {
		return this._object.tintColor;
	}
	set tintColor (value) {
		this._object.tintColor = value;
	}
	get currentTab () {
		return new Tab(this._object.currentTab);
	}
	set currentTab (value) {
		this._object.currentTab = value;
	}
	get currentWindow () {
		return new Window(this._object.currentWindow);
	}
	get ANIMATION_CURVE_EASE_IN () {
		return this._object.ANIMATION_CURVE_EASE_IN;
	}
	get ANIMATION_CURVE_EASE_IN_OUT () {
		return this._object.ANIMATION_CURVE_EASE_IN_OUT;
	}
	get ANIMATION_CURVE_EASE_OUT () {
		return this._object.ANIMATION_CURVE_EASE_OUT;
	}
	get ANIMATION_CURVE_LINEAR () {
		return this._object.ANIMATION_CURVE_LINEAR;
	}
	get AUTOLINK_ALL () {
		return this._object.AUTOLINK_ALL;
	}
	get AUTOLINK_CALENDAR () {
		return this._object.AUTOLINK_CALENDAR;
	}
	get AUTOLINK_EMAIL_ADDRESSES () {
		return this._object.AUTOLINK_EMAIL_ADDRESSES;
	}
	get AUTOLINK_MAP_ADDRESSES () {
		return this._object.AUTOLINK_MAP_ADDRESSES;
	}
	get AUTOLINK_NONE () {
		return this._object.AUTOLINK_NONE;
	}
	get AUTOLINK_PHONE_NUMBERS () {
		return this._object.AUTOLINK_PHONE_NUMBERS;
	}
	get AUTOLINK_URLS () {
		return this._object.AUTOLINK_URLS;
	}
	get EXTEND_EDGE_ALL () {
		return this._object.EXTEND_EDGE_ALL;
	}
	get EXTEND_EDGE_BOTTOM () {
		return this._object.EXTEND_EDGE_BOTTOM;
	}
	get EXTEND_EDGE_LEFT () {
		return this._object.EXTEND_EDGE_LEFT;
	}
	get EXTEND_EDGE_NONE () {
		return this._object.EXTEND_EDGE_NONE;
	}
	get EXTEND_EDGE_RIGHT () {
		return this._object.EXTEND_EDGE_RIGHT;
	}
	get EXTEND_EDGE_TOP () {
		return this._object.EXTEND_EDGE_TOP;
	}
	get FACE_DOWN () {
		return this._object.FACE_DOWN;
	}
	get FACE_UP () {
		return this._object.FACE_UP;
	}
	get FILL () {
		return this._object.FILL;
	}
	get INPUT_BORDERSTYLE_BEZEL () {
		return this._object.INPUT_BORDERSTYLE_BEZEL;
	}
	get INPUT_BORDERSTYLE_LINE () {
		return this._object.INPUT_BORDERSTYLE_LINE;
	}
	get INPUT_BORDERSTYLE_NONE () {
		return this._object.INPUT_BORDERSTYLE_NONE;
	}
	get INPUT_BORDERSTYLE_ROUNDED () {
		return this._object.INPUT_BORDERSTYLE_ROUNDED;
	}
	get INPUT_BUTTONMODE_ALWAYS () {
		return this._object.INPUT_BUTTONMODE_ALWAYS;
	}
	get INPUT_BUTTONMODE_NEVER () {
		return this._object.INPUT_BUTTONMODE_NEVER;
	}
	get INPUT_BUTTONMODE_ONBLUR () {
		return this._object.INPUT_BUTTONMODE_ONBLUR;
	}
	get INPUT_BUTTONMODE_ONFOCUS () {
		return this._object.INPUT_BUTTONMODE_ONFOCUS;
	}
	get KEYBOARD_APPEARANCE_ALERT () {
		return this._object.KEYBOARD_APPEARANCE_ALERT;
	}
	get KEYBOARD_APPEARANCE_DEFAULT () {
		return this._object.KEYBOARD_APPEARANCE_DEFAULT;
	}
	get KEYBOARD_ASCII () {
		return this._object.KEYBOARD_ASCII;
	}
	get KEYBOARD_DECIMAL_PAD () {
		return this._object.KEYBOARD_DECIMAL_PAD;
	}
	get KEYBOARD_DEFAULT () {
		return this._object.KEYBOARD_DEFAULT;
	}
	get KEYBOARD_EMAIL () {
		return this._object.KEYBOARD_EMAIL;
	}
	get KEYBOARD_NAMEPHONE_PAD () {
		return this._object.KEYBOARD_NAMEPHONE_PAD;
	}
	get KEYBOARD_NUMBERS_PUNCTUATION () {
		return this._object.KEYBOARD_NUMBERS_PUNCTUATION;
	}
	get KEYBOARD_NUMBER_PAD () {
		return this._object.KEYBOARD_NUMBER_PAD;
	}
	get KEYBOARD_PHONE_PAD () {
		return this._object.KEYBOARD_PHONE_PAD;
	}
	get KEYBOARD_URL () {
		return this._object.KEYBOARD_URL;
	}
	get LANDSCAPE_LEFT () {
		return this._object.LANDSCAPE_LEFT;
	}
	get LANDSCAPE_RIGHT () {
		return this._object.LANDSCAPE_RIGHT;
	}
	get LIST_ACCESSORY_TYPE_CHECKMARK () {
		return this._object.LIST_ACCESSORY_TYPE_CHECKMARK;
	}
	get LIST_ACCESSORY_TYPE_DETAIL () {
		return this._object.LIST_ACCESSORY_TYPE_DETAIL;
	}
	get LIST_ACCESSORY_TYPE_DISCLOSURE () {
		return this._object.LIST_ACCESSORY_TYPE_DISCLOSURE;
	}
	get LIST_ACCESSORY_TYPE_NONE () {
		return this._object.LIST_ACCESSORY_TYPE_NONE;
	}
	get LIST_ITEM_TEMPLATE_CONTACTS () {
		return this._object.LIST_ITEM_TEMPLATE_CONTACTS;
	}
	get LIST_ITEM_TEMPLATE_DEFAULT () {
		return this._object.LIST_ITEM_TEMPLATE_DEFAULT;
	}
	get LIST_ITEM_TEMPLATE_SETTINGS () {
		return this._object.LIST_ITEM_TEMPLATE_SETTINGS;
	}
	get LIST_ITEM_TEMPLATE_SUBTITLE () {
		return this._object.LIST_ITEM_TEMPLATE_SUBTITLE;
	}
	get NOTIFICATION_DURATION_LONG () {
		return this._object.NOTIFICATION_DURATION_LONG;
	}
	get NOTIFICATION_DURATION_SHORT () {
		return this._object.NOTIFICATION_DURATION_SHORT;
	}
	get PICKER_TYPE_COUNT_DOWN_TIMER () {
		return this._object.PICKER_TYPE_COUNT_DOWN_TIMER;
	}
	get PICKER_TYPE_DATE () {
		return this._object.PICKER_TYPE_DATE;
	}
	get PICKER_TYPE_DATE_AND_TIME () {
		return this._object.PICKER_TYPE_DATE_AND_TIME;
	}
	get PICKER_TYPE_PLAIN () {
		return this._object.PICKER_TYPE_PLAIN;
	}
	get PICKER_TYPE_TIME () {
		return this._object.PICKER_TYPE_TIME;
	}
	get PORTRAIT () {
		return this._object.PORTRAIT;
	}
	get RETURNKEY_DEFAULT () {
		return this._object.RETURNKEY_DEFAULT;
	}
	get RETURNKEY_DONE () {
		return this._object.RETURNKEY_DONE;
	}
	get RETURNKEY_EMERGENCY_CALL () {
		return this._object.RETURNKEY_EMERGENCY_CALL;
	}
	get RETURNKEY_GO () {
		return this._object.RETURNKEY_GO;
	}
	get RETURNKEY_GOOGLE () {
		return this._object.RETURNKEY_GOOGLE;
	}
	get RETURNKEY_JOIN () {
		return this._object.RETURNKEY_JOIN;
	}
	get RETURNKEY_NEXT () {
		return this._object.RETURNKEY_NEXT;
	}
	get RETURNKEY_ROUTE () {
		return this._object.RETURNKEY_ROUTE;
	}
	get RETURNKEY_SEARCH () {
		return this._object.RETURNKEY_SEARCH;
	}
	get RETURNKEY_SEND () {
		return this._object.RETURNKEY_SEND;
	}
	get RETURNKEY_YAHOO () {
		return this._object.RETURNKEY_YAHOO;
	}
	get SIZE () {
		return this._object.SIZE;
	}
	get TEXT_ALIGNMENT_CENTER () {
		return this._object.TEXT_ALIGNMENT_CENTER;
	}
	get TEXT_ALIGNMENT_LEFT () {
		return this._object.TEXT_ALIGNMENT_LEFT;
	}
	get TEXT_ALIGNMENT_RIGHT () {
		return this._object.TEXT_ALIGNMENT_RIGHT;
	}
	get TEXT_ALIGNMENT_JUSTIFY () {
		return this._object.TEXT_ALIGNMENT_JUSTIFY;
	}
	get TEXT_AUTOCAPITALIZATION_ALL () {
		return this._object.TEXT_AUTOCAPITALIZATION_ALL;
	}
	get TEXT_AUTOCAPITALIZATION_NONE () {
		return this._object.TEXT_AUTOCAPITALIZATION_NONE;
	}
	get TEXT_AUTOCAPITALIZATION_SENTENCES () {
		return this._object.TEXT_AUTOCAPITALIZATION_SENTENCES;
	}
	get TEXT_AUTOCAPITALIZATION_WORDS () {
		return this._object.TEXT_AUTOCAPITALIZATION_WORDS;
	}
	get TEXT_STYLE_BODY () {
		return this._object.TEXT_STYLE_BODY;
	}
	get TEXT_STYLE_CAPTION1 () {
		return this._object.TEXT_STYLE_CAPTION1;
	}
	get TEXT_STYLE_CAPTION2 () {
		return this._object.TEXT_STYLE_CAPTION2;
	}
	get TEXT_STYLE_FOOTNOTE () {
		return this._object.TEXT_STYLE_FOOTNOTE;
	}
	get TEXT_STYLE_HEADLINE () {
		return this._object.TEXT_STYLE_HEADLINE;
	}
	get TEXT_STYLE_SUBHEADLINE () {
		return this._object.TEXT_STYLE_SUBHEADLINE;
	}
	get TEXT_VERTICAL_ALIGNMENT_BOTTOM () {
		return this._object.TEXT_VERTICAL_ALIGNMENT_BOTTOM;
	}
	get TEXT_VERTICAL_ALIGNMENT_CENTER () {
		return this._object.TEXT_VERTICAL_ALIGNMENT_CENTER;
	}
	get TEXT_VERTICAL_ALIGNMENT_TOP () {
		return this._object.TEXT_VERTICAL_ALIGNMENT_TOP;
	}
	get UNIT_CM () {
		return this._object.UNIT_CM;
	}
	get UNIT_DIP () {
		return this._object.UNIT_DIP;
	}
	get UNIT_IN () {
		return this._object.UNIT_IN;
	}
	get UNIT_MM () {
		return this._object.UNIT_MM;
	}
	get UNIT_PX () {
		return this._object.UNIT_PX;
	}
	get UNKNOWN () {
		return this._object.UNKNOWN;
	}
	get UPSIDE_PORTRAIT () {
		return this._object.UPSIDE_PORTRAIT;
	}
	get URL_ERROR_AUTHENTICATION () {
		return this._object.URL_ERROR_AUTHENTICATION;
	}
	get URL_ERROR_BAD_URL () {
		return this._object.URL_ERROR_BAD_URL;
	}
	get URL_ERROR_CONNECT () {
		return this._object.URL_ERROR_CONNECT;
	}
	get URL_ERROR_FILE () {
		return this._object.URL_ERROR_FILE;
	}
	get URL_ERROR_FILE_NOT_FOUND () {
		return this._object.URL_ERROR_FILE_NOT_FOUND;
	}
	get URL_ERROR_HOST_LOOKUP () {
		return this._object.URL_ERROR_HOST_LOOKUP;
	}
	get URL_ERROR_REDIRECT_LOOP () {
		return this._object.URL_ERROR_REDIRECT_LOOP;
	}
	get URL_ERROR_SSL_FAILED () {
		return this._object.URL_ERROR_SSL_FAILED;
	}
	get URL_ERROR_TIMEOUT () {
		return this._object.URL_ERROR_TIMEOUT;
	}
	get URL_ERROR_UNKNOWN () {
		return this._object.URL_ERROR_UNKNOWN;
	}
	get URL_ERROR_UNSUPPORTED_SCHEME () {
		return this._object.URL_ERROR_UNSUPPORTED_SCHEME;
	}
	get ATTRIBUTE_FONT () {
		return this._object.ATTRIBUTE_FONT;
	}
	get ATTRIBUTE_FOREGROUND_COLOR () {
		return this._object.ATTRIBUTE_FOREGROUND_COLOR;
	}
	get ATTRIBUTE_BACKGROUND_COLOR () {
		return this._object.ATTRIBUTE_BACKGROUND_COLOR;
	}
	get ATTRIBUTE_STRIKETHROUGH_STYLE () {
		return this._object.ATTRIBUTE_STRIKETHROUGH_STYLE;
	}
	get ATTRIBUTE_UNDERLINES_STYLE () {
		return this._object.ATTRIBUTE_UNDERLINES_STYLE;
	}
	get ATTRIBUTE_LINK () {
		return this._object.ATTRIBUTE_LINK;
	}
	get ATTRIBUTE_UNDERLINE_COLOR () {
		return this._object.ATTRIBUTE_UNDERLINE_COLOR;
	}
	get ATTRIBUTE_KERN () {
		return this._object.ATTRIBUTE_KERN;
	}
	get ATTRIBUTE_STROKE_COLOR () {
		return this._object.ATTRIBUTE_STROKE_COLOR;
	}
	get ATTRIBUTE_STROKE_WIDTH () {
		return this._object.ATTRIBUTE_STROKE_WIDTH;
	}
	get ATTRIBUTE_SHADOW () {
		return this._object.ATTRIBUTE_SHADOW;
	}
	get ATTRIBUTE_WRITING_DIRECTION () {
		return this._object.ATTRIBUTE_WRITING_DIRECTION;
	}
	get ATTRIBUTE_TEXT_EFFECT () {
		return this._object.ATTRIBUTE_TEXT_EFFECT;
	}
	get ATTRIBUTE_BASELINE_OFFSET () {
		return this._object.ATTRIBUTE_BASELINE_OFFSET;
	}
	get ATTRIBUTE_STRIKETHROUGH_COLOR () {
		return this._object.ATTRIBUTE_STRIKETHROUGH_COLOR;
	}
	get ATTRIBUTE_OBLIQUENESS () {
		return this._object.ATTRIBUTE_OBLIQUENESS;
	}
	get ATTRIBUTE_EXPANSION () {
		return this._object.ATTRIBUTE_EXPANSION;
	}
	get ATTRIBUTE_LINE_BREAK () {
		return this._object.ATTRIBUTE_LINE_BREAK;
	}
	get ATTRIBUTE_UNDERLINE_STYLE_NONE () {
		return this._object.ATTRIBUTE_UNDERLINE_STYLE_NONE;
	}
	get ATTRIBUTE_UNDERLINE_STYLE_SINGLE () {
		return this._object.ATTRIBUTE_UNDERLINE_STYLE_SINGLE;
	}
	get ATTRIBUTE_UNDERLINE_STYLE_THICK () {
		return this._object.ATTRIBUTE_UNDERLINE_STYLE_THICK;
	}
	get ATTRIBUTE_UNDERLINE_STYLE_DOUBLE () {
		return this._object.ATTRIBUTE_UNDERLINE_STYLE_DOUBLE;
	}
	get ATTRIBUTE_UNDERLINE_PATTERN_SOLID () {
		return this._object.ATTRIBUTE_UNDERLINE_PATTERN_SOLID;
	}
	get ATTRIBUTE_UNDERLINE_PATTERN_DOT () {
		return this._object.ATTRIBUTE_UNDERLINE_PATTERN_DOT;
	}
	get ATTRIBUTE_UNDERLINE_PATTERN_DASH () {
		return this._object.ATTRIBUTE_UNDERLINE_PATTERN_DASH;
	}
	get ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT () {
		return this._object.ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT;
	}
	get ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT_DOT () {
		return this._object.ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT_DOT;
	}
	get ATTRIBUTE_UNDERLINE_BY_WORD () {
		return this._object.ATTRIBUTE_UNDERLINE_BY_WORD;
	}
	get ATTRIBUTE_WRITING_DIRECTION_EMBEDDING () {
		return this._object.ATTRIBUTE_WRITING_DIRECTION_EMBEDDING;
	}
	get ATTRIBUTE_WRITING_DIRECTION_OVERRIDE () {
		return this._object.ATTRIBUTE_WRITING_DIRECTION_OVERRIDE;
	}
	get ATTRIBUTE_WRITING_DIRECTION_NATURAL () {
		return this._object.ATTRIBUTE_WRITING_DIRECTION_NATURAL;
	}
	get ATTRIBUTE_WRITING_DIRECTION_LEFT_TO_RIGHT () {
		return this._object.ATTRIBUTE_WRITING_DIRECTION_LEFT_TO_RIGHT;
	}
	get ATTRIBUTE_WRITING_DIRECTION_RIGHT_TO_LEFT () {
		return this._object.ATTRIBUTE_WRITING_DIRECTION_RIGHT_TO_LEFT;
	}
	get ATTRIBUTE_LETTERPRESS_STYLE () {
		return this._object.ATTRIBUTE_LETTERPRESS_STYLE;
	}
	get ATTRIBUTE_LINE_BREAK_BY_WORD_WRAPPING () {
		return this._object.ATTRIBUTE_LINE_BREAK_BY_WORD_WRAPPING;
	}
	get ATTRIBUTE_LINE_BREAK_BY_CHAR_WRAPPING () {
		return this._object.ATTRIBUTE_LINE_BREAK_BY_CHAR_WRAPPING;
	}
	get ATTRIBUTE_LINE_BREAK_BY_CLIPPING () {
		return this._object.ATTRIBUTE_LINE_BREAK_BY_CLIPPING;
	}
	get ATTRIBUTE_LINE_BREAK_BY_TRUNCATING_HEAD () {
		return this._object.ATTRIBUTE_LINE_BREAK_BY_TRUNCATING_HEAD;
	}
	get ATTRIBUTE_LINE_BREAK_BY_TRUNCATING_TAIL () {
		return this._object.ATTRIBUTE_LINE_BREAK_BY_TRUNCATING_TAIL;
	}
	get ATTRIBUTE_LINE_BREAK_BY_TRUNCATING_MIDDLE () {
		return this._object.ATTRIBUTE_LINE_BREAK_BY_TRUNCATING_MIDDLE;
	}

	// static properties
	static get bubbleParent () {
		return Titanium.UI.bubbleParent;
	}
	static set bubbleParent (value) {
		Titanium.UI.bubbleParent = value;
	}
	static get orientation () {
		return Titanium.UI.orientation;
	}
	static set orientation (value) {
		Titanium.UI.orientation = value;
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
	convertUnits (convertFromValue, convertToUnits) {
		return this._object.convertUnits(convertFromValue, convertToUnits);
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
	getBackgroundColor () {
		return this._object.getBackgroundColor();
	}
	setBackgroundColor (backgroundColor) {
		return this._object.setBackgroundColor(backgroundColor);
	}
	getBackgroundImage () {
		return this._object.getBackgroundImage();
	}
	setBackgroundImage (backgroundImage) {
		return this._object.setBackgroundImage(backgroundImage);
	}
	getOrientation () {
		return this._object.getOrientation();
	}
	setOrientation (orientation) {
		return this._object.setOrientation(orientation);
	}
	getTintColor () {
		return this._object.getTintColor();
	}
	setTintColor (tintColor) {
		return this._object.setTintColor(tintColor);
	}
	getCurrentTab () {
		return new Tab(this._object.getCurrentTab());
	}
	setCurrentTab (currentTab) {
		currentTab = normalize(currentTab);
		return this._object.setCurrentTab(currentTab);
	}
	getCurrentWindow () {
		return new Window(this._object.getCurrentWindow());
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
	static convertUnits (convertFromValue, convertToUnits) {
		return this._object.convertUnits(convertFromValue, convertToUnits);
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
	static getBackgroundColor () {
		return this._object.getBackgroundColor();
	}
	static setBackgroundColor (backgroundColor) {
		return this._object.setBackgroundColor(backgroundColor);
	}
	static getBackgroundImage () {
		return this._object.getBackgroundImage();
	}
	static setBackgroundImage (backgroundImage) {
		return this._object.setBackgroundImage(backgroundImage);
	}
	static getOrientation () {
		return this._object.getOrientation();
	}
	static setOrientation (orientation) {
		return this._object.setOrientation(orientation);
	}
	static getTintColor () {
		return this._object.getTintColor();
	}
	static setTintColor (tintColor) {
		return this._object.setTintColor(tintColor);
	}
	static getCurrentTab () {
		return new Tab(this._object.getCurrentTab());
	}
	static setCurrentTab (currentTab) {
		currentTab = normalize(currentTab);
		return this._object.setCurrentTab(currentTab);
	}
	static getCurrentWindow () {
		return new Window(this._object.getCurrentWindow());
	}

	// modules
	static get Window () {
		return Window;
	}
	static get _2DMatrix () {
		return _2DMatrix;
	}
	static get View () {
		return View;
	}
	static get _3DMatrix () {
		return _3DMatrix;
	}
	static get ActivityIndicator () {
		return ActivityIndicator;
	}
	static get AlertDialog () {
		return AlertDialog;
	}
	static get Animation () {
		return Animation;
	}
	static get AttributedString () {
		return AttributedString;
	}
	static get Button () {
		return Button;
	}
	static get ButtonBar () {
		return ButtonBar;
	}
	static get CoverFlowView () {
		return CoverFlowView;
	}
	static get DashboardItem () {
		return DashboardItem;
	}
	static get DashboardView () {
		return DashboardView;
	}
	static get EmailDialog () {
		return EmailDialog;
	}
	static get ImageView () {
		return ImageView;
	}
	static get Label () {
		return Label;
	}
	static get ListSection () {
		return ListSection;
	}
	static get ListView () {
		return ListView;
	}
	static get MaskedImage () {
		return MaskedImage;
	}
	static get Notification () {
		return Notification;
	}
	static get OptionDialog () {
		return OptionDialog;
	}
	static get Picker () {
		return Picker;
	}
	static get PickerColumn () {
		return PickerColumn;
	}
	static get PickerRow () {
		return PickerRow;
	}
	static get ProgressBar () {
		return ProgressBar;
	}
	static get RefreshControl () {
		return RefreshControl;
	}
	static get ScrollView () {
		return ScrollView;
	}
	static get ScrollableView () {
		return ScrollableView;
	}
	static get SearchBar () {
		return SearchBar;
	}
	static get Slider () {
		return Slider;
	}
	static get Switch () {
		return Switch;
	}
	static get TabGroup () {
		return TabGroup;
	}
	static get TabbedBar () {
		return TabbedBar;
	}
	static get TableView () {
		return TableView;
	}
	static get TableViewRow () {
		return TableViewRow;
	}
	static get TableViewSection () {
		return TableViewSection;
	}
	static get TextArea () {
		return TextArea;
	}
	static get TextField () {
		return TextField;
	}
	static get Toolbar () {
		return Toolbar;
	}
	static get WebView () {
		return WebView;
	}
};
Object.freeze(UI);

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