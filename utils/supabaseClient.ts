import { createClient } from "@supabase/supabase-js";
//import { API_BASE_URL, SUPABASE_KEY } from "./config";

export const supabase = createClient('https://lzzvjqrkitagmvyfrjkx.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6enZqcXJraXRhZ212eWZyamt4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc1NjIwODQsImV4cCI6MjAzMzEzODA4NH0.RWoDUr28GlCCnR0okXflIVSDsXgLPx7Hj1nRAc-L7AY');