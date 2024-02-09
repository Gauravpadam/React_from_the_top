import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from "../Button";
import Input from "../Input";
import Select from "../Select"
import RTE from "../RTE/RTE";
import storageService from "../../appwrite/storageService";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PostForm({post}){
    const {register, handleSubmit, watch, setValue, control, getValues} = useForm({
        defaultValues: {
            title: post?.title || '',
            slug: post?.slug || '',
            content: post?.content || '',
            status: post?.status || 'active',
        },
    })

    const navigate = useNavigate()
    const UserData = useSelector(state => state.user.UserData)

    const submit = async (data) => {
        if (post) {
            const file = data.image[0] ? storageService.uploadFile(data.image[0]) : null

            if (file) {
                storageService.deleteFile(post.featuredImage)
            }

            const dbPost = await storageService.updateDocument(post.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined,
            })

            if (dbPost) navigate(`/post/${dbPost.$id}`)
        }
        else {
            const file = await storageService.uploadFile(data.image[0])

            if (file) {
                const fileId = file.$id
                data.featuredImage = fileId
                const dbPost = await storageService.createDocument({
                    ...data,
                    userId: UserData.$id,
                })

                if (dbPost){
                    navigate(`/post/${dbPost.id}`)
                }
            }
        }
    }

    const slugTransform = useCallback((value) => {
        let ret = ''
        typeof(value) === 'string' ? 
        ret = value.trim().toLowerCase().replace(/\s/g, '-') : ret = ''

        return ret
    }, [])

    useEffect(() => {

        const subscription = watch((value, {name}) => {
            if (name === 'title'){
                setValue('slug', slugTransform(value.title, {shouldValidate: true}))
            }
        })

        return () => {
            subscription.unsubscribe()
        }

    } , [watch, ])
    return(
        <form onSubmit={submit} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                type="text"
                label="Title: "
                placeholder="Enter title"
                className="mb-4"
                {...register("title", {
                    required: true,
                })}
                />
                <Input
                type="text"
                label="Slug: "
                placeholder="Slug will appear here"
                className="mb-4"
                {...register("slug", {
                    required: true
                })}
                onInput={(e) => {
                    setValue("slug", e.currentTarget.value, {shouldValidate: true})
                }}
                />
                <RTE label="Content: " name="content" control={control} defaultValue={getValues("content")}/>
            </div>
            <div className="w-1/3 px-2">
                <Input
                type="file"
                label="Featured Image: "
                className="mb-4"
                accept="image/png, image/jpg, image/jpeg, image/gif"
                {...register("image", {
                    required: !post
                })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                        src={storageService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]} // Set a state of active/inactive for article
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit"  bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    { post ? "Update Post" : "Create Post"}
                </Button>
            </div>
        </form>
    )
}

export default PostForm