// ========================================
// AVATAR GAME
// POLISHED 2.5D AVATAR ENGINE
// ========================================


// ========================================
// CURRENT SELECTION
// ========================================

const selected = {
    body: { type: 0, variant: 0 },
    face: { type: 0, variant: 0 },
    hair: { type: 0, variant: 0 },
    eyes: { type: 0, variant: 0 },
    mouth: { type: 0, variant: 0 },
    tops: { type: 0, variant: 0 },
    bottoms: { type: 0, variant: 0 },
    shoes: { type: 0, variant: 0 },
    accessories: { type: 0, variant: 0 }
};


// ========================================
// CUSTOMIZATION DATA
// ========================================

const options = {

    body: [
        {
            name: "Skin Tone",
            variants: [
                { name: "Light", color: "#FFD9B8" },
                { name: "Classic", color: "#F2C6A0" },
                { name: "Warm", color: "#DFA77D" },
                { name: "Deep", color: "#A96F4F" }
            ]
        }
    ],

    face: [
        {
            name: "Face Shape",
            variants: [
                { name: "Round", shape: "round" },
                { name: "Soft", shape: "soft" },
                { name: "Wide", shape: "wide" }
            ]
        }
    ],

    hair: [
        {
            name: "Hairstyle",
            variants: [
                {
                    name: "Messy",
                    style: "messy",
                    color: "#2C211C"
                },
                {
                    name: "Short",
                    style: "short",
                    color: "#4A2F20"
                },
                {
                    name: "Fluffy",
                    style: "fluffy",
                    color: "#171717"
                },
                {
                    name: "Blonde",
                    style: "short",
                    color: "#D6A84F"
                }
            ]
        }
    ],

    eyes: [
        {
            name: "Eye Style",
            variants: [
                { name: "Normal", style: "normal" },
                { name: "Happy", style: "happy" },
                { name: "Sleepy", style: "sleepy" },
                { name: "Big", style: "big" }
            ]
        }
    ],

    mouth: [
        {
            name: "Mouth Style",
            variants: [
                { name: "Smile", style: "smile" },
                { name: "Small", style: "small" },
                { name: "Open", style: "open" },
                { name: "Neutral", style: "neutral" }
            ]
        }
    ],

    tops: [
        {
            name: "Shirts",
            style: "shirt",
            variants: [
                { name: "White", color: "#F7F7F7" },
                { name: "Black", color: "#292929" },
                { name: "Red", color: "#D95B5B" },
                { name: "Blue", color: "#5278D9" },
                { name: "Green", color: "#65A86B" },
                { name: "Purple", color: "#8B63C7" }
            ]
        },

        {
            name: "Hoodies",
            style: "hoodie",
            variants: [
                { name: "White", color: "#F3F4F5" },
                { name: "Black", color: "#292B30" },
                { name: "Red", color: "#D95454" },
                { name: "Blue", color: "#5278D9" },
                { name: "Green", color: "#5E9B69" },
                { name: "Purple", color: "#8061B8" }
            ]
        },

        {
            name: "Sweaters",
            style: "sweater",
            variants: [
                { name: "Cream", color: "#E8DCC8" },
                { name: "Black", color: "#303238" },
                { name: "Red", color: "#C95050" },
                { name: "Blue", color: "#587BC2" },
                { name: "Green", color: "#63966A" }
            ]
        },

        {
            name: "Jackets",
            style: "jacket",
            variants: [
                { name: "Black", color: "#292D35" },
                { name: "Blue", color: "#476CA8" },
                { name: "Brown", color: "#8B6549" },
                { name: "Red", color: "#A94343" }
            ]
        }
    ],

    bottoms: [
        {
            name: "Jeans",
            style: "pants",
            variants: [
                { name: "Light Blue", color: "#6D91C5" },
                { name: "Blue", color: "#4269A8" },
                { name: "Dark Blue", color: "#283F69" },
                { name: "Black", color: "#30333A" }
            ]
        },

        {
            name: "Shorts",
            style: "shorts",
            variants: [
                { name: "Black", color: "#30333A" },
                { name: "Blue", color: "#4269A8" },
                { name: "Brown", color: "#9A7049" },
                { name: "Green", color: "#638A62" }
            ]
        }
    ],

    shoes: [
        {
            name: "Sneakers",
            style: "sneakers",
            variants: [
                {
                    name: "White",
                    color: "#F4F4F4",
                    accent: "#68748A"
                },
                {
                    name: "Black",
                    color: "#292929",
                    accent: "#555555"
                },
                {
                    name: "Blue",
                    color: "#4E72D4",
                    accent: "#DCE5FF"
                },
                {
                    name: "Red",
                    color: "#C95353",
                    accent: "#FFE0E0"
                }
            ]
        },

        {
            name: "Boots",
            style: "boots",
            variants: [
                {
                    name: "Black",
                    color: "#292929",
                    accent: "#555555"
                },
                {
                    name: "Brown",
                    color: "#704B35",
                    accent: "#B88964"
                }
            ]
        }
    ],

    accessories: [
        {
            name: "None",
            style: "none",
            variants: [
                { name: "None" }
            ]
        },

        {
            name: "Glasses",
            style: "glasses",
            variants: [
                { name: "Black", color: "#292929" },
                { name: "Silver", color: "#9CA2A9" },
                { name: "Blue", color: "#496B91" }
            ]
        },

        {
            name: "Cap",
            style: "cap",
            variants: [
                { name: "Black", color: "#292929" },
                { name: "Blue", color: "#46658F" },
                { name: "Red", color: "#C95353" },
                { name: "Green", color: "#4D6957" }
            ]
        },

                {
            name: "Backward Cap",
            style: "backwardsCap",
            variants: [
                { name: "Black", color: "#292929" },
                { name: "Blue", color: "#46658F" },
                { name: "Red", color: "#C95353" },
                { name: "Green", color: "#4D6957" }
            ]
        },

{
            name: "Beanie",
            style: "beanie",
            variants: [
                { name: "Black", color: "#292929" },
                { name: "Gray", color: "#70747A" },
                { name: "Blue", color: "#506887" },
                { name: "Red", color: "#A94848" }
            ]
        },

        {
            name: "Headphones",
            style: "headphones",
            variants: [
                { name: "Black", color: "#3A3A3A" },
                { name: "White", color: "#D9DCE0" },
                { name: "Blue", color: "#4B6791" },
                { name: "Red", color: "#B94A4A" }
            ]
        }
    ]
};


// ========================================
// DOM
// ========================================

const avatar = document.getElementById("avatar");
const itemsContainer = document.getElementById("items");
const categoryTitle = document.getElementById("category-title");

const categoryButtons =
    document.querySelectorAll(".category-button");

const nameInput =
    document.getElementById("avatar-name");

const randomizeButton =
    document.getElementById("randomize-button");

const saveButton =
    document.getElementById("save-button");

let currentCategory = "body";
let menuLevel = "types";


// ========================================
// COLOR HELPERS
// ========================================

function hexToRgb(hex) {

    hex = hex.replace("#", "");

    if (hex.length === 3) {
        hex =
            hex[0] + hex[0] +
            hex[1] + hex[1] +
            hex[2] + hex[2];
    }

    return {
        r: parseInt(hex.substring(0, 2), 16),
        g: parseInt(hex.substring(2, 4), 16),
        b: parseInt(hex.substring(4, 6), 16)
    };
}


function rgbToHex(r, g, b) {

    const clamp = value =>
        Math.max(0, Math.min(255, Math.round(value)));

    return "#" +
        clamp(r).toString(16).padStart(2, "0") +
        clamp(g).toString(16).padStart(2, "0") +
        clamp(b).toString(16).padStart(2, "0");
}


function shadeColor(hex, amount) {

    const rgb = hexToRgb(hex);

    return rgbToHex(
        rgb.r + amount,
        rgb.g + amount,
        rgb.b + amount
    );
}


// ========================================
// SVG WRAPPER
// ========================================

function svgElement(content) {

    const skinColor = options.body[selected.body.type].variants[selected.body.variant].color;
    const hairColor = options.hair[selected.hair.type].variants[selected.hair.variant].color;
    const topColor = options.tops[selected.tops.type].variants[selected.tops.variant].color;
    const bottomColor = options.bottoms[selected.bottoms.type].variants[selected.bottoms.variant].color;
    const shoeColor = options.shoes[selected.shoes.type].variants[selected.shoes.variant].color;
    const accessoryColor = options.accessories[selected.accessories.type].variants[selected.accessories.variant].color || "#59616E";

    return `
        <svg
            viewBox="0 0 400 600"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Avatar"
        >

            <defs>

                <linearGradient id="skinVolume" x1="0" y1="0" x2="0.9" y2="1">
                    <stop offset="0%" stop-color="${shadeColor(skinColor, 36)}"/>
                    <stop offset="34%" stop-color="${shadeColor(skinColor, 8)}"/>
                    <stop offset="70%" stop-color="${shadeColor(skinColor, -10)}"/>
                    <stop offset="100%" stop-color="${shadeColor(skinColor, -54)}"/>
                </linearGradient>

                <linearGradient id="hairVolume" x1="0" y1="0" x2="0.8" y2="1">
                    <stop offset="0%" stop-color="${shadeColor(hairColor, 58)}"/>
                    <stop offset="32%" stop-color="${shadeColor(hairColor, 24)}"/>
                    <stop offset="68%" stop-color="${hairColor}"/>
                    <stop offset="100%" stop-color="${shadeColor(hairColor, -58)}"/>
                </linearGradient>

                <linearGradient id="clothVolume" x1="0" y1="0" x2="0.8" y2="1">
                    <stop offset="0%" stop-color="${shadeColor(topColor, 48)}"/>
                    <stop offset="34%" stop-color="${shadeColor(topColor, 16)}"/>
                    <stop offset="68%" stop-color="${shadeColor(topColor, -8)}"/>
                    <stop offset="100%" stop-color="${shadeColor(topColor, -54)}"/>
                </linearGradient>

                <linearGradient id="bottomVolume" x1="0" y1="0" x2="0.8" y2="1">
                    <stop offset="0%" stop-color="${shadeColor(bottomColor, 34)}"/>
                    <stop offset="42%" stop-color="${shadeColor(bottomColor, 6)}"/>
                    <stop offset="100%" stop-color="${shadeColor(bottomColor, -50)}"/>
                </linearGradient>

                <linearGradient id="shoeVolume" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="${shadeColor(shoeColor, 38)}"/>
                    <stop offset="58%" stop-color="${shadeColor(shoeColor, 4)}"/>
                    <stop offset="100%" stop-color="${shadeColor(shoeColor, -38)}"/>
                </linearGradient>

                <linearGradient id="accessoryVolume" x1="0" y1="0" x2="0.8" y2="1">
                    <stop offset="0%" stop-color="${shadeColor(accessoryColor, 48)}"/>
                    <stop offset="40%" stop-color="${shadeColor(accessoryColor, 8)}"/>
                    <stop offset="100%" stop-color="${shadeColor(accessoryColor, -42)}"/>
                </linearGradient>

                <linearGradient id="lensVolume" x1="0" y1="0" x2="0.7" y2="1">
                    <stop offset="0%" stop-color="#FFFFFF" stop-opacity=".68"/>
                    <stop offset="45%" stop-color="#CDEBFF" stop-opacity=".20"/>
                    <stop offset="100%" stop-color="#7DAFCB" stop-opacity=".12"/>
                </linearGradient>

                <linearGradient
                    id="skinGradient"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1"
                >
                    <stop
                        offset="0%"
                        stop-color="#fff"
                        stop-opacity="0.32"
                    />

                    <stop
                        offset="45%"
                        stop-color="#fff"
                        stop-opacity="0"
                    />

                    <stop
                        offset="100%"
                        stop-color="#000"
                        stop-opacity="0.16"
                    />
                </linearGradient>

                <linearGradient
                    id="clothLight"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1"
                >
                    <stop
                        offset="0%"
                        stop-color="#fff"
                        stop-opacity="0.30"
                    />

                    <stop
                        offset="48%"
                        stop-color="#fff"
                        stop-opacity="0"
                    />

                    <stop
                        offset="100%"
                        stop-color="#000"
                        stop-opacity="0.18"
                    />
                </linearGradient>

                <linearGradient
                    id="hairLight"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1"
                >
                    <stop
                        offset="0%"
                        stop-color="#fff"
                        stop-opacity="0.18"
                    />

                    <stop
                        offset="55%"
                        stop-color="#fff"
                        stop-opacity="0"
                    />

                    <stop
                        offset="100%"
                        stop-color="#000"
                        stop-opacity="0.24"
                    />
                </linearGradient>

                <radialGradient id="skinSculpt" cx="36%" cy="24%" r="92%"><stop offset="0%" stop-color="${shadeColor(skinColor, 48)}"/><stop offset="34%" stop-color="${shadeColor(skinColor, 24)}"/><stop offset="72%" stop-color="${shadeColor(skinColor, -12)}"/><stop offset="100%" stop-color="${shadeColor(skinColor, -62)}"/></radialGradient><radialGradient id="hairSculpt" cx="34%" cy="20%" r="95%"><stop offset="0%" stop-color="${shadeColor(hairColor, 76)}"/><stop offset="34%" stop-color="${shadeColor(hairColor, 34)}"/><stop offset="72%" stop-color="${shadeColor(hairColor, -8)}"/><stop offset="100%" stop-color="${shadeColor(hairColor, -72)}"/></radialGradient><radialGradient id="clothSculpt" cx="32%" cy="18%" r="100%"><stop offset="0%" stop-color="${shadeColor(topColor, 64)}"/><stop offset="38%" stop-color="${shadeColor(topColor, 26)}"/><stop offset="76%" stop-color="${shadeColor(topColor, -14)}"/><stop offset="100%" stop-color="${shadeColor(topColor, -66)}"/></radialGradient><radialGradient id="bottomSculpt" cx="34%" cy="18%" r="100%"><stop offset="0%" stop-color="${shadeColor(bottomColor, 52)}"/><stop offset="38%" stop-color="${shadeColor(bottomColor, 20)}"/><stop offset="74%" stop-color="${shadeColor(bottomColor, -12)}"/><stop offset="100%" stop-color="${shadeColor(bottomColor, -64)}"/></radialGradient><radialGradient id="shoeSculpt" cx="34%" cy="18%" r="100%"><stop offset="0%" stop-color="${shadeColor(shoeColor, 54)}"/><stop offset="42%" stop-color="${shadeColor(shoeColor, 18)}"/><stop offset="100%" stop-color="${shadeColor(shoeColor, -54)}"/></radialGradient><radialGradient id="accessorySculpt" cx="30%" cy="16%" r="100%"><stop offset="0%" stop-color="${shadeColor(accessoryColor, 64)}"/><stop offset="38%" stop-color="${shadeColor(accessoryColor, 26)}"/><stop offset="76%" stop-color="${shadeColor(accessoryColor, -12)}"/><stop offset="100%" stop-color="${shadeColor(accessoryColor, -66)}"/></radialGradient><filter id="softShadow"
                    x="-50%"
                    y="-50%"
                    width="200%"
                    height="200%"
                >
                    <feGaussianBlur
                        stdDeviation="7"
                    />
                </filter>

                <filter
                    id="smallShadow"
                    x="-50%"
                    y="-50%"
                    width="200%"
                    height="200%"
                >
                    <feGaussianBlur
                        stdDeviation="3"
                    />
                </filter>

                <filter id="raised" x="-35%" y="-35%" width="170%" height="180%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="2.5" result="surface"/><feSpecularLighting in="surface" surfaceScale="3.5" specularConstant=".18" specularExponent="20" lighting-color="#FFFFFF" result="specular"><feDistantLight azimuth="225" elevation="52"/></feSpecularLighting><feComposite in="specular" in2="SourceAlpha" operator="in" result="surfaceHighlight"/><feDropShadow in="SourceAlpha" dx="0" dy="4" stdDeviation="4" flood-color="#243447" flood-opacity=".20" result="softShadow"/><feMerge><feMergeNode in="softShadow"/><feMergeNode in="SourceGraphic"/><feMergeNode in="surfaceHighlight"/></feMerge>
                </filter>

            </defs>

            ${content}

        </svg>
    `;
}


