import React, { useState } from 'react';
import Dropdown from '@/Components/Dropdown';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { usePage, useForm, Link } from '@inertiajs/inertia-react';
import useSwal from '@/Hooks/useSwal';

export default function Tag({ tag }) {
    const { auth } = usePage().props;

    const [editing, setEditing] = useState(false);

    const { data, setData, patch, clearErrors, reset, errors } = useForm({
        name: tag.name,
    });

    const { ask } = useSwal();

    const submit = (e) => {
        e.preventDefault();
        patch(route('tags.update', tag.slug), {
            onSuccess: () => setEditing(false),
        });
    };

    return (
        <div className='p-6 flex space-x-2'>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 text-gray-600 -scale-x-100'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
            >
                <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
                />
            </svg>
            <div className='flex-1'>
                <div className='flex justify-between items-center'>
                    <div>
                        {/*<span className="text-gray-800">{chirp.user.name}</span>*/}
                        <small className='ml-2 text-sm text-gray-600'>
                            {new Date(tag.created_at).toLocaleString()}
                        </small>
                        {tag.created_at !== tag.updated_at && (
                            <small className='text-sm text-gray-600'>
                                {' '}
                                &middot; edited
                            </small>
                        )}
                    </div>
                    {auth.user && auth.user.isAdmin && (
                        <Dropdown>
                            <Dropdown.Trigger>
                                <button>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        className='h-4 w-4 text-gray-400'
                                        viewBox='0 0 20 20'
                                        fill='currentColor'
                                    >
                                        <path d='M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z' />
                                    </svg>
                                </button>
                            </Dropdown.Trigger>
                            <Dropdown.Content>
                                <button
                                    className='block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 transition duration-150 ease-in-out'
                                    onClick={() => setEditing(true)}
                                >
                                    Edit
                                </button>
                                <Link
                                    onClick={() => {
                                        ask({
                                            url: route(
                                                'tags.destroy',
                                                tag.slug
                                            ),
                                            method: 'delete',
                                            message:
                                                'Are you sure you want to delete this tag? This action cannot be undone. All posts with this tag will be untagged.',
                                        });
                                    }}
                                >
                                    <button
                                        className={`block w-full px-4 py-2 text-left text-sm leading-5 text-red-700 hover:bg-red-100 focus:bg-red-100 transition duration-150 ease-in-out`}
                                    >
                                        Delete
                                    </button>
                                </Link>
                            </Dropdown.Content>
                        </Dropdown>
                    )}
                </div>
                {editing ? (
                    <form onSubmit={submit}>
                        <textarea
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            className='mt-4 w-full text-gray-900 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm'
                        ></textarea>
                        <InputError message={errors.name} class='mt-2' />
                        <div className='space-x-2'>
                            <PrimaryButton className='mt-4'>Save</PrimaryButton>
                            <button
                                className='mt-4'
                                onClick={() => {
                                    setEditing(false);
                                    reset();
                                    clearErrors();
                                }}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                ) : (
                    <p className='mt-4 text-lg text-gray-900'>{tag.name}</p>
                )}
            </div>
        </div>
    );
}
