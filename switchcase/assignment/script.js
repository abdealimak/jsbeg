mode = "";

function runSwitch() {
    switch (mode) {

        case "family":
            document.getElementById("modeText").innerText = "Family Mode ON";
            document.getElementById("modeImage").src = "images/family.jpeg";
            break;

        case "teen":
            document.getElementById("modeText").innerText = "Teen Mode ON";
            document.getElementById("modeImage").src = "images/teen.jpg";
            break;

        case "kids":
            document.getElementById("modeText").innerText = "Kids Mode ON";
            document.getElementById("modeImage").src = "images/kids.jpeg";
            break;
    }
}
