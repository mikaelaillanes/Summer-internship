var Model = function{
	var obs_list = [];

		this.addObserver = function(observer) {
			obs_list.push(observer);
		}
		this.removeObserver = function() {
			obs_list.splice(0, 1);	
		}

		this.notifyObservers = function(obj) {
			var i;
			for	(i = 0; i < obs_list.length; i++) {	
				obs_list[i].update(obj);
			}
	}
}