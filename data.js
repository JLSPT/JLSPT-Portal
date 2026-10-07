/*
 * JLSPT
 * JL Streaming Project Team
 *
 * Master site data
 *
 * This file is the central content source for:
 * Home
 * Music
 * Video
 * Campaigns
 * Schedule
 * Guides
 * Updates
 */

const JLSPT_DATA = {

    /* =========================================
       SITE INFORMATION
    ========================================= */

    site: {

        name: "JLSPT",

        fullName: "JL Streaming Project Team",

        description:
            "JLSPT is the official portal for JL and AHOF streaming resources, campaigns, guides, schedules, and updates."

    },


    /* =========================================
       CAMPAIGNS
    ========================================= */

    campaigns: [

        {
            id: "mission-stream-alon",

            title: "MISSION: STREAM ALON",

            type: "music",

            status: "active",

            artist: "JL",

            release: "ALON",

            platform: "YouTube",

            current: 781850,

            goal: 1000000,

            videoUrl:
                "https://www.youtube.com/watch?v=Dt8noBM9VTg",

            description:
                "Support JL's ALON official music video as we work toward the next major milestone.",

            milestones: [

                {
                    value: 100000,
                    label: "100K"
                },

                {
                    value: 500000,
                    label: "500K"
                },

                {
                    value: 750000,
                    label: "750K"
                },

                {
                    value: 1000000,
                    label: "1M"
                },

                {
                    value: 2000000,
                    label: "2M"
                }

            ],

            missions: [

                {
                    id: "alon-watch",

                    title: "Watch",

                    description:
                        "Watch the official ALON music video from beginning to end."
                },

                {
                    id: "alon-engage",

                    title: "Engage",

                    description:
                        "Like the official video and leave a genuine, natural comment if you want to."
                },

                {
                    id: "alon-share",

                    title: "Share",

                    description:
                        "Share the official video with other JL supporters whenever possible."
                }

            ]

        }

    ],


    /* =========================================
       MUSIC
    ========================================= */

    music: [

        {
            id: "alon",

            title: "ALON",

            artist: "JL",

            category: "JL Solo",

            type: "solo",

            description:
                "JL's solo release and current JLSPT streaming focus.",

            links: {

                spotify: "",

                appleMusic: "",

                youtube:
                    "https://www.youtube.com/watch?v=Dt8noBM9VTg",

                lyricVideo: ""

            },

            campaignId:
                "mission-stream-alon"

        },


        {
            id: "who-we-are",

            title: "WHO WE ARE",

            artist: "AHOF × JL",

            category: "AHOF × JL",

            type: "group",

            era: "WHO WE ARE",

            description:
                "AHOF release featuring JL.",

            links: {

                spotify: "",

                appleMusic: "",

                youtube: ""

            },

            campaignId: null

        },


        {
            id: "the-passage",

            title: "THE PASSAGE",

            artist: "AHOF × JL",

            category: "AHOF × JL",

            type: "group",

            era: "THE PASSAGE",

            description:
                "AHOF release featuring JL.",

            links: {

                spotify: "",

                appleMusic: "",

                youtube: ""

            },

            campaignId: null

        },


        {
            id: "pinocchio",

            title: "Pinocchio",

            artist: "AHOF × JL",

            category: "AHOF × JL",

            type: "group",

            era: "THE PASSAGE",

            description:
                "Pinocchio from THE PASSAGE era.",

            links: {

                spotify: "",

                appleMusic: "",

                youtube: ""

            },

            campaignId: null

        },


        {
            id: "run-to-you",

            title: "RUN TO YOU",

            artist: "AHOF × JL",

            category: "AHOF × JL",

            type: "group",

            era: "RUN TO YOU",

            description:
                "AHOF release featuring JL.",

            links: {

                spotify: "",

                appleMusic: "",

                youtube: ""

            },

            campaignId: null

        },


        {
            id: "focus-on-you",

            title: "FOCUS ON YOU",

            artist: "HAN × JL",

            category: "OST",

            type: "ost",

            era: "Operation: True Love",

            description:
                "HAN × JL OST for Operation: True Love.",

            links: {

                spotify: "",

                appleMusic: "",

                youtube: ""

            },

            campaignId: null

        }

    ],


    /* =========================================
       VIDEOS
    ========================================= */

    videos: [

        {
            id: "alon-mv",

            title: "ALON",

            artist: "JL",

            category: "JL Solo",

            type: "official-mv",

            platform: "YouTube",

            description:
                "JL's official ALON music video.",

            url:
                "https://www.youtube.com/watch?v=Dt8noBM9VTg",

            campaignId:
                "mission-stream-alon"

        },


        {
            id: "alon-lyric",

            title: "ALON",

            artist: "JL",

            category: "JL Solo",

            type: "lyric-video",

            platform: "YouTube",

            description:
                "JL's official ALON lyric video.",

            url: "",

            campaignId:
                "mission-stream-alon"

        },


        {
            id: "who-we-are-video",

            title: "WHO WE ARE",

            artist: "AHOF × JL",

            category: "AHOF × JL",

            type: "music-video",

            platform: "YouTube",

            description:
                "WHO WE ARE music video.",

            url: "",

            campaignId: null

        },


        {
            id: "the-passage-video",

            title: "THE PASSAGE",

            artist: "AHOF × JL",

            category: "AHOF × JL",

            type: "music-video",

            platform: "YouTube",

            description:
                "THE PASSAGE music video.",

            url: "",

            campaignId: null

        },


        {
            id: "pinocchio-video",

            title: "Pinocchio",

            artist: "AHOF × JL",

            category: "AHOF × JL",

            type: "music-video",

            platform: "YouTube",

            description:
                "Pinocchio video from THE PASSAGE era.",

            url: "",

            campaignId: null

        },


        {
            id: "run-to-you-video",

            title: "RUN TO YOU",

            artist: "AHOF × JL",

            category: "AHOF × JL",

            type: "music-video",

            platform: "YouTube",

            description:
                "RUN TO YOU music video.",

            url: "",

            campaignId: null

        },


        {
            id: "focus-on-you-video",

            title: "FOCUS ON YOU",

            artist: "HAN × JL",

            category: "OST",

            type: "music-video",

            platform: "YouTube",

            description:
                "FOCUS ON YOU OST video for Operation: True Love.",

            url: "",

            campaignId: null

        },


        {
            id: "hello-muniverse",

            title: "Hello?",

            artist: "JL",

            category: "JL Content",

            type: "variety",

            platform: "Muniverse",

            description:
                "JL's latest Hello? episode on Muniverse.",

            url: "",

            campaignId: null

        },


        {
            id: "jl-fancams",

            title: "JL Fancams",

            artist: "JL",

            category: "JL Collection",

            type: "fancam",

            platform: "YouTube",

            description:
                "A collection of JL fancams and performance videos.",

            url: "",

            campaignId: null

        },


        {
            id: "hello-on-muniverse",

            title: "Hello on Muniverse",

            artist: "JL",

            category: "JL Collection",

            type: "variety",

            platform: "Muniverse",

            description:
                "JL content from Muniverse.",

            url: "",

            campaignId: null

        },


        {
            id: "more-jl-content",

            title: "More JL Content",

            artist: "JL",

            category: "JL Collection",

            type: "collection",

            platform: "Various",

            description:
                "More JL videos, appearances, and content.",

            url: "",

            campaignId: null

        }

    ],


    /* =========================================
       SCHEDULE
    ========================================= */

    schedule: [

        {
            id: "regular-music",

            title: "Music Streaming",

            category: "Regular Streaming",

            status: "regular",

            description:
                "Support JL and AHOF music through official music platforms."

        },


        {
            id: "regular-youtube",

            title: "YouTube Streaming",

            category: "Regular Streaming",

            status: "regular",

            description:
                "Support official music videos and JL content on YouTube."

        },


        {
            id: "regular-stationhead",

            title: "Stationhead",

            category: "Regular Streaming",

            status: "regular",

            description:
                "Join JLSPT listening activities and official streaming sessions.",

            url:
                "https://app.stationhead.com/jlspteam"

        },


        {
            id: "streaming-sessions",

            title: "Streaming Sessions",

            category: "Upcoming Activities",

            status: "coming-soon",

            description:
                "Focused streaming sessions will be announced here."

        },


        {
            id: "stationhead-events",

            title: "Stationhead Events",

            category: "Upcoming Activities",

            status: "coming-soon",

            description:
                "Special Stationhead activities and collaborations will be announced here."

        },


        {
            id: "special-campaigns",

            title: "Special Campaigns",

            category: "Upcoming Activities",

            status: "coming-soon",

            description:
                "Special JLSPT campaigns and fan activities will be announced here."

        }

    ],


    /* =========================================
       GUIDES
    ========================================= */

    guides: [

        {
            id: "spotify-guide",

            title: "Spotify Streaming Guide",

            category: "Streaming Basics",

            description:
                "Learn the recommended basics for supporting JL through Spotify."

        },


        {
            id: "youtube-guide",

            title: "YouTube Streaming Guide",

            category: "Streaming Basics",

            description:
                "Learn how to support official YouTube content naturally and effectively."

        },


        {
            id: "stationhead-guide",

            title: "Stationhead Guide",

            category: "Streaming Basics",

            description:
                "Learn how to join JLSPT Stationhead listening activities.",

            url:
                "https://app.stationhead.com/jlspteam"

        },


        {
            id: "streaming-basics",

            title: "Streaming Basics",

            category: "Getting Started",

            description:
                "A simple introduction to responsible and genuine streaming participation."

        },


        {
            id: "troubleshooting",

            title: "Quick Troubleshooting",

            category: "Help",

            description:
                "Common streaming issues and simple troubleshooting steps."

        }

    ],


    /* =========================================
       UPDATES
    ========================================= */

    updates: [

        {
            id: "hello-muniverse-update",

            category: "NEW CONTENT",

            title: "JL's “Hello?” on Muniverse",

            description:
                "A new Hello? episode featuring JL is now available on Muniverse.",

            status: "New",

            date: "2026-10-07",

            contentType: "video",

            contentId: "hello-muniverse"

        },


        {
            id: "alon-campaign",

            category: "CURRENT CAMPAIGN",

            title: "MISSION: STREAM ALON",

            description:
                "Support JL's ALON official music video as we work toward the next major milestone.",

            status: "Current Focus",

            date: "2026-10-07",

            contentType: "campaign",

            contentId: "mission-stream-alon"

        },


        {
            id: "streaming-guides",

            category: "RESOURCES",

            title: "Streaming Guides",

            description:
                "Check the latest JLSPT guides before joining a focused streaming activity.",

            status: "Updated",

            date: "2026-10-07",

            contentType: "guide",

            contentId: "streaming-basics"

        },


        {
            id: "jlsp-campaigns",

            category: "ANNOUNCEMENT",

            title: "JLSPT Campaigns",

            description:
                "Stay tuned for new streaming campaigns, schedules, missions, and special activities.",

            status: "Coming Soon",

            date: "2026-10-07",

            contentType: "campaign",

            contentId: null

        }

    ]

};
