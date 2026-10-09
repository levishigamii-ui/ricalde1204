document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    /* =========================================================
       CLICK-TO-ENTER INTRO
       ---------------------------------------------------------
       index.html owns the standalone button handler so entry still
       works if this larger script fails. Do not auto-dismiss here.
    ========================================================= */

    const siteIntro = document.getElementById("siteIntro");
    if (siteIntro) {
        document.body.classList.add("intro-loading");
    }

    /* =========================================================
       RICALDE FAMILIA — FINAL JAVASCRIPT
       =========================================================

       FEATURES
       ---------------------------------------------------------
       • Hover profile -> music + zoom
       • Click profile -> dossier
       • Dossier closes with X / background / ESC
       • Closing dossier ALWAYS stops music
       • Family information
       • Father / Mother / Partner
       • Last names / surnames
       • Children displayed dynamically
       • Social-media links per profile
       • Infinite horizontal memories
       • Memory drag / swipe
       • Memory click -> large image
       • Large image click -> zoom
       • Mouse wheel -> zoom
       • Mobile navigation
       • Member search
    ========================================================= */


    /* =========================================================
       ELEMENTS
    ========================================================= */

    const profiles = Array.from(
        document.querySelectorAll(".profile")
    );

    const audio =
        document.getElementById("memberAudio");

    const search =
        document.getElementById("memberSearch");

    const menuButton =
        document.getElementById("menuButton");

    const navLinks =
        document.querySelector(".nav-links");

    const year =
        document.getElementById("year");


/* =========================================================
   FAMILY INFORMATION
   ========================================================= */

