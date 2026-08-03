document.addEventListener("DOMContentLoaded", () => {
    showSection("overview");
});

function showSection(section) {

    // Remove active class
    document.querySelectorAll(".sidebar-menu li").forEach(item => {
        item.classList.remove("active");
    });

    const activeItem = document.getElementById(section);

    if (activeItem) {
        activeItem.classList.add("active");
    }

    const pageTitle = document.getElementById("pageTitle");
    const contentArea = document.getElementById("contentArea");

    switch (section) {

        case "overview":

            pageTitle.innerHTML = "Overview";

            fetch("../html/overview.html")
                .then(response => response.text())
                .then(html => {
                    contentArea.innerHTML = html;
                });

            break;

        case "emails":

            pageTitle.innerHTML = "All Emails";

            contentArea.innerHTML = `
                <div class="dashboard-card">
                    <h2>All Emails</h2>
                    <p>Email page coming soon...</p>
                </div>
            `;

            break;

        case "actionItems":

            pageTitle.innerHTML = "Action Items";

            contentArea.innerHTML = `
                <div class="dashboard-card">
                    <h2>Action Items</h2>
                    <p>Action Items page coming soon...</p>
                </div>
            `;

            break;

        case "topics":

            pageTitle.innerHTML = "Topics";

            contentArea.innerHTML = `
                <div class="dashboard-card">
                    <h2>Topics</h2>
                    <p>Topics page coming soon...</p>
                </div>
            `;

            break;

        case "people":

            pageTitle.innerHTML = "People";

            contentArea.innerHTML = `
                <div class="dashboard-card">
                    <h2>People</h2>
                    <p>People page coming soon...</p>
                </div>
            `;

            break;

        case "decisions":

            pageTitle.innerHTML = "Decisions";

            contentArea.innerHTML = `
                <div class="dashboard-card">
                    <h2>Decisions</h2>
                    <p>Decisions page coming soon...</p>
                </div>
            `;

            break;
    }

}