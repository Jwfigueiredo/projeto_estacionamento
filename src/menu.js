import './style.css'
import { supabase } from './supabase.js'

const btnLogout = document.getElementById('btn-logout')

//efetuamos o logout no supabase
btnLogout.addEventListener('click',async() => {
    await supabase.auth.signOut()
    window.location.assign('./index.html') // volta para o login
})