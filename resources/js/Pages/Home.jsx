import React from 'react';
import App from '@/Layouts/App';
import { Head, Link } from '@inertiajs/inertia-react';
import Container from '@/Components/Container';
import Header from '@/Components/Header';
import Grid from '@/Components/Grid';
import ArticleBlock from '@/Components/ArticleBlock';

export default function Home({ articles }) {
    return (
        <div>
            <Head title="What's happening?" />
            <Header>
                <Header.Title>
                    Selamat datang di{' '}
                    <span className='font-bold text-blue-500'>Blog</span>{' '}
                    <span className='font-bold'>kami</span>
                </Header.Title>
                <Header.Subtitle>
                    Blog dimana anda bisa melihat tips & trik seputar dunia
                    pemrograman & teknologi
                </Header.Subtitle>
                <Header.Content>
                    Apa lagi yang anda tunggu? Yuk mulai membaca artikel kami
                    sekarang juga!
                </Header.Content>
            </Header>
            <Container>
                {articles.length ? (
                    <>
                        <Grid className='items-start'>
                            {articles.map((article) => (
                                <ArticleBlock
                                    article={article}
                                    key={article.slug}
                                />
                            ))}
                        </Grid>
                        <Link
                            className='text-blue-600 block mt-10'
                            href={route('articles.index')}
                        >
                            See all articles
                        </Link>
                    </>
                ) : (
                    <p className='text-center text-gray-500'>
                        No articles found.
                    </p>
                )}
            </Container>
        </div>
    );
}

Home.layout = (page) => <App children={page} />;
