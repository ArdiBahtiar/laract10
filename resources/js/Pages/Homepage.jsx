import React from 'react';
import { Link, Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import NewsItems from '@/Components/Homepage/NewsItems';
import Paginator from '@/Components/Homepage/Paginator';

export default function Homepage(props) {
    console.log('propsss: ', props)
    return (
        <div className='min-h-screen bg-slate-100'>
            <Head title={props.title}/>
            <Navbar />

            <div className='flex justify-center flex-col items-center gap-4 p-4 lg:flex-row lg:flex-wrap lg:items-stretch'>
            <NewsItems news={props.news.data}/>
            </div>

            <div className='flex justify-center items-center p-4'>
            <Paginator meta={props.news.meta}/>
            </div>
        </div>
    )
}