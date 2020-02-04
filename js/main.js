let app = new Vue({
  el: '#app',
  data:{
    connected: false,
    pseudo: ''
  },
  methods:{
    connection(){
      if(this.pseudo.length > 0){
        this.connected = true;
        localStorage.setItem('pseudo', this.pseudo)
        setTimeout(function(){
          initMap();
        }, 200);
      }
      else{
        alert('Veuillez entrer un pseudonyme.')
      }

    }
  },
  created: function(){
    if(localStorage.getItem('pseudo')){
      this.connected = true;
      this.pseudo = localStorage.getItem('pseudo');
      setTimeout(function(){
        initMap();
      }, 200);
    }
  },
})
