import React from 'react';
import ReactStars from 'react-stars'

function PostItem(props) {
    const [stars, setStars] = React.useState(0);
    const ratingChanged = (newRating) => {
        return setStars(newRating);
    }
    return (
        <>
            <div class="rounded overflow-hidden border w-full lg:w-4/12 md:w-6/12 bg-white mx-3 md:mx-0 lg:mx-0 shadow-2xl">
                <div class="w-full flex justify-between p-3">
                    <div class="flex">
                        <div class="rounded-full h-8 w-8 bg-gray-500 flex items-center justify-center overflow-hidden">
                            <img src={props.picture} alt="profilepic" />
                        </div>
                        <span class="pt-1 ml-2 font-bold text-sm">{props.user}</span>
                    </div>
                    <span class="px-2 hover:bg-gray-300 cursor-pointer rounded"><i class="fas fa-ellipsis-h pt-2 text-lg"></i></span>
                    <button class="text-sm mb-2 text-white bg-blue-900 font-medium p-2 rounded-lg">{props.category}</button>
                </div>
                <img class="w-full bg-cover" src={props.image} />
                <div class="px-3 pb-2">
                    <div class="pt-2 pl-2 flex items-center justify-start">
                        <ReactStars
                            count={5}
                            size={24}
                            onChange={ratingChanged}
                            color2={'#ffd700'} />
                        <span class="text-sm text-gray-400 font-medium p-1">{stars}</span>
                    </div>
                    <div class="pt-1">
                        <div class="mb-1 text-sm">
                            <span class="font-base text-lg mr-2">{props.nickname}</span><span class="font-bold text-xl" >{props.title}</span>
                        </div>
                        <div class="mb-2 text-md">
                            <span class="font-medium mr-2">{props.description}</span>
                        </div>
                    </div>
                    <div class="text-md mb-2 text-blue-900 cursor-pointer font-medium">Mind Map: <a href={props.mindmap}>{props.mindmap}</a></div>
                </div>
            </div>
        </>
    );
}

export default PostItem;