import "./App.css";
import { useState, useEffect } from "react";

function App() {
    const [meme, setMeme] = useState({
        topText: "one does not simply",
        bottomtext: "walk into mordor",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    });
    const [allMemes, setAllMemes] = useState([]);

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then((res) => res.json())
            .then((data) => setAllMemes(data.data.memes));
    }, []);

    function handleChange(event) {
        const { name, value } = event.target;
        setMeme((prevMeme) => ({
            ...prevMeme,
            [name]: value,
        }));
    }
    function getMemeImage(event) {
        event.preventDefault();
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url;
        setMeme((prevMeme) => ({
            ...prevMeme,
            randomImage: url,
        }));
    }
    return (
        <div className="main bg-violet-100">
            <div className="bg-white">
                <div className="p-4 text-2xl font-bold text-white theme">
                    Meme generator
                </div>
                <form className="grid gap-3 p-4">
                    <div className="flex gap-3">
                        <input
                            className="form-input"
                            type="text"
                            name="topText"
                            value={meme.topText}
                            onChange={handleChange}
                        />
                        <input
                            className="form-input"
                            type="text"
                            name="bottomtext"
                            value={meme.bottomtext}
                            onChange={handleChange}
                        />
                    </div>
                    <button
                        className="w-full py-2 text-white rounded-md theme"
                        onClick={getMemeImage}
                    >
                        get a new meme Image 🖼
                    </button>
                    <div className="relative flex flex-col justify-between w-full h-64 bg-lime-300">
                        <div className="absolute w-full h-full">
                            <img
                                src={meme.randomImage}
                                className="object-cover w-full h-full bg-orange-400 rounded-md"
                                alt="This is the meme"
                            />
                        </div>
                        <label className="memes">{meme.topText}</label>

                        <label className="memes">{meme.bottomtext}</label>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default App;
