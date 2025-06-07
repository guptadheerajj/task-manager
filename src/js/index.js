import middleModule from "./middleModule";
import "../css/normalize.css";
import "../css/font.css";
import "../css/style.css";
import ThemeManager from "./themeManager.js";
import SideBar from "./SideBar.js";
import renderTask from "./renderTask.js";

new ThemeManager();
new SideBar();

const taskList = document.querySelector(".task-list");
console.log(taskList);

taskList.append(
	...renderTask.createTaskElement({
		title: "Coding",
		description:
			"sajdnas ij iosj oiasjio asi isdj ois aiosdjas asod asdidj siojioadj iasi dasid osj sod",
		dueDate: "2 june",
		priority: "p1",
		project: "Code",
	})
);
taskList.append(
	...renderTask.createTaskElement({
		title: "Coding",
		description:
			"sajdnas ij iosj oiasjio asi isdj ois aiosdjas asod asdidj siojioadj iasi dasid osj sod",
		dueDate: "2 june",
		priority: "p1",
		project: "Code",
	})
);
taskList.append(
	...renderTask.createTaskElement({
		title: "Coding",
		description: "Make TODO App Using js",
		dueDate: "2 june",
		priority: "p1",
		project: "Code",
	})
);
