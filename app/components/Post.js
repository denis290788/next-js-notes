import Link from 'next/link';
const Post = ({ post }) => {
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <strong>Author ID: {post.userId}</strong>
            <br />
            <Link href="/">Назад</Link>
        </div>
    );
};

export default Post;
