export enum Environment {
    HOME = 'home',
    COURSE = 'course',
    LIBRARY = 'library',
    DOWNLOADS = 'downloads',
    USER = 'user',
    SETTINGS = 'settings',
    ONBOARDING = 'onboarding',
    NOTIFICATION = 'notification'
}

export enum ErrorCode {
    ERR_DOWNLOAD_FAILED = 'ERR_DOWNLOAD_FAILED'
}

export enum ErrorType {
    SYSTEM = 'SYSTEM'
}

export enum ObjectType {
    NOTIFICATION = 'notification',
    USER = 'User',
    GROUP = 'Group',
    CONTENT = 'Content',
    QUESTION = 'Question',
    QR = 'Qr'
}
export enum Mode {
    PLAY = 'play'
}
export enum PageId {
    SPLASH_SCREEN = 'splash',
    LOGIN = 'login',
    LOGOUT = 'logout',
    SIGNUP = 'signup',
    ONBOARDING = 'onboarding',
    USER_TYPE_SELECTION = 'user-type-selection',
    PERMISSION = 'permission',
    HOME = 'home',
    COURSES = 'courses',
    LIBRARY = 'library',
    GROUPS = 'groups',
    PROFILE = 'profile',
    COURSE_PAGE_FILTER = 'course-page-filter',
    LIBRARY_PAGE_FILTER = 'library-page-filter',
    LIBRARY_SEARCH_FILTER = 'library-search-filter',
    COURSE_DETAIL = 'course-detail',
    COLLECTION_DETAIL = 'collection-detail',
    CURRICULUM_COURSE_DETAIL = 'curriculum-course-detail',
    CONTENT_DETAIL = 'content-detail',
    COURSE_BATCHES = 'course-batches',
    SHARE_CONTENT = 'share-content',
    FLAG_CONTENT = 'flag-content',
    CONTENT_RATING = 'content-rating',
    ANNOUNCEMENT_LIST = 'announcement-list',
    ANNOUNCEMENT_DETAIL = 'announcement-detail',
    SHARE_ANNOUCEMENT = 'share-announcement',
    QRCodeScanner = 'qr-code-scanner',
    SERVER_NOTIFICATION = 'server-notifiaction',
    LOCAL_NOTIFICATION = 'local-notifiaction',
    NOTIFICATION_LIST = 'notifiaction-list',
    SIGNIN_OVERLAY = 'signin-overlay',
    SETTINGS = 'settings',
    FAQ = 'faq',
    SETTINGS_LANGUAGE = 'settings-language',
    SETTINGS_DATASYNC = 'settings-datasync',
    SETTINGS_DEVICE_TAGS = 'settings-device-tags',
    SETTINGS_SUPPORTS = 'settings-supports',
    SETTINGS_ABOUT_US = 'settings-about-us',
    USERS_GROUPS = 'users-groups',
    CREATE_USER = 'create-profile',
    CREATE_GROUP = 'create-group',
    CREATE_GROUP_SYLLABUS_CLASS = 'create-group-syllabusclass',
    CREATE_GROUP_USER_SELECTION = 'create-group-userselection',
    GROUP_DETAIL = 'group-detail',
    GUEST_PROFILE = 'guest-profile',
    EDIT_USER = 'edit-user',
    EDIT_GROUP = 'edit-group',
    ADD_GROUP_SYLLABUS_CLASS = 'add-group-syllabusclass',
    ADD_GROUP_USER_SELECTION = 'add-group-userselection',
    REMOVE_USERS_FROM_GROUP = 'remove-users-from-group',
    SHARE_USER_GROUP = 'share-user-group',
    REPORTS_USER_GROUP = 'reports-users-group',
    REPORTS_ASSESMENT_CONTENT_LIST = 'assesment-content-list',
    REPORTS_USER_ASSESMENT_DETAILS = 'user-assesment-details',
    REPORTS_GROUP_ASSESMENT_DETAILS = 'group-assesment-details',
    ONBOARDING_LANGUAGE_SETTING = 'onboarding-language-setting',
    VIEW_MORE = 'view-more',
    DIAL_CODE_SCAN_RESULT = 'dial-code-scan-result',
    ONBOARDING_PROFILE_PREFERENCES = 'profile-settings',
    ONBOARDING_QR_SHOWCASE = 'onboarding-qr-showcase',
    SEARCH = 'search',
    DOWNLOAD_SPINE = 'download-spine',
    DIAL_NOT_LINKED = 'dial-not-linked',
    DIAL_LINKED_NO_CONTENT = 'dial-linked-but-no-content',
    TERMS_N_CONDITIONS = 'terms-n-conditions',
    TERMS_N_CONDITIONS_STATIC_PAGE = 'terms-n-conditions-static-page',
    DOWNLOADS = 'downloads',
    SINGLE_DELETE_CONFIRMATION_POPUP = 'single-delete-confirmation-popup',
    BULK_DELETE_POPUP = 'bulk-delete-popup',
    BULK_DELETE_CONFIRMATION_POPUP = 'bulk-delete-confirmation-popup',
    ACTIVE_DOWNLOADS = 'active-downloads',
    SINGLE_CANCEL_CONFIRMATION_POPUP = 'single-cancel-confirmation-popup',
    BULK_CANCEL_CONFIRMATION_POPUP = 'bulk-cancel-confirmation-popup',
    NOTIFICATION = 'notification',
    SPLASH = 'splash',
    TRANSFER_CONTENT_CONFIRMATION_POPUP = 'transfer-content-confirmation-popup',
    TRANSFERING_CONTENT_POPUP = 'transfering-content-popup',
    RETRY_CONTENT_TRANSFER_POPUP = 'retry-content-transfer-popup',
    SHOW_DUPLICATE_CONTENT_POPUP = 'show-duplicate-content-popup',
    CONTENT_TRANSFER_SUCCEED_POPUP = 'content-transfer-succeed-popup',
    CANCELLING_CONTENT_TRANSFER_POPUP = 'cancelling-content-transfer-popup',
    DIAL_SEARCH = 'dial-book-result',
    TEXTBOOK_TOC = 'textbook-toc',
    EXPLORE_MORE_CONTENT = 'explore-more-content',
    RECOVERY_ACCOUNT_ID_POPUP = 'recovery-account-id-popup',
    MERGE_ACCOUNT_POPUP = 'merge-account-popup',
    DISTRICT_MAPPING = 'district-mapping',
    SIGNIN_POPUP = 'signin-popup',
    EXTERNAL_USER_VERIFICATION_POPUP = 'user-verification-popup',
    FAQ_REPORT_ISSUE = 'faq-report-issue',
    UPDATE_WEBVIEW_POPUP = 'update-webview-popup',
    SHARE_CONTENT_POPUP = 'share-content-popup',
    SHARE_APP_POPUP = 'share-app-popup',
    UPGRADE_POPUP = 'update-popup',
    IMPORT_CONTENT_POPUP = 'import-content-popup',
    DOWNLOAD_ALL_CONFIRMATION_POPUP = 'download-all-confirmation-popup',
    PERMISSION_POPUP = 'permission-popup',
    /* New Telemetry */
    LANGUAGE = 'language',
    USER_TYPE = 'usertype',
    SCAN_OR_MANUAL = 'scan-or-manual',
    PROFILE_SETTINGS = 'profile-settings',
    POPUP_CATEGORY = 'popup-category',
    APP_PERMISSION_POPUP = 'app-permission-popup',
    STORAGE_SETTINGS = 'storage-settings',
    CREATE_MANAGED_USER = 'create-managed-user',
    MANAGE_USERS = 'manage-users',
    CHAPTER_DETAILS = 'chapter-details',
    TEACHER_SELF_DECLARATION = 'teacher-self-declaration',
    COURSE_LIST = 'course-list',
    MANUAL_PROFILE = 'manual profile',
    SCAN = 'scan',
    APP_TUTORIAL_POPUP = 'app-tutorial-popup',
    COURSE_SEARCH_FILTER = 'course-search-filter'
}
export enum LogType {
    NOTIFICATION = 'notification'
}
export enum LogLevel {
    TRACE = 'TRACE',
    DEBUG = 'DEBUG',
    INFO = 'INFO',
    WARN = 'WARN',
    ERROR = 'ERROR',
    FATAL = 'FATAL'
}

