import React from 'react';
import App from '@/Layouts/App';
import {Head} from '@inertiajs/inertia-react';
import Container from "@/Components/Container";
import Dash from "@/Components/Dash";

export default function Dashboard({auth}) {
    return (
        <div>
            <Head title="Dashboard"/>
            <Container>
                {/*<h1>Dashboard WIP</h1>*/}

                {/*Just fucking wait. I'm working on it. :)*/}

                <div className="flex gap-x-2">
                    <div className="w-1/2">
                        <Dash>
                            <Dash.Name>{auth.user.name}</Dash.Name>
                            <Dash.Username>{auth.user.username}</Dash.Username>
                            <Dash.Email>{auth.user.email}</Dash.Email>
                            {auth.user.hasRole ? (
                                <Dash.Role>{auth.user.roles}</Dash.Role>
                            ) : null}
                        </Dash>
                    </div>
                </div>

            </Container>
        </div>
    );
}

Dashboard.layout = page => <App children={page}/>;
