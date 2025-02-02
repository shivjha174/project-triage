var recordApp= new Vue({
  el: '#recordApp', //points back to object in html; its constraining the script in the scope of the element
  data: { //data for my application
    formPatient: {
      firstName: '',
      lastName: '',
      dob: '',
      gender: ''
    },
    patients: []
  },
  methods: {
    fetchPatients() {
      fetch('dummy.php')
      .then(response => response.json())
      .then (json => {recordApp.patients = json});
      //fetch runs asynchronously
      // Means the same as this
     //       // fetch('https://randomuser.me/api/')
     //       // .then(function(response) {return response.json()})
     //       // .then(function(json) {waitingApp.people = json});
    },
  handleCreateRecord(event) {
    // fetch(url, {method: 'post', data: this.formPatient})
    this.patients.push(this.formPatient);
    this.formPatient = {
      firstName: '',
      lastName: '',
      dob: '',
      gender: ''
    }
  },
  handleClick(event) {
    console.log(event);
  }
},
  created() {
    this.fetchPatients();
  }// a function which is envoked when the vue application is created
})
