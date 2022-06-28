import { ImagePost, Post, PostType, TextPost } from "../../models/Post"

export class PostBodyFactory {
    createPostBody = (post: Post): React.ReactNode => {
        switch (post.type) {
            case PostType.image:
                return this.createImageBody(post);
            case PostType.text:
                return this.createTextBody(post);
            default: 
                throw new Error('Invalid post type')
        }
    }

    private createImageBody = (post: ImagePost): React.ReactNode => {
        return <img src={post.body.image} alt="" />
    }

    private createTextBody = (post: TextPost): React.ReactNode => {
        return (<p className='description'>
                    {this.replacesNewLines(post.body.description)}
                </p>) 
    }

    private replacesNewLines = (text: string) => {
        return text.split('\n').map((line, i) => (
            <span key={i}>
                {line}
                <br/>
            </span>
        ))
    }
}

export const postBodyFactory = new PostBodyFactory();