export enum ImpressionType {
    SEARCH = 'search',
    LIST = 'list',
    DETAIL = 'detail',
    VIEW = 'view',
    EDIT = 'edit',
    WORKFLOW = 'workflow',
    DISTRICT_MAPPING = 'district-mapping',
    CAMERA = 'camera',
    FILE_MANAGEMENT = 'file-management',
    /* New Telemetry */
    PAGE_LOADED = 'page-loaded',
    PAGE_REQUEST = 'page-request',
    SET_LANGUAGE = 'set-language',
    QR_REQUEST = 'qr-request'
}
export enum ImpressionSubtype {
    QRCodeScanInitiate = 'qr-code-scan-initiate',
    RATING_POPUP = 'rating-popup',
    QR_CODE_VALID = 'qr-code-valid',
    INVALID_QR_CODE = 'invalid-qr-code',
    APP_RATING_POPUP = 'app-rating-popup',
    TUTORIAL_WALKTHROUGH = 'tutorial-walkthrough',
    COMINGSOON_POPUP = 'coming-soon-popup',
    EXPLORE_MORE_CONTENT = 'explore-more-content',
    RECOVERY_ACCOUNT_POPUP = 'recovery-account-popup',
    DISTRICT_LOCATION_MAPPING = 'district-location-mapping',
    UPGRADE_POPUP = 'upgrade-popup',
    DEEPLINK = 'deeplink'
}
export enum InteractType {
    TOUCH = 'TOUCH',
    OTHER = 'OTHER',
    SCROLL = 'SCROLL',
    LOCATION_CHANGED = 'location-changed',
    LOCATION_UNCHANGED = 'location-unchanged',
    VISIBLE = 'visible',
    NOT_VISIBLE = 'not-visible',
    LICENSE_CARD_COLLAPSED = 'license-card-collapsed',
    LICENSE_CARD_EXPANDED = 'license-card-expanded',
    QUIZ_DEEPLINK = 'quiz-deeplink',
    DISABLED = 'disabled',
    DELETE_CHECKED = 'delete-checked',
    DELETE_UNCHECKED = 'delete-unchecked',
    BACKDROP_DISMISSED = 'backdrop-dismissed',
    LOCAL = 'local',
    FCM = 'fcm',
    WITHOUT_CONTENT = 'without-content',
    WITH_CONTENT = 'with-content',
    /* New Telemetry */
    SELECT_LANGUAGE = 'select-language',
    SELECT_CONTINUE = 'select-continue',
    SELECT_USERTYPE = 'select-usertype',
    SELECT_BACK = 'select-back',
    SELECT_QRSCANER = 'select-qrscanner',
    SELECT_CATEGORY = 'select-category',
    SELECT_ATTRIBUTE = 'select-attribute',
    SELECT_SUBMIT = 'select-submit',
    SELECT_CANCEL = 'select-cancel',
    SELECT_ADD = 'select-add',
    SELECT_MORE = 'select-more',
    SUBMISSION_INITIATED = 'submission-initiated',
    SUBMISSION_SUCCESS = 'submission-success',
    SUBMISSION_FAILURE = 'submission-failure',
    CREATE_SUCCESS = 'create-success',
    CREATE_FAILURE = 'create-failure',
    SWITCH_SUCCESS = 'switch-success',
    SWITCH_FAILURE = 'switch-failure',
    QR_CAPTURED = 'qr-captured'
}


