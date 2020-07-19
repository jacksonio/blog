import MainLayout from "../layouts/MainLayout";
import {Container} from "../styles/createStyles";
import axios from 'axios';
import {useState} from "react";
import Router from "next/router";

export default function CreatePost() {

    const initialState = {
        title: '',
        body: ''
    }

    const [ createState, setPostState] = useState(initialState)

    const handleTitleChange = (e) => {
        e.persist()
        setPostState((state) => ({ ...state, title: e.target.value }))
    }
    const handleBodyChange = (e) => {
        e.persist()
        setPostState((state) =>({...state, body: e.target.value}))
    }

    const SendData = (e) => {
        e.preventDefault()
        axios.post(`${process.env.API_URL}/posts`, {
            title: createState.title,
            body: createState.body
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        Router.push('/')
    }

    return (
        <MainLayout title={'Create new post'}>
            <Container>
                <form>
                    <div className="form-group">
                        <label htmlFor="FormTitle">Name your article</label>
                        <input type="text" onChange={handleTitleChange} className="form-control" id="FormTitle"
                               placeholder="Post title" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="TextBody">Your message to society</label>
                        <textarea className="form-control" onChange={handleBodyChange} id="TextBody" rows={10} />
                    </div>
                    <button type="submit" onClick={SendData} className="btn btn-primary">Send post</button>
                </form>
            </Container>

        </MainLayout>
    )
}
