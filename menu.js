/*
 * JLSPT
 * JL Streaming Project Team
 *
 * Global navigation
 *
 * Main navigation is intentionally compact.
 *
 * Home
 * Music
 * Video
 * Campaigns
 * Schedule
 * Guides
 * Corner
 * My JLSPT
 */

document.addEventListener("DOMContentLoaded", function () {

    const navbar = document.querySelector(".navbar");
    const navInner = document.querySelector(".nav-inner");
    const navLinks = document.querySelector(".nav-links");

    if (!navbar || !navInner || !navLinks) return;


    /*
     * ============================================================
     * MOBILE MENU BUTTON
     * ============================================================
     */

    const menuButton = document.createElement("button");

    menuButton.className = "mobile-menu-button";

    menuButton.setAttribute(
        "aria-label",
        "Open navigation"
    );

    menuButton.setAttribute(
        "aria-expanded",
        "false"
    );

    menuButton.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;

    navInner.appendChild(menuButton);


    /*
     * ============================================================
     * MOBILE NAVIGATION STYLES
     *
     * Colors are controlled through CSS variables where available.
     * ============================================================
     */

    const mobileStyle = document.createElement("style");

    mobileStyle.textContent = `

        .mobile-menu-button {
            display: none;
            width: 42px;
            height: 42px;
            padding: 0;
            border: 1px solid var(--border, #44202a);
            border-radius: 12px;
            background: var(--card, #241016);
            cursor: pointer;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 5px;
            flex-shrink: 0;
        }

        .mobile-menu-button span {
            display: block;
            width: 18px;
            height: 2px;
            border-radius: 10px;
            background: var(--text, #fff5f6);
            transition: 0.25s ease;
        }

        .mobile-menu-button:hover {
            border-color: var(--accent, #e63950);
            background: var(--card-hover, #2c1219);
        }

        @media (max-width: 760px) {

            .mobile-menu-button {
                display: flex;
            }

            .nav-inner {
                position: relative;
            }

            .nav-links {
                display: none;

                position: absolute;

                top: calc(100% + 1px);

                left: 0;
                right: 0;

                padding: 12px 18px 18px;

                flex-direction: column;

                align-items: stretch;

                gap: 4px;

                background: var(
                    --nav-mobile,
                    rgba(18, 7, 11, 0.98)
                );

                border-bottom: 1px solid var(--border, #44202a);

                box-shadow:
                    0 20px 35px rgba(0, 0, 0, 0.45);

                z-index: 1000;
            }

            .nav-links.mobile-open {
                display: flex;
            }

            .nav-links a {
                display: block;

                padding: 13px 14px;

                border-radius: 10px;

                font-size: 14px;
            }

            .nav-links a:hover {
                padding-left: 14px;

                background:
                    var(--card, #241016);
            }

            .mobile-menu-button.active
            span:nth-child(1) {
                transform:
                    translateY(7px)
                    rotate(45deg);
            }

            .mobile-menu-button.active
            span:nth-child(2) {
                opacity: 0;
            }

            .mobile-menu-button.active
            span:nth-child(3) {
                transform:
                    translateY(-7px)
                    rotate(-45deg);
            }
        }

    `;

    document.head.appendChild(mobileStyle);


    /*
     * ============================================================
     * OPEN / CLOSE MENU
     * ============================================================
     */

    menuButton.addEventListener("click", function () {

        const isOpen =
            navLinks.classList.toggle("mobile-open");

        menuButton.classList.toggle(
            "active",
            isOpen
        );

        menuButton.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

        menuButton.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation"
                : "Open navigation"
        );

    });


    /*
     * ============================================================
     * CLOSE AFTER NAVIGATION
     * ============================================================
     */

    navLinks
        .querySelectorAll("a")
        .forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    navLinks.classList.remove(
                        "mobile-open"
                    );

                    menuButton.classList.remove(
                        "active"
                    );

                    menuButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    menuButton.setAttribute(
                        "aria-label",
                        "Open navigation"
                    );

                }
            );

        });


    /*
     * ============================================================
     * CLOSE MENU WHEN RESIZING TO DESKTOP
     * ============================================================
     */

    window.addEventListener(
        "resize",
        function () {

            if (window.innerWidth > 760) {

                navLinks.classList.remove(
                    "mobile-open"
                );

                menuButton.classList.remove(
                    "active"
                );

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }
    );

});
