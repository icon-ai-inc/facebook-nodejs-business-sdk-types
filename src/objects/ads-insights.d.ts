import { AbstractCrudObject } from "../abstract-crud-object";
/**
 * AdsInsights
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsInsights extends AbstractCrudObject {
    static get Fields(): Readonly<{
        account_currency: "account_currency";
        account_id: "account_id";
        account_name: "account_name";
        action_values: "action_values";
        actions: "actions";
        ad_click_actions: "ad_click_actions";
        ad_id: "ad_id";
        ad_impression_actions: "ad_impression_actions";
        ad_name: "ad_name";
        adjusted_offline_purchase: "adjusted_offline_purchase";
        adset_end: "adset_end";
        adset_id: "adset_id";
        adset_name: "adset_name";
        adset_start: "adset_start";
        age_targeting: "age_targeting";
        attribution_setting: "attribution_setting";
        auction_bid: "auction_bid";
        auction_competitiveness: "auction_competitiveness";
        auction_max_competitor_bid: "auction_max_competitor_bid";
        buying_type: "buying_type";
        campaign_id: "campaign_id";
        campaign_name: "campaign_name";
        canvas_avg_view_percent: "canvas_avg_view_percent";
        canvas_avg_view_time: "canvas_avg_view_time";
        catalog_segment_actions: "catalog_segment_actions";
        catalog_segment_value: "catalog_segment_value";
        catalog_segment_value_mobile_purchase_roas: "catalog_segment_value_mobile_purchase_roas";
        catalog_segment_value_omni_purchase_roas: "catalog_segment_value_omni_purchase_roas";
        catalog_segment_value_website_purchase_roas: "catalog_segment_value_website_purchase_roas";
        clicks: "clicks";
        conversion_rate_ranking: "conversion_rate_ranking";
        conversion_values: "conversion_values";
        conversions: "conversions";
        converted_product_quantity: "converted_product_quantity";
        converted_product_value: "converted_product_value";
        cost_per_15_sec_video_view: "cost_per_15_sec_video_view";
        cost_per_2_sec_continuous_video_view: "cost_per_2_sec_continuous_video_view";
        cost_per_action_type: "cost_per_action_type";
        cost_per_ad_click: "cost_per_ad_click";
        cost_per_conversion: "cost_per_conversion";
        cost_per_dda_countby_convs: "cost_per_dda_countby_convs";
        cost_per_estimated_ad_recallers: "cost_per_estimated_ad_recallers";
        cost_per_inline_link_click: "cost_per_inline_link_click";
        cost_per_inline_post_engagement: "cost_per_inline_post_engagement";
        cost_per_one_thousand_ad_impression: "cost_per_one_thousand_ad_impression";
        cost_per_outbound_click: "cost_per_outbound_click";
        cost_per_thruplay: "cost_per_thruplay";
        cost_per_unique_action_type: "cost_per_unique_action_type";
        cost_per_unique_click: "cost_per_unique_click";
        cost_per_unique_conversion: "cost_per_unique_conversion";
        cost_per_unique_inline_link_click: "cost_per_unique_inline_link_click";
        cost_per_unique_outbound_click: "cost_per_unique_outbound_click";
        cpc: "cpc";
        cpm: "cpm";
        cpp: "cpp";
        created_time: "created_time";
        creative_media_type: "creative_media_type";
        ctr: "ctr";
        date_start: "date_start";
        date_stop: "date_stop";
        dda_countby_convs: "dda_countby_convs";
        dda_results: "dda_results";
        engagement_rate_ranking: "engagement_rate_ranking";
        estimated_ad_recall_rate: "estimated_ad_recall_rate";
        estimated_ad_recall_rate_lower_bound: "estimated_ad_recall_rate_lower_bound";
        estimated_ad_recall_rate_upper_bound: "estimated_ad_recall_rate_upper_bound";
        estimated_ad_recallers: "estimated_ad_recallers";
        estimated_ad_recallers_lower_bound: "estimated_ad_recallers_lower_bound";
        estimated_ad_recallers_upper_bound: "estimated_ad_recallers_upper_bound";
        frequency: "frequency";
        full_view_impressions: "full_view_impressions";
        full_view_reach: "full_view_reach";
        gender_targeting: "gender_targeting";
        impressions: "impressions";
        inline_link_click_ctr: "inline_link_click_ctr";
        inline_link_clicks: "inline_link_clicks";
        inline_post_engagement: "inline_post_engagement";
        instagram_upcoming_event_reminders_set: "instagram_upcoming_event_reminders_set";
        instant_experience_clicks_to_open: "instant_experience_clicks_to_open";
        instant_experience_clicks_to_start: "instant_experience_clicks_to_start";
        instant_experience_outbound_clicks: "instant_experience_outbound_clicks";
        interactive_component_tap: "interactive_component_tap";
        labels: "labels";
        location: "location";
        marketing_messages_cost_per_delivered: "marketing_messages_cost_per_delivered";
        marketing_messages_cost_per_link_btn_click: "marketing_messages_cost_per_link_btn_click";
        marketing_messages_spend: "marketing_messages_spend";
        marketing_messages_website_purchase_values: "marketing_messages_website_purchase_values";
        mobile_app_purchase_roas: "mobile_app_purchase_roas";
        objective: "objective";
        onsite_conversion_messaging_detected_purchase_deduped: "onsite_conversion_messaging_detected_purchase_deduped";
        optimization_goal: "optimization_goal";
        outbound_clicks: "outbound_clicks";
        outbound_clicks_ctr: "outbound_clicks_ctr";
        place_page_name: "place_page_name";
        purchase_roas: "purchase_roas";
        qualifying_question_qualify_answer_rate: "qualifying_question_qualify_answer_rate";
        quality_ranking: "quality_ranking";
        reach: "reach";
        shops_assisted_purchases: "shops_assisted_purchases";
        social_spend: "social_spend";
        spend: "spend";
        total_postbacks: "total_postbacks";
        total_postbacks_detailed: "total_postbacks_detailed";
        total_postbacks_detailed_v4: "total_postbacks_detailed_v4";
        unique_actions: "unique_actions";
        unique_clicks: "unique_clicks";
        unique_conversions: "unique_conversions";
        unique_ctr: "unique_ctr";
        unique_inline_link_click_ctr: "unique_inline_link_click_ctr";
        unique_inline_link_clicks: "unique_inline_link_clicks";
        unique_link_clicks_ctr: "unique_link_clicks_ctr";
        unique_outbound_clicks: "unique_outbound_clicks";
        unique_outbound_clicks_ctr: "unique_outbound_clicks_ctr";
        unique_video_continuous_2_sec_watched_actions: "unique_video_continuous_2_sec_watched_actions";
        unique_video_view_15_sec: "unique_video_view_15_sec";
        updated_time: "updated_time";
        video_15_sec_watched_actions: "video_15_sec_watched_actions";
        video_30_sec_watched_actions: "video_30_sec_watched_actions";
        video_avg_time_watched_actions: "video_avg_time_watched_actions";
        video_continuous_2_sec_watched_actions: "video_continuous_2_sec_watched_actions";
        video_p100_watched_actions: "video_p100_watched_actions";
        video_p25_watched_actions: "video_p25_watched_actions";
        video_p50_watched_actions: "video_p50_watched_actions";
        video_p75_watched_actions: "video_p75_watched_actions";
        video_p95_watched_actions: "video_p95_watched_actions";
        video_play_actions: "video_play_actions";
        video_play_curve_actions: "video_play_curve_actions";
        video_play_retention_0_to_15s_actions: "video_play_retention_0_to_15s_actions";
        video_play_retention_20_to_60s_actions: "video_play_retention_20_to_60s_actions";
        video_play_retention_graph_actions: "video_play_retention_graph_actions";
        video_thruplay_watched_actions: "video_thruplay_watched_actions";
        video_time_watched_actions: "video_time_watched_actions";
        website_ctr: "website_ctr";
        website_purchase_roas: "website_purchase_roas";
        wish_bid: "wish_bid";
    }>;
    static get ActionAttributionWindows(): Readonly<{
        value_1d_click: "1d_click";
        value_1d_ev: "1d_ev";
        value_1d_view: "1d_view";
        value_28d_click: "28d_click";
        value_28d_view: "28d_view";
        value_28d_view_all_conversions: "28d_view_all_conversions";
        value_28d_view_first_conversion: "28d_view_first_conversion";
        value_7d_click: "7d_click";
        value_7d_view: "7d_view";
        value_7d_view_all_conversions: "7d_view_all_conversions";
        value_7d_view_first_conversion: "7d_view_first_conversion";
        dda: "dda";
        default: "default";
        skan_click: "skan_click";
        skan_view: "skan_view";
    }>;
    static get ActionBreakdowns(): Readonly<{
        action_canvas_component_name: "action_canvas_component_name";
        action_carousel_card_id: "action_carousel_card_id";
        action_carousel_card_name: "action_carousel_card_name";
        action_destination: "action_destination";
        action_device: "action_device";
        action_reaction: "action_reaction";
        action_target_id: "action_target_id";
        action_type: "action_type";
        action_video_sound: "action_video_sound";
        action_video_type: "action_video_type";
        conversion_destination: "conversion_destination";
        matched_persona_id: "matched_persona_id";
        matched_persona_name: "matched_persona_name";
        signal_source_bucket: "signal_source_bucket";
        standard_event_content_type: "standard_event_content_type";
    }>;
    static get ActionReportTime(): Readonly<{
        conversion: "conversion";
        impression: "impression";
        mixed: "mixed";
    }>;
    static get Breakdowns(): Readonly<{
        ad_format_asset: "ad_format_asset";
        age: "age";
        app_id: "app_id";
        body_asset: "body_asset";
        call_to_action_asset: "call_to_action_asset";
        coarse_conversion_value: "coarse_conversion_value";
        conversion_destination: "conversion_destination";
        country: "country";
        description_asset: "description_asset";
        device_platform: "device_platform";
        dma: "dma";
        fidelity_type: "fidelity_type";
        frequency_value: "frequency_value";
        gender: "gender";
        hourly_stats_aggregated_by_advertiser_time_zone: "hourly_stats_aggregated_by_advertiser_time_zone";
        hourly_stats_aggregated_by_audience_time_zone: "hourly_stats_aggregated_by_audience_time_zone";
        hsid: "hsid";
        image_asset: "image_asset";
        impression_device: "impression_device";
        is_conversion_id_modeled: "is_conversion_id_modeled";
        landing_destination: "landing_destination";
        link_url_asset: "link_url_asset";
        marketing_messages_btn_name: "marketing_messages_btn_name";
        mdsa_landing_destination: "mdsa_landing_destination";
        media_asset_url: "media_asset_url";
        media_creator: "media_creator";
        media_destination_url: "media_destination_url";
        media_format: "media_format";
        media_origin_url: "media_origin_url";
        media_text_content: "media_text_content";
        mmm: "mmm";
        place_page_id: "place_page_id";
        platform_position: "platform_position";
        postback_sequence_index: "postback_sequence_index";
        product_id: "product_id";
        publisher_platform: "publisher_platform";
        redownload: "redownload";
        region: "region";
        signal_source_bucket: "signal_source_bucket";
        skan_campaign_id: "skan_campaign_id";
        skan_conversion_id: "skan_conversion_id";
        skan_version: "skan_version";
        standard_event_content_type: "standard_event_content_type";
        title_asset: "title_asset";
        user_persona_id: "user_persona_id";
        user_persona_name: "user_persona_name";
        video_asset: "video_asset";
    }>;
    static get DatePreset(): Readonly<{
        data_maximum: "data_maximum";
        last_14d: "last_14d";
        last_28d: "last_28d";
        last_30d: "last_30d";
        last_3d: "last_3d";
        last_7d: "last_7d";
        last_90d: "last_90d";
        last_month: "last_month";
        last_quarter: "last_quarter";
        last_week_mon_sun: "last_week_mon_sun";
        last_week_sun_sat: "last_week_sun_sat";
        last_year: "last_year";
        maximum: "maximum";
        this_month: "this_month";
        this_quarter: "this_quarter";
        this_week_mon_today: "this_week_mon_today";
        this_week_sun_today: "this_week_sun_today";
        this_year: "this_year";
        today: "today";
        yesterday: "yesterday";
    }>;
    static get Level(): Readonly<{
        account: "account";
        ad: "ad";
        adset: "adset";
        campaign: "campaign";
    }>;
    static get SummaryActionBreakdowns(): Readonly<{
        action_canvas_component_name: "action_canvas_component_name";
        action_carousel_card_id: "action_carousel_card_id";
        action_carousel_card_name: "action_carousel_card_name";
        action_destination: "action_destination";
        action_device: "action_device";
        action_reaction: "action_reaction";
        action_target_id: "action_target_id";
        action_type: "action_type";
        action_video_sound: "action_video_sound";
        action_video_type: "action_video_type";
        conversion_destination: "conversion_destination";
        matched_persona_id: "matched_persona_id";
        matched_persona_name: "matched_persona_name";
        signal_source_bucket: "signal_source_bucket";
        standard_event_content_type: "standard_event_content_type";
    }>;
}
