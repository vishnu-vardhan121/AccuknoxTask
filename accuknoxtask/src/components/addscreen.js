import { useContext, useState, useEffect, useReducer } from "react";
import { MyContext } from "./context";

export const Addscreen = ({ categories, he }) => {
  
  const { state: globalState, dispatch } = useContext(MyContext);
  const [state, setState] = useState(globalState.selectedCategory || categories[0]);
  const [checkedWidgets, setCheckedWidgets] = useState(
    state.widgets.reduce((acc, widget) => {
      acc[widget.title] = true;
      return acc;
    }, {})
  );



  const [widgetName, setWidgetName] = useState("");
  const [widgetContent, setWidgetContent] = useState("");

 

  const handleCheckboxChange = (title) => {
    setCheckedWidgets((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const handleConfirm = () => {
    const selectedWidgets = state.widgets.filter(
      (widget) => checkedWidgets[widget.title]
    );
console.log(selectedWidgets);

    if (selectedWidgets.length > 0) {
      dispatch({
        type: "edit",
        payload: selectedWidgets,
        title: state.name,
      });
      // Trigger a rerender
     
    }
  };

  const handleAddWidget = (e) => {
    e.preventDefault();
    if (widgetName && widgetContent) {
      const newWidget = {
        type: "custom",
        title: widgetName,
        data: widgetContent,
        description: `This is a custom widget named, ${widgetName}, your content ${widgetContent}`,
      };
      dispatch({
        type: "add_widget",
        payload: newWidget,
        categori: state.name,
      });
      setWidgetName("");
      setWidgetContent("");
      // Trigger a rerender
      
    }
  };

  const handleCategorySelect = (category) => {
    setState(category);
    setCheckedWidgets(
      category.widgets.reduce((acc, widget) => {
        acc[widget.title] = true;
        return acc;
      }, {})
    );
    dispatch({
      type: "select_category",
      payload: category,
    });
  };

  return (
    <>
      <div className={`add-widget-panel ${"open"}`}>
        <div className="add-widget-header">
          <h4>Add Widget</h4>
          <button
            onClick={() => {
              dispatch({ type: "close" });
            }}
          >
            Close
          </button>
        </div>
        <div className="widghead">
          {categories.map((category) => {
            const isActive = category.name === state.name;
            return (
              <div key={category.name} style={{ textAlign: "center" }}>
                <div
                  className={`widgheadname ${
                    isActive ? "active-category" : ""
                  }`}
                  onClick={() => handleCategorySelect(category)}
                  style={{
                    borderBottom: isActive ? "2px solid blue" : "none",
                    textAlign: "center",
                  }}
                >
                  {category.name.split(" ")[0]}
                </div>
                <div className="line"></div>
              </div>
            );
          })}
        </div>
        <div className="addin">
          <form onSubmit={handleAddWidget}>
            <p>Widget name</p>
            <input
              type="text"
              value={widgetName}
              onChange={(e) => setWidgetName(e.target.value)}
            />
            <p>Content</p>
            <input
              type="text"
              value={widgetContent}
              onChange={(e) => setWidgetContent(e.target.value)}
            />
            <button type="submit">Add</button>
          </form>
        </div>
        <p>Personalize your dashboard by adding the following widget:</p>

        <div>
          {state.widgets.map((widget) => (
            <div className="llll" key={widget.title}>
              <input
                type="checkbox"
                checked={checkedWidgets[widget.title] || false}
                onChange={() => handleCheckboxChange(widget.title)}
                className="checkbox-input"
              />
              <label htmlFor={widget.title} className="checkbox-label">
                {widget.title}
              </label>
              <br />
            </div>
          ))}
        </div>
        <button type="button" className="confirm-button" onClick={handleConfirm}>
          Confirm
        </button>
      </div>
    </>
  );
};