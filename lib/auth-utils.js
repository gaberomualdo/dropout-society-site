import { createClient } from '@supabase/supabase-js'

export const setupSupabase = () =>
  createClient(
    'https://nmyejppykabwavyvvpxe.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5teWVqcHB5a2Fid2F2eXZ2cHhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjcxOTI0MDAsImV4cCI6MTk4Mjc2ODQwMH0.72nMXs7ls53xkMvHdnmbYhfzW4arcxxs8L8pq9Ci-90',
    {
      autoRefreshToken: true,
      persistSession: true,
    }
  )
