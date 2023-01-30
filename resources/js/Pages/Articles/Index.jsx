import React from 'react';
import App from '@/Layouts/App';
import { Head } from '@inertiajs/inertia-react';
import Header from '@/Components/Header';
import Container from '@/Components/Container';
import Grid from '@/Components/Grid';
import ArticleBlock from '@/Components/ArticleBlock';
import Pagination from '@/Components/Pagination';

export default function Index({ category, ...props }) {
    const { data: articles, meta, links } = props.articles;
    return (
        <div>
            <Head title='Articles' />
            <Header>
                <Header.Title>Articles</Header.Title>
                <Header.Subtitle>
                    Discover New Knowledge: Read These Articles
                </Header.Subtitle>
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
                        <Pagination {...{ meta, links }} />
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

Index.layout = (page) => <App children={page} />;