const FAMILY_INFO = {

    gab: {
        mother: "—",
        father: "—",
        partner: "LF",
        lastName: [
            "Ricalde",
            "Ishizaki"
        ],
        children: [
            "Selene Kaye Ricalde",
            "Elle Ricalde"
        ],
    },

    zoro: {
        mother: "—",
        father: "—",
        partner: "—",
        lastName: [
            "Ricalde",
            "Arabicca"
        ],
        children: [
            "Hailey",
            "Mina",
            "George",
            "Chisu",
            "Thelmo",
            "Nutz",
            "Mizuki"
        ]
    },

    keso: {
        mother: "—",
        father: "—",
        partner: "—",
        lastName: [
            "Ricalde"
        ],
        children: [
            "Tuss"
        ]
    },

    harley: {
        mother: "Osaka Cortez",
        father: "Kukut Cortez",
        partner: "SpookyDG",
        lastName: [
            "Ricalde",
            "Deguzman",
            "Cortez"
        ],
        children: [
            "Drake",
            "Venice",
            "Choi",
            "Kurt",
            "Martys",
            "Rygz",
            "Indigo",
            "Kyo",
            "Yenz"
        ]
    },

    pablo: {
        mother: "—",
        father: "—",
        partner: "—",
        lastName: [
            "Ricalde",
            "Kupal",
            "Sanity",
            "Daemon",
            "Colombo",
            "Dimagiba",
            "Ambani",
            "Kingston",
            "De Lira Sarris",
            "Salandanan",
            "Capone"
        ],
        children: []
    },

    khriss: {
        mother: "—",
        father: "Kai A$tra Hailsmith Ca$hman laxamana",
        partner: "—",
        lastName: [
            "Ricalde",
            "Arabicca",
            "Laxamana",
            "Astra",
            "Revshit"
        ],
        children: []
    },

    ero: {
        mother: "Aya Latorre",
        father: "Tomi Zin JKid",
        partner: "TRAUMA",
        lastName: [
            "Ricalde",
            "Suav",
            "Jkid",
            "Armani",
            "Zin",
            "Latorre",
            "Arabicca"
        ],
        children: [
            "Chongkid",
            "Nikolai",
            "Yazz"
        ],
    },

    alex: {
        mother: "—",
        father: "—",
        partner: "—",
        lastName: [
            "Ricalde",
            "Wasted"
        ],
        children: []
    },

    lux: {
        mother: "—",
        father: "—",
        partner: "—",
        lastName: [
            "Ricalde",
            "Mallari",
            "Lestrange",
            "Sato",
            "Valmoria",
            "Lazcano",
            "Okami"
        ],
        children: []
    },

    mikey: {
        mother: "—",
        father: "—",
        partner: "—",
        lastName: [
            "Ricalde",
            "Lazcano"
        ],
        children: []
    },

    mikoy: {
        mother: "—",
        father: "—",
        partner: "—",
        lastName: [
            "Ricalde",
            "Lazcano"
        ],
        children: []
    },

    juan: {
        mother: "—",
        father: "—",
        partner: "—",
        lastName: [
            "Ricalde",
            "Lazcano",
            "Salvaje"
        ],
        children: []
    },

    kaiser: {
        mother: "—",
        father: "—",
        partner: "—",
        lastName: [
            "Ricalde"
        ],
        children: []
    },

    genesis: {
        mother: "—",
        father: "—",
        partner: "—",
        lastName: [
            "Ricalde",
            "Aoki",
            "Armani",
            "Morningstar",
            "Gaspari",
            "Suervo",
            "Mugen"
        ],
        children: []
    },

    mina: {
        mother: "—",
        father: "Zoro Arabicca Ricalde",
        partner: "Sev Espiritu Santo",
        lastName: [
            "Ricalde",
            "Averia"
        ],
        children: []
    },

    hailey: {
        mother: "—",
        father: "Zoro Arabicca Ricalde",
        partner: "Jr Espiritu Santo",
        lastName: [
            "Ricalde",
            "Espiritu Santo"
        ],
        children: [
            "Ali",
            "Perdo",
            "Aji",
            "Hayate",
            "Biboy",
            "Yg",
            "Shineii",
            "Shin",
            "Florence",
            "Bungo",
            "Ele",
            "Rio",
            "Deej",
            "Patz",
            "Elyse",
            "Jaypee",
            "Kazu",
            "Neil",
            "Maria",
            "Zynara",
            "George",
            "Ava",
            "Esmi",
            "Roberto",
            "Matte",
            "Nyx"
        ],
    },

    chongkid: {
        mother: "—",
        father: "Ero Ricalde",
        partner: "—",
        lastName: [
            "Ricalde"
        ],
        children: []
    },

    tuss: {
        mother: "—",
        father: "Keso Ricalde",
        partner: "—",
        lastName: [
            "Ricalde"
        ],
        children: []
    },

    yaz: {
        mother: "—",
        father: "Ero Ricalde",
        partner: "—",
        lastName: [
            "Ricalde"
        ],
        children: []
    },

    selene: {
        mother: "Nabi Santana",
        father: "Gab Ricalde",
        partner: "—",
        lastName: [
            "Santana",  
            "Ricalde"
        ],
        children: [
            "Chux Bugsy"
        ]
    },

    elle: {
        mother: "Nabi Santana",
        father: "Gab Ricalde",
        partner: "—",
        lastName: [
            "Santana",  
            "Ricalde"
        ],
        children: []
    },

    nikolai: {
        mother: "Hailey Ricalde",
        father: "Ero Ricalde ",
        partner: "—",
         lastName: [
            "Ricalde"
        ],
        children: []
    },

    george: {
        mother: "—",
        father: "Zoro Arabicca Ricalde",
        partner: "—",
        lastName: [
            "Ricalde"
        ],
        children: []
    },

    chisu: {
        mother: "—",
        father: "Zoro Arabicca Ricalde",
        partner: "—",
        lastName: [
            "Ricalde"
        ],
        children: []
    },

    nutz: {
        mother: "—",
        father: "Zoro Arabicca Ricalde",
        partner: "—",
        lastName: [
            "Ricalde"
        ],
        children: []
    },

    thelmo: {
        mother: "—",
        father: "Zoro Arabicca Ricalde",
        partner: "—",
        lastName: [
            "Ricalde"
        ],
        children: []
    },

    dan: {
        mother: "—",
        father: "Zoro Arabicca Ricalde",
        partner: "—",
        lastName: [
            "Ricalde"
        ],
        children: []
    },

    sean: {
        mother: "—",
        father: "Zoro Arabicca Ricalde",
        partner: "—",
        lastName: [
            "Ricalde"
        ],
        children: []
    },

    mizuki: {
        mother: "—",
        father: "Zoro Arabicca Ricalde",
        partner: "—",
         lastName: [
            "Ricalde"
        ],
        children: []
    },

    elyse: {
        mother: "Hailey Ricalde",
        father: "Jr Espiritu Santo",
        partner: "—",
        lastName: [
            "Ricalde",  
            "Usman",  
            "Ishida",
            "Ele",  
            "Siklab"
        ],
        children: [
            "Kaz",
            "Dezu",
            "Zyg",
            "Wynn"
        ]
    },

    esmi: {
        mother: "Hailey Ricalde",
        father: "Jr Espiritu Santo",
        partner: "—",
         lastName: [
            "Ricalde"
        ],
        children: []
    },

    ava: {
        mother: "Hailey Ricalde",
        father: "Jr Espiritu Santo",
        partner: "—",
        lastName: [
            "Ricalde",  
            "Espiritu", 
            "Santo",
            "Prodigy",  
            "Del Marri",  
            "Amore",  
            "Ainzley"
        ],
        children: [
            "Gwaps",
            "Ford",
            "Jill",
            "Drei",
            "Ralp",
            "Gene",
            "Eznel",
            "Kromo",
            "Chin",
            "Justine",
            "Marga",
            "Wigi",
            "Penta"
        ]
    },

    bungo: {
        mother: "Hailey Ricalde",
        father: "Jr Espiritu Santo",
        partner: "—",
        lastName: [
            "Ricalde",  
            "Amiwa"
        ],
        children: []
    },

    neil: {
        mother: "Hailey Ricalde",
        father: "Jr Espiritu Santo",
        partner: "—",
        lastName: [
            "Ricalde"
        ],
        children: []
    },

    busha: {
        mother: "Mina Averia Ricalde",
        father: "Sev Espiritu Santo",
        partner: "—",
        lastName: [
            "Ricalde",
            "Espiritu Santo"
        ],
        children: []
    },

    madara: {
        mother: "Mina Averia Ricalde",
        father: "Sev Espiritu Santo",
        partner: "—",
        lastName: [
            "Ricalde",
            "Averia"
        ],
        children: []
    },

    marga: {
        mother: [
            "Meiji",
            "Zayne",
            "Clay"
        ],
        father: [
            "Zayne",
            "Clay",
            "Bogart",
            "Jin",
            "Ganji"
        ],
        partner: "Ralp Espiritu Santo",
        lastName: [
            "Ricalde",
            "Galiano",
            "Laurent",
            "Florencia",
            "Celestia",
            "Dior",
            "Silva",
            "Brigada",
            "Cartier",
            "Sarap",
            "Hartley",
            "Hellmerry",
            "Shinokami",
            "Espiritu Santo"
        ],
        children: [
            "Hailey",
            "Lily",
            "Cuervo",
            "Mids",
            "Ell",
            "Bob",
            "Astra",
            "Jon",
            "Zen",
            "Aji",
            "Kaido",
            "Shin",
            "Fuji",
            "Casper",
            "Kai",
            "Drei",
            "Rio",
            "Kize",
            "Grey",
            "Kyle",
            "Inoque",
            "Ceno",
            "Aris",
            "Enzo",
            "Joaquin",
            "Costa",
            "Yuki",
            "Doging",
            "Wbks"
        ]
    },

    ralp: {
        mother: "Ava Ricalde Espiritu Santo",
        father: "Erah Mallari Arabicca",
        partner: "Marga Espiritu Santo",
        lastName: " Ricalde  Espiritu Santo",
        children: [
            "Hailey",
            "Lily",
            "Cuervo",
            "Mids",
            "Ell",
            "Bob",
            "Astra",
            "Jon",
            "Zen",
            "Aji",
            "Kaido",
            "Shin",
            "Fuji",
            "Casper",
            "Kai",
            "Drei",
            "Rio",
            "Kize",
            "Grey",
            "Kyle",
            "Inoque",
            "Ceno",
            "Aris",
            "Enzo",
            "Joaquin",
            "Costa",
            "Yuki",
            "Doging",
            "Wbks"
        ]
    }

};

    /* =========================================================
       SOCIAL MEDIA
       ---------------------------------------------------------
       Put each person's links here.

       Example:

       instagram: "https://instagram.com/name"
       facebook:  "https://facebook.com/name"
       tiktok:    "https://tiktok.com/@name"
       youtube:   "https://youtube.com/@name"
    ========================================================= */

    const SOCIAL_KEYS = [
        "gab",
        "zoro",
        "keso",
        "harley",
        "pablo",
        "khriss",
        "ero",
        "alex",
        "lux",
        "mikey",
        "mikoy",
        "juan",
        "kaiser",
        "genesis",
        "mina",
        "hailey",
        "chongkid",
        "tuss",
        "yaz",
        "selene",
        "elle",
        "nikolai",
        "george",
        "chisu",
        "nutz",
        "thelmo",
        "dan",
        "sean",
        "mizuki",
        "elyse",
        "esmi",
        "ava",
        "bungo",
        "neil",
        "busha",
        "madara",
        "marga",
        "ralp"
    ];

    const SOCIALS = {};

    SOCIAL_KEYS.forEach((key) => {
        SOCIALS[key] = {
            instagram: "",
            facebook: "",
            tiktok: "",
            youtube: ""
        };
    });


    /* =========================================================
       EXAMPLE LINK
       ---------------------------------------------------------
       Remove/comment this if you don't need it.
    ========================================================= */

    SOCIALS.gab.youtube =
        "https://www.youtube.com/@gab_exec";
    SOCIALS.harley.tiktok =
        "https://www.tiktok.com/@hrdrst001";
    SOCIALS.keso.instagram =
        "https://www.instagram.com/chizkwiz/";
    SOCIALS.keso.facebook =
        "https://www.facebook.com/Almonteraymond2/";
    SOCIALS.zoro.tiktok =
        "https://www.tiktok.com/@lancesalvaje";

    /* =========================================================
       OTHER GAMES PLAYED
       ---------------------------------------------------------
       Add a profile's game links here. Only valid links are
       displayed in that person's dossier. Copy this format:

       OTHER_GAMES.gab = [
           { name: "Roblox", url: "https://www.roblox.com/" },
           { name: "Minecraft", url: "https://www.minecraft.net/" }
       ];

       Use the member's lowercase data-name as the key.
    ========================================================= */

    const OTHER_GAMES = {};

    SOCIAL_KEYS.forEach((key) => {
        OTHER_GAMES[key] = [];
    });

    // EXAMPLE (uncomment and customize when ready):
     OTHER_GAMES.gab = [
         { name: "FiveM", url: "https://fivem.net/" },
         { name: "GTA5", url: "https://www.rockstargames.com/gta-v" },
         { name: "Dota2", url: "https://www.dota2.com/home" },
         { name: "GeoGuessr Steam Edition", url: "https://www.geoguessr.com/" },
         { name: "Valorant", url: "https://playvalorant.com/en-gb/?adjust_referrer=adjust_external_click_id%3DCjwKCAjwoaLWBhAWEiwAnyituwtvIwCZyOkvQ6K0AvVFQSFQ6cgj2FLRkymErB502e314K88Jn-lfhoC4OkQAvD_BwE&referrer=gclid%3DCjwKCAjwoaLWBhAWEiwAnyituwtvIwCZyOkvQ6K0AvVFQSFQ6cgj2FLRkymErB502e314K88Jn-lfhoC4OkQAvD_BwE&gref=EkQKPAoICPChotYGEBYSLACfKK27C28jAJnI6S9DorQC9UVBIVDpyCPYUtGTKYSsHnTZ7fXgrzwmf6V-GgLg6RAC8P8HARjc-PbEAyIIGAUgATABOAc" }
     ];
         OTHER_GAMES.selene = [
         { name: "Valorant", url: "https://playvalorant.com/en-gb/?adjust_referrer=adjust_external_click_id%3DCjwKCAjwoaLWBhAWEiwAnyituwtvIwCZyOkvQ6K0AvVFQSFQ6cgj2FLRkymErB502e314K88Jn-lfhoC4OkQAvD_BwE&referrer=gclid%3DCjwKCAjwoaLWBhAWEiwAnyituwtvIwCZyOkvQ6K0AvVFQSFQ6cgj2FLRkymErB502e314K88Jn-lfhoC4OkQAvD_BwE&gref=EkQKPAoICPChotYGEBYSLACfKK27C28jAJnI6S9DorQC9UVBIVDpyCPYUtGTKYSsHnTZ7fXgrzwmf6V-GgLg6RAC8P8HARjc-PbEAyIIGAUgATABOAc" }
     ];
        OTHER_GAMES.juan = [
         { name: "Dota2", url: "https://www.dota2.com/home" }
     ];
        OTHER_GAMES.lux = [
         { name: "Dota2", url: "https://www.dota2.com/home" }
     ];
        OTHER_GAMES.mikey = [
         { name: "Dota2", url: "https://www.dota2.com/home" }
     ];
              

    /* =========================================================
       STATE
    ========================================================= */

    let currentProfile = null;
    let currentMusic = null;
    let lockedProfile = null;
    let currentClone = null;

    /* Do not let removal of the intro accidentally trigger music for a
       profile sitting under the cursor. Music becomes available only after
       the visitor moves the pointer or taps after entering the Home page. */
    let allowProfileMusic = !document.getElementById("siteIntro");

    document.addEventListener("ricalde:site-entered", () => {
        allowProfileMusic = false;

        const enableProfileMusicAfterIntent = (event) => {
            allowProfileMusic = true;
            document.removeEventListener("pointermove", enableProfileMusicAfterIntent);
            document.removeEventListener("pointerdown", enableProfileMusicAfterIntent);

            /* If the first deliberate mouse movement lands on a profile,
               start that profile's track now; avoids missing the first hover. */
            const target = event && event.target;
            const hoveredProfile = target && typeof target.closest === "function"
                ? target.closest(".profile")
                : null;
            if (event && event.type === "pointermove" && hoveredProfile && !lockedProfile) {
                playMemberMusic(hoveredProfile);
            }
        };

        document.addEventListener("pointermove", enableProfileMusicAfterIntent);
        document.addEventListener("pointerdown", enableProfileMusicAfterIntent);
    }, { once: true });

    let dossierCloseTimer = null;


    /* =========================================================
       YEAR
    ========================================================= */

    if (year) {
        year.textContent =
            new Date().getFullYear();
    }


    /* =========================================================
       AUDIO
    ========================================================= */

    if (audio) {
        audio.preload = "auto";
        audio.volume = 0.5;
        audio.loop = true;
    }


    /* =========================================================
       ADD MUSIC ICONS
    ========================================================= */

    profiles.forEach((profile) => {

        if (!profile.dataset.music) {
            return;
        }

        const cover =
            profile.querySelector(".cover");

        if (!cover) {
            return;
        }

        if (
            cover.querySelector(".music-icon")
        ) {
            return;
        }

        const icon =
            document.createElement("div");

        icon.className = "music-icon";

        icon.textContent = "♪";

        icon.setAttribute(
            "aria-hidden",
            "true"
        );

        cover.appendChild(icon);
    });


    /* =========================================================
       CLEAR MUSIC CLASSES
    ========================================================= */

    function clearMusicClasses() {

        profiles.forEach((profile) => {
            profile.classList.remove(
                "music-playing"
            );
        });

        if (currentClone) {
            currentClone.classList.remove(
                "music-playing"
            );
        }
    }


    /* =========================================================
       PLAY MEMBER MUSIC
    ========================================================= */

    function playMemberMusic(profile) {

        if (
            !profile ||
            !audio
        ) {
            return;
        }

        const music =
            profile.dataset.music;

        if (!music) {
            return;
        }


        /* Same member -> resume */
        if (
            currentProfile === profile &&
            currentMusic === music
        ) {

            const promise =
                audio.play();

            if (
                promise &&
                typeof promise.catch === "function"
            ) {
                promise.catch(() => {});
            }

            profile.classList.add(
                "music-playing"
            );

            if (currentClone) {
                currentClone.classList.add(
                    "music-playing"
                );
            }

            return;
        }


        /* Stop previous */
        audio.pause();

        clearMusicClasses();


        /* Set new member */
        currentProfile =
            profile;

        currentMusic =
            music;


        audio.src =
            music;

        audio.currentTime =
            0;

        audio.loop =
            true;

        audio.volume =
            0.5;


        const promise =
            audio.play();


        if (
            promise &&
            typeof promise.then === "function"
        ) {

            promise
                .then(() => {

                    profile.classList.add(
                        "music-playing"
                    );

                    if (currentClone) {
                        currentClone.classList.add(
                            "music-playing"
                        );
                    }

                })
                .catch(() => {
                    /*
                     * Browser can block autoplay
                     * until the user interacts.
                     */
                });
        }
    }


    /* =========================================================
       STOP MUSIC COMPLETELY
       ---------------------------------------------------------
       Used when dossier closes.
    ========================================================= */

    function stopMusicCompletely() {

        if (!audio) {
            return;
        }

        audio.pause();

        audio.currentTime =
            0;

        audio.removeAttribute(
            "src"
        );

        audio.load();

        clearMusicClasses();

        currentProfile =
            null;

        currentMusic =
            null;
    }


    /* =========================================================
       DOSSIER OVERLAY
    ========================================================= */

    const overlay =
        document.createElement("div");

    overlay.className =
        "profile-dossier-overlay";

    overlay.innerHTML = `

        <div class="dossier-stage">

            <div class="dossier-profile-slot"></div>

            <div class="dossier-panel">

                <div class="dossier-top-line"></div>

                <div class="dossier-grid"></div>

                <div class="dossier-scan"></div>


                <!-- CLOSE -->

                <button
                    type="button"
                    class="dossier-close"
                    aria-label="Close dossier"
                >
                    ×
                </button>


                <!-- HEADER -->

                <div class="dossier-header">

                    <div>

                        <div class="dossier-kicker">
                            RCLD // CLASSIFIED
                        </div>

                        <div class="dossier-title">
                            RICALDE FAMILY DOSSIER
                        </div>

                    </div>

                    <div class="dossier-header-status">
                        PROFILE // ACTIVE
                    </div>

                </div>


                <!-- MAIN -->

                <div class="dossier-main">

                    <div class="dossier-avatar">

                        <div
                            class="dossier-avatar-inner"
                            data-dossier-avatar
                        >
                            R
                        </div>

                    </div>


                    <div
                        class="dossier-name"
                        data-dossier-name
                    >
                        Ricalde
                    </div>


                    <div
                        class="dossier-username"
                        data-dossier-username
                    >
                        @ricalde
                    </div>


                    <div
                        class="dossier-role"
                        data-dossier-role
                    >
                        FAMILY
                    </div>


                    <!-- GAMES PLAYED: centered under the role badge and above FAMILY RECORD -->
                    <div
                        class="dossier-games-center-row"
                        data-dossier-games-section
                        hidden
                    >
                        <div class="dossier-mini-games">
                            <span class="dossier-mini-links-label">GAMES PLAYED</span>
                            <div
                                class="dossier-icon-links dossier-game-links"
                                data-game-links
                            ></div>
                        </div>
                    </div>


                    <!-- BASIC INFORMATION -->

                    <div class="dossier-info-grid">

                        <div class="dossier-side dossier-generation-side">

                            <span>
                                GENERATION
                            </span>

                            <strong
                                data-dossier-generation
                            >
                                RICALDE
                            </strong>

                        </div>


                        <div class="dossier-biobox">

                            <div class="dossier-bio-label">
                                FAMILY DETAILS
                            </div>

                            <p
                                data-dossier-bio
                            >
                                Member of the Ricalde Familia.
                            </p>

                        </div>


                        <div class="dossier-side dossier-social-side">

                            <span>SOCIALS</span>

                            <div class="dossier-icon-links dossier-social-icon-links">
                                <a
                                    class="dossier-icon-link hidden"
                                    data-social="instagram"
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Instagram"
                                    aria-label="Open Instagram in a new tab"
                                >
                                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" fill="none" stroke="currentColor" stroke-width="2"/>
                                        <circle cx="12" cy="12" r="4.1" fill="none" stroke="currentColor" stroke-width="2"/>
                                        <circle cx="17.8" cy="6.5" r="1.25" fill="currentColor"/>
                                    </svg>
                                </a>
                                <a
                                    class="dossier-icon-link hidden"
                                    data-social="facebook"
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Facebook"
                                    aria-label="Open Facebook in a new tab"
                                >
                                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <path d="M13.7 21v-8h2.8l.42-3h-3.22V8.1c0-.87.29-1.46 1.62-1.46h1.72V3.96c-.3-.04-1.33-.13-2.54-.13-2.51 0-4.23 1.53-4.23 4.34V10H7.5v3h2.77v8z" fill="currentColor"/>
                                    </svg>
                                </a>
                                <a
                                    class="dossier-icon-link hidden"
                                    data-social="tiktok"
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="TikTok"
                                    aria-label="Open TikTok in a new tab"
                                >
                                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <path d="M14.2 3h3.05c.22 2.05 1.37 3.55 3.5 4.17v3.12a9.3 9.3 0 0 1-3.5-1.48v6.1a5.62 5.62 0 1 1-5.62-5.62c.45 0 .87.05 1.27.15v3.12a2.58 2.58 0 1 0 1.3 2.24z" fill="currentColor"/>
                                    </svg>
                                </a>
                                <a
                                    class="dossier-icon-link hidden"
                                    data-social="youtube"
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="YouTube"
                                    aria-label="Open YouTube in a new tab"
                                >
                                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <path d="M23.2 7.1a3 3 0 0 0-2.1-2.12C19.25 4.5 12 4.5 12 4.5s-7.25 0-9.1.48A3 3 0 0 0 .8 7.1 31.3 31.3 0 0 0 .3 12a31.3 31.3 0 0 0 .5 4.9 3 3 0 0 0 2.1 2.12c1.85.48 9.1.48 9.1.48s7.25 0 9.1-.48a3 3 0 0 0 2.1-2.12 31.3 31.3 0 0 0 .5-4.9 31.3 31.3 0 0 0-.5-4.9ZM9.6 15.5v-7l6.1 3.5z" fill="currentColor"/>
                                    </svg>
                                </a>
                            </div>

                        </div>

                    </div>


                    <!-- FAMILY CONNECTIONS -->

                    <div class="dossier-family">

                        <div class="dossier-family-title">
                            FAMILY CONNECTIONS
                        </div>


                        <div class="family-grid">


                            <!-- FATHER -->

                            <div class="family-box">

                                <span class="family-label">
                                    FATHER
                                </span>

                                <div
                                    class="family-value dossier-children-list family-list-value"
                                    data-dossier-father
                                ></div>

                            </div>


                            <!-- MOTHER -->

                            <div class="family-box mother-box">

                                <span class="family-label">
                                    MOTHER
                                </span>

                                <div
                                    class="dossier-children-list family-list-value"
                                    data-dossier-mother
                                ></div>

                            </div>


                            <!-- PARTNER -->

                            <div class="family-box">

                                <span class="family-label">
                                    PARTNER
                                </span>

                                <div
                                    class="family-value dossier-children-list family-list-value"
                                    data-dossier-partner
                                ></div>

                            </div>


                            <!-- LAST NAME -->

                            <div class="family-box">

                                <span class="family-label">
                                    LAST NAME / SURNAME
                                </span>

                                <div
                                    class="family-value dossier-children-list family-list-value dossier-surname-list"
                                    data-dossier-last-name
                                ></div>

                            </div>


                            <!-- CHILDREN -->

                            <div class="family-box children-box">

                                <span class="family-label">
                                    CHILDREN
                                </span>

                                <div
                                    class="dossier-children-list"
                                    data-dossier-children
                                ></div>

                            </div>

                        </div>

                    </div>


                    <!-- BOTTOM -->

                    <div class="dossier-bottom">

                        <div>

                            <span>
                                IDENTITY
                            </span>

                            <strong
                                data-dossier-identity
                            >
                                RICALDE MEMBER
                            </strong>

                        </div>


                        <div class="dossier-live">

                            <i></i>

                            FAMILY ARCHIVE

                        </div>


                        <div>

                            <span>
                                HANDLE
                            </span>

                            <strong
                                data-dossier-handle
                            >
                                @ricalde
                            </strong>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    `;

    document.body.appendChild(
        overlay
    );


    /* =========================================================
       DOSSIER REFERENCES
    ========================================================= */

    const profileSlot =
        overlay.querySelector(
            ".dossier-profile-slot"
        );

    const closeButton =
        overlay.querySelector(
            ".dossier-close"
        );

    const dossierName =
        overlay.querySelector(
            "[data-dossier-name]"
        );

    const dossierUsername =
        overlay.querySelector(
            "[data-dossier-username]"
        );

    const dossierAvatar =
        overlay.querySelector(
            "[data-dossier-avatar]"
        );

    const dossierRole =
        overlay.querySelector(
            "[data-dossier-role]"
        );

    const dossierGeneration =
        overlay.querySelector(
            "[data-dossier-generation]"
        );

    const dossierBio =
        overlay.querySelector(
            "[data-dossier-bio]"
        );

    const dossierIdentity =
        overlay.querySelector(
            "[data-dossier-identity]"
        );

    const dossierHandle =
        overlay.querySelector(
            "[data-dossier-handle]"
        );

    const dossierFather =
        overlay.querySelector(
            "[data-dossier-father]"
        );

    const dossierMother =
        overlay.querySelector(
            "[data-dossier-mother]"
        );

    const dossierPartner =
        overlay.querySelector(
            "[data-dossier-partner]"
        );

    const dossierLastName =
        overlay.querySelector(
            "[data-dossier-last-name]"
        );

    const dossierChildren =
        overlay.querySelector(
            "[data-dossier-children]"
        );


    /* =========================================================
       SOCIAL ELEMENTS
    ========================================================= */

    const socialElements = {
        instagram:
            overlay.querySelector(
                '[data-social="instagram"]'
            ),

        facebook:
            overlay.querySelector(
                '[data-social="facebook"]'
            ),

        tiktok:
            overlay.querySelector(
                '[data-social="tiktok"]'
            ),

        youtube:
            overlay.querySelector(
                '[data-social="youtube"]'
            )
    };


    const gamesSection =
        overlay.querySelector(
            "[data-dossier-games-section]"
        );

    const gameLinksContainer =
        overlay.querySelector(
            "[data-game-links]"
        );


    /* =========================================================
       UPDATE FAMILY
       ---------------------------------------------------------
       Mother and children support vertical lists.
       For multiple names, use arrays in FAMILY_INFO or a pipe
       separator in HTML, e.g. data-mother="Name A|Name B".
    ========================================================= */

    function normalizeFamilyList(value) {

        if (Array.isArray(value)) {
            return value
                .map((item) => String(item).trim())
                .filter(Boolean);
        }

        if (typeof value === "string") {
            // For multiple values in a string, use | or ; between names.
            // Keep spaces inside full names intact (for example, "Ralp Espiritu Santo").
            return value
                .split(/[|;]/)
                .map((item) => item.trim())
                .filter(Boolean);
        }

        return [];
    }


    function normalizeSurnameList(value) {

        const values = Array.isArray(value)
            ? value
            : typeof value === "string"
                ? value.split(/[•·|,]+/)
                : [];

        return values
            .map((item) => String(item).replace(/^[•·\s]+|[•·\s]+$/g, "").trim())
            .filter(Boolean);
    }


    function renderFamilyList(container, values) {

        if (!container) {
            return;
        }

        const items = normalizeFamilyList(values);
        container.replaceChildren();

        if (items.length === 0) {
            const empty = document.createElement("div");
            empty.className = "dossier-child";
            empty.textContent = "—";
            container.appendChild(empty);
            return;
        }

        items.forEach((item) => {
            const element = document.createElement("div");
            element.className = "dossier-child";
            element.textContent = item;
            container.appendChild(element);
        });
    }


    function updateFamily(profile) {

        const key = (profile.dataset.name || "").trim().toLowerCase();
        const family = FAMILY_INFO[key] || {};

        const father =
            profile.dataset.father ||
            family.father ||
            "—";

        const mother =
            profile.dataset.mother ||
            family.mother ||
            "—";

        const partner =
            profile.dataset.partner ||
            family.partner ||
            "—";

        const lastName =
            profile.dataset.lastName ||
            family.lastName ||
            "—";

        let children = [];

        if (profile.dataset.children) {
            children = normalizeFamilyList(
                profile.dataset.children
            );
        } else {
            children = normalizeFamilyList(
                family.children || []
            );
        }

        renderFamilyList(dossierFather, father);
        renderFamilyList(dossierMother, mother);
        renderFamilyList(dossierPartner, partner);

        renderFamilyList(
            dossierLastName,
            normalizeSurnameList(lastName)
        );

        renderFamilyList(dossierChildren, children);
    }


    /* =========================================================
       UPDATE SOCIALS
    ========================================================= */

    function updateSocials(profile) {

        const key =
            (
                profile.dataset.name ||
                ""
            )
                .trim()
                .toLowerCase();


        const socials =
            SOCIALS[key] || {};


        Object.entries(
            socialElements
        ).forEach(
            ([platform, element]) => {

                if (!element) {
                    return;
                }


                /*
                 * HTML data attribute can also
                 * override the object.
                 *
                 * Example:
                 *
                 * data-instagram="https://..."
                 */

                const url =
                    (
                        profile.dataset[platform] ||
                        socials[platform] ||
                        ""
                    )
                        .trim();


                const valid =
                    /^https?:\/\//i.test(
                        url
                    );


                if (valid) {

                    element.href =
                        url;

                    element.classList.remove(
                        "hidden"
                    );

                }
                else {

                    element.href =
                        "#";

                    element.classList.add(
                        "hidden"
                    );

                }
            }
        );
    }


    /* =========================================================
       UPDATE OTHER GAMES PLAYED
       ---------------------------------------------------------
       Links come from OTHER_GAMES[memberKey]. A game appears
       only when its URL is a valid http/https address.
    ========================================================= */

