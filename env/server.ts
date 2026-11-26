import { createEnv } from "@t3-oss/env-nextjs";
import * as z from "zod";

export const env = createEnv({
  server: {
    SUPABASE_SECRET_KEY: z
      .string()
      .min(1)
      .startsWith("sb_secret_", "SUPABASE_SECRET_KEY must be a valid Supabase secret key"),
  },
  runtimeEnv: {
    SUPABASE_SECRET_KEY: process.env.SUPABASE_SECRET_KEY,
  },
});
