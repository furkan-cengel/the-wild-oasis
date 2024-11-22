import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://nkkzdlwomgjelpjobsud.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ra3pkbHdvbWdqZWxwam9ic3VkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAzNjA4NjcsImV4cCI6MjA0NTkzNjg2N30.cvh6T0oLDd3Qts5DRauaIJLBNnu-t2GYfc5FrfNC7o4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
