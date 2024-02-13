import { useEffect, useState } from "react";
import storageService from "../appwrite/storageService";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Container from "../components/Container";
import Button from "../components/Button";


function Post(){

    const navigate = useNavigate()
    const {slug} = useParams()

    const userData = useSelector(state => state.auth.userData)

    const isAuthor = post && userData ? post.userId === userData.$id : false

    const [post, setPost] = useState(null)

    useEffect(() => {
        if (slug){

            storageService.getDocument(slug)
            .then((post) => {
                if (post){
                    setPost(post)
                }
                else navigate("/");
            })

        } else navigate("/");
    }, [slug, navigate])

    const deletePost = () => {
        storageService.deleteDocument(post.$id)
        .then((status) => {
            if (status){
                storageService.deleteFile(post.featuredImage)
                navigate("/")
            }
        })
    }

    return post ? (
        <div className="py-8">
            <Container>
                <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                    <img src={storageService.getFilePreview(post.featuredImage)}
                     alt = {post.title}
                     className="rounded-xl"
                    />

                    {/* Only Authors can edit/delete posts */}

                    {isAuthor && (
                    <div className="absolute right-6 top-6">
                    <Link to={`/edit-post/${post.$id}`}>
                        <Button type="button" bgColor="bg-green-500" className="mr-3">Edit Post</Button>
                    </Link>
                    <Button type="button" className="bg-red-500" onClick={deletePost}>Delete Post</Button>
                    </div>
                    )}
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                </div>
                <div className="browser-css">
                    {JSON.parse(post.content)}
                </div>
            </Container>
        </div>

    ) : null


}

export default Post