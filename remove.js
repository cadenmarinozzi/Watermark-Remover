let link = ""; // Put the watermark href/src link here

function loop() {
    let removed = false; // Put this above the function if you want to stop the loop after removing it once (Sometimes hosts don't loop create watermarks)

    if (!removed) {
        setTimeout(function() {
            let elements = document.getElementsByTagName("a");
            
            for (let index = 0; index < elements.length; index++) {
                let element = elements[index];
                
                if (element.href === "") {
                    element.remove();
                    removed = true;
                }
            }

            if (!removed) { // Sometimes hosts use images for watermarks
                let elements = document.getElementsByTagName("img");
            
                for (let index = 0; index < elements.length; index++) {
                    let element = elements[index];
                    
                    if (element.src === link) {
                        element.remove();
                        removed = true;
                    }
                }
            }
            
            loop();
        }, 0);
    }
}

loop();