function updateGames(profile) {
    if (!gameLinksContainer || !gamesSection) {
        return;
    }

    const key = (profile.dataset.name || "").trim().toLowerCase();

    // GTA5 and FiveM appear on every profile.
    const defaultGames = [
        {
            name: "FiveM",
            url: "https://fivem.net/"
        },
        {
            name: "GTA5",
            url: "https://www.rockstargames.com/gta-v"
        },
    ];

    // Keep the additional games configured for each member.
    const memberGames = Array.isArray(OTHER_GAMES[key])
        ? OTHER_GAMES[key]
        : [];

    // Combine games and remove duplicates by name.
    const seenGameNames = new Set();

    const games = [...defaultGames, ...memberGames].filter((game) => {
        if (!game || typeof game !== "object") {
            return false;
        }

        const name = String(game.name || "").trim().toLowerCase();

        if (!name || seenGameNames.has(name)) {
            return false;
        }

        seenGameNames.add(name);
        return true;
    });

    gameLinksContainer.replaceChildren();

    games.forEach((game) => {
        if (!game || typeof game !== "object") {
            return;
        }

        const name = String(game.name || "").trim();
        const url = String(game.url || "").trim();

        if (!name || !/^https?:\/\//i.test(url)) {
            return;
        }

        let hostname = "";

        try {
            hostname = new URL(url).hostname;
        } catch (error) {
            return;
        }

        const link = document.createElement("a");

        link.className = "dossier-icon-link dossier-game-icon";
        link.href = url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.title = name;
        link.setAttribute("aria-label", `Open ${name} in a new tab`);

        const icon = document.createElement("img");
        const customIcon = String(game.icon || "").trim();

        icon.src = customIcon ||
            `https://www.google.com/s2/favicons?domain=${encodeURIComponent(hostname)}&sz=64`;

        icon.alt = "";
        icon.setAttribute("aria-hidden", "true");
        icon.loading = "lazy";
        icon.referrerPolicy = "no-referrer";

        icon.addEventListener("error", () => {
            const fallback = document.createElement("span");

            fallback.className = "dossier-game-fallback";
            fallback.setAttribute("aria-hidden", "true");

            fallback.innerHTML =
                '<svg viewBox="0 0 24 24" focusable="false">' +
                '<path d="M7.2 8.2h9.6a4 4 0 0 1 3.8 2.8l1.1 3.7a2.4 2.4 0 0 1-3.8 2.6l-2.2-1.8H8.3l-2.2 1.8a2.4 2.4 0 0 1-3.8-2.6l1.1-3.7a4 4 0 0 1 3.8-2.8Zm-.7 2.5v2.1H4.4v1.7h2.1v2.1h1.7v-2.1h2.1v-1.7H8.2v-2.1zm9.2 1a.95.95 0 1 0 0 1.9.95.95 0 0 0 0-1.9Zm2.2 2.1a.95.95 0 1 0 0 1.9.95.95 0 0 0 0-1.9Z" fill="currentColor"/>' +
                '</svg>';

            if (icon.parentNode) {
                icon.replaceWith(fallback);
            }
        }, { once: true });

        link.appendChild(icon);
        gameLinksContainer.appendChild(link);
    });

    gamesSection.hidden = gameLinksContainer.children.length === 0;
}

    /* =========================================================
       UPDATE DOSSIER
    ========================================================= */

    function updateDossier(profile) {

        const heading =
            profile.querySelector("h3");

        const username =
            profile.querySelector(
                ":scope > span"
            );

        const avatarImage =
            profile.querySelector(
                ".avatar img"
            );

        const avatarBox =
            profile.querySelector(
                ".avatar"
            );


        const name =
            heading
                ? heading.textContent.trim()
                : (
                    profile.dataset.name ||
                    "Ricalde"
                );


        const handle =
            username
                ? username.textContent.trim()
                : "@ricalde";


        const role =
            profile.dataset.role ||
            "RICALDE FAMILY";


        const bio =
            profile.dataset.bio ||
            `${name} is a member of the Ricalde Familia.`;


        if (dossierName) {
            dossierName.textContent =
                name;
        }

        if (dossierUsername) {
            dossierUsername.textContent =
                handle;
        }

        if (dossierRole) {
            dossierRole.textContent =
                role;
        }

        if (dossierGeneration) {
            dossierGeneration.textContent =
                role;
        }

        if (dossierIdentity) {
            dossierIdentity.textContent =
                role;
        }

        if (dossierBio) {
            dossierBio.textContent =
                bio;
        }

        if (dossierHandle) {
            dossierHandle.textContent =
                handle;
        }


        /* -----------------------------------------------------
           AVATAR
        ----------------------------------------------------- */

        if (dossierAvatar) {

            dossierAvatar.innerHTML =
                "";


            if (avatarImage) {

                const image =
                    document.createElement(
                        "img"
                    );

                image.src =
                    avatarImage.currentSrc ||
                    avatarImage.src;

                image.alt =
                    "";

                dossierAvatar.appendChild(
                    image
                );

            }
            else {

                const letters =
                    avatarBox
                        ? avatarBox.textContent
                            .trim()
                            .substring(
                                0,
                                2
                            )
                        : "R";


                dossierAvatar.textContent =
                    letters ||
                    "R";
            }
        }


        updateFamily(
            profile
        );

        updateSocials(
            profile
        );

        updateGames(
            profile
        );
    }


    /* =========================================================
       CREATE PROFILE CLONE
    ========================================================= */

    function createProfileClone(profile) {

        if (currentClone) {

            currentClone.remove();

            currentClone =
                null;
        }


        const clone =
            profile.cloneNode(true);


        clone.classList.remove(
            "profile-hovered"
        );

        clone.classList.remove(
            "profile-selected"
        );

        clone.classList.add(
            "profile-focus-clone"
        );


        /*
         * Remove interactive controls
         * from clone.
         */

        clone
            .querySelectorAll("button")
            .forEach(
                (button) =>
                    button.remove()
            );


        /*
         * Restart videos in dossier clone.
         */

        clone
            .querySelectorAll("video")
            .forEach(
                (video) => {

                    video.muted =
                        true;

                    video.autoplay =
                        true;

                    video.loop =
                        true;

                    video.playsInline =
                        true;

                    const play =
                        video.play();

                    if (
                        play &&
                        typeof play.catch ===
                            "function"
                    ) {
                        play.catch(
                            () => {}
                        );
                    }
                }
            );


        if (profileSlot) {

            profileSlot.innerHTML =
                "";

            profileSlot.appendChild(
                clone
            );
        }


        currentClone =
            clone;


        /*
         * Sync music state.
         */

        if (
            currentProfile === profile &&
            audio &&
            !audio.paused
        ) {

            clone.classList.add(
                "music-playing"
            );
        }
    }


    /* =========================================================
       OPEN DOSSIER
    ========================================================= */

    function openDossier(profile) {

        clearTimeout(
            dossierCloseTimer
        );


        lockedProfile =
            profile;


        updateDossier(
            profile
        );


        createProfileClone(
            profile
        );


        profiles.forEach(
            (item) => {

                item.classList.remove(
                    "profile-selected"
                );

                item.classList.remove(
                    "profile-hovered"
                );
            }
        );


        profile.classList.add(
            "profile-selected"
        );


        overlay.classList.add(
            "active"
        );


        requestAnimationFrame(
            () => {

                requestAnimationFrame(
                    () => {

                        overlay.classList.add(
                            "visible"
                        );
                    }
                );
            }
        );
    }


    /* =========================================================
       CLOSE DOSSIER
       ---------------------------------------------------------
       IMPORTANT:
       Music stops completely here.
    ========================================================= */

    function closeDossier() {

        clearTimeout(
            dossierCloseTimer
        );


        /* STOP MUSIC */
        stopMusicCompletely();


        lockedProfile =
            null;


        profiles.forEach(
            (profile) => {

                profile.classList.remove(
                    "profile-selected"
                );

                profile.classList.remove(
                    "profile-hovered"
                );
            }
        );


        overlay.classList.remove(
            "visible"
        );


        dossierCloseTimer =
            setTimeout(
                () => {

                    overlay.classList.remove(
                        "active"
                    );


                    if (currentClone) {

                        currentClone.remove();

                        currentClone =
                            null;
                    }


                    if (profileSlot) {
                        profileSlot.innerHTML =
                            "";
                    }

                },
                350
            );
    }


    /* =========================================================
       PROFILE EVENTS
    ========================================================= */

    profiles.forEach(
        (profile) => {


            /* -------------------------------------------------
               HOVER IN
            ------------------------------------------------- */

            profile.addEventListener(
                "mouseenter",
                () => {

                    profile.classList.add(
                        "profile-hovered"
                    );


                    /*
                     * Don't start a new song while
                     * another profile is locked.
                     */

                    if (!lockedProfile && allowProfileMusic) {

                        playMemberMusic(
                            profile
                        );
                    }
                }
            );


            /* -------------------------------------------------
               HOVER OUT
            ------------------------------------------------- */

            profile.addEventListener(
                "mouseleave",
                () => {

                    profile.classList.remove(
                        "profile-hovered"
                    );


                    /*
                     * Locked dossier profile keeps
                     * its music until dossier closes.
                     */

                    if (
                        lockedProfile === profile
                    ) {

                        return;
                    }


                    /*
                     * Stop hover music.
                     */

                    if (
                        currentProfile === profile &&
                        audio &&
                        !audio.paused
                    ) {

                        audio.pause();

                        profile.classList.remove(
                            "music-playing"
                        );

                        currentProfile =
                            null;

                        currentMusic =
                            null;
                    }
                }
            );


            /* -------------------------------------------------
               CLICK PROFILE
            ------------------------------------------------- */

            profile.addEventListener(
                "click",
                (event) => {

                    event.preventDefault();
                    event.stopPropagation();


                    /*
                     * Lock the profile.
                     */

                    lockedProfile =
                        profile;


                    /*
                     * Keep playing music.
                     */

                    if (allowProfileMusic) {
                        playMemberMusic(profile);
                    }


                    /*
                     * Open dossier.
                     */

                    openDossier(
                        profile
                    );
                }
            );

        }
    );


    /* =========================================================
       CLOSE DOSSIER BUTTON
    ========================================================= */

    if (closeButton) {

        closeButton.addEventListener(
            "click",
            (event) => {

                event.preventDefault();
                event.stopPropagation();

                closeDossier();
            }
        );
    }


    /* =========================================================
       CLICK OUTSIDE DOSSIER
    ========================================================= */

    overlay.addEventListener(
        "click",
        (event) => {

            if (
                event.target === overlay
            ) {

                closeDossier();
            }
        }
    );


    /* =========================================================
       MEMBER SEARCH
    ========================================================= */

    if (search) {

        search.addEventListener(
            "input",
            () => {

                const query =
                    search.value
                        .trim()
                        .toLowerCase();


                profiles.forEach(
                    (profile) => {

                        const name =
                            (
                                profile.dataset.name ||
                                ""
                            )
                                .toLowerCase();


                        const username =
                            (
                                profile.querySelector(
                                    ":scope > span"
                                )?.textContent ||
                                ""
                            )
                                .toLowerCase();


                        const matches =
                            name.includes(query) ||
                            username.includes(query);


                        profile.style.display =
                            matches
                                ? ""
                                : "none";
                    }
                );
            }
        );
    }


    /* =========================================================
       MOBILE NAVIGATION
    ========================================================= */

    if (
        menuButton &&
        navLinks
    ) {

        menuButton.addEventListener(
            "click",
            () => {

                navLinks.classList.toggle(
                    "active"
                );
            }
        );


        navLinks
            .querySelectorAll("a")
            .forEach(
                (link) => {

                    link.addEventListener(
                        "click",
                        () => {

                            navLinks.classList.remove(
                                "active"
                            );
                        }
                    );
                }
            );
    }


    /* =========================================================
       AUDIO ENDED
    ========================================================= */

    if (audio) {

        audio.addEventListener(
            "ended",
            () => {

                clearMusicClasses();

                currentProfile =
                    null;

                currentMusic =
                    null;
            }
        );
    }


    /* =========================================================
       MEMORY ARCHIVE
       ---------------------------------------------------------
       Infinite horizontal motion
       Dragging
       Touch swipe
       Click image
       Zoom
    ========================================================= */

    const memoryWindow =
        document.getElementById(
            "memoryWindow"
        );

    const memoryTrack =
        document.getElementById(
            "memoryTrack"
        );


    if (
        memoryWindow &&
        memoryTrack
    ) {

        /* -----------------------------------------------------
           BUILD A SINGLE ORIGINAL SET
        ----------------------------------------------------- */

        let memorySet =
            memoryTrack.querySelector(
                ".memory-set"
            );


        /*
         * If your HTML does not have a
         * .memory-set wrapper, create one.
         */

        if (!memorySet) {

            memorySet =
                document.createElement(
                    "div"
                );

            memorySet.className =
                "memory-set";


            const cards =
                Array.from(
                    memoryTrack.children
                )
                    .filter(
                        (child) =>
                            child.classList &&
                            child.classList.contains(
                                "memory-card"
                            )
                    );


            cards.forEach(
                (card) => {

                    memorySet.appendChild(
                        card
                    );
                }
            );


            memoryTrack.appendChild(
                memorySet
            );
        }


        /* -----------------------------------------------------
           REMOVE OLD CLONE
        ----------------------------------------------------- */

        const previousClone =
            memoryTrack.querySelector(
                ".memory-set-clone"
            );


        if (previousClone) {
            previousClone.remove();
        }


        /* -----------------------------------------------------
           DUPLICATE FOR INFINITE LOOP
        ----------------------------------------------------- */

        const duplicateSet =
            memorySet.cloneNode(true);


        duplicateSet.classList.add(
            "memory-set-clone"
        );


        duplicateSet.setAttribute(
            "aria-hidden",
            "true"
        );


        memoryTrack.appendChild(
            duplicateSet
        );


        /* -----------------------------------------------------
           MEMORY STATE
        ----------------------------------------------------- */

        let loopWidth =
            0;

        let position =
            0;

        let lastTime =
            performance.now();

        let dragging =
            false;

        let dragStartX =
            0;

        let dragStartPosition =
            0;

        let dragMoved =
            false;

        let pointerId =
            null;

        let hoverPaused =
            false;


        const MEMORY_SPEED =
            150;

        const DRAG_THRESHOLD =
            8;


        memoryTrack.style.animation =
            "none";

        memoryTrack.style.willChange =
            "transform";

        memoryWindow.style.touchAction =
            "pan-y";

        memoryWindow.style.cursor =
            "grab";


        /* -----------------------------------------------------
           NORMALIZE
        ----------------------------------------------------- */

        function normalizePosition(
            value
        ) {

            if (
                loopWidth <= 0
            ) {
                return 0;
            }


            let result =
                value %
                loopWidth;


            if (
                result < 0
            ) {

                result +=
                    loopWidth;
            }


            return result;
        }


        /* -----------------------------------------------------
           RENDER
        ----------------------------------------------------- */

        function renderMemory() {

            if (
                loopWidth <= 0
            ) {
                return;
            }


            position =
                normalizePosition(
                    position
                );


            memoryTrack.style.transform =
                `translate3d(${-position}px, 0, 0)`;
        }


        /* -----------------------------------------------------
           CALCULATE LOOP WIDTH
        ----------------------------------------------------- */

        function calculateLoopWidth() {

            loopWidth =
                memorySet.getBoundingClientRect()
                    .width;


            if (
                loopWidth <= 0
            ) {
                return;
            }


            position =
                normalizePosition(
                    position
                );


            renderMemory();
        }


        /* -----------------------------------------------------
           AUTO MOVE
        ----------------------------------------------------- */

        function animateMemory(
            time
        ) {

            const delta =
                Math.min(
                    60,
                    time -
                    lastTime
                );


            lastTime =
                time;


            if (
                !dragging &&
                !hoverPaused &&
                loopWidth > 0
            ) {

                position +=
                    MEMORY_SPEED *
                    delta /
                    1000;


                renderMemory();
            }


            requestAnimationFrame(
                animateMemory
            );
        }


        /* -----------------------------------------------------
           HOVER
        ----------------------------------------------------- */

        memoryWindow.addEventListener(
            "mouseenter",
            () => {

                hoverPaused =
                    true;

                if (!dragging) {
                    memoryWindow.style.cursor =
                        "default";
                }
            }
        );


        memoryWindow.addEventListener(
            "mouseleave",
            () => {

                if (!dragging) {

                    hoverPaused =
                        false;

                    memoryWindow.style.cursor =
                        "grab";
                }
            }
        );


        /* -----------------------------------------------------
           POINTER DOWN
        ----------------------------------------------------- */

        memoryWindow.addEventListener(
            "pointerdown",
            (event) => {

                dragging =
                    true;

                dragMoved =
                    false;

                hoverPaused =
                    true;

                pointerId =
                    event.pointerId;

                dragStartX =
                    event.clientX;

                dragStartPosition =
                    position;

                memoryWindow.style.cursor =
                    "grabbing";


                event.preventDefault();


                try {

                    memoryWindow.setPointerCapture(
                        event.pointerId
                    );

                } catch (error) {
                    /* Ignore. */
                }
            }
        );


        /* -----------------------------------------------------
           POINTER MOVE
        ----------------------------------------------------- */

        memoryWindow.addEventListener(
            "pointermove",
            (event) => {

                if (
                    !dragging ||
                    event.pointerId !==
                        pointerId
                ) {

                    return;
                }


                const delta =
                    event.clientX -
                    dragStartX;


                if (
                    Math.abs(delta) >
                    DRAG_THRESHOLD
                ) {

                    dragMoved =
                        true;
                }


                position =
                    dragStartPosition -
                    delta;


                renderMemory();
            }
        );


        /* -----------------------------------------------------
           FINISH DRAG
        ----------------------------------------------------- */

        function finishDrag(
            event
        ) {

            if (
                !dragging ||
                event.pointerId !==
                    pointerId
            ) {
                return;
            }


            dragging =
                false;

            pointerId =
                null;


            position =
                normalizePosition(
                    position
                );


            renderMemory();


            memoryWindow.style.cursor =
                memoryWindow.matches(":hover")
                    ? "default"
                    : "grab";


            try {

                memoryWindow.releasePointerCapture(
                    event.pointerId
                );

            } catch (error) {
                /* Ignore. */
            }


            /*
             * Prevent click after drag.
             */

            if (dragMoved) {

                memoryTrack.dataset.dragged =
                    "true";


                setTimeout(
                    () => {

                        memoryTrack.dataset.dragged =
                            "false";
                    },
                    160
                );
            }


            hoverPaused =
                memoryWindow.matches(
                    ":hover"
                );
        }


        memoryWindow.addEventListener(
            "pointerup",
            finishDrag
        );

        memoryWindow.addEventListener(
            "pointercancel",
            finishDrag
        );


        /* -----------------------------------------------------
           LOST POINTER CAPTURE
        ----------------------------------------------------- */

        memoryWindow.addEventListener(
            "lostpointercapture",
            () => {

                if (!dragging) {
                    return;
                }


                dragging =
                    false;

                pointerId =
                    null;


                position =
                    normalizePosition(
                        position
                    );


                renderMemory();


                hoverPaused =
                    memoryWindow.matches(
                        ":hover"
                    );


                memoryWindow.style.cursor =
                    hoverPaused
                        ? "default"
                        : "grab";
            }
        );


        /* -----------------------------------------------------
           DISABLE NATIVE IMAGE DRAGGING
        ----------------------------------------------------- */

        memoryTrack
            .querySelectorAll("img")
            .forEach(
                (image) => {

                    image.draggable =
                        false;


                    image.addEventListener(
                        "dragstart",
                        (event) => {

                            event.preventDefault();
                        }
                    );
                }
            );


        /* =====================================================
           MEMORY LIGHTBOX
        ===================================================== */

        let lightbox =
            document.querySelector(
                ".gallery-lightbox"
            );


        /*
         * Create automatically if missing.
         */

        if (!lightbox) {

            lightbox =
                document.createElement(
                    "div"
                );

            lightbox.className =
                "gallery-lightbox";


            lightbox.innerHTML = `

                <div class="gallery-lightbox-inner">

                    <button
                        type="button"
                        class="gallery-lightbox-close"
                        aria-label="Close memory"
                    >
                        ×
                    </button>

                    <img
                        class="gallery-lightbox-image"
                        src=""
                        alt=""
                    >

                    <div class="gallery-lightbox-title"></div>

                </div>

            `;


            document.body.appendChild(
                lightbox
            );
        }


        const lightboxImage =
            lightbox.querySelector(
                ".gallery-lightbox-image"
            );

        const lightboxTitle =
            lightbox.querySelector(
                ".gallery-lightbox-title"
            );

        const lightboxClose =
            lightbox.querySelector(
                ".gallery-lightbox-close"
            );


        let memoryZoomed =
            false;


        /* -----------------------------------------------------
           OPEN MEMORY
        ----------------------------------------------------- */

        function openMemory(
            src,
            title
        ) {

            if (!src) {
                return;
            }


            memoryZoomed =
                false;


            if (lightboxImage) {

                lightboxImage.src =
                    src;

                lightboxImage.alt =
                    title ||
                    "RICALDE MEMORY";

                lightboxImage.classList.remove(
                    "zoomed"
                );
            }


            if (lightboxTitle) {

                lightboxTitle.textContent =
                    title ||
                    "RICALDE MEMORY";
            }


            lightbox.classList.add(
                "active"
            );


            document.body.style.overflow =
                "hidden";
        }


        /* -----------------------------------------------------
           CLOSE MEMORY
        ----------------------------------------------------- */

        function closeMemory() {

            lightbox.classList.remove(
                "active"
            );


            memoryZoomed =
                false;


            if (lightboxImage) {

                lightboxImage.classList.remove(
                    "zoomed"
                );
            }


            document.body.style.overflow =
                "";
        }


        /* -----------------------------------------------------
           GET MEMORY DATA
        ----------------------------------------------------- */

        function getMemoryData(
            card
        ) {

            if (!card) {
                return null;
            }


            const image =
                card.querySelector(
                    "img"
                );


            if (!image) {
                return null;
            }


            const src =
                card.dataset.galleryImage ||
                image.currentSrc ||
                image.src ||
                "";


            const title =
                card.dataset.galleryTitle ||
                "RICALDE MEMORY";


            return {
                src,
                title
            };
        }


        /* -----------------------------------------------------
           MEMORY CLICK
        ----------------------------------------------------- */

        memoryTrack.addEventListener(
            "click",
            (event) => {

                const card =
                    event.target.closest(
                        ".gallery-item"
                    );


                if (
                    !card ||
                    !memoryTrack.contains(
                        card
                    )
                ) {
                    return;
                }


                /*
                 * Don't click after dragging.
                 */

                if (
                    memoryTrack.dataset.dragged ===
                    "true"
                ) {

                    event.preventDefault();
                    event.stopPropagation();

                    return;
                }


                const data =
                    getMemoryData(
                        card
                    );


                if (!data) {
                    return;
                }


                event.preventDefault();
                event.stopPropagation();


                openMemory(
                    data.src,
                    data.title
                );
            }
        );


        /* -----------------------------------------------------
           KEYBOARD
        ----------------------------------------------------- */

        memoryTrack
            .querySelectorAll(
                ".gallery-item"
            )
            .forEach(
                (card) => {

                    card.setAttribute(
                        "tabindex",
                        "0"
                    );

                    card.setAttribute(
                        "role",
                        "button"
                    );
                }
            );


        memoryTrack.addEventListener(
            "keydown",
            (event) => {

                if (
                    event.key !== "Enter" &&
                    event.key !== " "
                ) {
                    return;
                }


                const card =
                    event.target.closest(
                        ".gallery-item"
                    );


                if (!card) {
                    return;
                }


                event.preventDefault();


                const data =
                    getMemoryData(
                        card
                    );


                if (data) {

                    openMemory(
                        data.src,
                        data.title
                    );
                }
            }
        );


        /* -----------------------------------------------------
           LIGHTBOX CLOSE
        ----------------------------------------------------- */

        if (lightboxClose) {

            lightboxClose.addEventListener(
                "click",
                (event) => {

                    event.preventDefault();
                    event.stopPropagation();

                    closeMemory();
                }
            );
        }


        /* -----------------------------------------------------
           CLICK LIGHTBOX BACKGROUND
        ----------------------------------------------------- */

        lightbox.addEventListener(
            "click",
            (event) => {

                if (
                    event.target ===
                    lightbox
                ) {

                    closeMemory();
                }
            }
        );


        /* -----------------------------------------------------
           CLICK LARGE IMAGE -> ZOOM
        ----------------------------------------------------- */

        if (lightboxImage) {

            lightboxImage.addEventListener(
                "click",
                (event) => {

                    event.preventDefault();
                    event.stopPropagation();


                    memoryZoomed =
                        !memoryZoomed;


                    lightboxImage.classList.toggle(
                        "zoomed",
                        memoryZoomed
                    );
                }
            );


            /* -------------------------------------------------
               WHEEL -> ZOOM
            ------------------------------------------------- */

            lightboxImage.addEventListener(
                "wheel",
                (event) => {

                    event.preventDefault();
                    event.stopPropagation();


                    memoryZoomed =
                        event.deltaY < 0;


                    lightboxImage.classList.toggle(
                        "zoomed",
                        memoryZoomed
                    );
                },
                {
                    passive: false
                }
            );
        }


        /* -----------------------------------------------------
           MEMORY INITIALIZATION
        ----------------------------------------------------- */

        function initializeMemoryArchive() {

            calculateLoopWidth();
        }


        window.addEventListener(
            "load",
            initializeMemoryArchive
        );


        window.addEventListener(
            "resize",
            initializeMemoryArchive
        );


        requestAnimationFrame(
            initializeMemoryArchive
        );


        requestAnimationFrame(
            (timestamp) => {

                lastTime =
                    timestamp;

                requestAnimationFrame(
                    animateMemory
                );
            }
        );
    }


    /* =========================================================
       GLOBAL ESC KEY
    ========================================================= */

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key !== "Escape"
            ) {
                return;
            }


            const memoryLightbox =
                document.querySelector(
                    ".gallery-lightbox"
                );


            /*
             * Close memory first.
             */

            if (
                memoryLightbox &&
                memoryLightbox.classList.contains(
                    "active"
                )
            ) {

                memoryLightbox.classList.remove(
                    "active"
                );

                document.body.style.overflow =
                    "";

                return;
            }


            /*
             * Otherwise close dossier.
             */

            if (
                overlay.classList.contains(
                    "active"
                )
            ) {

                closeDossier();
            }
        }
    );


    /* =========================================================
       CLEANUP ON PAGE HIDE
    ========================================================= */

    document.addEventListener(
        "visibilitychange",
        () => {

            if (
                document.hidden &&
                audio
            ) {

                audio.pause();
            }
        }
    );

});