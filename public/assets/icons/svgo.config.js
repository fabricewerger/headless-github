module.exports = {
    svgo: true,
    svgoConfig: {
        plugins: [
            {
                name: "sortAttrs",
                xmlnsOrder: "alphabetical",
            },
            {
                name: "removeDimensions",
            },
            {
                name: "removeAttrs",
                params: {
                    attrs: "fill",
                },
            },
            {
                name: "addAttributesToSVGElement",
                params: {
                    attributes: [
                        {
                            "aria-hidden": true,
                        },
                        {
                            fill: "currentColor",
                        },
                    ],
                },
            },
        ],
    },
};
