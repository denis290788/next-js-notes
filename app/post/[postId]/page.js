import Post from '@/app/components/Post';

export async function generateMetadata({ params, searchParams }) {
    const post = await fetchData(params.postId);
    return {
        title: 'Статья ' + post.title,
        description: post.body,
    };
}

async function fetchData(id) {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
    const result = await res.json();
    return result;
}

export async function generateStaticParams() {
    // Получаем список всех постов
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();

    // Возвращаем массив объектов с параметром `postId`
    return posts.map((post) => ({
        postId: post.id.toString(),
    }));
}

const PagePost = async ({ params: { postId } }) => {
    const post = await fetchData(postId);

    return (
        <div className="post">
            <Post post={post} />
        </div>
    );
};

export default PagePost;
