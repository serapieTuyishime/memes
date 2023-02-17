import "./App.css";
import { useState } from "react";

function App() {
    const [upp, setUpp] = useState("one does not simply");
    const [down, setDown] = useState("walk into mordor");
    return (
        <div className="main bg-violet-100">
            <div className="bg-white">
                <div className="p-4 theme text-white text-2xl font-bold">
                    Meme generator
                </div>
                <form className="grid gap-3 p-4">
                    <div className="flex gap-3">
                        <input
                            className="form-input"
                            type="text"
                            value={upp}
                            onChange={(e) => setUpp(e.target.value)}
                        />
                        <input
                            className="form-input"
                            type="text"
                            value={down}
                            onChange={(e) => setDown(e.target.value)}
                        />
                    </div>
                    <button className="w-full text-white theme py-2 rounded-md">
                        get a new meme Image 🖼
                    </button>
                    <div className="w-full h-64 bg-lime-300 relative flex flex-col justify-between">
                        <img
                            src="./jack.jpeg"
                            className="w-full h-full absolute bg-orange-400 rounded-md"
                            alt="This is the meme"
                        />
                        <label className="memes">{upp}</label>

                        <label className="memes">{down}</label>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default App;
