import {Title, Container, Description, Button} from '../../styles/singlePageStyles'
import MainLayout from "../../layouts/MainLayout";
import axios from "axios";
import Router from "next/router";
import {MyPost} from "../../interfaces/page";
import {NextPageContext} from "next";

interface PostMyPageProps { post: MyPost }


export default function PostPage({post}: PostMyPageProps) {

    return (
        <MainLayout title={post.title}>
            <Container>
                <Title>{post.title}</Title>
                <hr/>
                <Description>{post.body}</Description>
                <Button onClick={() => Router.push('/')}>Go to all posts</Button>
            </Container>
        </MainLayout>
    )
}

interface PostNextPageContext extends NextPageContext {
    query: { id: string }
}


PostPage.getInitialProps = async ({query}: PostNextPageContext) => {

    const {data : post }  = await axios(`${process.env.API_URL}/posts/${query.id}`)

    return { post }
};
