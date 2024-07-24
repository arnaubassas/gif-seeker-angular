interface GifImage {
  height: string;
  width: string;
  size?: string;
  url: string;
  mp4_size?: string;
  mp4?: string;
  webp_size?: string;
  webp?: string;
  frames?: string;
  hash?: string;
}

interface GifImages {
  original: GifImage;
  downsized: GifImage;
  downsized_large: GifImage;
  downsized_medium: GifImage;
  downsized_small: GifImage;
  downsized_still: GifImage;
  fixed_height: GifImage;
  fixed_height_downsampled: GifImage;
  fixed_height_small: GifImage;
  fixed_height_small_still: GifImage;
  fixed_height_still: GifImage;
  fixed_width: GifImage;
  fixed_width_downsampled: GifImage;
  fixed_width_small: GifImage;
  fixed_width_small_still: GifImage;
  fixed_width_still: GifImage;
  looping: GifImage;
  original_still: GifImage;
  original_mp4: GifImage;
  preview: GifImage;
  preview_gif: GifImage;
  preview_webp: GifImage;
  hd: GifImage;
  '480w_still': GifImage;
}

interface User {
  avatar_url: string;
  banner_image: string;
  banner_url: string;
  profile_url: string;
  username: string;
  display_name: string;
  description: string;
  instagram_url: string;
  website_url: string;
  is_verified: boolean;
}

interface AnalyticsEvent {
  url: string;
}

interface Analytics {
  onload: AnalyticsEvent;
  onclick: AnalyticsEvent;
  onsent: AnalyticsEvent;
}

export interface Gif {
  type: string;
  id: string;
  url: string;
  slug: string;
  bitly_gif_url: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  title: string;
  rating: string;
  content_url: string;
  source_tld: string;
  source_post_url: string;
  is_sticker: number;
  import_datetime: string;
  trending_datetime: string;
  images: GifImages;
  user: User;
  analytics_response_payload: string;
  analytics: Analytics;
  alt_text: string;
}