// ========================================
// MAIN AVATAR
// ========================================

function drawAvatar() {

    const bodyType =
        options.body[selected.body.type];

    const body =
        bodyType.variants[selected.body.variant];

    const faceType =
        options.face[selected.face.type];

    const face =
        faceType.variants[selected.face.variant];

    const hairType =
        options.hair[selected.hair.type];

    const hair =
        hairType.variants[selected.hair.variant];

    const eyes =
        options.eyes[selected.eyes.type]
            .variants[selected.eyes.variant];

    const mouth =
        options.mouth[selected.mouth.type]
            .variants[selected.mouth.variant];

    const topType =
        options.tops[selected.tops.type];

    const top =
        topType.variants[selected.tops.variant];

    const bottomType =
        options.bottoms[selected.bottoms.type];

    const bottom =
        bottomType.variants[selected.bottoms.variant];

    const shoeType =
        options.shoes[selected.shoes.type];

    const shoes =
        shoeType.variants[selected.shoes.variant];

    const accessoryType =
        options.accessories[selected.accessories.type];

    const accessory =
        accessoryType.variants[
            selected.accessories.variant
        ];


    const skinDark =
        shadeColor(body.color, -24);


    avatar.innerHTML = svgElement(`

        <!-- GROUND SHADOW -->

        <ellipse
            cx="200"
            cy="563"
            rx="105"
            ry="17"
            fill="#54788C"
            opacity="0.18"
            filter="url(#softShadow)"
        />

        <ellipse
            cx="200"
            cy="557"
            rx="82"
            ry="10"
            fill="#5E8090"
            opacity="0.12"
        />


        <!-- BACK HAIR -->

        <g filter="url(#raised)">${drawBackHair(hair)}</g>


        <!-- LEGS -->

        <g filter="url(#raised)">${drawLegs(body.color)}</g>


        <!-- SHOES -->

        <g filter="url(#raised)">${drawShoes(shoes, shoeType.style)}</g>


        <!-- BOTTOMS -->

        <g filter="url(#raised)">${drawBottoms(bottom, bottomType.style)}</g>


        <!-- TORSO -->

        <g filter="url(#raised)">${drawTop(top, topType.style)}</g>


        <!-- ARMS -->

        <g filter="url(#raised)">${drawArms(body.color, top, topType.style)}</g>


        <!-- HANDS -->

        <g filter="url(#raised)">${drawHands(body.color)}</g>


        <!-- NECK -->

        <path
            d="
                M176 276
                Q200 288 224 276
                L225 325
                Q200 340 175 325 Z
            "
            fill="url(#skinSculpt)"
            stroke="${skinDark}"
            stroke-width="3"
        />

        <path
            d="
                M181 290
                Q200 300 219 290
                L219 320
                Q200 329 181 320 Z
            "
            fill="url(#skinGradient)"
        />


        <!-- EARS -->

        <g filter="url(#raised)">${drawEars(body.color)}</g>


        <!-- FACE -->

        ${drawFace(face, body.color)}


        <!-- FACE LIGHT -->

        <ellipse
            cx="183"
            cy="205"
            rx="48"
            ry="65"
            fill="#fff"
            opacity="0.12"
        />


        <!-- NOSE -->

        <path
            d="
                M199 224
                Q193 244 198 247
                Q204 250 209 246
            "
            fill="none"
            stroke="${shadeColor(body.color, -42)}"
            stroke-width="3"
            stroke-linecap="round"
            opacity="0.65"
        />


        <!-- CHEEKS -->

        <ellipse
            cx="151"
            cy="251"
            rx="15"
            ry="7"
            fill="#E88D87"
            opacity="0.14"
        />

        <ellipse
            cx="249"
            cy="251"
            rx="15"
            ry="7"
            fill="#E88D87"
            opacity="0.14"
        />


        <!-- EYEBROWS -->

        ${drawBrows(eyes)}


        <!-- EYES -->

        ${drawEyes(eyes)}


        <!-- MOUTH -->

        ${drawMouth(mouth)}


        <!-- FRONT HAIR -->

        <g filter="url(#raised)">${drawFrontHair(hair)}</g>


        <!-- ACCESSORY -->

        ${drawAccessory(
            accessory,
            accessoryType.style
        )}

    `);

    const svg = avatar.querySelector("svg");

    svg.style.width = "100%";
    svg.style.height = "100%";
}


// ========================================
// LEGS
// ========================================

function drawLegs(skin) {

    const dark = shadeColor(skin, -28);

    return `
        <path
            d="
                M143 425
                Q160 417 183 427
                L183 507
                Q166 518 145 507
                Z
            "
            fill="url(#skinSculpt)"
            stroke="${dark}"
            stroke-width="4"
        />

        <path
            d="
                M217 427
                Q240 417 257 425
                L255 507
                Q234 518 217 507
                Z
            "
            fill="url(#skinSculpt)"
            stroke="${dark}"
            stroke-width="4"
        />

        <path
            d="
                M153 438
                Q166 430 178 437
                L178 493
                Q166 500 153 493 Z
            "
            fill="url(#skinGradient)"
            opacity="0.7"
        />

        <path
            d="
                M222 437
                Q235 430 248 438
                L247 493
                Q235 500 222 493 Z
            "
            fill="url(#skinGradient)"
            opacity="0.7"
        />
    `;
}


// ========================================
// ARMS
// ========================================

function drawArms(skin, top, style) {

    const dark = shadeColor(skin, -30);

    if (style === "hoodie" || style === "sweater" || style === "jacket") {

        return `
            <path
                d="
                    M145 315
                    Q122 318 112 345
                    L102 412
                    Q102 432 118 437
                    Q135 440 141 421
                    L154 360 Z
                "
                fill="url(#clothSculpt)"
                stroke="#34363B"
                stroke-width="4"
            />

            <path
                d="
                    M255 315
                    Q278 318 288 345
                    L298 412
                    Q298 432 282 437
                    Q265 440 259 421
                    L246 360 Z
                "
                fill="url(#clothSculpt)"
                stroke="#34363B"
                stroke-width="4"
            />

            <path
                d="
                    M105 408
                    Q120 420 139 414
                    L136 435
                    Q119 444 105 432 Z
                "
                fill="${shadeColor(top.color, -25)}"
            />

            <path
                d="
                    M295 408
                    Q280 420 261 414
                    L264 435
                    Q281 444 295 432 Z
                "
                fill="${shadeColor(top.color, -25)}"
            />
        `;
    }

    return `
        <path
            d="
                M148 313
                Q126 319 116 344
                L106 410
                Q104 429 119 435
                Q135 439 141 420
                L155 352 Z
            "
            fill="url(#skinSculpt)"
            stroke="${dark}"
            stroke-width="4"
        />

        <path
            d="
                M252 313
                Q274 319 284 344
                L294 410
                Q296 429 281 435
                Q265 439 259 420
                L245 352 Z
            "
            fill="url(#skinSculpt)"
            stroke="${dark}"
            stroke-width="4"
        />

        <path
            d="
                M113 348
                Q126 330 141 329
                L134 410
                Q129 420 116 414 Z
            "
            fill="url(#skinGradient)"
        />

        <path
            d="
                M287 348
                Q274 330 259 329
                L266 410
                Q271 420 284 414 Z
            "
            fill="url(#skinGradient)"
        />

        ${style === "shirt" ? `
            <path d="M148 313 Q126 319 116 344 L113 365 Q126 371 143 365 L155 352 Z" fill="url(#clothSculpt)" stroke="${shadeColor(top.color, -25)}" stroke-width="4"/>
            <path d="M252 313 Q274 319 284 344 L287 365 Q274 371 257 365 L245 352 Z" fill="url(#clothSculpt)" stroke="${shadeColor(top.color, -25)}" stroke-width="4"/>
        ` : ""}
    `;
}


// ========================================
// HANDS
// ========================================

function drawHands(skin) {

    const dark = shadeColor(skin, -25);

    return `
        <ellipse
            cx="119"
            cy="427"
            rx="16"
            ry="18"
            fill="url(#skinSculpt)"
            stroke="${dark}"
            stroke-width="3"
        />

        <ellipse
            cx="281"
            cy="427"
            rx="16"
            ry="18"
            fill="url(#skinSculpt)"
            stroke="${dark}"
            stroke-width="3"
        />

        <path
            d="M111 424 Q119 431 127 424"
            fill="none"
            stroke="${dark}"
            stroke-width="2"
            opacity="0.5"
        />

        <path
            d="M273 424 Q281 431 289 424"
            fill="none"
            stroke="${dark}"
            stroke-width="2"
            opacity="0.5"
        />
    `;
}


// ========================================
// EARS
// ========================================

function drawEars(skin) {

    const dark = shadeColor(skin, -30);

    return `
        <ellipse
            cx="126"
            cy="230"
            rx="16"
            ry="24"
            fill="url(#skinSculpt)"
            stroke="${dark}"
            stroke-width="4"
        />

        <ellipse
            cx="274"
            cy="230"
            rx="16"
            ry="24"
            fill="url(#skinSculpt)"
            stroke="${dark}"
            stroke-width="4"
        />

        <path
            d="
                M124 222
                Q115 230 125 238
            "
            fill="none"
            stroke="${dark}"
            stroke-width="3"
            opacity="0.6"
        />

        <path
            d="
                M276 222
                Q285 230 275 238
            "
            fill="none"
            stroke="${dark}"
            stroke-width="3"
            opacity="0.6"
        />
    `;
}


// ========================================
// FACE
// ========================================

function drawFace(face, skin) {

    let width = 150;
    let height = 155;

    if (face.shape === "soft") {
        width = 145;
        height = 160;
    }

    if (face.shape === "wide") {
        width = 166;
        height = 148;
    }

    const dark = shadeColor(skin, -30);

    return `
        <ellipse
            cx="200"
            cy="230"
            rx="${width / 2}"
            ry="${height / 2}"
            fill="url(#skinSculpt)"
            stroke="${dark}"
            stroke-width="4"
            filter="url(#raised)"
        />

        <ellipse
            cx="200"
            cy="230"
            rx="${width / 2 - 5}"
            ry="${height / 2 - 5}"
            fill="url(#skinGradient)"
        />
    `;
}


// ========================================
// BROWS
// ========================================

function drawBrows(eyes) {

    if (eyes.style === "sleepy") {

        return `
            <path
                d="M154 201 Q170 194 185 201"
                fill="none"
                stroke="#51352C"
                stroke-width="6"
                stroke-linecap="round"
            />

            <path
                d="M215 201 Q230 194 246 201"
                fill="none"
                stroke="#51352C"
                stroke-width="6"
                stroke-linecap="round"
            />
        `;
    }

    return `
        <path
            d="M154 198 Q170 190 185 197"
            fill="none"
            stroke="#51352C"
            stroke-width="6"
            stroke-linecap="round"
        />

        <path
            d="M215 197 Q230 190 246 198"
            fill="none"
            stroke="#51352C"
            stroke-width="6"
            stroke-linecap="round"
        />
    `;
}


// ========================================
// HAIR BACK
// ========================================

