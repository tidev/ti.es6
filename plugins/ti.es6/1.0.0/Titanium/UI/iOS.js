export { default as Proxy } from './../Proxy';
import { default as Proxy } from './../Proxy';
export { default as Blob } from './../Blob';
import { default as Blob } from './../Blob';
export { default as _3DMatrix } from './iOS/_3DMatrix';
import { default as _3DMatrix } from './iOS/_3DMatrix';
export { default as AdView } from './iOS/AdView';
import { default as AdView } from './iOS/AdView';
export { default as AnchorAttachmentBehavior } from './iOS/AnchorAttachmentBehavior';
import { default as AnchorAttachmentBehavior } from './iOS/AnchorAttachmentBehavior';
export { default as Animator } from './iOS/Animator';
import { default as Animator } from './iOS/Animator';
export { default as ApplicationShortcuts } from './iOS/ApplicationShortcuts';
import { default as ApplicationShortcuts } from './iOS/ApplicationShortcuts';
export { default as Attribute } from './iOS/Attribute';
import { default as Attribute } from './iOS/Attribute';
export { default as AttributedString } from './iOS/AttributedString';
import { default as AttributedString } from './iOS/AttributedString';
export { default as BlurView } from './iOS/BlurView';
import { default as BlurView } from './iOS/BlurView';
export { default as CollisionBehavior } from './iOS/CollisionBehavior';
import { default as CollisionBehavior } from './iOS/CollisionBehavior';
export { default as CoverFlowView } from './iOS/CoverFlowView';
import { default as CoverFlowView } from './iOS/CoverFlowView';
export { default as DocumentViewer } from './iOS/DocumentViewer';
import { default as DocumentViewer } from './iOS/DocumentViewer';
export { default as DynamicItemBehavior } from './iOS/DynamicItemBehavior';
import { default as DynamicItemBehavior } from './iOS/DynamicItemBehavior';
export { default as FeedbackGenerator } from './iOS/FeedbackGenerator';
import { default as FeedbackGenerator } from './iOS/FeedbackGenerator';
export { default as GravityBehavior } from './iOS/GravityBehavior';
import { default as GravityBehavior } from './iOS/GravityBehavior';
export { default as LivePhotoView } from './iOS/LivePhotoView';
import { default as LivePhotoView } from './iOS/LivePhotoView';
export { default as MenuPopup } from './iOS/MenuPopup';
import { default as MenuPopup } from './iOS/MenuPopup';
export { default as NavigationWindow } from './iOS/NavigationWindow';
import { default as NavigationWindow } from './iOS/NavigationWindow';
export { default as PreviewAction } from './iOS/PreviewAction';
import { default as PreviewAction } from './iOS/PreviewAction';
export { default as PreviewActionGroup } from './iOS/PreviewActionGroup';
import { default as PreviewActionGroup } from './iOS/PreviewActionGroup';
export { default as PreviewContext } from './iOS/PreviewContext';
import { default as PreviewContext } from './iOS/PreviewContext';
export { default as PushBehavior } from './iOS/PushBehavior';
import { default as PushBehavior } from './iOS/PushBehavior';
export { default as SnapBehavior } from './iOS/SnapBehavior';
import { default as SnapBehavior } from './iOS/SnapBehavior';
export { default as SplitWindow } from './iOS/SplitWindow';
import { default as SplitWindow } from './iOS/SplitWindow';
export { default as Stepper } from './iOS/Stepper';
import { default as Stepper } from './iOS/Stepper';
export { default as SystemButton } from './iOS/SystemButton';
import { default as SystemButton } from './iOS/SystemButton';
export { default as TabbedBar } from './iOS/TabbedBar';
import { default as TabbedBar } from './iOS/TabbedBar';
export { default as Toolbar } from './iOS/Toolbar';
import { default as Toolbar } from './iOS/Toolbar';
export { default as ViewAttachmentBehavior } from './iOS/ViewAttachmentBehavior';
import { default as ViewAttachmentBehavior } from './iOS/ViewAttachmentBehavior';

