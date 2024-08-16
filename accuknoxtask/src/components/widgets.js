import { useCallback, useContext } from "react";
import { MyContext } from "./context";
import { Card } from "./card";
import { Addscreen } from "./addscreen";

export const WidgetsDiv = () => {
  const { state, dispatch } = useContext(MyContext);

  return (
    <div className="dashboard">
      <div className="dnav">
        <div>
          <h5>CNAPP Dashboard</h5>
        </div>
        <div className="addn" onClick={()=>{dispatch({ type: "addb" })}>Add widget +</div>
        <div className="addnn">&#8285;</div>
      </div>
      {state.categories.map((category) => (
        <div className="catg" key={category.name}>
          <h5 className="dashname">{category.name}</h5>
          <div className="dashflex">
            {category.widgets.map((widget) => (
              <div className="cardflex" key={widget.title}>
                <Card value={widget.title} data={widget.description} />
              </div>
            ))}

            <div className="card addcard" onClick={()=>{dispatch({ type: "addb" })}}>
              <div className="add">+ Add Widget</div>
            </div>
          </div>
        </div>
      ))}
      
    </div>
  );
};
