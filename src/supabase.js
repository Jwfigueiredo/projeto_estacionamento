import { createClient } from "@supabase/supabase-js";
//Buscando chaves
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY  
//Iniciando ocliente do supabase
export const supabase = createClient(supabaseUrl,supabasePublishableKey)