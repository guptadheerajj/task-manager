export default (function () {
	const createdProjects =
		JSON.parse(localStorage.getItem("createdProjects")) || {};
	function saveProjects() {
		localStorage.setItem("createdProjects", JSON.stringify(createdProjects));
	}

	if (!createdProjects.defaultProject) {
		createdProjects.defaultProject = [];
		saveProjects();
	}

	function createProject(name) {
		createdProjects[name] = [];
		saveProjects();
	}

	function pushTask(task, newProject = null) {
		const project = newProject ?? task.project;
		createdProjects[project].push(task);
		saveProjects();
	}

	function popTask(id) {
		const task = getTaskObj(id);
		const index = getTaskObjIndex(task);
		createdProjects[task.project].splice(index, 1);
		saveProjects();
	}

	function getTaskObjIndex({ id: taskId, project }) {
		return createdProjects[project].findIndex((task) => task.id === taskId);
	}

	function getTaskObj(id) {
		let taskObj = null;
		for (const [, value] of Object.entries(createdProjects)) {
			taskObj = value.find((task) => task.id === id);
			if (taskObj) {
				return taskObj;
			}
		}
	}

	function updateProjectArray(task, newProject) {
		popTask(task.id);
		pushTask(task, newProject);
	}

	function updateDetails(updatedTaskObj) {
		const task = getTaskObj(updatedTaskObj.id);
		const { project: currentProject } = task;
		const { project: newProject } = updatedTaskObj;

		if (!(currentProject === newProject)) {
			updateProjectArray(task, newProject);
		}
		task.updateTaskDetails(updatedTaskObj);
	}

	function getAllProjectNames() {
		return Object.keys(createdProjects);
	}

	return {
		createProject,
		pushTask,
		popTask,
		updateDetails,
		getAllProjectNames,
		createdProjects,
	};
})();
