export default {
  port: Number(process.env.PORT ?? 3000),
  fetch(request) {
    return new Response("Welcome to Bun!",
      {
        headers: {
          "Content-Type": "text/html",
        },
      }
    );
  },
};