export enum InteractSubtype {
    PRINT_PDF_CLICKED = 'print-pdf-clicked',
    MERGE_ACCOUNT_INITIATED = 'merge-account-initiated',
    MERGE_ACCOUNT_SUCCESS = 'merge-account-success',
    MERGE_ACCOUNT_FAILED = 'merge-account-failed',
    NETWORK_STATUS = 'networkStatus',
    INTERNET_CONNECTED = 'internet-connected',
    INTERNET_DISCONNECTED = 'internet-disconnected',
    LOGIN_INITIATE = 'login-initiate',
    LOGIN_SUCCESS = 'login-success',
    SIGNUP_INITIATE = 'signup-initiate',
    LOGOUT_INITIATE = 'logout-initiate',
    LOGOUT_SUCCESS = 'logout-success',
    CONTINUE_CLICKED = 'continue-clicked',
    GRANT_ACCESS_CLICKED = 'grant-access-clicked',
    APP_PERMISSION_SETTING_CLICKED = 'app-permission-setting-clicked',
    TAB_CLICKED = 'tab-clicked',
    SECTION_VIEWED = 'section-viewed',
    CONTENT_CLICKED = 'content-clicked',
    CANCEL = 'cancel',
    SEARCH_BUTTON_CLICKED = 'search-button-clicked',
    FILTER_BUTTON_CLICKED = 'filter-button-clicked',
    VIEWALL_CLICKED = 'view-all-clicked',
    BOOK_LIST_END_REACHED = 'book-list-end-reached',
    RECENTLY_VIEWED_END_REACHED = 'recently-viewed-end-reached',
    SHARE_COURSE_INITIATED = 'share-course-initiated',
    SHARE_CONTENT_INITIATED = 'share-content-initiated',
    SHARE_COURSE_SUCCESS = 'share-course-success',
    SHARE_CONTENT_SUCCESS = 'share-content-success',
    FLAG_INITIATE = 'flag-initiated',
    FLAG_SUCCESS = 'flag-success',
    FLAG_FAILED = 'flag-failed',
    QRCodeScanClicked = 'qr-code-scanner-clicked',
    QRCodeScanSuccess = 'qr-code-scan-success',
    QRCodeScanCancelled = 'qr-code-scan-cancelled',
    NOTIFICATION_CLICKED = 'notification-clicked',
    ANNOUNCEMENT_CLICKED = 'announcement-clicked',
    SIGNIN_OVERLAY_CLICKED = 'signin-overlay-clicked',
    SETTINGS_CLICKED = 'settings-clicked',
    NOT_NOW_CLICKED = 'not-now-clicked',
    ALLOW_CLICKED = 'allow-clicked',
    LANGUAGE_CLICKED = 'language-clicked',
    HELP_CLICKED = 'help-clicked',
    DATA_SYNC_CLICKED = 'data-sync-clicked',
    DEVICE_TAGS_CLICKED = 'device-tags-clicked',
    SUPPORT_CLICKED = 'support-clicked',
    ABOUT_APP_CLICKED = 'about-app-clicked',
    SHARE_APP_CLICKED = 'share-app-clicked',
    SHARE_APP_INITIATED = 'share-app-initiated',
    SHARE_APP_SUCCESS = 'share-app-success',
    LANGUAGE_SETTINGS_SUCCESS = 'language-settings-success',
    MANUALSYNC_INITIATED = 'manualsync-initiated',
    MANUALSYNC_SUCCESS = 'manualsync-success',
    DATA_SYNC_TYPE = 'data-sync-type-clicked',
    RATING_CLICKED = 'rating-clicked',
    RATING_SUBMITTED = 'rating-submitted',
    CREATE_USER_CLICKED = 'create-user-clicked',
    CREATE_USER_INITIATED = 'create-user-initated',
    EDIT_USER_INITIATED = 'edit-user-initated',
    CREATE_USER_SUCCESS = 'create-user-success',
    EDIT_USER_SUCCESS = 'edit-user-success',
    CREATE_GROUP_CLICKED = 'create-group-clicked',
    CREATE_GROUP_INITIATED = 'create-group-initated',
    CREATE_GROUP_SUCCESS = 'create-group-success',
    EDIT_GROUP_INITIATED = 'edit-group-initated',
    EDIT_GROUP_SUCCESS = 'edit-group-success',
    SWITCH_USER_CLICKED = 'switch-user-clicked',
    SWITCH_USER_INITIATE = 'switch-user-initiate',
    SWITCH_USER_SUCCESS = 'switch-user-success',
    DELETE_USER_INITIATE = 'delete-user-initiate',
    DELETE_GROUP_INITIATE = 'delete-group-initiate',
    DELETE_ALL_CLICKED = 'delete-from-device-button-clicked',
    SHARE_USER_GROUP_INITIATE = 'share-usergroup-initiate',
    SHARE_USER_GROUP_SUCCESS = 'share-usergroup-success',
    MY_CLASSROOMS_CLICKED = 'my-classrooms-clicked',
    REPORTS_CLICKED = 'reports-clicked',
    USERS_TAB_CLICKED = 'users-tab-clicked',
    GROUPS_TAB_CLICKED = 'groups-tab-clicked',
    SUBMIT_CLICKED = 'submit-clicked',
    LOCATION_CAPTURED = 'location-captured',
    USER_CLICKED = 'user-clicked',
    GROUP_CLICKED = 'group-clicked',
    CLASS_CLICKED = 'class-clicked',
    MEDIUM_CLICKED = 'medium-clicked',
    REFRESH_CLICKED = 'refresh-clicked',
    REPORTS_BY_USER_CLICKED = 'byuser-tab-clicked',
    REPORTS_BY_QUESTION_CLICKED = 'byquestion-tab-clicked',
    REPORTS_SORTBY_QUESTION_CLICKED = 'sortby-question-clicked',
    REPORTS_SORTBY_TIME_CLICKED = 'sortby-time-clicked',
    REPORTS_SORTBY_RESULT_CLICKED = 'sortby-result-clicked',
    REPORTS_SORTBY_USER_CLICKED = 'sortby-users-clicked',
    REPORTS_SORTBY_SCORE_CLICKED = 'sortby-score-clicked',
    REPORTS_SORTBY_MARKS_CLICKED = 'sortby-marks-clicked',
    REPORTS_SORTBY_ACCURACY_CLICKED = 'sortby-accuracy-clicked',
    QUESTION_CLICKED = 'question-clicked',
    INITIAL_CONFIG = 'initial-config',
    FILTER_CONFIG = 'filter-config',
    APPLY_FILTER_CLICKED = 'apply-filter-clicked',
    PROFILE_ATTRIBUTE_CHANGED = 'profile_attribute_changed',
    SAVE_CLICKED = 'save-clicked',
    FINISH_CLICKED = 'finish-clicked',
    DEVICE_BACK_CLICKED = 'device-back-clicked',
    NAV_BACK_CLICKED = 'nav-back-clicked',
    SKIP_CLICKED = 'skip-clicked',
    LANGUAGE_SELECTED = 'language-selected',
    KEBAB_MENU_CLICKED = 'kebab-menu-clicked',
    DELETE_CLICKED = 'delete-clicked',
    DIAL_SEARCH_RESULT_FOUND = 'dial-code-search-result-found',
    LOADING_SPINE = 'loading-spine',
    LOADING_SPINE_COMPLETED = 'loading-spine-completed',
    DOWNLOAD_ALL_CLICKED = 'download-all-clicked',
    CANCEL_CLICKED = 'cancel-clicked',
    CLOSE_CLICKED = 'close-clicked',
    PULL_TO_REFRESH = 'pull-to-refresh',
    EDIT_CLICKED = 'edit-clicked',
    VIEW_MORE_CLICKED = 'view-more-clicked',
    READ_MORE_CLICKED = 'read-more-clicked',
    READ_LESS_CLICKED = 'read-less-clicked',
    DOWNLOAD_PLAY_CLICKED = 'download-play-clicked',
    DOWNLOAD_REPORT_CLICKED = 'download-report-clicked',
    PLAY_CLICKED = 'play-clicked',
    EXTRA_INFO = 'extra-info',
    PROFILE_ATTRIBUTE_POPULATION = 'profile-attribute-population',
    ACCEPTANCE_CHECKBOX_CLICKED = 'acceptance_checkbox_clicked',
    UPDATE_INITIATE = 'update-initiate',
    DOWNLOAD_INITIATE = 'download-initiate',
    PLAY_ONLINE = 'play-online',
    PLAY_FROM_DEVICE = 'play-from-device',
    RESOURCE_PAGE_REQUEST = 'page-request-sent',
    RESOURCE_PAGE_LOADED = 'page-loaded',
    RESOURCE_PAGE_ERROR = 'page-error',
    ENROLL_CLICKED = 'enroll-clicked',
    ENROLL_SUCCESS = 'enroll-success',
    ENROLL_FAILED = 'enroll-failed',
    YES_CLICKED = 'yes-clicked',
    NO_CLICKED = 'no-clicked',
    RESUME_CLICKED = 'resume-clicked',
    APP_INTIATED = 'app-initiated',
    ACTIVE_DOWNLOADS_CLICKED = 'active-downloads-clicked',
    SORT_OPTION_CLICKED = 'sort-option-clicked',
    SELECT_ALL_CLICKED = 'select-all-clicked',
    UNSELECT_ALL_CLICKED = 'unselect-all-clicked',
    SORT_OPTION_SELECTED = 'sort-options-selected',
    ACTION_BUTTON_CLICKED = 'action-button-clicked',
    OUTSIDE_POPUP_AREA_CLICKED = 'outside-popup-area-clicked',
    POPUP_DISMISSED= 'popup-dismissed',
    DOWNLOAD_CANCEL_ALL_CLICKED = 'download-cancel-all-clicked',
    DOWNLOAD_CERTIFICATE_CLICKED = 'download-certificate-clicked',
    DOWNLOAD_CANCEL_CLICKED = 'download-cancel-clicked',
    DOWNLOAD_CLICKED = 'download-from-device-button-clicked',
    RATE_LATER_CLICKED = 'rate-later-clicked',
    PLAY_STORE_BUTTON_CLICKED = 'play-store-button-clicked',
    HELP_SECTION_CLICKED = 'help-section-clicked',
    APP_RATING_APPEARED = 'app-rating-appeared',
    START_CLICKED = 'start-clicked',
    UTM_INFO = 'utm-info',
    CLEAR_NOTIFICATIONS_CLICKED = 'clear-all-notifications-clicked',
    NOTIFICATION_READ = 'notification-read',
    NOTIFICATION_DESCRIPTION_TOGGLE_EXPAND = 'notification-description-toggle-expand',
    OPENRAP_DEVICE_CONNECTED = 'openrap-device-connected',
    OPENRAP_DEVICE_DISCONNECTED = 'openrap-device-disconnected',
    UNDO_CLICKED = 'undo-clicked',
    RETRY_CLICKED = 'retry-clicked',
    OK_CLICKED = 'ok-clicked',
    USER_TYPE_SELECTED = 'user-type-selected',
    QR_CODE_INVALID = 'qr-code-invalid',
    QR_CODE_COMINGSOON = 'qr-code-comingsoon',
    IMPORT_COMPLETED = 'import-completed',
    QR_SCAN_INVALID = 'qr-scan-invalid',
    UNIT_CLICKED = 'unit-clicked',
    PERMISSION_POPUP = 'permission-popup',
    WALKTHROUGH_BACKDROP_CLICKED = 'walkthrough-backdrop-clicked',
    WALKTHROUGH_CONFIRMATION_CLICKED = 'walkthrough-confirmation-clicked',
    HOTCODE_PUSH_INITIATED = 'hotcode-push-initiated',
    HOTCODE_PUSH_SUCCESS = 'hotcode-push-success',
    HOTCODE_PUSH_FAILURE = 'hotcode-push-failure',
    HOTCODE_PUSH_PROGRESS = 'hotcode-push-progress',
    HOTCODE_PUSH_KEY_NOT_DEFINED = 'hotcode-push-key-not-defined',
    SEARCH_HISTORY_CLICKED = 'search-history-clicked',
    FILTER_CLICKED = 'filter-clicked',
    DROPDOWN_CLICKED = 'drop-down-clicked',
    SUBUNIT_CLICKED = 'sub-unit-clicked',
    SEE_MORE_CONTENT_CLICKED = 'see-more-content-clicked',
    SEARCH_COMPLETED = 'search-completed',
    SORT_BY_FILTER_SET = 'sort-by-filter-set',
    SUBJECT_CLICKED = 'subject-clicked',
    SORT_BY_CLICKED = 'sort-by-clicked',
    SEARCH_INITIATED = 'search-initiated',
    RECOVERY_ACCOUNT_ID_CLICKED = 'recovery-account-id-clicked',
    MENU_CLICKED = 'menu-clicked',
    SHARE_CLICKED = 'share-clicked',
    SHARE_TELEMETRY_CLICKED = 'share-telemetry-clicked',
    UNENROL_CLICKED = 'unenrol-clicked',
    UNENROL_SUCCESS = 'unenrol-success',
    UNENROL_FAILURE = 'unenrol-failure',
    TRAINING_INFO_CLICKED = 'training-info-clicked',
    TRAINING_MODULE_CLICKED = 'training-module-clicked',
    MERGE_CLICKED = 'merge-clicked',
    NOTIFICATION_RECEIVED = 'notification-received',
    AUTO_POPULATED_LOCATION = 'auto-populate-location',
    EDIT_DISTRICT_MAPPING_CLICKED = 'edit-district-mapping-clicked',
    LOGIN_CLICKED = 'login-clicked',
    TERMS_OF_USE_CLICKED = 'terms-of-use-clicked',
    USER_VERIFICATION_SUCCESS = 'user-verification-success',
    USER_VERIFICATION_FAILURE = 'user-verification-failure',
    FAST_LOADING_INITIATED = 'fast-loading-initiated',
    FAST_LOADING_FINISHED = 'fast-loading-finished',
    REPORT_ISSUE_CLICKED = 'report-issue-clicked',
    STATE_DIST_CHANGED = 'state-dist-changed',
    STATE_CHANGED = 'state-changed',
    DIST_CHANGED = 'dist-changed',
    UPDATE_WEBVIEW_CLICKED = 'update-webview-clicked',
    CREDITS_CLICKED = 'credits-clicked',
    UPGRADE_CLICKED = 'upgrade-clicked',
    FORCE_UPGRADE_INFO = 'force-upgrade-info',
    OPTIONAL_UPGRADE = 'optional-upgrade',
    DEEPLINK_UPGRADE = 'deep-link-upgrade',
    NO_QR_CODE_CLICKED = 'no-qr-code-clicked',
    /* New Telemetry */
    SUCCESS = 'success',
    FAIL = 'fail',
    UI = 'ui',
    DEVICE = 'device',
    DENY_CLICKED = 'deny-clicked',
    NEW = 'new',
    EXISTING = 'existing',
    SUBJECT_CARD_CLICKED = 'subject-card-clicked',
    INFORMATION_ICON_CLICKED = 'information-icon-clicked',
    TUTORIAL_CONTINUE_CLICKED = 'tutorial-continue-clicked',
    SYNC_NOW_CLICKED = 'sync-now-clicked'
}

