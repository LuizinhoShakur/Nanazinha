function send(){
    const usuario = document.querySelector('#usuario').value;
    const senha = document.querySelector('#senha').value;

    if(usuario === 'Nana' && senha === 'moon141023'){
        Swal.fire({
            title: "Senha correta!",
            text: "Bam demaizi!",
            icon: "success"
          });
        setTimeout(() =>{

        window.location.href =  "https://luizinhoshakur.github.io/Nanazinha/home/home.html";
    },2000);

    }
     
    

     else if( usuario.length < 1 || senha.length <1){
        Swal.fire({
            title: "Preencha todos os campos",
            text: "Ta dd?? preenche  ai!",
            icon: "info"
          });
           return false;
    }else{
        Swal.fire({
            title: "Senha negada meu truta!",
            text: "Quem é vc?",
            icon: "error"
          });
          
        setTimeout(() => {
            window.location.href ='../error/error.html';
            
            
        }, 2000);
    }
}