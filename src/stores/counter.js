import { ref } from 'vue';
import { defineStore } from 'pinia'

export const Travel_listStore = defineStore('Travel_list', () => {

const travel_list  = ref([
  {name: 'Hookrajong Cafe', img:'https://i.pinimg.com/564x/ed/02/7d/ed027d56a618a8a7463a075d1d0a8e85.jpg',
    ip:'api.openweathermap.org/data/2.5/forecast?lat=18.88852127095799&lon=99.01373892653918&appid=66af6261484edc25c7b1b61803d7547c'},
  {name: 'Portobello & Désiré Cafe', img:'https://i.pinimg.com/564x/37/6b/58/376b58caaa791fe2eeab996e8bbc12a2.jpg',
    ip:'api.openweathermap.org/data/2.5/forecast?lat=18.884067360988016&lon=99.01340628045365&appid=66af6261484edc25c7b1b61803d7547c'},
  {name: 'Wood Cafe', img:'https://i.pinimg.com/564x/b4/2a/bc/b42abc799c712e0ca58c02695f7839a7.jpg',
    ip:'api.openweathermap.org/data/2.5/forecast?lat=18.879198960518284&lon=99.01400969350873&appid=66af6261484edc25c7b1b61803d7547c'},
  {name: 'The Blooming Gallery', img:'https://i.pinimg.com/564x/01/df/a3/01dfa3c84a12b611a25481951e46300f.jpg',
    ip:'api.openweathermap.org/data/2.5/forecast?lat=18.88680552840249&lon=99.00700527133165&appid=66af6261484edc25c7b1b61803d7547c'},
  {name: 'The 66 Cottage', img:'https://i.pinimg.com/564x/d3/b3/10/d3b31009bb52682c8e139f9936220bae.jpg',
    ip:'api.openweathermap.org/data/2.5/forecast?lat=18.80202637792063&lon=98.99512191864117&appid=66af6261484edc25c7b1b61803d7547c'},
  {name: 'Hey! Coffee', img:'https://i.pinimg.com/564x/44/71/85/447185df0abd2531c31dd9479d7e2f69.jpg',
    ip:'api.openweathermap.org/data/2.5/forecast?lat=18.795914426649965&lon=98.96570372658144&appid=66af6261484edc25c7b1b61803d7547c'},
])

return { travel_list }
})