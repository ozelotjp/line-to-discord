/// <reference types="./types/deployctl.d.ts" />

addEventListener("fetch", (event: FetchEvent) => {
  handleRequest(event.request);

  const response = new Response(null, { status: 200 });
  event.respondWith(response);
});

const handleRequest = async (request: Request) => {
  const json = await request.json();
  const events = json.events.filter((event: any) => event.type === "message");
  for (const event of events) {
    await sendMessage(`<@${Deno.env.get("DISCORD_MENTION")}> ${event.message.text}`);
  }
};

const sendMessage = async (content: string) => {
  await fetch(
    Deno.env.get("DISCORD_WEBHOOK")!,
    {
      method: "POST",
      body: JSON.stringify({ content }),
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
};
