import React, { useState } from 'react';
import { Link, Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import { Inertia } from '@inertiajs/inertia';

export default function EditNews(props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();  // Prevent the default form submission
        const data = { id: props.myNews.id, title, description, category };

        Inertia.post('/news/update', data, {
            onSuccess: () => {      // onSuccess
                setTitle('');
                setDescription('');
                setCategory('');
            },
            onError: () => {        // onError
                setIsNotif(false);
            }
        });
    };

    console.log('propsss: ', props)         /*ini buat nunjukkin apa aja yang ditampilin sama variabel 'props'*/
    return (
        <div className='min-h-screen bg-slate-100'>
            <Head title={props.title}/>             {/*ini ngambil dari NewsController*/}
            <Navbar profile={props.auth.user} />

                <div className="card w-96 bg-base-100 shadow-xl m-2">
                    <div className="card-body">
                    <form onSubmit={handleSubmit}>
                            {props.flash.message && (
                                <div className="alert alert-info">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <span>{props.flash.message}</span>
                                </div>
                            )}
                            <input type="text" placeholder="Judul" className="m-2 input input-bordered w-full" onChange={(e) => setTitle(e.target.value)} defaultValue={props.myNews.title} />
                            <input type="text" placeholder="Deskripsi" className="m-2 input input-bordered w-full" onChange={(e) => setDescription(e.target.value)} defaultValue={props.myNews.description} />
                            <input type="text" placeholder="Kategori" className="m-2 input input-bordered w-full" onChange={(e) => setCategory(e.target.value)} defaultValue={props.myNews.category} />
                            <button type="submit" className="btn btn-primary m-2 mx-auto flex flex-col items-center">Update</button>
                        </form>
                    </div>
                </div>
        </div>
    )
}