import Ember from 'ember';

export default Ember.Component.extend({
		tagName: 'li',
	  classNameBindings: ['todo.isCompleted:completed', 'isEditing:editing']	,

  actions: {
    editTodo() {
      this.set('isEditing', true);
    },

    removeTodo() {
      var todo = this.get('todo');

      todo.deleteRecord();
      todo.save();
    },

    save() {
      this.set('isEditing', false);
      this.get('todo').save();
    }
  },	
});
