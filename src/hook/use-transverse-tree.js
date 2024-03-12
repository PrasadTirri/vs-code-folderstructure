const useTranverse = () => {
  const insertNode = (tree, folderId, item, isFolder) => {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: item,
        isFolder: isFolder,
        items: [],
      });
      return tree;
    }
    let latestObj = [];
    latestObj = tree.items.map((obj) => {
      return insertNode(obj, folderId, item, isFolder);
    });
    return { ...tree, items: latestObj };
  };

  return { insertNode };
};
export default useTranverse;
