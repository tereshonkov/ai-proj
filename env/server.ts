import { createEnv } from "@t3-oss/env-nextjs";
import * as z from "zod";

export const env = createEnv({
  server: {
    DB_PASSWORD: z.string().min(1, "DB_PASSWORD is required"),
  },
  runtimeEnv: {
    DB_PASSWORD: process.env.DB_PASSWORD,
  },
});
