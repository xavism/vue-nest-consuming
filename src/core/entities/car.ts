
export class Car {
    public id?: number;
    public brand?: string;
    public model?: string;
    public power?: number;
    public year?: number;

    // contructor(o: Object) {
    //     Object.assign(this, o);
    // }

    constructor(id?: number, brand?: string, model?: string, power?: number, year?: number) {
        this.id = id;
        this.brand = brand;
        this.model = model;
        this.power = power;
        this.year = year;
    }
}