function drawBackHair(hair) {

    const dark = shadeColor(hair.color, -35);

    if (hair.style === "messy") {

        return `
            <path
                d="
                    M120 235
                    Q101 178 120 137
                    Q130 103 159 91
                    Q177 69 199 91
                    Q223 65 248 91
                    Q286 91 298 130
                    Q315 177 291 235
                    L273 270
                    L127 270 Z
                "
                fill="url(#hairSculpt)"
                stroke="${dark}"
                stroke-width="6"
                stroke-linejoin="round"
            />

            <path
                d="
                    M135 151
                    Q157 103 191 106
                    Q170 127 163 164
                "
                fill="url(#hairLight)"
            />

            <path
                d="
                    M238 103
                    Q276 110 286 152
                    Q268 130 249 126
                "
                fill="#fff"
                opacity="0.08"
            />
        `;
    }


    if (hair.style === "fluffy") {

        return `
            <path
                d="
                    M112 239
                    Q91 187 113 139
                    Q125 93 164 91
                    Q190 66 215 91
                    Q248 69 274 98
                    Q309 109 302 153
                    Q319 198 288 250
                    L119 263 Z
                "
                fill="url(#hairSculpt)"
                stroke="${dark}"
                stroke-width="6"
            />

            <path
                d="
                    M124 150
                    Q143 105 181 103
                    Q154 128 149 168
                "
                fill="url(#hairLight)"
            />

            <path
                d="
                    M250 105
                    Q282 117 290 151
                "
                fill="#fff"
                opacity="0.08"
            />
        `;
    }


    return `
        <path
            d="
                M120 230
                Q112 143 151 112
                Q175 91 201 94
                Q238 91 265 115
                Q290 145 280 230
                L267 264
                L133 264 Z
            "
            fill="url(#hairSculpt)"
            stroke="${dark}"
            stroke-width="6"
        />

        <path
            d="
                M139 155
                Q155 117 195 108
                Q169 130 163 163
            "
            fill="url(#hairLight)"
        />
    `;
}


// ========================================
// HAIR FRONT
// ========================================

function drawFrontHair(hair) {

    const dark = shadeColor(hair.color, -30);

    if (hair.style === "messy") {

        return `
            <path
                d="
                    M126 180
                    Q137 119 192 119
                    Q220 101 251 126
                    Q271 139 278 178

                    Q258 166 240 181
                    Q224 148 203 181
                    Q188 143 166 182
                    Q147 162 126 180 Z
                "
                fill="url(#hairSculpt)"
                stroke="${dark}"
                stroke-width="4"
                stroke-linejoin="round"
            />

            <path
                d="
                    M145 153
                    Q165 128 190 126
                "
                fill="none"
                stroke="#fff"
                stroke-width="6"
                opacity="0.11"
                stroke-linecap="round"
            />
        `;
    }


    if (hair.style === "fluffy") {

        return `
            <path
                d="
                    M119 177
                    Q133 111 190 117
                    Q215 95 244 120
                    Q268 132 281 176

                    Q258 151 238 170
                    Q217 132 195 170
                    Q176 133 151 170
                    Q135 150 119 177 Z
                "
                fill="url(#hairSculpt)"
                stroke="${dark}"
                stroke-width="4"
            />

            <path
                d="
                    M139 146
                    Q164 118 190 121
                "
                fill="none"
                stroke="#fff"
                stroke-width="7"
                opacity="0.1"
                stroke-linecap="round"
            />
        `;
    }


    return `
        <path
            d="
                M126 177
                Q139 119 194 118
                Q222 108 249 126
                Q269 139 276 177

                Q250 152 224 169
                Q204 144 182 169
                Q157 149 126 177 Z
            "
            fill="url(#hairSculpt)"
            stroke="${dark}"
            stroke-width="4"
        />

        <path
            d="
                M145 150
                Q164 125 191 123
            "
            fill="none"
            stroke="#fff"
            stroke-width="6"
            opacity="0.1"
            stroke-linecap="round"
        />
    `;
}


// ========================================
// EYES
// ========================================

function drawEyes(eyes) {

    if (eyes.style === "happy") {

        return `
            <path
                d="M154 225 Q169 208 185 225"
                fill="none"
                stroke="#302B2A"
                stroke-width="8"
                stroke-linecap="round"
            />

            <path
                d="M215 225 Q231 208 246 225"
                fill="none"
                stroke="#302B2A"
                stroke-width="8"
                stroke-linecap="round"
            />
        `;
    }


    if (eyes.style === "sleepy") {

        return `
            <path
                d="M154 225 Q170 235 185 225"
                fill="none"
                stroke="#302B2A"
                stroke-width="8"
                stroke-linecap="round"
            />

            <path
                d="M215 225 Q230 235 246 225"
                fill="none"
                stroke="#302B2A"
                stroke-width="8"
                stroke-linecap="round"
            />
        `;
    }


    if (eyes.style === "big") {

        return `
            <ellipse
                cx="169"
                cy="225"
                rx="19"
                ry="22"
                fill="#302B2A"
            />

            <ellipse
                cx="231"
                cy="225"
                rx="19"
                ry="22"
                fill="#302B2A"
            />

            <ellipse
                cx="169"
                cy="230"
                rx="11"
                ry="14"
                fill="#111"
            />

            <ellipse
                cx="231"
                cy="230"
                rx="11"
                ry="14"
                fill="#111"
            />

            <circle
                cx="163"
                cy="217"
                r="6"
                fill="white"
            />

            <circle
                cx="225"
                cy="217"
                r="6"
                fill="white"
            />

            <circle
                cx="176"
                cy="232"
                r="3"
                fill="white"
                opacity="0.7"
            />

            <circle
                cx="238"
                cy="232"
                r="3"
                fill="white"
                opacity="0.7"
            />
        `;
    }


    return `
        <ellipse
            cx="170"
            cy="225"
            rx="13"
            ry="18"
            fill="#302B2A"
        />

        <ellipse
            cx="230"
            cy="225"
            rx="13"
            ry="18"
            fill="#302B2A"
        />

        <ellipse
            cx="170"
            cy="228"
            rx="7"
            ry="11"
            fill="#111"
        />

        <ellipse
            cx="230"
            cy="228"
            rx="7"
            ry="11"
            fill="#111"
        />

        <circle
            cx="166"
            cy="219"
            r="4.5"
            fill="white"
        />

        <circle
            cx="226"
            cy="219"
            r="4.5"
            fill="white"
        />
    `;
}


// ========================================
// MOUTH
// ========================================

function drawMouth(mouth) {

    if (mouth.style === "smile") {

        return `
            <path
                d="M173 260 Q200 284 227 260"
                fill="none"
                stroke="#633E3A"
                stroke-width="6"
                stroke-linecap="round"
            />

            <path
                d="M181 267 Q200 276 219 267"
                fill="none"
                stroke="#fff"
                stroke-width="3"
                opacity="0.45"
                stroke-linecap="round"
            />
        `;
    }


    if (mouth.style === "open") {

        return `
            <ellipse
                cx="200"
                cy="263"
                rx="17"
                ry="13"
                fill="#633E3A"
            />

            <path
                d="M188 258 Q200 253 212 258"
                fill="none"
                stroke="#F5B8B4"
                stroke-width="3"
                opacity="0.7"
            />
        `;
    }


    if (mouth.style === "neutral") {

        return `
            <line
                x1="184"
                y1="263"
                x2="216"
                y2="263"
                stroke="#633E3A"
                stroke-width="5"
                stroke-linecap="round"
            />
        `;
    }


    return `
        <path
            d="M190 263 Q200 269 210 263"
            fill="none"
            stroke="#633E3A"
            stroke-width="5"
            stroke-linecap="round"
        />
    `;
}


// ========================================
// TOPS
// ========================================

function drawTop(top, style) {

    const dark = shadeColor(top.color, -35);

    if (style === "hoodie") {

        return `
            <path
                d="
                    M145 310
                    Q160 294 180 288
                    L200 315
                    L220 288
                    Q240 294 255 310
                    L282 336
                    L263 454
                    L137 454
                    L118 336 Z
                "
                fill="url(#clothSculpt)"
                stroke="${dark}"
                stroke-width="6"
                stroke-linejoin="round"
            />

            <path
                d="
                    M165 299
                    Q200 329 235 299
                    L228 333
                    Q200 347 172 333 Z
                "
                fill="${shadeColor(top.color, -20)}"
                opacity="0.9"
            />

            <path
                d="
                    M165 299 Q200 334 235 299
                "
                fill="none"
                stroke="#fff"
                stroke-width="5"
                opacity="0.18"
            />

            <path
                d="
                    M180 352
                    L180 424
                "
                stroke="#000"
                stroke-width="4"
                opacity="0.12"
                stroke-linecap="round"
            />

            <path
                d="
                    M220 352
                    L220 424
                "
                stroke="#000"
                stroke-width="4"
                opacity="0.12"
                stroke-linecap="round"
            />

            <path
                d="
                    M141 348
                    Q157 331 169 328
                    L161 442
                    L141 442 Z
                "
                fill="url(#clothLight)"
            />
        `;
    }


    if (style === "sweater") {

        return `
            <path
                d="
                    M146 308
                    L116 338
                    L137 454
                    L263 454
                    L284 338
                    L254 308
                    L225 298
                    L200 324
                    L175 298 Z
                "
                fill="url(#clothSculpt)"
                stroke="${dark}"
                stroke-width="6"
                stroke-linejoin="round"
            />

            <path
                d="
                    M143 331
                    Q200 353 257 331
                "
                fill="none"
                stroke="#fff"
                stroke-width="5"
                opacity="0.14"
            />

            <path
                d="
                    M150 355
                    Q169 343 178 344
                    L170 442
                    L144 438 Z
                "
                fill="url(#clothLight)"
            />

            <path
                d="
                    M250 355
                    Q231 343 222 344
                    L230 442
                    L256 438 Z
                "
                fill="#000"
                opacity="0.08"
            />
        `;
    }


    if (style === "jacket") {

        return `
            <path
                d="
                    M146 308
                    L116 338
                    L137 454
                    L263 454
                    L284 338
                    L254 308
                    L225 298
                    L200 324
                    L175 298 Z
                "
                fill="url(#clothSculpt)"
                stroke="${dark}"
                stroke-width="6"
                stroke-linejoin="round"
            />

            <path
                d="
                    M200 324
                    L200 450
                "
                stroke="#111"
                stroke-width="5"
                opacity="0.28"
            />

            <path
                d="
                    M201 325
                    L201 450
                "
                stroke="#fff"
                stroke-width="2"
                opacity="0.18"
            />

            <path
                d="
                    M145 332
                    Q163 321 177 315
                    L170 442
                    L143 438 Z
                "
                fill="url(#clothLight)"
            />
        `;
    }


    return `
        <path
            d="
                M150 309
                L120 335
                L140 454
                L260 454
                L280 335
                L250 309
                L225 299
                L200 324
                L175 299 Z
            "
            fill="url(#clothSculpt)"
            stroke="${dark}"
            stroke-width="6"
            stroke-linejoin="round"
        />

        <path
            d="
                M144 338
                Q158 322 173 318
                L166 442
                L143 438 Z
            "
            fill="url(#clothLight)"
        />

        <path
            d="
                M175 337
                Q200 348 225 337
            "
            fill="none"
            stroke="#fff"
            stroke-width="4"
            opacity="0.13"
        />
    `;
}


// ========================================
// BOTTOMS
// ========================================

function drawBottoms(bottom, style) {

    const dark = shadeColor(bottom.color, -35);

    if (style === "shorts") {

        return `
            <path
                d="
                    M140 423
                    L260 423
                    L256 460
                    L215 460
                    L200 451
                    L185 460
                    L144 460 Z
                "
                fill="url(#bottomSculpt)"
                stroke="${dark}"
                stroke-width="6"
            />

            <path
                d="
                    M146 431
                    Q165 440 184 436
                    L178 452
                    L150 452 Z
                "
                fill="url(#clothLight)"
            />

            <path
                d="
                    M214 436
                    Q235 440 253 431
                    L250 452
                    L221 452 Z
                "
                fill="#000"
                opacity="0.09"
            />

            <line
                x1="200"
                y1="432"
                x2="200"
                y2="448"
                stroke="#000"
                stroke-width="3"
                opacity="0.2"
            />
        `;
    }


    return `
        <path
            d="
                M140 419
                L260 419
                L258 505
                L215 505
                L200 450
                L185 505
                L142 505 Z
            "
            fill="url(#bottomSculpt)"
            stroke="${dark}"
            stroke-width="6"
        />

        <path
            d="
                M147 429
                Q166 438 184 433
                L178 496
                L150 496 Z
            "
            fill="url(#clothLight)"
        />

        <path
            d="
                M215 433
                Q235 438 253 429
                L249 496
                L220 496 Z
            "
            fill="#000"
            opacity="0.1"
        />

        <line
            x1="200"
            y1="425"
            x2="200"
            y2="449"
            stroke="#000"
            stroke-width="3"
            opacity="0.2"
        />
    `;
}


// ========================================
// SHOES
// ========================================

