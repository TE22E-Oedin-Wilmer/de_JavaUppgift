
function addtocart(productName) {
    console.log(productName)
    if (productName === 'Watch1') {
        document.getElementById("drp1").style.display="block";
        document.getElementById("cost").textContent = Number(document.getElementById("cost").textContent) + 42
        document.getElementById("Amount1").textContent = Number(document.getElementById("Amount1").textContent) + 1
    }
    if (productName === 'Watch2') {
        document.getElementById("drp2").style.display="block";
        document.getElementById("cost").textContent = Number(document.getElementById("cost").textContent) + 88
        document.getElementById("Amount2").textContent = Number(document.getElementById("Amount2").textContent) + 1
    }
    if (productName === 'Watch3') {
        document.getElementById("drp3").style.display="block";
        document.getElementById("cost").textContent = Number(document.getElementById("cost").textContent) + 99
        document.getElementById("Amount3").textContent = Number(document.getElementById("Amount3").textContent) + 1
    }
    if (productName === 'Watch4') {
        document.getElementById("drp4").style.display="block";
        document.getElementById("cost").textContent = Number(document.getElementById("cost").textContent) + 69
        document.getElementById("Amount4").textContent = Number(document.getElementById("Amount4").textContent) + 1
    }
    if (productName === 'Watch5') {
        document.getElementById("drp5").style.display="block";
        document.getElementById("cost").textContent = Number(document.getElementById("cost").textContent) + 17
        document.getElementById("Amount5").textContent = Number(document.getElementById("Amount5").textContent) + 1
    }
    if (productName === 'Watch6') {
        document.getElementById("drp6").style.display="block";
        document.getElementById("cost").textContent = Number(document.getElementById("cost").textContent) + 9
        document.getElementById("Amount6").textContent = Number(document.getElementById("Amount6").textContent) + 1
    }
}

function remFromCart(productName){
    console.log(productName)
    if (productName === 'drp1' && document.getElementById("Amount1").textContent == 1) {
        document.getElementById("drp1").style.display="none";
        document.getElementById("cost").textContent = Number(document.getElementById("cost").textContent) - 42
        document.getElementById("Amount1").textContent = Number(document.getElementById("Amount1").textContent) - 1
    }
    else if (productName === 'drp1' && document.getElementById("Amount1").textContent > 1) {
        document.getElementById("cost").textContent = Number(document.getElementById("cost").textContent) - 42
        document.getElementById("Amount1").textContent = Number(document.getElementById("Amount1").textContent) - 1
    }
    if (productName === 'drp2'  && document.getElementById("Amount2").textContent == 1) {
        document.getElementById("drp2").style.display="none";
        document.getElementById("cost").textContent = Number(document.getElementById("cost").textContent) - 88
        document.getElementById("Amount2").textContent = Number(document.getElementById("Amount2").textContent) - 1
    }

    else if (productName === 'drp2' && document.getElementById("Amount2").textContent > 1) {
        document.getElementById("cost").textContent = Number(document.getElementById("cost").textContent) - 88
        document.getElementById("Amount2").textContent = Number(document.getElementById("Amount2").textContent) - 1
    }

    if (productName === 'drp3'  && document.getElementById("Amount3").textContent == 1) {
        document.getElementById("drp3").style.display="none";
        document.getElementById("cost").textContent = Number(document.getElementById("cost").textContent) - 99
        document.getElementById("Amount3").textContent = Number(document.getElementById("Amount3").textContent) - 1
    }

    else if (productName === 'drp3' && document.getElementById("Amount3").textContent > 1) {
        document.getElementById("cost").textContent = Number(document.getElementById("cost").textContent) - 99
        document.getElementById("Amount3").textContent = Number(document.getElementById("Amount3").textContent) - 1
    }

    if (productName === 'drp4'  && document.getElementById("Amount4").textContent == 1) {
        document.getElementById("drp4").style.display="none";
        document.getElementById("cost").textContent = Number(document.getElementById("cost").textContent) - 69
        document.getElementById("Amount4").textContent = Number(document.getElementById("Amount4").textContent) - 1
    }

    else if (productName === 'drp4' && document.getElementById("Amount4").textContent > 1) {
        document.getElementById("cost").textContent = Number(document.getElementById("cost").textContent) - 69
        document.getElementById("Amount4").textContent = Number(document.getElementById("Amount4").textContent) - 1
    }

    if (productName === 'drp5'  && document.getElementById("Amount5").textContent == 1) {
        document.getElementById("drp5").style.display="none";
        document.getElementById("cost").textContent = Number(document.getElementById("cost").textContent) - 17
        document.getElementById("Amount5").textContent = Number(document.getElementById("Amount5").textContent) - 1
    }

    else if (productName === 'drp5' && document.getElementById("Amount5").textContent > 1) {
        document.getElementById("cost").textContent = Number(document.getElementById("cost").textContent) - 17
        document.getElementById("Amount5").textContent = Number(document.getElementById("Amount5").textContent) - 1
    }

    if (productName === 'drp6'  && document.getElementById("Amount6").textContent == 1) {
        document.getElementById("drp6").style.display="none";
        document.getElementById("cost").textContent = Number(document.getElementById("cost").textContent) - 9
        document.getElementById("Amount6").textContent = Number(document.getElementById("Amount6").textContent) - 1
    }

    else if (productName === 'drp6' && document.getElementById("Amount6").textContent > 1) {
        document.getElementById("cost").textContent = Number(document.getElementById("cost").textContent) - 9
        document.getElementById("Amount6").textContent = Number(document.getElementById("Amount6").textContent) - 1
    }
}
