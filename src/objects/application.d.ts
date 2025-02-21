import { AbstractCrudObject } from "../abstract-crud-object";
import AbstractObject from "../abstract-object";
import Cursor from "../cursor";
/**
 * Application
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Application extends AbstractCrudObject {
    static get Fields(): Readonly<{
        aam_rules: "aam_rules";
        an_ad_space_limit: "an_ad_space_limit";
        an_platforms: "an_platforms";
        android_key_hash: "android_key_hash";
        android_sdk_error_categories: "android_sdk_error_categories";
        app_domains: "app_domains";
        app_events_config: "app_events_config";
        app_events_feature_bitmask: "app_events_feature_bitmask";
        app_events_session_timeout: "app_events_session_timeout";
        app_install_tracked: "app_install_tracked";
        app_name: "app_name";
        app_signals_binding_ios: "app_signals_binding_ios";
        app_type: "app_type";
        auth_dialog_data_help_url: "auth_dialog_data_help_url";
        auth_dialog_headline: "auth_dialog_headline";
        auth_dialog_perms_explanation: "auth_dialog_perms_explanation";
        auth_referral_default_activity_privacy: "auth_referral_default_activity_privacy";
        auth_referral_enabled: "auth_referral_enabled";
        auth_referral_extended_perms: "auth_referral_extended_perms";
        auth_referral_friend_perms: "auth_referral_friend_perms";
        auth_referral_response_type: "auth_referral_response_type";
        auth_referral_user_perms: "auth_referral_user_perms";
        auto_event_mapping_android: "auto_event_mapping_android";
        auto_event_mapping_ios: "auto_event_mapping_ios";
        auto_event_setup_enabled: "auto_event_setup_enabled";
        auto_log_app_events_default: "auto_log_app_events_default";
        auto_log_app_events_enabled: "auto_log_app_events_enabled";
        business: "business";
        canvas_fluid_height: "canvas_fluid_height";
        canvas_fluid_width: "canvas_fluid_width";
        canvas_url: "canvas_url";
        category: "category";
        client_config: "client_config";
        company: "company";
        configured_ios_sso: "configured_ios_sso";
        contact_email: "contact_email";
        created_time: "created_time";
        creator_uid: "creator_uid";
        daily_active_users: "daily_active_users";
        daily_active_users_rank: "daily_active_users_rank";
        deauth_callback_url: "deauth_callback_url";
        default_share_mode: "default_share_mode";
        description: "description";
        financial_id: "financial_id";
        gdpv4_chrome_custom_tabs_enabled: "gdpv4_chrome_custom_tabs_enabled";
        gdpv4_enabled: "gdpv4_enabled";
        gdpv4_nux_content: "gdpv4_nux_content";
        gdpv4_nux_enabled: "gdpv4_nux_enabled";
        has_messenger_product: "has_messenger_product";
        hosting_url: "hosting_url";
        icon_url: "icon_url";
        id: "id";
        ios_bundle_id: "ios_bundle_id";
        ios_sdk_dialog_flows: "ios_sdk_dialog_flows";
        ios_sdk_error_categories: "ios_sdk_error_categories";
        ios_sfvc_attr: "ios_sfvc_attr";
        ios_supports_native_proxy_auth_flow: "ios_supports_native_proxy_auth_flow";
        ios_supports_system_auth: "ios_supports_system_auth";
        ipad_app_store_id: "ipad_app_store_id";
        iphone_app_store_id: "iphone_app_store_id";
        latest_sdk_version: "latest_sdk_version";
        link: "link";
        logging_token: "logging_token";
        logo_url: "logo_url";
        migrations: "migrations";
        mobile_profile_section_url: "mobile_profile_section_url";
        mobile_web_url: "mobile_web_url";
        monthly_active_users: "monthly_active_users";
        monthly_active_users_rank: "monthly_active_users_rank";
        name: "name";
        namespace: "namespace";
        object_store_urls: "object_store_urls";
        owner_business: "owner_business";
        page_tab_default_name: "page_tab_default_name";
        page_tab_url: "page_tab_url";
        photo_url: "photo_url";
        privacy_policy_url: "privacy_policy_url";
        profile_section_url: "profile_section_url";
        property_id: "property_id";
        protected_mode_rules: "protected_mode_rules";
        real_time_mode_devices: "real_time_mode_devices";
        restrictions: "restrictions";
        restrictive_data_filter_params: "restrictive_data_filter_params";
        restrictive_data_filter_rules: "restrictive_data_filter_rules";
        sdk_update_message: "sdk_update_message";
        seamless_login: "seamless_login";
        secure_canvas_url: "secure_canvas_url";
        secure_page_tab_url: "secure_page_tab_url";
        server_ip_whitelist: "server_ip_whitelist";
        smart_login_bookmark_icon_url: "smart_login_bookmark_icon_url";
        smart_login_menu_icon_url: "smart_login_menu_icon_url";
        social_discovery: "social_discovery";
        subcategory: "subcategory";
        suggested_events_setting: "suggested_events_setting";
        supported_platforms: "supported_platforms";
        supports_apprequests_fast_app_switch: "supports_apprequests_fast_app_switch";
        supports_attribution: "supports_attribution";
        supports_implicit_sdk_logging: "supports_implicit_sdk_logging";
        suppress_native_ios_gdp: "suppress_native_ios_gdp";
        terms_of_service_url: "terms_of_service_url";
        url_scheme_suffix: "url_scheme_suffix";
        user_support_email: "user_support_email";
        user_support_url: "user_support_url";
        website_url: "website_url";
        weekly_active_users: "weekly_active_users";
    }>;
    static get SupportedPlatforms(): Readonly<{
        amazon: "AMAZON";
        android: "ANDROID";
        canvas: "CANVAS";
        gameroom: "GAMEROOM";
        instant_game: "INSTANT_GAME";
        ipad: "IPAD";
        iphone: "IPHONE";
        mobile_web: "MOBILE_WEB";
        oculus: "OCULUS";
        samsung: "SAMSUNG";
        supplementary_images: "SUPPLEMENTARY_IMAGES";
        web: "WEB";
        windows: "WINDOWS";
        xiaomi: "XIAOMI";
    }>;
    static get AnPlatforms(): Readonly<{
        android: "ANDROID";
        desktop: "DESKTOP";
        galaxy: "GALAXY";
        instant_articles: "INSTANT_ARTICLES";
        ios: "IOS";
        mobile_web: "MOBILE_WEB";
        oculus: "OCULUS";
        unknown: "UNKNOWN";
        xiaomi: "XIAOMI";
    }>;
    static get Platform(): Readonly<{
        android: "ANDROID";
        ios: "IOS";
    }>;
    static get RequestType(): Readonly<{
        app_indexing: "APP_INDEXING";
        button_sampling: "BUTTON_SAMPLING";
        plugin: "PLUGIN";
    }>;
    static get MutationMethod(): Readonly<{
        add: "ADD";
        delete: "DELETE";
        replace: "REPLACE";
    }>;
    static get PostMethod(): Readonly<{
        codeless: "CODELESS";
        eymt: "EYMT";
    }>;
    static get LoggingSource(): Readonly<{
        detection: "DETECTION";
        messenger_bot: "MESSENGER_BOT";
    }>;
    static get LoggingTarget(): Readonly<{
        app: "APP";
        app_and_page: "APP_AND_PAGE";
        page: "PAGE";
    }>;
    static get OwnerPermissions(): Readonly<{
        develop: "DEVELOP";
        manage: "MANAGE";
        manage_extensions: "MANAGE_EXTENSIONS";
        manage_phone: "MANAGE_PHONE";
        manage_phone_assets: "MANAGE_PHONE_ASSETS";
        manage_templates: "MANAGE_TEMPLATES";
        messaging: "MESSAGING";
        view_cost: "VIEW_COST";
        view_phone_assets: "VIEW_PHONE_ASSETS";
        view_templates: "VIEW_TEMPLATES";
    }>;
    static get PartnerPermissions(): Readonly<{
        develop: "DEVELOP";
        manage: "MANAGE";
        manage_extensions: "MANAGE_EXTENSIONS";
        manage_phone: "MANAGE_PHONE";
        manage_phone_assets: "MANAGE_PHONE_ASSETS";
        manage_templates: "MANAGE_TEMPLATES";
        messaging: "MESSAGING";
        view_cost: "VIEW_COST";
        view_phone_assets: "VIEW_PHONE_ASSETS";
        view_templates: "VIEW_TEMPLATES";
    }>;
    deleteAccounts(params?: Record<string, any>): Promise<any>;
    getAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAccount(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    createActivity(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    getAdPlacementGroups(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getAdNetworkPlacements(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getAdNetworkAnalytics(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAdNetworkAnalytic(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Application>;
    getAdNetworkAnalyticsResults(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getAemAttribution(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getAemConversionConfigs(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getAemConversionFilter(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAemConversion(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    createAemSkanReadiness(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    getAgencies(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAggregateRevenue(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    getAndroidDialogConfigs(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getAppCapiSettings(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getAppEventTypes(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAppIndexing(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Application>;
    createAppIndexingSession(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Application>;
    getAppInstalledGroups(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAppPushDeviceToken(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Application>;
    getAppAssets(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAsset(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Application>;
    getAuthorizedAdAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getButtonAutoDetectionDeviceSelection(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getCloudbridgeSettings(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createCodelessEventMapping(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Application>;
    getDaChecks(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createDomainReport(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    getIapPurchases(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getIosDialogConfigs(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getLinkedDataset(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createMmpAuditing(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    getMobileSdkGk(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getMonetizedDigitalStoreObjects(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createMonetizedDigitalStoreObject(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    getObjectTypes(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getObjects(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createOccludesPopup(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    createPageActivity(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Application>;
    createPaymentCurrency(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Application>;
    getPermissions(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getProducts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getPurchases(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getRoles(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getServerDomainInfos(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getSubscribedDomains(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createSubscribedDomain(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Application>;
    getSubscribedDomainsPhishing(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createSubscribedDomainsPhishing(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Application>;
    deleteSubscriptions(params?: Record<string, any>): Promise<any>;
    createSubscription(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    createUpload(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    createWhatsAppBusinessSolution(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Application>;
    getWhatsAppBusinessSolutions(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<string, any>): Promise<Application>;
    update(fields: string[], params?: Record<string, any>): Promise<Application>;
}
