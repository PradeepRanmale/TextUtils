import React, {useState} from 'react' //Here we are importing useState also with react

export default function TextForm(props) {  //props means properties
    const [text, setText] = useState(''); //we are creating state here using 'useState' which is imported above
                                                         //here text = variable which contain defaulte value 'Enter text here'
                                                         //and setText = when we have to change the value of text then we use setText("---")
    const handleOnChange = (event)=>{          //whene ever we fire any event we get an (event) object
        setText(event.target.value)           // this means from that 'event' 'target' that "text" 'value' and get it in setText  i.e                                      changing the value of "text" here
    }
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();        //text value is converting into uppercase
        setText(newText);
        props.showAlert("converted to UpperCase","success");
    }
    const handleLowClick = ()=>{
        let newText = text.toLowerCase();        //text value is converting into lowerCase
        setText(newText);
        props.showAlert("converted to LowerCase","success");
    }
    const handleClearClick = ()=>{
        let newText = "";        //text value is converting into lowerCase
        setText(newText);
        props.showAlert("All Clear","success");
    }


    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}}  id="myBox" rows="3"></textarea> 
            </div> 
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>Your Text Summary</h1>
            <p>{text.length}</p>
            <h1>Preview</h1>
            <p>{text}</p>
        </div>
        </>
    ) //in react you cant use class word insted of it u have to use "className"
      //on above linse 'onChange' and 'onClick' is bassically an events and 'handleOnChange' and 'handleUpClick' are the functions which is going to run when that events gets fire
}
