const url = ''; // Put the watermark href/src link here

function animate() {
    let removed = false; // Put this above the function if you want to stop the loop after removing it once (Sometimes hosts don't loop create watermarks)
    if (removed) return;

    const elements = document.querySelectorAll('a, img');
    
    elements.forEach(elem => {        
        if (elem.href !== url && elem.src !== url) return;

        elem.remove();
        removed = true;
    });

    requestAnimationFrame(animate);
}

animate();
