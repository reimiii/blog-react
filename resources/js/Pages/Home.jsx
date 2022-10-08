import React from "react";
import App from "@/Layouts/App";
import {Head} from "@inertiajs/inertia-react";
import Container from "@/Components/Container";
import Header from "@/Components/Header";

export default function Home(props) {
    return (
        <div>
            <Head title="What's happening?"/>
            <Header>
                <Header.Title>What's happening?</Header.Title>
                <Header.Subtitle>Find out what's trending in the world right now.</Header.Subtitle>
                <Header.Content>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nuncmattis ultricies ultricies, lacus lacus blandit massa, eget lacinia odio sem nec elit. Null
                </Header.Content>
            </Header>
            <Container>Home</Container>
        </div>
    );
}

Home.layout = page => <App children={page}/>;
