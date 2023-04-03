import MOCK_DATA from '../data/MOCK_DATA.json' assert { type: 'json'}
import { db } from './config.js'
import { addDoc, collection } from 'firebase/firestore'

const data = MOCK_DATA.map((item) => {
    delete item.Id
    return item
})

const productRef = collection (db, 'productos')

data.forEach ((item) => {
    addDoc(productRef,item)
})