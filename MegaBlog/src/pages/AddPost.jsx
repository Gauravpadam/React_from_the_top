import Container from '../components/Container'
import { PostForm as PostSubmissionPage } from '../components/PostForm'

function AddPost(){
    return (
    <div className='py-8'>
        <Container>
            <PostSubmissionPage />
        </Container>
    </div>
    )
}

export default AddPost