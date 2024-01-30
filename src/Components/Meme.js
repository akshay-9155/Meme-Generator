import React, { useState } from 'react'
import MemeData from './MemeData';
const Meme = () => {
    const [meme, updateMeme] = useState(
        {
            topText: "",
            bottomText: "",
            randomImage: MemeData.data.memes[1].url
        }
    )
    const generateImage = () => {
        const randomNumber = Math.floor(Math.random() * allMemeImages.length);
        const memeUrl = allMemeImages[randomNumber].url;
        updateMeme(prevMeme => ({ ...meme, randomImage: memeUrl }));
    }
    const [allMemeImages, updateAllMemeImages] = useState([]);
    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data=> updateAllMemeImages(data.data.memes))
    }, [])
    const handleChange = event =>{
        const {name, value} = event.target;
        updateMeme(prevMeme => ({
            ...prevMeme, [name]: value
        }))
    }
    return (
        <main className="Meme flex flex-col p-12">
            <div className='Main flex flex-col'>
                <form className="input flex justify-between mb-8">
                    <div className="top-box flex flex-col w-5/12">
                        <label htmlFor="top" className='font-bold pl-1'>Top text</label>
                        <input
                            id="top"
                            className=' outline-slate-400 rounded p-2 mt-2 flex items-center  outline-2 outline'
                            type="text"
                            placeholder="Shut up"
                            name='topText'
                            value={meme.topText}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="bottom-box flex flex-col w-5/12">
                        <label htmlFor="bottom" className='font-bold pl-1'>Bottom text</label>
                        <input
                            id="bottom"
                            className=' outline-slate-400 rounded p-2 mt-2 flex items-center  outline-2 outline'
                            type="text"
                            placeholder='and take my money'
                            name='bottomText'
                            value={meme.bottomText}
                            onChange={handleChange}
                        />
                    </div>
                </form>
                <button onClick={generateImage} className='pl-4 pr-4 pt-2 pb-2 w-full rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white self-center text-xl font-bold'>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme