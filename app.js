new Vue({
  el: "#app",
  data: {
    src: "https://picsum.photos/id/237/200/300",
    alt: "Lorem Picsum Image",
    link: "https://www.google.com/",
    msg: "This is a message",
    html: "<h1>This is a message</h1>",

    user: "Mostafijur",
    userAge: "18",
    allowAge: "18",
    type: "B",
    event: "Event Name",

    items: ['X','Y','Z'],
    usr: {
      name: "Jupiter",
      age: "20",
      country: "Japan"
    }

  },

  /***************All Method*************/
  methods: {
    update(){
      setTimeout(()=>{
        this.user ="Rahman"
      },2000)
    },

    updateName(){
      this.event = "Event Change";
    }


  }, // End methods





});