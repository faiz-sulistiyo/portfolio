import { createClient } from "@supabase/supabase-js";
import { Database } from "@/types/supabase";

const supaUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supaKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";


export const supabase = createClient<Database>(supaUrl, supaKey);