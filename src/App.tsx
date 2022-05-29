import React, {useState} from 'react';
import './App.css';
import TopBar from "./components/TopBar";
import TextAreasContainer from "./components/TextAreasContainer";

function App() {
    const styleLink = document.createElement("link");
    styleLink.rel = "stylesheet";
    styleLink.href =
        "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
    document.head.appendChild(styleLink);

    return (
        <div className='background'>
            <TopBar/>
            <TextAreasContainer/>
        </div>

    );
}

export default App;
