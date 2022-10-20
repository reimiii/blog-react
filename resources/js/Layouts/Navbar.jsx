import React from 'react';
import {usePage, Link} from '@inertiajs/inertia-react';
import NavLink from '@/Components/NavLink';
import DropdownMenu from '@/Components/DropdownMenu';
import ResponsiveNavigation from '@/Layouts/ResponsiveNavigation';

export default function Navbar() {
    const {auth, categories_global} = usePage().props;
    return (
        <>
            <ResponsiveNavigation/>
            <nav className="hidden border-b border-dashed border-gray-700 bg-gray-900 py-4 shadow lg:block">
                <div className="mx-auto max-w-screen-2xl px-4">
                    <div className="flex items-center justify-between">
                        <Link
                            href={route('home')}
                            className="mr-3 text-lg font-semibold capitalize text-white"
                        >
                            {import.meta.env.VITE_APP_NAME}
                        </Link>

                        <div className="flex flex-1 items-center justify-between">
                            <div>
                                <NavLink
                                    href={route('home')}
                                    active={route().current('home')}
                                >
                                    Home
                                </NavLink>
                                {categories_global.map((category) => (
                                    <NavLink
                                        key={category.slug}
                                        href={route('categories.show', category.slug)}
                                        active={route().current('categories.show', category.slug)}
                                    >
                                        {category.name}
                                    </NavLink>
                                ))}
                            </div>
                            <div className="flex items-center">
                                {auth.user ? (
                                    <div className="flex items-center">
                                        <DropdownMenu label={auth.user.name}>
                                            <DropdownMenu.Link
                                                href={route('dashboard')}
                                                isActive={route().current('dashboard')}
                                            >
                                                Dashboard
                                            </DropdownMenu.Link>
                                            <DropdownMenu.Link
                                                href={`/u/${auth.user.username}`}
                                                isActive={route().current('users.show-mm')}
                                            >
                                                My profile
                                            </DropdownMenu.Link>
                                            {auth.user.hasRole ?
                                                <>
                                                    <DropdownMenu.Divider/>


                                                    <DropdownMenu.Link
                                                        href={route('articles.create')}
                                                        isActive={route().current('articles.create')}
                                                    >
                                                        New article
                                                    </DropdownMenu.Link>

                                                    <DropdownMenu.Link
                                                        href={route('articles.table')}
                                                        isActive={route().current('articles.table')}
                                                    >
                                                        {auth.user.isAdmin ? 'Manage articles' : 'My articles'}
                                                    </DropdownMenu.Link>

                                                    {auth.user.isAdmin ? (
                                                        <>
                                                            <DropdownMenu.Link
                                                                href={route('tags.index')}
                                                                isActive={route().current('tags.index')}
                                                            >
                                                                Manage tags
                                                            </DropdownMenu.Link>

                                                            <DropdownMenu.Link
                                                                href={route('articles.table.current')}
                                                                isActive={route().current('articles.table.current')}
                                                            >
                                                                Current articles
                                                            </DropdownMenu.Link>
                                                        </>
                                                    ) : null}

                                                    <DropdownMenu.Divider/>
                                                </>
                                                : null}


                                            <DropdownMenu.Link
                                                href={route('logout')}
                                                method="POST"
                                                as="button"
                                            >
                                                Logout
                                            </DropdownMenu.Link>
                                        </DropdownMenu>
                                    </div>) : (
                                    <>
                                        <div className="flex items-center">
                                            <NavLink href={route('login')}>
                                                Login
                                            </NavLink>
                                            <NavLink href={route('register')}>
                                                Register
                                            </NavLink>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
