import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "~0.3.0",
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["content"],
      models: [
        {
          name: "StaticFillTextHeader",
          type: "object",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "background", type: "string" }
          ]
        },
        {
          name: "Footer",
          type: "object",
          fields: [
            { name: "info", type: "string" },
            { name: "copyright", type: "string" }
          ]
        },
        {
          name: "Page",
          type: "page",
          urlPath: "/{slug}",
          filePath: "content/pages/{slug}.json",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "body", type: "string" },
            { name: "header", type: "model", models: ["StaticFillTextHeader"] },
            { name: "footer", type: "model", models: ["Footer"] }
          ]
        }
      ],
    })
  ]
}); 