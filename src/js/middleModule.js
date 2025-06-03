import projectModule from "./projectModule";
import taskModule from "./taskModule";

export default (function () {
	const taskData = {
		title: "Coding",
		description: "Make TODO App Using js",
		dueDate: "2 june",
		priority: "p1",
		project: "Code",
	};
	projectModule.createProject("Code");
	const task1 = taskModule.createTaskObj(taskData);
	projectModule.pushTask(task1);
	const task2 = taskModule.createTaskObj(taskData);
	projectModule.pushTask(task2);

	const task2data = {
		title: "Coding",
		description: "Make TODO App Using js",
		dueDate: "2 june",
		priority: "p1",
		project: "defaultProject",
	};

	const task3 = taskModule.createTaskObj(task2data);
	projectModule.pushTask(task3);

	console.log(projectModule.createdProjects);
})();
