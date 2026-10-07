const JLSPT_DATA = {

    site: {
        name: "JLSPT",
        fullName: "JL Streaming Project Team",
        description:
            "JLSPT is the official portal for JL and AHOF streaming resources, campaigns, guides, schedules, and community updates."
    },

    startHere: {
        title: "WELCOME TO JLSPT",
        subtitle:
            "Your home for organized, genuine, and community powered streaming support for JL.",
        intro:
            "JLSPT is a fan led streaming project created to help JL supporters find the right resources, understand streaming activities, and stay updated with current projects.",

        sections: [
            {
                title: "What is JLSPT?",
                description:
                    "JL Streaming Project Team organizes streaming resources, campaigns, activities, and guides for JL supporters."
            },
            {
                title: "What can you do here?",
                description:
                    "Explore music and video content, join active campaigns, check upcoming activities, and learn how to participate through our guides."
            },
            {
                title: "How do campaigns work?",
                description:
                    "JLSPT campaigns focus on specific streaming goals. Each campaign may include a target, progress milestones, and simple missions for supporters."
            },
            {
                title: "Our approach",
                description:
                    "We encourage genuine participation, responsible streaming habits, and consistent support without pressure."
            }
        ],

        principles: [
            "Support official content whenever possible.",
            "Follow platform guidelines and JLSPT instructions.",
            "Keep streaming natural and genuine.",
            "Participate according to your own time and capacity.",
            "Share reliable information with fellow supporters."
        ]
    },

    campaigns: [

        {
            id: "mission-stream-alon",
            title: "MISSION: STREAM ALON",
            type: "video",
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
                    label: "100K",
                    status: "reached"
                },
                {
                    value: 500000,
                    label: "500K",
                    status: "reached"
                },
                {
                    value: 750000,
                    label: "750K",
                    status: "reached"
                },
                {
                    value: 1000000,
                    label: "1M",
                    status: "current"
                },
                {
                    value: 2000000,
                    label: "2M",
                    status: "future"
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
                "AHOF release featuring JL, including Pinocchio as part of the release.",

            tracks: [
                {
                    title: "Pinocchio",
                    type: "track"
                }
            ],

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

    videos: [

        {
            id: "alon",
            title: "ALON",
            artist: "JL",
            category: "JL Solo",
            type: "music",

            description:
                "All official ALON video resources in one place.",

            resources: [
                {
                    id: "alon-mv",
                    title: "Official Music Video",
                    type: "official-mv",
                    platform: "YouTube",
                    url:
                        "https://www.youtube.com/watch?v=Dt8noBM9VTg"
                },
                {
                    id: "alon-lyric",
                    title: "Official Lyric Video",
                    type: "lyric-video",
                    platform: "YouTube",
                    url: ""
                }
            ],

            campaignId:
                "mission-stream-alon"
        },

        {
            id: "who-we-are",
            title: "WHO WE ARE",
            artist: "AHOF × JL",
            category: "AHOF × JL",
            type: "music",

            description:
                "WHO WE ARE music video featuring JL.",

            resources: [
                {
                    id: "who-we-are-video",
                    title: "Music Video",
                    type: "music-video",
                    platform: "YouTube",
                    url: ""
                }
            ],

            campaignId: null
        },

        {
            id: "the-passage",
            title: "THE PASSAGE",
            artist: "AHOF × JL",
            category: "AHOF × JL",
            type: "music",

            description:
                "THE PASSAGE content featuring JL, including Pinocchio within the release.",

            resources: [
                {
                    id: "the-passage-video",
                    title: "THE PASSAGE",
                    type: "music-video",
                    platform: "YouTube",
                    url: ""
                },
                {
                    id: "pinocchio-video",
                    title: "Pinocchio",
                    type: "track-video",
                    platform: "YouTube",
                    url: ""
                }
            ],

            campaignId: null
        },

        {
            id: "run-to-you",
            title: "RUN TO YOU",
            artist: "AHOF × JL",
            category: "AHOF × JL",
            type: "music",

            description:
                "RUN TO YOU music video featuring JL.",

            resources: [
                {
                    id: "run-to-you-video",
                    title: "Music Video",
                    type: "music-video",
                    platform: "YouTube",
                    url: ""
                }
            ],

            campaignId: null
        },

        {
            id: "focus-on-you",
            title: "FOCUS ON YOU",
            artist: "HAN × JL",
            category: "OST",
            type: "music",

            description:
                "FOCUS ON YOU OST video for Operation: True Love.",

            resources: [
                {
                    id: "focus-on-you-video",
                    title: "Official Video",
                    type: "music-video",
                    platform: "YouTube",
                    url: ""
                }
            ],

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

            resources: [
                {
                    id: "hello-muniverse-video",
                    title: "Watch on Muniverse",
                    type: "variety",
                    platform: "Muniverse",
                    url: ""
                }
            ],

            campaignId: null
        },

        {
            id: "jl-fancams",
            title: "JL Fancams",
            artist: "JL",
            category: "JL Collection",
            type: "fancam",

            description:
                "A collection of JL fancams and performance videos.",

            resources: [
                {
                    id: "jl-fancams-collection",
                    title: "Fancam Collection",
                    type: "collection",
                    platform: "YouTube",
                    url: ""
                }
            ],

            campaignId: null
        },

        {
            id: "more-jl-content",
            title: "More JL Content",
            artist: "JL",
            category: "JL Collection",
            type: "collection",

            description:
                "More JL videos, appearances, and content.",

            resources: [
                {
                    id: "more-jl-content-collection",
                    title: "JL Content Collection",
                    type: "collection",
                    platform: "Various",
                    url: ""
                }
            ],

            campaignId: null
        }

    ],

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
        }

    ],

    guides: [

        {
            id: "streaming-basics",
            title: "Streaming Basics",
            category: "Getting Started",

            description:
                "A simple introduction to responsible and genuine streaming participation."
        },

        {
            id: "spotify-guide",
            title: "Spotify Streaming Guide",
            category: "Platform Guides",

            description:
                "Learn the recommended basics for supporting JL through Spotify."
        },

        {
            id: "youtube-guide",
            title: "YouTube Streaming Guide",
            category: "Platform Guides",

            description:
                "Learn how to support official YouTube content naturally and effectively."
        },

        {
            id: "stationhead-guide",
            title: "Stationhead Guide",
            category: "Platform Guides",

            description:
                "Learn how to join JLSPT Stationhead listening activities.",

            url:
                "https://app.stationhead.com/jlspteam"
        },

        {
            id: "campaign-guide",
            title: "Campaign Guide",
            category: "Campaigns",

            description:
                "Learn how JLSPT campaigns work and how to participate in campaign missions."
        },

        {
            id: "troubleshooting",
            title: "Quick Troubleshooting",
            category: "Help",

            description:
                "Common streaming issues and simple troubleshooting steps."
        }

    ],

    jlspCorner: [

        {
            id: "hello-muniverse-update",
            category: "NEW CONTENT",

            title: "JL's “Hello?” on Muniverse",

            description:
                "A new Hello? episode featuring JL is now available on Muniverse.",

            status: "New",
            date: "2026-10-07",

            contentType: "video",
            contentId: "hello-muniverse",

            pinned: true
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
            contentId: "mission-stream-alon",

            pinned: false
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
            contentId: "streaming-basics",

            pinned: false
        },

        {
            id: "jlsp-portal",
            category: "JLSPT",

            title: "Welcome to the JLSPT Portal",

            description:
                "Explore JLSPT's streaming resources, campaigns, schedules, guides, and community spaces.",

            status: "Welcome",
            date: "2026-10-07",

            contentType: "start",
            contentId: "start-here",

            pinned: false
        }

    ],

    community: {
        title: "JLSPT COMMUNITY",
        description:
            "A space for JL supporters to talk, share experiences, ask questions, and connect with fellow fans.",

        categories: [
            "General",
            "Streaming",
            "Campaigns",
            "Help"
        ],

        features: [
            "Member posts",
            "Comments",
            "Reactions",
            "Category discussions",
            "JLSPT moderator badge",
            "Community moderation"
        ],

        status: "coming-soon"
    }

};
