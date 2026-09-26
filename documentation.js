// Documentation page - Salesforce User Inspector

// Generate the documentation page HTML
function getDocumentationPage() {
    return `
        <div class="doc-header">
            <h1>Documentation</h1>
            <p>Welcome to the Salesforce User Inspector documentation. This extension helps you analyze and manage Salesforce users with ease.</p>
        </div>

        <div class="doc-container">
            <div class="doc-layout">
                <div class="doc-content">
                    <div class="doc-section">
                        <h2>Features</h2>
                        <p>Salesforce User Inspector provides a comprehensive set of tools for analyzing user permissions and access:</p>
                        <ul>
                            <li>Inspect Permission Set and Permission Set Group assignments</li>
                            <li>View and manage Public Group memberships</li>
                            <li>Manage Queue assignments and access</li>
                            <li>Check Apps and Flows access and Tab Visibility</li>
                            <li>Analyze object and field-level permissions along with their source</li>
                            <li>Analyze a user's record-level access, ownership, OWD of the object, and how the record is shared.</li>
                            <li>Compare Permission Sets access differences, including Assigned Apps and Flows</li>
                            <li>Create users manually or by pasting details from Excel/CSV, with mapped assignments applied automatically, in bulk using composite API.</li>
                        </ul>
                    </div>
                    
                    <div class="doc-section">
                        <h2>Getting Started</h2>
                        <h3>Installation</h3>
                        <p>Install the extension from the Chrome Web Store. No Connected App or OAuth setup is required.</p>
                        
                        <h3>Using the Extension</h3>
                        <p>The extension uses your existing logged-in Salesforce session to connect.</p>
                        <ul>
                            <li>Uses existing logged-in Salesforce session to connect</li>
                            <li>Once installed, the extension icon will appear on the active Salesforce org tab</li>
                            <li>If not, refresh the page to see it</li>
                            <li>Click on the icon for the extension to open in a new tab</li>
                        </ul>
                    </div>
                </div>
                <aside class="doc-sidebar">
                    <div class="doc-sidebar-box">
                        <h3 class="doc-sidebar-title">Support</h3>
                        <p class="doc-sidebar-text">If you encounter any issues or have questions, please fill up the form using the link below.</p>
                        <a href="https://forms.gle/FMvMfe7UCnQnCCdW8" target="_blank" rel="noreferrer noopener" class="doc-sidebar-link">Support and Feedback form</a>
                    </div>
                </aside>
            </div>
        </div>
    `;
}