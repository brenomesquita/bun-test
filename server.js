let req = 0
export default {
  port: Number(process.env.PORT ?? 3000),
  fetch(request) {
    console.log('oi')
    return new Response(`Welcome to Bun!${req+=1}`,
      {
        headers: {
          "Content-Type": "text/html",
        },
      }
    );
  },
};