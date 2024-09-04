import { useState } from "react";
function ColorPicker() {
    const [color,setColor] = useState("#ffffff");
    function handleColor(e) {
        setColor(e.target.value)
    }
    return (<>
                <h1>Color Picker</h1>
                <div>Selected Color: {color}</div>
                <h3>Select a color</h3>
                <input type="color" name="my-color" id="color-picker" value={color} onChange={handleColor} />
            </>);
}

export default ColorPicker