(function () {
    "use strict";

    const data = window.JLSPT_DATA || {};

    const SEARCH_SECTIONS = [
        {
            key: "music",
            label: "Music",
            page: "music.html"
        },
        {
            key: "videos",
            label: "Video",
            page: "video.html"
        },
        {
            key: "campaigns",
            label: "Campaigns",
            page: "campaigns.html"
        },
        {
            key: "guides",
            label: "Guides",
            page: "guides.html"
        },
        {
            key: "corner",
            label: "JLSPT Corner",
            page: "corner.html"
        },
        {
            key: "community",
            label: "Community",
            page: "corner.html#community"
        }
    ];


    function escapeHTML(value) {
        return String(value ?? "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }


    function normalize(value) {
        return String(value ?? "")
            .toLowerCase()
            .trim();
    }


    function getSearchableText(item) {
        if (!item || typeof item !== "object") {
            return "";
        }

        return Object.values(item)
            .map(function (value) {
                if (Array.isArray(value)) {
                    return value
                        .map(function (entry) {
                            return getSearchableText(entry);
                        })
                        .join(" ");
                }

                if (
                    value &&
                    typeof value === "object"
                ) {
                    return getSearchableText(value);
                }

                return String(value ?? "");
            })
            .join(" ");
    }


    function createResult(
        item,
        section,
        index
    ) {
        const title =
            item.title ||
            item.name ||
            item.label ||
            "JLSPT Result";

        const description =
            item.description ||
            item.excerpt ||
            item.content ||
            item.summary ||
            "";

        const category =
            item.category ||
            item.type ||
            section.label;

        const link =
            item.link ||
            item.url ||
            section.page;

        return {
            id:
                section.key +
                "-" +
                index,
            title: title,
            description: description,
            category: category,
            section: section.label,
            link: link
        };
    }


    function collectNestedItems(
        value,
        section,
        results,
        visited
    ) {
        if (!value) {
            return;
        }

        if (Array.isArray(value)) {
            value.forEach(function (item, index) {
                if (
                    item &&
                    typeof item === "object"
                ) {
                    results.push(
                        createResult(
                            item,
                            section,
                            index
                        )
                    );

                    collectNestedItems(
                        item.releases,
                        section,
                        results,
                        visited
                    );

                    collectNestedItems(
                        item.videos,
                        section,
                        results,
                        visited
                    );

                    collectNestedItems(
                        item.items,
                        section,
                        results,
                        visited
                    );

                    collectNestedItems(
                        item.children,
                        section,
                        results,
                        visited
                    );
                }
            });

            return;
        }

        if (
            typeof value === "object" &&
            !visited.has(value)
        ) {
            visited.add(value);

            Object.keys(value).forEach(
                function (key) {
                    collectNestedItems(
                        value[key],
                        section,
                        results,
                        visited
                    );
                }
            );
        }
    }


    function getSectionItems(
        section
    ) {
        const results = [];
        const visited = new Set();

        const possibleKeys = [
            section.key,
            section.key === "videos"
                ? "video"
                : null,
            section.key === "corner"
                ? "cornerPosts"
                : null,
            section.key === "community"
                ? "communityPosts"
                : null
        ].filter(Boolean);


        possibleKeys.forEach(
            function (key) {
                if (
                    data[key] ===
                    undefined
                ) {
                    return;
                }

                collectNestedItems(
                    data[key],
                    section,
                    results,
                    visited
                );
            }
        );


        return results;
    }


    function getAllResults() {
        const results = [];

        SEARCH_SECTIONS.forEach(
            function (section) {
                results.push(
                    ...getSectionItems(
                        section
                    )
                );
            }
        );

        return results;
    }


    function search(
        query
    ) {
        const normalizedQuery =
            normalize(query);

        if (!normalizedQuery) {
            return [];
        }


        const terms =
            normalizedQuery
                .split(/\s+/)
                .filter(Boolean);


        return getAllResults()
            .filter(function (result) {

                const searchable =
                    normalize(
                        [
                            result.title,
                            result.description,
                            result.category,
                            result.section
                        ].join(" ")
                    );


                return terms.every(
                    function (term) {
                        return searchable.includes(
                            term
                        );
                    }
                );

            })
            .slice(0, 30);
    }


    function createSearchUI() {
        let overlay =
            document.getElementById(
                "global-search"
            );


        if (overlay) {
            return overlay;
        }


        overlay =
            document.createElement(
                "div"
            );


        overlay.id =
            "global-search";

        overlay.className =
            "search-modal";

        overlay.innerHTML = `
            <div
                class="search-modal-backdrop"
                data-search-close
            ></div>

            <div
                class="search-modal-panel"
                role="dialog"
                aria-modal="true"
                aria-labelledby="search-title"
            >

                <div class="search-modal-header">

                    <div>

                        <span class="eyebrow">
                            JLSPT
                        </span>

                        <h2 id="search-title">
                            Search
                        </h2>

                    </div>

                    <button
                        class="search-close"
                        type="button"
                        aria-label="Close search"
                        data-search-close
                    >
                        ×
                    </button>

                </div>


                <div class="search-input-wrap">

                    <span
                        class="search-input-icon"
                        aria-hidden="true"
                    >
                        ⌕
                    </span>

                    <input
                        id="global-search-input"
                        type="search"
                        placeholder="Search JLSPT..."
                        autocomplete="off"
                    >

                </div>


                <div
                    id="search-results"
                    class="search-results"
                >

                    <div class="search-empty">

                        <strong>
                            Search JLSPT
                        </strong>

                        <span>
                            Find music, videos, campaigns,
                            guides, Corner posts, and community
                            content.
                        </span>

                    </div>

                </div>

            </div>
        `;


        document.body.appendChild(
            overlay
        );


        return overlay;
    }


    function renderResults(
        results,
        query
    ) {
        const container =
            document.getElementById(
                "search-results"
            );


        if (!container) {
            return;
        }


        if (!query) {

            container.innerHTML = `
                <div class="search-empty">

                    <strong>
                        Search JLSPT
                    </strong>

                    <span>
                        Find music, videos, campaigns,
                        guides, Corner posts, and
                        community content.
                    </span>

                </div>
            `;

            return;
        }


        if (!results.length) {

            container.innerHTML = `
                <div class="search-empty">

                    <strong>
                        No results found.
                    </strong>

                    <span>
                        Try a different keyword or search
                        for a campaign, song, guide, or
                        JLSPT update.
                    </span>

                </div>
            `;

            return;
        }


        container.innerHTML = `
            <div class="search-result-count">
                ${results.length}
                ${
                    results.length === 1
                        ? "result"
                        : "results"
                }
            </div>

            <div class="search-result-list">

                ${results
                    .map(function (result) {

                        return `
                            <a
                                class="search-result"
                                href="${escapeHTML(
                                    result.link
                                )}"
                            >

                                <div
                                    class="search-result-meta"
                                >

                                    <span class="tag">
                                        ${escapeHTML(
                                            result.section
                                        )}
                                    </span>

                                    <span>
                                        ${escapeHTML(
                                            result.category
                                        )}
                                    </span>

                                </div>


                                <h3>
                                    ${escapeHTML(
                                        result.title
                                    )}
                                </h3>


                                ${
                                    result.description
                                        ? `
                                            <p>
                                                ${escapeHTML(
                                                    String(
                                                        result.description
                                                    ).slice(
                                                        0,
                                                        180
                                                    )
                                                )}
                                            </p>
                                        `
                                        : ""
                                }


                                <span
                                    class="search-result-arrow"
                                    aria-hidden="true"
                                >
                                    →
                                </span>

                            </a>
                        `;

                    })
                    .join("")}

            </div>
        `;
    }


    function openSearch() {
        const overlay =
            createSearchUI();


        overlay.classList.add(
            "is-open"
        );


        document.body.classList.add(
            "search-open"
        );


        const input =
            document.getElementById(
                "global-search-input"
            );


        if (input) {

            window.setTimeout(
                function () {
                    input.focus();
                },
                50
            );

        }

    }


    function closeSearch() {
        const overlay =
            document.getElementById(
                "global-search"
            );


        if (!overlay) {
            return;
        }


        overlay.classList.remove(
            "is-open"
        );


        document.body.classList.remove(
            "search-open"
        );

    }


    function setupSearch() {

        createSearchUI();


        const input =
            document.getElementById(
                "global-search-input"
            );


        if (input) {

            input.addEventListener(
                "input",
                function () {

                    const query =
                        input.value;


                    renderResults(
                        search(query),
                        query
                    );

                }
            );

        }


        document.addEventListener(
            "click",
            function (event) {

                const trigger =
                    event.target.closest(
                        "[data-search-open]"
                    );


                if (trigger) {

                    event.preventDefault();

                    openSearch();

                    return;
                }


                const closeTrigger =
                    event.target.closest(
                        "[data-search-close]"
                    );


                if (closeTrigger) {

                    event.preventDefault();

                    closeSearch();

                }

            }
        );


        document.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "/" &&
                    ![
                        "INPUT",
                        "TEXTAREA",
                        "SELECT"
                    ].includes(
                        document.activeElement.tagName
                    )
                ) {

                    event.preventDefault();

                    openSearch();

                }


                if (
                    event.key === "Escape"
                ) {

                    closeSearch();

                }

            }
        );

    }


    function init() {
        setupSearch();
    }


    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            init
        );

    } else {

        init();

    }

})();
