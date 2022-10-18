import React from 'react';
import App from '@/Layouts/App';
import {Head} from '@inertiajs/inertia-react';
import Container from "@/Components/Container";

export default function Dashboard({ auth }) {
    return (
        <div>
            <Head title="Dashboard"/>
            <Container>
                {/*<h1>Dashboard WIP</h1>*/}

                {/*Just fucking wait. I'm working on it. :)*/}

                <div className="flex gap-x-2">
                    <div className="w-1/2">
                        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                            <div className="px-4 py-5 sm:px-6">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">
                                    Recent Activity
                                </h3>
                                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                    Personal details and application.
                                </p>
                            </div>
                            <div className="border-t border-gray-200">
                                <dl>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">
                                            Full name
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                            {auth.user.name}
                                        </dd>
                                    </div>
                                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">
                                            Username
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                            {auth.user.username}
                                        </dd>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">
                                            Email address
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                            {auth.user.email}
                                        </dd>
                                    </div>
                                    {auth.user.hasRole ? (
                                        <>
                                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt className="text-sm font-medium text-gray-500">
                                                    Role
                                                </dt>
                                                <dd className="mt-1 capitalize text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                    {auth.user.roles}
                                                </dd>
                                            </div>
                                        </>
                                    ) : null}
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>


            </Container>
        </div>
    );
}

Dashboard.layout = page => <App children={page}/>;
