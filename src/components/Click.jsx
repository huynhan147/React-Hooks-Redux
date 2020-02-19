import React, { useState } from "react";
function Click() {
    const [count, setCount] = useState(0);
    return (
        <div className="container">
            <p>Count: {count}</p>
            <button type="button" onClick={() => setCount(count+1)}>click</button>
        </div>
    );
}
export default Click;