import ApplicationLogo from '@/Components/ApplicationLogo';
import Container from '@/Components/Container';
import React from 'react';

export default function Footer() {
    return (
        <div className="border-t border-gray-800 bg-gray-900 py-10 mt-8 md:mt-16">
            <Container>
                <div className="max-w-2xl mx-auto text-center">
                    {/*<ApplicationLogo className="fill-white w-16 h-16 mx-auto" />*/}
                    <p className="mt-5 text-gray-300">
                        Computer Sience student & Full-Stack developer.
                        Mainly web-developer whos enjoy improving his skills in other languages as well.
                        We are a group of people who love anime and anime-related topics.
                    </p>
                    <p className="font-mono text-sm text-gray-400 mt-10 max-w-lg mx-auto">
                        Built with all the love in the world by the{' '}
                        <strong className="font-semibold text-white">
                            {import.meta.env.VITE_APP_NAME}
                        </strong>{' '}
                        team with the help of our author.
                    </p>

                    <p className='mt-8 text-gray-400 font-mono text-xs'>Copyright {new Date().getFullYear()} All right reserved.</p>
                </div>
            </Container>
        </div>
    );
}
