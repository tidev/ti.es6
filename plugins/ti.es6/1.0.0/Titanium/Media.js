import { default as Window } from './UI/Window';
import { default as MusicPlayer } from './Media/MusicPlayer';
export { default as AudioPlayer } from './Media/AudioPlayer';
import { default as AudioPlayer } from './Media/AudioPlayer';
export { default as AudioRecorder } from './Media/AudioRecorder';
import { default as AudioRecorder } from './Media/AudioRecorder';
export { default as Sound } from './Media/Sound';
import { default as Sound } from './Media/Sound';
export { default as SystemAlert } from './Media/SystemAlert';
import { default as SystemAlert } from './Media/SystemAlert';
export { default as VideoPlayer } from './Media/VideoPlayer';
import { default as VideoPlayer } from './Media/VideoPlayer';

export default class Media {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.Media')) {
			this._object = object;
		} else {
			this._object = undefined;
		}
	}

	// constants
	static get apiName () {
		return Titanium.Media.apiName;
	}
	static get AUDIO_HEADPHONES () {
		return Titanium.Media.AUDIO_HEADPHONES;
	}
	static get AUDIO_HEADPHONES_AND_MIC () {
		return Titanium.Media.AUDIO_HEADPHONES_AND_MIC;
	}
	static get AUDIO_HEADSET_INOUT () {
		return Titanium.Media.AUDIO_HEADSET_INOUT;
	}
	static get AUDIO_LINEOUT () {
		return Titanium.Media.AUDIO_LINEOUT;
	}
	static get AUDIO_MICROPHONE () {
		return Titanium.Media.AUDIO_MICROPHONE;
	}
	static get AUDIO_MUTED () {
		return Titanium.Media.AUDIO_MUTED;
	}
	static get AUDIO_RECEIVER_AND_MIC () {
		return Titanium.Media.AUDIO_RECEIVER_AND_MIC;
	}
	static get AUDIO_SESSION_MODE_AMBIENT () {
		return Titanium.Media.AUDIO_SESSION_MODE_AMBIENT;
	}
	static get AUDIO_SESSION_MODE_PLAYBACK () {
		return Titanium.Media.AUDIO_SESSION_MODE_PLAYBACK;
	}
	static get AUDIO_SESSION_MODE_PLAY_AND_RECORD () {
		return Titanium.Media.AUDIO_SESSION_MODE_PLAY_AND_RECORD;
	}
	static get AUDIO_SESSION_MODE_RECORD () {
		return Titanium.Media.AUDIO_SESSION_MODE_RECORD;
	}
	static get AUDIO_SESSION_MODE_SOLO_AMBIENT () {
		return Titanium.Media.AUDIO_SESSION_MODE_SOLO_AMBIENT;
	}
	static get AUDIO_SPEAKER () {
		return Titanium.Media.AUDIO_SPEAKER;
	}
	static get AUDIO_UNAVAILABLE () {
		return Titanium.Media.AUDIO_UNAVAILABLE;
	}
	static get AUDIO_UNKNOWN () {
		return Titanium.Media.AUDIO_UNKNOWN;
	}
	static get CAMERA_AUTHORIZATION_AUTHORIZED () {
		return Titanium.Media.CAMERA_AUTHORIZATION_AUTHORIZED;
	}
	static get CAMERA_AUTHORIZATION_DENIED () {
		return Titanium.Media.CAMERA_AUTHORIZATION_DENIED;
	}
	static get CAMERA_AUTHORIZATION_RESTRICTED () {
		return Titanium.Media.CAMERA_AUTHORIZATION_RESTRICTED;
	}
	static get CAMERA_AUTHORIZATION_NOT_DETERMINED () {
		return Titanium.Media.CAMERA_AUTHORIZATION_NOT_DETERMINED;
	}
	static get CAMERA_AUTHORIZATION_UNKNOWN () {
		return Titanium.Media.CAMERA_AUTHORIZATION_UNKNOWN;
	}
	static get MEDIA_TYPE_LIVEPHOTO () {
		return Titanium.Media.MEDIA_TYPE_LIVEPHOTO;
	}
	static get QUALITY_640x480 () {
		return Titanium.Media.QUALITY_640x480;
	}
	static get QUALITY_IFRAME_1280x720 () {
		return Titanium.Media.QUALITY_IFRAME_1280x720;
	}
	static get QUALITY_IFRAME_960x540 () {
		return Titanium.Media.QUALITY_IFRAME_960x540;
	}
	static get VIDEO_CONTROL_VOLUME_ONLY () {
		return Titanium.Media.VIDEO_CONTROL_VOLUME_ONLY;
	}
	static get VIDEO_LOAD_STATE_FAILED () {
		return Titanium.Media.VIDEO_LOAD_STATE_FAILED;
	}
	static get VIDEO_SCALING_RESIZE () {
		return Titanium.Media.VIDEO_SCALING_RESIZE;
	}
	static get VIDEO_SCALING_RESIZE_ASPECT () {
		return Titanium.Media.VIDEO_SCALING_RESIZE_ASPECT;
	}
	static get VIDEO_SCALING_RESIZE_ASPECT_FILL () {
		return Titanium.Media.VIDEO_SCALING_RESIZE_ASPECT_FILL;
	}
	static get audioLineType () {
		return Titanium.Media.audioLineType;
	}
	static get cameraAuthorizationStatus () {
		return Titanium.Media.cameraAuthorizationStatus;
	}
	static get cameraAuthorization () {
		return Titanium.Media.cameraAuthorization;
	}
	static get AUDIO_FILEFORMAT_3GP2 () {
		return Titanium.Media.AUDIO_FILEFORMAT_3GP2;
	}
	static get AUDIO_FILEFORMAT_3GPP () {
		return Titanium.Media.AUDIO_FILEFORMAT_3GPP;
	}
	static get AUDIO_FILEFORMAT_AIFF () {
		return Titanium.Media.AUDIO_FILEFORMAT_AIFF;
	}
	static get AUDIO_FILEFORMAT_AMR () {
		return Titanium.Media.AUDIO_FILEFORMAT_AMR;
	}
	static get AUDIO_FILEFORMAT_CAF () {
		return Titanium.Media.AUDIO_FILEFORMAT_CAF;
	}
	static get AUDIO_FILEFORMAT_MP3 () {
		return Titanium.Media.AUDIO_FILEFORMAT_MP3;
	}
	static get AUDIO_FILEFORMAT_MP4 () {
		return Titanium.Media.AUDIO_FILEFORMAT_MP4;
	}
	static get AUDIO_FILEFORMAT_MP4A () {
		return Titanium.Media.AUDIO_FILEFORMAT_MP4A;
	}
	static get AUDIO_FILEFORMAT_WAVE () {
		return Titanium.Media.AUDIO_FILEFORMAT_WAVE;
	}
	static get AUDIO_FORMAT_AAC () {
		return Titanium.Media.AUDIO_FORMAT_AAC;
	}
	static get AUDIO_FORMAT_ALAW () {
		return Titanium.Media.AUDIO_FORMAT_ALAW;
	}
	static get AUDIO_FORMAT_APPLE_LOSSLESS () {
		return Titanium.Media.AUDIO_FORMAT_APPLE_LOSSLESS;
	}
	static get AUDIO_FORMAT_ILBC () {
		return Titanium.Media.AUDIO_FORMAT_ILBC;
	}
	static get AUDIO_FORMAT_IMA4 () {
		return Titanium.Media.AUDIO_FORMAT_IMA4;
	}
	static get AUDIO_FORMAT_LINEAR_PCM () {
		return Titanium.Media.AUDIO_FORMAT_LINEAR_PCM;
	}
	static get AUDIO_FORMAT_ULAW () {
		return Titanium.Media.AUDIO_FORMAT_ULAW;
	}
	static get AUDIO_SESSION_CATEGORY_AMBIENT () {
		return Titanium.Media.AUDIO_SESSION_CATEGORY_AMBIENT;
	}
	static get AUDIO_SESSION_CATEGORY_PLAYBACK () {
		return Titanium.Media.AUDIO_SESSION_CATEGORY_PLAYBACK;
	}
	static get AUDIO_SESSION_CATEGORY_PLAY_AND_RECORD () {
		return Titanium.Media.AUDIO_SESSION_CATEGORY_PLAY_AND_RECORD;
	}
	static get AUDIO_SESSION_CATEGORY_RECORD () {
		return Titanium.Media.AUDIO_SESSION_CATEGORY_RECORD;
	}
	static get AUDIO_SESSION_CATEGORY_SOLO_AMBIENT () {
		return Titanium.Media.AUDIO_SESSION_CATEGORY_SOLO_AMBIENT;
	}
	static get AUDIO_SESSION_OVERRIDE_ROUTE_NONE () {
		return Titanium.Media.AUDIO_SESSION_OVERRIDE_ROUTE_NONE;
	}
	static get AUDIO_SESSION_OVERRIDE_ROUTE_SPEAKER () {
		return Titanium.Media.AUDIO_SESSION_OVERRIDE_ROUTE_SPEAKER;
	}
	static get AUDIO_SESSION_PORT_LINEIN () {
		return Titanium.Media.AUDIO_SESSION_PORT_LINEIN;
	}
	static get AUDIO_SESSION_PORT_BUILTINMIC () {
		return Titanium.Media.AUDIO_SESSION_PORT_BUILTINMIC;
	}
	static get AUDIO_SESSION_PORT_HEADSETMIC () {
		return Titanium.Media.AUDIO_SESSION_PORT_HEADSETMIC;
	}
	static get AUDIO_SESSION_PORT_LINEOUT () {
		return Titanium.Media.AUDIO_SESSION_PORT_LINEOUT;
	}
	static get AUDIO_SESSION_PORT_HEADPHONES () {
		return Titanium.Media.AUDIO_SESSION_PORT_HEADPHONES;
	}
	static get AUDIO_SESSION_PORT_BLUETOOTHA2DP () {
		return Titanium.Media.AUDIO_SESSION_PORT_BLUETOOTHA2DP;
	}
	static get AUDIO_SESSION_PORT_BUILTINRECEIVER () {
		return Titanium.Media.AUDIO_SESSION_PORT_BUILTINRECEIVER;
	}
	static get AUDIO_SESSION_PORT_BUILTINSPEAKER () {
		return Titanium.Media.AUDIO_SESSION_PORT_BUILTINSPEAKER;
	}
	static get AUDIO_SESSION_PORT_HDMI () {
		return Titanium.Media.AUDIO_SESSION_PORT_HDMI;
	}
	static get AUDIO_SESSION_PORT_AIRPLAY () {
		return Titanium.Media.AUDIO_SESSION_PORT_AIRPLAY;
	}
	static get AUDIO_SESSION_PORT_BLUETOOTHHFP () {
		return Titanium.Media.AUDIO_SESSION_PORT_BLUETOOTHHFP;
	}
	static get AUDIO_SESSION_PORT_USBAUDIO () {
		return Titanium.Media.AUDIO_SESSION_PORT_USBAUDIO;
	}
	static get AUDIO_SESSION_PORT_BLUETOOTHLE () {
		return Titanium.Media.AUDIO_SESSION_PORT_BLUETOOTHLE;
	}
	static get AUDIO_SESSION_PORT_CARAUDIO () {
		return Titanium.Media.AUDIO_SESSION_PORT_CARAUDIO;
	}
	static get CAMERA_FLASH_AUTO () {
		return Titanium.Media.CAMERA_FLASH_AUTO;
	}
	static get CAMERA_FLASH_OFF () {
		return Titanium.Media.CAMERA_FLASH_OFF;
	}
	static get CAMERA_FLASH_ON () {
		return Titanium.Media.CAMERA_FLASH_ON;
	}
	static get CAMERA_FRONT () {
		return Titanium.Media.CAMERA_FRONT;
	}
	static get CAMERA_REAR () {
		return Titanium.Media.CAMERA_REAR;
	}
	static get DEVICE_BUSY () {
		return Titanium.Media.DEVICE_BUSY;
	}
	static get MEDIA_TYPE_PHOTO () {
		return Titanium.Media.MEDIA_TYPE_PHOTO;
	}
	static get MEDIA_TYPE_VIDEO () {
		return Titanium.Media.MEDIA_TYPE_VIDEO;
	}
	static get MUSIC_MEDIA_TYPE_ALL () {
		return Titanium.Media.MUSIC_MEDIA_TYPE_ALL;
	}
	static get MUSIC_MEDIA_TYPE_ANY_AUDIO () {
		return Titanium.Media.MUSIC_MEDIA_TYPE_ANY_AUDIO;
	}
	static get MUSIC_MEDIA_TYPE_AUDIOBOOK () {
		return Titanium.Media.MUSIC_MEDIA_TYPE_AUDIOBOOK;
	}
	static get MUSIC_MEDIA_TYPE_MUSIC () {
		return Titanium.Media.MUSIC_MEDIA_TYPE_MUSIC;
	}
	static get MUSIC_MEDIA_TYPE_PODCAST () {
		return Titanium.Media.MUSIC_MEDIA_TYPE_PODCAST;
	}
	static get MUSIC_MEDIA_GROUP_TITLE () {
		return Titanium.Media.MUSIC_MEDIA_GROUP_TITLE;
	}
	static get MUSIC_MEDIA_GROUP_ALBUM () {
		return Titanium.Media.MUSIC_MEDIA_GROUP_ALBUM;
	}
	static get MUSIC_MEDIA_GROUP_ARTIST () {
		return Titanium.Media.MUSIC_MEDIA_GROUP_ARTIST;
	}
	static get MUSIC_MEDIA_GROUP_ALBUM_ARTIST () {
		return Titanium.Media.MUSIC_MEDIA_GROUP_ALBUM_ARTIST;
	}
	static get MUSIC_MEDIA_GROUP_COMPOSER () {
		return Titanium.Media.MUSIC_MEDIA_GROUP_COMPOSER;
	}
	static get MUSIC_MEDIA_GROUP_GENRE () {
		return Titanium.Media.MUSIC_MEDIA_GROUP_GENRE;
	}
	static get MUSIC_MEDIA_GROUP_PLAYLIST () {
		return Titanium.Media.MUSIC_MEDIA_GROUP_PLAYLIST;
	}
	static get MUSIC_MEDIA_GROUP_PODCAST_TITLE () {
		return Titanium.Media.MUSIC_MEDIA_GROUP_PODCAST_TITLE;
	}
	static get MUSIC_PLAYER_REPEAT_ALL () {
		return Titanium.Media.MUSIC_PLAYER_REPEAT_ALL;
	}
	static get MUSIC_PLAYER_REPEAT_DEFAULT () {
		return Titanium.Media.MUSIC_PLAYER_REPEAT_DEFAULT;
	}
	static get MUSIC_PLAYER_REPEAT_NONE () {
		return Titanium.Media.MUSIC_PLAYER_REPEAT_NONE;
	}
	static get MUSIC_PLAYER_REPEAT_ONE () {
		return Titanium.Media.MUSIC_PLAYER_REPEAT_ONE;
	}
	static get MUSIC_PLAYER_SHUFFLE_ALBUMS () {
		return Titanium.Media.MUSIC_PLAYER_SHUFFLE_ALBUMS;
	}
	static get MUSIC_PLAYER_SHUFFLE_DEFAULT () {
		return Titanium.Media.MUSIC_PLAYER_SHUFFLE_DEFAULT;
	}
	static get MUSIC_PLAYER_SHUFFLE_NONE () {
		return Titanium.Media.MUSIC_PLAYER_SHUFFLE_NONE;
	}
	static get MUSIC_PLAYER_SHUFFLE_SONGS () {
		return Titanium.Media.MUSIC_PLAYER_SHUFFLE_SONGS;
	}
	static get MUSIC_PLAYER_STATE_INTERRUPTED () {
		return Titanium.Media.MUSIC_PLAYER_STATE_INTERRUPTED;
	}
	static get MUSIC_PLAYER_STATE_PAUSED () {
		return Titanium.Media.MUSIC_PLAYER_STATE_PAUSED;
	}
	static get MUSIC_PLAYER_STATE_PLAYING () {
		return Titanium.Media.MUSIC_PLAYER_STATE_PLAYING;
	}
	static get MUSIC_PLAYER_STATE_SEEK_BACKWARD () {
		return Titanium.Media.MUSIC_PLAYER_STATE_SEEK_BACKWARD;
	}
	static get MUSIC_PLAYER_STATE_SEEK_FORWARD () {
		return Titanium.Media.MUSIC_PLAYER_STATE_SEEK_FORWARD;
	}
	static get MUSIC_PLAYER_STATE_STOPPED () {
		return Titanium.Media.MUSIC_PLAYER_STATE_STOPPED;
	}
	static get NO_CAMERA () {
		return Titanium.Media.NO_CAMERA;
	}
	static get NO_VIDEO () {
		return Titanium.Media.NO_VIDEO;
	}
	static get QUALITY_HIGH () {
		return Titanium.Media.QUALITY_HIGH;
	}
	static get QUALITY_LOW () {
		return Titanium.Media.QUALITY_LOW;
	}
	static get QUALITY_MEDIUM () {
		return Titanium.Media.QUALITY_MEDIUM;
	}
	static get UNKNOWN_ERROR () {
		return Titanium.Media.UNKNOWN_ERROR;
	}
	static get VIDEO_CONTROL_DEFAULT () {
		return Titanium.Media.VIDEO_CONTROL_DEFAULT;
	}
	static get VIDEO_CONTROL_EMBEDDED () {
		return Titanium.Media.VIDEO_CONTROL_EMBEDDED;
	}
	static get VIDEO_CONTROL_FULLSCREEN () {
		return Titanium.Media.VIDEO_CONTROL_FULLSCREEN;
	}
	static get VIDEO_CONTROL_HIDDEN () {
		return Titanium.Media.VIDEO_CONTROL_HIDDEN;
	}
	static get VIDEO_CONTROL_NONE () {
		return Titanium.Media.VIDEO_CONTROL_NONE;
	}
	static get VIDEO_FINISH_REASON_PLAYBACK_ENDED () {
		return Titanium.Media.VIDEO_FINISH_REASON_PLAYBACK_ENDED;
	}
	static get VIDEO_FINISH_REASON_PLAYBACK_ERROR () {
		return Titanium.Media.VIDEO_FINISH_REASON_PLAYBACK_ERROR;
	}
	static get VIDEO_FINISH_REASON_USER_EXITED () {
		return Titanium.Media.VIDEO_FINISH_REASON_USER_EXITED;
	}
	static get VIDEO_LOAD_STATE_PLAYABLE () {
		return Titanium.Media.VIDEO_LOAD_STATE_PLAYABLE;
	}
	static get VIDEO_LOAD_STATE_PLAYTHROUGH_OK () {
		return Titanium.Media.VIDEO_LOAD_STATE_PLAYTHROUGH_OK;
	}
	static get VIDEO_LOAD_STATE_STALLED () {
		return Titanium.Media.VIDEO_LOAD_STATE_STALLED;
	}
	static get VIDEO_LOAD_STATE_UNKNOWN () {
		return Titanium.Media.VIDEO_LOAD_STATE_UNKNOWN;
	}
	static get VIDEO_MEDIA_TYPE_AUDIO () {
		return Titanium.Media.VIDEO_MEDIA_TYPE_AUDIO;
	}
	static get VIDEO_MEDIA_TYPE_NONE () {
		return Titanium.Media.VIDEO_MEDIA_TYPE_NONE;
	}
	static get VIDEO_MEDIA_TYPE_VIDEO () {
		return Titanium.Media.VIDEO_MEDIA_TYPE_VIDEO;
	}
	static get VIDEO_PLAYBACK_STATE_INTERRUPTED () {
		return Titanium.Media.VIDEO_PLAYBACK_STATE_INTERRUPTED;
	}
	static get VIDEO_PLAYBACK_STATE_PAUSED () {
		return Titanium.Media.VIDEO_PLAYBACK_STATE_PAUSED;
	}
	static get VIDEO_PLAYBACK_STATE_PLAYING () {
		return Titanium.Media.VIDEO_PLAYBACK_STATE_PLAYING;
	}
	static get VIDEO_PLAYBACK_STATE_SEEKING_BACKWARD () {
		return Titanium.Media.VIDEO_PLAYBACK_STATE_SEEKING_BACKWARD;
	}
	static get VIDEO_PLAYBACK_STATE_SEEKING_FORWARD () {
		return Titanium.Media.VIDEO_PLAYBACK_STATE_SEEKING_FORWARD;
	}
	static get VIDEO_PLAYBACK_STATE_STOPPED () {
		return Titanium.Media.VIDEO_PLAYBACK_STATE_STOPPED;
	}
	static get VIDEO_REPEAT_MODE_NONE () {
		return Titanium.Media.VIDEO_REPEAT_MODE_NONE;
	}
	static get VIDEO_REPEAT_MODE_ONE () {
		return Titanium.Media.VIDEO_REPEAT_MODE_ONE;
	}
	static get VIDEO_SCALING_ASPECT_FILL () {
		return Titanium.Media.VIDEO_SCALING_ASPECT_FILL;
	}
	static get VIDEO_SCALING_ASPECT_FIT () {
		return Titanium.Media.VIDEO_SCALING_ASPECT_FIT;
	}
	static get VIDEO_SCALING_MODE_FILL () {
		return Titanium.Media.VIDEO_SCALING_MODE_FILL;
	}
	static get VIDEO_SCALING_NONE () {
		return Titanium.Media.VIDEO_SCALING_NONE;
	}
	static get VIDEO_SOURCE_TYPE_FILE () {
		return Titanium.Media.VIDEO_SOURCE_TYPE_FILE;
	}
	static get VIDEO_SOURCE_TYPE_STREAMING () {
		return Titanium.Media.VIDEO_SOURCE_TYPE_STREAMING;
	}
	static get VIDEO_SOURCE_TYPE_UNKNOWN () {
		return Titanium.Media.VIDEO_SOURCE_TYPE_UNKNOWN;
	}
	static get VIDEO_TIME_OPTION_EXACT () {
		return Titanium.Media.VIDEO_TIME_OPTION_EXACT;
	}
	static get VIDEO_TIME_OPTION_NEAREST_KEYFRAME () {
		return Titanium.Media.VIDEO_TIME_OPTION_NEAREST_KEYFRAME;
	}
	static get VIDEO_TIME_OPTION_CLOSEST_SYNC () {
		return Titanium.Media.VIDEO_TIME_OPTION_CLOSEST_SYNC;
	}
	static get VIDEO_TIME_OPTION_NEXT_SYNC () {
		return Titanium.Media.VIDEO_TIME_OPTION_NEXT_SYNC;
	}
	static get VIDEO_TIME_OPTION_PREVIOUS_SYNC () {
		return Titanium.Media.VIDEO_TIME_OPTION_PREVIOUS_SYNC;
	}
	static get appMusicPlayer () {
		return new MusicPlayer(Titanium.Media.appMusicPlayer);
	}
	static get audioPlaying () {
		return Titanium.Media.audioPlaying;
	}
	static get availableCameras () {
		return Titanium.Media.availableCameras;
	}
	static get canRecord () {
		return Titanium.Media.canRecord;
	}
	static get currentRoute () {
		return Titanium.Media.currentRoute;
	}
	static get isCameraSupported () {
		return Titanium.Media.isCameraSupported;
	}
	static get peakMicrophonePower () {
		return Titanium.Media.peakMicrophonePower;
	}
	static get systemMusicPlayer () {
		return new MusicPlayer(Titanium.Media.systemMusicPlayer);
	}
	static get volume () {
		return Titanium.Media.volume;
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
	get AUDIO_HEADPHONES () {
		return this._object.AUDIO_HEADPHONES;
	}
	get AUDIO_HEADPHONES_AND_MIC () {
		return this._object.AUDIO_HEADPHONES_AND_MIC;
	}
	get AUDIO_HEADSET_INOUT () {
		return this._object.AUDIO_HEADSET_INOUT;
	}
	get AUDIO_LINEOUT () {
		return this._object.AUDIO_LINEOUT;
	}
	get AUDIO_MICROPHONE () {
		return this._object.AUDIO_MICROPHONE;
	}
	get AUDIO_MUTED () {
		return this._object.AUDIO_MUTED;
	}
	get AUDIO_RECEIVER_AND_MIC () {
		return this._object.AUDIO_RECEIVER_AND_MIC;
	}
	get AUDIO_SESSION_MODE_AMBIENT () {
		return this._object.AUDIO_SESSION_MODE_AMBIENT;
	}
	get AUDIO_SESSION_MODE_PLAYBACK () {
		return this._object.AUDIO_SESSION_MODE_PLAYBACK;
	}
	get AUDIO_SESSION_MODE_PLAY_AND_RECORD () {
		return this._object.AUDIO_SESSION_MODE_PLAY_AND_RECORD;
	}
	get AUDIO_SESSION_MODE_RECORD () {
		return this._object.AUDIO_SESSION_MODE_RECORD;
	}
	get AUDIO_SESSION_MODE_SOLO_AMBIENT () {
		return this._object.AUDIO_SESSION_MODE_SOLO_AMBIENT;
	}
	get AUDIO_SPEAKER () {
		return this._object.AUDIO_SPEAKER;
	}
	get AUDIO_UNAVAILABLE () {
		return this._object.AUDIO_UNAVAILABLE;
	}
	get AUDIO_UNKNOWN () {
		return this._object.AUDIO_UNKNOWN;
	}
	get CAMERA_AUTHORIZATION_AUTHORIZED () {
		return this._object.CAMERA_AUTHORIZATION_AUTHORIZED;
	}
	get CAMERA_AUTHORIZATION_DENIED () {
		return this._object.CAMERA_AUTHORIZATION_DENIED;
	}
	get CAMERA_AUTHORIZATION_RESTRICTED () {
		return this._object.CAMERA_AUTHORIZATION_RESTRICTED;
	}
	get CAMERA_AUTHORIZATION_NOT_DETERMINED () {
		return this._object.CAMERA_AUTHORIZATION_NOT_DETERMINED;
	}
	get CAMERA_AUTHORIZATION_UNKNOWN () {
		return this._object.CAMERA_AUTHORIZATION_UNKNOWN;
	}
	get MEDIA_TYPE_LIVEPHOTO () {
		return this._object.MEDIA_TYPE_LIVEPHOTO;
	}
	get QUALITY_640x480 () {
		return this._object.QUALITY_640x480;
	}
	get QUALITY_IFRAME_1280x720 () {
		return this._object.QUALITY_IFRAME_1280x720;
	}
	get QUALITY_IFRAME_960x540 () {
		return this._object.QUALITY_IFRAME_960x540;
	}
	get VIDEO_CONTROL_VOLUME_ONLY () {
		return this._object.VIDEO_CONTROL_VOLUME_ONLY;
	}
	get VIDEO_LOAD_STATE_FAILED () {
		return this._object.VIDEO_LOAD_STATE_FAILED;
	}
	get VIDEO_SCALING_RESIZE () {
		return this._object.VIDEO_SCALING_RESIZE;
	}
	get VIDEO_SCALING_RESIZE_ASPECT () {
		return this._object.VIDEO_SCALING_RESIZE_ASPECT;
	}
	get VIDEO_SCALING_RESIZE_ASPECT_FILL () {
		return this._object.VIDEO_SCALING_RESIZE_ASPECT_FILL;
	}
	get audioLineType () {
		return this._object.audioLineType;
	}
	get audioSessionMode () {
		return this._object.audioSessionMode;
	}
	set audioSessionMode (value) {
		this._object.audioSessionMode = value;
	}
	get cameraAuthorizationStatus () {
		return this._object.cameraAuthorizationStatus;
	}
	get cameraAuthorization () {
		return this._object.cameraAuthorization;
	}
	get AUDIO_FILEFORMAT_3GP2 () {
		return this._object.AUDIO_FILEFORMAT_3GP2;
	}
	get AUDIO_FILEFORMAT_3GPP () {
		return this._object.AUDIO_FILEFORMAT_3GPP;
	}
	get AUDIO_FILEFORMAT_AIFF () {
		return this._object.AUDIO_FILEFORMAT_AIFF;
	}
	get AUDIO_FILEFORMAT_AMR () {
		return this._object.AUDIO_FILEFORMAT_AMR;
	}
	get AUDIO_FILEFORMAT_CAF () {
		return this._object.AUDIO_FILEFORMAT_CAF;
	}
	get AUDIO_FILEFORMAT_MP3 () {
		return this._object.AUDIO_FILEFORMAT_MP3;
	}
	get AUDIO_FILEFORMAT_MP4 () {
		return this._object.AUDIO_FILEFORMAT_MP4;
	}
	get AUDIO_FILEFORMAT_MP4A () {
		return this._object.AUDIO_FILEFORMAT_MP4A;
	}
	get AUDIO_FILEFORMAT_WAVE () {
		return this._object.AUDIO_FILEFORMAT_WAVE;
	}
	get AUDIO_FORMAT_AAC () {
		return this._object.AUDIO_FORMAT_AAC;
	}
	get AUDIO_FORMAT_ALAW () {
		return this._object.AUDIO_FORMAT_ALAW;
	}
	get AUDIO_FORMAT_APPLE_LOSSLESS () {
		return this._object.AUDIO_FORMAT_APPLE_LOSSLESS;
	}
	get AUDIO_FORMAT_ILBC () {
		return this._object.AUDIO_FORMAT_ILBC;
	}
	get AUDIO_FORMAT_IMA4 () {
		return this._object.AUDIO_FORMAT_IMA4;
	}
	get AUDIO_FORMAT_LINEAR_PCM () {
		return this._object.AUDIO_FORMAT_LINEAR_PCM;
	}
	get AUDIO_FORMAT_ULAW () {
		return this._object.AUDIO_FORMAT_ULAW;
	}
	get AUDIO_SESSION_CATEGORY_AMBIENT () {
		return this._object.AUDIO_SESSION_CATEGORY_AMBIENT;
	}
	get AUDIO_SESSION_CATEGORY_PLAYBACK () {
		return this._object.AUDIO_SESSION_CATEGORY_PLAYBACK;
	}
	get AUDIO_SESSION_CATEGORY_PLAY_AND_RECORD () {
		return this._object.AUDIO_SESSION_CATEGORY_PLAY_AND_RECORD;
	}
	get AUDIO_SESSION_CATEGORY_RECORD () {
		return this._object.AUDIO_SESSION_CATEGORY_RECORD;
	}
	get AUDIO_SESSION_CATEGORY_SOLO_AMBIENT () {
		return this._object.AUDIO_SESSION_CATEGORY_SOLO_AMBIENT;
	}
	get AUDIO_SESSION_OVERRIDE_ROUTE_NONE () {
		return this._object.AUDIO_SESSION_OVERRIDE_ROUTE_NONE;
	}
	get AUDIO_SESSION_OVERRIDE_ROUTE_SPEAKER () {
		return this._object.AUDIO_SESSION_OVERRIDE_ROUTE_SPEAKER;
	}
	get AUDIO_SESSION_PORT_LINEIN () {
		return this._object.AUDIO_SESSION_PORT_LINEIN;
	}
	get AUDIO_SESSION_PORT_BUILTINMIC () {
		return this._object.AUDIO_SESSION_PORT_BUILTINMIC;
	}
	get AUDIO_SESSION_PORT_HEADSETMIC () {
		return this._object.AUDIO_SESSION_PORT_HEADSETMIC;
	}
	get AUDIO_SESSION_PORT_LINEOUT () {
		return this._object.AUDIO_SESSION_PORT_LINEOUT;
	}
	get AUDIO_SESSION_PORT_HEADPHONES () {
		return this._object.AUDIO_SESSION_PORT_HEADPHONES;
	}
	get AUDIO_SESSION_PORT_BLUETOOTHA2DP () {
		return this._object.AUDIO_SESSION_PORT_BLUETOOTHA2DP;
	}
	get AUDIO_SESSION_PORT_BUILTINRECEIVER () {
		return this._object.AUDIO_SESSION_PORT_BUILTINRECEIVER;
	}
	get AUDIO_SESSION_PORT_BUILTINSPEAKER () {
		return this._object.AUDIO_SESSION_PORT_BUILTINSPEAKER;
	}
	get AUDIO_SESSION_PORT_HDMI () {
		return this._object.AUDIO_SESSION_PORT_HDMI;
	}
	get AUDIO_SESSION_PORT_AIRPLAY () {
		return this._object.AUDIO_SESSION_PORT_AIRPLAY;
	}
	get AUDIO_SESSION_PORT_BLUETOOTHHFP () {
		return this._object.AUDIO_SESSION_PORT_BLUETOOTHHFP;
	}
	get AUDIO_SESSION_PORT_USBAUDIO () {
		return this._object.AUDIO_SESSION_PORT_USBAUDIO;
	}
	get AUDIO_SESSION_PORT_BLUETOOTHLE () {
		return this._object.AUDIO_SESSION_PORT_BLUETOOTHLE;
	}
	get AUDIO_SESSION_PORT_CARAUDIO () {
		return this._object.AUDIO_SESSION_PORT_CARAUDIO;
	}
	get CAMERA_FLASH_AUTO () {
		return this._object.CAMERA_FLASH_AUTO;
	}
	get CAMERA_FLASH_OFF () {
		return this._object.CAMERA_FLASH_OFF;
	}
	get CAMERA_FLASH_ON () {
		return this._object.CAMERA_FLASH_ON;
	}
	get CAMERA_FRONT () {
		return this._object.CAMERA_FRONT;
	}
	get CAMERA_REAR () {
		return this._object.CAMERA_REAR;
	}
	get DEVICE_BUSY () {
		return this._object.DEVICE_BUSY;
	}
	get MEDIA_TYPE_PHOTO () {
		return this._object.MEDIA_TYPE_PHOTO;
	}
	get MEDIA_TYPE_VIDEO () {
		return this._object.MEDIA_TYPE_VIDEO;
	}
	get MUSIC_MEDIA_TYPE_ALL () {
		return this._object.MUSIC_MEDIA_TYPE_ALL;
	}
	get MUSIC_MEDIA_TYPE_ANY_AUDIO () {
		return this._object.MUSIC_MEDIA_TYPE_ANY_AUDIO;
	}
	get MUSIC_MEDIA_TYPE_AUDIOBOOK () {
		return this._object.MUSIC_MEDIA_TYPE_AUDIOBOOK;
	}
	get MUSIC_MEDIA_TYPE_MUSIC () {
		return this._object.MUSIC_MEDIA_TYPE_MUSIC;
	}
	get MUSIC_MEDIA_TYPE_PODCAST () {
		return this._object.MUSIC_MEDIA_TYPE_PODCAST;
	}
	get MUSIC_MEDIA_GROUP_TITLE () {
		return this._object.MUSIC_MEDIA_GROUP_TITLE;
	}
	get MUSIC_MEDIA_GROUP_ALBUM () {
		return this._object.MUSIC_MEDIA_GROUP_ALBUM;
	}
	get MUSIC_MEDIA_GROUP_ARTIST () {
		return this._object.MUSIC_MEDIA_GROUP_ARTIST;
	}
	get MUSIC_MEDIA_GROUP_ALBUM_ARTIST () {
		return this._object.MUSIC_MEDIA_GROUP_ALBUM_ARTIST;
	}
	get MUSIC_MEDIA_GROUP_COMPOSER () {
		return this._object.MUSIC_MEDIA_GROUP_COMPOSER;
	}
	get MUSIC_MEDIA_GROUP_GENRE () {
		return this._object.MUSIC_MEDIA_GROUP_GENRE;
	}
	get MUSIC_MEDIA_GROUP_PLAYLIST () {
		return this._object.MUSIC_MEDIA_GROUP_PLAYLIST;
	}
	get MUSIC_MEDIA_GROUP_PODCAST_TITLE () {
		return this._object.MUSIC_MEDIA_GROUP_PODCAST_TITLE;
	}
	get MUSIC_PLAYER_REPEAT_ALL () {
		return this._object.MUSIC_PLAYER_REPEAT_ALL;
	}
	get MUSIC_PLAYER_REPEAT_DEFAULT () {
		return this._object.MUSIC_PLAYER_REPEAT_DEFAULT;
	}
	get MUSIC_PLAYER_REPEAT_NONE () {
		return this._object.MUSIC_PLAYER_REPEAT_NONE;
	}
	get MUSIC_PLAYER_REPEAT_ONE () {
		return this._object.MUSIC_PLAYER_REPEAT_ONE;
	}
	get MUSIC_PLAYER_SHUFFLE_ALBUMS () {
		return this._object.MUSIC_PLAYER_SHUFFLE_ALBUMS;
	}
	get MUSIC_PLAYER_SHUFFLE_DEFAULT () {
		return this._object.MUSIC_PLAYER_SHUFFLE_DEFAULT;
	}
	get MUSIC_PLAYER_SHUFFLE_NONE () {
		return this._object.MUSIC_PLAYER_SHUFFLE_NONE;
	}
	get MUSIC_PLAYER_SHUFFLE_SONGS () {
		return this._object.MUSIC_PLAYER_SHUFFLE_SONGS;
	}
	get MUSIC_PLAYER_STATE_INTERRUPTED () {
		return this._object.MUSIC_PLAYER_STATE_INTERRUPTED;
	}
	get MUSIC_PLAYER_STATE_PAUSED () {
		return this._object.MUSIC_PLAYER_STATE_PAUSED;
	}
	get MUSIC_PLAYER_STATE_PLAYING () {
		return this._object.MUSIC_PLAYER_STATE_PLAYING;
	}
	get MUSIC_PLAYER_STATE_SEEK_BACKWARD () {
		return this._object.MUSIC_PLAYER_STATE_SEEK_BACKWARD;
	}
	get MUSIC_PLAYER_STATE_SEEK_FORWARD () {
		return this._object.MUSIC_PLAYER_STATE_SEEK_FORWARD;
	}
	get MUSIC_PLAYER_STATE_STOPPED () {
		return this._object.MUSIC_PLAYER_STATE_STOPPED;
	}
	get NO_CAMERA () {
		return this._object.NO_CAMERA;
	}
	get NO_VIDEO () {
		return this._object.NO_VIDEO;
	}
	get QUALITY_HIGH () {
		return this._object.QUALITY_HIGH;
	}
	get QUALITY_LOW () {
		return this._object.QUALITY_LOW;
	}
	get QUALITY_MEDIUM () {
		return this._object.QUALITY_MEDIUM;
	}
	get UNKNOWN_ERROR () {
		return this._object.UNKNOWN_ERROR;
	}
	get VIDEO_CONTROL_DEFAULT () {
		return this._object.VIDEO_CONTROL_DEFAULT;
	}
	get VIDEO_CONTROL_EMBEDDED () {
		return this._object.VIDEO_CONTROL_EMBEDDED;
	}
	get VIDEO_CONTROL_FULLSCREEN () {
		return this._object.VIDEO_CONTROL_FULLSCREEN;
	}
	get VIDEO_CONTROL_HIDDEN () {
		return this._object.VIDEO_CONTROL_HIDDEN;
	}
	get VIDEO_CONTROL_NONE () {
		return this._object.VIDEO_CONTROL_NONE;
	}
	get VIDEO_FINISH_REASON_PLAYBACK_ENDED () {
		return this._object.VIDEO_FINISH_REASON_PLAYBACK_ENDED;
	}
	get VIDEO_FINISH_REASON_PLAYBACK_ERROR () {
		return this._object.VIDEO_FINISH_REASON_PLAYBACK_ERROR;
	}
	get VIDEO_FINISH_REASON_USER_EXITED () {
		return this._object.VIDEO_FINISH_REASON_USER_EXITED;
	}
	get VIDEO_LOAD_STATE_PLAYABLE () {
		return this._object.VIDEO_LOAD_STATE_PLAYABLE;
	}
	get VIDEO_LOAD_STATE_PLAYTHROUGH_OK () {
		return this._object.VIDEO_LOAD_STATE_PLAYTHROUGH_OK;
	}
	get VIDEO_LOAD_STATE_STALLED () {
		return this._object.VIDEO_LOAD_STATE_STALLED;
	}
	get VIDEO_LOAD_STATE_UNKNOWN () {
		return this._object.VIDEO_LOAD_STATE_UNKNOWN;
	}
	get VIDEO_MEDIA_TYPE_AUDIO () {
		return this._object.VIDEO_MEDIA_TYPE_AUDIO;
	}
	get VIDEO_MEDIA_TYPE_NONE () {
		return this._object.VIDEO_MEDIA_TYPE_NONE;
	}
	get VIDEO_MEDIA_TYPE_VIDEO () {
		return this._object.VIDEO_MEDIA_TYPE_VIDEO;
	}
	get VIDEO_PLAYBACK_STATE_INTERRUPTED () {
		return this._object.VIDEO_PLAYBACK_STATE_INTERRUPTED;
	}
	get VIDEO_PLAYBACK_STATE_PAUSED () {
		return this._object.VIDEO_PLAYBACK_STATE_PAUSED;
	}
	get VIDEO_PLAYBACK_STATE_PLAYING () {
		return this._object.VIDEO_PLAYBACK_STATE_PLAYING;
	}
	get VIDEO_PLAYBACK_STATE_SEEKING_BACKWARD () {
		return this._object.VIDEO_PLAYBACK_STATE_SEEKING_BACKWARD;
	}
	get VIDEO_PLAYBACK_STATE_SEEKING_FORWARD () {
		return this._object.VIDEO_PLAYBACK_STATE_SEEKING_FORWARD;
	}
	get VIDEO_PLAYBACK_STATE_STOPPED () {
		return this._object.VIDEO_PLAYBACK_STATE_STOPPED;
	}
	get VIDEO_REPEAT_MODE_NONE () {
		return this._object.VIDEO_REPEAT_MODE_NONE;
	}
	get VIDEO_REPEAT_MODE_ONE () {
		return this._object.VIDEO_REPEAT_MODE_ONE;
	}
	get VIDEO_SCALING_ASPECT_FILL () {
		return this._object.VIDEO_SCALING_ASPECT_FILL;
	}
	get VIDEO_SCALING_ASPECT_FIT () {
		return this._object.VIDEO_SCALING_ASPECT_FIT;
	}
	get VIDEO_SCALING_MODE_FILL () {
		return this._object.VIDEO_SCALING_MODE_FILL;
	}
	get VIDEO_SCALING_NONE () {
		return this._object.VIDEO_SCALING_NONE;
	}
	get VIDEO_SOURCE_TYPE_FILE () {
		return this._object.VIDEO_SOURCE_TYPE_FILE;
	}
	get VIDEO_SOURCE_TYPE_STREAMING () {
		return this._object.VIDEO_SOURCE_TYPE_STREAMING;
	}
	get VIDEO_SOURCE_TYPE_UNKNOWN () {
		return this._object.VIDEO_SOURCE_TYPE_UNKNOWN;
	}
	get VIDEO_TIME_OPTION_EXACT () {
		return this._object.VIDEO_TIME_OPTION_EXACT;
	}
	get VIDEO_TIME_OPTION_NEAREST_KEYFRAME () {
		return this._object.VIDEO_TIME_OPTION_NEAREST_KEYFRAME;
	}
	get VIDEO_TIME_OPTION_CLOSEST_SYNC () {
		return this._object.VIDEO_TIME_OPTION_CLOSEST_SYNC;
	}
	get VIDEO_TIME_OPTION_NEXT_SYNC () {
		return this._object.VIDEO_TIME_OPTION_NEXT_SYNC;
	}
	get VIDEO_TIME_OPTION_PREVIOUS_SYNC () {
		return this._object.VIDEO_TIME_OPTION_PREVIOUS_SYNC;
	}
	get appMusicPlayer () {
		return new MusicPlayer(this._object.appMusicPlayer);
	}
	get audioPlaying () {
		return this._object.audioPlaying;
	}
	get audioSessionCategory () {
		return this._object.audioSessionCategory;
	}
	set audioSessionCategory (value) {
		this._object.audioSessionCategory = value;
	}
	get availableCameras () {
		return this._object.availableCameras;
	}
	get availableCameraMediaTypes () {
		return this._object.availableCameraMediaTypes;
	}
	set availableCameraMediaTypes (value) {
		this._object.availableCameraMediaTypes = value;
	}
	get availablePhotoGalleryMediaTypes () {
		return this._object.availablePhotoGalleryMediaTypes;
	}
	set availablePhotoGalleryMediaTypes (value) {
		this._object.availablePhotoGalleryMediaTypes = value;
	}
	get availablePhotoMediaTypes () {
		return this._object.availablePhotoMediaTypes;
	}
	set availablePhotoMediaTypes (value) {
		this._object.availablePhotoMediaTypes = value;
	}
	get averageMicrophonePower () {
		return this._object.averageMicrophonePower;
	}
	set averageMicrophonePower (value) {
		this._object.averageMicrophonePower = value;
	}
	get cameraFlashMode () {
		return this._object.cameraFlashMode;
	}
	set cameraFlashMode (value) {
		this._object.cameraFlashMode = value;
	}
	get canRecord () {
		return this._object.canRecord;
	}
	get currentRoute () {
		return this._object.currentRoute;
	}
	get isCameraSupported () {
		return this._object.isCameraSupported;
	}
	get peakMicrophonePower () {
		return this._object.peakMicrophonePower;
	}
	get systemMusicPlayer () {
		return new MusicPlayer(this._object.systemMusicPlayer);
	}
	get volume () {
		return this._object.volume;
	}

	// static properties
	static get bubbleParent () {
		return Titanium.Media.bubbleParent;
	}
	static set bubbleParent (value) {
		Titanium.Media.bubbleParent = value;
	}
	static get audioSessionCategory () {
		return Titanium.Media.audioSessionCategory;
	}
	static set audioSessionCategory (value) {
		Titanium.Media.audioSessionCategory = value;
	}
	static get availableCameraMediaTypes () {
		return Titanium.Media.availableCameraMediaTypes;
	}
	static set availableCameraMediaTypes (value) {
		Titanium.Media.availableCameraMediaTypes = value;
	}
	static get availablePhotoGalleryMediaTypes () {
		return Titanium.Media.availablePhotoGalleryMediaTypes;
	}
	static set availablePhotoGalleryMediaTypes (value) {
		Titanium.Media.availablePhotoGalleryMediaTypes = value;
	}
	static get availablePhotoMediaTypes () {
		return Titanium.Media.availablePhotoMediaTypes;
	}
	static set availablePhotoMediaTypes (value) {
		Titanium.Media.availablePhotoMediaTypes = value;
	}
	static get averageMicrophonePower () {
		return Titanium.Media.averageMicrophonePower;
	}
	static set averageMicrophonePower (value) {
		Titanium.Media.averageMicrophonePower = value;
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
	hideMusicLibrary () {
		return this._object.hideMusicLibrary();
	}
	previewImage (options) {
		return this._object.previewImage(options);
	}
	setOverrideAudioRoute (route) {
		return this._object.setOverrideAudioRoute(route);
	}
	hasMusicLibraryPermissions () {
		return this._object.hasMusicLibraryPermissions();
	}
	requestMusicLibraryPermissions (callback) {
		if (!callback) {
			return new Promise(resolve => this._object.requestMusicLibraryPermissions(resolve));
		}
		return this._object.requestMusicLibraryPermissions(callback);
	}
	queryMusicLibrary (query) {
		return this._object.queryMusicLibrary(query);
	}
	switchCamera (camera) {
		return this._object.switchCamera(camera);
	}
	hasPhotoGalleryPermissions () {
		return this._object.hasPhotoGalleryPermissions();
	}
	requestPhotoGalleryPermissions (callback) {
		if (!callback) {
			return new Promise(resolve => this._object.requestPhotoGalleryPermissions(resolve));
		}
		return this._object.requestPhotoGalleryPermissions(callback);
	}
	requestCameraAccess (callback) {
		if (!callback) {
			return new Promise(resolve => this._object.requestCameraAccess(resolve));
		}
		return this._object.requestCameraAccess(callback);
	}
	hasAudioPermissions () {
		return this._object.hasAudioPermissions();
	}
	hasAudioRecorderPermissions () {
		return this._object.hasAudioRecorderPermissions();
	}
	requestAudioPermissions (callback) {
		if (!callback) {
			return new Promise(resolve => this._object.requestAudioPermissions(resolve));
		}
		return this._object.requestAudioPermissions(callback);
	}
	beep () {
		return this._object.beep();
	}
	hideCamera () {
		return this._object.hideCamera();
	}
	isMediaTypeSupported (source, type) {
		return this._object.isMediaTypeSupported(source, type);
	}
	openMusicLibrary (options) {
		return this._object.openMusicLibrary(options);
	}
	openPhotoGallery (options) {
		return this._object.openPhotoGallery(options);
	}
	saveToPhotoGallery (media, callbacks) {
		media = normalize(media);
		callbacks = normalize(callbacks);
		return this._object.saveToPhotoGallery(media, callbacks);
	}
	showCamera (options) {
		return this._object.showCamera(options);
	}
	startMicrophoneMonitor () {
		return this._object.startMicrophoneMonitor();
	}
	stopMicrophoneMonitor () {
		return this._object.stopMicrophoneMonitor();
	}
	takePicture () {
		return this._object.takePicture();
	}
	startVideoCapture () {
		return this._object.startVideoCapture();
	}
	stopVideoCapture () {
		return this._object.stopVideoCapture();
	}
	takeScreenshot (callback) {
		if (!callback) {
			return new Promise(resolve => this._object.takeScreenshot(resolve));
		}
		return this._object.takeScreenshot(callback);
	}
	vibrate (pattern) {
		return this._object.vibrate(pattern);
	}
	requestAuthorization (callback) {
		if (!callback) {
			return new Promise(resolve => this._object.requestAuthorization(resolve));
		}
		return this._object.requestAuthorization(callback);
	}
	requestAudioRecorderPermissions (callback) {
		if (!callback) {
			return new Promise(resolve => this._object.requestAudioRecorderPermissions(resolve));
		}
		return this._object.requestAudioRecorderPermissions(callback);
	}
	hasCameraPermissions () {
		return this._object.hasCameraPermissions();
	}
	requestCameraPermissions (callback) {
		if (!callback) {
			return new Promise(resolve => this._object.requestCameraPermissions(resolve));
		}
		return this._object.requestCameraPermissions(callback);
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
	getQUALITY_640x480 () {
		return this._object.getQUALITY_640x480();
	}
	getQUALITY_IFRAME_1280x720 () {
		return this._object.getQUALITY_IFRAME_1280x720();
	}
	getQUALITY_IFRAME_960x540 () {
		return this._object.getQUALITY_IFRAME_960x540();
	}
	getAudioLineType () {
		return this._object.getAudioLineType();
	}
	getAudioSessionMode () {
		return this._object.getAudioSessionMode();
	}
	setAudioSessionMode (audioSessionMode) {
		return this._object.setAudioSessionMode(audioSessionMode);
	}
	getCameraAuthorizationStatus () {
		return this._object.getCameraAuthorizationStatus();
	}
	getCameraAuthorization () {
		return this._object.getCameraAuthorization();
	}
	getAppMusicPlayer () {
		return new MusicPlayer(this._object.getAppMusicPlayer());
	}
	getAudioPlaying () {
		return this._object.getAudioPlaying();
	}
	getAudioSessionCategory () {
		return this._object.getAudioSessionCategory();
	}
	setAudioSessionCategory (audioSessionCategory) {
		return this._object.setAudioSessionCategory(audioSessionCategory);
	}
	getAvailableCameras () {
		return this._object.getAvailableCameras();
	}
	getAvailableCameraMediaTypes () {
		return this._object.getAvailableCameraMediaTypes();
	}
	setAvailableCameraMediaTypes (availableCameraMediaTypes) {
		return this._object.setAvailableCameraMediaTypes(availableCameraMediaTypes);
	}
	getAvailablePhotoGalleryMediaTypes () {
		return this._object.getAvailablePhotoGalleryMediaTypes();
	}
	setAvailablePhotoGalleryMediaTypes (availablePhotoGalleryMediaTypes) {
		return this._object.setAvailablePhotoGalleryMediaTypes(availablePhotoGalleryMediaTypes);
	}
	getAvailablePhotoMediaTypes () {
		return this._object.getAvailablePhotoMediaTypes();
	}
	setAvailablePhotoMediaTypes (availablePhotoMediaTypes) {
		return this._object.setAvailablePhotoMediaTypes(availablePhotoMediaTypes);
	}
	getAverageMicrophonePower () {
		return this._object.getAverageMicrophonePower();
	}
	setAverageMicrophonePower (averageMicrophonePower) {
		return this._object.setAverageMicrophonePower(averageMicrophonePower);
	}
	getCameraFlashMode () {
		return this._object.getCameraFlashMode();
	}
	setCameraFlashMode (cameraFlashMode) {
		return this._object.setCameraFlashMode(cameraFlashMode);
	}
	getCanRecord () {
		return this._object.getCanRecord();
	}
	getCurrentRoute () {
		return this._object.getCurrentRoute();
	}
	getIsCameraSupported () {
		return this._object.getIsCameraSupported();
	}
	getPeakMicrophonePower () {
		return this._object.getPeakMicrophonePower();
	}
	getSystemMusicPlayer () {
		return new MusicPlayer(this._object.getSystemMusicPlayer());
	}
	getVolume () {
		return this._object.getVolume();
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
	static hideMusicLibrary () {
		return this._object.hideMusicLibrary();
	}
	static previewImage (options) {
		return this._object.previewImage(options);
	}
	static setOverrideAudioRoute (route) {
		return this._object.setOverrideAudioRoute(route);
	}
	static hasMusicLibraryPermissions () {
		return this._object.hasMusicLibraryPermissions();
	}
	static requestMusicLibraryPermissions (callback) {
		if (!callback) {
			return new Promise(resolve => this._object.requestMusicLibraryPermissions(resolve));
		}
		return this._object.requestMusicLibraryPermissions(callback);
	}
	static queryMusicLibrary (query) {
		return this._object.queryMusicLibrary(query);
	}
	static switchCamera (camera) {
		return this._object.switchCamera(camera);
	}
	static hasPhotoGalleryPermissions () {
		return this._object.hasPhotoGalleryPermissions();
	}
	static requestPhotoGalleryPermissions (callback) {
		if (!callback) {
			return new Promise(resolve => this._object.requestPhotoGalleryPermissions(resolve));
		}
		return this._object.requestPhotoGalleryPermissions(callback);
	}
	static requestCameraAccess (callback) {
		if (!callback) {
			return new Promise(resolve => this._object.requestCameraAccess(resolve));
		}
		return this._object.requestCameraAccess(callback);
	}
	static hasAudioPermissions () {
		return this._object.hasAudioPermissions();
	}
	static hasAudioRecorderPermissions () {
		return this._object.hasAudioRecorderPermissions();
	}
	static requestAudioPermissions (callback) {
		if (!callback) {
			return new Promise(resolve => this._object.requestAudioPermissions(resolve));
		}
		return this._object.requestAudioPermissions(callback);
	}
	static beep () {
		return this._object.beep();
	}
	static hideCamera () {
		return this._object.hideCamera();
	}
	static isMediaTypeSupported (source, type) {
		return this._object.isMediaTypeSupported(source, type);
	}
	static openMusicLibrary (options) {
		return this._object.openMusicLibrary(options);
	}
	static openPhotoGallery (options) {
		return this._object.openPhotoGallery(options);
	}
	static saveToPhotoGallery (media, callbacks) {
		media = normalize(media);
		callbacks = normalize(callbacks);
		return this._object.saveToPhotoGallery(media, callbacks);
	}
	static showCamera (options) {
		return this._object.showCamera(options);
	}
	static startMicrophoneMonitor () {
		return this._object.startMicrophoneMonitor();
	}
	static stopMicrophoneMonitor () {
		return this._object.stopMicrophoneMonitor();
	}
	static takePicture () {
		return this._object.takePicture();
	}
	static startVideoCapture () {
		return this._object.startVideoCapture();
	}
	static stopVideoCapture () {
		return this._object.stopVideoCapture();
	}
	static takeScreenshot (callback) {
		if (!callback) {
			return new Promise(resolve => this._object.takeScreenshot(resolve));
		}
		return this._object.takeScreenshot(callback);
	}
	static vibrate (pattern) {
		return this._object.vibrate(pattern);
	}
	static requestAuthorization (callback) {
		if (!callback) {
			return new Promise(resolve => this._object.requestAuthorization(resolve));
		}
		return this._object.requestAuthorization(callback);
	}
	static requestAudioRecorderPermissions (callback) {
		if (!callback) {
			return new Promise(resolve => this._object.requestAudioRecorderPermissions(resolve));
		}
		return this._object.requestAudioRecorderPermissions(callback);
	}
	static hasCameraPermissions () {
		return this._object.hasCameraPermissions();
	}
	static requestCameraPermissions (callback) {
		if (!callback) {
			return new Promise(resolve => this._object.requestCameraPermissions(resolve));
		}
		return this._object.requestCameraPermissions(callback);
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
	static getQUALITY_640x480 () {
		return this._object.getQUALITY_640x480();
	}
	static getQUALITY_IFRAME_1280x720 () {
		return this._object.getQUALITY_IFRAME_1280x720();
	}
	static getQUALITY_IFRAME_960x540 () {
		return this._object.getQUALITY_IFRAME_960x540();
	}
	static getAudioLineType () {
		return this._object.getAudioLineType();
	}
	static getAudioSessionMode () {
		return this._object.getAudioSessionMode();
	}
	static setAudioSessionMode (audioSessionMode) {
		return this._object.setAudioSessionMode(audioSessionMode);
	}
	static getCameraAuthorizationStatus () {
		return this._object.getCameraAuthorizationStatus();
	}
	static getCameraAuthorization () {
		return this._object.getCameraAuthorization();
	}
	static getAppMusicPlayer () {
		return new MusicPlayer(this._object.getAppMusicPlayer());
	}
	static getAudioPlaying () {
		return this._object.getAudioPlaying();
	}
	static getAudioSessionCategory () {
		return this._object.getAudioSessionCategory();
	}
	static setAudioSessionCategory (audioSessionCategory) {
		return this._object.setAudioSessionCategory(audioSessionCategory);
	}
	static getAvailableCameras () {
		return this._object.getAvailableCameras();
	}
	static getAvailableCameraMediaTypes () {
		return this._object.getAvailableCameraMediaTypes();
	}
	static setAvailableCameraMediaTypes (availableCameraMediaTypes) {
		return this._object.setAvailableCameraMediaTypes(availableCameraMediaTypes);
	}
	static getAvailablePhotoGalleryMediaTypes () {
		return this._object.getAvailablePhotoGalleryMediaTypes();
	}
	static setAvailablePhotoGalleryMediaTypes (availablePhotoGalleryMediaTypes) {
		return this._object.setAvailablePhotoGalleryMediaTypes(availablePhotoGalleryMediaTypes);
	}
	static getAvailablePhotoMediaTypes () {
		return this._object.getAvailablePhotoMediaTypes();
	}
	static setAvailablePhotoMediaTypes (availablePhotoMediaTypes) {
		return this._object.setAvailablePhotoMediaTypes(availablePhotoMediaTypes);
	}
	static getAverageMicrophonePower () {
		return this._object.getAverageMicrophonePower();
	}
	static setAverageMicrophonePower (averageMicrophonePower) {
		return this._object.setAverageMicrophonePower(averageMicrophonePower);
	}
	static getCameraFlashMode () {
		return this._object.getCameraFlashMode();
	}
	static setCameraFlashMode (cameraFlashMode) {
		return this._object.setCameraFlashMode(cameraFlashMode);
	}
	static getCanRecord () {
		return this._object.getCanRecord();
	}
	static getCurrentRoute () {
		return this._object.getCurrentRoute();
	}
	static getIsCameraSupported () {
		return this._object.getIsCameraSupported();
	}
	static getPeakMicrophonePower () {
		return this._object.getPeakMicrophonePower();
	}
	static getSystemMusicPlayer () {
		return new MusicPlayer(this._object.getSystemMusicPlayer());
	}
	static getVolume () {
		return this._object.getVolume();
	}

	// modules
	static get AudioPlayer () {
		return AudioPlayer;
	}
	static get AudioRecorder () {
		return AudioRecorder;
	}
	static get Sound () {
		return Sound;
	}
	static get SystemAlert () {
		return SystemAlert;
	}
	static get VideoPlayer () {
		return VideoPlayer;
	}
};
Object.freeze(Media);

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