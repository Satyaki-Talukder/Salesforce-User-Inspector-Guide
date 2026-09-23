// Release Notes data and rendering - Salesforce User Inspector

// Version to release notes mapping (descending order)
const releaseNotes = [
    {
        version: '2.2.1',
        date: '22nd September, 2026',
        tags: ['Latest'],
        features: [
            'Added a new menu - Create Users.',
            'Add users manually or paste from Excel/CSV.',
            'Map assignments like Permission Sets, Permission Set Groups, Public Groups and Queues, auto-applied to all added users.',
            'Review and create users, with assignment records inserted automatically.',
            'User creation is processed via the Composite API, loading up to 25 user records per batch.',
            'Minor refactoring of existing code.'
        ]
    },
    {
        version: '2.1.0',
        date: '16th August, 2026',
        features: [
            'Added Permission Set Groups, Apps and Flows Access and Tab Visibility side-menus under Inspect User.',
            'Added Assigned Apps and Flows side-menus under Compare Permission Sets.',
            'Rearranged side-menu sequence for Compare Permission Sets menu to mostly follow alphabetical order.',
            'Removed unnecessary element spacings to accommodate more area for the actual content.',
            'Fixed some styling issues.'
        ]
    },
    {
        version: '2.0.0',
        date: '05th August, 2026',
        features: [
            'Rebuilt using ReactJS + TypeScript replacing previous vanilla JS implementation.',
            'Cleaner and more consistent UI/UX.',
            'No Connected App authentication required now. It uses existing logged-in Salesforce session.',
            'Now a floating icon shows on the right of the active Salesforce logged-in session tab for quick access.',
            'Sub-menus and other options like search, are moved to the left sidebar.',
            'New buttons added for few sidebar menus to view the details directly in Salesforce.',
            'Introduced a settings button on the top-right corner that includes new theming system, and displays Salesforce API version used.',
            'The current themes include Blue and Teal.',
            'Redesigned few areas for each menu content.'
        ]
    },
    {
        version: '1.2.0',
        date: '07th July, 2026',
        features: [
            'Redesigned how the inpected user name is shown.',
            'Added pill shaped tabbing system for more operations which is not related to a specific inspected user.',
            'Added a new tab for Permission Set Comparison.'
        ]
    },
    {
        version: '1.1.0',
        date: '08th June, 2026',
        features: [
            "Added new tab - 'Record Sharing'",
            "Get related Object and it's OWD and record ownership under the tab.",
            'Analyze how the data is being shared with the user based on share object.',
            'View the record-level access of the user.'
        ]
    },
    {
        version: '1.0.0',
        date: 'Initial Release - 20th May, 2026',
        features: [
            'Initial release',
            'Manage Permission Sets and Permission Set Groups assignments.',
            'Manage Public Group assignments',
            'Manage Queue assignments',
            'View Object and Field permissions with their source'
        ]
    }
];

// Generate the release notes page HTML with sidebar and content boxes
function getReleaseNotesPage() {
    return `
        <div class="release-container">
            <div class="release-header">
                <h1>Release Notes</h1>
                <p>Stay up to date with the latest features and improvements to Salesforce User Inspector.</p>
            </div>

            <div class="release-layout">
                <aside class="release-sidebar">
                    <h3 class="release-sidebar-title">Versions</h3>
                    <nav class="release-nav">
                        ${releaseNotes.map(release => `
                            <a href="#" class="release-nav-link" data-release-version="${release.version}">
                                <span class="release-nav-version">Version ${release.version}</span>
                                <span class="release-nav-separator">-</span>
                                <span class="release-nav-date">${release.date}</span>
                            </a>
                        `).join('')}
                    </nav>
                </aside>
                <div class="release-content">
                    ${releaseNotes.map(release => `
                        <div class="release-version" id="release-${release.version}">
                            <h2>Version ${release.version}${release.tags ? release.tags.map(tag => ` <span class="release-tag">${tag}</span>`).join('') : ''}</h2>
                            <p class="version-date">${release.date}</p>
                            <h3>Features & Bugs</h3>
                            <ul>
                                ${release.features.map(feature => `<li>${feature}</li>`).join('')}
                            </ul>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

// Attach click handlers to sidebar links for smooth auto-scroll
function initReleaseNotesSidebar() {
    document.querySelectorAll('.release-nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const version = link.dataset.releaseVersion;
            const target = document.getElementById(`release-${version}`);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}