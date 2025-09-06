import { render, useRenderer } from "@opentui/react";
import { useQuery, useZero, ZeroProvider } from "@rocicorp/zero/react";
import { useEffect } from "react";
import { schema, type Schema } from "../src/schema";

// eslint-disable-next-line react-refresh/only-export-components
function App() {
  const z = useZero<Schema>();
  const renderer = useRenderer();
  const [messages] = useQuery(z.query.message);

  useEffect(() => {
    renderer.console.show();
  });

  useEffect(() => {
    console.log(messages);
  }, [messages]);

  // A strange observation is that the messages will display and a render will trigger if you click + drag in the terminal?
  // I'm unusure where this is coming from but it only happens when the `useQuery` hook is used.

  return (
    <box border flexGrow={1}>
      {messages.map((m) => (
        <box key={`message-${m.id}`}>
          <text>{m.body}</text>
        </box>
      ))}
    </box>
  );
}

render(
  <ZeroProvider
    {...{
      schema,
      server: "http://localhost:4848",
      userID: "anon",
    }}
  >
    <App />
  </ZeroProvider>
);
