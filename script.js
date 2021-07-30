/*
Bonus:
Applicare l'autoplay allo slider: ogni 3 secondi, 
cambia immagine automaticamente.
*/


//inizializziamo Vue;
const root = new Vue ({
    el: "#root",
    data: {
        //posizione di partenza;
        currentIndex: 0,
        // array di immagini 
        pictures: [
            "./img/image1.jpg",
            "./img/image2.jpg",
            "./img/image3.jpg",
            "./img/image4.jpg",
        ],
    },
    methods: {
        // metodo per ritornare active se la current index corrisponde alla posizione in cui ci troviamo
        isActive(index){
            if(this.currentIndex === index) {
                return "active"
            } return " ";
            //scritta in ternario
        // return this.currentIndex === index ? "active" : " ";
        },
        forward(){
            if (this.currentIndex === this.pictures.length - 1){
                this.currentIndex = 0;
            } else {
                this.currentIndex++;
        
            };
        },        
        backwards(){
            if (this.currentIndex === 0){
                this.currentIndex = this.pictures.length - 1;
            } else {
                this.currentIndex--;
            };
        }
        
    } 
})
    