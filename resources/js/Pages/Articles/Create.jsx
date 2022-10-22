import React from 'react';
import App from '@/Layouts/App';
import { Head, useForm } from '@inertiajs/inertia-react';
import Header from '@/Components/Header';
import Container from '@/Components/Container';
import PrimaryButton from '@/Components/PrimaryButton';
import { Inertia } from '@inertiajs/inertia';
import ArticleForm from '@/Components/ArticleForm';

export default function Create({ tags, statuses }) {
    const { data, setData } = useForm({
        title: '',
        teaser: '',
        category_id: '',
        body: '',
        picture: '',
        tags: [],
        status: statuses[0],
    });
    // console.log(categories);
    const onSubmit = (e) => {
        e.preventDefault();
        Inertia.post(route('articles.store'), {
            ...data,
            category_id: data.category_id.id,
            status: data.status.id,
            tags: data.tags.map((tag) => tag.id),
        });
    };
    return (
        <div>
            <Head title={'Create New One'} />
            <Header>
                <Header.Title>{data.title || 'The Title'}</Header.Title>
                <Header.Subtitle>{data.teaser || 'The Teaser'}</Header.Subtitle>
            </Header>

            <Container>
                <form onSubmit={onSubmit}>
                    <ArticleForm {...{ data, setData }} />

                    <PrimaryButton>Submit</PrimaryButton>
                </form>
            </Container>
        </div>
    );
}

Create.layout = (page) => <App children={page} />;
