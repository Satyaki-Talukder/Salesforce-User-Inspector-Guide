// Privacy Policy page - Salesforce User Inspector

// Generate the privacy policy page HTML
function getPrivacyPolicyPage() {
    return `
        <div class="policy-header">
            <h1>Privacy Policy</h1>
            <p>How data is processed for Salesforce User Inspector.</p>
        </div>

        <div class="policy-container">
            <div class="policy-layout">
                <div class="policy-content">
                    <div class="policy-section">
                        <h2>Data Collection</h2>
                        <p>Salesforce User Inspector accesses your Salesforce organization data solely to provide the functionality described in the documentation. The extension uses your existing logged-in Salesforce session to communicate with Salesforce APIs on your behalf.</p>
                        <ul>
                            <li>User profile information (name, email, username)</li>
                            <li>Permission Set and Permission Set Group assignments</li>
                            <li>Public Group memberships</li>
                            <li>Queue assignments</li>
                            <li>Apps, Flows access and Tab Visibility</li>
                            <li>Object and field-level permissions</li>
                            <li>Record-level access and sharing information</li>
                            <li>Data you provide when creating users, such as user details and their mapped assignments</li>
                        </ul>
                    </div>
                    
                    <div class="policy-section">
                        <h2>Data Usage</h2>
                        <p>All data accessed through this extension is processed locally within your browser. We do not transmit any of your Salesforce data to external servers beyond what's necessary for authentication with Salesforce.</p>
                        <ul>
                            <li>Data is used solely to display user permission information</li>
                            <li>When you use the Create Users feature, the data you provide is used only to create the selected user records and their mapped assignments in your Salesforce org</li>
                            <li>No data is stored on external servers</li>
                            <li>No analytics or tracking of your Salesforce data</li>
                        </ul>
                    </div>
                    
                    <div class="policy-section">
                        <h2>Data Storage</h2>
                        <p>This extension does not persistently store any of your Salesforce data. All information is retrieved in real-time when you use the extension and is cleared when you close the browser or log out.</p>
                        <ul>
                            <li>No OAuth tokens are stored; the extension relies on your existing Salesforce session</li>
                            <li>Configuration data (organization URLs) is stored locally only</li>
                            <li>You can clear all stored data by removing the extension</li>
                        </ul>
                    </div>

                    <div class="policy-section">
                        <h2>Session</h2>
                        <p>The extension relies on your existing logged-in Salesforce browser session to authenticate API requests. It does not prompt for credentials or store passwords.</p>
                        <ul>
                            <li>No login credentials are collected or stored</li>
                            <li>Session data is managed entirely by your browser</li>
                        </ul>
                    </div>

                    <div class="policy-section">
                        <h2>Cookies</h2>
                        <p>This extension uses browser cookies solely to establish and maintain an authenticated connection with your Salesforce org. These cookies are used only for session authentication required by the extension's features.</p>
                        <ul>
                            <li>No third-party cookies are used</li>
                            <li>No tracking cookies or analytics or sharing</li>
                        </ul>
                    </div>
                </div>
                <aside class="policy-sidebar">
                    <div class="policy-sidebar-box">
                        <h3 class="policy-sidebar-title">Contact</h3>
                        <p class="policy-sidebar-text">If you have any questions or concerns about this privacy policy, please contact us through the support form.</p>
                        <a href="https://forms.gle/FMvMfe7UCnQnCCdW8" target="_blank" rel="noreferrer noopener" class="policy-sidebar-link">Support and Feedback form</a>
                    </div>
                </aside>
            </div>
        </div>
    `;
}