let Watch1 = 0
let Watch2 = 0
let Watch3 = 0
let Watch4 = 0
let Watch5 = 0
let Watch6 = 0

const watch1click =()=> {
    Watch1++;
    console.log("Watch1 added");
    console.log (Watch1);
}
if (Watch1 < 1) {
    document.getElementById(Watch1cart).style.display="none";
}