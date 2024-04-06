const VedioTitle=({title,overview})=>
{
    return(<div className="pt-[30%] absolute w-screen aspect-video bg-gradient-to-r from-black text-white">
        <h1 className="text-5xl font-bold px-4">{title}</h1>
        <p className="text-lg px-4 w-2/4 py-4">{overview}</p>
        <div>
        <button className="px-10 py-3 bg-white text-black mx-6 rounded-lg hover:bg-opacity-80">▶  Play</button>
        <button className="px-10 py-3 bg-white text-black mx-3 rounded-lg hover:bg-opacity-80">  More Info</button>
        </div>
    </div>)
}

export default VedioTitle