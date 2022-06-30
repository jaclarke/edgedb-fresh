/** @jsx h */
import { h } from "preact";
import { PageProps, HandlerContext } from "$fresh/server.ts";
import * as edgedb from "edgedb";
import Counter from "../islands/Counter.tsx";

const client = edgedb.createClient();

export const handler = async (_req: Request, ctx: HandlerContext) => {
  const rand = await client.querySingle(`select random()`);

  return ctx.render(rand);
};

export default function Home({ data }: PageProps) {
  return (
    <div>
      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p>
        Welcome to `fresh`. Try update this message in the ./routes/index.tsx
        file, and refresh.
      </p>
      <p>Hello EdgeDB {data}</p>
      <Counter start={3} />
    </div>
  );
}
