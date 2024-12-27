import data from ".//MOCK_DATA (3).json";

export const recuperarProductos = () => {
    return new Promise((resolve, reject) => {
         resolve(data)
    })
}
