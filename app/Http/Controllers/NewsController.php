<?php

namespace App\Http\Controllers;

use App\Http\Resources\NewsCollection;
use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // $news = News::all();
        $news = new NewsCollection(News::OrderByDesc('id')->paginate(9));
        return Inertia::render('Homepage', [        // SEMUA YANG DITULIS DI ARRAY INI BAKAL MUNCUL DI CONSOLE.LOG !!!!
            'title' => 'mbuh karep',
            'description' => 'coba react ges',
            'news' => $news,                    
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $news = new News();                             
        $news->title = $request->title;                 
        $news->description = $request->description;
        $news->category = $request->category;
        $news->author = auth()->user()->email;
        $news->save();

        return redirect()->back()->with('message', 'berhasil dibuat');
    }

    /**
     * Display the specified resource.
     */
    public function show(News $news)
    {
        $myNews =  $news::where('author', auth()->user()->email)->get();
        return Inertia::render('Dashboard', [
            'myNews' => $myNews,                    
        ]);
        // dd($news::where('author', auth()->user()->email)->get());        // ini kalo mau lihat hasil query tapi kayak console.log
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(News $news, Request $request)
    {
        // dd($request->id);
        return Inertia::render('EditNews', [
            'myNews' => $news->find($request->id)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        News::where('id', $request->id)->update([
            'title' => $request->title,
            'description' => $request->description,
            'category' => $request->category,
        ]);
        return to_route('dashboard')->with('message', 'Update berita berhasil');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(News $news, Request $request)
    {
        $news = News::find($request->id);
        $news->delete();
        // return to_route('dashboard');
        return redirect()->back()->with('message', 'berhasil dihapus');
    }
}