function drawShoes(shoes, style) {

    const dark = shadeColor(shoes.color, -40);

    if (style === "boots") {

        return `
            <path
                d="
                    M145 483
                    Q164 480 180 487
                    L178 507 Q176 515 167 517
                    L128 517
                    Q120 515 122 507 Q129 491 145 483 Z
                "
                fill="url(#shoeSculpt)"
                stroke="${dark}"
                stroke-width="6"
            />

            <path
                d="
                    M220 487
                    Q236 480 255 483
                    Q271 491 278 507 Q280 515 272 517
                    L233 517 Z
                "
                fill="url(#shoeSculpt)"
                stroke="${dark}"
                stroke-width="6"
            />

            <path
                d="
                    M130 493
                    L178 493
                    L173 503
                    L130 503 Z
                "
                fill="url(#clothLight)"
                opacity="0.8"
            />

            <path
                d="
                    M222 493
                    L270 493
                    L268 503
                    L227 503 Z
                "
                fill="url(#clothLight)"
                opacity="0.8"
            />

            <line
                x1="125"
                y1="514"
                x2="180"
                y2="514"
                stroke="${shoes.accent}"
                stroke-width="6"
                stroke-linecap="round"
            />

            <line
                x1="220"
                y1="514"
                x2="275"
                y2="514"
                stroke="${shoes.accent}"
                stroke-width="6"
                stroke-linecap="round"
            />
        `;
    }


    return `
        <path
            d="
                M132 494
                Q154 483 185 499
                L185 530
                L120 530
                Q113 510 132 494 Z
            "
            fill="url(#shoeSculpt)"
            stroke="${dark}"
            stroke-width="6"
        />

        <path
            d="
                M215 499
                Q246 483 268 494
                Q287 510 280 530
                L215 530 Z
            "
            fill="url(#shoeSculpt)"
            stroke="${dark}"
            stroke-width="6"
        />

        <path
            d="
                M128 501
                Q151 491 179 505
                L179 515
                L128 515 Z
            "
            fill="#fff"
            opacity="0.18"
        />

        <path
            d="
                M221 505
                Q249 491 272 501
                L272 515
                L221 515 Z
            "
            fill="#000"
            opacity="0.08"
        />

        <path
            d="M130 517 L178 517"
            stroke="${shoes.accent}"
            stroke-width="7"
            stroke-linecap="round"
        />

        <path
            d="M222 517 L270 517"
            stroke="${shoes.accent}"
            stroke-width="7"
            stroke-linecap="round"
        />

        <path
            d="M122 528 L182 528"
            stroke="#fff"
            stroke-width="4"
            opacity="0.65"
            stroke-linecap="round"
        />

        <path
            d="M218 528 L278 528"
            stroke="#fff"
            stroke-width="4"
            opacity="0.65"
            stroke-linecap="round"
        />
    `;
}


// ========================================
// ACCESSORIES
// ========================================

function drawAccessory(accessory, style) {

    const color = accessory.color || "#4A5360";
    const dark = shadeColor(color, -34);
    const light = shadeColor(color, 30);

    if (style === "glasses") {
        return `
            <g filter="url(#raised)">
                <path d="M151 216 Q140 211 130 218 L126 222" fill="none" stroke="${dark}" stroke-width="5" stroke-linecap="round"/>
                <path d="M249 216 Q260 211 270 218 L274 222" fill="none" stroke="${dark}" stroke-width="5" stroke-linecap="round"/>
                <path d="M151 211 Q151 205 158 205 L181 205 Q189 205 189 213 L186 231 Q185 239 177 240 L164 240 Q155 239 154 231 Z" fill="url(#lensVolume)" stroke="${dark}" stroke-width="5" stroke-linejoin="round"/>
                <path d="M211 205 L234 205 Q241 205 241 211 L238 231 Q237 239 229 240 L216 240 Q207 239 206 231 L203 213 Q203 205 211 205 Z" fill="url(#lensVolume)" stroke="${dark}" stroke-width="5" stroke-linejoin="round"/>
                <path d="M189 215 Q199 209 203 215" fill="none" stroke="${dark}" stroke-width="5" stroke-linecap="round"/>
                <path d="M157 211 Q169 207 180 211 M210 211 Q222 207 234 211" fill="none" stroke="${light}" stroke-width="2.5" stroke-linecap="round" opacity=".72"/>
                <path d="M159 219 Q158 226 161 230 M212 219 Q211 226 214 230" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" opacity=".55"/>
                <circle cx="158" cy="213" r="2" fill="${light}"/><circle cx="234" cy="213" r="2" fill="${light}"/>
            </g>
        `;
    }

        if (style === "backwardsCap") {
        return `
            <g filter="url(#raised)">
                <path d="M130 166 C128 146 134 124 148 108 C161 93 180 86 201 86 C224 86 244 98 258 117 C268 132 273 149 270 166 C249 159 226 155 202 155 C176 155 151 159 130 166 Z" fill="url(#accessorySculpt)" stroke="${dark}" stroke-width="4" stroke-linejoin="round"/>
                <path d="M200 90 C200 112 201 132 201 154 M153 107 C165 122 174 138 178 156 M248 111 C235 126 227 140 223 156" fill="none" stroke="${dark}" stroke-width="2" opacity=".58"/>
                <path d="M145 139 C152 119 167 103 186 97" fill="none" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" opacity=".14"/>
                <path d="M132 161 C165 155 198 154 230 157 C247 159 260 162 270 165 L268 170 C245 166 222 165 200 165 C176 165 153 167 134 171 Z" fill="${dark}" stroke="${dark}" stroke-width="2"/>
                <path d="M166 158 C188 155 213 155 236 158 L236 166 C213 163 189 163 166 166 Z" fill="${color}" stroke="${dark}" stroke-width="2" stroke-linejoin="round"/>
                <path d="M190 157 L210 157 L210 165 L190 165 Z" fill="${dark}" stroke="${light}" stroke-width="1.5"/>
                <path d="M194 159 L206 159 L206 163 L194 163 Z" fill="none" stroke="${light}" stroke-width="1" opacity=".8"/>
                <circle cx="201" cy="85" r="4" fill="${light}" stroke="${dark}" stroke-width="1.5"/>
            </g>
        `;
    }


if (style === "cap") {
        return `
            <g filter="url(#raised)">
                <path d="M130 166 C128 146 134 124 148 108 C161 93 180 86 201 86 C224 86 244 98 258 117 C268 132 273 149 270 166 C249 159 226 155 202 155 C176 155 151 159 130 166 Z" fill="url(#accessorySculpt)" stroke="${dark}" stroke-width="5" stroke-linejoin="round"/>
                <path d="M132 157 C162 147 196 144 230 149 C249 151 266 157 276 165 C272 173 259 178 241 178 C209 172 174 171 139 179 C130 176 126 166 132 157 Z" fill="${dark}"/>
                <path d="M132 161 C165 155 198 154 230 157 C247 159 260 162 270 165 L268 170 C245 166 222 165 200 165 C176 165 153 167 134 171 Z" fill="url(#accessorySculpt)" stroke="${dark}" stroke-width="3"/>
                <path d="M200 90 C200 112 201 132 201 154 M153 107 C165 122 174 138 178 156 M248 111 C235 126 227 140 223 156" fill="none" stroke="${dark}" stroke-width="2.5" opacity=".72"/>
                <path d="M145 139 C152 119 167 103 186 97" fill="none" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round" opacity=".18"/>
                <path d="M139 166 C167 158 190 157 211 159" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity=".24"/>
                <circle cx="201" cy="85" r="4" fill="${light}" stroke="${dark}" stroke-width="1.5"/>
            </g>
        `;
    }

    if (style === "beanie") {
        return `
            <g filter="url(#raised)">
                <path d="M130 169 C128 149 132 128 143 111 C156 91 176 80 199 80 C221 80 241 91 255 108 C267 124 273 146 270 167 C249 160 225 156 200 156 C174 156 151 160 130 169 Z" fill="url(#accessorySculpt)" stroke="${dark}" stroke-width="5" stroke-linejoin="round"/>
                <path d="M130 153 C151 149 176 147 200 147 C224 147 248 149 270 153 L271 174 C249 169 225 166 200 166 C175 166 151 169 129 174 Z" fill="${dark}" stroke="${dark}" stroke-width="3"/>
                <path d="M133 155 C155 152 178 150 200 150 C223 150 246 152 267 155" fill="none" stroke="${light}" stroke-width="4" stroke-linecap="round" opacity=".8"/>
                <path d="M146 157 L146 171 M160 154 L160 169 M176 152 L176 167 M200 151 L200 166 M224 152 L224 167 M240 154 L240 169 M254 157 L254 171" fill="none" stroke="${shadeColor(color, -12)}" stroke-width="2" stroke-linecap="round" opacity=".72"/>
                <path d="M149 119 C159 99 177 87 197 86" fill="none" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round" opacity=".19"/>
                <path d="M200 84 C201 105 201 126 200 145" fill="none" stroke="${light}" stroke-width="2" opacity=".42"/>
            </g>
        `;
    }

    if (style === "headphones") {
        return `
            <g filter="url(#raised)">
                <path d="M137 220 C136 151 159 115 200 115 C241 115 264 151 263 220" fill="none" stroke="#17191D" stroke-width="13" stroke-linecap="round"/>
                <path d="M138 219 C138 153 160 120 200 120 C240 120 262 153 262 219" fill="none" stroke="url(#accessorySculpt)" stroke-width="8" stroke-linecap="round"/>
                <path d="M133 220 C136 166 151 131 173 117" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" opacity=".42"/>
                <path d="M138 210 C131 205 122 207 116 214 C110 222 109 238 115 247 C120 254 131 255 139 249 C144 240 144 220 138 210 Z" fill="${dark}" stroke="#17191D" stroke-width="3"/>
                <path d="M262 210 C269 205 278 207 284 214 C290 222 291 238 285 247 C280 254 269 255 261 249 C256 240 256 220 262 210 Z" fill="${dark}" stroke="#17191D" stroke-width="3"/>
                <path d="M136 217 C131 213 125 214 121 219 C117 226 117 237 121 242 C125 247 132 248 137 243 C141 236 141 223 136 217 Z" fill="url(#accessorySculpt)"/>
                <path d="M264 217 C269 213 275 214 279 219 C283 226 283 237 279 242 C275 247 268 248 263 243 C259 236 259 223 264 217 Z" fill="url(#accessorySculpt)"/>
                <path d="M120 218 Q127 214 133 220 M267 220 Q273 214 280 218" fill="none" stroke="${light}" stroke-width="2.5" stroke-linecap="round" opacity=".72"/>
                <circle cx="127" cy="231" r="4" fill="${light}" opacity=".8"/><circle cx="273" cy="231" r="4" fill="${light}" opacity=".8"/>
            </g>
        `;
    }

    return "";
}

// ========================================
// MINI PREVIEWS
// ========================================

