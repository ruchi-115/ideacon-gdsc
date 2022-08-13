import React from 'react';
import ReactStars from 'react-stars'

function PostItem(props) {
    const [stars, setStars] = React.useState(0);
    const ratingChanged = (newRating) => {
        return setStars(newRating);
    }
    return (
        <>
            <div className="rounded overflow-hidden border w-full lg:w-4/12 md:w-6/12 bg-white mx-3 md:mx-0 lg:mx-0 shadow-2xl">
                <div className="w-full flex justify-between p-3">
                    <div className="flex">
                        <div className="rounded-full h-8 w-8 bg-gray-500 flex items-center justify-center overflow-hidden">
                            <img src={props.picture} alt="profilepic" />
                        </div>
                        <span className="pt-1 ml-2 font-bold text-sm">{props.user}</span>
                    </div>
                    <span className="px-2 hover:bg-gray-300 cursor-pointer rounded"><i className="fas fa-ellipsis-h pt-2 text-lg"></i></span>
                    <button className="text-sm mb-2 text-white bg-blue-900 font-medium p-2 rounded-lg">{props.category}</button>
                </div>
                <img className="w-full bg-cover" src={props.image} />
                <div className="px-3 pb-2">
                    <div className="pt-2 pl-2 flex items-center justify-start">
                        <ReactStars
                            count={5}
                            size={24}
                            onChange={ratingChanged}
                            color2={'#ffd700'} />
                        <span className="text-sm text-gray-400 font-medium p-1">{stars}</span>
                    </div>
                    <div className="pt-1">
                        <div className="mb-1 text-sm">
                            <span className="font-base text-lg mr-2">{props.nickname}</span><span className="font-bold text-xl" >{props.title}</span>
                        </div>
                        <div className="mb-2 text-md">
                            <span className="font-medium mr-2">{props.description}</span>
                        </div>
                    </div>
                    <div className="text-md mb-2 text-blue-900 cursor-pointer font-medium">Mind Map: <a href={props.mindmap}>{props.mindmap}</a></div>
                </div>
            </div>
        </>
    );
}

export default PostItem;