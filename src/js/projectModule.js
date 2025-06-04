export default (function () {
	const createdProjects = {};
	createdProjects.defaultProject = [];
	const obj = {};
	obj.defaultProject = {};

	function createProject(name) {
		createdProjects[name] = [];
	}

	function pushTask(task, newProject = null) {
		const project = newProject ?? task.project;
		createdProjects[project].push(task);
	}

	function popTask(id) {
		const task = getTaskObj(id);
		const index = getTaskObjIndex(task);
		createdProjects[task.project].splice(index, 1);
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

	function updateProject(task, newProject) {
		popTask(task.id);
		pushTask(task, newProject);
	}

	function updateDetails(updatedTaskObj) {
		const task = getTaskObj(updatedTaskObj.id);
		const { project: currentProject } = task;
		const { project: newProject } = updatedTaskObj;

		if (!(currentProject === newProject)) {
			updateProject(task, newProject);
		}
		task.updateTaskDetails(updatedTaskObj);
	}

	return {
		createProject,
		pushTask,
		popTask,
		updateDetails,
		createdProjects,
	};
})();
