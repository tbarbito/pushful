document.addEventListener('DOMContentLoaded', function() {

    const cookieConsentBanner = document.getElementById('cookie-consent-banner');
    const acceptCookiesButton = document.getElementById('accept-cookies');

    // Check if user has already accepted cookies
    if (!localStorage.getItem('cookiesAccepted')) {
        // Show the banner if not accepted
        if (cookieConsentBanner) {
             // Delay showing the banner slightly to ensure page elements are loaded
            setTimeout(() => {
                cookieConsentBanner.style.display = 'flex'; // Use flex to match CSS
            }, 500);
        }
    }

    // Add event listener to the accept button
    if (acceptCookiesButton) {
        acceptCookiesButton.addEventListener('click', function() {
            // Hide the banner
            if (cookieConsentBanner) {
                cookieConsentBanner.style.display = 'none';
            }
            // Store acceptance status in localStorage
            localStorage.setItem('cookiesAccepted', 'true');
        });
    }

    // Smooth scroll for internal links (optional but good UX)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Check if it's just a placeholder link or the privacy policy link in the banner
            if (this.getAttribute('href') === '#' || this.closest('#cookie-consent-banner')) {
                return; // Don't prevent default for placeholder or banner links
            }
            
            // Check if the target element exists
            let targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                 e.preventDefault();
                 targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});

