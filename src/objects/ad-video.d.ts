import { AbstractCrudObject } from "../abstract-crud-object";
import Cursor from "../cursor";
import FacebookAdsBatchApi from "../api-batch";
import type { SlideshowSpec } from "../video-uploader";
/**
 * AdVideo
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdVideo extends AbstractCrudObject {
    static get Fields(): Readonly<{
        ad_breaks: "ad_breaks";
        backdated_time: "backdated_time";
        backdated_time_granularity: "backdated_time_granularity";
        content_category: "content_category";
        content_tags: "content_tags";
        created_time: "created_time";
        custom_labels: "custom_labels";
        description: "description";
        embed_html: "embed_html";
        embeddable: "embeddable";
        event: "event";
        format: "format";
        from: "from";
        icon: "icon";
        is_crosspost_video: "is_crosspost_video";
        is_crossposting_eligible: "is_crossposting_eligible";
        is_episode: "is_episode";
        is_instagram_eligible: "is_instagram_eligible";
        length: "length";
        live_status: "live_status";
        permalink_url: "permalink_url";
        place: "place";
        post_id: "post_id";
        post_views: "post_views";
        premiere_living_room_status: "premiere_living_room_status";
        privacy: "privacy";
        published: "published";
        scheduled_publish_time: "scheduled_publish_time";
        source: "source";
        status: "status";
        title: "title";
        universal_video_id: "universal_video_id";
        updated_time: "updated_time";
        views: "views";
    }>;
    get filepath(): string;
    get slideshow_spec(): SlideshowSpec | null | undefined;
    /**
     * Uploads filepath and creates the AdVideo object from it.
     * It requires 'filepath' property to be defined.
     **/
    create(batch: FacebookAdsBatchApi, failureHandler: (...args: any[]) => any, successHandler: (...args: any[]) => any): any;
    waitUntilEncodingReady(interval?: number, timeout?: number): void;
    /**
     *  Returns all the thumbnails associated with the ad video
     */
    getThumbnails(fields: Record<string, any>, params: Record<string, any>): Cursor | Promise<Cursor>;
}
