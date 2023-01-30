import ApplicationLogo from '@/Components/ApplicationLogo';
import Container from '@/Components/Container';
import React from 'react';

export default function Footer() {
    return (
        <div className='border-t border-gray-800 bg-gray-900 py-10 mt-8 md:mt-16'>
            <Container>
                <div className='max-w-2xl mx-auto text-center'>
                    {/*<ApplicationLogo className="fill-white w-16 h-16 mx-auto" />*/}
                    <p className='mt-5 text-gray-300'>
                        Hi! We are a group of computer science students and full-stack developers. Our main focus is on web development, but we also enjoy improving our skills in other programming languages. We have a shared passion for anime and all things related to it.
                    </p>
                    <p className='font-mono text-sm text-gray-400 mt-10 max-w-lg mx-auto'>
                        Built with all the love in the world by the{' '}
                        <strong className='font-semibold text-white'>
                            {import.meta.env.VITE_APP_NAME}
                        </strong>{' '}
                        team with the help of our author.
                    </p>

                    <p className='mt-8 text-gray-400 font-mono text-xs'>
                        Copyright {new Date().getFullYear()} All right reserved.
                    </p>
                </div>
            </Container>
        </div>
    );
}
