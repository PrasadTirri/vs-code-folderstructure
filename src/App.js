import React, { useState } from "react";
import Data from "./data/DataFolder";
import Folder from "./components/Folder";
import useTranverse from "./hook/use-transverse-tree";

const App = () => {
  const [exploreData, setExploreData] = useState(Data);

  const { insertNode } = useTranverse();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalOp = insertNode(exploreData, folderId, item, isFolder);
    setExploreData(finalOp);
  };
  return (
    <div>
      <Folder handleInsertNode={handleInsertNode} explored={exploreData} />
    </div>
  );
};

export default App;
