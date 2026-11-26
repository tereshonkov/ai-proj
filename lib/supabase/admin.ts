import "server-only";

import { createClient } from "@supabase/supabase-js";
import { env } from "@/env/client";
import { serverEnv } from "@/env/server";

export const supabaseAdmin = createClient(
  env.NEXT_PUBLIC_SUPABASE_URL,
  serverEnv.SUPABASE_SECRET_KEY,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
      detectSessionInUrl: false,
    },
  }
);
