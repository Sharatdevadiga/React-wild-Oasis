import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://bbtynykkzdwcxvvyvmyq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJidHlueWtremR3Y3h2dnl2bXlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYyMDc1NTgsImV4cCI6MjAzMTc4MzU1OH0.GnnKiMYWJi8rdQeyorCCKgBIQiyPOJyKoG7VHluSozI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
