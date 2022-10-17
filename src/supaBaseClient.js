import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = process.env.API_URL;
// const supabaseAnonKey = process.env.SUPABASE_KEY;

const API_URL = "https://kukxuabaevyzpbcbzuty.supabase.co"
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqbHRrb3RyYXZ2Y2V4eG1lZGhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjU2OTg2NzcsImV4cCI6MTk4MTI3NDY3N30.5nI8ZJCzYi7Y6kT8mYCNbGWK3ZqR3wUsCEgVppXppNI"
export const MESOMB_APP_KEY = "65bce9457e050c97a80d6d39c21afd9be92714ab"

export const supabase = createClient(API_URL, SUPABASE_KEY);

