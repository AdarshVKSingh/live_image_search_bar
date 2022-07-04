import React, { useState } from "react";

const Searchbar = () => {
    const [img, setimg] = useState("");
    const [imglink, setimglink] = useState("https://source.unsplash.com/user/erondu/900x400");


    const inputEvent = (event) => {
        setimg(event.target.value);
        setimglink(`https://source.unsplash.com/900x400/?${img}`);
    }



    return (
        <>  <div className="searchbar">
            <input type="text" placeholder="search here" value={img} onChange={inputEvent} />
            <br/>
            <img src={imglink} alt="image1"/>
            </div>
        </>
    )
}

export default Searchbar;