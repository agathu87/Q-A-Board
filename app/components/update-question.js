import Ember from 'ember';

export default Ember.Component.extend({
  showUpdateQuestion: false,
  actions: {
    showUpdateQuestion() {
      this.set('showUpdateQuestion', true)
    },
    hideUpdateQuestion() {
      this.set('showUpdateQuestion', false),
        this.set('actualQuestion', '')
    },
    updateQuestion() {
      var question = this.get('question');
      var params = {
        actualQuestion: this.get('actualQuestion'),
      };
      this.sendAction('updateQuestion1', question, params),
        this.set('showUpdateQuestion', false)
    }
  }
});
