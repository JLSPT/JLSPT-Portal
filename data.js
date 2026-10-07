/*
 * JLSPT
 * JL Streaming Project Team
 *
 * MASTER DATA
 *
 * This file is the temporary content/data layer for the JLSPT Portal.
 *
 * The structure is designed to be Supabase-ready later.
 *
 * Main areas:
 * Home
 * Music
 * Video
 * Campaigns
 * Schedule
 * Guides
 * JLSPT Corner
 * Community
 * My JLSPT
 * Participation
 * Badges
 */

const JLSPT_DATA = {

    /*
     * ============================================================
     * SITE
     * ============================================================
     */

    site: {
        name: "JLSPT",
        fullName: "JL Streaming Project Team",
        description:
            "The official JLSPT portal for JL and AHOF streaming resources, campaigns, schedules, guides, updates, and community.",
        tagline:
            "Stream. Support. Stay connected.",
        stationhead:
            "https://app.stationhead.com/jlspteam"
    },


    /*
     * ============================================================
     * HOME
     *
     * Home should only contain information that is useful RIGHT NOW.
     * Detailed information belongs to its proper section.
     * ============================================================
     */

    home: {
        hero: {
            eyebrow: "JL STREAMING PROJECT TEAM",
            title: "Support JL. Stream together.",
            description:
                "Your central hub for JL and AHOF streaming activities, campaigns, guides, schedules, and community updates."
        },

        currentFocusCampaignId:
            "mission-stream-alon",

        featuredCornerPostId:
            "hello-muniverse-update",

        featuredScheduleId:
            null
    },


    /*
     * ============================================================
     * CAMPAIGNS
     *
     * STREAMING ONLY.
     *
     * No voting campaigns.
     * No special campaign category.
     *
     * Types:
     * music
     * video
     *
     * Status:
     * active
     * paused
     * completed
     * archived
     * ============================================================
     */

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

            startDate: null,

            endDate: null,

            videoUrl:
                "https://www.youtube.com/watch?v=Dt8noBM9VTg",

            description:
                "Support JL's ALON official music video as we work toward the 1M view milestone.",

            milestones: [
                {
                    id: "alon-100k",
                    value: 100000,
                    label: "100K",
                    status: "completed"
                },
                {
                    id: "alon-500k",
                    value: 500000,
                    label: "500K",
                    status: "completed"
                },
                {
                    id: "alon-750k",
                    value: 750000,
                    label: "750K",
                    status: "completed"
                },
                {
                    id: "alon-1m",
                    value: 1000000,
                    label: "1M",
                    status: "current"
                },
                {
                    id: "alon-2m",
                    value: 2000000,
                    label: "2M",
                    status: "upcoming"
                }
            ],

            missions: [
                {
                    id: "alon-watch",
                    title: "Watch",
                    description:
                        "Watch the official ALON music video from beginning to end.",
                    type: "video",
                    points: 1
                },
                {
                    id: "alon-engage",
                    title: "Engage",
                    description:
                        "Like the official video and leave a genuine, natural comment if you want to.",
                    type: "engagement",
                    points: 1
                },
                {
                    id: "alon-share",
                    title: "Share",
                    description:
                        "Share the official video with other JL supporters whenever possible.",
                    type: "share",
                    points: 1
                }
            ]
        }

    ],


    /*
     * ============================================================
     * MUSIC
     *
     * Music is organized by RELEASE.
     *
     * Pinocchio is NOT a top-level release.
     * It belongs under THE PASSAGE as a track.
     * ============================================================
     */

    music: [

        {
            id: "alon",

            title: "ALON",

            artist: "JL",

            section: "JL Solo",

            type: "solo",

            releaseType: "single",

            releaseDate: null,

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

            section: "AHOF × JL",

            type: "group",

            releaseType: "single",

            era: "WHO WE ARE",

            releaseDate: null,

            description:
                "AHOF release featuring JL.",

            tracks: [],

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

            section: "AHOF × JL",

            type: "group",

            releaseType: "release",

            era: "THE PASSAGE",

            releaseDate: null,

            description:
                "AHOF release featuring JL.",

            tracks: [
                {
                    id: "pinocchio",
                    title: "Pinocchio",
                    artist: "AHOF × JL",
                    description:
                        "Track from THE PASSAGE.",
                    links: {
                        spotify: "",
                        appleMusic: "",
                        youtube: ""
                    }
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

            section: "AHOF × JL",

            type: "group",

            releaseType: "single",

            era: "RUN TO YOU",

            releaseDate: null,

            description:
                "AHOF release featuring JL.",

            tracks: [],

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

            section: "Other Releases",

            type: "ost",

            releaseType: "OST",

            era: "Operation: True Love",

            releaseDate: null,

            description:
                "HAN × JL OST for Operation: True Love.",

            tracks: [],

            links: {
                spotify: "",
                appleMusic: "",
                youtube: ""
            },

            campaignId: null
        }

    ],


    /*
     * ============================================================
     * VIDEOS
     *
     * Video content is organized into COLLECTIONS.
     *
     * ALON is ONE top-level entry.
     * Its MV, lyric video, and other official videos belong inside it.
     *
     * Pinocchio belongs under THE PASSAGE.
     * ============================================================
     */

    videos: [

        {
            id: "alon-video",

            title: "ALON",

            artist: "JL",

            section: "JL Solo",

            type: "release",

            platform: "YouTube",

            description:
                "JL's official ALON video collection.",

            campaignId:
                "mission-stream-alon",

            items: [
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
                    title: "Lyric Video",
                    type: "lyric-video",
                    platform: "YouTube",
                    url: ""
                }
            ]
        },


        {
            id: "who-we-are-video",

            title: "WHO WE ARE",

            artist: "AHOF × JL",

            section: "AHOF × JL",

            type: "release",

            platform: "YouTube",

            description:
                "WHO WE ARE official video content.",

            campaignId: null,

            items: [
                {
                    id: "who-we-are-mv",
                    title: "Official Music Video",
                    type: "music-video",
                    platform: "YouTube",
                    url: ""
                }
            ]
        },


        {
            id: "the-passage-video",

            title: "THE PASSAGE",

            artist: "AHOF × JL",

            section: "AHOF × JL",

            type: "release",

            platform: "YouTube",

            description:
                "THE PASSAGE official video content.",

            campaignId: null,

            items: [
                {
                    id: "the-passage-mv",
                    title: "Official Music Video",
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
            ]
        },


        {
            id: "run-to-you-video",

            title: "RUN TO YOU",

            artist: "AHOF × JL",

            section: "AHOF × JL",

            type: "release",

            platform: "YouTube",

            description:
                "RUN TO YOU official video content.",

            campaignId: null,

            items: [
                {
                    id: "run-to-you-mv",
                    title: "Official Music Video",
                    type: "music-video",
                    platform: "YouTube",
                    url: ""
                }
            ]
        },


        {
            id: "focus-on-you-video",

            title: "FOCUS ON YOU",

            artist: "HAN × JL",

            section: "Other Releases",

            type: "release",

            platform: "YouTube",

            description:
                "FOCUS ON YOU OST video for Operation: True Love.",

            campaignId: null,

            items: [
                {
                    id: "focus-on-you-ost",
                    title: "Official OST Video",
                    type: "ost",
                    platform: "YouTube",
                    url: ""
                }
            ]
        },


        {
            id: "jl-content",

            title: "JL Content",

            artist: "JL",

            section: "JL Content",

            type: "collection",

            platform: "Various",

            description:
                "JL appearances, variety content, fancams, interviews, and other official content.",

            campaignId: null,

            items: [
                {
                    id: "hello-muniverse",
                    title: "Hello?",
                    subtitle: "Muniverse",
                    type: "variety",
                    platform: "Muniverse",
                    url: ""
                },
                {
                    id: "jl-fancams",
                    title: "JL Fancams",
                    subtitle: "Performance Collection",
                    type: "fancam",
                    platform: "YouTube",
                    url: ""
                },
                {
                    id: "more-jl-content",
                    title: "More JL Content",
                    subtitle: "Appearances & Variety",
                    type: "collection",
                    platform: "Various",
                    url: ""
                }
            ]
        }

    ],


    /*
     * ============================================================
     * SCHEDULE
     *
     * This is a REAL activity schedule.
     *
     * Status:
     * upcoming
     * live
     * regular
     * completed
     * cancelled
     *
     * Dates/times can later be populated through Supabase.
     * ============================================================
     */

    schedule: [

        {
            id: "regular-music",

            title: "Music Streaming",

            category: "Regular Streaming",

            status: "regular",

            startDate: null,

            endDate: null,

            time: null,

            timezone: "Asia/Manila",

            description:
                "Regular support for JL and AHOF music through official music platforms.",

            platform: "Music Platforms",

            campaignId: null,

            url: ""
        },


        {
            id: "regular-youtube",

            title: "YouTube Streaming",

            category: "Regular Streaming",

            status: "regular",

            startDate: null,

            endDate: null,

            time: null,

            timezone: "Asia/Manila",

            description:
                "Regular support for official music videos and JL content on YouTube.",

            platform: "YouTube",

            campaignId: null,

            url: ""
        },


        {
            id: "regular-stationhead",

            title: "JLSPT Stationhead",

            category: "Regular Streaming",

            status: "regular",

            startDate: null,

            endDate: null,

            time: null,

            timezone: "Asia/Manila",

            description:
                "Join the JLSPT Stationhead for listening activities and streaming sessions.",

            platform: "Stationhead",

            campaignId: null,

            url:
                "https://app.stationhead.com/jlspteam"
        }

    ],


    /*
     * ============================================================
     * GUIDES
     *
     * Guides own instructions.
     * Other pages should not duplicate guide content.
     *
     * Categories:
     * getting-started
     * platform
     * campaign
     * troubleshooting
     * faq
     * ============================================================
     */

    guides: [

        {
            id: "getting-started",

            title: "Getting Started",

            category: "Getting Started",

            type: "getting-started",

            platform: "General",

            description:
                "A simple introduction for supporters who are new to JLSPT streaming activities.",

            content: [],

            campaignId: null
        },


        {
            id: "spotify-guide",

            title: "Spotify Streaming Guide",

            category: "Platform Guides",

            type: "platform",

            platform: "Spotify",

            description:
                "Learn the recommended basics for supporting JL through Spotify.",

            content: [],

            campaignId: null
        },


        {
            id: "youtube-guide",

            title: "YouTube Streaming Guide",

            category: "Platform Guides",

            type: "platform",

            platform: "YouTube",

            description:
                "Learn how to support official YouTube content naturally and effectively.",

            content: [],

            campaignId: null
        },


        {
            id: "stationhead-guide",

            title: "Stationhead Guide",

            category: "Platform Guides",

            type: "platform",

            platform: "Stationhead",

            description:
                "Learn how to join JLSPT Stationhead listening activities.",

            content: [],

            campaignId: null,

            url:
                "https://app.stationhead.com/jlspteam"
        },


        {
            id: "alon-campaign-guide",

            title: "ALON Streaming Mission",

            category: "Campaign Guides",

            type: "campaign",

            platform: "YouTube",

            description:
                "Instructions for participating in the MISSION: STREAM ALON campaign.",

            content: [],

            campaignId:
                "mission-stream-alon"
        },


        {
            id: "streaming-basics",

            title: "Streaming Basics",

            category: "Getting Started",

            type: "getting-started",

            platform: "General",

            description:
                "A practical introduction to responsible and genuine streaming participation.",

            content: [],

            campaignId: null
        },


        {
            id: "troubleshooting",

            title: "Quick Troubleshooting",

            category: "Troubleshooting",

            type: "troubleshooting",

            platform: "General",

            description:
                "Common streaming issues and simple troubleshooting steps.",

            content: [],

            campaignId: null
        },


        {
            id: "faq",

            title: "JLSPT FAQ",

            category: "FAQ",

            type: "faq",

            platform: "General",

            description:
                "Frequently asked questions about JLSPT activities and participation.",

            content: [],

            campaignId: null
        }

    ],


    /*
     * ============================================================
     * JLSPT CORNER
     *
     * OFFICIAL POSTS ONLY.
     *
     * Only authorized JLSPT accounts can publish these posts.
     *
     * Categories:
     * announcement
     * streaming-notice
     * campaign-update
     * schedule
     * resource
     * milestone
     * reminder
     * general
     * ============================================================
     */

    cornerPosts: [

        {
            id: "hello-muniverse-update",

            category: "announcement",

            categoryLabel: "NEW CONTENT",

            title: "JL's “Hello?” on Muniverse",

            content:
                "A new Hello? episode featuring JL is now available on Muniverse.",

            author: "JLSPT",

            authorRole: "JLSPT Official",

            date: "2026-10-07",

            time: null,

            status: "published",

            pinned: true,

            image: "",

            campaignId: null,

            scheduleId: null,

            contentType: "video",

            contentId: "hello-muniverse",

            link: ""
        },


        {
            id: "alon-campaign-update",

            category: "campaign-update",

            categoryLabel: "CAMPAIGN UPDATE",

            title: "MISSION: STREAM ALON",

            content:
                "Support JL's ALON official music video as we work toward the 1M view milestone.",

            author: "JLSPT",

            authorRole: "JLSPT Official",

            date: "2026-10-07",

            time: null,

            status: "published",

            pinned: false,

            image: "",

            campaignId:
                "mission-stream-alon",

            scheduleId: null,

            contentType: "campaign",

            contentId: "mission-stream-alon",

            link: ""
        },


        {
            id: "streaming-guides-update",

            category: "resource",

            categoryLabel: "RESOURCES",

            title: "Streaming Guides",

            content:
                "Check the latest JLSPT guides before joining a focused streaming activity.",

            author: "JLSPT",

            authorRole: "JLSPT Official",

            date: "2026-10-07",

            time: null,

            status: "published",

            pinned: false,

            image: "",

            campaignId: null,

            scheduleId: null,

            contentType: "guide",

            contentId: "streaming-basics",

            link: ""
        }

    ],


    /*
     * ============================================================
     * COMMUNITY
     *
     * Separate data from JLSPT Corner even though both appear
     * on the same public tab.
     *
     * Community content is MEMBER-GENERATED.
     *
     * This will eventually be powered by Supabase.
     * ============================================================
     */

    community: {

        categories: [

            {
                id: "general",
                title: "General Discussion",
                description:
                    "Talk about JL, AHOF, and anything related to the community."
            },

            {
                id: "streaming",
                title: "Streaming Discussion",
                description:
                    "Share streaming tips, experiences, and questions."
            },

            {
                id: "campaigns",
                title: "Campaign Discussion",
                description:
                    "Discuss current and upcoming JLSPT streaming campaigns."
            },

            {
                id: "help",
                title: "Questions & Help",
                description:
                    "Ask questions and help fellow supporters."
            },

            {
                id: "achievements",
                title: "Achievements & Milestones",
                description:
                    "Celebrate streaming milestones and community achievements."
            }

        ],

        posts: []
    },


    /*
     * ============================================================
     * PARTICIPATION
     *
     * This is the future member participation model.
     *
     * Actual records will eventually live in Supabase.
     * ============================================================
     */

    participation: {

        activities: [

            {
                id: "campaign-join",
                title: "Campaign Participation",
                description:
                    "Participation in an official JLSPT campaign."
            },

            {
                id: "mission-complete",
                title: "Mission Completed",
                description:
                    "Completion of an official campaign mission."
            },

            {
                id: "streaming-session",
                title: "Streaming Session",
                description:
                    "Participation in an organized JLSPT streaming session."
            },

            {
                id: "milestone-support",
                title: "Milestone Support",
                description:
                    "Participation toward an official campaign milestone."
            },

            {
                id: "community-post",
                title: "Community Contribution",
                description:
                    "Meaningful participation in the JLSPT community."
            }

        ]
    },


    /*
     * ============================================================
     * BADGES
     *
     * Badges are achievement markers, not a competition.
     *
     * Future badge progress will be calculated from participation
     * records stored in Supabase.
     * ============================================================
     */

    badges: [

        {
            id: "first-stream",

            title: "First Stream",

            icon: "🏁",

            description:
                "Joined your first JLSPT streaming activity.",

            requirement:
                "Complete your first verified streaming activity.",

            rarity: "common"
        },


        {
            id: "streaming-supporter",

            title: "Streaming Supporter",

            icon: "🎧",

            description:
                "Participated in JLSPT streaming activities.",

            requirement:
                "Participate in multiple streaming activities.",

            rarity: "common"
        },


        {
            id: "video-mission",

            title: "Video Mission",

            icon: "📺",

            description:
                "Completed an official video streaming mission.",

            requirement:
                "Complete a campaign video mission.",

            rarity: "special"
        },


        {
            id: "campaign-supporter",

            title: "Campaign Supporter",

            icon: "🔥",

            description:
                "Supported multiple JLSPT campaigns.",

            requirement:
                "Participate in multiple official campaigns.",

            rarity: "special"
        },


        {
            id: "campaign-veteran",

            title: "Campaign Veteran",

            icon: "🏆",

            description:
                "Consistently supported JLSPT campaigns over time.",

            requirement:
                "Reach the required long-term campaign participation milestone.",

            rarity: "rare"
        },


        {
            id: "alon-1m-supporter",

            title: "ALON 1M Supporter",

            icon: "⭐",

            description:
                "Supported the MISSION: STREAM ALON 1M milestone.",

            requirement:
                "Participate in the ALON 1M campaign milestone.",

            rarity: "campaign"
        },


        {
            id: "community-helper",

            title: "Community Helper",

            icon: "💬",

            description:
                "Made helpful contributions to the JLSPT community.",

            requirement:
                "Receive recognition for meaningful community participation.",

            rarity: "special"
        }

    ],


    /*
     * ============================================================
     * MEMBER PROFILE
     *
     * Placeholder structure for Supabase authentication.
     * No private information should be publicly exposed.
     * ============================================================
     */

    memberProfile: {

        id: null,

        username: "",

        displayName: "",

        avatar: "",

        joinedDate: null,

        role: "member",

        badges: [],

        participation: {

            campaignsJoined: 0,

            missionsCompleted: 0,

            streamingSessions: 0,

            milestonesSupported: 0,

            communityPosts: 0
        },

        preferences: {

            notifications: true,

            publicProfile: true
        }

    },


    /*
     * ============================================================
     * NOTIFICATIONS
     *
     * Future Supabase-powered notification system.
     * ============================================================
     */

    notifications: [],


    /*
     * ============================================================
     * SEARCH
     *
     * Defines which sections are searchable globally.
     * ============================================================
     */

    search: {

        sections: [
            "music",
            "videos",
            "campaigns",
            "guides",
            "cornerPosts",
            "community"
        ]

    }

};
