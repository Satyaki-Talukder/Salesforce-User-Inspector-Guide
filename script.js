// SPA Router - Salesforce User Inspector
const pages = {
    home: `
        <section class="hero">
            <div class="hero-content">
                <img src="icon.png" alt="Salesforce User Inspector Icon" class="hero-logo">
                <h1 class="hero-brand gradient-text">Salesforce User Inspector</h1>
                <p class="hero-header"><span class="gradient-text">Inspect</span> and <span class="gradient-text">Manage</span> Salesforce Users with <span class="gradient-text">Clarity and Speed</span></p>
                <p class="hero-subheader">Your ultimate Salesforce user toolkit - Inspect permissions, spot Permission Set differences, bulk-onboard users, and more without breaking a sweat.</p>
                <div class="hero-buttons">
                    <a href="https://chromewebstore.google.com/detail/salesforce-user-inspector/pnhnlclfhfokkdalcmchdikkakipjggl" target="_blank" class="btn btn-primary"><span class="btn-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="#ea4335" d="M12 12 2.474 6.5A11 11 0 0 1 21.526 6.5Z"/><path fill="#34a853" d="M12 12 21.526 6.5A11 11 0 0 1 12 23Z"/><path fill="#fbbc05" d="M12 12 12 23A11 11 0 0 1 2.474 6.5Z"/><circle cx="12" cy="12" r="6.2" fill="#ffffff"/><circle cx="12" cy="12" r="4.7" fill="#4285f4"/></svg></span>Install Extension</a>
                    <a href="#/documentation" class="btn btn-secondary">View Documentation</a>
                </div>
            </div>
        </section>
        <section class="features-section" id="features-section">
            <a href="#features-section" class="features-header">How It Simplifies Your Workflow</a>
            <div class="features-list" id="features-list">
                <ul class="features-items">
                    <li class="feature-item blue">
                        <h4 class="feature-item-header">Permission Sets & Groups</h4>
                        <p class="feature-item-text">Inspect and manage Permission Sets and Permission Set Group assignments</p>
                    </li>
                    <li class="feature-item purple">
                        <h4 class="feature-item-header">Public Groups & Queues</h4>
                        <p class="feature-item-text">View and manage Public Groups and Queues assignments</p>
                    </li>
                    <li class="feature-item green">
                        <h4 class="feature-item-header">Object & Field Permissions</h4>
                        <p class="feature-item-text">See Object and Field Permissions with their source</p>
                    </li>
                    <li class="feature-item orange">
                        <h4 class="feature-item-header">Apps, Flows & Tab Visibility</h4>
                        <p class="feature-item-text">Check Apps, Flows access and Tab Visibility</p>
                    </li>
                    <li class="feature-item pink">
                        <h4 class="feature-item-header">Record Sharing</h4>
                        <p class="feature-item-text">Check record access with Record Sharing</p>
                    </li>
                    <li class="feature-item blue">
                        <h4 class="feature-item-header">Compare Permission Sets</h4>
                        <p class="feature-item-text">Compare Permission Sets including Assigned Apps and Flows</p>
                    </li>
                    <li class="feature-item purple">
                        <h4 class="feature-item-header">Create Users</h4>
                        <p class="feature-item-text">Create users with mapped assignments in one go</p>
                    </li>
                </ul>
            </div>
        </section>
    `,
    documentation: getDocumentationPage(),
    'release-notes': getReleaseNotesPage(),
    'privacy-policy': getPrivacyPolicyPage()
};

const pageTitles = {
    home: 'Home',
    documentation: 'Documentation',
    'release-notes': 'Release Notes',
    'privacy-policy': 'Privacy Policy'
};

function getCurrentPage() {
    const hash = window.location.hash.replace(/^#\/?/, '');
    return pages[hash] ? hash : 'home';
}

function renderPage() {
    const page = getCurrentPage();
    const app = document.getElementById('app');
    app.innerHTML = pages[page];
    document.title = `${pageTitles[page]} - Salesforce User Inspector`;

    // Update active state on menu and footer links
    document.querySelectorAll('[data-page]').forEach(link => {
        link.classList.toggle('active', link.dataset.page === page);
    });

    // Scroll to top on page change
    window.scrollTo(0, 0);

    // Initialize release notes sidebar navigation
    if (page === 'release-notes') {
        initReleaseNotesSidebar();
    }
}

// Handle hash changes
window.addEventListener('hashchange', renderPage);

// Initial render
renderPage();