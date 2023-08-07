import React, { useState } from 'react'


export default function TextForm(props) {

    const [text, setText] = useState('');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Conveted to Uppercase!','warning')
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Conveted to Lowercase !','warning')
    }
    const handleOnChange = (event) => {
        // console.log("on Change");
        setText(event.target.value);
        
    }
    const speakText= () => {
        
        if(text){
            const words =text.split(' ');
            
            words.forEach((word,index)=>{
                
            // Speak the word using SpeechSynthesis API
            const speech = new SpeechSynthesisUtterance(word);
            speechSynthesis.speak(speech);
            
            })
        }
        props.showAlert('Speakng the textbox !','info')

    }
    const copyToClipboard =()=>{
        navigator.clipboard.writeText(text);
        props.showAlert('copied to clipboard !','success')

    }

    const ResetText =()=>{
        setText('');

        props.showAlert('Text cleared!','danger')

    }
    const countWords =(sentence)=>{
        let new_sentence = sentence.split(" ")
        console.log(new_sentence[1])
        if(new_sentence[0]==='')return '0';
        else if(new_sentence[new_sentence.length-1]==='')return sentence.split(" ").length -1;
        else return sentence.split(" ").length
    }

    

    return (
        <>
            <div className='container' >
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className='form-control' style={{backgroundColor:props.mode==='light'?'white':'gray',color:props.mode==='light'?'black':'white'}} value={text} onChange={handleOnChange} placeholder='Enter Text here' id="MyBox" rows="5"></textarea>
                </div>
                <button className="btn btn-primary " onClick={handleUpClick}> Convert To Uppercase </button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}> Convert To Lowercase </button>
                <button className="btn btn-primary mx-2 my-2" onClick={speakText}> Speak 🗣</button>
                <button className="btn btn-primary mx-2 my-2" onClick={copyToClipboard}> copy 📋 </button>

                <button type="button" className="btn btn-outline-danger mx-2 my-2" onClick={ResetText}> Reset </button>
                
            </div>
            <div className="container my-3">
                <h1>Your text summery</h1>
                <p>{countWords(text)} words and {text.length} characters</p>
                <p>{0.008*text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length<1?"Enter something in textbox to preview it here":text}</p>
            </div>
        </>
    )
}
