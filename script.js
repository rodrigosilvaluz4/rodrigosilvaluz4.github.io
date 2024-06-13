// Objeto para ser renderizado no HTML
const myInformations = {
   
    fotoPerfil: 'https://github.com/rodrigosilvaluz4.png',
    nome: 'Rodrigo Luz',
    //cargo: 'IT Specialist',
    
    // Redes sociais: 
    github: 'https://github.com/rodrigosilvaluz4',
    linkedin: 'https://www.linkedin.com/in/rodrigo-luz-97478b86/',
    codepen: 'https://codepen.io/s3mpr1linux',
    
    //Texto biografia:
    minhaBio: 'IT professional specialized in Infra, Devops, Networks, e Cybersecurity'
};

// Passando dados do objeto: 
document.getElementById('fotoPerfil').src = myInformations.fotoPerfil;
document.getElementById('nome').innerHTML = myInformations.nome;
//document.getElementById('cargo').innerHTML = myInformations.cargo;

//Redes sociais:
document.getElementById('github').href = myInformations.github;
document.getElementById('linkedin').href = myInformations.linkedin;
document.getElementById('codepen').href = myInformations.codepen;

//Texto da biografia:
document.getElementById('minhaBio').innerHTML = myInformations.minhaBio;