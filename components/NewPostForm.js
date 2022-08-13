import { useRef } from 'react';
// import Card from '../ui/Card';
import classes from './NewPostForm.module.css';
import { useUser } from '@auth0/nextjs-auth0'

function NewPostForm(props) {
    const titleInputRef = useRef();
    const descriptionInputRef = useRef();
    const imageInputRef = useRef();
    const mindMapInputRef = useRef();
    const category = useRef();
    const user = useUser();

    function submitHandler(event) {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;
        const enteredMindMap = mindMapInputRef.current.value;
        const enteredCategory = category.current.value;
        const enteredUser = user.user.name;
        const enteredNickname = user.user.nickname;
        const enteredPicture = user.user.picture;
        const enteredEmail = user.user.email;


        const PostData = {
            title: enteredTitle,
            image: enteredImage,
            mindmap: enteredMindMap,
            description: enteredDescription,
            category: enteredCategory,
            user: enteredUser,
            nickname: enteredNickname,
            picture: enteredPicture,
            email: enteredEmail
        };

        props.onAddPost(PostData);
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <h3 class="text-xl font-bold">Create New Post</h3>
            <div className={classes.control}>
                <label htmlFor='title'>Title</label>
                <input type='text' required id='title' ref={titleInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='description'>Description</label>
                <textarea
                    id='description'
                    required
                    rows='5'
                    ref={descriptionInputRef}
                ></textarea>
            </div>
            <div className={classes.control}>
                <label htmlFor='Mind Map'>Mind Map Link</label>
                <input type='text' required id='address' ref={mindMapInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='category'>Category</label>
                <select name="cars" id="category" ref={category} >
                    <option value="Technology">Technology</option>
                    <option value="Environment">Environment</option>
                    <option value="Startup">Startup</option>
                    <option value="Food">Food</option>
                    <option value="Random">Other</option>
                </select>
            </div>
            <div className={classes.control}>
                <label htmlFor='image'>Image(optional)</label>
                <input type='url' required id='image' ref={imageInputRef} />
            </div>
            <div className={classes.actions}>
                <button>Add Post</button>
            </div>
        </form>
    );
}

export default NewPostForm;