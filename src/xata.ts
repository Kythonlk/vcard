// Generated by Xata Codegen 0.26.9. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "Posts",
    columns: [
      { name: "title", type: "string" },
      { name: "slug", type: "string" },
      { name: "description", type: "text" },
      { name: "pubDate", type: "datetime" },
    ],
  },
  {
    name: "Users",
    columns: [
      { name: "name", type: "string" },
      { name: "bio", type: "text", defaultValue: "ewrtgersgyser" },
      { name: "email", type: "email", unique: true },
      { name: "profile_image", type: "file" },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Posts = InferredTypes["Posts"];
export type PostsRecord = Posts & XataRecord;

export type Users = InferredTypes["Users"];
export type UsersRecord = Users & XataRecord;

export type DatabaseSchema = {
  Posts: PostsRecord;
  Users: UsersRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL:
    "https://Kythonlk-s-workspace-jbmhqc.eu-west-1.xata.sh/db/xata-astro",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};