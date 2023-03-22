import { useState } from "react";
import $ from "jquery";
import "./App.css";
  
function App() {


    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [responseMessage, setResponseMessage] = useState("");

    const handleChange = (e) => {

        if(e.target.name == "name" )
            setName(e.target.value);
        else if(e.target.name == "description")
            setDescription(e.target.value);
    };
  
    const handleSubmit = (e) => {
        e.preventDefault();


        const form = $(e.target);

        let url = form.attr("action");

        var formData = new FormData();

        formData.append('name',name);
        formData.append('description', description);

        fetch(url, {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          body: formData,

        }).then(response => {return response.json();}).then(json => {
           
            setResponseMessage("Le serveur a repondu: \""+json.message+"\""); 

        });

    };
  
    return (
        <div className="App">
            <form
                action="http://localhost/restAPI/createItem.php"
                method="post"
                onSubmit={(event) => handleSubmit(event)}
            >
                <label htmlFor="name">Name: </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(event) => handleChange(event)}
                />
                <br />
                <label htmlFor="name">Description: </label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    value={description}
                    onChange={(event) => handleChange(event)}
                />
                <br />
                <button type="submit">Submit</button>
            </form>
            <h1>{responseMessage}</h1>

        </div>

        

    );
}
  
export default App;