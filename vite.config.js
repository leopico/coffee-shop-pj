export default {
  base: "/",
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        "add-member": "./src/add-member.html",
        all_coffee: "./src/all_coffee.html",
        member: "./src/member.html",
      },
    },
  },
};
