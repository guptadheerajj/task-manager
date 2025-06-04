export default (function () {
	class Task {
		#id;
		status = false; //true -> complete, false -> incomplete
		constructor({ title, description, dueDate, priority, project }) {
			this.#id = crypto.randomUUID();
			this.title = title;
			this.description = description;
			this.dueDate = dueDate;
			this.priority = priority;
			this.project = project;
		}

		get id() {
			return this.#id;
		}

		updateTaskDetails(updatedInformationObj) {
			for (const [key, value] of Object.entries(updatedInformationObj)) {
				if (key === "status" || key === "id") continue;
				this[key] = value;
			}
		}

		toggleStatus() {
			this.status = !this.status;
		}
	}

	function createTaskObj(taskInformation) {
		return new Task(taskInformation);
	}

	return { createTaskObj };
})();
