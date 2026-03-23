import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const base = process.env.GITHUB_ACTIONS === "true" && repositoryName ? `/${repositoryName}/` : "/";

export default defineConfig({
  base,
  assetsInclude: [
    "**/*.[jJ][pP][gG]",
    "**/*.[jJ][pP][eE][gG]",
    "**/*.[pP][nN][gG]",
    "**/*.[wW][eE][bB][pP]",
    "**/*.[aA][vV][iI][fF]",
    "**/*.[gG][iI][fF]",
    "**/*.[hH][eE][iI][cC]",
    "**/*.[mM][oO][vV]",
    "**/*.[mM][pP]4",
    "**/*.[mM]4[vV]",
    "**/*.[wW][eE][bB][mM]"
  ],
  plugins: [react()]
});
