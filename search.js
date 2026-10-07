document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.querySelector(".search-box input");
    const searchBox = document.querySelector(".search-box");

    if (!searchInput || !searchBox) {
        return;
    }


    const searchData = [
        {
            title: "Music",
            description: "JL and AHOF music resources.",
            keywords: "music jl ahof alon focus on you spotify songs streaming",
            url: "music.html"
        },
        {
            title: "Video",
            description: "Music videos, fancams, and video projects.",
            keywords: "video youtube mv music video fancam hello muniverse",
            url: "video.html"
        },
        {
            title: "Tracker",
            description: "Streaming progress and current goals.",
            keywords: "tracker progress goal views streaming alon 1m 1 million",
            url: "tracker.html"
        },
        {
            title: "Schedule",
            description: "Upcoming streaming activities and events.",
            keywords: "schedule activities events streaming stationhead",
            url: "schedule.html"
        },
        {
            title: "Guides",
            description: "Spotify, YouTube, Stationhead, and streaming guides.",
            keywords: "guides spotify youtube stationhead tutorial help faq",
            url: "guides.html"
        },
        {
            title: "Milestones",
            description: "JLSPT streaming achievements and goals.",
            keywords: "milestones achievement 100k 500k 750k 1m alon",
            url: "milestones.html"
        },
        {
            title: "Updates",
            description: "JLSPT announcements and campaign updates.",
            keywords: "updates news announcement campaign collaboration reminder",
            url: "updates.html"
        },
        {
            title: "ALON",
            description: "JL's solo music and streaming campaign.",
            keywords: "alon jl solo song mv music youtube views streaming",
            url: "music.html"
        },
        {
            title: "Focus on You",
            description: "JL solo music resources.",
            keywords: "focus on you jl solo song music streaming",
            url: "music.html"
        },
        {
            title: "Stationhead",
            description: "JLSPT Stationhead listening resources.",
            keywords: "stationhead listening stream jlsp jlspteam",
            url: "music.html"
        }
    ];


    /* =========================
       CREATE RESULTS
    ========================= */

    const results = document.createElement("div");

    results.className = "search-results";

    searchBox.appendChild(results);


    /* =========================
       SEARCH
    ========================= */

    function performSearch() {

        const query = searchInput.value
            .toLowerCase()
            .trim();

        results.innerHTML = "";


        if (query === "") {

            results.classList.remove("show");

            return;
        }


        const matches = searchData.filter(function (item) {

            const searchableText = (
                item.title + " " +
                item.description + " " +
                item.keywords
            ).toLowerCase();

            return searchableText.includes(query);

        });


        if (matches.length === 0) {

            results.innerHTML = `
                <div class="search-no-results">
                    No JLSPT results found for "<strong>${query}</strong>".
                </div>
            `;

            results.classList.add("show");

            return;
        }


        matches.slice(0, 6).forEach(function (item) {

            const link = document.createElement("a");

            link.href = item.url;

            link.className = "search-result";

            link.innerHTML = `
                <div>
                    <strong>${item.title}</strong>
                    <span>${item.description}</span>
                </div>

                <b>→</b>
            `;

            results.appendChild(link);

        });


        results.classList.add("show");
    }


    /* =========================
       LIVE SEARCH
    ========================= */

    searchInput.addEventListener(
        "input",
        performSearch
    );


    /* =========================
       ENTER KEY
    ========================= */

    searchInput.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                const firstResult =
                    results.querySelector(".search-result");

                if (firstResult) {
                    window.location.href = firstResult.href;
                }

            }

        }
    );


    /* =========================
       CLOSE RESULTS
    ========================= */

    document.addEventListener(
        "click",
        function (event) {

            if (!searchBox.contains(event.target)) {

                results.classList.remove("show");

            }

        }
    );

});
