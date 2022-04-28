

import { useState } from "react";


export const Inventory = () => {
  const [inv, setInv] = useState({    //object to initiate and store the values
    books: 10,
    notebooks: 13,
    pens: 40,
  });

  const remove = (k) => {             //remove to perticular key (k) from inventory(inv) by using setInv
    if (inv[k] - 1 < 0) {
      return;
    }
    inv[k]--;
    let { books, notebooks, pens} = inv;    //destructuring the inventory 
    setInv({ books, notebooks, pens});
  };
  const add = (k) => {
    inv[k]++;
    let { books, notebooks, pens } = inv;
    setInv({ books, notebooks, pens});
  };
  // state.
  return (
    <div
      style={{
          display:"flex",
       
         margin:"auto",
         justifyContent:"center",
        border: "1px solid red",
        borderRadius: "50%",
        padding: "10px",
       
        flexDirection: "column",
        width: "200px",
        height : "200px",
      }}
    >
      <div className="items" style={{margintop:"30px"
      }}>
        <span>Books: </span>
        <button className="circlularButton" onClick={() => add("books")}>  
          +
        </button>
        <button className="circlularButton" onClick={() => remove("books")}>
          -
        </button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton" onClick={() => add("notebooks")}>
          +
        </button>
        <button className="circlularButton" onClick={() => remove("notebooks")}>
          -
        </button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton" onClick={() => add("pens")}>
          +
        </button>
        <button className="circlularButton" onClick={() => remove("pens")}>
          -
        </button>
        <span>{inv.pens}</span>
      </div>
      total: {inv.books + inv.notebooks + inv.pens}
    </div>
  );
};