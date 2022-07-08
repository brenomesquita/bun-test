let req = 0
export default {
  port: Number(process.env.PORT ?? 3000),
  fetch(request) {
    return new Response(`Welcome to Bun!${i=i+1}`,
      {
        headers: {
          "Content-Type": "text/html",
        },
      }
    );
  },
};