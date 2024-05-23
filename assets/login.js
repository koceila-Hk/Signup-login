///////// Post form login

const login_form = document.getElementById('form-login');

login_form.addEventListener('submit', async(e) => {
    e.preventDefault();

    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const password = document.getElementById('psw').value;
    const span = document.querySelector('span');

    const data = {nom, prenom, password};

    try {
        const response = await fetch ('http://localhost:3000/login',{
            method : 'POST',
            headers : {'Content-Type':'application/json'},
            body : JSON.stringify(data)
        });

        if (response.status == 200) {
            window.location.href = './home.html';
            console.log('Login succeful');
        } else {
            span.style.display = 'block';
            span.textContent = 'Identifiant ou mot de passe incorrect. Veuillez réessayer.'
        }

    } catch(error) {
        console.error('Error')
    }
});