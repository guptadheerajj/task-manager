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

		updateDetails(updatedInformationObj) {
			for (const [key, value] of Object.entries(updatedInformationObj)) {
				if (key === "status") continue;
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

// const task1 = createTaskObj({
// 	title: "Coding",
// 	description: "Make TODO App Using js",
// 	dueDate: "2 june",
// 	priority: "p1",
// 	project: "Code",
// });

// console.table(task1);
// task1.toggleStatus();
// console.table(task1);
// task1.updateDetails({
// 	title: "new title",
// 	date: "new Date",
// 	status: false,
// });
// console.table(task1);
