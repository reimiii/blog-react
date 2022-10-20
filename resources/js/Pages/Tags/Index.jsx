import React from 'react';
import App from '@/Layouts/App';
import {Head, useForm} from '@inertiajs/inertia-react';
import Container from '@/Components/Container';
import PrimaryButton from "@/Components/PrimaryButton";
import InputError from "@/Components/InputError";
import Tag from "@/Components/Tag";
import Pagination from "@/Components/Pagination";

export default function Index({tags, auth}) {

    const {data, setData, post, processing, reset, errors} = useForm({
        name: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('tags.store'), {onSuccess: () => reset()});
    };
    return (
        <div>

            <Head title={'Tags'}/>

            <Container>
                {auth.user ? (
                    <>
                        {auth.user.isAdmin ? (
                            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                                <form onSubmit={submit}>
                    <textarea
                        value={data.name}
                        placeholder="Enter tags here"
                        className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                        onChange={e => setData('name', e.target.value)}
                    ></textarea>
                                    <InputError message={errors.name} className="mt-2"/>
                                    <PrimaryButton className="mt-4" disabled={processing}>Create</PrimaryButton>
                                </form>
                                <div className="mt-6 bg-white shadow-sm rounded-lg divide-y">
                                    {tags.map(tag =>
                                        <Tag tag={tag} key={tag.slug}/>
                                    )}
                                </div>
                            </div>
                        ) : (
                            <div className="mt-4 text-gray-700 text-center">
                                Not Found i'm sowwy oni-chwan (｡ì _ í｡)
                            </div>
                        )}
                    </>
                ) : (

                    <div className="mt-4 text-gray-700 text-center">
                        <p>
                            i'm sowwy oni-chan, 404 not found!! (｡ì _ í｡)
                        </p>
                    </div>
                )}
            </Container>
        </div>
    )
        ;
}

Index.layout = (page) =>
    <App children={page}/>
;
