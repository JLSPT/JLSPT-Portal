/*
 * JLSPT
 * Global Search
 *
 * Searches:
 * Home
 * Music
 * Video
 * Campaigns
 * Schedule
 * Guides
 * Updates
 */


document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* =====================================
           ELEMENTS
        ====================================== */

        const searchInput =
            document.querySelector(
                ".search-box input"
            );


        const searchBox =
            document.querySelector(
                ".search-box"
            );


        if (
            !searchInput ||
            !searchBox
        ) {

            return;

        }



        /* =====================================
           STATIC SITE PAGES
        ====================================== */

        const searchData = [

            {
                title: "Home",
                description:
                    "JLSPT dashboard and quick access to JL streaming resources.",
                keywords:
                    "home dashboard jlsp jl streaming",
                url: "index.html"
            },

            {
                title: "Music",
                description:
                    "JL and AHOF music resources.",
                keywords:
                    "music jl ahof alon focus on you spotify apple music songs releases streaming",
                url: "music.html"
            },

            {
                title: "Video",
                description:
                    "JL music videos, performances, fancams, and content.",
                keywords:
                    "video youtube mv music video fancam hello muniverse performance content",
                url: "video.html"
            },

            {
                title: "Campaigns",
                description:
                    "JLSPT campaigns, goals, progress, milestones, and missions.",
                keywords:
                    "campaign tracker progress goal milestone mission streaming voting youtube alon views",
                url: "campaigns.html"
            },

            {
                title: "Schedule",
                description:
                    "Regular streaming activities and upcoming JLSPT events.",
                keywords:
                    "schedule activities events streaming stationhead sessions regular upcoming",
                url: "schedule.html"
            },

            {
                title: "Guides",
                description:
                    "Streaming guides, tutorials, resources, and troubleshooting help.",
                keywords:
                    "guides spotify youtube stationhead tutorial help faq troubleshooting streaming basics",
                url: "guides.html"
            },

            {
                title: "Updates",
                description:
                    "JLSPT announcements, JL content updates, and campaign news.",
                keywords:
                    "updates news announcement new content hello muniverse campaign resources",
                url: "updates.html"
            }

        ];



        /* =====================================
           DATA HELPERS
        ====================================== */

        function addDataResults() {

            if (
                typeof JLSPT_DATA ===
                "undefined"
            ) {

                return;

            }



            /* ================================
               MUSIC
            ================================= */

            if (
                Array.isArray(
                    JLSPT_DATA.music
                )
            ) {

                JLSPT_DATA.music.forEach(
                    function (item) {

                        searchData.push({

                            title:
                                item.title,

                            description:
                                item.description ||
                                `${item.artist || "JL"} music resource.`,

                            keywords: [

                                item.title,

                                item.artist,

                                item.category,

                                item.type,

                                item.era,

                                "music",

                                "song",

                                "streaming",

                                "jl",

                                "ahof"

                            ]
                                .filter(Boolean)
                                .join(" "),

                            url:
                                "music.html"

                        });

                    }
                );

            }



            /* ================================
               VIDEOS
            ================================= */

            if (
                Array.isArray(
                    JLSPT_DATA.videos
                )
            ) {

                JLSPT_DATA.videos.forEach(
                    function (item) {

                        searchData.push({

                            title:
                                item.title,

                            description:
                                item.description ||
                                `${item.artist || "JL"} video resource.`,

                            keywords: [

                                item.title,

                                item.artist,

                                item.category,

                                item.type,

                                item.platform,

                                "video",

                                "youtube",

                                "jl",

                                "ahof",

                                "muniverse",

                                "fancam"

                            ]
                                .filter(Boolean)
                                .join(" "),

                            url:
                                "video.html"

                        });

                    }
                );

            }



            /* ================================
               CAMPAIGNS
            ================================= */

            if (
                Array.isArray(
                    JLSPT_DATA.campaigns
                )
            ) {

                JLSPT_DATA.campaigns.forEach(
                    function (item) {

                        const milestoneText =
                            Array.isArray(
                                item.milestones
                            )
                                ? item.milestones
                                    .map(
                                        function (milestone) {
                                            return (
                                                milestone.label +
                                                " " +
                                                milestone.value
                                            );
                                        }
                                    )
                                    .join(" ")
                                : "";


                        const missionText =
                            Array.isArray(
                                item.missions
                            )
                                ? item.missions
                                    .map(
                                        function (mission) {
                                            return (
                                                mission.title +
                                                " " +
                                                mission.description
                                            );
                                        }
                                    )
                                    .join(" ")
                                : "";


                        searchData.push({

                            title:
                                item.title,

                            description:
                                item.description ||
                                "JLSPT campaign.",

                            keywords: [

                                item.title,

                                item.artist,

                                item.release,

                                item.platform,

                                item.type,

                                item.status,

                                item.description,

                                milestoneText,

                                missionText,

                                "campaign",

                                "goal",

                                "progress",

                                "milestone",

                                "mission"

                            ]
                                .filter(Boolean)
                                .join(" "),

                            url:
                                "campaigns.html"

                        });

                    }
                );

            }



            /* ================================
               GUIDES
            ================================= */

            if (
                Array.isArray(
                    JLSPT_DATA.guides
                )
            ) {

                JLSPT_DATA.guides.forEach(
                    function (item) {

                        searchData.push({

                            title:
                                item.title,

                            description:
                                item.description ||
                                "JLSPT guide.",

                            keywords: [

                                item.title,

                                item.category,

                                item.description,

                                "guide",

                                "help",

                                "tutorial",

                                "streaming",

                                "spotify",

                                "youtube",

                                "stationhead"

                            ]
                                .filter(Boolean)
                                .join(" "),

                            url:
                                "guides.html"

                        });

                    }
                );

            }



            /* ================================
               UPDATES
            ================================= */

            if (
                Array.isArray(
                    JLSPT_DATA.updates
                )
            ) {

                JLSPT_DATA.updates.forEach(
                    function (item) {

                        searchData.push({

                            title:
                                item.title,

                            description:
                                item.description ||
                                "JLSPT update.",

                            keywords: [

                                item.title,

                                item.category,

                                item.description,

                                item.status,

                                item.contentType,

                                item.contentId,

                                item.date,

                                "update",

                                "news",

                                "announcement",

                                "jl",

                                "jlsp"

                            ]
                                .filter(Boolean)
                                .join(" "),

                            url:
                                "updates.html"

                        });

                    }
                );

            }

        }



        addDataResults();



        /* =====================================
           SEARCH RESULTS CONTAINER
        ====================================== */

        const results =
            document.createElement(
                "div"
            );


        results.className =
            "search-results";


        searchBox.appendChild(
            results
        );



        /* =====================================
           ESCAPE HTML
        ====================================== */

        function escapeHTML(
            value
        ) {

            return String(value)
                .replace(
                    /&/g,
                    "&amp;"
                )
                .replace(
                    /</g,
                    "&lt;"
                )
                .replace(
                    />/g,
                    "&gt;"
                )
                .replace(
                    /"/g,
                    "&quot;"
                )
                .replace(
                    /'/g,
                    "&#039;"
                );

        }



        /* =====================================
           SEARCH
        ====================================== */

        function performSearch() {

            const query =
                searchInput.value
                    .toLowerCase()
                    .trim();


            results.innerHTML = "";


            if (
                query === ""
            ) {

                results.classList.remove(
                    "show"
                );

                return;

            }



            const matches =
                searchData.filter(
                    function (item) {

                        const searchableText = (

                            item.title +
                            " " +
                            item.description +
                            " " +
                            item.keywords

                        )
                            .toLowerCase();


                        return searchableText.includes(
                            query
                        );

                    }
                );



            /* =================================
               NO RESULTS
            ================================= */

            if (
                matches.length === 0
            ) {

                results.innerHTML = `

                    <div class="search-no-results">

                        No JLSPT results found for
                        "<strong>${escapeHTML(query)}</strong>".

                    </div>

                `;


                results.classList.add(
                    "show"
                );


                return;

            }



            /* =================================
               REMOVE DUPLICATES
            ================================= */

            const uniqueMatches = [];


            const seen = new Set();


            matches.forEach(
                function (item) {

                    const key =
                        item.title +
                        "|" +
                        item.url;


                    if (
                        !seen.has(key)
                    ) {

                        seen.add(key);

                        uniqueMatches.push(
                            item
                        );

                    }

                }
            );



            /* =================================
               DISPLAY RESULTS
            ================================= */

            uniqueMatches
                .slice(0, 8)
                .forEach(
                    function (item) {

                        const link =
                            document.createElement(
                                "a"
                            );


                        link.href =
                            item.url;


                        link.className =
                            "search-result";


                        link.innerHTML = `

                            <div>

                                <strong>
                                    ${escapeHTML(
                                        item.title
                                    )}
                                </strong>


                                <span>
                                    ${escapeHTML(
                                        item.description
                                    )}
                                </span>

                            </div>


                            <b>
                                →
                            </b>

                        `;


                        results.appendChild(
                            link
                        );

                    }
                );


            results.classList.add(
                "show"
            );

        }



        /* =====================================
           INPUT
        ====================================== */

        searchInput.addEventListener(
            "input",
            performSearch
        );



        /* =====================================
           ENTER KEY
        ====================================== */

        searchInput.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key !== "Enter"
                ) {

                    return;

                }


                const firstResult =
                    results.querySelector(
                        ".search-result"
                    );


                if (firstResult) {

                    window.location.href =
                        firstResult.href;

                }

            }
        );



        /* =====================================
           CLOSE SEARCH
        ====================================== */

        document.addEventListener(
            "click",
            function (event) {

                if (
                    !searchBox.contains(
                        event.target
                    )
                ) {

                    results.classList.remove(
                        "show"
                    );

                }

            }
        );

    }
);
