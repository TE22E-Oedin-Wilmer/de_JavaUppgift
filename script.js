
function addtocart(productName) {
    console.log(productName)
    if (productName === 'Watch1') {
        document.getElementById("drp1").style.display="block";
    }
    if (productName === 'Watch2') {
        document.getElementById("drp2").style.display="block";
    }
    if (productName === 'Watch3') {
        document.getElementById("drp3").style.display="block";
    }
    if (productName === 'Watch4') {
        document.getElementById("drp4").style.display="block";
    }
    if (productName === 'Watch5') {
        document.getElementById("drp5").style.display="block";
    }
    if (productName === 'Watch6') {
        document.getElementById("drp6").style.display="block";
    }
}

function remFromCart(productName){
    console.log(productName)
    if (productName === 'drp1') {
        document.getElementById("drp1").style.display="none";
    }
    if (productName === 'drp2') {
        document.getElementById("drp2").style.display="none";
    }
    if (productName === 'drp3') {
        document.getElementById("drp3").style.display="none";
    }
    if (productName === 'drp4') {
        document.getElementById("drp4").style.display="none";
    }
    if (productName === 'drp5') {
        document.getElementById("drp5").style.display="none";
    }
    if (productName === 'drp6') {
        document.getElementById("drp6").style.display="none";
    }
}
