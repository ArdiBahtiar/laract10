import { Link } from "@inertiajs/react";

const Paginator = ({ meta }) => {       // kurung kurawal itu ngambil properti yang sudah di declare dari Homepage
    
    console.log(meta)
    const prev = meta.links[0].url;
    const next = meta.links[meta.links.length - 1].url;
    const current = meta.current_page;
    
    return (
        <div className="btn-group">
        {prev && <Link href={prev} className="btn">«</Link>}
        <Link className="btn">{current}</Link>
        {next && <Link href={next} className="btn">»</Link>}
        </div>
    )
}

export default Paginator