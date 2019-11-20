import React, { useState } from 'react';

function Counter() {
    // Déclare une nouvelle variable d'état, qu’on va appeler « count »
    // Déclare une fonction setCount qui permet de modifier la valeur de count
    const [count, setCount] = useState(0);

    function event (num) {
        setCount(Number(num.target.value))
    }

    return (
        <div>
            <p>Ton Duck est gros comme ça ! : {count} </p>
            <button onClick={() => setCount(count + 1)}>
                Grow ton Duck
      </button> <br/>
            <button onClick={() => setCount(count - 1)}>
                Shrinks ton Duck
      </button> <br/>
           
            <label for="name">Enter the starting value of your Duck:</label>

            <input type="text" id="name" name="name" onChange={event}  />
    </div>
            );
          }
          
export default Counter;