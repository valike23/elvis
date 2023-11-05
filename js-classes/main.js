class Person {
     height;
     weight;
     static count = 0;
     skinColor;
     positionX;
     positionY;
     constructor(height, weight){
        this.height = height;
        this.weight = weight;
        this.positionX = 0;
        this.positionY = 0;
     }

     run(){
        //code to make person run
        console.log('i am running');
     }
     jump(){
        console.log('i am jumping');
     }
     walk(){
        console.log('i am walking');
     }
     fight(){
        console.log('i am fighting');
     }
     resize(){
        this.weight = this.weight + 1;
        this.height = this.height + 1;
      let image =  document.getElementById('person1');
      image.style.width= this.weight + 'px';
      image.style.height = this.height +  'px';
      image.style.left = this.positionX +'px';
      image.style.top = this.positionY + 'px';
      
     }
     create(){
     const main = document.getElementsByClassName('main')[0];
     let image = document.createElement("img");
     image.src = 'img/man.svg';
     Person.count = Person.count + 1;
     image.id= 'person'+ Person.count;
     image.style.width= this.weight + 'px';
     image.style.height = this.height +  'px';
     image.style.left = this.positionX +'px';
     image.style.top = this.positionY + 'px';
     main.appendChild(image);
     }

}

let mainCharacter = {};

const createCharacter = ()=>{
   mainCharacter = new Person(40, 20);
   mainCharacter.create();
}
const increase =()=>{
    mainCharacter.resize();
}