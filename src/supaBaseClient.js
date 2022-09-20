import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.API_URL;
const supabaseAnonKey = process.env.SUPABASE_KEY;


const API_URL= "https://kukxuabaevyzpbcbzuty.supabase.co"
const SUPABASE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt1a3h1YWJhZXZ5enBiY2J6dXR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjA2MzgxNzEsImV4cCI6MTk3NjIxNDE3MX0.H06H4HT_40bzN211g4P_e-JqfFLCDgDGKM5eK_mmDmc"
const MESOMB_APP_KEY="65bce9457e050c97a80d6d39c21afd9be92714ab"

export const supabase = createClient(API_URL, SUPABASE_KEY);