function miniPreview(category, type, variant) {

    const color =
        variant.color || "#777";

    const accent =
        variant.accent || shadeColor(color, 35);

    let artwork = "";


    if (category === "body") {

        artwork = `
            <circle
                cx="25"
                cy="25"
                r="17"
                fill="${color}"
                stroke="${shadeColor(color, -30)}"
                stroke-width="2"
            />

            <ellipse
                cx="20"
                cy="18"
                rx="7"
                ry="9"
                fill="#fff"
                opacity="0.14"
            />
        `;
    }


    else if (category === "face") {

        let rx = 16;
        let ry = 17;

        if (variant.shape === "wide") {
            rx = 18;
            ry = 15;
        }

        if (variant.shape === "soft") {
            rx = 15;
            ry = 18;
        }

        artwork = `
            <ellipse
                cx="25"
                cy="25"
                rx="${rx}"
                ry="${ry}"
                fill="#F2C6A0"
                stroke="#9E715C"
                stroke-width="2"
            />
        `;
    }


    else if (category === "hair") {

        artwork = `
            <path
                d="
                    M7 31
                    Q5 9 25 7
                    Q45 9 43 31
                    Q35 25 25 27
                    Q15 25 7 31 Z
                "
                fill="${variant.color}"
                stroke="${shadeColor(
                    variant.color,
                    -30
                )}"
                stroke-width="2"
            />

            <path
                d="M13 17 Q20 10 27 10"
                fill="none"
                stroke="#fff"
                stroke-width="3"
                opacity="0.12"
                stroke-linecap="round"
            />
        `;
    }


    else if (category === "eyes") {

        if (variant.style === "happy") {

            artwork = `
                <path
                    d="M12 26 Q17 19 22 26"
                    fill="none"
                    stroke="#292929"
                    stroke-width="3"
                    stroke-linecap="round"
                />

                <path
                    d="M28 26 Q33 19 38 26"
                    fill="none"
                    stroke="#292929"
                    stroke-width="3"
                    stroke-linecap="round"
                />
            `;
        }

        else if (variant.style === "sleepy") {

            artwork = `
                <path
                    d="M12 25 Q17 29 22 25"
                    fill="none"
                    stroke="#292929"
                    stroke-width="3"
                    stroke-linecap="round"
                />

                <path
                    d="M28 25 Q33 29 38 25"
                    fill="none"
                    stroke="#292929"
                    stroke-width="3"
                    stroke-linecap="round"
                />
            `;
        }

        else {

            const size =
                variant.style === "big" ? 6 : 4;

            artwork = `
                <circle
                    cx="18"
                    cy="25"
                    r="${size}"
                    fill="#292929"
                />

                <circle
                    cx="32"
                    cy="25"
                    r="${size}"
                    fill="#292929"
                />

                <circle
                    cx="17"
                    cy="23"
                    r="1.5"
                    fill="white"
                />

                <circle
                    cx="31"
                    cy="23"
                    r="1.5"
                    fill="white"
                />
            `;
        }
    }


    else if (category === "mouth") {

        if (variant.style === "open") {

            artwork = `
                <ellipse
                    cx="25"
                    cy="27"
                    rx="7"
                    ry="5"
                    fill="#633E3A"
                />
            `;
        }

        else if (variant.style === "neutral") {

            artwork = `
                <line
                    x1="18"
                    y1="27"
                    x2="32"
                    y2="27"
                    stroke="#633E3A"
                    stroke-width="3"
                    stroke-linecap="round"
                />
            `;
        }

        else {

            artwork = `
                <path
                    d="M17 26 Q25 34 33 26"
                    fill="none"
                    stroke="#633E3A"
                    stroke-width="3"
                    stroke-linecap="round"
                />
            `;
        }
    }


    else if (category === "tops") {

        artwork = `
            <path
                d="
                    M17 9
                    L11 14
                    L14 40
                    L36 40
                    L39 14
                    L33 9
                    L25 16
                    Z
                "
                fill="${color}"
                stroke="${shadeColor(color, -35)}"
                stroke-width="2"
            />

            <path
                d="M14 18 Q25 23 36 18"
                fill="none"
                stroke="#fff"
                stroke-width="2"
                opacity="0.16"
            />
        `;
    }


    else if (category === "bottoms") {

        artwork = `
            <path
                d="
                    M11 11
                    L39 11
                    L37 40
                    L28 40
                    L25 24
                    L22 40
                    L13 40 Z
                "
                fill="${color}"
                stroke="${shadeColor(color, -35)}"
                stroke-width="2"
            />
        `;
    }


    else if (category === "shoes") {

        artwork = `
            <path
                d="
                    M6 28
                    Q14 23 22 28
                    L22 37
                    L5 37
                    Q3 32 6 28 Z
                "
                fill="${color}"
                stroke="${shadeColor(color, -35)}"
                stroke-width="2"
            />

            <path
                d="
                    M28 28
                    Q36 23 44 28
                    Q47 32 45 37
                    L28 37 Z
                "
                fill="${color}"
                stroke="${shadeColor(color, -35)}"
                stroke-width="2"
            />

            <line
                x1="8"
                y1="33"
                x2="20"
                y2="33"
                stroke="${accent}"
                stroke-width="2"
                stroke-linecap="round"
            />

            <line
                x1="30"
                y1="33"
                x2="42"
                y2="33"
                stroke="${accent}"
                stroke-width="2"
                stroke-linecap="round"
            />
        `;
    }


    else if (category === "accessories") {

        if (type.style === "glasses") {

            artwork = `
                <rect
                    x="8"
                    y="18"
                    width="15"
                    height="11"
                    rx="4"
                    fill="none"
                    stroke="${color}"
                    stroke-width="2.5"
                />

                <rect
                    x="27"
                    y="18"
                    width="15"
                    height="11"
                    rx="4"
                    fill="none"
                    stroke="${color}"
                    stroke-width="2.5"
                />

                <line
                    x1="23"
                    y1="23"
                    x2="27"
                    y2="23"
                    stroke="${color}"
                    stroke-width="2.5"
                />
            `;
        }

        else if (type.style === "cap") {

            artwork = `
                <path
                    d="
                        M8 22
                        Q11 8 25 8
                        Q39 8 42 22
                        Q25 17 8 22 Z
                    "
                    fill="${color}"
                    stroke="${shadeColor(color, -30)}"
                    stroke-width="2"
                />

                <path
                    d="M25 18 Q37 17 44 23"
                    fill="none"
                    stroke="${shadeColor(color, -30)}"
                    stroke-width="2"
                />
            `;
        }

                else if (type.style === "backwardsCap") {

            artwork = `
                <path d="M8 22 Q11 8 25 8 Q39 8 42 22 Q25 18 8 22 Z" fill="${color}" stroke="${shadeColor(color, -30)}" stroke-width="2"/>
                <path d="M9 20 Q25 16 41 20 L41 25 Q25 21 9 25 Z" fill="${accent}" stroke="${shadeColor(color, -30)}" stroke-width="1.5"/>
                <rect x="22" y="19" width="6" height="4" rx="1" fill="${shadeColor(color, -30)}" stroke="${accent}" stroke-width="1"/>
            `;
        }


else if (type.style === "beanie") {

            artwork = `
                <path
                    d="M8 26 Q8 8 25 7 Q42 8 42 26 L39 29 Q25 25 11 29 Z"
                    fill="${color}"
                    stroke="${shadeColor(color, -30)}"
                    stroke-width="2"
                />
                <path
                    d="M8 24 Q25 21 42 24 L42 30 Q25 27 8 30 Z"
                    fill="${shadeColor(color, -20)}"
                />
            `;
        }

        else if (type.style === "headphones") {

            artwork = `
                <path
                    d="
                        M9 28
                        Q9 8 25 8
                        Q41 8 41 28
                    "
                    fill="none"
                    stroke="${color}"
                    stroke-width="5"
                />

                <rect
                    x="6"
                    y="23"
                    width="7"
                    height="11"
                    rx="3"
                    fill="${color}"
                />

                <rect
                    x="37"
                    y="23"
                    width="7"
                    height="11"
                    rx="3"
                    fill="${color}"
                />
            `;
        }

        else {

            artwork = `
                <text
                    x="25"
                    y="32"
                    text-anchor="middle"
                    font-size="23"
                    fill="#777"
                >—</text>
            `;
        }
    }


    return `
        <svg
            viewBox="0 0 50 50"
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
        >
            ${artwork}
        </svg>
    `;
}


// ========================================
// TYPE MENU
// ========================================

function renderTypeMenu(category) {

    menuLevel = "types";
    currentCategory = category;

    categoryTitle.textContent =
        category.charAt(0).toUpperCase() +
        category.slice(1);

    itemsContainer.innerHTML = "";


    options[category].forEach((type, index) => { if (category === "accessories" && type.style === "backwardsCap") return;

        const button =
            document.createElement("button");

        button.className = "item-button";


        if (
            selected[category].type === index
        ) {
            button.classList.add("selected");
        }


        const previewVariant =
            type.variants[
                selected[category].variant
            ] || type.variants[0];


        button.innerHTML = `
            <div class="item-preview">
                ${miniPreview(
                    category,
                    type,
                    previewVariant
                )}
            </div>

            <span>${type.name}</span>
        `;


        button.addEventListener("click", () => {

            selected[category].type = index; selected[category].variant = 0; drawAvatar(); if (category === "accessories" && type.style === "cap") { renderCapStyleMenu(category, index); return; } renderVariantMenu(category);
        });


        itemsContainer.appendChild(button);
    });
}


// ========================================
// VARIANT MENU
// ========================================

function renderCapStyleMenu(category, capIndex) { menuLevel = "capStyles"; categoryTitle.textContent = "Cap"; itemsContainer.innerHTML = ""; const back = document.createElement("button"); back.className = "item-button"; back.innerHTML = `<div class="item-preview">←</div><span>Back</span>`; back.addEventListener("click", () => renderTypeMenu(category)); itemsContainer.appendChild(back); const capType = options[category][capIndex]; capType.variants.forEach((variant, index) => { const button = document.createElement("button"); button.className = "item-button"; if (selected[category].type === capIndex && selected[category].variant === index) button.classList.add("selected"); button.innerHTML = `<div class="item-preview">${miniPreview(category, capType, variant)}</div><span>${variant.name} Cap</span>`; button.addEventListener("click", () => { selected[category].type = capIndex; selected[category].variant = index; drawAvatar(); renderCapStyleMenu(category, capIndex); }); itemsContainer.appendChild(button); }); const backwardsIndex = options[category].findIndex(item => item.style === "backwardsCap"); const backwardsType = options[category][backwardsIndex]; const backwardsButton = document.createElement("button"); backwardsButton.className = "item-button"; if (selected[category].type === backwardsIndex) backwardsButton.classList.add("selected"); backwardsButton.innerHTML = `<div class="item-preview">${miniPreview(category, backwardsType, backwardsType.variants[0])}</div><span>Backward Cap</span>`; backwardsButton.addEventListener("click", () => { selected[category].type = backwardsIndex; selected[category].variant = 0; drawAvatar(); renderVariantMenu(category); }); itemsContainer.appendChild(backwardsButton); } function renderVariantMenu(category) {

    menuLevel = "variants";

    const type =
        options[category][
            selected[category].type
        ];


    categoryTitle.textContent =
        type.name;


    itemsContainer.innerHTML = "";


    const backButton =
        document.createElement("button");

    backButton.className =
        "item-button";

    backButton.innerHTML = `
        <div class="item-preview">←</div>
        <span>Back</span>
    `;


    backButton.addEventListener(
        "click",
        () => renderTypeMenu(category)
    );


    itemsContainer.appendChild(backButton);


    type.variants.forEach(
        (variant, index) => {

            const button =
                document.createElement("button");

            button.className =
                "item-button";


            if (
                selected[category].variant === index
            ) {
                button.classList.add("selected");
            }


            button.innerHTML = `
                <div class="item-preview">
                    ${miniPreview(
                        category,
                        type,
                        variant
                    )}
                </div>

                <span>${variant.name}</span>
            `;


            button.addEventListener(
                "click",
                () => {

                    selected[category].variant =
                        index;

                    drawAvatar();

                    renderVariantMenu(category);
                }
            );


            itemsContainer.appendChild(button);
        }
    );
}


// ========================================
// CATEGORY BUTTONS
// ========================================

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        categoryButtons.forEach(
            otherButton => {
                otherButton.classList.remove(
                    "active"
                );
            }
        );


        button.classList.add("active");

        currentCategory =
            button.dataset.category;

        renderTypeMenu(currentCategory);
    });
});


// ========================================
// RANDOMIZE
// ========================================

randomizeButton.addEventListener(
    "click",
    () => {

        Object.keys(options).forEach(
            category => {

                selected[category].type =
                    Math.floor(
                        Math.random() *
                        options[category].length
                    );


                const type =
                    options[category][
                        selected[category].type
                    ];


                selected[category].variant =
                    Math.floor(
                        Math.random() *
                        type.variants.length
                    );
            }
        );


        drawAvatar();
        renderTypeMenu(currentCategory);
    }
);


// ========================================
// SAVE AVATAR
// ========================================

saveButton.addEventListener(
    "click",
    () => {

        const svg =
            avatar.querySelector("svg");


        if (!svg) {
            return;
        }


        const serializer =
            new XMLSerializer();


        const svgString =
            serializer.serializeToString(svg);


        const blob =
            new Blob(
                [svgString],
                {
                    type:
                        "image/svg+xml;charset=utf-8"
                }
            );


        const url =
            URL.createObjectURL(blob);


        const link =
            document.createElement("a");


        const avatarName =
            nameInput.value.trim() ||
            "my-avatar";


        link.href = url;

        link.download =
            `${avatarName}.svg`;


        link.click();


        URL.revokeObjectURL(url);
    }
);


// ========================================
// NAME MEMORY
// ========================================

nameInput.value =
    localStorage.getItem(
        "avatarName"
    ) || "";


nameInput.addEventListener(
    "input",
    () => {

        localStorage.setItem(
            "avatarName",
            nameInput.value
        );
    }
);


// ========================================
// START GAME
// ========================================

