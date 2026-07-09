import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

export default defineConfig({
  site: isGitHubPages ? "https://berkecrkmn.github.io" : "https://queenpromosyon.com",
  base: isGitHubPages ? "/queen-promosyon" : "/",
  output: "static",
  integrations: [sitemap()],
});
