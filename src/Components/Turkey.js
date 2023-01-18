import React,{useState} from 'react'
export default function Turkey(props) {
    const change=(event)=>{
        let a=event.target.value;
        setText(a);
    }
    const handup=()=>{
        let n=text.toUpperCase();
        setText(n);
        props.alert('Text written is converted to Upper Case','secondary');
    }
    const handdown=()=>{
        let n=text.toLowerCase();
        setText(n);
        props.alert('Text written is converted to Lower Case','secondary');
    }
    const give=()=>{
        let k=text.split(' ').length;
        return k;
    }
    const [text,setText]=useState('');
    const changestyle={
        color: (props.mode==='dark')?'white':'black'
    }
  return (
    <div className="container mb-3 my-3" style={changestyle}>
    <h3 htmlFor="mybox" className="form-label">TEXT CONVERTOR</h3>
    <textarea className="form-control" value={text} onChange={change} style={{color:(props.mode==='dark')?'white':'black', backgroundColor:(props.mode==='dark')?'#094b43':'white'}}  id="mybox" rows="10"></textarea>
    <button className="btn btn-success my-3" onClick={handup}>To Uppercase</button>
    <button className="btn btn-success my-3 mx-3" onClick={handdown}>To Lowercase</button>
    <p>{give()-1} no. of words and {text.length} no. of characters</p>
    <h4>Preview</h4>
    <p>{text}</p>
   </div>
  )
}