export enum ID {
    USER_VERIFICATION_REJECTED = 'ext-user-verify-reject',
    USER_VERIFICATION_CONFIRMED = 'ext-user-verify-confirm',
    USER_VERIFICATION_SUBMITED = 'ext-user-verify-submit',
    USER_VERIFICATION_FAILED = 'ext-user-verify-fail',
    USER_VERIFICATION_SUCCESS = 'ext-user-verify-success',
    SUBMIT_CLICKED = 'submit-clicked',
    LICENSE_CARD_CLICKED = 'license-card-cliked',
    QUIZ = 'quiz',
    IP_BASED_LOCATION_SUGGESTION = 'ip-based-location-suggestion',
    DEEPLINK_CLICKED = 'deeplink-clicked',
    SHARE = 'share-clicked',
    SHARE_CONFIRM = 'share-confirm-clicked',
    APP_LAUNCH = 'app-launch',
    CONTINUE_CLICKED = 'continue-clicked',
    LOAD_CLICKED = 'load-clicked',
    BACKDROP_CLICKED = 'backdrop-clicked',
    CANCEL_CLICKED = 'cancel-clicked',
    NOTIFICATION_CLICKED = 'notification-clicked',
    SEE_MORE_CONTENT_BUTTON_CLICKED = 'see-more-content-button-clicked',
    BTN_CANCEL = 'btn-cancel',
    BTN_ADD = 'btn-add',
    BTN_SWITCH = 'btn-switch',
    BTN_MORE = 'btn-more',
    BTN_UPDATE = 'btn-update',
    BTN_I_AM_A_TEACHER = 'btn-i-am-a-teacher',
    TEACHER_DECLARATION = 'teacher-declaration',
    MUA_USER_CREATION = 'mua-user-creation'
}

