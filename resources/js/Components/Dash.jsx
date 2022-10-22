import React from 'react';
import clsx from 'clsx';

function Dash({ className = '', children }) {
    return (
        <div
            className={clsx(
                className,
                'bg-white shadow overflow-hidden sm:rounded-lg'
            )}
        >
            <div className='px-4 py-5 sm:px-6'>
                <h3 className='text-lg leading-6 font-medium text-gray-900'>
                    Recent Activity
                </h3>
                <p className='mt-1 max-w-2xl text-sm text-gray-500'>
                    Personal details and application.
                </p>
            </div>
            <div className='border-t border-gray-200'>
                <dl>{children}</dl>
            </div>
        </div>
    );
}
function Name({ children }) {
    return (
        <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-medium text-gray-500'>Full Name</dt>
            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                {children}
            </dd>
        </div>
    );
}
function Username({ children }) {
    return (
        <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-medium text-gray-500'>Username</dt>
            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                {children}
            </dd>
        </div>
    );
}
function Email({ children }) {
    return (
        <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-medium text-gray-500'>Email address</dt>
            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                {children}
            </dd>
        </div>
    );
}
function Role({ children }) {
    return (
        <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-medium text-gray-500'>Role type</dt>
            <dd className='mt-1 capitalize text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                {children}
            </dd>
        </div>
    );
}

Dash.Name = Name;
Dash.Username = Username;
Dash.Email = Email;
Dash.Role = Role;

export default Dash;
