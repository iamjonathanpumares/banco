app.component('footer-banco', {
  props: ['valor'],
  template: `
  <div class="bg-dark py-3 mt-2 text-white">
    <h3>{{ texto }} - {{ valor }}</h3>
  </div>
  `,
  data() {
    return {
      texto: 'Footer de mi sitio web'
    }
  }
})