drawAvatar();
renderTypeMenu("body");var avatarRotation=-12, avatarDrag=null;
function rbxPart(cls,x,y,z,w,h,d,color){const s=n=>shadeColor(color,n);const f=(side,fw,fh,tr,bg=color)=>'<i class="rbx-face '+side+'" style="width:'+fw+'px;height:'+fh+'px;transform:'+tr+';background:'+bg+'"></i>';return '<div class="rbx-part '+cls+'" style="--x:'+x+'px;--y:'+y+'px;--z:'+z+'px;--w:'+w+'px;--h:'+h+'px;--d:'+d+'px">'+f('front',w,h,'translate(-50%,-50%) translateZ('+(d/2)+'px)','linear-gradient(135deg,'+s(22)+','+color+' 52%,'+s(-20)+')')+f('back',w,h,'translate(-50%,-50%) rotateY(180deg) translateZ('+(d/2)+'px)',s(-24))+f('right',d,h,'translate(-50%,-50%) rotateY(90deg) translateZ('+(w/2)+'px)',s(-30))+f('left',d,h,'translate(-50%,-50%) rotateY(-90deg) translateZ('+(w/2)+'px)',s(10))+f('top',w,d,'translate(-50%,-50%) rotateX(90deg) translateZ('+(h/2)+'px)',s(30))+f('bottom',w,d,'translate(-50%,-50%) rotateX(-90deg) translateZ('+(h/2)+'px)',s(-42))+'</div>';}
function drawAvatar(){
 const skin=options.body[selected.body.type].variants[selected.body.variant].color, hair=options.hair[selected.hair.type].variants[selected.hair.variant].color, top=options.tops[selected.tops.type].variants[selected.tops.variant].color, bottom=options.bottoms[selected.bottoms.type].variants[selected.bottoms.variant].color, shoe=options.shoes[selected.shoes.type].variants[selected.shoes.variant].color;
 const acc=options.accessories[selected.accessories.type].variants[selected.accessories.variant], hs=options.hair[selected.hair.type].style, es=options.eyes[selected.eyes.type].variants[selected.eyes.variant].style, ms=options.mouth[selected.mouth.type].variants[selected.mouth.variant].style;
 const eye=es==='happy'?'⌒　⌒':es==='sleepy'?'﹀　﹀':es==='big'?'●　●':'•　•', smile=ms==='neutral'?'—':ms==='open'?'ᴗ':ms==='small'?'﹀':'◡';
 const hairCap=hs==='bald'?'':'<span class="rbx-hair-cap" style="--hair:'+hair+'"></span>', hat=acc.style==='hat'?'<span class="rbx-hat" style="--hat:'+acc.color+'"></span>':'', glasses=acc.style==='glasses'?'<span class="rbx-glasses">◉　◉</span>':'', phones=acc.style==='headphones'?'<span class="rbx-headphones"></span>':'';
 avatar.innerHTML='<div class="rbx-stage"><div class="rbx-ground"></div><div class="rbx-model" style="--rotation:'+avatarRotation+'deg">'+rbxPart('rbx-leg',-22,64,0,30,82,34,bottom)+rbxPart('rbx-leg',22,64,0,30,82,34,bottom)+rbxPart('rbx-shoe',-22,110,3,34,24,48,shoe)+rbxPart('rbx-shoe',22,110,3,34,24,48,shoe)+rbxPart('rbx-torso',0,-38,0,76,82,38,top)+rbxPart('rbx-arm',-52,-39,0,26,78,30,skin)+rbxPart('rbx-arm',52,-39,0,26,78,30,skin)+rbxPart('rbx-hand',-52,8,0,25,24,30,skin)+rbxPart('rbx-hand',52,8,0,25,24,30,skin)+rbxPart('rbx-neck',0,-91,0,25,20,25,skin)+rbxPart('rbx-head rbx-headpart',0,-127,0,68,66,60,skin)+'<div class="rbx-face-decal"><span class="rbx-eyes">'+eye+'</span><span class="rbx-mouth">'+smile+'</span></div>'+hairCap+hat+glasses+phones+'</div><div class="rbx-platform"></div><div class="rbx-label">'+(nameInput.value||'YOUR AVATAR').replace(/[<>]/g,'').slice(0,24)+'</div><div class="rbx-hint">DRAG TO ROTATE</div></div>';
 const model=avatar.querySelector('.rbx-model'); model.addEventListener('pointerdown',e=>{avatarDrag={x:e.clientX,r:avatarRotation};model.setPointerCapture(e.pointerId)});model.addEventListener('pointermove',e=>{if(avatarDrag){avatarRotation=avatarDrag.r+(e.clientX-avatarDrag.x)*.8;model.style.setProperty('--rotation',avatarRotation+'deg')}});model.addEventListener('pointerup',()=>avatarDrag=null);
}
nameInput.addEventListener('input',drawAvatar);
saveButton.addEventListener('click',()=>{const skin=options.body[selected.body.type].variants[selected.body.variant].color, top=options.tops[selected.tops.type].variants[selected.tops.variant].color, bottom=options.bottoms[selected.bottoms.type].variants[selected.bottoms.variant].color, shoe=options.shoes[selected.shoes.type].variants[selected.shoes.variant].color;const svg='<svg xmlns="http://www.w3.org/2000/svg" width="480" height="600" viewBox="0 0 240 300"><rect width="100%" height="100%" rx="24" fill="#edf3fc"/><ellipse cx="120" cy="264" rx="64" ry="13" fill="#62718a" opacity=".2"/><rect x="94" y="190" width="24" height="54" rx="3" fill="'+bottom+'"/><rect x="122" y="190" width="24" height="54" rx="3" fill="'+bottom+'"/><rect x="90" y="238" width="32" height="18" rx="3" fill="'+shoe+'"/><rect x="118" y="238" width="32" height="18" rx="3" fill="'+shoe+'"/><rect x="78" y="105" width="84" height="84" rx="4" fill="'+top+'"/><rect x="53" y="108" width="23" height="72" rx="3" fill="'+skin+'"/><rect x="164" y="108" width="23" height="72" rx="3" fill="'+skin+'"/><rect x="107" y="82" width="27" height="28" fill="'+skin+'"/><rect x="84" y="35" width="72" height="68" rx="8" fill="'+skin+'"/><path d="M99 67h8m27 0h8" stroke="#33251f" stroke-width="5" stroke-linecap="round"/><path d="M109 83q11 9 22 0" fill="none" stroke="#8e5148" stroke-width="3" stroke-linecap="round"/><text x="120" y="286" text-anchor="middle" font-family="Arial" font-size="10" fill="#53627b">'+(nameInput.value||'MY AVATAR').replace(/[<&>]/g,'')+'</text></svg>';const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([svg],{type:'image/svg+xml'}));a.download=(nameInput.value.trim()||'my-avatar')+'.svg';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)});
drawAvatar();

// Full 3D avatar pass: connected limbs, raised garment pieces, and solid accessories.
var avatarYaw=-12, avatarPitch=-5, avatarDragState=null;
drawAvatar=function(){
 const skin=options.body[selected.body.type].variants[selected.body.variant].color;
 const hair=options.hair[selected.hair.type].variants[selected.hair.variant].color;
 const topType=options.tops[selected.tops.type], top=topType.variants[selected.tops.variant].color;
 const bottomType=options.bottoms[selected.bottoms.type], bottom=bottomType.variants[selected.bottoms.variant].color;
 const shoeType=options.shoes[selected.shoes.type], shoes=shoeType.variants[selected.shoes.variant];
 const accessory=options.accessories[selected.accessories.type].variants[selected.accessories.variant];
 const accessoryStyle=options.accessories[selected.accessories.type].style;
 const eyeStyle=options.eyes[selected.eyes.type].variants[selected.eyes.variant].style;
 const mouthStyle=options.mouth[selected.mouth.type].variants[selected.mouth.variant].style;
 const faceShape=options.face[selected.face.type].variants[selected.face.variant].shape;
 const headWidth=faceShape==='wide'?74:faceShape==='soft'?64:68;
 const eyes=eyeStyle==='happy'?'⌒　⌒':eyeStyle==='sleepy'?'﹀　﹀':eyeStyle==='big'?'●　●':'•　•';
 const mouth=mouthStyle==='neutral'?'—':mouthStyle==='open'?'ᴗ':mouthStyle==='small'?'﹀':'◡';
 const blocks=[]; const box=(kind,x,y,z,w,h,d,color)=>blocks.push(rbxPart('rbx-'+kind,x,y,z,w,h,d,color));
 const shorts=bottomType.style==='shorts', longSleeves=topType.style!=='shirt', boot=shoeType.style==='boots';
 // Pants and hips overlap slightly at every joint so the silhouette has no gaps.
 const legColor=shorts?skin:bottom;
 box('leg',-18,65,0,32,86,36,legColor); box('leg',18,65,0,32,86,36,legColor);
 box('hips',0,10,0,68,26,38,bottom);
 if(shorts){box('shorts',0,26,0,68,35,40,bottom);box('calf',-18,93,0,30,30,34,skin);box('calf',18,93,0,30,30,34,skin)}
 [-18,18].forEach(x=>{
  box('shoe',x,boot?111:112,2,boot?36:37,boot?31:26,48,shoes.color);
  box('sole',x,127,3,39,6,50,shoes.accent||shadeColor(shoes.color,26));
  if(boot)box('boot-cuff',x,99,1,37,5,38,shoes.accent||shadeColor(shoes.color,24));
  else box('toe',x,110,20,30,13,10,shoes.accent||'#E8EDF5');
 });
 // Shoulders overlap the torso and hands overlap sleeves/arms.
 [-51,51].forEach(x=>{box('arm',x,-19,0,28,69,32,longSleeves?top:skin);if(!longSleeves)box('sleeve',x,-53,0,30,29,34,top);box('hand',x,20,0,25,20,29,skin)});
 box('torso',0,-40,0,78,84,42,top);box('neck',0,-91,0,24,22,26,skin);box('head rbx-headpart',0,-132,0,headWidth,70,60,skin);
 // Raised garment details change with shirt, hoodie, sweater, or jacket selection.
 if(topType.style==='hoodie'){box('hood',0,-88,-23,42,25,13,shadeColor(top,-22));box('pocket',0,-23,22,34,17,3,shadeColor(top,-20));box('drawstring',-8,-52,22,2,17,2,shadeColor(top,-32));box('drawstring',8,-52,22,2,17,2,shadeColor(top,-32))}
 else if(topType.style==='sweater'){box('sweater-band',0,-10,22,76,5,3,shadeColor(top,-22));box('sweater-cuff',-51,10,17,29,7,3,shadeColor(top,-22));box('sweater-cuff',51,10,17,29,7,3,shadeColor(top,-22))}
 else if(topType.style==='jacket'){box('zipper',0,-40,22,3,76,3,shadeColor(top,48));box('lapel',-18,-64,22,17,18,3,shadeColor(top,24));box('lapel',18,-64,22,17,18,3,shadeColor(top,-24));box('pocket',-24,-18,22,18,15,3,shadeColor(top,-18))}
 else box('shirt-mark',-23,-48,22,8,13,3,shadeColor(top,-32));
 box('waistband',0,-1,19,66,5,3,shadeColor(bottom,20));
 if(!shorts){box('pocket',-24,20,19,15,12,3,shadeColor(bottom,-18));box('pocket',24,20,19,15,12,3,shadeColor(bottom,-18));box('seam',0,57,18,2,69,2,shadeColor(bottom,-20))}
 // Hair is built from raised locks; each hat and wearable is assembled from cuboids.
 const hs=options.hair[selected.hair.type].style;
 if(hs!=='bald'){box('hair-cap',0,-170,0,headWidth+4,17,62,hair);box('hair-fringe',0,-160,31,35,15,4,shadeColor(hair,-8));box('hair-lock',-29,-132,4,10,43,18,hair);box('hair-lock',29,-132,4,10,43,18,shadeColor(hair,-8));if(hs==='fluffy'||hs==='messy'){box('hair-tuft',-14,-178,1,20,9,20,shadeColor(hair,14));box('hair-tuft',12,-176,-1,18,10,18,hair)}}
 const ac=accessory.color||'#4b5563';
 if(accessoryStyle==='cap'){box('cap-crown',0,-174,0,70,17,62,ac);box('cap-brim',0,-162,22,76,5,25,shadeColor(ac,-16));box('cap-seam',0,-165,31,2,5,2,shadeColor(ac,30))}
 else if(accessoryStyle==='beanie'){box('beanie',0,-170,0,72,25,64,ac);box('beanie-cuff',0,-157,1,72,7,65,shadeColor(ac,-18));box('beanie-top',0,-185,0,18,7,18,shadeColor(ac,16))}
 else if(accessoryStyle==='glasses'){
  [-15,15].forEach(x=>{box('glasses-lens',x,-132,32,19,15,3,shadeColor(ac,18));box('glasses-rim',x,-140,33,21,3,4,ac);box('glasses-rim',x,-124,33,21,3,4,ac);box('glasses-rim',x-10,-132,33,3,17,4,ac);box('glasses-rim',x+10,-132,33,3,17,4,ac)});
  box('glasses-bridge',0,-132,34,12,3,4,ac);box('glasses-arm',-35,-132,18,4,4,28,ac);box('glasses-arm',35,-132,18,4,4,28,ac)
 }else if(accessoryStyle==='headphones'){
  [-1,1].forEach(side=>{box('headphone-cup',side*38,-128,0,12,30,31,ac);box('headphone-pad',side*38,-128,16,8,20,4,shadeColor(ac,-18))});
  [-24,-12,0,12,24].forEach(x=>box('headphone-band',x,-164+Math.abs(x)*.22,-2,11,7,20,ac))
 }
 const decal='<div class="rbx-face-decal" style="width:'+(headWidth-10)+'px"><span class="rbx-eyes">'+eyes+'</span><span class="rbx-mouth">'+mouth+'</span></div>';
 const label=(nameInput.value||'YOUR AVATAR').replace(/[<>]/g,'').slice(0,24);
 avatar.innerHTML='<div class="rbx-stage"><div class="rbx-model" style="--rotation:'+avatarYaw+'deg;--pitch:'+avatarPitch+'deg">'+blocks.join('')+decal+'</div><div class="rbx-label">'+label+'</div><div class="rbx-hint">DRAG IN ANY DIRECTION</div></div>';
 const model=avatar.querySelector('.rbx-model');
 model.addEventListener('pointerdown',e=>{avatarDragState={x:e.clientX,y:e.clientY,yaw:avatarYaw,pitch:avatarPitch};model.setPointerCapture(e.pointerId);e.preventDefault()});
 model.addEventListener('pointermove',e=>{if(!avatarDragState)return;avatarYaw=avatarDragState.yaw+(e.clientX-avatarDragState.x)*.72;avatarPitch=avatarDragState.pitch-(e.clientY-avatarDragState.y)*.72;model.style.setProperty('--rotation',avatarYaw+'deg');model.style.setProperty('--pitch',avatarPitch+'deg')});
 model.addEventListener('pointerup',()=>avatarDragState=null);model.addEventListener('pointercancel',()=>avatarDragState=null);
};
nameInput.addEventListener('input',drawAvatar);
drawAvatar();


// Add a fully solid rear-facing cap brim and strap for the backward-cap option.
const drawAvatarWithBackwardsCap = drawAvatar;
drawAvatar = function(){
 drawAvatarWithBackwardsCap();
 if(options.accessories[selected.accessories.type].style==='backwardsCap'){
  const model=avatar.querySelector('.rbx-model');
  if(model){
   const color=options.accessories[selected.accessories.type].variants[selected.accessories.variant].color||'#4b5563';
   model.insertAdjacentHTML('beforeend',rbxPart('rbx-cap-crown',0,-174,0,70,17,62,color)+rbxPart('rbx-cap-brim',0,-162,-22,76,5,25,shadeColor(color,-16))+rbxPart('rbx-cap-strap',0,-163,-31,18,5,3,shadeColor(color,24)));
  }
 }
};
drawAvatar();


