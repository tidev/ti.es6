export default class SearchableItemAttributeSet {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.App.iOS.SearchableItemAttributeSet')) {
			this._object = object;
		} else {
			this._object = Titanium.App.iOS.createSearchableItemAttributeSet(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.App.iOS.SearchableItemAttributeSet.apiName;
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
	get itemContentType () {
		return this._object.itemContentType;
	}
	set itemContentType (value) {
		this._object.itemContentType = value;
	}
	get displayName () {
		return this._object.displayName;
	}
	set displayName (value) {
		this._object.displayName = value;
	}
	get alternateNames () {
		return this._object.alternateNames;
	}
	set alternateNames (value) {
		this._object.alternateNames = value;
	}
	get path () {
		return this._object.path;
	}
	set path (value) {
		this._object.path = value;
	}
	get contentURL () {
		return this._object.contentURL;
	}
	set contentURL (value) {
		this._object.contentURL = value;
	}
	get thumbnailURL () {
		return this._object.thumbnailURL;
	}
	set thumbnailURL (value) {
		this._object.thumbnailURL = value;
	}
	get thumbnailData () {
		return this._object.thumbnailData;
	}
	set thumbnailData (value) {
		this._object.thumbnailData = value;
	}
	get relatedUniqueIdentifier () {
		return this._object.relatedUniqueIdentifier;
	}
	set relatedUniqueIdentifier (value) {
		this._object.relatedUniqueIdentifier = value;
	}
	get metadataModificationDate () {
		return this._object.metadataModificationDate;
	}
	set metadataModificationDate (value) {
		this._object.metadataModificationDate = value;
	}
	get contentType () {
		return this._object.contentType;
	}
	set contentType (value) {
		this._object.contentType = value;
	}
	get contentTypeTree () {
		return this._object.contentTypeTree;
	}
	set contentTypeTree (value) {
		this._object.contentTypeTree = value;
	}
	get keywords () {
		return this._object.keywords;
	}
	set keywords (value) {
		this._object.keywords = value;
	}
	get title () {
		return this._object.title;
	}
	set title (value) {
		this._object.title = value;
	}
	get subject () {
		return this._object.subject;
	}
	set subject (value) {
		this._object.subject = value;
	}
	get theme () {
		return this._object.theme;
	}
	set theme (value) {
		this._object.theme = value;
	}
	get contentDescription () {
		return this._object.contentDescription;
	}
	set contentDescription (value) {
		this._object.contentDescription = value;
	}
	get identifier () {
		return this._object.identifier;
	}
	set identifier (value) {
		this._object.identifier = value;
	}
	get audiences () {
		return this._object.audiences;
	}
	set audiences (value) {
		this._object.audiences = value;
	}
	get fileSize () {
		return this._object.fileSize;
	}
	set fileSize (value) {
		this._object.fileSize = value;
	}
	get pageCount () {
		return this._object.pageCount;
	}
	set pageCount (value) {
		this._object.pageCount = value;
	}
	get pageWidth () {
		return this._object.pageWidth;
	}
	set pageWidth (value) {
		this._object.pageWidth = value;
	}
	get pageHeight () {
		return this._object.pageHeight;
	}
	set pageHeight (value) {
		this._object.pageHeight = value;
	}
	get securityMethod () {
		return this._object.securityMethod;
	}
	set securityMethod (value) {
		this._object.securityMethod = value;
	}
	get creator () {
		return this._object.creator;
	}
	set creator (value) {
		this._object.creator = value;
	}
	get encodingApplications () {
		return this._object.encodingApplications;
	}
	set encodingApplications (value) {
		this._object.encodingApplications = value;
	}
	get kind () {
		return this._object.kind;
	}
	set kind (value) {
		this._object.kind = value;
	}
	get fontNames () {
		return this._object.fontNames;
	}
	set fontNames (value) {
		this._object.fontNames = value;
	}
	get audioSampleRate () {
		return this._object.audioSampleRate;
	}
	set audioSampleRate (value) {
		this._object.audioSampleRate = value;
	}
	get audioChannelCount () {
		return this._object.audioChannelCount;
	}
	set audioChannelCount (value) {
		this._object.audioChannelCount = value;
	}
	get tempo () {
		return this._object.tempo;
	}
	set tempo (value) {
		this._object.tempo = value;
	}
	get keySignature () {
		return this._object.keySignature;
	}
	set keySignature (value) {
		this._object.keySignature = value;
	}
	get timeSignature () {
		return this._object.timeSignature;
	}
	set timeSignature (value) {
		this._object.timeSignature = value;
	}
	get audioEncodingApplication () {
		return this._object.audioEncodingApplication;
	}
	set audioEncodingApplication (value) {
		this._object.audioEncodingApplication = value;
	}
	get composer () {
		return this._object.composer;
	}
	set composer (value) {
		this._object.composer = value;
	}
	get lyricist () {
		return this._object.lyricist;
	}
	set lyricist (value) {
		this._object.lyricist = value;
	}
	get album () {
		return this._object.album;
	}
	set album (value) {
		this._object.album = value;
	}
	get artist () {
		return this._object.artist;
	}
	set artist (value) {
		this._object.artist = value;
	}
	get audioTrackNumber () {
		return this._object.audioTrackNumber;
	}
	set audioTrackNumber (value) {
		this._object.audioTrackNumber = value;
	}
	get recordingDate () {
		return this._object.recordingDate;
	}
	set recordingDate (value) {
		this._object.recordingDate = value;
	}
	get musicalGenre () {
		return this._object.musicalGenre;
	}
	set musicalGenre (value) {
		this._object.musicalGenre = value;
	}
	get generalMIDISequence () {
		return this._object.generalMIDISequence;
	}
	set generalMIDISequence (value) {
		this._object.generalMIDISequence = value;
	}
	get musicalInstrumentCategory () {
		return this._object.musicalInstrumentCategory;
	}
	set musicalInstrumentCategory (value) {
		this._object.musicalInstrumentCategory = value;
	}
	get musicalInstrumentName () {
		return this._object.musicalInstrumentName;
	}
	set musicalInstrumentName (value) {
		this._object.musicalInstrumentName = value;
	}
	get supportsPhoneCall () {
		return this._object.supportsPhoneCall;
	}
	set supportsPhoneCall (value) {
		this._object.supportsPhoneCall = value;
	}
	get supportsNavigation () {
		return this._object.supportsNavigation;
	}
	set supportsNavigation (value) {
		this._object.supportsNavigation = value;
	}
	get containerTitle () {
		return this._object.containerTitle;
	}
	set containerTitle (value) {
		this._object.containerTitle = value;
	}
	get containerDisplayName () {
		return this._object.containerDisplayName;
	}
	set containerDisplayName (value) {
		this._object.containerDisplayName = value;
	}
	get containerIdentifier () {
		return this._object.containerIdentifier;
	}
	set containerIdentifier (value) {
		this._object.containerIdentifier = value;
	}
	get containerOrder () {
		return this._object.containerOrder;
	}
	set containerOrder (value) {
		this._object.containerOrder = value;
	}
	get editors () {
		return this._object.editors;
	}
	set editors (value) {
		this._object.editors = value;
	}
	get participants () {
		return this._object.participants;
	}
	set participants (value) {
		this._object.participants = value;
	}
	get projects () {
		return this._object.projects;
	}
	set projects (value) {
		this._object.projects = value;
	}
	get downloadedDate () {
		return this._object.downloadedDate;
	}
	set downloadedDate (value) {
		this._object.downloadedDate = value;
	}
	get lastUsedDate () {
		return this._object.lastUsedDate;
	}
	set lastUsedDate (value) {
		this._object.lastUsedDate = value;
	}
	get contentCreationDate () {
		return this._object.contentCreationDate;
	}
	set contentCreationDate (value) {
		this._object.contentCreationDate = value;
	}
	get contentModificationDate () {
		return this._object.contentModificationDate;
	}
	set contentModificationDate (value) {
		this._object.contentModificationDate = value;
	}
	get addedDate () {
		return this._object.addedDate;
	}
	set addedDate (value) {
		this._object.addedDate = value;
	}
	get contentSources () {
		return this._object.contentSources;
	}
	set contentSources (value) {
		this._object.contentSources = value;
	}
	get comment () {
		return this._object.comment;
	}
	set comment (value) {
		this._object.comment = value;
	}
	get copyright () {
		return this._object.copyright;
	}
	set copyright (value) {
		this._object.copyright = value;
	}
	get duration () {
		return this._object.duration;
	}
	set duration (value) {
		this._object.duration = value;
	}
	get contactKeywords () {
		return this._object.contactKeywords;
	}
	set contactKeywords (value) {
		this._object.contactKeywords = value;
	}
	get codecs () {
		return this._object.codecs;
	}
	set codecs (value) {
		this._object.codecs = value;
	}
	get organizations () {
		return this._object.organizations;
	}
	set organizations (value) {
		this._object.organizations = value;
	}
	get mediaTypes () {
		return this._object.mediaTypes;
	}
	set mediaTypes (value) {
		this._object.mediaTypes = value;
	}
	get version () {
		return this._object.version;
	}
	set version (value) {
		this._object.version = value;
	}
	get role () {
		return this._object.role;
	}
	set role (value) {
		this._object.role = value;
	}
	get streamable () {
		return this._object.streamable;
	}
	set streamable (value) {
		this._object.streamable = value;
	}
	get totalBitRate () {
		return this._object.totalBitRate;
	}
	set totalBitRate (value) {
		this._object.totalBitRate = value;
	}
	get videoBitRate () {
		return this._object.videoBitRate;
	}
	set videoBitRate (value) {
		this._object.videoBitRate = value;
	}
	get audioBitRate () {
		return this._object.audioBitRate;
	}
	set audioBitRate (value) {
		this._object.audioBitRate = value;
	}
	get deliveryType () {
		return this._object.deliveryType;
	}
	set deliveryType (value) {
		this._object.deliveryType = value;
	}
	get languages () {
		return this._object.languages;
	}
	set languages (value) {
		this._object.languages = value;
	}
	get rights () {
		return this._object.rights;
	}
	set rights (value) {
		this._object.rights = value;
	}
	get publishers () {
		return this._object.publishers;
	}
	set publishers (value) {
		this._object.publishers = value;
	}
	get contributors () {
		return this._object.contributors;
	}
	set contributors (value) {
		this._object.contributors = value;
	}
	get coverage () {
		return this._object.coverage;
	}
	set coverage (value) {
		this._object.coverage = value;
	}
	get rating () {
		return this._object.rating;
	}
	set rating (value) {
		this._object.rating = value;
	}
	get ratingDescription () {
		return this._object.ratingDescription;
	}
	set ratingDescription (value) {
		this._object.ratingDescription = value;
	}
	get playCount () {
		return this._object.playCount;
	}
	set playCount (value) {
		this._object.playCount = value;
	}
	get information () {
		return this._object.information;
	}
	set information (value) {
		this._object.information = value;
	}
	get director () {
		return this._object.director;
	}
	set director (value) {
		this._object.director = value;
	}
	get producer () {
		return this._object.producer;
	}
	set producer (value) {
		this._object.producer = value;
	}
	get genre () {
		return this._object.genre;
	}
	set genre (value) {
		this._object.genre = value;
	}
	get performers () {
		return this._object.performers;
	}
	set performers (value) {
		this._object.performers = value;
	}
	get originalFormat () {
		return this._object.originalFormat;
	}
	set originalFormat (value) {
		this._object.originalFormat = value;
	}
	get originalSource () {
		return this._object.originalSource;
	}
	set originalSource (value) {
		this._object.originalSource = value;
	}
	get local () {
		return this._object.local;
	}
	set local (value) {
		this._object.local = value;
	}
	get contentRating () {
		return this._object.contentRating;
	}
	set contentRating (value) {
		this._object.contentRating = value;
	}
	get url () {
		return this._object.url;
	}
	set url (value) {
		this._object.url = value;
	}
	get fullyFormattedAddress () {
		return this._object.fullyFormattedAddress;
	}
	set fullyFormattedAddress (value) {
		this._object.fullyFormattedAddress = value;
	}
	get subThoroughfare () {
		return this._object.subThoroughfare;
	}
	set subThoroughfare (value) {
		this._object.subThoroughfare = value;
	}
	get thoroughfare () {
		return this._object.thoroughfare;
	}
	set thoroughfare (value) {
		this._object.thoroughfare = value;
	}
	get postalCode () {
		return this._object.postalCode;
	}
	set postalCode (value) {
		this._object.postalCode = value;
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
	getDisplayName () {
		return this._object.getDisplayName();
	}
	setDisplayName (displayName) {
		return this._object.setDisplayName(displayName);
	}
	getAlternateNames () {
		return this._object.getAlternateNames();
	}
	setAlternateNames (alternateNames) {
		return this._object.setAlternateNames(alternateNames);
	}
	getPath () {
		return this._object.getPath();
	}
	setPath (path) {
		return this._object.setPath(path);
	}
	getContentURL () {
		return this._object.getContentURL();
	}
	setContentURL (contentURL) {
		return this._object.setContentURL(contentURL);
	}
	getThumbnailURL () {
		return this._object.getThumbnailURL();
	}
	setThumbnailURL (thumbnailURL) {
		return this._object.setThumbnailURL(thumbnailURL);
	}
	getThumbnailData () {
		return this._object.getThumbnailData();
	}
	setThumbnailData (thumbnailData) {
		return this._object.setThumbnailData(thumbnailData);
	}
	getRelatedUniqueIdentifier () {
		return this._object.getRelatedUniqueIdentifier();
	}
	setRelatedUniqueIdentifier (relatedUniqueIdentifier) {
		return this._object.setRelatedUniqueIdentifier(relatedUniqueIdentifier);
	}
	getMetadataModificationDate () {
		return this._object.getMetadataModificationDate();
	}
	setMetadataModificationDate (metadataModificationDate) {
		return this._object.setMetadataModificationDate(metadataModificationDate);
	}
	getContentType () {
		return this._object.getContentType();
	}
	setContentType (contentType) {
		return this._object.setContentType(contentType);
	}
	getContentTypeTree () {
		return this._object.getContentTypeTree();
	}
	setContentTypeTree (contentTypeTree) {
		return this._object.setContentTypeTree(contentTypeTree);
	}
	getKeywords () {
		return this._object.getKeywords();
	}
	setKeywords (keywords) {
		return this._object.setKeywords(keywords);
	}
	getTitle () {
		return this._object.getTitle();
	}
	setTitle (title) {
		return this._object.setTitle(title);
	}
	getSubject () {
		return this._object.getSubject();
	}
	setSubject (subject) {
		return this._object.setSubject(subject);
	}
	getTheme () {
		return this._object.getTheme();
	}
	setTheme (theme) {
		return this._object.setTheme(theme);
	}
	getContentDescription () {
		return this._object.getContentDescription();
	}
	setContentDescription (contentDescription) {
		return this._object.setContentDescription(contentDescription);
	}
	getIdentifier () {
		return this._object.getIdentifier();
	}
	setIdentifier (identifier) {
		return this._object.setIdentifier(identifier);
	}
	getAudiences () {
		return this._object.getAudiences();
	}
	setAudiences (audiences) {
		return this._object.setAudiences(audiences);
	}
	getFileSize () {
		return this._object.getFileSize();
	}
	setFileSize (fileSize) {
		return this._object.setFileSize(fileSize);
	}
	getPageCount () {
		return this._object.getPageCount();
	}
	setPageCount (pageCount) {
		return this._object.setPageCount(pageCount);
	}
	getPageWidth () {
		return this._object.getPageWidth();
	}
	setPageWidth (pageWidth) {
		return this._object.setPageWidth(pageWidth);
	}
	getPageHeight () {
		return this._object.getPageHeight();
	}
	setPageHeight (pageHeight) {
		return this._object.setPageHeight(pageHeight);
	}
	getSecurityMethod () {
		return this._object.getSecurityMethod();
	}
	setSecurityMethod (securityMethod) {
		return this._object.setSecurityMethod(securityMethod);
	}
	getCreator () {
		return this._object.getCreator();
	}
	setCreator (creator) {
		return this._object.setCreator(creator);
	}
	getEncodingApplications () {
		return this._object.getEncodingApplications();
	}
	setEncodingApplications (encodingApplications) {
		return this._object.setEncodingApplications(encodingApplications);
	}
	getKind () {
		return this._object.getKind();
	}
	setKind (kind) {
		return this._object.setKind(kind);
	}
	getFontNames () {
		return this._object.getFontNames();
	}
	setFontNames (fontNames) {
		return this._object.setFontNames(fontNames);
	}
	getAudioSampleRate () {
		return this._object.getAudioSampleRate();
	}
	setAudioSampleRate (audioSampleRate) {
		return this._object.setAudioSampleRate(audioSampleRate);
	}
	getAudioChannelCount () {
		return this._object.getAudioChannelCount();
	}
	setAudioChannelCount (audioChannelCount) {
		return this._object.setAudioChannelCount(audioChannelCount);
	}
	getTempo () {
		return this._object.getTempo();
	}
	setTempo (tempo) {
		return this._object.setTempo(tempo);
	}
	getKeySignature () {
		return this._object.getKeySignature();
	}
	setKeySignature (keySignature) {
		return this._object.setKeySignature(keySignature);
	}
	getTimeSignature () {
		return this._object.getTimeSignature();
	}
	setTimeSignature (timeSignature) {
		return this._object.setTimeSignature(timeSignature);
	}
	getAudioEncodingApplication () {
		return this._object.getAudioEncodingApplication();
	}
	setAudioEncodingApplication (audioEncodingApplication) {
		return this._object.setAudioEncodingApplication(audioEncodingApplication);
	}
	getComposer () {
		return this._object.getComposer();
	}
	setComposer (composer) {
		return this._object.setComposer(composer);
	}
	getLyricist () {
		return this._object.getLyricist();
	}
	setLyricist (lyricist) {
		return this._object.setLyricist(lyricist);
	}
	getAlbum () {
		return this._object.getAlbum();
	}
	setAlbum (album) {
		return this._object.setAlbum(album);
	}
	getArtist () {
		return this._object.getArtist();
	}
	setArtist (artist) {
		return this._object.setArtist(artist);
	}
	getAudioTrackNumber () {
		return this._object.getAudioTrackNumber();
	}
	setAudioTrackNumber (audioTrackNumber) {
		return this._object.setAudioTrackNumber(audioTrackNumber);
	}
	getRecordingDate () {
		return this._object.getRecordingDate();
	}
	setRecordingDate (recordingDate) {
		return this._object.setRecordingDate(recordingDate);
	}
	getMusicalGenre () {
		return this._object.getMusicalGenre();
	}
	setMusicalGenre (musicalGenre) {
		return this._object.setMusicalGenre(musicalGenre);
	}
	getGeneralMIDISequence () {
		return this._object.getGeneralMIDISequence();
	}
	setGeneralMIDISequence (generalMIDISequence) {
		return this._object.setGeneralMIDISequence(generalMIDISequence);
	}
	getMusicalInstrumentCategory () {
		return this._object.getMusicalInstrumentCategory();
	}
	setMusicalInstrumentCategory (musicalInstrumentCategory) {
		return this._object.setMusicalInstrumentCategory(musicalInstrumentCategory);
	}
	getMusicalInstrumentName () {
		return this._object.getMusicalInstrumentName();
	}
	setMusicalInstrumentName (musicalInstrumentName) {
		return this._object.setMusicalInstrumentName(musicalInstrumentName);
	}
	getSupportsPhoneCall () {
		return this._object.getSupportsPhoneCall();
	}
	setSupportsPhoneCall (supportsPhoneCall) {
		return this._object.setSupportsPhoneCall(supportsPhoneCall);
	}
	getSupportsNavigation () {
		return this._object.getSupportsNavigation();
	}
	setSupportsNavigation (supportsNavigation) {
		return this._object.setSupportsNavigation(supportsNavigation);
	}
	getContainerTitle () {
		return this._object.getContainerTitle();
	}
	setContainerTitle (containerTitle) {
		return this._object.setContainerTitle(containerTitle);
	}
	getContainerDisplayName () {
		return this._object.getContainerDisplayName();
	}
	setContainerDisplayName (containerDisplayName) {
		return this._object.setContainerDisplayName(containerDisplayName);
	}
	getContainerIdentifier () {
		return this._object.getContainerIdentifier();
	}
	setContainerIdentifier (containerIdentifier) {
		return this._object.setContainerIdentifier(containerIdentifier);
	}
	getContainerOrder () {
		return this._object.getContainerOrder();
	}
	setContainerOrder (containerOrder) {
		return this._object.setContainerOrder(containerOrder);
	}
	getEditors () {
		return this._object.getEditors();
	}
	setEditors (editors) {
		return this._object.setEditors(editors);
	}
	getParticipants () {
		return this._object.getParticipants();
	}
	setParticipants (participants) {
		return this._object.setParticipants(participants);
	}
	getProjects () {
		return this._object.getProjects();
	}
	setProjects (projects) {
		return this._object.setProjects(projects);
	}
	getDownloadedDate () {
		return this._object.getDownloadedDate();
	}
	setDownloadedDate (downloadedDate) {
		return this._object.setDownloadedDate(downloadedDate);
	}
	getLastUsedDate () {
		return this._object.getLastUsedDate();
	}
	setLastUsedDate (lastUsedDate) {
		return this._object.setLastUsedDate(lastUsedDate);
	}
	getContentCreationDate () {
		return this._object.getContentCreationDate();
	}
	setContentCreationDate (contentCreationDate) {
		return this._object.setContentCreationDate(contentCreationDate);
	}
	getContentModificationDate () {
		return this._object.getContentModificationDate();
	}
	setContentModificationDate (contentModificationDate) {
		return this._object.setContentModificationDate(contentModificationDate);
	}
	getAddedDate () {
		return this._object.getAddedDate();
	}
	setAddedDate (addedDate) {
		return this._object.setAddedDate(addedDate);
	}
	getContentSources () {
		return this._object.getContentSources();
	}
	setContentSources (contentSources) {
		return this._object.setContentSources(contentSources);
	}
	getComment () {
		return this._object.getComment();
	}
	setComment (comment) {
		return this._object.setComment(comment);
	}
	getCopyright () {
		return this._object.getCopyright();
	}
	setCopyright (copyright) {
		return this._object.setCopyright(copyright);
	}
	getDuration () {
		return this._object.getDuration();
	}
	setDuration (duration) {
		return this._object.setDuration(duration);
	}
	getContactKeywords () {
		return this._object.getContactKeywords();
	}
	setContactKeywords (contactKeywords) {
		return this._object.setContactKeywords(contactKeywords);
	}
	getCodecs () {
		return this._object.getCodecs();
	}
	setCodecs (codecs) {
		return this._object.setCodecs(codecs);
	}
	getOrganizations () {
		return this._object.getOrganizations();
	}
	setOrganizations (organizations) {
		return this._object.setOrganizations(organizations);
	}
	getMediaTypes () {
		return this._object.getMediaTypes();
	}
	setMediaTypes (mediaTypes) {
		return this._object.setMediaTypes(mediaTypes);
	}
	getVersion () {
		return this._object.getVersion();
	}
	setVersion (version) {
		return this._object.setVersion(version);
	}
	getRole () {
		return this._object.getRole();
	}
	setRole (role) {
		return this._object.setRole(role);
	}
	getStreamable () {
		return this._object.getStreamable();
	}
	setStreamable (streamable) {
		return this._object.setStreamable(streamable);
	}
	getTotalBitRate () {
		return this._object.getTotalBitRate();
	}
	setTotalBitRate (totalBitRate) {
		return this._object.setTotalBitRate(totalBitRate);
	}
	getVideoBitRate () {
		return this._object.getVideoBitRate();
	}
	setVideoBitRate (videoBitRate) {
		return this._object.setVideoBitRate(videoBitRate);
	}
	getAudioBitRate () {
		return this._object.getAudioBitRate();
	}
	setAudioBitRate (audioBitRate) {
		return this._object.setAudioBitRate(audioBitRate);
	}
	getDeliveryType () {
		return this._object.getDeliveryType();
	}
	setDeliveryType (deliveryType) {
		return this._object.setDeliveryType(deliveryType);
	}
	getLanguages () {
		return this._object.getLanguages();
	}
	setLanguages (languages) {
		return this._object.setLanguages(languages);
	}
	getRights () {
		return this._object.getRights();
	}
	setRights (rights) {
		return this._object.setRights(rights);
	}
	getPublishers () {
		return this._object.getPublishers();
	}
	setPublishers (publishers) {
		return this._object.setPublishers(publishers);
	}
	getContributors () {
		return this._object.getContributors();
	}
	setContributors (contributors) {
		return this._object.setContributors(contributors);
	}
	getCoverage () {
		return this._object.getCoverage();
	}
	setCoverage (coverage) {
		return this._object.setCoverage(coverage);
	}
	getRating () {
		return this._object.getRating();
	}
	setRating (rating) {
		return this._object.setRating(rating);
	}
	getRatingDescription () {
		return this._object.getRatingDescription();
	}
	setRatingDescription (ratingDescription) {
		return this._object.setRatingDescription(ratingDescription);
	}
	getPlayCount () {
		return this._object.getPlayCount();
	}
	setPlayCount (playCount) {
		return this._object.setPlayCount(playCount);
	}
	getInformation () {
		return this._object.getInformation();
	}
	setInformation (information) {
		return this._object.setInformation(information);
	}
	getDirector () {
		return this._object.getDirector();
	}
	setDirector (director) {
		return this._object.setDirector(director);
	}
	getProducer () {
		return this._object.getProducer();
	}
	setProducer (producer) {
		return this._object.setProducer(producer);
	}
	getGenre () {
		return this._object.getGenre();
	}
	setGenre (genre) {
		return this._object.setGenre(genre);
	}
	getPerformers () {
		return this._object.getPerformers();
	}
	setPerformers (performers) {
		return this._object.setPerformers(performers);
	}
	getOriginalFormat () {
		return this._object.getOriginalFormat();
	}
	setOriginalFormat (originalFormat) {
		return this._object.setOriginalFormat(originalFormat);
	}
	getOriginalSource () {
		return this._object.getOriginalSource();
	}
	setOriginalSource (originalSource) {
		return this._object.setOriginalSource(originalSource);
	}
	getLocal () {
		return this._object.getLocal();
	}
	setLocal (local) {
		return this._object.setLocal(local);
	}
	getContentRating () {
		return this._object.getContentRating();
	}
	setContentRating (contentRating) {
		return this._object.setContentRating(contentRating);
	}
	getUrl () {
		return this._object.getUrl();
	}
	setUrl (url) {
		return this._object.setUrl(url);
	}
	getFullyFormattedAddress () {
		return this._object.getFullyFormattedAddress();
	}
	setFullyFormattedAddress (fullyFormattedAddress) {
		return this._object.setFullyFormattedAddress(fullyFormattedAddress);
	}
	getSubThoroughfare () {
		return this._object.getSubThoroughfare();
	}
	setSubThoroughfare (subThoroughfare) {
		return this._object.setSubThoroughfare(subThoroughfare);
	}
	getThoroughfare () {
		return this._object.getThoroughfare();
	}
	setThoroughfare (thoroughfare) {
		return this._object.setThoroughfare(thoroughfare);
	}
	getPostalCode () {
		return this._object.getPostalCode();
	}
	setPostalCode (postalCode) {
		return this._object.setPostalCode(postalCode);
	}
};
Object.freeze(SearchableItemAttributeSet);

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