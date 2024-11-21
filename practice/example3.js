const tree = {
  name: "john",
  children: [
    { name: "Jim", children: [] },
    {
      name: "Aoe",
      children: [
        { name: "kyle", children: [] },
        { name: "Shopia", children: [] },
      ],
    },
  ],
};
function printChildren(t){}

function printChildrenRecursive(t){
if(t.children.length===0){
return;
}
t.children.forEach(child => {
    console.log(child.name);
    printChildrenRecursive(child);
    
});

}
printChildrenRecursive(tree);
