import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState("");
    

    // Correct way to define the handleUpCase function
    const handleUpCase = () => {
        setText(text.toUpperCase());  //Always use setText to change the text do not use text. 
        props.showAlert("converted to uppercase", "success")
    }
    const handleLoCase = () => {
        setText(text.toLowerCase());
        props.showAlert("converted to lowercase", "success")
    }
    const handleClearText = () => {
        setText("");
        props.showAlert("text cleared", "success")
    }
    const handleCapital = () => {
        setText(
            text
            .toLowerCase()
            .split(" ")
            .map(word => word.charAt(0).toUpperCase() + word.slice("1"))
            .join(" ")
        );
        props.showAlert("capita done", "success")
    }

    return (
        <>
        <div className="container"  style={{color: props.mode === 'light' ? 'black':'white'}}>
        <h1>{props.heading}</h1>
            <div className="mb-3">
                {/* <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
                <textarea
                    className="form-control"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    id="exampleFormControlTextarea1"
                    rows="8"
                    style={{background: props.mode === 'light' ? 'white':'black', color: props.mode === 'light' ? 'black':'white'}}
                    
                />
            </div>
            <button className="btn btn-primary" onClick={handleUpCase}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoCase}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCapital}>Capital First word</button>

        </div>
        <div className="container my-2" style={{color: props.mode === 'light' ? 'black':'white'}}>
        
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>*
            <p>{0.008 * text.split(" ").length} minutes required to read this paragraph</p>
            <h3>Preview</h3>
            <p>{text.length > 0 ? text: 'Enter text to preview'}</p> {/* if text ki length 0 se kam hai*/}
        </div>
            
        </>
    );
}