// Natural hair shapes: each curl is a rounded, shaded 3D volume attached to the head.
options.hair[0].variants.push({name:'Curly',style:'curly',color:'#2C211C'});
const drawAvatarWithNaturalHair=drawAvatar;
drawAvatar=function(){
 drawAvatarWithNaturalHair();
 const hairType=options.hair[selected.hair.type];
 const hairStyle=hairType.style;
 if(!['messy','fluffy','curly'].includes(hairStyle))return;
 const model=avatar.querySelector('.rbx-model');
 if(!model)return;
 model.querySelectorAll('.rbx-hair-cap,.rbx-hair-fringe,.rbx-hair-lock,.rbx-hair-tuft').forEach(part=>part.remove());
 const color=hairType.variants[selected.hair.variant].color;
 const curls=[];
 const addCurl=(x,y,z,size,tone)=>curls.push('<i class="rbx-curl" style="--curl-size:'+size+'px;--curl-x:'+x+'px;--curl-y:'+y+'px;--curl-z:'+z+'px;--curl-color:'+tone+'"></i>');
 const loose=hairStyle==='fluffy';
 [[-27,-169,-8],[-9,-176,0],[10,-176,0],[28,-168,-7],[-19,-163,17],[0,-169,20],[19,-163,17],[-28,-153,26],[-12,-155,30],[7,-155,30],[25,-151,25],[-32,-137,8],[32,-137,8],[-32,-121,3],[32,-121,3]].forEach(([x,y,z],i)=>addCurl(x,y,z,loose?(i%3===0?23:20):(i%4===0?19:17),i%3===0?shadeColor(color,18):i%3===1?color:shadeColor(color,-12)));
 model.insertAdjacentHTML('beforeend',curls.join(''));
};
drawAvatar();


// Keep the current silhouette clean and prevent accumulated tilt from crossing upside down.
const drawAvatarWithCleanJoins=drawAvatar;
drawAvatar=function(){
 drawAvatarWithCleanJoins();
 const model=avatar.querySelector('.rbx-model');
 if(!model)return;
 model.querySelectorAll('.rbx-shirt-mark,.rbx-pocket').forEach(part=>part.remove());
 model.addEventListener('pointermove',()=>{
  const rawPitch=parseFloat(model.style.getPropertyValue('--pitch'))||0;
  avatarPitch=Math.max(-55,Math.min(55,rawPitch));
  model.style.setProperty('--pitch',avatarPitch+'deg');
 });
};
drawAvatar();



// Render textured curl volumes from the selected hairstyle variant.
const drawAvatarWithSelectedHair = drawAvatar;
drawAvatar = function () {
    drawAvatarWithSelectedHair();
    const hairType = options.hair[selected.hair.type];
    const hairVariant = hairType.variants[selected.hair.variant];
    if (!['messy', 'fluffy', 'curly'].includes(hairVariant.style)) return;
    const model = avatar.querySelector('.rbx-model');
    if (!model) return;
    model.querySelectorAll('.rbx-hair-cap, .rbx-hair-fringe, .rbx-hair-lock, .rbx-hair-tuft').forEach(part => part.remove());
    const curls = [];
    const addCurl = (x, y, z, size, color) => curls.push('<i class="rbx-curl" style="--curl-size:' + size + 'px;--curl-x:' + x + 'px;--curl-y:' + y + 'px;--curl-z:' + z + 'px;--curl-color:' + color + '"></i>');
    const fluffy = hairVariant.style === 'fluffy';
    [[-27,-169,-8],[-9,-176,0],[10,-176,0],[28,-168,-7],[-19,-163,17],[0,-169,20],[19,-163,17],[-28,-153,26],[-12,-155,30],[7,-155,30],[25,-151,25],[-32,-137,8],[32,-137,8],[-32,-121,3],[32,-121,3]].forEach(([x,y,z],i) => {
        const color = i % 3 === 0 ? shadeColor(hairVariant.color, 18) : i % 3 === 1 ? hairVariant.color : shadeColor(hairVariant.color, -12);
        addCurl(x, y, z, fluffy ? (i % 3 === 0 ? 23 : 20) : (i % 4 === 0 ? 19 : 17), color);
    });
    model.insertAdjacentHTML('beforeend', curls.join(''));
};
drawAvatar();



// Shape-aware 3D body presets and separately remembered accessory fits.
let activeBodyShape = 'blocky';
const accessorySelectionByShape = { blocky: { ...selected.accessories }, humanoid: { ...selected.accessories } };
const bodyShapeNames = { blocky: 'Blocky', humanoid: 'Humanoid' };
options.accessories.forEach(type => type.variants.forEach(variant => { variant.bodyFits = { blocky: { label: 'Blocky fit', headWidth: 68 }, humanoid: { label: 'Humanoid fit', headWidth: 64 } }; }));
const shapeControl = document.createElement('div');
shapeControl.className = 'body-shape-control';
shapeControl.innerHTML = '<span>Body shape</span><div class="body-shape-options"><button type="button" data-body-shape="blocky" class="active">Blocky</button><button type="button" data-body-shape="humanoid">Humanoid</button></div>';
document.querySelector('.categories').appendChild(shapeControl);
shapeControl.addEventListener('click', event => {
    const button = event.target.closest('[data-body-shape]');
    if (!button || button.dataset.bodyShape === activeBodyShape) return;
    accessorySelectionByShape[activeBodyShape] = { ...selected.accessories };
    activeBodyShape = button.dataset.bodyShape;
    Object.assign(selected.accessories, accessorySelectionByShape[activeBodyShape]);
    shapeControl.querySelectorAll('button').forEach(item => item.classList.toggle('active', item === button));
    drawAvatar();
    if (currentCategory === 'accessories') renderTypeMenu('accessories');
});
const drawAvatarWithBodyShape = drawAvatar;
drawAvatar = function () {
    accessorySelectionByShape[activeBodyShape] = { ...selected.accessories };
    drawAvatarWithBodyShape();
    const model = avatar.querySelector('.rbx-model');
    if (!model) return;
    model.classList.toggle('humanoid', activeBodyShape === 'humanoid');
    model.dataset.bodyShape = activeBodyShape;
    if (activeBodyShape !== 'humanoid') return;
    const fit = (part, values) => { if (!part) return; Object.entries(values).forEach(([key,value]) => part.style.setProperty('--'+key,value+'px')); };
    fit(model.querySelector('.rbx-torso'),{w:64,h:82,d:36,y:-40}); fit(model.querySelector('.rbx-hips'),{w:58,h:24,d:34,y:9}); fit(model.querySelector('.rbx-neck'),{w:19,h:20,d:21,y:-91}); fit(model.querySelector('.rbx-headpart'),{w:64,h:70,d:55,y:-132});
    model.querySelectorAll('.rbx-leg').forEach((part,i)=>fit(part,{x:i===0?-16:16,w:28,h:84,d:31,y:64})); model.querySelectorAll('.rbx-arm').forEach((part,i)=>fit(part,{x:i===0?-43:43,w:21,h:69,d:25,y:-19})); model.querySelectorAll('.rbx-hand').forEach((part,i)=>fit(part,{x:i===0?-44:44,w:19,h:20,d:22,y:20})); model.querySelectorAll('.rbx-shoe').forEach((part,i)=>fit(part,{x:i===0?-16:16,w:34,h:25,d:43,y:111})); model.querySelectorAll('.rbx-sole').forEach((part,i)=>fit(part,{x:i===0?-16:16,w:35,h:5,d:45,y:125}));
    const accessoryFit={ 'rbx-cap-crown':{w:66,h:22,d:56,y:-170},'rbx-cap-brim':{w:70,h:5,d:21,y:-158,z:20},'rbx-cap-seam':{y:-162,z:28},'rbx-cap-strap':{y:-160,z:-28},'rbx-beanie':{w:66,h:28,d:58,y:-169},'rbx-beanie-cuff':{w:66,h:7,d:59,y:-154},'rbx-beanie-top':{y:-184},'rbx-glasses-lens':{y:-132,z:29,w:18,h:14},'rbx-glasses-rim':{y:-139,z:30},'rbx-glasses-bridge':{y:-132,z:31},'rbx-glasses-arm':{z:16},'rbx-headphone-cup':{y:-128,w:12,h:28,d:28},'rbx-headphone-pad':{y:-128,z:15},'rbx-headphone-band':{y:-163} };
    Object.entries(accessoryFit).forEach(([className,values])=>fit(model.querySelector('.'+className),values));
    const skin=options.body[selected.body.type].variants[selected.body.variant].color;
    model.querySelectorAll('.rbx-hand').forEach((hand,sideIndex)=>{const side=sideIndex===0?-1:1;const fingers=[];[-6,-2,2,6].forEach((offset,index)=>fingers.push(rbxPart('rbx-finger',side*44+offset,31+(index===0||index===3?2:0),7,4,11,8,skin)));fingers.push(rbxPart('rbx-thumb',side*54,22,8,6,12,9,skin));hand.insertAdjacentHTML('afterend',fingers.join(''));});
};
const renderAccessoryTypesForShape=renderTypeMenu; renderTypeMenu=function(category){renderAccessoryTypesForShape(category);if(category==='accessories')itemsContainer.querySelectorAll('.item-button:not(:first-child) span').forEach(label=>label.textContent+=' · '+bodyShapeNames[activeBodyShape]+' fit');};
const renderAccessoryVariantsForShape=renderVariantMenu; renderVariantMenu=function(category){renderAccessoryVariantsForShape(category);if(category!=='accessories')return;const type=options.accessories[selected.accessories.type];itemsContainer.querySelectorAll('.item-button').forEach((button,index)=>{if(index===0)return;const variant=type.variants[index-1];if(variant)button.querySelector('span').textContent=variant.name+' '+type.name+' · '+bodyShapeNames[activeBodyShape]+' fit';});};
renderTypeMenu(currentCategory);
drawAvatar();



// Keep the chosen body mode and its matching cap version between visits.
const savedBodyShape = localStorage.getItem('avatarBodyShape');
if (savedBodyShape === 'blocky' || savedBodyShape === 'humanoid') { activeBodyShape = savedBodyShape; shapeControl.querySelectorAll('[data-body-shape]').forEach(button => button.classList.toggle('active', button.dataset.bodyShape === activeBodyShape)); }
shapeControl.addEventListener('click', event => { const button = event.target.closest('[data-body-shape]'); if (button) localStorage.setItem('avatarBodyShape', button.dataset.bodyShape); });
const renderCapFitChoices = renderCapStyleMenu;
renderCapStyleMenu = function (category, capIndex) { renderCapFitChoices(category, capIndex); itemsContainer.querySelectorAll('.item-button:not(:first-child) span').forEach(label => { label.textContent += ' · ' + bodyShapeNames[activeBodyShape] + ' fit'; }); };
renderTypeMenu(currentCategory);
drawAvatar();


// Replace the humanoid's box faces with layered ellipsoid volumes.
const drawAvatarWithTrueHumanoidVolumes = drawAvatar;
drawAvatar = function () {
    drawAvatarWithTrueHumanoidVolumes();
    if (activeBodyShape !== 'humanoid') return;
    const model = avatar.querySelector('.rbx-model');
    if (!model) return;
    model.querySelectorAll('.rbx-torso,.rbx-hips,.rbx-leg,.rbx-arm,.rbx-sleeve,.rbx-hand,.rbx-finger,.rbx-thumb,.rbx-neck,.rbx-shoe,.rbx-sole,.rbx-toe,.rbx-calf,.rbx-shorts,.rbx-boot-cuff').forEach(part => part.remove());
    const skin = options.body[selected.body.type].variants[selected.body.variant].color;
    const topType = options.tops[selected.tops.type];
    const top = topType.variants[selected.tops.variant].color;
    const bottomType = options.bottoms[selected.bottoms.type];
    const bottomVariant = bottomType.variants[selected.bottoms.variant];
    const shoeType = options.shoes[selected.shoes.type];
    const shoeVariant = shoeType.variants[selected.shoes.variant];
    const shoe = shoeVariant.color;
    const accent = shoeVariant.accent || shadeColor(shoe, 24);
    const leg = bottomType.style === 'shorts' ? skin : bottomVariant.color || skin;
    const makeVolume = (name,x,y,z,w,h,d,color) => {
        const layers=[];
        for(let i=0;i<11;i++){
            const t=(i/10)*2-1;
            const scale=Math.sqrt(Math.max(.035,1-t*t));
            const width=Math.max(4,w*scale),height=Math.max(4,h*scale);
            layers.push('<i class="rbx-organic-slice" style="position:absolute;left:0;top:0;width:'+width+'px;height:'+height+'px;border-radius:50%;border:1px solid '+shadeColor(color,-18)+';transform:translate3d(-50%,-50%,'+(t*d/2).toFixed(1)+'px);background:radial-gradient(ellipse at 32% 24%,'+shadeColor(color,32)+','+color+' 52%,'+shadeColor(color,-26)+');box-shadow:inset 0 2px 5px rgba(255,255,255,.18)"></i>');
        }
        return '<div class="rbx-organic-volume rbx-organic-'+name+'" style="position:absolute;left:50%;top:50%;width:0;height:0;transform-style:preserve-3d;transform:translate3d('+x+'px,'+y+'px,'+z+'px)">'+layers.join('')+'</div>';
    };
    const parts=[];
    const add=(...args)=>parts.push(makeVolume(...args));
    const shorts=bottomType.style==='shorts';
    [-18,18].forEach(x=>{
        add('leg',x,shorts?65:65,0,27,82,30,leg);
        if(shorts) add('calf',x,94,0,23,31,27,skin);
        add('sole',x,127,3,36,5,45,accent);
        add('shoe',x,111,3,36,23,42,shoe);
        add('toe',x,110,23,27,11,9,accent);
    });
    add('hips',0,10,0,60,27,34,bottomVariant.color||skin);
    if(shorts) add('shorts',0,26,0,64,32,38,bottomVariant.color||skin);
    const longSleeves=topType.style!=='shirt';
    [-1,1].forEach(side=>{
        add('arm',side*49,-18,0,21,67,26,longSleeves?top:skin);
        if(!longSleeves) add('sleeve',side*49,-53,0,25,27,30,top);
        add('hand',side*49,20,2,18,19,21,skin);
        [-6,-2,2,6].forEach((offset,index)=>add('finger',side*49+offset,31+(index===0||index===3?2:0),8,4,10,7,skin));
        add('thumb',side*58,22,8,6,11,8,skin);
    });
    add('torso',0,-40,0,64,82,36,top);
    add('neck',0,-91,0,18,20,20,skin);
    model.insertAdjacentHTML('beforeend',parts.join(''));
};
drawAvatar();

