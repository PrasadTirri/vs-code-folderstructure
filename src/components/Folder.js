import React, { useState } from "react";
import "../App.css";

const Folder = ({ explored, handleTransverseNode }) => {
  console.log(explored);
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visibility: false,
    isFolder: null,
  });

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setShowInput({
      visibility: true,
      isFolder: isFolder,
    });
  };

  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleTransverseNode(explored.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visibility: false });
    }
  };
  if (explored.isFolder) {
    return (
      <div>
        <div className="folder" onClick={() => setExpand(!expand)}>
          <span>📁 {explored.name}</span>
          <div className="btns">
            <button
              onClick={(e) => handleNewFolder(e, true)}
              className="folder_btn"
            >
              📂Folder +
            </button>
            <button
              onClick={(e) => handleNewFolder(e, false)}
              className="file_btn"
            >
              📃File +
            </button>
          </div>
        </div>
        <div>
          {showInput.visibility && (
            <div>
              <span>{showInput.isFolder ? "📁" : "📄"}</span>
              <input
                type="text"
                onKeyDown={onAddFolder}
                autoFocus
                onBlur={() => setShowInput({ ...showInput, visibility: false })}
                name=""
                id=""
              />
            </div>
          )}
        </div>
        <div className="files" style={{ display: expand ? "block" : "none" }}>
          {explored.items.map((item) => (
            <Folder
              handleTransverseNode={handleTransverseNode}
              explored={item}
              key={item.id}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="file" style={{ marginLeft: "20px" }}>
          <span>📄 {explored.name}</span>
        </div>
      </div>
    );
  }
};

export default Folder;
