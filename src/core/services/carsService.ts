import BaseService from "@/core/services/baseService";
import axios, { AxiosPromise } from 'axios'
import { Car } from "@/core/entities/car";

export class CarsService{

    //constructor() {}

    public static getAll(): AxiosPromise<Car[]> {
        return axios.get<Car[]>('http://localhost:3000/cars');
    }
}