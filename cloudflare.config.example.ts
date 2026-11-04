import { defineConfig } from "cf/config";

export default defineConfig({
  accountId: "YOUR_CLOUDFLARE_ACCOUNT_ID",
  worker: {
    name: "racknerd-deals",
    compatibilityDate: "2026-11-02",
    domains: ["racknerd.bytenote.net"],
    workersDev: true,
    observability: {
      enabled: true,
    },
  },
});
