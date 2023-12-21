function fugir(){
    const btnNao = document.querySelector("#nao");

 btnNao.style.left = posicaoDefinida(10, 90);
 btnNao.style.top = posicaoDefinida(10, 90);
 

}

function posicaoDefinida(min, max){
    return (Math.random() * (max - min)+ min) + "%";

}

function aceitou(){

    Swal.fire({
     
        title: "Bom mexmo vuu!",
        text: "Hihihi ❤ ",
        imageUrl: "https://i.pinimg.com/originals/ef/96/87/ef9687b36e36605b375b4e9b0cde51db.gif",
        imageWidth: 300,
        imageHeight: 100,
        imageAlt: "I love you"

  });
    
  setTimeout(() =>{

    window.location.href =  "../final/final.html";
},5000);
}