import PostItem from './PostItem';
// import classes from './PostList.module.css';
import React from 'react';

function PostList(props) {
    return (
        <section>
            <h1 className="w-full text-3xl font-bold md:text-xl xl:text-3xl p-5">Explore Ideas</h1>
            <ul className="flex justify-evenly items-center flex-wrap gap-5 mb-8 rounded-lg">
                {props.events.map((post) => (
                    <PostItem
                        key={post.id}
                        id={post.id}
                        image={post.image}
                        title={post.title}
                        description={post.description}
                        nickname={post.nickname}
                        picture={post.picture}
                        mindmap={post.mindmap}
                        category={post.category}
                        user={post.user}
                    />
                ))}
            </ul>
        </section>
    );
}

export default PostList;