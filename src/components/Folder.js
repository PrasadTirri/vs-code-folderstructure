import React, { useState } from "react";
import "../App.css";

const Folder = ({ explored, handleInsertNode }) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visibility: false,
    isFolder: null,
  });

  const handleAddFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visibility: true,
      isFolder,
    });
  };

  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(explored.id, e.target.value, showInput.isFolder);
      setShowInput({
        ...showInput,
        visibility: false,
      });
    }
  };
  console.log(explored);
  if (explored.isFolder) {
    return (
      <div>
        <div className="header" onClick={() => setExpand(!expand)}>
          <span>📁 {explored.name}</span>
          <div className="btns_container">
            <button onClick={(e) => handleAddFolder(e, true)} className="btn">
              Add Folder +
            </button>
            <button onClick={(e) => handleAddFolder(e, false)} className="btn">
              Add File +
            </button>
          </div>
        </div>

        <div className="files" style={{ display: expand ? "block" : "none" }}>
          {showInput.visibility && (
            <div>
              <span>{showInput.isFolder ? "📁" : "📄"}</span>
              <input
                onBlur={() => setShowInput({ ...showInput, visibility: false })}
                onKeyDown={onAddFolder}
                className="input"
                autoFocus
                type="text"
              />
            </div>
          )}
          {explored.items.map((item) => {
            return (
              <Folder
                handleInsertNode={handleInsertNode}
                explored={item}
                key={item.id}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="header">
          <span>📄 {explored.name}</span>
        </div>
      </div>
    );
  }
};

export default Folder;
