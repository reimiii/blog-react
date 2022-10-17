import React from 'react';
import App from '@/Layouts/App';
import { Head } from '@inertiajs/inertia-react';
import Header from '@/Components/Header';
import Container from '@/Components/Container';
import Grid from "@/Components/Grid";
import ArticleBlock from "@/Components/ArticleBlock";
import Pagination from "@/Components/Pagination";

export default function Index({ category, ...props }) {
    const { data: articles, meta, links } = props.articles;
    return (
        <div>
            <Head title="The articles" />
            <Header>
                <Header.Title>The articles</Header.Title>
                <Header.Subtitle>
                    Read if you want to learn something new.
                </Header.Subtitle>
            </Header>

            <Container>
                {articles.length ? (
                    <>
                        <Grid className='items-start'>
                            {articles.map((article) => (
                                <ArticleBlock article={article} key={article.slug}/>
                            ))}
                        </Grid>
                        <Pagination {...{meta, links}} />
                    </>
                ) : (
                    <p className="text-center text-gray-500">No articles found.</p>
                )}
            </Container>

        </div>
    );
}

Index.layout = (page) => <App children={page} />;
