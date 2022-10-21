import React from 'react';
import Container from '@/Components/Container';
import Pagination from '@/Components/Pagination';
import App from '@/Layouts/App';
import {Head, Link} from '@inertiajs/inertia-react';
import Table from '@/Components/Table';
import useSwal from '@/Hooks/useSwal';
import clsx from 'clsx'

export default function ArticleTable(props) {
    const {data: articles, meta, links} = props.articles;
    const {ask} = useSwal();
    return (
        <Container>
        <Head title={'My Article'}/>
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
                                    <Link href={route('articles.show', article.slug)}>
                                        {article.title}
                                    </Link>
                                </Table.Td>
                                <Table.Td>
                                    <Link href={article.category.url}>
                                        {article.category.name || 'Uncategorized'}
                                    </Link>
                                </Table.Td>
                                <Table.Td>
                                    <div className="flex gap-x-1">
                                        {article.tags.map((tag, i) => (
                                            <Link
                                                className='bg-gray-100 hover:bg-gray-300 transition font-medium text-xs px-2 py-1 rounded'
                                                href={tag.url} key={i}>
                                                {tag.name || 'No Tag'}
                                            </Link>
                                        ))}
                                    </div>
                                </Table.Td>
                                <Table.Td>
                                    <div className="flex gap-x-1">
                                        <span className={clsx(
                                            article.status == 'Published' && 'bg-green-100 text-green-800',
                                            article.status == 'Unpublished' && 'bg-orange-100 text-orange-800',
                                            article.status == 'Preview' && 'bg-sky-100 text-sky-800',
                                            'px-2 py-1 rounded text-xs font-semibold'
                                        )}>
                                        {article.status}
                                    </span>
                                    </div>
                                </Table.Td>
                                <td>
                                    <Table.Dropdown>
                                        <Table.DropdownItem
                                            href={route('articles.show', article.slug)}
                                        >
                                            View
                                        </Table.DropdownItem>
                                        <Table.DropdownItem
                                            href={route('articles.edit', article.slug)}
                                        >
                                            Edit
                                        </Table.DropdownItem>
                                        <Table.DropdownButton
                                            onClick={() => {
                                                ask({
                                                    url: route('articles.destroy', article.slug),
                                                    method: 'delete',
                                                    message: 'Are you sure you want to delete this article?',
                                                })

                                            }}
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
