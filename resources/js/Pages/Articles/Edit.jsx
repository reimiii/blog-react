import React from 'react';
import App from '@/Layouts/App';
import {Head, useForm} from '@inertiajs/inertia-react';
import Header from '@/Components/Header';
import Container from '@/Components/Container';
import PrimaryButton from "@/Components/PrimaryButton";
import {Inertia} from "@inertiajs/inertia";
import ArticleForm from "@/Components/ArticleForm";

export default function Edit({article, statuses}) {
    const {data, setData} = useForm({
        title: article.title,
        teaser: article.teaser,
        category_id: article.category,
        body: article.body,
        picture: '',
        tags: article.tags,
        status: statuses.find(status => status.id === article.status),
    });

    const onSubmit = (e) => {
        e.preventDefault();
        Inertia.post(route('articles.update', article.slug), {
            ...data,
            _method: 'PUT',
            category_id: data.category_id.id,
            status: data.status.id,
            tags: data.tags.map(tag => tag.id),
        });
    }

    return (
        <div>
            <Head title={'Edit some'}/>
            <Header>
                <Header.Title>{data.title || 'The Title'}</Header.Title>
                <Header.Subtitle>{data.teaser || 'The Teaser'}</Header.Subtitle>
            </Header>

            <Container>
                <form onSubmit={onSubmit}>
                    <ArticleForm
                        {...{data, setData}}
                    />

                    <PrimaryButton>Update</PrimaryButton>
                </form>
            </Container>

        </div>
    );
}

Edit.layout = (page) => <App children={page}/>;
