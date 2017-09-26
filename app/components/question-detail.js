import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateQuestion(question, params) {
      alert('reched');
      this.sendAction('updateQuestion', question, params)
    }
  }
});
