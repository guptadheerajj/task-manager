import projectModule from "./projectModule";
import taskModule from "./taskModule";

export default (function () {
	const taskData = {
		title: "task1",
		description: "Make TODO App Using js",
		dueDate: "2 june",
		priority: "p1",
		project: "Code",
	};

	// create Code project
	projectModule.createProject("Code");
	// console.log(projectModule.createdProjects);

	// create task1
	const task1 = taskModule.createTaskObj(taskData);
	projectModule.pushTask(task1);
	// console.log(projectModule.createdProjects);

	// task2
	taskData.project = "defaultProject";
	taskData.title = "task2";
	const task2 = taskModule.createTaskObj(taskData);
	projectModule.pushTask(task2);
	// console.log(projectModule.createdProjects);
	// task3
	taskData.project = "defaultProject";
	taskData.title = "task3";
	const task3 = taskModule.createTaskObj(taskData);
	projectModule.pushTask(task3);
	// console.log(projectModule.createdProjects);

	// create task4
	taskData.project = "Code";
	taskData.title = "Anuj";
	const task4 = taskModule.createTaskObj(taskData);
	projectModule.pushTask(task4);
	console.log(projectModule.createdProjects);

	// update details
	projectModule.updateDetails({
		id: projectModule.createdProjects.Code[1].id,
		title: "Dheeraj",
		description: "Mene update kardiya hai project",
		dueDate: "10 june",
		priority: "p3",
		project: "defaultProject",
	});

	console.log(projectModule.createdProjects);

	// create task4
	taskData.project = "Code";
	taskData.title = "Task5";
	const task5 = taskModule.createTaskObj(taskData);
	projectModule.pushTask(task5);
	console.log(projectModule.createdProjects);

	console.log("Projects: ->");
	console.log(projectModule.getAllProjectNames());
})();
