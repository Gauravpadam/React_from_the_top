import { useNavigate } from "react-router-dom";
import storageService from "../appwrite/storageService";
import { useEffect, useState } from "react";
import Container from "../components/Container";
import PostCard from "../components/PostCard";

function AllPosts(){
    const [posts, setPosts] = useState([])

    useEffect(() => {
        storageService.listDocuments()
        .then((posts) => {
            if (posts){
                setPosts(posts.documents)
            }
        })
    }, [])

    return (
        <div className="w-full py-8">
            <Container>
            <div className="flex flex-wrap">
                {posts && posts.map((post) => {
                    <div key={post.$id} className="p-2 w-1/4">
                        <PostCard post={post} />
                    </div>
                })}
            </div>
            </Container>
        </div>
    )


}

export default AllPosts