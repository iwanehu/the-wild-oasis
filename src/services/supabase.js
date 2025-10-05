// import { createClient } from "@supabase/supabase-js";

// export const supabaseUrl = "https://dclaevazetcjjkrzczpc.supabase.co";
// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjbGFldmF6ZXRjamprcnpjenBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMyOTIzNDQsImV4cCI6MTk5ODg2ODM0NH0.LGg0M-taoHgKtxCzr9owrb09epnPaO_Yfz6xVE54sIY";
// const supabase = createClient(supabaseUrl, supabaseKey);

// export default supabase;





import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://fzzglvfxovndcclybjue.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ6emdsdmZ4b3ZuZGNjbHlianVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgxMjM0MDEsImV4cCI6MjA3MzY5OTQwMX0.zb0oK2y09BRujxQQ2gXLI5vD7bzaN79nvayfKB54mjk';
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;