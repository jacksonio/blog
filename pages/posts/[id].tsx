import { Title, Container, Description, Button } from '../../styles/singlePageStyles';
import MainLayout from '../../layouts/MainLayout';
import axios from 'axios';
import Router from 'next/router';
import { SinglePost } from '../../interfaces/page';
import { NextPageContext } from 'next';
import { API_URL } from '../../variables/variables';

interface PostMyPageProps {
    post: SinglePost;
}

export default function PostPage({ post }: PostMyPageProps) {
    return (
        <MainLayout title={post.title}>
            <Container>
                <Title>{post.title}</Title>
                <hr />
                <Description>{post.body}</Description>
                <Button onClick={() => Router.push('/')}>Go to all posts</Button>
            </Container>
        </MainLayout>
    );
}

interface PostNextPageContext extends NextPageContext {
    query: { id: string };
}

PostPage.getInitialProps = async ({ query }: PostNextPageContext) => {
    const { data: post } = await axios(`${API_URL}/posts/${query.id}`);

    return { post };
};
