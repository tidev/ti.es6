import { default as Blob } from './../Blob';

export default class Item {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.Media.Item')) {
			this._object = object;
		} else {
			this._object = undefined;
		}
	}

	// constants
	static get apiName () {
		return Titanium.Media.Item.apiName;
	}
	static get albumArtist () {
		return Titanium.Media.Item.albumArtist;
	}
	static get albumArtistPersistentID () {
		return Titanium.Media.Item.albumArtistPersistentID;
	}
	static get albumPersistentID () {
		return Titanium.Media.Item.albumPersistentID;
	}
	static get albumTitle () {
		return Titanium.Media.Item.albumTitle;
	}
	static get albumTrackCount () {
		return Titanium.Media.Item.albumTrackCount;
	}
	static get albumTrackNumber () {
		return Titanium.Media.Item.albumTrackNumber;
	}
	static get artist () {
		return Titanium.Media.Item.artist;
	}
	static get artwork () {
		return new Blob(Titanium.Media.Item.artwork);
	}
	static get assetURL () {
		return Titanium.Media.Item.assetURL;
	}
	static get beatsPerMinute () {
		return Titanium.Media.Item.beatsPerMinute;
	}
	static get bookmarkTime () {
		return Titanium.Media.Item.bookmarkTime;
	}
	static get comments () {
		return Titanium.Media.Item.comments;
	}
	static get composer () {
		return Titanium.Media.Item.composer;
	}
	static get dateAdded () {
		return Titanium.Media.Item.dateAdded;
	}
	static get discCount () {
		return Titanium.Media.Item.discCount;
	}
	static get discNumber () {
		return Titanium.Media.Item.discNumber;
	}
	static get genre () {
		return Titanium.Media.Item.genre;
	}
	static get genrePersistentID () {
		return Titanium.Media.Item.genrePersistentID;
	}
	static get hasProtectedAsset () {
		return Titanium.Media.Item.hasProtectedAsset;
	}
	static get isCloudItem () {
		return Titanium.Media.Item.isCloudItem;
	}
	static get isCompilation () {
		return Titanium.Media.Item.isCompilation;
	}
	static get isExplicit () {
		return Titanium.Media.Item.isExplicit;
	}
	static get lastPlayedDate () {
		return Titanium.Media.Item.lastPlayedDate;
	}
	static get lyrics () {
		return Titanium.Media.Item.lyrics;
	}
	static get mediaType () {
		return Titanium.Media.Item.mediaType;
	}
	static get persistentID () {
		return Titanium.Media.Item.persistentID;
	}
	static get playCount () {
		return Titanium.Media.Item.playCount;
	}
	static get playbackDuration () {
		return Titanium.Media.Item.playbackDuration;
	}
	static get playbackStoreID () {
		return Titanium.Media.Item.playbackStoreID;
	}
	static get podcastTitle () {
		return Titanium.Media.Item.podcastTitle;
	}
	static get podcastPersistentID () {
		return Titanium.Media.Item.podcastPersistentID;
	}
	static get rating () {
		return Titanium.Media.Item.rating;
	}
	static get releaseDate () {
		return Titanium.Media.Item.releaseDate;
	}
	static get skipCount () {
		return Titanium.Media.Item.skipCount;
	}
	static get title () {
		return Titanium.Media.Item.title;
	}
	static get userGrouping () {
		return Titanium.Media.Item.userGrouping;
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
	get albumArtist () {
		return this._object.albumArtist;
	}
	get albumArtistPersistentID () {
		return this._object.albumArtistPersistentID;
	}
	get albumPersistentID () {
		return this._object.albumPersistentID;
	}
	get albumTitle () {
		return this._object.albumTitle;
	}
	get albumTrackCount () {
		return this._object.albumTrackCount;
	}
	get albumTrackNumber () {
		return this._object.albumTrackNumber;
	}
	get artist () {
		return this._object.artist;
	}
	get artwork () {
		return new Blob(this._object.artwork);
	}
	get assetURL () {
		return this._object.assetURL;
	}
	get beatsPerMinute () {
		return this._object.beatsPerMinute;
	}
	get bookmarkTime () {
		return this._object.bookmarkTime;
	}
	get comments () {
		return this._object.comments;
	}
	get composer () {
		return this._object.composer;
	}
	get dateAdded () {
		return this._object.dateAdded;
	}
	get discCount () {
		return this._object.discCount;
	}
	get discNumber () {
		return this._object.discNumber;
	}
	get genre () {
		return this._object.genre;
	}
	get genrePersistentID () {
		return this._object.genrePersistentID;
	}
	get hasProtectedAsset () {
		return this._object.hasProtectedAsset;
	}
	get isCloudItem () {
		return this._object.isCloudItem;
	}
	get isCompilation () {
		return this._object.isCompilation;
	}
	get isExplicit () {
		return this._object.isExplicit;
	}
	get lastPlayedDate () {
		return this._object.lastPlayedDate;
	}
	get lyrics () {
		return this._object.lyrics;
	}
	get mediaType () {
		return this._object.mediaType;
	}
	get persistentID () {
		return this._object.persistentID;
	}
	get playCount () {
		return this._object.playCount;
	}
	get playbackDuration () {
		return this._object.playbackDuration;
	}
	get playbackStoreID () {
		return this._object.playbackStoreID;
	}
	get podcastTitle () {
		return this._object.podcastTitle;
	}
	get podcastPersistentID () {
		return this._object.podcastPersistentID;
	}
	get rating () {
		return this._object.rating;
	}
	get releaseDate () {
		return this._object.releaseDate;
	}
	get skipCount () {
		return this._object.skipCount;
	}
	get title () {
		return this._object.title;
	}
	get userGrouping () {
		return this._object.userGrouping;
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
	getAlbumArtist () {
		return this._object.getAlbumArtist();
	}
	getAlbumArtistPersistentID () {
		return this._object.getAlbumArtistPersistentID();
	}
	getAlbumPersistentID () {
		return this._object.getAlbumPersistentID();
	}
	getAlbumTitle () {
		return this._object.getAlbumTitle();
	}
	getAlbumTrackCount () {
		return this._object.getAlbumTrackCount();
	}
	getAlbumTrackNumber () {
		return this._object.getAlbumTrackNumber();
	}
	getArtist () {
		return this._object.getArtist();
	}
	getArtwork () {
		return new Blob(this._object.getArtwork());
	}
	getAssetURL () {
		return this._object.getAssetURL();
	}
	getBeatsPerMinute () {
		return this._object.getBeatsPerMinute();
	}
	getBookmarkTime () {
		return this._object.getBookmarkTime();
	}
	getComments () {
		return this._object.getComments();
	}
	getComposer () {
		return this._object.getComposer();
	}
	getDateAdded () {
		return this._object.getDateAdded();
	}
	getDiscCount () {
		return this._object.getDiscCount();
	}
	getDiscNumber () {
		return this._object.getDiscNumber();
	}
	getGenre () {
		return this._object.getGenre();
	}
	getGenrePersistentID () {
		return this._object.getGenrePersistentID();
	}
	getHasProtectedAsset () {
		return this._object.getHasProtectedAsset();
	}
	getIsCloudItem () {
		return this._object.getIsCloudItem();
	}
	getIsCompilation () {
		return this._object.getIsCompilation();
	}
	getIsExplicit () {
		return this._object.getIsExplicit();
	}
	getLastPlayedDate () {
		return this._object.getLastPlayedDate();
	}
	getLyrics () {
		return this._object.getLyrics();
	}
	getMediaType () {
		return this._object.getMediaType();
	}
	getPersistentID () {
		return this._object.getPersistentID();
	}
	getPlayCount () {
		return this._object.getPlayCount();
	}
	getPlaybackDuration () {
		return this._object.getPlaybackDuration();
	}
	getPlaybackStoreID () {
		return this._object.getPlaybackStoreID();
	}
	getPodcastTitle () {
		return this._object.getPodcastTitle();
	}
	getPodcastPersistentID () {
		return this._object.getPodcastPersistentID();
	}
	getRating () {
		return this._object.getRating();
	}
	getReleaseDate () {
		return this._object.getReleaseDate();
	}
	getSkipCount () {
		return this._object.getSkipCount();
	}
	getTitle () {
		return this._object.getTitle();
	}
	getUserGrouping () {
		return this._object.getUserGrouping();
	}

	// modules
};
Object.freeze(Item);

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