import React from 'react';
import App from '@/Layouts/App';
import { Head } from '@inertiajs/inertia-react';
import Header from '@/Components/Header';
import Container from '@/Components/Container';
import Markdown from "@/Components/Markdown";

export default function Show({ article }) {
    // const { data: articles, meta, links } = props.articles;
    return (
        <div>
            <Head title={article.title} />
            <Header>
                <Header.Title>{article.title}</Header.Title>
                <Header.Subtitle>{article.teaser}</Header.Subtitle>
            </Header>

            <Container>
                <div className="grid grid-cols-12 gap-16">
                    <div className="col-span-8">
                        {article.picture ? (
                            <img
                                className="rounded mb-6 w-full"
                                src={article.picture}
                                alt=""
                            />
                        ) : null}
                        <Markdown>{article.body}</Markdown>
                    </div>
                    <div className="col-span-3">
                        lorem ipsum
                    </div>
                </div>
            </Container>

        </div>
    );
}

Show.layout = (page) => <App children={page} />;
