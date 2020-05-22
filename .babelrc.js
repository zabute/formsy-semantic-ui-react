module.exports = {
    presets: [
        [
            "@babel/preset-env",
            { loose: true, modules: process.env.MODULE_TYPE || false },
        ],
        "@babel/preset-react",
    ],
    plugins: [
        ["@babel/plugin-proposal-class-properties", { loose: true }],
        "lodash",
        process.env.MODULE_TYPE && ["lodash", { id: "semantic-ui-react" }, "SUIR"],
        "transform-react-remove-prop-types",
    ].filter(Boolean),
};
