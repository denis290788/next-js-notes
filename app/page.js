import Link from 'next/link';

async function fetchData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const result = await res.json();
    return result;
}

export default async function Home() {
    const posts = await fetchData();

    return (
        <div>
            <h1>Главная страница</h1>
            {posts.map((post) => (
                <div className="post" key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <Link href={`/post/${post.id}`}>Подробнее</Link>
                </div>
            ))}
        </div>
    );
}
