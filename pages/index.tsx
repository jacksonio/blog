import MainLayout from '../layouts/MainLayout';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Title } from '../styles/mainPageStyles';
import { SinglePost } from '../interfaces/page';
import { NextPageContext } from 'next';
import { API_URL } from '../variables/variables';

interface PostsPageProps {
    posts: SinglePost[];
}

export default function Posts({ posts: serverPosts }: PostsPageProps) {
    const [posts, setPosts] = useState(serverPosts);

    useEffect(() => {
        async function load() {
            const posts = await axios.get(`${API_URL}/posts`).then((response) => response.data);

            setPosts(posts);
        }

        if (!serverPosts) {
            load();
        }
    }, []);

    if (!posts) {
        return (
            <MainLayout>
                <div>Loading...</div>
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <Title>Posts page</Title>
            <ul className="list-group">
                {posts.map((post) =>
                    post.title && post.body ? (
                        <li className="list-group-item" key={post.id}>
                            <Link href={`/posts/[id]`} as={`/posts/${post.id}`}>
                                <a>{post.title}</a>
                            </Link>
                        </li>
                    ) : null,
                )}
            </ul>
        </MainLayout>
    );
}

Posts.getInitialProps = async ({ req }: NextPageContext) => {
    if (!req) {
        return { posts: null };
    }

    const posts = await axios(`${API_URL}/posts`).then((res) => res.data);

    return {
        posts,
    };
};
