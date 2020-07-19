import MainLayout from "../layouts/MainLayout";
import axios from 'axios';
import {useEffect, useState} from "react";
import Link from "next/link";
import {Title} from "../styles/mainPageStyles";

export default function Posts({posts: serverPosts} ) {

    const [posts, setPosts] = useState(serverPosts);


    useEffect(() => {
        async function load() {
            const posts = await axios.get(`${process.env.API_URL}/posts`).then(response => response.data);

            setPosts(posts);
        }

        if(!serverPosts) {
            load()
        }
    }, [])

    if(!posts) {
        return (
            <MainLayout>
                <div>Loading...</div>
            </MainLayout>
        )
    }

    return (
        <MainLayout>
            <Title>Posts page</Title>
            <ul className='list-group'>
                {posts.map(post => (
                    (post.title && post.body)
                        ? <li className='list-group-item' key={post.id}>
                            <Link href={`/posts/[id]`} as={`/posts/${post.id}`}>
                                <a>{post.title}</a>
                            </Link>
                          </li>
                        : null
                ))}
            </ul>
        </MainLayout>
    )
}

Posts.getInitialProps = async ({ req }) => {

    if(!req) {
        return { posts: null }
    }

    const posts = await axios(`${process.env.API_URL}/posts`)
        .then(res => res.data);


    return {
        posts
    }
}
