import { AbstractCrudObject } from "../abstract-crud-object";
import AbstractObject from "../abstract-object";
import Cursor from "../cursor";
import AdAccountBusinessConstraints from "./ad-account-business-constraints";
import AdPlacePageSet from "./ad-place-page-set";
import AdCreative from "./ad-creative";
import AdImage from "./ad-image";
import AdLabel from "./ad-label";
import PlayableContent from "./playable-content";
import AdRule from "./ad-rule";
import Ad from "./ad";
import AdSet from "./ad-set";
import AdsPixel from "./ads-pixel";
import AdVideo from "./ad-video";
import Campaign from "./campaign";
import AdAsyncRequestSet from "./ad-async-request-set";
import CustomAudience from "./custom-audience";
import CustomConversion from "./custom-conversion";
import AdReportRun from "./ad-report-run";
import PublisherBlockList from "./publisher-block-list";
import ReachFrequencyPrediction from "./reach-frequency-prediction";
import AdAccountSubscribedApps from "./ad-account-subscribed-apps";
import AdsInsights from "./ads-insights";

/**
 * AdAccount
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccount extends AbstractCrudObject {
    static get Fields(): Readonly<{
        account_id: "account_id";
        account_status: "account_status";
        ad_account_promotable_objects: "ad_account_promotable_objects";
        age: "age";
        agency_client_declaration: "agency_client_declaration";
        all_capabilities: "all_capabilities";
        amount_spent: "amount_spent";
        attribution_spec: "attribution_spec";
        balance: "balance";
        brand_safety_content_filter_levels: "brand_safety_content_filter_levels";
        business: "business";
        business_city: "business_city";
        business_country_code: "business_country_code";
        business_name: "business_name";
        business_state: "business_state";
        business_street: "business_street";
        business_street2: "business_street2";
        business_zip: "business_zip";
        can_create_brand_lift_study: "can_create_brand_lift_study";
        capabilities: "capabilities";
        created_time: "created_time";
        currency: "currency";
        custom_audience_info: "custom_audience_info";
        default_dsa_beneficiary: "default_dsa_beneficiary";
        default_dsa_payor: "default_dsa_payor";
        disable_reason: "disable_reason";
        end_advertiser: "end_advertiser";
        end_advertiser_name: "end_advertiser_name";
        existing_customers: "existing_customers";
        extended_credit_invoice_group: "extended_credit_invoice_group";
        failed_delivery_checks: "failed_delivery_checks";
        fb_entity: "fb_entity";
        funding_source: "funding_source";
        funding_source_details: "funding_source_details";
        has_migrated_permissions: "has_migrated_permissions";
        has_page_authorized_adaccount: "has_page_authorized_adaccount";
        id: "id";
        io_number: "io_number";
        is_attribution_spec_system_default: "is_attribution_spec_system_default";
        is_direct_deals_enabled: "is_direct_deals_enabled";
        is_in_3ds_authorization_enabled_market: "is_in_3ds_authorization_enabled_market";
        is_notifications_enabled: "is_notifications_enabled";
        is_personal: "is_personal";
        is_prepay_account: "is_prepay_account";
        is_tax_id_required: "is_tax_id_required";
        liable_address: "liable_address";
        line_numbers: "line_numbers";
        media_agency: "media_agency";
        min_campaign_group_spend_cap: "min_campaign_group_spend_cap";
        min_daily_budget: "min_daily_budget";
        name: "name";
        offsite_pixels_tos_accepted: "offsite_pixels_tos_accepted";
        owner: "owner";
        owner_business: "owner_business";
        partner: "partner";
        rf_spec: "rf_spec";
        send_bill_to_address: "send_bill_to_address";
        show_checkout_experience: "show_checkout_experience";
        sold_to_address: "sold_to_address";
        spend_cap: "spend_cap";
        tax_id: "tax_id";
        tax_id_status: "tax_id_status";
        tax_id_type: "tax_id_type";
        timezone_id: "timezone_id";
        timezone_name: "timezone_name";
        timezone_offset_hours_utc: "timezone_offset_hours_utc";
        tos_accepted: "tos_accepted";
        user_access_expire_time: "user_access_expire_time";
        user_tasks: "user_tasks";
        user_tos_accepted: "user_tos_accepted";
        viewable_business: "viewable_business";
    }>;
    static get Currency(): Readonly<{
        aed: "AED";
        ars: "ARS";
        aud: "AUD";
        bdt: "BDT";
        bob: "BOB";
        brl: "BRL";
        cad: "CAD";
        chf: "CHF";
        clp: "CLP";
        cny: "CNY";
        cop: "COP";
        crc: "CRC";
        czk: "CZK";
        dkk: "DKK";
        dzd: "DZD";
        egp: "EGP";
        eur: "EUR";
        gbp: "GBP";
        gtq: "GTQ";
        hkd: "HKD";
        hnl: "HNL";
        huf: "HUF";
        idr: "IDR";
        ils: "ILS";
        inr: "INR";
        isk: "ISK";
        jpy: "JPY";
        kes: "KES";
        krw: "KRW";
        lkr: "LKR";
        mop: "MOP";
        mxn: "MXN";
        myr: "MYR";
        ngn: "NGN";
        nio: "NIO";
        nok: "NOK";
        nzd: "NZD";
        pen: "PEN";
        php: "PHP";
        pkr: "PKR";
        pln: "PLN";
        pyg: "PYG";
        qar: "QAR";
        ron: "RON";
        sar: "SAR";
        sek: "SEK";
        sgd: "SGD";
        thb: "THB";
        try: "TRY";
        twd: "TWD";
        uah: "UAH";
        usd: "USD";
        uyu: "UYU";
        vnd: "VND";
        zar: "ZAR";
    }>;
    static get PermittedTasks(): Readonly<{
        aa_analyze: "AA_ANALYZE";
        advertise: "ADVERTISE";
        analyze: "ANALYZE";
        draft: "DRAFT";
        manage: "MANAGE";
    }>;
    static get Tasks(): Readonly<{
        aa_analyze: "AA_ANALYZE";
        advertise: "ADVERTISE";
        analyze: "ANALYZE";
        draft: "DRAFT";
        manage: "MANAGE";
    }>;
    static get ClaimObjective(): Readonly<{
        automotive_model: "AUTOMOTIVE_MODEL";
        collaborative_ads: "COLLABORATIVE_ADS";
        home_listing: "HOME_LISTING";
        media_title: "MEDIA_TITLE";
        product: "PRODUCT";
        travel: "TRAVEL";
        vehicle: "VEHICLE";
        vehicle_offer: "VEHICLE_OFFER";
    }>;
    static get ContentType(): Readonly<{
        automotive_model: "AUTOMOTIVE_MODEL";
        destination: "DESTINATION";
        flight: "FLIGHT";
        generic: "GENERIC";
        home_listing: "HOME_LISTING";
        hotel: "HOTEL";
        job: "JOB";
        local_service_business: "LOCAL_SERVICE_BUSINESS";
        media_title: "MEDIA_TITLE";
        offline_product: "OFFLINE_PRODUCT";
        product: "PRODUCT";
        vehicle: "VEHICLE";
        vehicle_offer: "VEHICLE_OFFER";
    }>;
    static get Subtype(): Readonly<{
        app: "APP";
        bag_of_accounts: "BAG_OF_ACCOUNTS";
        bidding: "BIDDING";
        claim: "CLAIM";
        custom: "CUSTOM";
        engagement: "ENGAGEMENT";
        exclusion: "EXCLUSION";
        fox: "FOX";
        lookalike: "LOOKALIKE";
        managed: "MANAGED";
        measurement: "MEASUREMENT";
        offline_conversion: "OFFLINE_CONVERSION";
        partner: "PARTNER";
        primary: "PRIMARY";
        regulated_categories_audience: "REGULATED_CATEGORIES_AUDIENCE";
        study_rule_audience: "STUDY_RULE_AUDIENCE";
        subscriber_segment: "SUBSCRIBER_SEGMENT";
        video: "VIDEO";
        website: "WEBSITE";
    }>;
    static get ActionSource(): Readonly<{
        physical_store: "PHYSICAL_STORE";
        website: "WEBSITE";
    }>;
    getAccountControls(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAccountControl(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdAccountBusinessConstraints>;
    getActivities(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getAdPlacePageSets(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAdPlacePageSet(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdPlacePageSet>;
    createAdPlacePageSetsAsync(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdPlacePageSet>;
    getAdSavedKeywords(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getAdStudies(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getAdCloudPlayables(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getAdCreatives(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor<AdCreative> | Promise<Cursor<AdCreative>>;
    createAdCreative(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdCreative>;
    getAdCreativesByLabels(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    deleteAdImages(params?: Record<string, any>): Promise<any>;
    getAdImages(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAdImage(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdImage>;
    getAdLabels(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAdLabel(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdLabel>;
    getAdPlayables(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAdPlayable(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<PlayableContent>;
    getAdRulesHistory(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getAdRulesLibrary(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAdRulesLibrary(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdRule>;
    getAds(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor<Ad> | Promise<Cursor<Ad>>;
    createAd(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Ad>;
    getAdsReportingMmmReports(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getAdsReportingMmmSchedulers(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getAdsVolume(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getAdsByLabels(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getAdSets(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor<AdSet> | Promise<Cursor<AdSet>>;
    createAdSet(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdSet>;
    getAdSetsByLabels(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getAdsPixels(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAdsPixel(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdsPixel>;
    getAdvertisableApplications(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    deleteAdVideos(params?: Record<string, any>): Promise<any>;
    getAdVideos(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAdVideo(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdVideo>;
    getAffectedAdSets(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    deleteAgencies(params?: Record<string, any>): Promise<any>;
    getAgencies(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAgency(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdAccount>;
    getApplications(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    deleteAssignedUsers(params?: Record<string, any>): Promise<any>;
    getAssignedUsers(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAssignedUser(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdAccount>;
    createAsyncBatchRequest(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Campaign>;
    getAsyncRequests(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getAsyncAdRequestSets(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAsyncAdRequestSet(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdAsyncRequestSet>;
    getAudienceFunnel(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createBlockListDraft(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdAccount>;
    getBroadTargetingCategories(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getBusinessProjects(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    deleteCampaigns(params?: Record<string, any>): Promise<any>;
    getCampaigns(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor<Campaign> | Promise<Cursor<Campaign>>;
    createCampaign(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Campaign>;
    getCampaignsByLabels(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getConnectedInstagramAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getConnectedInstagramAccountsWithIabp(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getConversionGoals(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getCpaGuidance(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getCustomAudiences(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createCustomAudience(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<CustomAudience>;
    getCustomAudiencesTos(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createCustomAudiencesTo(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdAccount>;
    getCustomConversions(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createCustomConversion(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<CustomConversion>;
    getDeliveryEstimate(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getDeprecatedTargetingAdSets(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getDsaRecommendations(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getGeneratePreviews(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getImpactingAdStudies(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getInsights(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor<AdsInsights[]> | Promise<Cursor<AdsInsights[]>>;
    getInsightsAsync(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdReportRun>;
    getInstagramAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getIosFourteenCampaignLimits(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createMAnAgeDPartnerAd(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    getMatchedSearchApplications(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getMaxBid(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getMinimumBudgets(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getOnBehalfRequests(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createProductAudience(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<CustomAudience>;
    getPromotePages(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getPublisherBlockLists(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createPublisherBlockList(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<PublisherBlockList>;
    getReachEstimate(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getReachFrequencyPredictions(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createReachFrequencyPrediction(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<ReachFrequencyPrediction>;
    getSavedAudiences(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    deleteSubscribedApps(params?: Record<string, any>): Promise<any>;
    getSubscribedApps(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createSubscribedApp(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdAccountSubscribedApps>;
    getTargetingBrowse(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getTargetingSearch(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getTargetingSentenceLines(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getTargetingSuggestions(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getTargetingValidATIOn(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getTracking(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createTracking(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdAccount>;
    getUsers(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    deleteUsersOfAnyAudience(params?: Record<string, any>): Promise<any>;
    getValueAdjustmentRuleCollections(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getValueAdjustmentRules(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<string, any>): Promise<AdAccount>;
    update(fields: string[], params?: Record<string, any>): Promise<AdAccount>;
}
