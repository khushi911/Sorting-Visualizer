"use strict";
//async makes a function return a Promise
//await makes a function wait for a Promise or any value
/* A JavaScript Promise object can be:

-Pending
-Fulfilled
-Rejected
1.The Promise object supports two properties: state and result.
2.While a Promise object is "pending" (working), the result is undefined.
3.When a Promise object is "fulfilled", the result is a value.
4.When a Promise object is "rejected", the result is an error object.*/
const start=async() =>{
    //note the difference between var and let
    //Variables defined with 'let' cannot be Redeclared.Variables defined with let must be Declared before use.Variables defined with let have Block Scope.
    let algovalue=Number(document.querySelector(".algo-menu").value);//querySelectorAll-Returns all child elements that matches a CSS selector(s)
    let speedvalue=Number(document.querySelector(".speed-menu").value);

    if(speedvalue === 0)
    {
        speedvalue=1;
    }
    if(algovalue === 0)
    {
        alert("No Algorithm selected");
        return;
    }




    let algorithm=new sortAlgorithms(speedvalue);
   //  The await operator is used to wait for a Promise. It can only be used inside an async function within regular JavaScript code; however it can be used on its own with JavaScript modules.   
    /* The await expression causes async function execution to pause until a Promise is settled (that is, fulfilled or rejected), and to resume execution of the async function after fulfillment. When resumed, the value of the await expression is that of the fulfilled Promise.*/
    if(algovalue === 1) await algorithm.BubbleSort();
    if(algovalue === 2) await algorithm.SelectionSort();
    if(algovalue === 3) await algorithm.InsertionSort();
    if(algovalue === 4) await algorithm.MergeSort();
    if(algovalue === 5) await algorithm.QuickSort();
};


const arrstart=async() =>{
    let svalue=Number(document.querySelector(".size-menu").value);
    if(svalue === 0)
    {
        alert("No Array Size selected");
        return;
    }
};

const RenderScreen = async() =>{
    let algovalue=Number(document.querySelector(".algo-menu").value);
    await RenderList();
 
};

const RenderList =async() =>{
    let sizevalue=Number(document.querySelector(".size-menu").value);
    await clearScreen();

    let list=await randomList(sizevalue);
    const arrayNode=document.querySelector(".array");
    console.log(arrayNode);
    console.log(list);

    for(const element of list)
    {
        const node=document.createElement("div");
        node.className="cell";
        node.setAttribute("value",String(element));
        node.style.height = `${3.8 * element}px`;
        arrayNode.appendChild(node);//The appendChild() method appends a node (element) as the last child of an element.
    }
};

const RenderArray =async (sorted) =>{
    let sizevalue=Number(document.querySelector(".size-menu").value);
    await clearScreen();

    let list=await randomList(sizevalue);
    if(sorted) list.sort((a,b) => a - b);

    const arrayNode = document.querySelector(".array");
    const divnode = document.createElement("div");
    divnode.className = "s-array";

    for(const element of list)
    {
        const dnode=document.createElement("div");
        dnode.className="s-cell";
        dnode.innerText=element;
        divnode.appendChild(dnode);
    }
    arrayNode.appendChild(divnode);
};

const randomList=async(Length) =>{
    let list=new Array();
    let lowerBound=1;
    let upperBound=100;

    for(let counter =0; counter<Length;++counter)
    {
        let randomNumber=Math.floor(Math.random()*(upperBound-lowerBound+1)+lowerBound);
        list.push(parseInt(randomNumber));
    }
    return list;
};

const clearScreen=async()=>
{
    document.querySelector(".array").innerHTML="";//The innerHTML property sets or returns the HTML content (inner HTML) of an element.
};

const response=() =>{
    let Navbar=document.querySelector(".navbar");
    if(Navbar.className==="navbar")
    {
        Navbar.className += " responsive";
    }
    else{
        Navbar.className="navbar";
    }
};

document.querySelector(".start").addEventListener("click",start);
document.querySelector(".arrstart").addEventListener("click",arrstart);
document.querySelector(".size-menu").addEventListener("change", RenderScreen);
document.querySelector(".algo-menu").addEventListener("change", RenderScreen);

window.onload = RenderArray;