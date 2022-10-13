import React from 'react';
import Container from '@/Components/Container';
import Pagination from '@/Components/Pagination';
import App from '@/Layouts/App';
import {Link} from '@inertiajs/inertia-react';
import Table from '@/Components/Table';
import useSwal from '@/Hooks/useSwal';
import clsx from 'clsx'

export default function ArticleTable(props) {
    const {data: articles, meta, links} = props.articles;
    const {ask} = useSwal();
    return (
        <Container>
            <Table>
                <Table.Thead>
                    <tr>
                        <Table.Th>#</Table.Th>
                        <Table.Th>Title</Table.Th>
                        <Table.Th>Category</Table.Th>
                        <Table.Th>Tags</Table.Th>
                        <Table.Th>Status</Table.Th>
                        <th></th>
                    </tr>
                </Table.Thead>
                <Table.Tbody>
                    {articles.length ? (
                        articles.map((article, i) => (
                            <tr key={article.id}>
                                <Table.Td>{meta.from + i}</Table.Td>
                                <Table.Td>
                                    <Link href={article.url}>
                                        {article.title}
                                    </Link>
                                </Table.Td>
                                <Table.Td>
                                    <Link href={article.category.url}>
                                        {article.category.name}
                                    </Link>
                                </Table.Td>
                                <Table.Td>
                                    <div className="flex gap-x-1">
                                        {article.tags.map((tag, i) => (
                                            <Link className='bg-gray-100 hover:bg-gray-300 transition font-medium text-xs px-2 py-1 rounded' href={tag.url} key={i}>
                                                {tag.name}
                                            </Link>
                                        ))}
                                    </div>
                                </Table.Td>
                                <td>
                                    <Table.Dropdown>
                                        <Table.DropdownItem
                                            href={'#'}
                                        >
                                            View
                                        </Table.DropdownItem>
                                        <Table.DropdownItem
                                            href={'#'}

                                        >
                                            Edit
                                        </Table.DropdownItem>
                                        <Table.DropdownButton
                                            href={'#'}
                                            className="hover:bg-rose-50 hover:text-rose-500"
                                        >
                                            Delete
                                        </Table.DropdownButton>
                                    </Table.Dropdown>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <Table.Td>
                                <p>You don't have any articles yet.</p>
                            </Table.Td>
                        </tr>
                    )}
                </Table.Tbody>
            </Table>

            <Pagination {...{meta, links}} />
        </Container>
    );
}

ArticleTable.layout = (page) => <App children={page}/>;
