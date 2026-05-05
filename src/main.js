import './style.css'
import{ supabase } from './supabase.js'

const loginForm = document.getElementById('login-form')
const messageDiv = document.getElementById('message')
//listener do submit

loginForm.addEventListener('submit',async(e) => {e.preventDefault() //evita o recarregamento
    // Obtendo o conteudo dos campos
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    //Tentaremos fazer o login do supabase
    const {data,error} = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    })
    if(error){
        messageDiv.innerText = `Erro: ${error.message}`
        messageDiv.classList.remove('hidden') //mostramos
        } else {
            //se der tudo certo, vamos encaminhar para o menu
            window.location.assing( './menu.html')
        }

})