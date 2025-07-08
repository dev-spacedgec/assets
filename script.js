// Custom JavaScript - script.js
document.addEventListener('DOMContentLoaded', function() {
    // Download button functionality
    const downloadBtn = document.getElementById('downloadBtn');
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Google Drive link
            const driveLink = 'https://drive.google.com/file/d/1t8s0Cg381_XNHoyP-NasnJeGBDRHqS4C/';
            
            // Show loading state
            const originalContent = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Preparing...';
            this.disabled = true;
            
            setTimeout(() => {
                // Open the drive link
                window.open(driveLink, '_blank');
                
                // Reset button
                this.innerHTML = originalContent;
                this.disabled = false;
            }, 1000);
        });
    }
});