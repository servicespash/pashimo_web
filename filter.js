/**
 * Pashimo Placement Board Real-Time Search & Structural Filtering Logic
 * Engineered for fast processing environments on local mobile & desktop rendering viewports.
 */

document.addEventListener("DOMContentLoaded", () => {
    const mainSearchInput = document.getElementById("jobSearchInput");

    // Standard Landing Page Filter Hook (Safe Failover check if executed on index.html)
    if (mainSearchInput) {
        mainSearchInput.addEventListener("input", (event) => {
            const query = event.target.value.toLowerCase().trim();
            const rows = document.querySelectorAll(".job-table tbody tr");

            rows.forEach(row => {
                const positionCell = row.querySelector("td:nth-child(2)");
                if (positionCell) {
                    const positionText = positionCell.textContent.toLowerCase();
                    if (positionText.includes(query)) {
                        row.style.display = "";
                    } else {
                        row.style.display = "none";
                    }
                }
            });
        });
    }
});
