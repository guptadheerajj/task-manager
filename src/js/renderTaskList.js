import renderTask from "./renderTask.js";
import projectModule from "./projectModule.js";

export default (function () {
	function renderTasks(target) {
		const taskList = document.querySelector(".task-list");
		taskList.innerHTML = "";
		if (target.dataset.project) {
			const tasksArray = projectModule.getSpecificProjectTasks(
				target.dataset.tabName
			);
			const taskElementsArray = getTaskElements(tasksArray);
			for (const element of taskElementsArray) {
				taskList.append(...element);
			}
			return;
		}
	}

	function getTaskElements(tasksArray) {
		const taskElementsArray = [];
		for (const task of tasksArray) {
			taskElementsArray.push(renderTask.createTaskElement(task));
		}
		return taskElementsArray;
	}

	return {
		renderTasks,
	};
})();
