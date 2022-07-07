export default {
  port: 4000,
  fetch(request) {
    return new Response("Hello World!");
  },
};
