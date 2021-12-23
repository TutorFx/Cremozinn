export default function ({ route, store, redirect }) {
    console.log('Servidor hospedado em:', store.getters['domain']);
}