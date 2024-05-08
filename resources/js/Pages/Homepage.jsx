import React from 'react';
import { Link, Head } from '@inertiajs/react';

export default function Homepage(props) {
    // console.log(props)
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <Head title={props.title}/>
            <h1>{props.description}</h1>

            <div>
            {props.news ? props.news.map((data, i) => {
                return (
                    <div key={i}>
                        <p>{data.title}</p>
                        <p>{data.description}</p>
                        <p>{data.category}</p>
                        <p>{data.author}</p>
                    </div>
                )
            }) : <p>Belum ada data ^^</p>}
            </div>
        </div>
    )
}