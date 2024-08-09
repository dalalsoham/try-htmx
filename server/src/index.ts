import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import {html, raw} from 'hono/html'

const app = new Hono()

app.get('/', (c) => {
  return c.html(
    html`<!doctype html>
      <script src="https://unpkg.com/htmx.org@2.0.1"></script>
      <button hx-post='/clicked' hx-swap="outerHTML">Click Me</button>

    `,
  );
});

app.post("/clicked", (c) => {
  return c.text("Hello Hono!!, you clicked this button");
});

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
