class Music{
    constructor(title, singer, img, file){
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }
    getName(){
        return this.title + " - " + this.singer;
    }
}

const musicList = [
    new Music("Aşkın Olayım","Simge","1.jpg","1.mp3"),
    new Music("Yalan","Rubato","2.jpg","2.mp3"),
    new Music("Cano","Burak Bulut","3.jpg","3.mp3"),
    new Music("Ağlaya Ağlaya","Tekir","4.jpg","4.mp3")
];