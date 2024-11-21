const context = require.context("./entries", false, /\.js$/);

const blogs = context
    .keys()
    .map((key) => context(key).default);

export default blogs;
