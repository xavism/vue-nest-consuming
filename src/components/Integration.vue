<template>
  <div class="integration">
      <div v-if="isLoading">
          Loading...
      </div>
      <table v-else class="table">
        <thead>
            <tr>
            <th>#</th>
            <th>Brand</th>
            <th>Model</th>
            <th>Power(CV)</th>
            <th>Year</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="car in cars" :key="car.id">
                <th scope="row">{{car.id}}</th>
                <td>{{car.brand}}</td>
                <td>{{car.model}}</td>
                <td>{{car.power}}</td>
                <td>{{car.year}}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Car } from '../core/entities/car'
import { CarsService } from '../core/services/carsService'
import axios from 'axios'

@Component
export default class Integration extends Vue {
    private isLoading: boolean = true;
    private cars: Car[] = [];

    created() {
        CarsService.getAll()
        //axios.get<Car[]>('http://localhost:3000/cars')
        .then(response => {
            this.cars = response.data;
            this.isLoading = false;
        })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
