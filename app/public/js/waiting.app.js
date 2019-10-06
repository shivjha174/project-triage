var waitingApp = new Vue({
  el: '#patientWaitingApp',
  data: {
    patients: []
  },
  methods: {
    fetchPatients() {
      fetch('api/waiting/waiting-record.php')
      .then(response => response.json())
      .then(json => { waitingApp.patients = json })
    }
  },
  created() {
    this.fetchPatients();
  }
});
