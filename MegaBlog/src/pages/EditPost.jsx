import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import storageService from "../appwrite/storageService";
import Container from "../components/Container";
import PostForm from "../components/PostForm";

function EditPost(){

    const [post, setPost] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()
    
    useEffect(() => {
        if (slug){
            storageService.getDocument(slug)
            .then(
                (post) => {
                    if (post)
                    setPost(post)
                }
            )
        }
        else {
            navigate('/')
        }
    }, [slug, navigate])

    return posts ? (<div className="py-8">
            <Container>
                <PostForm post={post} /> 
            </Container> 
            </div>) : null

}

export default EditPost