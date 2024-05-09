import React from 'react';
import { Link, Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import NewsItems from '@/Components/Homepage/NewsItems';

export default function Homepage(props) {
    console.log('propsss: ', props)
    return (
        <div className='min-h-screen bg-slate-100'>
            <Head title={props.title}/>
            <Navbar />
            <NewsItems news={props.news.data}/>
        </div>
    )
}






           /* 
           <div>
           { {props.news ? props.news.map((data, i) => {
                return (
                    <div key={i} className='p-4 m-2 bg-white text-black shadow-lg rounded-lg'>
                        <p className='text-2xl'>{data.title}</p>
                        <p className='text-sm'>{data.description}</p>
                        <i>{data.category}</i>
                        <i>{data.author}</i>
                    </div>
                )
            }) : <p>Belum ada data ^^</p>} } 
            </div>
            */