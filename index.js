var History = require('historyjs');

module.exports = {
	install: function (Vue, options) {

		var config = {
			active: true,
		};

		_.extend(config, options);

		Vue.history = function() {
			History.Adapter.bind(window,'statechange',function(){
				var State = History.getState();
			});
			return History;
		}

		Vue.prototype.$history = function() {
			return Vue.history();
		}
	},
};
