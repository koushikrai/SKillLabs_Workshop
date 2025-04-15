import { useState } from "react";

const ButtonComponent = () => {
    const [text, setText] = useState("hello");

    return (
        <div>
            <button onClick={() => setText("you clicked the button")}>
                Click me
            </button>
            <p>{text}</p>
        </div>
    );
};

export default ButtonComponent;
