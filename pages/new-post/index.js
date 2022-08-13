// our-domain.com/new-event
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import Head from 'next/head';
import { Fragment } from 'react';
import { useRouter } from 'next/router';
import NewPostForm from '../../components/NewPostForm';
import Navbar from '../../components/ui/Navbar';
function NewEventPage() {

    const router = useRouter();

    async function addPostHandler(PostData) {
        const response = await fetch('/api/new-post', {
            method: 'POST',
            body: JSON.stringify(PostData),
            headers: {
                'Content-type': 'application/json'
            }
        });

        const data = await response.json();

        console.log(data);

        router.push('/');
    }
    return (
        <Fragment>
            <Navbar />
            <Head>
                <title>Add New Post</title>
                <meta name="description"
                    content="Add your own events and create amazing networking oppurtunities."
                />
            </Head>
            <NewPostForm onAddPost={addPostHandler} />
        </Fragment>
    )
}

export default NewEventPage;
export const getServerSideProps = withPageAuthRequired();