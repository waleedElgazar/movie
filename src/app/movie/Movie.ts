export class Movie{
    title:string;
    rate:number;
    year:number;
    category:string;
    img:string;
    constructor(title:string,category:string,rate:number,year:number,img:string){
        this.title=title;
        this.rate=rate;
        this.img=img;
        this.category=category;
        this.year=year;
    }
}
