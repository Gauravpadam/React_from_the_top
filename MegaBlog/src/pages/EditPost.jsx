import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import storageService from "../appwrite/storageService";

function EditPost(){

    const [posts, setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()
    
    useEffect(() => {
        if (slug){
            storageService.getDocument(slug)
            .then(
                (post) => {
                    if (post)
                    setPosts(post)
                }
            )
        }
        else {
            navigate('/')
        }
    }, [slug, navigate])

}

export default EditPost