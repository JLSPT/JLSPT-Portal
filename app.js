/*
 * JLSPT
 * JL Streaming Project Team
 *
 * Central site JavaScript
 */


/* =========================================
   HELPER FUNCTIONS
========================================= */

function formatNumber(number) {

    return Number(number).toLocaleString("en-US");

}


function calculateProgress(current, goal) {

    if (!goal || goal <= 0) {
        return 0;
    }

    return Math.min(
        (current / goal) * 100,
        100
    );

}


function getRemaining(current, goal) {

    return Math.max(
        goal - current,
        0
    );

}


/* =========================================
   CURRENT CAMPAIGN
========================================= */

function getCurrentCampaign() {

    if (
        typeof JLSPT_DATA === "undefined" ||
        !JLSPT_DATA.currentCampaign
    ) {
        return null;
    }

    return JLSPT_DATA.currentCampaign;

}


/* =========================================
   CAMPAIGN STATS
========================================= */

function getCampaignStats() {

    const campaign =
        getCurrentCampaign();

    if (!campaign) {
        return null;
    }


    const current =
        Number(campaign.current) || 0;


    const goal =
        Number(campaign.goal) || 0;


    const percentage =
        calculateProgress(
            current,
            goal
        );


    const remaining =
        getRemaining(
            current,
            goal
        );


    return {

        current: current,

        goal: goal,

        percentage: percentage,

        remaining: remaining

    };

}


/* =========================================
   MILESTONE STATUS
========================================= */

function getMilestoneStatus(milestone) {

    const campaign =
        getCurrentCampaign();


    if (!campaign || !milestone) {
        return "future";
    }


    const current =
        Number(campaign.current) || 0;


    const value =
        Number(milestone.value) || 0;


    if (current >= value) {

        return "reached";

    }


    if (
        milestone.status === "current" ||
        value === Number(campaign.goal)
    ) {

        return "current";

    }


    return "future";

}


/* =========================================
   NEXT MILESTONE
========================================= */

function getNextMilestone() {

    if (
        typeof JLSPT_DATA === "undefined" ||
        !Array.isArray(JLSPT_DATA.milestones)
    ) {
        return null;
    }


    const campaign =
        getCurrentCampaign();


    if (!campaign) {
        return null;
    }


    const current =
        Number(campaign.current) || 0;


    const futureMilestones =
        JLSPT_DATA.milestones
            .filter(function (milestone) {

                return Number(milestone.value) > current;

            })
            .sort(function (a, b) {

                return Number(a.value) -
                       Number(b.value);

            });


    return futureMilestones.length
        ? futureMilestones[0]
        : null;

}


/* =========================================
   CAMPAIGN PROGRESS
========================================= */

function setProgressBar(element, percentage) {

    if (!element) {
        return;
    }


    element.style.width =
        percentage.toFixed(1) + "%";

}


/* =========================================
   SAFE TEXT UPDATE
========================================= */

function setText(elementId, value) {

    const element =
        document.getElementById(elementId);


    if (!element) {
        return;
    }


    element.textContent =
        value;

}


/* =========================================
   SAFE LINK UPDATE
========================================= */

function setLink(elementId, url) {

    const element =
        document.getElementById(elementId);


    if (!element || !url) {
        return;
    }


    element.href =
        url;

}


/* =========================================
   INITIALIZE
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        /*
         * The central functions above are
         * intentionally initialized here.
         *
         * Existing page-specific scripts
         * will continue working for now.
         *
         * As we continue building JLSPT,
         * page-specific code will gradually
         * move into this file.
         */

        console.log(
            "JLSPT app.js loaded successfully."
        );

    }
);
