function changeImage() {
    // 1. Weydiiso isticmaalaha URL-ka sawirka cusub
    let newUrl = prompt("Geli URL-ka sawirka cusub:");
    
    // 2. Weydiiso lixanka/midabka xadka (border color)
    let borderColor = prompt("Geli midabka xadka (tusaale: red, blue, #ff0000):");
    
    // 3. Weydiiso ballaca sawirka (width)
    let newWidth = prompt("Geli ballaca sawirka (pixels):");
    
    // 4. Weydiiso dhererka sawirka (height)
    let newHeight = prompt("Geli dhererka sawirka pixels:");
    
    // 5. Weydiiso wareegga geesaha (border radius)
    let borderRadius = prompt("Geli wareegga geesaha/border radius (pixels):");
    
    // Soo qabashada curiyaha sawirka (Image element)
    let imageElement = document.getElementById("myImage");
    
    // 6. U xeejee qaabka sawirka si babac-dhac ah (dynamic)
    if (newUrl) {
        imageElement.src = newUrl;
    }
    if (borderColor) {
        imageElement.style.border = `4px solid ${borderColor}`;
    }
    if (newWidth) {
        imageElement.style.width = newWidth + "px";
    }
    if (newHeight) {
        imageElement.style.height = newHeight + "px";
    }
    if (borderRadius) {
        imageElement.style.borderRadius = borderRadius + "px";
    }
}