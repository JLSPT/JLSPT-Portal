document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.querySelector(".search-box input");

    if (!searchInput) {
        return;
    }


    /* =========================
       SEARCH DATA
    ========================= */

    const searchData = [

        {
            title: "Music",
            description: "JL and AHOF music resources, streaming links, and music projects.",
            keywords: "music jl ahof alon focus on you spotify songs streaming",
            url: "music.html"
        },

        {
            title: "Video",
            description: "Official music videos, JL fancams, Hello on Muniverse, and video projects.",
            keywords: "video youtube mv music video fancam hello muniverse alon",
            url: "video.html"
        },

        {
            title: "Tracker",
            description: "Follow current streaming progress, goals, and campaign targets.",
            keywords: "tracker progress goal views streaming alon 1m 1 million",
            url: "tracker.html"
        },

        {
            title: "Schedule",
            description: "Check upcoming streaming activities, events, and organized projects.",
            keywords: "schedule activities events listening streaming stationhead",
            url: "schedule.html"
        },

        {
            title: "Guides",
            description: "Learn Spotify, YouTube, Stationhead, streaming basics, and troubleshooting.",
            keywords: "guide spotify youtube stationhead tutorial help streaming basics faq",
            url: "guides.html"
        },

        {
            title: "Milestones",
            description: "Celebrate JLSPT achievements and streaming milestones.",
            keywords: "milestone achievement 100k 500k 750k 1m 1 million alon",
            url: "milestones.html"
        },

        {
            title: "Updates",
            description: "Latest JLSPT announcements, campaign updates, reminders, and collaborations.",
            keywords: "updates news announcement campaign collaboration reminder",
            url: "updates.html"
        },

        {
            title: "ALON",
            description: "JL's solo music project and current streaming campaign.",
            keywords: "alon jl solo song mv music youtube views streaming",
            url: "tracker.html"
        },

        {
            title: "Focus on You",
            description: "JL solo music resources and streaming information.",
            keywords: "focus on you jl solo song music streaming",
            url: "music.html"
        },

        {
            title: "Stationhead",
            description: "JLSPT Stationhead listening and streaming resources.",
            keywords: "stationhead listening party stream jlsp jlspteam",
            url: "music.html"
        }

    ];


    /* =========================
       CREATE RESULTS AREA
    ========================= */

    const searchBox = document.querySelector(".search-box");

    const resultsContainer = document.createElement("div");

    resultsContainer.className = "search-results";

    searchBox.appendChild(resultsContainer);


    /* =========================
       SEARCH FUNCTION
    ========================= */

    searchInput.addEventListener("input", function () {

        const query = searchInput.value
            .toLowerCase()
            .trim();


        resultsContainer.innerHTML = "";


        if (!query) {

            resultsContainer.classList.remove("show");

            return;

        }


        const results = searchData.filter(function (item) {

            return (
                item.title.toLowerCase().includes(query) ||
                item.description.toLowerCase().includes(query) ||
                item.keywords.toLowerCase().includes(query)
            );

        });


        /* =========================
           NO RESULTS
        ========================= */

        if (results.length === 0) {

            resultsContainer.innerHTML = `
                <div class="search-no-results">
                    No JLSPT results found.
                </div>
            `;

            resultsContainer.classList.add("show");

            return;

        }


        /* =========================
           DISPLAY RESULTS
        ========================= */

        results.slice(0, 6).forEach(function (item) {

            const resultLink = document.createElement("a");

            resultLink.href = item.url;

            resultLink.className = "search-result";


            resultLink.innerHTML = `
                <div>
                    <strong>${item.title}</strong>
                    <span>${item.description}</span>
                </div>

                <b>→</b>
            `;


            resultsContainer.appendChild(resultLink);

        });


        resultsContainer.classList.add("show");

    });


    /* =========================
       CLOSE RESULTS
    ========================= */

    document.addEventListener("click", function (event) {

        if (!searchBox.contains(event.target)) {

            resultsContainer.classList.remove("show");

        }

    });

});

Commit

Use:

"Add JLSPT search functionality"

Then tap Commit changes.

Don't connect it to the pages yet.

Once you've committed "search.js", tell me:

“search.js done”

Then we'll connect it to Home and style the search results.
