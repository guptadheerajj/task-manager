export default (function () {
	const createdProjects = {};
	createdProjects.defaultProject = {};
	const obj = {};
	obj.defaultProject = {};

	function createProject(name) {
		createdProjects[name] = {};
	}

	function pushTask(task) {
		const { project } = task;
		const { id: taskId } = task;
		// createdProjects[project].push({ ...task });

		createdProjects[project][taskId] = task;
	}

	return { createProject, pushTask, createdProjects };
})();
