
export interface WordPressPost {
  id: number;
  date: string;
  date_gmt: string;
  guid: { rendered: string };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: any[];
  categories: number[];
  tags: number[];
  yoast_head?: string;
  _embedded?: {
    author: [{
      id: number;
      name: string;
      url: string;
      description: string;
      avatar_urls: {
        [key: string]: string;
      };
    }];
    'wp:featuredmedia'?: [{
      id: number;
      date: string;
      slug: string;
      type: string;
      link: string;
      title: { rendered: string };
      author: number;
      caption: { rendered: string };
      alt_text: string;
      media_type: string;
      mime_type: string;
      media_details: {
        width: number;
        height: number;
        file: string;
        sizes: {
          [key: string]: {
            file: string;
            width: number;
            height: number;
            mime_type: string;
            source_url: string;
          };
        };
      };
      source_url: string;
    }];
  };
}

export interface WordPressCategory {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  parent: number;
}

const WP_BASE_URL = 'https://lucoder.org/wp-json/wp/v2';

export const wordpressApi = {
  async getPosts(params?: {
    page?: number;
    per_page?: number;
    categories?: string;
    search?: string;
  }) {
    const searchParams = new URLSearchParams();
    searchParams.append('_embed', 'true');
    
    if (params?.page) searchParams.append('page', params.page.toString());
    if (params?.per_page) searchParams.append('per_page', params.per_page.toString());
    if (params?.categories) searchParams.append('categories', params.categories);
    if (params?.search) searchParams.append('search', params.search);

    const response = await fetch(`${WP_BASE_URL}/posts?${searchParams}`);
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    return response.json() as Promise<WordPressPost[]>;
  },

  async getPostBySlug(slug: string) {
    const response = await fetch(`${WP_BASE_URL}/posts?slug=${slug}&_embed=true`);
    if (!response.ok) {
      throw new Error('Failed to fetch post');
    }
    const posts = await response.json() as WordPressPost[];
    return posts[0] || null;
  },

  async getCategories() {
    const response = await fetch(`${WP_BASE_URL}/categories`);
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }
    return response.json() as Promise<WordPressCategory[]>;
  }
};
