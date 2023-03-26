import MOCK_DATA from '../data/MOCK_DATA.json'
export const pedirDatos = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(MOCK_DATA)
        },500)
    })
}

export const pedirProductosPorId = (id) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(MOCK_DATA.find(prod => prod.Id === id))
        },500)
    })
}