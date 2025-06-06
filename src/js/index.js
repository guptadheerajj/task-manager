// import taskModule from "./taskModule.js";
// import projectModule from "./projectModule.js";
import middleModule from "./middleModule";
import "../css/normalize.css";
import "../css/font.css";
import "../css/style.css";
import home from "./home.js";
import ThemeManager from "./themeManager.js";
import { da } from "date-fns/locale";

new ThemeManager();
home.renderSideBar();

function createTaskHead(taskData) {
	const taskHead = document.createElement("div");
	taskHead.classList.add("task-head");

	// task head left
	const taskHeadLeft = document.createElement("div");
	taskHeadLeft.classList.add("task-head-left");

	const input = document.createElement("input");
	input.setAttribute("type", "checkbox");
	input.setAttribute("id", "status");
	input.setAttribute("status", "status");

	const title = document.createElement("div");
	title.classList.add("title");
	title.classList.add("top2px");
	title.textContent = taskData.title;

	taskHeadLeft.append(input, title);

	// task head right
	const taskHeadRight = document.createElement("div");
	taskHeadRight.classList.add("task-head-right");

	const priority = document.createElement("div");
	priority.classList.add(taskData.priority);
	priority.textContent =
		taskData.priority[0].toUpperCase() +
		taskData.priority.slice(1).toLowerCase();

	const date = document.createElement("div");
	date.classList.add("date");
	date.textContent = taskData.dueDate;

	taskHeadRight.append(priority, date);

	// append to taskHead
	taskHead.append(taskHeadLeft, taskHeadRight);
	return taskHead;
}

function createTaskBottom() {
	const taskBottom = document.createElement("div");
	taskBottom.classList.add("task-bottom");

	// task options
	const taskOptions = document.createElement("div");
	taskOptions.classList.add("task-options");
	const penSvg = `
	<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
		fill="#e8eaed">
		<path
			d="M200-200h43.92l427.93-427.92-43.93-43.93L200-243.92V-200Zm-40 40v-100.77l527.23-527.77q6.15-5.48 13.57-8.47 7.43-2.99 15.49-2.99t15.62 2.54q7.55 2.54 13.94 9.15l42.69 42.93q6.61 6.38 9.04 14 2.42 7.63 2.42 15.25 0 8.13-2.74 15.56-2.74 7.42-8.72 13.57L260.77-160H160Zm600.77-556.31-44.46-44.46 44.46 44.46ZM649.5-649.5l-21.58-22.35 43.93 43.93-22.35-21.58Z">
		</path>
	</svg>
	`;
	const deleteSvg = `
	<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
		fill="#e8eaed">
		<path
			d="M304.62-160q-26.85 0-45.74-18.88Q240-197.77 240-224.62V-720h-40v-40h160v-30.77h240V-760h160v40h-40v495.38q0 27.62-18.5 46.12Q683-160 655.38-160H304.62ZM680-720H280v495.38q0 10.77 6.92 17.7 6.93 6.92 17.7 6.92h350.76q9.24 0 16.93-7.69 7.69-7.69 7.69-16.93V-720ZM392.31-280h40v-360h-40v360Zm135.38 0h40v-360h-40v360ZM280-720v520-520Z">
		</path>
	</svg>
	`;
	taskOptions.insertAdjacentHTML("beforeend", penSvg);
	taskOptions.insertAdjacentHTML("beforeend", deleteSvg);

	// task project
	const taskProject = document.createElement("div");
	taskProject.classList.add("task-project");

	// append to taskBottom
	taskBottom.append(taskOptions, taskProject);
	return taskBottom;
}

function createTask(taskData) {
	const task = document.createElement("div");
	task.classList.add("task");

	const taskHead = createTaskHead(taskData);

	const description = document.createElement("div");
	description.innerHTML = taskData.description;

	const taskBottom = createTaskBottom(taskData);

	task.append(taskHead, description, taskBottom);
	return task;
}

const taskList = document.querySelector(".task-list");
console.log(taskList);

taskList.append(
	createTask({
		title: "Coding",
		description: "Make TODO App Using js",
		dueDate: "2 june",
		priority: "p1",
		project: "Code",
	})
);
// const task1 = taskModule.createTaskObj({
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

// projectModule.createProject("College");
// console.table(projectModule.createdProjects);
// projectModule.createProject("Skills");
// console.table(projectModule.createdProjects);

// // Theme management
// class ThemeManager {
// 	constructor() {
// 		this.initTheme();
// 		this.bindEvents();
// 	}

// 	initTheme() {
// 		// Check for saved theme preference or default to light mode
// 		const savedTheme = localStorage.getItem("theme") || "light";
// 		this.setTheme(savedTheme);
// 	}

// 	setTheme(theme) {
// 		const root = document.documentElement;

// 		if (theme === "dark") {
// 			root.setAttribute("data-theme", "dark");
// 		} else {
// 			root.removeAttribute("data-theme");
// 		}

// 		// Save theme preference
// 		localStorage.setItem("theme", theme);
// 	}

// 	toggleTheme() {
// 		const root = document.documentElement;
// 		const currentTheme = root.getAttribute("data-theme");
// 		const newTheme = currentTheme === "dark" ? "light" : "dark";
// 		this.setTheme(newTheme);
// 	}

// 	bindEvents() {
// 		const themeToggle = document.getElementById("theme-toggle");
// 		if (themeToggle) {
// 			themeToggle.addEventListener("click", () => this.toggleTheme());
// 		}
// 	}
// }

// // Initialize theme manager when DOM is loaded
// document.addEventListener("DOMContentLoaded", () => {
// 	new ThemeManager();
// });