export default class iOS {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.UI.iOS')) {
			this._object = object;
		} else {
			this._object = undefined;
		}
	}

	// constants
	static get apiName () {
		return Titanium.UI.iOS.apiName;
	}
	static get LARGE_TITLE_DISPLAY_MODE_AUTOMATIC () {
		return Titanium.UI.iOS.LARGE_TITLE_DISPLAY_MODE_AUTOMATIC;
	}
	static get LARGE_TITLE_DISPLAY_MODE_ALWAYS () {
		return Titanium.UI.iOS.LARGE_TITLE_DISPLAY_MODE_ALWAYS;
	}
	static get LARGE_TITLE_DISPLAY_MODE_NEVER () {
		return Titanium.UI.iOS.LARGE_TITLE_DISPLAY_MODE_NEVER;
	}
	static get LIVEPHOTO_BADGE_OPTIONS_OVER_CONTENT () {
		return Titanium.UI.iOS.LIVEPHOTO_BADGE_OPTIONS_OVER_CONTENT;
	}
	static get LIVEPHOTO_BADGE_OPTIONS_LIVE_OFF () {
		return Titanium.UI.iOS.LIVEPHOTO_BADGE_OPTIONS_LIVE_OFF;
	}
	static get ANIMATION_CURVE_EASE_IN () {
		return Titanium.UI.iOS.ANIMATION_CURVE_EASE_IN;
	}
	static get ANIMATION_CURVE_EASE_IN_OUT () {
		return Titanium.UI.iOS.ANIMATION_CURVE_EASE_IN_OUT;
	}
	static get ANIMATION_CURVE_EASE_OUT () {
		return Titanium.UI.iOS.ANIMATION_CURVE_EASE_OUT;
	}
	static get ANIMATION_CURVE_LINEAR () {
		return Titanium.UI.iOS.ANIMATION_CURVE_LINEAR;
	}
	static get ATTRIBUTE_FONT () {
		return Titanium.UI.iOS.ATTRIBUTE_FONT;
	}
	static get ATTRIBUTE_FOREGROUND_COLOR () {
		return Titanium.UI.iOS.ATTRIBUTE_FOREGROUND_COLOR;
	}
	static get ATTRIBUTE_BACKGROUND_COLOR () {
		return Titanium.UI.iOS.ATTRIBUTE_BACKGROUND_COLOR;
	}
	static get ATTRIBUTE_LIGATURE () {
		return Titanium.UI.iOS.ATTRIBUTE_LIGATURE;
	}
	static get ATTRIBUTE_LETTERPRESS_STYLE () {
		return Titanium.UI.iOS.ATTRIBUTE_LETTERPRESS_STYLE;
	}
	static get ATTRIBUTE_KERN () {
		return Titanium.UI.iOS.ATTRIBUTE_KERN;
	}
	static get ATTRIBUTE_STRIKETHROUGH_STYLE () {
		return Titanium.UI.iOS.ATTRIBUTE_STRIKETHROUGH_STYLE;
	}
	static get ATTRIBUTE_UNDERLINES_STYLE () {
		return Titanium.UI.iOS.ATTRIBUTE_UNDERLINES_STYLE;
	}
	static get ATTRIBUTE_STROKE_COLOR () {
		return Titanium.UI.iOS.ATTRIBUTE_STROKE_COLOR;
	}
	static get ATTRIBUTE_STROKE_WIDTH () {
		return Titanium.UI.iOS.ATTRIBUTE_STROKE_WIDTH;
	}
	static get ATTRIBUTE_SHADOW () {
		return Titanium.UI.iOS.ATTRIBUTE_SHADOW;
	}
	static get ATTRIBUTE_WRITING_DIRECTION () {
		return Titanium.UI.iOS.ATTRIBUTE_WRITING_DIRECTION;
	}
	static get ATTRIBUTE_TEXT_EFFECT () {
		return Titanium.UI.iOS.ATTRIBUTE_TEXT_EFFECT;
	}
	static get ATTRIBUTE_LINK () {
		return Titanium.UI.iOS.ATTRIBUTE_LINK;
	}
	static get ATTRIBUTE_BASELINE_OFFSET () {
		return Titanium.UI.iOS.ATTRIBUTE_BASELINE_OFFSET;
	}
	static get ATTRIBUTE_UNDERLINE_COLOR () {
		return Titanium.UI.iOS.ATTRIBUTE_UNDERLINE_COLOR;
	}
	static get ATTRIBUTE_STRIKETHROUGH_COLOR () {
		return Titanium.UI.iOS.ATTRIBUTE_STRIKETHROUGH_COLOR;
	}
	static get ATTRIBUTE_OBLIQUENESS () {
		return Titanium.UI.iOS.ATTRIBUTE_OBLIQUENESS;
	}
	static get ATTRIBUTE_EXPANSION () {
		return Titanium.UI.iOS.ATTRIBUTE_EXPANSION;
	}
	static get ATTRIBUTE_UNDERLINE_STYLE_NONE () {
		return Titanium.UI.iOS.ATTRIBUTE_UNDERLINE_STYLE_NONE;
	}
	static get ATTRIBUTE_UNDERLINE_STYLE_SINGLE () {
		return Titanium.UI.iOS.ATTRIBUTE_UNDERLINE_STYLE_SINGLE;
	}
	static get ATTRIBUTE_UNDERLINE_STYLE_THICK () {
		return Titanium.UI.iOS.ATTRIBUTE_UNDERLINE_STYLE_THICK;
	}
	static get ATTRIBUTE_UNDERLINE_STYLE_DOUBLE () {
		return Titanium.UI.iOS.ATTRIBUTE_UNDERLINE_STYLE_DOUBLE;
	}
	static get ATTRIBUTE_UNDERLINE_PATTERN_SOLID () {
		return Titanium.UI.iOS.ATTRIBUTE_UNDERLINE_PATTERN_SOLID;
	}
	static get ATTRIBUTE_UNDERLINE_PATTERN_DOT () {
		return Titanium.UI.iOS.ATTRIBUTE_UNDERLINE_PATTERN_DOT;
	}
	static get ATTRIBUTE_UNDERLINE_PATTERN_DASH () {
		return Titanium.UI.iOS.ATTRIBUTE_UNDERLINE_PATTERN_DASH;
	}
	static get ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT () {
		return Titanium.UI.iOS.ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT;
	}
	static get ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT_DOT () {
		return Titanium.UI.iOS.ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT_DOT;
	}
	static get ATTRIBUTE_UNDERLINE_BY_WORD () {
		return Titanium.UI.iOS.ATTRIBUTE_UNDERLINE_BY_WORD;
	}
	static get ATTRIBUTE_WRITING_DIRECTION_EMBEDDING () {
		return Titanium.UI.iOS.ATTRIBUTE_WRITING_DIRECTION_EMBEDDING;
	}
	static get ATTRIBUTE_WRITING_DIRECTION_OVERRIDE () {
		return Titanium.UI.iOS.ATTRIBUTE_WRITING_DIRECTION_OVERRIDE;
	}
	static get ATTRIBUTE_WRITING_DIRECTION_NATURAL () {
		return Titanium.UI.iOS.ATTRIBUTE_WRITING_DIRECTION_NATURAL;
	}
	static get ATTRIBUTE_WRITING_DIRECTION_LEFT_TO_RIGHT () {
		return Titanium.UI.iOS.ATTRIBUTE_WRITING_DIRECTION_LEFT_TO_RIGHT;
	}
	static get ATTRIBUTE_WRITING_DIRECTION_RIGHT_TO_LEFT () {
		return Titanium.UI.iOS.ATTRIBUTE_WRITING_DIRECTION_RIGHT_TO_LEFT;
	}
	static get AUTODETECT_ADDRESS () {
		return Titanium.UI.iOS.AUTODETECT_ADDRESS;
	}
	static get AUTODETECT_ALL () {
		return Titanium.UI.iOS.AUTODETECT_ALL;
	}
	static get AUTODETECT_CALENDAR () {
		return Titanium.UI.iOS.AUTODETECT_CALENDAR;
	}
	static get AUTODETECT_LINK () {
		return Titanium.UI.iOS.AUTODETECT_LINK;
	}
	static get AUTODETECT_NONE () {
		return Titanium.UI.iOS.AUTODETECT_NONE;
	}
	static get AUTODETECT_PHONE () {
		return Titanium.UI.iOS.AUTODETECT_PHONE;
	}
	static get BLEND_MODE_CLEAR () {
		return Titanium.UI.iOS.BLEND_MODE_CLEAR;
	}
	static get BLEND_MODE_COLOR () {
		return Titanium.UI.iOS.BLEND_MODE_COLOR;
	}
	static get BLEND_MODE_COLOR_BURN () {
		return Titanium.UI.iOS.BLEND_MODE_COLOR_BURN;
	}
	static get BLEND_MODE_COLOR_DODGE () {
		return Titanium.UI.iOS.BLEND_MODE_COLOR_DODGE;
	}
	static get BLEND_MODE_COPY () {
		return Titanium.UI.iOS.BLEND_MODE_COPY;
	}
	static get BLEND_MODE_DARKEN () {
		return Titanium.UI.iOS.BLEND_MODE_DARKEN;
	}
	static get BLEND_MODE_DESTINATION_ATOP () {
		return Titanium.UI.iOS.BLEND_MODE_DESTINATION_ATOP;
	}
	static get BLEND_MODE_DESTINATION_IN () {
		return Titanium.UI.iOS.BLEND_MODE_DESTINATION_IN;
	}
	static get BLEND_MODE_DESTINATION_OUT () {
		return Titanium.UI.iOS.BLEND_MODE_DESTINATION_OUT;
	}
	static get BLEND_MODE_DESTINATION_OVER () {
		return Titanium.UI.iOS.BLEND_MODE_DESTINATION_OVER;
	}
	static get BLEND_MODE_DIFFERENCE () {
		return Titanium.UI.iOS.BLEND_MODE_DIFFERENCE;
	}
	static get BLEND_MODE_EXCLUSION () {
		return Titanium.UI.iOS.BLEND_MODE_EXCLUSION;
	}
	static get BLEND_MODE_HARD_LIGHT () {
		return Titanium.UI.iOS.BLEND_MODE_HARD_LIGHT;
	}
	static get BLEND_MODE_HUE () {
		return Titanium.UI.iOS.BLEND_MODE_HUE;
	}
	static get BLEND_MODE_LIGHTEN () {
		return Titanium.UI.iOS.BLEND_MODE_LIGHTEN;
	}
	static get BLEND_MODE_LUMINOSITY () {
		return Titanium.UI.iOS.BLEND_MODE_LUMINOSITY;
	}
	static get BLEND_MODE_MULTIPLY () {
		return Titanium.UI.iOS.BLEND_MODE_MULTIPLY;
	}
	static get BLEND_MODE_NORMAL () {
		return Titanium.UI.iOS.BLEND_MODE_NORMAL;
	}
	static get BLEND_MODE_OVERLAY () {
		return Titanium.UI.iOS.BLEND_MODE_OVERLAY;
	}
	static get BLEND_MODE_PLUS_DARKER () {
		return Titanium.UI.iOS.BLEND_MODE_PLUS_DARKER;
	}
	static get BLEND_MODE_PLUS_LIGHTER () {
		return Titanium.UI.iOS.BLEND_MODE_PLUS_LIGHTER;
	}
	static get BLEND_MODE_SATURATION () {
		return Titanium.UI.iOS.BLEND_MODE_SATURATION;
	}
	static get BLEND_MODE_SCREEN () {
		return Titanium.UI.iOS.BLEND_MODE_SCREEN;
	}
	static get BLEND_MODE_SOFT_LIGHT () {
		return Titanium.UI.iOS.BLEND_MODE_SOFT_LIGHT;
	}
	static get BLEND_MODE_SOURCE_ATOP () {
		return Titanium.UI.iOS.BLEND_MODE_SOURCE_ATOP;
	}
	static get BLEND_MODE_SOURCE_IN () {
		return Titanium.UI.iOS.BLEND_MODE_SOURCE_IN;
	}
	static get BLEND_MODE_SOURCE_OUT () {
		return Titanium.UI.iOS.BLEND_MODE_SOURCE_OUT;
	}
	static get BLEND_MODE_XOR () {
		return Titanium.UI.iOS.BLEND_MODE_XOR;
	}
	static get BLUR_EFFECT_STYLE_EXTRA_LIGHT () {
		return Titanium.UI.iOS.BLUR_EFFECT_STYLE_EXTRA_LIGHT;
	}
	static get BLUR_EFFECT_STYLE_LIGHT () {
		return Titanium.UI.iOS.BLUR_EFFECT_STYLE_LIGHT;
	}
	static get BLUR_EFFECT_STYLE_DARK () {
		return Titanium.UI.iOS.BLUR_EFFECT_STYLE_DARK;
	}
	static get BLUR_EFFECT_STYLE_REGULAR () {
		return Titanium.UI.iOS.BLUR_EFFECT_STYLE_REGULAR;
	}
	static get BLUR_EFFECT_STYLE_PROMINENT () {
		return Titanium.UI.iOS.BLUR_EFFECT_STYLE_PROMINENT;
	}
	static get AD_SIZE_PORTRAIT () {
		return Titanium.UI.iOS.AD_SIZE_PORTRAIT;
	}
	static get AD_SIZE_LANDSCAPE () {
		return Titanium.UI.iOS.AD_SIZE_LANDSCAPE;
	}
	static get CLIP_MODE_DEFAULT () {
		return Titanium.UI.iOS.CLIP_MODE_DEFAULT;
	}
	static get CLIP_MODE_DISABLED () {
		return Titanium.UI.iOS.CLIP_MODE_DISABLED;
	}
	static get CLIP_MODE_ENABLED () {
		return Titanium.UI.iOS.CLIP_MODE_ENABLED;
	}
	static get COLLISION_MODE_ALL () {
		return Titanium.UI.iOS.COLLISION_MODE_ALL;
	}
	static get COLLISION_MODE_BOUNDARY () {
		return Titanium.UI.iOS.COLLISION_MODE_BOUNDARY;
	}
	static get COLLISION_MODE_ITEM () {
		return Titanium.UI.iOS.COLLISION_MODE_ITEM;
	}
	static get COLOR_GROUP_TABLEVIEW_BACKGROUND () {
		return Titanium.UI.iOS.COLOR_GROUP_TABLEVIEW_BACKGROUND;
	}
	static get COLOR_SCROLLVIEW_BACKGROUND () {
		return Titanium.UI.iOS.COLOR_SCROLLVIEW_BACKGROUND;
	}
	static get COLOR_VIEW_FLIPSIDE_BACKGROUND () {
		return Titanium.UI.iOS.COLOR_VIEW_FLIPSIDE_BACKGROUND;
	}
	static get COLOR_UNDER_PAGE_BACKGROUND () {
		return Titanium.UI.iOS.COLOR_UNDER_PAGE_BACKGROUND;
	}
	static get forceTouchSupported () {
		return Titanium.UI.iOS.forceTouchSupported;
	}
	static get FEEDBACK_GENERATOR_TYPE_SELECTION () {
		return Titanium.UI.iOS.FEEDBACK_GENERATOR_TYPE_SELECTION;
	}
	static get FEEDBACK_GENERATOR_TYPE_IMPACT () {
		return Titanium.UI.iOS.FEEDBACK_GENERATOR_TYPE_IMPACT;
	}
	static get FEEDBACK_GENERATOR_TYPE_NOTIFICATION () {
		return Titanium.UI.iOS.FEEDBACK_GENERATOR_TYPE_NOTIFICATION;
	}
	static get FEEDBACK_GENERATOR_NOTIFICATION_TYPE_SUCCESS () {
		return Titanium.UI.iOS.FEEDBACK_GENERATOR_NOTIFICATION_TYPE_SUCCESS;
	}
	static get FEEDBACK_GENERATOR_NOTIFICATION_TYPE_WARNING () {
		return Titanium.UI.iOS.FEEDBACK_GENERATOR_NOTIFICATION_TYPE_WARNING;
	}
	static get FEEDBACK_GENERATOR_NOTIFICATION_TYPE_ERROR () {
		return Titanium.UI.iOS.FEEDBACK_GENERATOR_NOTIFICATION_TYPE_ERROR;
	}
	static get FEEDBACK_GENERATOR_IMPACT_STYLE_LIGHT () {
		return Titanium.UI.iOS.FEEDBACK_GENERATOR_IMPACT_STYLE_LIGHT;
	}
	static get FEEDBACK_GENERATOR_IMPACT_STYLE_MEDIUM () {
		return Titanium.UI.iOS.FEEDBACK_GENERATOR_IMPACT_STYLE_MEDIUM;
	}
	static get FEEDBACK_GENERATOR_IMPACT_STYLE_HEAVY () {
		return Titanium.UI.iOS.FEEDBACK_GENERATOR_IMPACT_STYLE_HEAVY;
	}
	static get LIVEPHOTO_PLAYBACK_STYLE_FULL () {
		return Titanium.UI.iOS.LIVEPHOTO_PLAYBACK_STYLE_FULL;
	}
	static get LIVEPHOTO_PLAYBACK_STYLE_HINT () {
		return Titanium.UI.iOS.LIVEPHOTO_PLAYBACK_STYLE_HINT;
	}
	static get MENU_POPUP_ARROW_DIRECTION_UP () {
		return Titanium.UI.iOS.MENU_POPUP_ARROW_DIRECTION_UP;
	}
	static get MENU_POPUP_ARROW_DIRECTION_DOWN () {
		return Titanium.UI.iOS.MENU_POPUP_ARROW_DIRECTION_DOWN;
	}
	static get MENU_POPUP_ARROW_DIRECTION_LEFT () {
		return Titanium.UI.iOS.MENU_POPUP_ARROW_DIRECTION_LEFT;
	}
	static get MENU_POPUP_ARROW_DIRECTION_RIGHT () {
		return Titanium.UI.iOS.MENU_POPUP_ARROW_DIRECTION_RIGHT;
	}
	static get MENU_POPUP_ARROW_DIRECTION_DEFAULT () {
		return Titanium.UI.iOS.MENU_POPUP_ARROW_DIRECTION_DEFAULT;
	}
	static get MODAL_PRESENTATION_FORMSHEET () {
		return Titanium.UI.iOS.MODAL_PRESENTATION_FORMSHEET;
	}
	static get MODAL_PRESENTATION_FULLSCREEN () {
		return Titanium.UI.iOS.MODAL_PRESENTATION_FULLSCREEN;
	}
	static get MODAL_PRESENTATION_PAGESHEET () {
		return Titanium.UI.iOS.MODAL_PRESENTATION_PAGESHEET;
	}
	static get MODAL_TRANSITION_STYLE_COVER_VERTICAL () {
		return Titanium.UI.iOS.MODAL_TRANSITION_STYLE_COVER_VERTICAL;
	}
	static get MODAL_TRANSITION_STYLE_CROSS_DISSOLVE () {
		return Titanium.UI.iOS.MODAL_TRANSITION_STYLE_CROSS_DISSOLVE;
	}
	static get MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL () {
		return Titanium.UI.iOS.MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL;
	}
	static get MODAL_TRANSITION_STYLE_PARTIAL_CURL () {
		return Titanium.UI.iOS.MODAL_TRANSITION_STYLE_PARTIAL_CURL;
	}
	static get PUSH_MODE_CONTINUOUS () {
		return Titanium.UI.iOS.PUSH_MODE_CONTINUOUS;
	}
	static get PUSH_MODE_INSTANTANEOUS () {
		return Titanium.UI.iOS.PUSH_MODE_INSTANTANEOUS;
	}
	static get PREVIEW_ACTION_STYLE_DEFAULT () {
		return Titanium.UI.iOS.PREVIEW_ACTION_STYLE_DEFAULT;
	}
	static get PREVIEW_ACTION_STYLE_SELECTED () {
		return Titanium.UI.iOS.PREVIEW_ACTION_STYLE_SELECTED;
	}
	static get PREVIEW_ACTION_STYLE_DESTRUCTIVE () {
		return Titanium.UI.iOS.PREVIEW_ACTION_STYLE_DESTRUCTIVE;
	}
	static get ROW_ACTION_STYLE_DEFAULT () {
		return Titanium.UI.iOS.ROW_ACTION_STYLE_DEFAULT;
	}
	static get ROW_ACTION_STYLE_DESTRUCTIVE () {
		return Titanium.UI.iOS.ROW_ACTION_STYLE_DESTRUCTIVE;
	}
	static get ROW_ACTION_STYLE_NORMAL () {
		return Titanium.UI.iOS.ROW_ACTION_STYLE_NORMAL;
	}
	static get SCROLL_DECELERATION_RATE_FAST () {
		return Titanium.UI.iOS.SCROLL_DECELERATION_RATE_FAST;
	}
	static get SCROLL_DECELERATION_RATE_NORMAL () {
		return Titanium.UI.iOS.SCROLL_DECELERATION_RATE_NORMAL;
	}
	static get KEYBOARD_DISMISS_MODE_NONE () {
		return Titanium.UI.iOS.KEYBOARD_DISMISS_MODE_NONE;
	}
	static get KEYBOARD_DISMISS_MODE_ON_DRAG () {
		return Titanium.UI.iOS.KEYBOARD_DISMISS_MODE_ON_DRAG;
	}
	static get KEYBOARD_DISMISS_MODE_INTERACTIVE () {
		return Titanium.UI.iOS.KEYBOARD_DISMISS_MODE_INTERACTIVE;
	}
	static get SEARCH_BAR_STYLE_PROMINENT () {
		return Titanium.UI.iOS.SEARCH_BAR_STYLE_PROMINENT;
	}
	static get SEARCH_BAR_STYLE_MINIMAL () {
		return Titanium.UI.iOS.SEARCH_BAR_STYLE_MINIMAL;
	}
	static get WEBVIEW_NAVIGATIONTYPE_LINK_CLICKED () {
		return Titanium.UI.iOS.WEBVIEW_NAVIGATIONTYPE_LINK_CLICKED;
	}
	static get WEBVIEW_NAVIGATIONTYPE_FORM_SUBMITTED () {
		return Titanium.UI.iOS.WEBVIEW_NAVIGATIONTYPE_FORM_SUBMITTED;
	}
	static get WEBVIEW_NAVIGATIONTYPE_BACK_FORWARD () {
		return Titanium.UI.iOS.WEBVIEW_NAVIGATIONTYPE_BACK_FORWARD;
	}
	static get WEBVIEW_NAVIGATIONTYPE_RELOAD () {
		return Titanium.UI.iOS.WEBVIEW_NAVIGATIONTYPE_RELOAD;
	}
	static get WEBVIEW_NAVIGATIONTYPE_FORM_RESUBMITTED () {
		return Titanium.UI.iOS.WEBVIEW_NAVIGATIONTYPE_FORM_RESUBMITTED;
	}
	static get WEBVIEW_NAVIGATIONTYPE_OTHER () {
		return Titanium.UI.iOS.WEBVIEW_NAVIGATIONTYPE_OTHER;
	}
	static get TABLEVIEW_INDEX_SEARCH () {
		return Titanium.UI.iOS.TABLEVIEW_INDEX_SEARCH;
	}
	static get SHORTCUT_ICON_TYPE_COMPOSE () {
		return Titanium.UI.iOS.SHORTCUT_ICON_TYPE_COMPOSE;
	}
	static get SHORTCUT_ICON_TYPE_PLAY () {
		return Titanium.UI.iOS.SHORTCUT_ICON_TYPE_PLAY;
	}
	static get SHORTCUT_ICON_TYPE_PAUSE () {
		return Titanium.UI.iOS.SHORTCUT_ICON_TYPE_PAUSE;
	}
	static get SHORTCUT_ICON_TYPE_ADD () {
		return Titanium.UI.iOS.SHORTCUT_ICON_TYPE_ADD;
	}
	static get SHORTCUT_ICON_TYPE_LOCATION () {
		return Titanium.UI.iOS.SHORTCUT_ICON_TYPE_LOCATION;
	}
	static get SHORTCUT_ICON_TYPE_SEARCH () {
		return Titanium.UI.iOS.SHORTCUT_ICON_TYPE_SEARCH;
	}
	static get SHORTCUT_ICON_TYPE_SHARE () {
		return Titanium.UI.iOS.SHORTCUT_ICON_TYPE_SHARE;
	}
	static get SHORTCUT_ICON_TYPE_PROHIBIT () {
		return Titanium.UI.iOS.SHORTCUT_ICON_TYPE_PROHIBIT;
	}
	static get SHORTCUT_ICON_TYPE_CONTACT () {
		return Titanium.UI.iOS.SHORTCUT_ICON_TYPE_CONTACT;
	}
	static get SHORTCUT_ICON_TYPE_HOME () {
		return Titanium.UI.iOS.SHORTCUT_ICON_TYPE_HOME;
	}
	static get SHORTCUT_ICON_TYPE_MARK_LOCATION () {
		return Titanium.UI.iOS.SHORTCUT_ICON_TYPE_MARK_LOCATION;
	}
	static get SHORTCUT_ICON_TYPE_FAVORITE () {
		return Titanium.UI.iOS.SHORTCUT_ICON_TYPE_FAVORITE;
	}
	static get SHORTCUT_ICON_TYPE_LOVE () {
		return Titanium.UI.iOS.SHORTCUT_ICON_TYPE_LOVE;
	}
	static get SHORTCUT_ICON_TYPE_CLOUD () {
		return Titanium.UI.iOS.SHORTCUT_ICON_TYPE_CLOUD;
	}
	static get SHORTCUT_ICON_TYPE_INVITATION () {
		return Titanium.UI.iOS.SHORTCUT_ICON_TYPE_INVITATION;
	}
	static get SHORTCUT_ICON_TYPE_CONFIRMATION () {
		return Titanium.UI.iOS.SHORTCUT_ICON_TYPE_CONFIRMATION;
	}
	static get SHORTCUT_ICON_TYPE_MAIL () {
		return Titanium.UI.iOS.SHORTCUT_ICON_TYPE_MAIL;
	}
	static get SHORTCUT_ICON_TYPE_MESSAGE () {
		return Titanium.UI.iOS.SHORTCUT_ICON_TYPE_MESSAGE;
	}
	static get SHORTCUT_ICON_TYPE_DATE () {
		return Titanium.UI.iOS.SHORTCUT_ICON_TYPE_DATE;
	}
	static get SHORTCUT_ICON_TYPE_TIME () {
		return Titanium.UI.iOS.SHORTCUT_ICON_TYPE_TIME;
	}
	static get SHORTCUT_ICON_TYPE_CAPTURE_PHOTO () {
		return Titanium.UI.iOS.SHORTCUT_ICON_TYPE_CAPTURE_PHOTO;
	}
	static get SHORTCUT_ICON_TYPE_CAPTURE_VIDEO () {
		return Titanium.UI.iOS.SHORTCUT_ICON_TYPE_CAPTURE_VIDEO;
	}
	static get SHORTCUT_ICON_TYPE_TASK () {
		return Titanium.UI.iOS.SHORTCUT_ICON_TYPE_TASK;
	}
	static get SHORTCUT_ICON_TYPE_TASK_COMPLETED () {
		return Titanium.UI.iOS.SHORTCUT_ICON_TYPE_TASK_COMPLETED;
	}
	static get SHORTCUT_ICON_TYPE_ALARM () {
		return Titanium.UI.iOS.SHORTCUT_ICON_TYPE_ALARM;
	}
	static get SHORTCUT_ICON_TYPE_BOOKMARK () {
		return Titanium.UI.iOS.SHORTCUT_ICON_TYPE_BOOKMARK;
	}
	static get SHORTCUT_ICON_TYPE_SHUFFLE () {
		return Titanium.UI.iOS.SHORTCUT_ICON_TYPE_SHUFFLE;
	}
	static get SHORTCUT_ICON_TYPE_AUDIO () {
		return Titanium.UI.iOS.SHORTCUT_ICON_TYPE_AUDIO;
	}
	static get SHORTCUT_ICON_TYPE_UPDATE () {
		return Titanium.UI.iOS.SHORTCUT_ICON_TYPE_UPDATE;
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
	get LARGE_TITLE_DISPLAY_MODE_AUTOMATIC () {
		return this._object.LARGE_TITLE_DISPLAY_MODE_AUTOMATIC;
	}
	get LARGE_TITLE_DISPLAY_MODE_ALWAYS () {
		return this._object.LARGE_TITLE_DISPLAY_MODE_ALWAYS;
	}
	get LARGE_TITLE_DISPLAY_MODE_NEVER () {
		return this._object.LARGE_TITLE_DISPLAY_MODE_NEVER;
	}
	get LIVEPHOTO_BADGE_OPTIONS_OVER_CONTENT () {
		return this._object.LIVEPHOTO_BADGE_OPTIONS_OVER_CONTENT;
	}
	get LIVEPHOTO_BADGE_OPTIONS_LIVE_OFF () {
		return this._object.LIVEPHOTO_BADGE_OPTIONS_LIVE_OFF;
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
	get ATTRIBUTE_FONT () {
		return this._object.ATTRIBUTE_FONT;
	}
	get ATTRIBUTE_FOREGROUND_COLOR () {
		return this._object.ATTRIBUTE_FOREGROUND_COLOR;
	}
	get ATTRIBUTE_BACKGROUND_COLOR () {
		return this._object.ATTRIBUTE_BACKGROUND_COLOR;
	}
	get ATTRIBUTE_LIGATURE () {
		return this._object.ATTRIBUTE_LIGATURE;
	}
	get ATTRIBUTE_LETTERPRESS_STYLE () {
		return this._object.ATTRIBUTE_LETTERPRESS_STYLE;
	}
	get ATTRIBUTE_KERN () {
		return this._object.ATTRIBUTE_KERN;
	}
	get ATTRIBUTE_STRIKETHROUGH_STYLE () {
		return this._object.ATTRIBUTE_STRIKETHROUGH_STYLE;
	}
	get ATTRIBUTE_UNDERLINES_STYLE () {
		return this._object.ATTRIBUTE_UNDERLINES_STYLE;
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
	get ATTRIBUTE_LINK () {
		return this._object.ATTRIBUTE_LINK;
	}
	get ATTRIBUTE_BASELINE_OFFSET () {
		return this._object.ATTRIBUTE_BASELINE_OFFSET;
	}
	get ATTRIBUTE_UNDERLINE_COLOR () {
		return this._object.ATTRIBUTE_UNDERLINE_COLOR;
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
	get BLUR_EFFECT_STYLE_EXTRA_LIGHT () {
		return this._object.BLUR_EFFECT_STYLE_EXTRA_LIGHT;
	}
	get BLUR_EFFECT_STYLE_LIGHT () {
		return this._object.BLUR_EFFECT_STYLE_LIGHT;
	}
	get BLUR_EFFECT_STYLE_DARK () {
		return this._object.BLUR_EFFECT_STYLE_DARK;
	}
	get BLUR_EFFECT_STYLE_REGULAR () {
		return this._object.BLUR_EFFECT_STYLE_REGULAR;
	}
	get BLUR_EFFECT_STYLE_PROMINENT () {
		return this._object.BLUR_EFFECT_STYLE_PROMINENT;
	}
	get AD_SIZE_PORTRAIT () {
		return this._object.AD_SIZE_PORTRAIT;
	}
	get AD_SIZE_LANDSCAPE () {
		return this._object.AD_SIZE_LANDSCAPE;
	}
	get CLIP_MODE_DEFAULT () {
		return this._object.CLIP_MODE_DEFAULT;
	}
	get CLIP_MODE_DISABLED () {
		return this._object.CLIP_MODE_DISABLED;
	}
	get CLIP_MODE_ENABLED () {
		return this._object.CLIP_MODE_ENABLED;
	}
	get COLLISION_MODE_ALL () {
		return this._object.COLLISION_MODE_ALL;
	}
	get COLLISION_MODE_BOUNDARY () {
		return this._object.COLLISION_MODE_BOUNDARY;
	}
	get COLLISION_MODE_ITEM () {
		return this._object.COLLISION_MODE_ITEM;
	}
	get COLOR_GROUP_TABLEVIEW_BACKGROUND () {
		return this._object.COLOR_GROUP_TABLEVIEW_BACKGROUND;
	}
	get COLOR_SCROLLVIEW_BACKGROUND () {
		return this._object.COLOR_SCROLLVIEW_BACKGROUND;
	}
	get COLOR_VIEW_FLIPSIDE_BACKGROUND () {
		return this._object.COLOR_VIEW_FLIPSIDE_BACKGROUND;
	}
	get COLOR_UNDER_PAGE_BACKGROUND () {
		return this._object.COLOR_UNDER_PAGE_BACKGROUND;
	}
	get forceTouchSupported () {
		return this._object.forceTouchSupported;
	}
	get FEEDBACK_GENERATOR_TYPE_SELECTION () {
		return this._object.FEEDBACK_GENERATOR_TYPE_SELECTION;
	}
	get FEEDBACK_GENERATOR_TYPE_IMPACT () {
		return this._object.FEEDBACK_GENERATOR_TYPE_IMPACT;
	}
	get FEEDBACK_GENERATOR_TYPE_NOTIFICATION () {
		return this._object.FEEDBACK_GENERATOR_TYPE_NOTIFICATION;
	}
	get FEEDBACK_GENERATOR_NOTIFICATION_TYPE_SUCCESS () {
		return this._object.FEEDBACK_GENERATOR_NOTIFICATION_TYPE_SUCCESS;
	}
	get FEEDBACK_GENERATOR_NOTIFICATION_TYPE_WARNING () {
		return this._object.FEEDBACK_GENERATOR_NOTIFICATION_TYPE_WARNING;
	}
	get FEEDBACK_GENERATOR_NOTIFICATION_TYPE_ERROR () {
		return this._object.FEEDBACK_GENERATOR_NOTIFICATION_TYPE_ERROR;
	}
	get FEEDBACK_GENERATOR_IMPACT_STYLE_LIGHT () {
		return this._object.FEEDBACK_GENERATOR_IMPACT_STYLE_LIGHT;
	}
	get FEEDBACK_GENERATOR_IMPACT_STYLE_MEDIUM () {
		return this._object.FEEDBACK_GENERATOR_IMPACT_STYLE_MEDIUM;
	}
	get FEEDBACK_GENERATOR_IMPACT_STYLE_HEAVY () {
		return this._object.FEEDBACK_GENERATOR_IMPACT_STYLE_HEAVY;
	}
	get LIVEPHOTO_PLAYBACK_STYLE_FULL () {
		return this._object.LIVEPHOTO_PLAYBACK_STYLE_FULL;
	}
	get LIVEPHOTO_PLAYBACK_STYLE_HINT () {
		return this._object.LIVEPHOTO_PLAYBACK_STYLE_HINT;
	}
	get MENU_POPUP_ARROW_DIRECTION_UP () {
		return this._object.MENU_POPUP_ARROW_DIRECTION_UP;
	}
	get MENU_POPUP_ARROW_DIRECTION_DOWN () {
		return this._object.MENU_POPUP_ARROW_DIRECTION_DOWN;
	}
	get MENU_POPUP_ARROW_DIRECTION_LEFT () {
		return this._object.MENU_POPUP_ARROW_DIRECTION_LEFT;
	}
	get MENU_POPUP_ARROW_DIRECTION_RIGHT () {
		return this._object.MENU_POPUP_ARROW_DIRECTION_RIGHT;
	}
	get MENU_POPUP_ARROW_DIRECTION_DEFAULT () {
		return this._object.MENU_POPUP_ARROW_DIRECTION_DEFAULT;
	}
	get MODAL_PRESENTATION_CURRENT_CONTEXT () {
		return this._object.MODAL_PRESENTATION_CURRENT_CONTEXT;
	}
	set MODAL_PRESENTATION_CURRENT_CONTEXT (value) {
		this._object.MODAL_PRESENTATION_CURRENT_CONTEXT = value;
	}
	get MODAL_PRESENTATION_FORMSHEET () {
		return this._object.MODAL_PRESENTATION_FORMSHEET;
	}
	get MODAL_PRESENTATION_FULLSCREEN () {
		return this._object.MODAL_PRESENTATION_FULLSCREEN;
	}
	get MODAL_PRESENTATION_PAGESHEET () {
		return this._object.MODAL_PRESENTATION_PAGESHEET;
	}
	get MODAL_TRANSITION_STYLE_COVER_VERTICAL () {
		return this._object.MODAL_TRANSITION_STYLE_COVER_VERTICAL;
	}
	get MODAL_TRANSITION_STYLE_CROSS_DISSOLVE () {
		return this._object.MODAL_TRANSITION_STYLE_CROSS_DISSOLVE;
	}
	get MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL () {
		return this._object.MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL;
	}
	get MODAL_TRANSITION_STYLE_PARTIAL_CURL () {
		return this._object.MODAL_TRANSITION_STYLE_PARTIAL_CURL;
	}
	get PUSH_MODE_CONTINUOUS () {
		return this._object.PUSH_MODE_CONTINUOUS;
	}
	get PUSH_MODE_INSTANTANEOUS () {
		return this._object.PUSH_MODE_INSTANTANEOUS;
	}
	get PREVIEW_ACTION_STYLE_DEFAULT () {
		return this._object.PREVIEW_ACTION_STYLE_DEFAULT;
	}
	get PREVIEW_ACTION_STYLE_SELECTED () {
		return this._object.PREVIEW_ACTION_STYLE_SELECTED;
	}
	get PREVIEW_ACTION_STYLE_DESTRUCTIVE () {
		return this._object.PREVIEW_ACTION_STYLE_DESTRUCTIVE;
	}
	get ROW_ACTION_STYLE_DEFAULT () {
		return this._object.ROW_ACTION_STYLE_DEFAULT;
	}
	get ROW_ACTION_STYLE_DESTRUCTIVE () {
		return this._object.ROW_ACTION_STYLE_DESTRUCTIVE;
	}
	get ROW_ACTION_STYLE_NORMAL () {
		return this._object.ROW_ACTION_STYLE_NORMAL;
	}
	get SCROLL_DECELERATION_RATE_FAST () {
		return this._object.SCROLL_DECELERATION_RATE_FAST;
	}
	get SCROLL_DECELERATION_RATE_NORMAL () {
		return this._object.SCROLL_DECELERATION_RATE_NORMAL;
	}
	get KEYBOARD_DISMISS_MODE_NONE () {
		return this._object.KEYBOARD_DISMISS_MODE_NONE;
	}
	get KEYBOARD_DISMISS_MODE_ON_DRAG () {
		return this._object.KEYBOARD_DISMISS_MODE_ON_DRAG;
	}
	get KEYBOARD_DISMISS_MODE_INTERACTIVE () {
		return this._object.KEYBOARD_DISMISS_MODE_INTERACTIVE;
	}
	get SEARCH_BAR_STYLE_PROMINENT () {
		return this._object.SEARCH_BAR_STYLE_PROMINENT;
	}
	get SEARCH_BAR_STYLE_MINIMAL () {
		return this._object.SEARCH_BAR_STYLE_MINIMAL;
	}
	get WEBVIEW_NAVIGATIONTYPE_LINK_CLICKED () {
		return this._object.WEBVIEW_NAVIGATIONTYPE_LINK_CLICKED;
	}
	get WEBVIEW_NAVIGATIONTYPE_FORM_SUBMITTED () {
		return this._object.WEBVIEW_NAVIGATIONTYPE_FORM_SUBMITTED;
	}
	get WEBVIEW_NAVIGATIONTYPE_BACK_FORWARD () {
		return this._object.WEBVIEW_NAVIGATIONTYPE_BACK_FORWARD;
	}
	get WEBVIEW_NAVIGATIONTYPE_RELOAD () {
		return this._object.WEBVIEW_NAVIGATIONTYPE_RELOAD;
	}
	get WEBVIEW_NAVIGATIONTYPE_FORM_RESUBMITTED () {
		return this._object.WEBVIEW_NAVIGATIONTYPE_FORM_RESUBMITTED;
	}
	get WEBVIEW_NAVIGATIONTYPE_OTHER () {
		return this._object.WEBVIEW_NAVIGATIONTYPE_OTHER;
	}
	get TABLEVIEW_INDEX_SEARCH () {
		return this._object.TABLEVIEW_INDEX_SEARCH;
	}
	get SHORTCUT_ICON_TYPE_COMPOSE () {
		return this._object.SHORTCUT_ICON_TYPE_COMPOSE;
	}
	get SHORTCUT_ICON_TYPE_PLAY () {
		return this._object.SHORTCUT_ICON_TYPE_PLAY;
	}
	get SHORTCUT_ICON_TYPE_PAUSE () {
		return this._object.SHORTCUT_ICON_TYPE_PAUSE;
	}
	get SHORTCUT_ICON_TYPE_ADD () {
		return this._object.SHORTCUT_ICON_TYPE_ADD;
	}
	get SHORTCUT_ICON_TYPE_LOCATION () {
		return this._object.SHORTCUT_ICON_TYPE_LOCATION;
	}
	get SHORTCUT_ICON_TYPE_SEARCH () {
		return this._object.SHORTCUT_ICON_TYPE_SEARCH;
	}
	get SHORTCUT_ICON_TYPE_SHARE () {
		return this._object.SHORTCUT_ICON_TYPE_SHARE;
	}
	get SHORTCUT_ICON_TYPE_PROHIBIT () {
		return this._object.SHORTCUT_ICON_TYPE_PROHIBIT;
	}
	get SHORTCUT_ICON_TYPE_CONTACT () {
		return this._object.SHORTCUT_ICON_TYPE_CONTACT;
	}
	get SHORTCUT_ICON_TYPE_HOME () {
		return this._object.SHORTCUT_ICON_TYPE_HOME;
	}
	get SHORTCUT_ICON_TYPE_MARK_LOCATION () {
		return this._object.SHORTCUT_ICON_TYPE_MARK_LOCATION;
	}
	get SHORTCUT_ICON_TYPE_FAVORITE () {
		return this._object.SHORTCUT_ICON_TYPE_FAVORITE;
	}
	get SHORTCUT_ICON_TYPE_LOVE () {
		return this._object.SHORTCUT_ICON_TYPE_LOVE;
	}
	get SHORTCUT_ICON_TYPE_CLOUD () {
		return this._object.SHORTCUT_ICON_TYPE_CLOUD;
	}
	get SHORTCUT_ICON_TYPE_INVITATION () {
		return this._object.SHORTCUT_ICON_TYPE_INVITATION;
	}
	get SHORTCUT_ICON_TYPE_CONFIRMATION () {
		return this._object.SHORTCUT_ICON_TYPE_CONFIRMATION;
	}
	get SHORTCUT_ICON_TYPE_MAIL () {
		return this._object.SHORTCUT_ICON_TYPE_MAIL;
	}
	get SHORTCUT_ICON_TYPE_MESSAGE () {
		return this._object.SHORTCUT_ICON_TYPE_MESSAGE;
	}
	get SHORTCUT_ICON_TYPE_DATE () {
		return this._object.SHORTCUT_ICON_TYPE_DATE;
	}
	get SHORTCUT_ICON_TYPE_TIME () {
		return this._object.SHORTCUT_ICON_TYPE_TIME;
	}
	get SHORTCUT_ICON_TYPE_CAPTURE_PHOTO () {
		return this._object.SHORTCUT_ICON_TYPE_CAPTURE_PHOTO;
	}
	get SHORTCUT_ICON_TYPE_CAPTURE_VIDEO () {
		return this._object.SHORTCUT_ICON_TYPE_CAPTURE_VIDEO;
	}
	get SHORTCUT_ICON_TYPE_TASK () {
		return this._object.SHORTCUT_ICON_TYPE_TASK;
	}
	get SHORTCUT_ICON_TYPE_TASK_COMPLETED () {
		return this._object.SHORTCUT_ICON_TYPE_TASK_COMPLETED;
	}
	get SHORTCUT_ICON_TYPE_ALARM () {
		return this._object.SHORTCUT_ICON_TYPE_ALARM;
	}
	get SHORTCUT_ICON_TYPE_BOOKMARK () {
		return this._object.SHORTCUT_ICON_TYPE_BOOKMARK;
	}
	get SHORTCUT_ICON_TYPE_SHUFFLE () {
		return this._object.SHORTCUT_ICON_TYPE_SHUFFLE;
	}
	get SHORTCUT_ICON_TYPE_AUDIO () {
		return this._object.SHORTCUT_ICON_TYPE_AUDIO;
	}
	get SHORTCUT_ICON_TYPE_UPDATE () {
		return this._object.SHORTCUT_ICON_TYPE_UPDATE;
	}
	get appBadge () {
		return this._object.appBadge;
	}
	set appBadge (value) {
		this._object.appBadge = value;
	}
	get appSupportsShakeToEdit () {
		return this._object.appSupportsShakeToEdit;
	}
	set appSupportsShakeToEdit (value) {
		this._object.appSupportsShakeToEdit = value;
	}
	get statusBarBackgroundColor () {
		return this._object.statusBarBackgroundColor;
	}
	set statusBarBackgroundColor (value) {
		this._object.statusBarBackgroundColor = value;
	}

	// static properties
	static get bubbleParent () {
		return Titanium.UI.iOS.bubbleParent;
	}
	static set bubbleParent (value) {
		Titanium.UI.iOS.bubbleParent = value;
	}
	static get MODAL_PRESENTATION_CURRENT_CONTEXT () {
		return Titanium.UI.iOS.MODAL_PRESENTATION_CURRENT_CONTEXT;
	}
	static set MODAL_PRESENTATION_CURRENT_CONTEXT (value) {
		Titanium.UI.iOS.MODAL_PRESENTATION_CURRENT_CONTEXT = value;
	}
	static get appSupportsShakeToEdit () {
		return Titanium.UI.iOS.appSupportsShakeToEdit;
	}
	static set appSupportsShakeToEdit (value) {
		Titanium.UI.iOS.appSupportsShakeToEdit = value;
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
	create3DMatrix (parameters) {
		parameters = normalize(parameters);
		return new _3DMatrix(this._object.create3DMatrix(parameters));
	}
	createAttribute (parameters) {
		parameters = normalize(parameters);
		return new Attribute(this._object.createAttribute(parameters));
	}
	createAttributedString (parameters) {
		parameters = normalize(parameters);
		return new AttributedString(this._object.createAttributedString(parameters));
	}
	createSystemButton (parameters) {
		parameters = normalize(parameters);
		return new SystemButton(this._object.createSystemButton(parameters));
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
	getForceTouchSupported () {
		return this._object.getForceTouchSupported();
	}
	setMODAL_PRESENTATION_CURRENT_CONTEXT (MODAL_PRESENTATION_CURRENT_CONTEXT) {
		return this._object.setMODAL_PRESENTATION_CURRENT_CONTEXT(MODAL_PRESENTATION_CURRENT_CONTEXT);
	}
	getAppBadge () {
		return this._object.getAppBadge();
	}
	setAppBadge (appBadge) {
		return this._object.setAppBadge(appBadge);
	}
	getAppSupportsShakeToEdit () {
		return this._object.getAppSupportsShakeToEdit();
	}
	setAppSupportsShakeToEdit (appSupportsShakeToEdit) {
		return this._object.setAppSupportsShakeToEdit(appSupportsShakeToEdit);
	}
	getStatusBarBackgroundColor () {
		return this._object.getStatusBarBackgroundColor();
	}
	setStatusBarBackgroundColor (statusBarBackgroundColor) {
		return this._object.setStatusBarBackgroundColor(statusBarBackgroundColor);
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
	static getApiName () {
		return this._object.getApiName();
	}
	static getBubbleParent () {
		return this._object.getBubbleParent();
	}
	static setBubbleParent (bubbleParent) {
		return this._object.setBubbleParent(bubbleParent);
	}
	static getForceTouchSupported () {
		return this._object.getForceTouchSupported();
	}
	static setMODAL_PRESENTATION_CURRENT_CONTEXT (MODAL_PRESENTATION_CURRENT_CONTEXT) {
		return this._object.setMODAL_PRESENTATION_CURRENT_CONTEXT(MODAL_PRESENTATION_CURRENT_CONTEXT);
	}
	static getAppBadge () {
		return this._object.getAppBadge();
	}
	static setAppBadge (appBadge) {
		return this._object.setAppBadge(appBadge);
	}
	static getAppSupportsShakeToEdit () {
		return this._object.getAppSupportsShakeToEdit();
	}
	static setAppSupportsShakeToEdit (appSupportsShakeToEdit) {
		return this._object.setAppSupportsShakeToEdit(appSupportsShakeToEdit);
	}
	static getStatusBarBackgroundColor () {
		return this._object.getStatusBarBackgroundColor();
	}
	static setStatusBarBackgroundColor (statusBarBackgroundColor) {
		return this._object.setStatusBarBackgroundColor(statusBarBackgroundColor);
	}

	// modules
	static get Proxy () {
		return Proxy;
	}
	static get Blob () {
		return Blob;
	}
	static get _3DMatrix () {
		return _3DMatrix;
	}
	static get AdView () {
		return AdView;
	}
	static get AnchorAttachmentBehavior () {
		return AnchorAttachmentBehavior;
	}
	static get Animator () {
		return Animator;
	}
	static get ApplicationShortcuts () {
		return ApplicationShortcuts;
	}
	static get Attribute () {
		return Attribute;
	}
	static get AttributedString () {
		return AttributedString;
	}
	static get BlurView () {
		return BlurView;
	}
	static get CollisionBehavior () {
		return CollisionBehavior;
	}
	static get CoverFlowView () {
		return CoverFlowView;
	}
	static get DocumentViewer () {
		return DocumentViewer;
	}
	static get DynamicItemBehavior () {
		return DynamicItemBehavior;
	}
	static get FeedbackGenerator () {
		return FeedbackGenerator;
	}
	static get GravityBehavior () {
		return GravityBehavior;
	}
	static get LivePhotoView () {
		return LivePhotoView;
	}
	static get MenuPopup () {
		return MenuPopup;
	}
	static get NavigationWindow () {
		return NavigationWindow;
	}
	static get PreviewAction () {
		return PreviewAction;
	}
	static get PreviewActionGroup () {
		return PreviewActionGroup;
	}
	static get PreviewContext () {
		return PreviewContext;
	}
	static get PushBehavior () {
		return PushBehavior;
	}
	static get SnapBehavior () {
		return SnapBehavior;
	}
	static get SplitWindow () {
		return SplitWindow;
	}
	static get Stepper () {
		return Stepper;
	}
	static get SystemButton () {
		return SystemButton;
	}
	static get TabbedBar () {
		return TabbedBar;
	}
	static get Toolbar () {
		return Toolbar;
	}
	static get ViewAttachmentBehavior () {
		return ViewAttachmentBehavior;
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