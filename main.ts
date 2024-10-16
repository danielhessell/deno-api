Deno.serve((_req) => {
  return new Response(JSON.stringify({ message: "Hello World" }), {
    status: 200,
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
  });
});
