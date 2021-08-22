const app = Vue.createApp({
  data() {
    return {
      titulo: 'Banco',
      cantidad: 1000,
      enlace: 'https://facebook.com/jepumares',
      estado: true,
      servicios: ['transferencias', 'pagos', 'giros', 'cheques'],
      desactivar: false
    }
  },
  methods: {
    agregarSaldo() {
      this.cantidad += 100
    },
    disminuirSaldo() {
      this.cantidad -= 100
    }
  },
  computed: {
    colorCantidad() {
      return this.cantidad > 500 ? 'text-success' : 'text-danger'
    }
  }
})