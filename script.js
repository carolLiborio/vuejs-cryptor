const aplicacao = new Vue({
  el: "#main",
  data: {
    txtParaCripto: "",
    txtParaDescripto: "",
    msgErro: "",
    resultadoTitulo: "",
    resultadoTexto: "",
  },
  methods: {
    criptografar: function (event) {
      event.preventDefault();
       
      if (this.txtParaCripto.length > 0) {
        //caso tenha texto para criptografar
        this.resultadoTitulo = 'Texto criptografado';
        //btoa método p/ criptografar em base64
        this.resultadoTexto = btoa(this.txtParaCripto); 
        this.msgErro = "";
      } else {
        this.resultadoTitulo = '';
        this.resultadoTexto = ''; 
        this.msgErro = " Digite um texto para criptografar"; 
      }
    },
    verificaBase64: function (texto) {
      const regex = /^([A-Za-z0-9+/])*([A-Za-z0-9+/]|[A-Za-z0-9+/]=|[A-Za-z0-9+/]==)$/;
      return regex.test(texto);
    },
    descriptografar: function (event) {
      event.preventDefault();

      //verifica se o texto é em base64
      const verificaBase64 = this.verificaBase64(this.txtParaDescripto);

      if (verificaBase64 && this.txtParaDescripto.length > 0) {
        //caso tenha texto para criptografar
        this.resultadoTitulo = 'Texto descriptografado';
        //atob método p/ descriptografar em base64
        this.resultadoTexto = atob(this.txtParaDescripto); 
        this.msgErro = "";
      } else {
        this.resultadoTitulo = '';
        this.resultadoTexto = ''; 
        this.msgErro = "Este não é um formato válido"; 
      }


    },
  },
});
