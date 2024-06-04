import React from 'react';
import { Link, Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import NewsItems from '@/Components/Homepage/NewsItems';
import Paginator from '@/Components/Homepage/Paginator';

export default function Homepage(props) {
    // console.log('propsss: ', props)         /*ini buat nunjukkin apa aja yang ditampilin sama variabel 'props'*/
    return (
        <div className='min-h-screen bg-slate-100'>
            <Head title={props.title}/>             {/*ini ngambil dari NewsController*/}
            <Navbar profile={props.auth.user} />

            <div className='flex justify-center flex-col items-center gap-4 p-4 lg:flex-row lg:flex-wrap lg:items-stretch'>
            <NewsItems news={props.news.data}/>     {/*ini ngambil dari props, bisa dilihat dari console.log*/}       
            </div>

            <div className='flex justify-center items-center p-4'>
            <Paginator meta={props.news.meta}/>     {/*ini juga bisa buat ngelempar value ke variable jsx lain*/}
            </div>
        </div>
    )
}