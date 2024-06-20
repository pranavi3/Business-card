import { useState } from "react"
import { Details } from "./Details";

export function Inputs(){
    const [name, setName] = useState("");
    const [details, setDetails] = useState(null);
    const onHandleClick = async ()=>{
        if(name.length == 0)alert('Name cannot be empty');
        else{
            const val = await fetch(`http://localhost:3000/details/${name}`);
            let json = await val.json();
            const resStatus = await val.status;
            if(resStatus != 200){
                json = {
                    name: "Not found",
                    description: json.msg,
                    interests: []
                }
            }
            setDetails(json); 
        } 
    };
    return (
        <div>
            <input 
                type="text" 
                placeholder="Name" 
                style={
                    {padding: 10, margin:10}
                } 
                onChange={
                    function(e){
                        setName(e.target.value);
                    }
                }
            ></input>
            <br></br>
            <button style={{padding: 10, margin:10}} onClick={onHandleClick}> Generate </button>
            {details && <Details name={details.name} description={details.description} interests = {details.interests} linkedin = {details.linkedIn} github = {details.github}/>}
        </div>
    )
}
