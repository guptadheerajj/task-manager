// import taskModule from "./taskModule.js";
// import projectModule from "./projectModule.js";
import middleModule from "./middleModule";
import "../css/normalize.css";
import "../css/font.css";
import "../css/style.css";
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
