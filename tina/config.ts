import { defineConfig } from "tinacms";

export default defineConfig({
  branch: process.env.TINA_BRANCH || "main",
  clientId: process.env.TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",

  build: { 
    publicFolder: "public", 
    outputFolder: "admin" 
  },
  media: { 
    tina: { 
      publicFolder: "public", 
      mediaRoot: "images" 
    } 
  },

  schema: {
    collections: [
      {
        name: "posts",
        label: "Posts",
        path: "src/content/posts",
        format: "md",
        fields: [
          { type: "string", name: "title", label: "Title", required: true },
          { type: "string", name: "description", label: "Description" },
          { type: "datetime", name: "date", label: "Date" },
          { type: "image", name: "image", label: "Cover image" },
          { type: "boolean", name: "draft", label: "Draft" },
          { type: "rich-text", name: "body", label: "Body", isBody: true },
        ],
      },
    ],
  },
});