// Smooth, continuous humanoid silhouette: replace the slice-built volumes with shaded anatomical forms.
const drawAvatarWithSmoothHumanoid = drawAvatar;
drawAvatar = function () {
    drawAvatarWithSmoothHumanoid();
    if (activeBodyShape !== 'humanoid') return;
    const model = avatar.querySelector('.rbx-model');
    if (!model) return;
    model.querySelectorAll('.rbx-organic-volume').forEach(part => part.remove());
    const skin = options.body[selected.body.type].variants[selected.body.variant].color;
    const topType = options.tops[selected.tops.type];
    const top = topType.variants[selected.tops.variant].color;
    const bottomType = options.bottoms[selected.bottoms.type];
    const bottom = bottomType.variants[selected.bottoms.variant];
    const shoeVariant = options.shoes[selected.shoes.type].variants[selected.shoes.variant];
    const shoe = shoeVariant.color;
    const accent = shoeVariant.accent || shadeColor(shoe, 24);
    const smoothPart = (name,x,y,z,w,h,d,color,radius) => {
        const form = document.createElement('div');
        form.className = 'rbx-organic-volume rbx-organic-' + name;
        Object.assign(form.style, {
            position:'absolute', left:'50%', top:'50%', width:w+'px', height:h+'px',
            transform:'translate3d('+x+'px,'+y+'px,'+z+'px) translate(-50%,-50%)',
            transformStyle:'preserve-3d', borderRadius:radius || '50%',
            background:'radial-gradient(ellipse at 32% 24%,'+shadeColor(color,36)+' 0%, '+color+' 53%, '+shadeColor(color,-30)+' 100%)',
            border:'1px solid '+shadeColor(color,-18),
            boxShadow:'inset -7px -8px 13px rgba(0,0,0,.16), inset 5px 5px 10px rgba(255,255,255,.26), 0 2px 4px rgba(22,34,53,.10)'
        });
        form.style.setProperty('--depth',d+'px');
        model.appendChild(form);
    };
    const legColor = bottomType.style === 'shorts' ? skin : (bottom.color || skin);
    // Waist, torso and neck overlap slightly so the outline reads as one body.
    smoothPart('hips',0,13,0,58,28,34,bottom.color||skin,'45% 45% 42% 42%');
    if (bottomType.style === 'shorts') smoothPart('shorts',0,25,0,62,31,36,bottom.color||skin,'35% 35% 24% 24%');
    smoothPart('torso',0,-40,0,62,84,36,top,'38% 38% 30% 30%');
    smoothPart('neck',0,-89,0,17,21,20,skin,'42%');
    [-1,1].forEach(side => {
        smoothPart('leg',side*17,65,0,27,84,29,legColor,'48% 48% 43% 43%');
        if(bottomType.style === 'shorts') smoothPart('calf',side*17,93,0,21,31,25,skin,'48%');
        smoothPart('shoe',side*18,111,3,35,23,41,shoe,'48% 48% 40% 40%');
        smoothPart('toe',side*18,109,22,25,10,8,accent,'50%');
        smoothPart('sole',side*18,126,2,35,5,41,accent,'50%');
        const armColor = topType.style === 'shirt' ? skin : top;
        smoothPart('arm',side*43,-17,0,21,68,25,armColor,'48%');
        if(topType.style === 'shirt') smoothPart('sleeve',side*43,-52,0,25,27,29,top,'45%');
        smoothPart('hand',side*43,21,2,17,19,20,skin,'46% 46% 42% 42%');
        [-5,-1.7,1.7,5].forEach((off,i)=>smoothPart('finger',side*43+off,31+(i===0||i===3?1:0),7,3.5,9,7,skin,'50%'));
        smoothPart('thumb',side*51,23,7,5,10,8,skin,'50%');
    });
};
drawAvatar();

                        // Real 3D humanoid pass: each body part is an overlapping stack of shaded cross-sections.
const drawAvatarWithLayeredVolumes = drawAvatar;
drawAvatar = function () {
    drawAvatarWithLayeredVolumes();
    if (activeBodyShape !== 'humanoid') return;
    const model = avatar.querySelector('.rbx-model');
    if (!model) return;
    model.querySelectorAll('.rbx-organic-volume, .rbx-headpart').forEach(part => part.remove());
    const skin = options.body[selected.body.type].variants[selected.body.variant].color;
    const topType = options.tops[selected.tops.type], top = topType.variants[selected.tops.variant].color;
    const bottomType = options.bottoms[selected.bottoms.type], bottom = bottomType.variants[selected.bottoms.variant];
    const shoeVariant = options.shoes[selected.shoes.type].variants[selected.shoes.variant];
    const shoe = shoeVariant.color, sole = shoeVariant.accent || shadeColor(shoe, 24);
    const head = options.face[selected.face.type].variants[selected.face.variant].shape === 'wide' ? 72 : 64;
    const buildVolume = (name,x,y,z,w,h,d,color,roundness) => {
        const wrap = document.createElement('div');
        wrap.className = 'rbx-organic-volume rbx-organic-' + name;
        Object.assign(wrap.style,{position:'absolute',left:'50%',top:'50%',width:'0',height:'0',transform:'translate3d('+x+'px,'+y+'px,'+z+'px)',transformStyle:'preserve-3d'});
        const slices=56;
        for(let i=0;i<slices;i++){
            const t=(i/(slices-1))*2-1;
            const profile=Math.sqrt(Math.max(0.001,1-t*t));
            const el=document.createElement('i');
            el.className='rbx-volume-surface';
            const layerColor=shadeColor(color,Math.round(-9*t));
            Object.assign(el.style,{position:'absolute',left:'0',top:'0',width:Math.max(1,w*profile)+'px',height:Math.max(1,h*profile)+'px',border:'0',borderRadius:roundness||'50%',transform:'translate3d(-50%,-50%,'+(t*d/2)+'px)',background:'radial-gradient(ellipse at 32% 25%,'+shadeColor(layerColor,34)+' 0%,'+layerColor+' 58%,'+shadeColor(layerColor,-27)+' 100%)',boxShadow:'none',pointerEvents:'none'});
            wrap.appendChild(el);
        }
        return wrap;
    };
    const add=(...args)=>model.appendChild(buildVolume(...args));
    const pants=bottom.color||skin, shorts=bottomType.style==='shorts';
    // Head, neck, shoulders, torso and hips overlap to form one connected silhouette.
    const headVolume=buildVolume('headpart',0,-132,0,head,70,58,skin,'46% 46% 42% 42%');
    const face=model.querySelector('.rbx-face-decal');
    if(face) face.insertAdjacentElement('beforebegin',headVolume); else model.appendChild(headVolume);
    add('neck',0,-92,0,19,25,22,skin,'42%');
    add('torso',0,-40,0,62,84,38,top,'39% 39% 32% 32%');
    add('hips',0,14,0,58,31,36,pants,'45% 45% 40% 40%');
    if(shorts) add('shorts',0,26,0,61,32,38,pants,'35% 35% 25% 25%');
    const armColor=topType.style==='shirt'?skin:top;
    [-1,1].forEach(side=>{
        add('arm',side*43,-17,0,21,67,27,armColor,'48%');
        if(topType.style==='shirt') add('sleeve',side*43,-51,0,23,19,29,top,'47%');
        add('hand',side*43,22,2,17,19,20,skin,'46% 46% 42% 42%');
        [-5,-1.7,1.7,5].forEach((offset,i)=>add('finger',side*43+offset,32+(i===0||i===3?1:0),7,3.5,9,7,skin,'50%'));
        add('thumb',side*51,24,7,5,10,8,skin,'50%');
        add('leg',side*16,65,0,27,83,31,shorts?skin:pants,'48% 48% 43% 43%');
        add('shoe',side*17,111,2,35,23,43,shoe,'48% 48% 40% 40%');
        add('sole',side*17,125,2,35,5,43,sole,'50%');
    });
};
drawAvatar();

                        // Keep the original blocky avatar as the only body style.
activeBodyShape = 'blocky';
localStorage.setItem('avatarBodyShape', 'blocky');
if (typeof shapeControl !== 'undefined') shapeControl.remove();
const renderBlockyTypeMenu = renderTypeMenu;
renderTypeMenu = function(category) {
    renderBlockyTypeMenu(category);
    itemsContainer.querySelectorAll('.item-button span').forEach(label => {
        label.textContent = label.textContent.replace(/ · (Blocky|Humanoid) fit/g, '');
    });
};
const renderBlockyVariantMenu = renderVariantMenu;
renderVariantMenu = function(category) {
    renderBlockyVariantMenu(category);
    itemsContainer.querySelectorAll('.item-button span').forEach(label => {
        label.textContent = label.textContent.replace(/ · (Blocky|Humanoid) fit/g, '');
    });
};
renderTypeMenu(currentCategory);
drawAvatar();

                        

// Keep the classic block avatar only: remove the old round hair pieces and fit all wearables to its square head.
const drawBlockyAvatar = drawAvatar;
drawAvatar = function () {
    drawBlockyAvatar();
    const model = avatar.querySelector(".rbx-model");
    if (!model) return;
    model.querySelectorAll('[class*="hair-"], [class*="cap-"], [class*="beanie"], [class*="glasses"], [class*="headphone"]').forEach(part => part.remove());
    const hairStyle = options.hair[selected.hair.type].style;
    const hair = options.hair[selected.hair.type].variants[selected.hair.variant].color;
    const part = (name, x, y, z, w, h, d, color) => rbxPart("rbx-" + name, x, y, z, w, h, d, color);

    if (hairStyle !== "bald") {
        // A squared crown follows the head footprint; short angular locks replace the floating bead-like tufts.
        model.insertAdjacentHTML("beforeend",
            part("hair-crown", 0, -165, 0, 65, 18, 56, hair) +
            part("hair-fringe", 0, -153, 30, 46, 12, 4, shadeColor(hair, -9)) +
            part("hair-lock", -29, -132, 0, 9, 30, 52, hair) +
            part("hair-lock", 29, -132, 0, 9, 30, 52, shadeColor(hair, -10)) +
            (hairStyle === "messy" || hairStyle === "fluffy" ?
                part("hair-tuft", -17, -176, -3, 17, 10, 17, shadeColor(hair, 12)) +
                part("hair-tuft", 2, -179, 1, 18, 12, 17, hair) +
                part("hair-tuft", 18, -174, -2, 15, 9, 16, shadeColor(hair, -7)) : ""));
    }

    const item = options.accessories[selected.accessories.type].variants[selected.accessories.variant];
    const style = options.accessories[selected.accessories.type].style;
    const color = item.color || "#30343b";
    const dark = shadeColor(color, -20);
    let wearable = "";
    if (style === "cap" || style === "backwardCap") {
        wearable = part("cap-crown", 0, -169, 0, 62, 15, 54, color) +
            part("cap-brim", 0, -159, style === "backwardCap" ? -27 : 27, 70, 5, 18, dark) +
            part("cap-seam", 0, -164, 28, 2, 4, 2, shadeColor(color, 25));
    } else if (style === "beanie") {
        wearable = part("beanie-crown", 0, -168, 0, 64, 22, 56, color) +
            part("beanie-cuff", 0, -154, 0, 67, 7, 59, dark) +
            part("beanie-top", 0, -181, 0, 15, 5, 15, shadeColor(color, 14));
    } else if (style === "glasses") {
        [-15, 15].forEach(x => {
            wearable += part("glasses-lens", x, -130, 32, 16, 12, 2, shadeColor(color, 35));
            wearable += part("glasses-frame", x, -138, 33, 20, 3, 3, color) + part("glasses-frame", x, -122, 33, 20, 3, 3, color) +
                part("glasses-frame", x - 9, -130, 33, 3, 18, 3, color) + part("glasses-frame", x + 9, -130, 33, 3, 18, 3, color);
        });
        wearable += part("glasses-bridge", 0, -130, 34, 12, 3, 3, color) + part("glasses-arm", -31, -130, 0, 4, 4, 52, dark) + part("glasses-arm", 31, -130, 0, 4, 4, 52, dark);
    } else if (style === "headphones") {
        [-1, 1].forEach(side => {
            wearable += part("headphone-cup", side * 35, -128, 0, 13, 27, 28, color) +
                part("headphone-pad", side * 35, -128, 15, 5, 19, 3, dark);
        });
        [-22, -11, 0, 11, 22].forEach((x, i) => {
            wearable += part("headphone-band", x, -161 + Math.abs(x) * .18, -1, 8, 7, 17, i === 2 ? shadeColor(color, 15) : color);
        });
    }
    if (wearable) model.insertAdjacentHTML("beforeend", wearable);
};
drawAvatar();



// Remove the legacy round curl layer and keep the reversed cap aligned to the cube head.
const drawAvatarWithoutLegacyCurls = drawAvatar;
drawAvatar = function () {
    drawAvatarWithoutLegacyCurls();
    const model = avatar.querySelector(".rbx-model");
    if (!model) return;
    model.querySelectorAll(".rbx-curl").forEach(part => part.remove());
    if (options.accessories[selected.accessories.type].style === "backwardsCap") {
        const item = options.accessories[selected.accessories.type].variants[selected.accessories.variant];
        const color = item.color || "#30343b";
        model.insertAdjacentHTML("beforeend",
            rbxPart("rbx-cap-crown", 0, -169, 0, 62, 15, 54, color) +
            rbxPart("rbx-cap-brim", 0, -159, -27, 70, 5, 18, shadeColor(color, -20)) +
            rbxPart("rbx-cap-strap", 0, -163, -29, 18, 5, 3, shadeColor(color, 24)));
    }
};
drawAvatar();
