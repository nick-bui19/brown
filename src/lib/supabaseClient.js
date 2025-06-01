// src/lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

// These two should live in .env.local (and never be checked into git)
const supabaseUrl    = process.env.REACT_APP_SUPABASE_URL
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing REACT_APP_SUPABASE_URL or REACT_APP_SUPABASE_ANON_KEY in .env.local!')
}

// Export a single Supabase client instance for the whole app
export const supabase = createClient(supabaseUrl, supabaseAnonKey)