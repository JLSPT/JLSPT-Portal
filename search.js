(function () {
    "use strict";

    /*
     * =========================================================
     * JLSPT GLOBAL SEARCH
     * =========================================================
     *
     * Searches across:
     * HOME
     * MUSIC
     * VIDEO
     * CAMPAIGNS
     * SCHEDULE
     * GUIDES
     * JLSPT CORNER
     * COMMUNITY
     *
     * This file is intentionally independent from the visual
     * styling. style.css controls how search elements look.
     * =========================================================
     */

    const SEARCH_SOURCES = [
        {
            title: "Home",
            url: "index.html",
            keywords: [
                "home",
                "jl",
                "jlspt",
                "jl streaming project team",
                "current focus",
                "streaming",
                "alon"
            ]
        },

        {
            title: "Music",
            url: "music.html",
            keywords: [
                "music",
                "songs",
                "jl solo",
                "alon",
                "ahof",
                "who we are",
                "the passage",
                "run to you",
                "pinocchio",
                "focus on you",
                "ost"
            ]
        },

        {
            title: "Video",
            url: "video.html",
            keywords: [
                "video",
                "videos",
                "music video",
                "alon",
                "official mv",
                "lyric video",
                "ahof",
                "who we are",
                "the passage",
                "run to you",
                "pinocchio",
                "hello",
                "muniverse",
                "fancam",
                "interview",
                "variety"
            ]
        },

        {
            title: "Campaigns",
            url: "campaigns.html",
            keywords: [
                "campaign",
                "campaigns",
                "streaming campaign",
                "mission",
                "alon",
                "1m",
                "1000000",
                "milestone",
                "goal",
                "progress"
            ]
        },

        {
            title: "Schedule",
            url: "schedule.html",
            keywords: [
                "schedule",
                "schedules",
                "activity",
                "activities",
                "streaming session",
                "regular",
                "event",
                "campaign",
                "upcoming",
                "past"
            ]
        },

        {
            title: "Guides",
            url: "guides.html",
            keywords: [
                "guide",
                "guides",
                "start here",
                "getting started",
                "streaming basics",
                "spotify",
                "youtube",
                "stationhead",
                "alon streaming mission",
                "troubleshooting",
                "faq",
                "help"
            ]
        },

        {
            title: "JLSPT Corner",
            url: "corner.html",
            keywords: [
                "corner",
                "jlspt corner",
                "announcement",
                "streaming notice",
                "campaign update",
                "schedule",
                "resource",
                "milestone",
                "reminder",
                "community"
            ]
        },

        {
            title: "Community",
            url: "corner.html",
            keywords: [
                "community",
                "discussion",
                "questions",
                "help",
                "achievements",
                "milestones",
                "general",
                "streaming discussion",
                "campaign discussion"
            ]
        },

        {
            title: "My JLSPT",
            url: "my-jlspt.html",
            keywords: [
                "my jlspt",
                "profile",
                "participation",
                "badges",
                "campaigns",
                "missions",
                "activity history",
                "member"
            ]
        }
    ];


    /*
     * =========================================================
     * NORMALIZE TEXT
     * =========================================================
     */

    function normalize(value) {
        return String(value || "")
            .toLowerCase()
            .trim()
            .replace(/\s+/g, " ");
    }


    /*
     * =========================================================
     * SEARCH
     * =========================================================
     */

    function search(query) {
        const normalizedQuery = normalize(query);

        if (!normalizedQuery) {
            return [];
        }

        const words = normalizedQuery
            .split(" ")
            .filter(Boolean);

        return SEARCH_SOURCES
            .map(function (source) {

                const searchableText = normalize(
                    [
                        source.title,
                        source.keywords.join(" ")
                    ].join(" ")
                );

                let score = 0;

                if (
                    searchableText.includes(
                        normalizedQuery
                    )
                ) {
                    score += 10;
                }

                if (
                    normalize(source.title) ===
                    normalizedQuery
                ) {
                    score += 20;
                }

                words.forEach(function (word) {

                    if (
                        normalize(source.title)
                            .includes(word)
                    ) {
                        score += 5;
                    }

                    source.keywords.forEach(
                        function (keyword) {

                            if (
                                normalize(keyword)
                                    .includes(word)
                            ) {
                                score += 2;
                            }
                        }
                    );
                });

                return {
                    title: source.title,
                    url: source.url,
                    score: score
                };
            })
            .filter(function (result) {
                return result.score > 0;
            })
            .sort(function (a, b) {
                return b.score - a.score;
            });
    }


    /*
     * =========================================================
     * CREATE RESULT CARD
     * =========================================================
     */

    function createResult(result) {

        const item = document.createElement("a");

        item.href = result.url;
        item.className = "search-result";

        item.innerHTML = `
            <div class="search-result-content">
                <span class="search-result-label">
                    JLSPT
                </span>

                <strong class="search-result-title">
                    ${escapeHTML(result.title)}
                </strong>
            </div>

            <span class="search-result-arrow">
                →
            </span>
        `;

        return item;
    }


    /*
     * =========================================================
     * RENDER RESULTS
     * =========================================================
     */

    function renderResults(results, container) {

        if (!container) {
            return;
        }

        container.innerHTML = "";

        if (!results.length) {

            const empty = document.createElement("div");

            empty.className = "search-empty";

            empty.innerHTML = `
                <strong>
                    No results found
                </strong>

                <p>
                    Try another keyword such as
                    ALON, streaming, guides, campaigns,
                    schedule, or community.
                </p>
            `;

            container.appendChild(empty);

            return;
        }

        results.forEach(function (result) {

            container.appendChild(
                createResult(result)
            );
        });
    }


    /*
     * =========================================================
     * ESCAPE HTML
     * =========================================================
     */

    function escapeHTML(value) {

        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }


    /*
     * =========================================================
     * SEARCH FORM
     * =========================================================
     */

    function initializeSearchForm() {

        const forms =
            document.querySelectorAll(
                "[data-search-form]"
            );

        forms.forEach(function (form) {

            const input =
                form.querySelector(
                    "[data-search-input]"
                );

            const resultsContainer =
                form.querySelector(
                    "[data-search-results]"
                );

            if (!input) {
                return;
            }

            form.addEventListener(
                "submit",
                function (event) {

                    event.preventDefault();

                    const query =
                        input.value.trim();

                    const results =
                        search(query);

                    renderResults(
                        results,
                        resultsContainer
                    );
                }
            );


            input.addEventListener(
                "input",
                function () {

                    const query =
                        input.value.trim();

                    if (!query) {

                        if (resultsContainer) {
                            resultsContainer.innerHTML = "";
                        }

                        return;
                    }

                    const results =
                        search(query);

                    renderResults(
                        results,
                        resultsContainer
                    );
                }
            );

        });
    }


    /*
     * =========================================================
     * GLOBAL SEARCH FUNCTION
     * =========================================================
     *
     * Makes the search function available to other JLSPT
     * scripts without exposing internal source data.
     * =========================================================
     */

    window.JLSPTSearch = {
        search: search
    };


    /*
     * =========================================================
     * INITIALIZE
     * =========================================================
     */

    function initialize() {
        initializeSearchForm();
    }


    if (
        document.readyState ===
        "loading"
    ) {
        document.addEventListener(
            "DOMContentLoaded",
            initialize
        );
    } else {
        initialize();
    }

})();
