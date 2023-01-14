import { useState } from 'react';

function Page(){
    return (
        <div>
            <h1>Pagina Inicial</h1>
            <Counter />
        </div>
    )
}

function Counter(){
    const [count, setCount] = useState(0)
    function addCounter(){
        setCount(count + 1)
    }
    return (
        <div>
            <div>{count}</div>
            <button onClick={addCounter}>Add</button>
        </div>
    )
}

export default Page