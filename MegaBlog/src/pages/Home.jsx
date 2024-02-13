import { useEffect, useState } from "react";
import storageService from "../appwrite/storageService";
import Container from "../components/Container";
import PostCard from "../components/PostCard";

function Home(){
    const [posts, setPosts] = useState([])

    useEffect(() => {
        storageService.listDocuments([])
        .then((posts) => {
            if (posts){
                setPosts(posts)
            }
        })
    }, [])

    if (!posts){
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    return (
        <div className="w-full py-8">
            <h1>Your blogs</h1>
            <Container>
                <div className="flex flex-wrap">
                    {posts.map((post) => {
                        <div key={post.$id} className="p-2 w-1/4">
                            <PostCard post={post} />
                        </div>
                    }, [])}
                </div>
            </Container>
        </div>
    )
}