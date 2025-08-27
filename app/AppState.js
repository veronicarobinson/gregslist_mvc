import { Car } from './models/Car.js'
import { House } from './models/House.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []

  cars = [
    new Car({
      make: 'mazda',
      model: 'miata',
      year: 1997,
      mileage: 2000,
      hasCleanTitle: true,
      price: 10000,
      condition: 'like new',
      imgUrl: 'https://images.unsplash.com/photo-1670800811909-7ca3e06fa878?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWlhdGF8ZW58MHx8MHx8fDI%3D',
      color: '#1375d9',
      horsePower: 80,
      isDrivable: true
    }),
    new Car({
      make: 'chevy',
      model: 'cobalt',
      year: 2007,
      mileage: 200000,
      hasCleanTitle: true,
      price: 5,
      condition: 'ehhh',
      imgUrl: 'https://images.unsplash.com/photo-1714875153033-8e2aabb469ae?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoZXZ5JTIwY29iYWx0fGVufDB8fDB8fHwy',
      color: '#2f7992',
      horsePower: 300,
      isDrivable: true
    }),
    new Car({
      make: 'toyota',
      model: 'supra',
      year: 1990,
      mileage: 20000,
      hasCleanTitle: false,
      price: 20000,
      condition: 'fair',
      imgUrl: 'https://images.unsplash.com/photo-1603811478698-0b1d6256f79a?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VwcmF8ZW58MHx8MHx8fDI%3D',
      color: '#dbdbdd',
      horsePower: 170,
      isDrivable: true
    }),
    new Car({
      make: 'vw',
      model: 'bug',
      year: 1987,
      mileage: 300000,
      hasCleanTitle: false,
      price: 200,
      condition: 'seen better days',
      imgUrl: 'https://images.unsplash.com/photo-1659536806369-0114c406a20d?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMzfHx2dyUyMGJ1Z3xlbnwwfHwwfHx8Mg%3D%3D',
      color: '#c43d00',
      horsePower: 3,
      isDrivable: false
    }),

  ]

  // NOTE START OF HOUSES
  houses = [
    new House({
      title: "Newly Renovated!",
      builtYear: 1974,
      bedrooms: 3,
      bathrooms: 2.5,
      sqft: 1400,
      price: 375000,
      description: "Newly renovated mid-century modern home",
      imgUrl: "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    })
  ]


}





export const AppState = createObservableProxy(new ObservableAppState())