interface _Post {
    id: string;
    type: PostType;
    upvoteCount: number;
    title: string;
    subreddit: PostSubreddit;
    postedBy: { username: string, profileLink: string };
    createdAt: Date;
    postMethod: 'normal' | 'crosspost';
    upvoted: boolean;
    downvoted: boolean;
    commentCount: number;
    body: any;
    link: string;
}

export enum PostType {
    image = 'image',
    text = 'text'
}

export interface ImagePost extends _Post {
    type: PostType.image;
    body: {
        image: string;
    }
}

export interface TextPost extends _Post{
    type: PostType.text;
    body: {
        description: string;
    }
}

interface PostSubreddit {
    name: string; 
    image: string; 
    link: string;
}

export type Post = ImagePost | TextPost;

// 