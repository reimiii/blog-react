import React from 'react';
import App from '@/Layouts/App';
import {Head, useForm} from '@inertiajs/inertia-react';
import Header from '@/Components/Header';
import Container from '@/Components/Container';
import Label from "@/Components/Label";
import Input from "@/Components/Input";
import InputFile from "@/Components/InputFile";
import Textarea from "@/Components/Textarea";
import Editor from "@/Components/Editor";
import PrimaryButton from "@/Components/PrimaryButton";
import Select from "@/Components/Select";
import Error from "@/Components/Error";
import MultipleSelect from "@/Components/MultipleSelect";

export default function Create({tags, categories}) {
    const {data, setData, post, errors} = useForm({
        title: '',
        teaser: '',
        category_id: '',
        body: '',
        picture: '',
        tags: [tags[0], tags[1]],
    });
    // console.log(categories);
    const onChange = (e) => setData(e.target.name, e.target.value);
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        // post(route('articles.store'));
    }
    return (
        <div>
            <Head title={'Create New One'}/>
            <Header>
                <Header.Title>{data.title || 'The Title'}</Header.Title>
                <Header.Subtitle>{data.teaser || 'The Teaser'}</Header.Subtitle>
            </Header>

            <Container>
                <form onSubmit={onSubmit}>

                    <div className="mb-6">
                        <Label forInput="picture" value="picture"/>
                        <InputFile
                            name="title"
                            id="title"
                            onChange={(e) => setData('picture', e.target.files[0])}
                        />
                    </div>

                    <div className="grid grid-cols-12 gap-6 mb-6">
                        <div className="col-span-4">
                            <div>
                                <Label forInput="category_id">Category</Label>
                                <Select
                                    value={data.category_id}
                                    data={categories}
                                    onChange={(e) => setData('category_id', e)}
                                />
                                {errors.category_id ? (
                                    <Error value={errors.category_id} />
                                ) : null}
                            </div>
                        </div>
                        <div className="col-span-8">
                            <div>
                                <Label forInput="tags">Tags</Label>
                                <MultipleSelect
                                    selectedItem={data.tags}
                                    data={tags}
                                    onChange={(e) => setData('tags', e)}
                                />
                                {errors.tags ? <Error value={errors.tags} /> : null}
                            </div>
                        </div>
                    </div>

                    <div className="mb-6">
                        <Label forInput="title" value="title"/>
                        <Input
                            name="title"
                            id="title"
                            onChange={onChange}
                            value={data.title}
                        />
                    </div>

                    <div className="mb-6">
                        <Label forInput="teaser" value="teaser"/>
                        <Textarea
                            name="teaser"
                            id="teaser"
                            onChange={onChange}
                            value={data.teaser}
                        />
                    </div>

                    <div className="mb-6">
                        <Editor
                            name="body"
                            id="body"
                            onChange={onChange}
                            value={data.body}
                        />
                    </div>
                    <PrimaryButton>Submit</PrimaryButton>
                </form>
            </Container>

        </div>
    );
}

Create.layout = (page) => <App children={page}/>;