export enum ActionButtonType {
    POSITIVE = 'positive',
    NEGATIVE = 'negative'
}

export enum CorReleationDataType {
    COURSE_BATCH = 'CourseBatch',
    ROOT_ID = 'RootId',
    SECTION = 'Section',
    FTUE = 'Ftue',
    BOARD = 'Board',
    MEDIUM = 'Medium',
    CLASS = 'Class',
    DOWNLOADS = 'Downloads',
    SUBJECT = 'Subject',
    MIMETYPE = 'MimeType',
    USERTYPE = 'UserType',
    DISCOVERY_TYPE = 'DiscoveryType',
    DEEPLINK = 'Deeplink',
    ACCESS_TYPE = 'AccessType',
    SCAN = 'Scan',
    SOURCE = 'Source',
    NOTIFICATION_ID = 'NotificationID',
    /* New Telemetry */
    BOARD_COUNT = 'CountBoard',
    MEDIUM_COUNT = 'CountMedium',
    CLASS_COUNT = 'CountClass',
    FIRST_TIME_USER = 'FirstTimeUser',
    NAME = 'Name',
    TNC_VERSION = 'TncVersion',
    LIUA = 'Liua',
    SWITCHED_USER = 'SwitchedUser',
    NEW_VALUE = 'NewValue',
    OLD_VALUE = 'OldValue',
    COURSE_COUNT = 'CourseCount',
    CHILD_UI = 'ChildUi',
    QR = 'QR',
    COUNT_BOOK = 'CountBook',
    COUNT_CONTENT = 'CountContent',
    PAGE_ID = 'PageId'
}

export enum AuditProps {
    LANGUAGE = 'language',
    PROFILE_TYPE = 'profile_type'
}

export enum CorReleationDataId {
    POPUP_CATEGORY = 'popup-category',
    LANGUAGE = 'language',
}

export enum AuditType {
    SET_LANGUAGE = 'set-language',
}

