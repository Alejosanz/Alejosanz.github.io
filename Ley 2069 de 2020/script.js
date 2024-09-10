function toggleAccordion(panelNumber) {
    const panel = document.getElementById('panel' + panelNumber);
    
    // Toggle visibility of the panel
    if (panel.style.display === 'block') {
        panel.style.display = 'none';
    } else {
        closeAllPanels();  // Close other panels if you want only one to be open at a time
        panel.style.display = 'block';
    }
}

function closeAllPanels() {
    const panels = document.querySelectorAll('.accordion-panel');
    panels.forEach(panel => panel.style.display = 'none');
}

function ampliarImagen(img) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
}

function cerrarLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}
