import React from "react";
import App from "@/Layouts/App";
import {Head, Link} from "@inertiajs/inertia-react";
import Container from "@/Components/Container";
import Header from "@/Components/Header";
import Grid from "@/Components/Grid";
import ArticleBlock from "@/Components/ArticleBlock";

export default function Home({articles}) {
    return (
        <div>
            <Head title="What's happening?"/>
            <Header>
                <Header.Title>What's happening?</Header.Title>
                <Header.Subtitle>Find out what's trending in the world right now.</Header.Subtitle>
                <Header.Content>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nuncmattis ultricies ultricies, lacus lacus blandit massa, eget lacinia odio sem nec elit. Null
                </Header.Content>
            </Header>
            <Container>
                {articles.length ? (
                    <>
                        <Grid className='items-start'>
                            {articles.map((article) => (
                                <ArticleBlock article={article} key={article.slug}/>
                            ))}
                        </Grid>
                        <Link className="text-blue-600 block mt-10" href={route('articles.index')}>
                            See all articles
                        </Link>
                    </>
                ) : (
                    <p className="text-center text-gray-500">No articles found.</p>
                )}
            </Container>
        </div>
    );
}

Home.layout = page => <App children={page}/>;
