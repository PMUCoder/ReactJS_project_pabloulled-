import { db } from './config.js'
import { addDoc, collection } from 'firebase/firestore'



let MOCK_DATA = [
{
    "Id": 1,
    "Name": "Hojas A4",
    "Description": "Resma 500 Hojas A4 90 grms",
    "Price": 1500,
    "img": "../img/hojas A4.jpg",
    "Category": "Papeleria",
    "Stock": 20
},
{
    "Id": 2,
    "Name": "Hojas El Nene",
    "Description": "Block de 24 Hojas blancas El Nene para dibujo",
    "Price": 1000,
    "img": "../img/block el nene.webp",
    "Category": "Papeleria",
    "Stock": 25
},
{
    "Id": 3,
    "Name": "Birome (Pack)",
    "Description": "Pack de 25 Biromes colo azul",
    "Price": 800,
    "img": "../img/birome.jfif",
    "Category": "Escribir",
    "Stock": 8
},
{
    "Id": 4,
    "Name": "Crayones Crayola",
    "Description": "Caja de Crayones marca Crayola x 12 unidades",
    "Price": 750,
    "img": "../img/crayones.jpg",
    "Category": "Colorear",
    "Stock": 30
},
{
    "Id": 5,
    "Name": "Boligrafo Roller",
    "Description": "Pack de 12 Boligrafos Roller con tinta borrable",
    "Price": 1500,
    "img": "../img/roller.webp",
    "Category": "Escribir",
    "Stock": 28
},
{
    "Id": 6,
    "Name": "Tempera (Pack)",
    "Description": "Pack de 10 Temperas colores basicos",
    "Price": 1100,
    "img": "../img/tempera.webp",
    "Category": "Colorear",
    "Stock": 40
}
]

const data = MOCK_DATA.map((item) => {
    delete item.Id
    return item
})

const productRef = collection (db, 'productos')

data.forEach ((item) => {
    addDoc(productRef,item)
})