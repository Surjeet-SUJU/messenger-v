import nextSuperjsonPlugin from "next-superjson-plugin";

/** @type {import('@swc/core').Config} */
const swcConfig = {
  jsc: {
    transform: {
      plugin: nextSuperjsonPlugin(),
    },
  },
};

export default swcConfig;
