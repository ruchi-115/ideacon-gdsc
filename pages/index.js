import Image from 'next/image'
import { useUser } from '@auth0/nextjs-auth0'
import { MongoClient } from 'mongodb';
import Navbar from '../components/ui/Navbar';
import PostList from '../components/PostList';
import hero from "../public/hero.png"

export default function Home(props) {
  const { user, isLoading, error } = useUser()

  if (isLoading) return <p>Loading...</p>

  if (error) return <p>Error: {error.message}</p>

  if (user) {
    return (
      <>
        <nav class="bg-gray-800">
          <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div class="relative flex items-center justify-between h-16">
              <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">

                <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">

                  <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>

                  <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div class="flex-shrink-0 flex items-center">
                  <img class="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=500" alt="Workflow" />
                  <img class="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=500" alt="Workflow" />
                  <a href="/new-post" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium">IDEACON</a>
                </div>
                <div class="hidden sm:block sm:ml-6">
                  <div class="flex space-x-4">
                    <a href="/" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Home</a>
                    <a href="/new-post" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">New Post</a>

                  </div>
                </div>
              </div>
              <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold">{user.name}</a>
                <div class="ml-3 relative">
                  <div>
                    <button type="button" class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                      <img class="h-8 w-8 rounded-full" src={user.picture} referrerpolicy="no-referrer" alt="" />
                    </button>
                  </div>

                </div>
                <a href="/api/auth/logout" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium mx-3" >Logout</a>
              </div>
            </div>
          </div>
          <div class="sm:hidden" id="mobile-menu">
            <div class="px-2 pt-2 pb-3 space-y-1">
              {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
              <a href="/" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Home</a>

              <a href="/new-post" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Add New Post</a>
            </div>
          </div>
        </nav>
        <div class="w-full bg-gradient-to-r from-indigo-500 h-[30vh] flex justify-start items-center pl-5">
          <h1 class="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-3xl xl:text-5xl p-3">Welcome, {user.name}</h1>
        </div>

        {/* Posts section */}
        <PostList events={props.events} />
      </>
    )
  }
  return <>
    {/* Home Page */}
    <Navbar />
    <section class="bg-white dark:bg-gray-900">
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">IDEACON</h1>
          <p class="max-w-2xl mb-6 font-medium text-gray-500 lg:mb-8 md:text-lg lg:text-3xl dark:text-gray-300">Global Idea Sharing Platform, <br /><span class="font-bold text-3xl text-white">where great minds meet!</span></p>
          <a href="/api/auth/login" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
            Get started
            <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </a>
          <a href="/api/auth/login" class="inline-flex items-center justify-center bg-gray-600 px-5 py-3 text-base font-medium text-center text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
            Sign Up
          </a>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image
            src={hero}
            alt="hero-img"
            width="600px"
            height="600px"
          />
        </div>
      </div>
    </section>

  </>
}

export async function getStaticProps(context) {
  //fetch data of all events from API
  const client = await MongoClient.connect('mongodb+srv://ideacon:next-12345@cluster0.ifz0crw.mongodb.net/?retryWrites=true&w=majority');
  const db = client.db();

  const ideaCollection = db.collection('new-posts');

  const events = await ideaCollection.find().toArray();
  // const event = JSON.stringify(events);

  client.close();

  return {
    props: {
      events: events.map((event) => ({
        id: event._id.toString(),
        title: event.title,
        image: event.image || null,
        mindmap: event.mindmap,
        description: event.description,
        category: event.category,
        user: event.user,
        nickname: event.nickname,
        picture: event.picture,
      })),
    }
  }
}
