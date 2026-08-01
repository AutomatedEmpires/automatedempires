import * as Sentry from "@sentry/nextjs";

// Server and edge capture only. Browser capture would require an
// instrumentation-client.ts, which pulls the Sentry SDK into every page of an
// otherwise almost-JS-free static site; that cost is not justified here yet.
export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    await import("./sentry.server.config");
  }

  if (process.env.NEXT_RUNTIME === "edge") {
    await import("./sentry.edge.config");
  }
}

export const onRequestError = Sentry.captureRequestError;
