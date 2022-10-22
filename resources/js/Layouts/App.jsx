import React from 'react';
import Navbar from '@/Layouts/Navbar';
import Footer from '@/Layouts/Footer';

export default function App({ children }) {
    return (
        <div>
            <Navbar />
            <div className='pt-8'>{children}</div>
            <Footer />
        </div>
    );
}
