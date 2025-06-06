// import taskModule from "./taskModule.js";
// import projectModule from "./projectModule.js";
import middleModule from "./middleModule";
import "../css/normalize.css";
import "../css/font.css";
import "../css/style.css";
import home from "./home.js";
import ThemeManager from "./themeManager.js";
import { da, id } from "date-fns/locale";

new ThemeManager();
home.renderSideBar();

function createDOMElement({ tagName, classes, innerText }) {
	const element = document.createElement(tagName);
	if (classes.length) {
		element.classList.add(...classes);
	}
	if (innerText) {
		element.textContent = innerText;
	}

	return element;
}

function createTaskHead(taskData) {
	const taskHead = createDOMElement({
		tagName: "div",
		classes: ["task-head"],
	});

	// task head left
	const taskHeadLeft = createDOMElement({
		tagName: "div",
		classes: ["task-head-left"],
	});

	const input = document.createElement("input");
	input.setAttribute("type", "checkbox");
	input.setAttribute("id", "status");
	input.setAttribute("status", "status");

	const title = createDOMElement({
		tagName: "div",
		classes: ["title", "top2px"],
		innerText: taskData.title,
	});

	taskHeadLeft.append(input, title);

	// task head right
	const taskHeadRight = createDOMElement({
		tagName: "div",
		classes: ["task-head-right"],
	});

	const priority = createDOMElement({
		tagName: "div",
		classes: ["priority", taskData.priority],
		innerText:
			taskData.priority[0].toUpperCase() +
			taskData.priority.slice(1).toLowerCase(),
	});

	const date = createDOMElement({
		tagName: "div",
		classes: ["date"],
		innerText: taskData.dueDate,
	});

	taskHeadRight.append(priority, date);

	// append to taskHead
	taskHead.append(taskHeadLeft, taskHeadRight);
	return taskHead;
}

function createTaskBottom() {
	const taskBottom = createDOMElement({
		tagName: "div",
		classes: ["task-bottom"],
	});

	// task options
	const taskOptions = createDOMElement({
		tagName: "div",
		classes: ["task-options"],
	});

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
	const taskProject = createDOMElement({
		tagName: "div",
		classes: ["task-project"],
	});

	// append to taskBottom
	taskBottom.append(taskOptions, taskProject);
	return taskBottom;
}

function createTask(taskData) {
	const task = createDOMElement({
		tagName: "div",
		classes: ["task"],
	});

	const taskHead = createTaskHead(taskData);

	const description = createDOMElement({
		tagName: "div",
		classes: ["description"],
		innerText: taskData.description,
	});

	const taskBottom = createTaskBottom(taskData);

	task.append(taskHead, description, taskBottom);
	return task;
}

function createLine() {
	return createDOMElement({
		tagName: "div",
		classes: ["line"],
	});
}

const taskList = document.querySelector(".task-list");
console.log(taskList);

taskList.append(
	createTask({
		title: "Coding",
		description:
			"sajdnas ij iosj oiasjio asi isdj ois aiosdjas asod asdidj siojioadj iasi dasid osj sod",
		dueDate: "2 june",
		priority: "p1",
		project: "Code",
	}),
	createLine()
);
taskList.append(
	createTask({
		title: "Coding",
		description: "Make TODO App Using js",
		dueDate: "2 june",
		priority: "p1",
		project: "Code",
	}),
	createLine()
);
// const task1 = taskModule.createTaskObj({
// 	title: "Coding",
// 	description: "Make TODO App Using js",
// 	dueDate: "2 june",
// 	priority: "p1",
// 	project: "Code",
// });
