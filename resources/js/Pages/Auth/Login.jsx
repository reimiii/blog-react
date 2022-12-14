import React, { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import ConfirmPassword from '@/Pages/Auth/ConfirmPassword';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onChange = (event) => {
        setData(
            event.target.name,
            event.target.type === 'checkbox'
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <>
            <Head title='Log in' />

            {status && (
                <div className='mb-4 font-medium text-sm text-green-600'>
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                <div>
                    <InputLabel forInput='email' value='Email' />

                    <TextInput
                        type='text'
                        name='email'
                        value={data.email}
                        className='mt-1 block w-full'
                        autoComplete='username'
                        isFocused={true}
                        onChange={onChange}
                    />

                    <InputError message={errors.email} className='mt-2' />
                </div>

                <div className='mt-6'>
                    <InputLabel forInput='password' value='Password' />

                    <TextInput
                        type='password'
                        name='password'
                        value={data.password}
                        className='mt-1 block w-full'
                        autoComplete='current-password'
                        onChange={onChange}
                    />

                    <InputError message={errors.password} className='mt-2' />
                </div>

                <Checkbox
                    className='mt-4'
                    name='remember'
                    label='Remember me'
                    value={data.remember}
                    onChange={onChange}
                />

                <div className='flex items-center justify-end mt-4'>
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className='underline text-sm text-gray-600 hover:text-gray-900'
                        >
                            Forgot your password?
                        </Link>
                    )}

                    <PrimaryButton className='ml-4' processing={processing}>
                        Log in
                    </PrimaryButton>
                </div>
            </form>
        </>
    );
}

Login.layout = (page) => <GuestLayout children={page} />;
