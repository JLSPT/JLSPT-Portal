(function () {
    "use strict";

    const NAV_ITEMS = [
        { label: "HOME", href: "index.html" },
        { label: "MUSIC", href: "music.html" },
        { label: "VIDEO", href: "video.html" },
        { label: "CAMPAIGNS", href: "campaigns.html" },
        { label: "SCHEDULE", href: "schedule.html" },
        { label: "GUIDES", href: "guides.html" },
        { label: "CORNER", href: "corner.html" },
        { label: "MY JLSPT", href: "my-jlspt.html" }
    ];

    function getCurrentPage() {
        const path = window.location.pathname;
        const file = path.split("/").pop();

        if (!file || file === "/") {
            return "index.html";
        }

        return file.toLowerCase();
    }

    function createNavigation() {
        const navLinks = document.querySelector(".nav-links");

        if (!navLinks) {
            return;
        }

        const currentPage = getCurrentPage();

        navLinks.innerHTML = "";

        NAV_ITEMS.forEach(function (item) {
            const link = document.createElement("a");

            link.href = item.href;
            link.textContent = item.label;

            if (currentPage === item.href.toLowerCase()) {
                link.classList.add("active");
                link.setAttribute("aria-current", "page");
            }

            navLinks.appendChild(link);
        });
    }

    function createMobileToggle() {
        const navInner = document.querySelector(".nav-inner");
        const navLinks = document.querySelector(".nav-links");

        if (!navInner || !navLinks) {
            return;
        }

        let toggle = document.querySelector(".mobile-menu-toggle");

        if (!toggle) {
            toggle = document.createElement("button");

            toggle.type = "button";
            toggle.className = "mobile-menu-toggle";
            toggle.setAttribute("aria-label", "Open navigation menu");
            toggle.setAttribute("aria-expanded", "false");
            toggle.setAttribute("aria-controls", "site-navigation");
            toggle.innerHTML = `
                <span></span>
                <span></span>
                <span></span>
            `;

            navInner.appendChild(toggle);
        }

        navLinks.id = "site-navigation";

        toggle.addEventListener("click", function () {
            const isOpen = navLinks.classList.toggle("mobile-open");

            toggle.classList.toggle("is-open", isOpen);
            toggle.setAttribute("aria-expanded", String(isOpen));
            toggle.setAttribute(
                "aria-label",
                isOpen ? "Close navigation menu" : "Open navigation menu"
            );

            document.body.classList.toggle("menu-open", isOpen);
        });

        navLinks.addEventListener("click", function (event) {
            const clickedLink = event.target.closest("a");

            if (!clickedLink) {
                return;
            }

            closeMobileMenu();
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                closeMobileMenu();
            }
        });

        document.addEventListener("click", function (event) {
            const isOpen = navLinks.classList.contains("mobile-open");

            if (!isOpen) {
                return;
            }

            if (
                !navInner.contains(event.target) &&
                !navLinks.contains(event.target)
            ) {
                closeMobileMenu();
            }
        });

        window.addEventListener("resize", function () {
            if (window.innerWidth > 900) {
                closeMobileMenu();
            }
        });

        function closeMobileMenu() {
            navLinks.classList.remove("mobile-open");
            toggle.classList.remove("is-open");
            toggle.setAttribute("aria-expanded", "false");
            toggle.setAttribute("aria-label", "Open navigation menu");
            document.body.classList.remove("menu-open");
        }
    }

    function initNavigation() {
        createNavigation();
        createMobileToggle();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initNavigation);
    } else {
        initNavigation();
    }
})();
