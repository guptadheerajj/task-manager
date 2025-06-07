import projectModule from "./projectModule.js";

export default class SideBar {
	static plusSvg = `
		<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
			fill="#e8eaed">
			<path
				d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z">
			</path>
		</svg>
		`;
	static simplePlusSvg = `
		<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
			fill="#e8eaed">
			<path d="M450-450H220v-60h230v-230h60v230h230v60H510v230h-60v-230Z"></path>
		</svg>
	`;

	static arrowDownSvg = `
		<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
			fill="#e8eaed">
			<path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"></path>
		</svg>
	`;

	static inboxSvg = `
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox=" 0 0 24 24"
			aria-hidden="true">
			<path fill="" fill-rule="evenodd"
				d="M8.062 4h7.876a2 2 0 0 1 1.94 1.515l2.062 8.246q.06.24.06.486V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3.754a2 2 0 0 1 .06-.485L6.12 5.515A2 2 0 0 1 8.061 4m0 1a1 1 0 0 0-.97.758L5.03 14.004a1 1 0 0 0-.03.242V18a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.754a1 1 0 0 0-.03-.242L16.91 5.758a1 1 0 0 0-.97-.758zm6.643 10a2.75 2.75 0 0 1-5.41 0H7a.5.5 0 1 1 0-1h2.75a.5.5 0 0 1 .5.5 1.75 1.75 0 1 0 3.5 0 .5.5 0 0 1 .5-.5H17a.5.5 0 0 1 0 1z"
				clip-rule="evenodd"></path>
		</svg>
		`;
	static todaySvg = `
		<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
			fill="#8b5cf6">
			<path
				d="M360-335.38q-35.08 0-59.85-24.77-24.77-24.77-24.77-59.85t24.77-59.85q24.77-24.77 59.85-24.77t59.85 24.77q24.77 24.77 24.77 59.85t-24.77 59.85q-24.77 24.77-59.85 24.77ZM224.62-120q-27.62 0-46.12-18.5Q160-157 160-184.62v-510.76q0-27.62 18.5-46.12Q197-760 224.62-760h70.76v-89.23h43.08V-760h286.16v-89.23h40V-760h70.76q27.62 0 46.12 18.5Q800-723 800-695.38v510.76q0 27.62-18.5 46.12Q763-120 735.38-120H224.62Zm0-40h510.76q9.24 0 16.93-7.69 7.69-7.69 7.69-16.93v-350.76H200v350.76q0 9.24 7.69 16.93 7.69 7.69 16.93 7.69Z">
			</path>
		</svg>
		`;
	static tomorrowSvg = `
		<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
			fill="#e8eaed">
			<path
				d="M680.36-132.31q-45.02 0-76.54-31.51-31.51-31.52-31.51-76.54 0-45.02 31.51-76.18 31.52-31.15 76.54-31.15 45.02 0 76.18 31.15 31.15 31.16 31.15 76.18 0 45.02-31.15 76.54-31.16 31.51-76.18 31.51Zm-18.05-264.61v-70.77h35.38v70.77h-35.38Zm0 384.61v-70.77h35.38v70.77h-35.38Zm141.92-326.84-25.31-25.08L829-414.31 854.08-389l-49.85 49.85ZM531.77-66.69 506.69-91l50.08-50.85 25.08 25.08-50.08 50.08Zm305.15-155.62v-35.38h70.77v35.38h-70.77Zm-384.61 0v-35.38h70.77v35.38h-70.77ZM829-66.69l-49.85-50.08 25.08-25.08L854.31-92 829-66.69ZM556.54-338.92 506.69-389l25.08-25.08 50.08 49.85-25.31 25.31ZM224.62-120q-27.62 0-46.12-18.5Q160-157 160-184.62v-510.76q0-27.62 18.5-46.12Q197-760 224.62-760h70.76v-89.23h43.08V-760h286.16v-89.23h40V-760h70.76q27.62 0 46.12 18.5Q800-723 800-695.38v160H200v350.76q0 9.24 7.69 16.93 7.69 7.69 16.93 7.69h160v40h-160Z">
			</path>
		</svg>
		`;
	static weekSvg = `
		<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
			fill="#e8eaed">
			<path
				d="M320-404.62q-12.38 0-21.58-9.19-9.19-9.19-9.19-21.57 0-12.39 9.19-21.58 9.2-9.19 21.58-9.19 12.38 0 21.58 9.19 9.19 9.19 9.19 21.58 0 12.38-9.19 21.57-9.2 9.19-21.58 9.19Zm160 0q-12.38 0-21.58-9.19-9.19-9.19-9.19-21.57 0-12.39 9.19-21.58 9.2-9.19 21.58-9.19 12.38 0 21.58 9.19 9.19 9.19 9.19 21.58 0 12.38-9.19 21.57-9.2 9.19-21.58 9.19Zm160 0q-12.38 0-21.58-9.19-9.19-9.19-9.19-21.57 0-12.39 9.19-21.58 9.2-9.19 21.58-9.19 12.38 0 21.58 9.19 9.19 9.19 9.19 21.58 0 12.38-9.19 21.57-9.2 9.19-21.58 9.19ZM224.62-120q-27.62 0-46.12-18.5Q160-157 160-184.62v-510.76q0-27.62 18.5-46.12Q197-760 224.62-760h70.76v-89.23h43.08V-760h286.16v-89.23h40V-760h70.76q27.62 0 46.12 18.5Q800-723 800-695.38v510.76q0 27.62-18.5 46.12Q763-120 735.38-120H224.62Zm0-40h510.76q9.24 0 16.93-7.69 7.69-7.69 7.69-16.93v-350.76H200v350.76q0 9.24 7.69 16.93 7.69 7.69 16.93 7.69Z">
			</path>
		</svg>
		`;
	static allSvg = `
		<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
			fill="#e8eaed">
			<path
				d="M410-120v-238L204-239l-70-121 206-120-206-119 70-121 206 119v-239h140v239l206-119 70 121-206 119 206 120-70 121-206-119v238H410Z">
			</path>
		</svg>
		`;
	static completedSvg = `
		<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
			fill="#c4b5fd">
			<path
				d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-18-2-36t-6-35l65-65q11 32 17 66t6 70q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-56-216L254-466l56-56 114 114 400-401 56 56-456 457Z" />
		</svg>
		`;

	static todoLogoSvg = `
	<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
		<path fill="#185abd"
			d="M24.48,29.316l-9.505,9.505L1.588,25.434c-0.784-0.784-0.784-2.054,0-2.838l6.667-6.667	c0.784-0.784,2.054-0.784,2.838,0L24.48,29.316z">
		</path>
		<linearGradient id="5qKAcydctVb3hkGT27jhwa_HpPqCqynotVp_gr1" x1="14.572" x2="43.188" y1="38.199"
			y2="9.583" gradientUnits="userSpaceOnUse">
			<stop offset="0" stop-color="#4191fd"></stop>
			<stop offset="1" stop-color="#55acfd"></stop>
		</linearGradient>
		<path fill="url(#5qKAcydctVb3hkGT27jhwa_HpPqCqynotVp_gr1)"
			d="M17.797,41.642l-6.667-6.667c-0.784-0.784-0.784-2.054,0-2.838L36.907,6.358	c0.784-0.784,2.054-0.784,2.838,0l6.667,6.667c0.784,0.784,0.784,2.054,0,2.838L20.634,41.642	C19.851,42.425,18.58,42.425,17.797,41.642z">
		</path>
	</svg>
	`;

	static settingSvg = `
	<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
		fill="#e8eaed">
		<path
			d="m387.69-100-15.23-121.85q-16.07-5.38-32.96-15.07-16.88-9.7-30.19-20.77L196.46-210l-92.3-160 97.61-73.77q-1.38-8.92-1.96-17.92-.58-9-.58-17.93 0-8.53.58-17.34t1.96-19.27L104.16-590l92.3-159.23 112.46 47.31q14.47-11.46 30.89-20.96t32.27-15.27L387.69-860h184.62l15.23 122.23q18 6.54 32.57 15.27 14.58 8.73 29.43 20.58l114-47.31L855.84-590l-99.15 74.92q2.15 9.69 2.35 18.12.19 8.42.19 16.96 0 8.15-.39 16.58-.38 8.42-2.76 19.27L854.46-370l-92.31 160-112.61-48.08q-14.85 11.85-30.31 20.96-15.46 9.12-31.69 14.89L572.31-100H387.69ZM440-160h78.62L533-267.15q30.62-8 55.96-22.73 25.35-14.74 48.89-37.89L737.23-286l39.39-68-86.77-65.38q5-15.54 6.8-30.47 1.81-14.92 1.81-30.15 0-15.62-1.81-30.15-1.8-14.54-6.8-29.7L777.38-606 738-674l-100.54 42.38q-20.08-21.46-48.11-37.92-28.04-16.46-56.73-23.31L520-800h-79.38l-13.24 106.77q-30.61 7.23-56.53 22.15-25.93 14.93-49.47 38.46L222-674l-39.38 68L269-541.62q-5 14.24-7 29.62t-2 32.38q0 15.62 2 30.62 2 15 6.62 29.62l-86 65.38L222-286l99-42q22.77 23.38 48.69 38.31 25.93 14.92 57.31 22.92L440-160Zm40.46-200q49.92 0 84.96-35.04 35.04-35.04 35.04-84.96 0-49.92-35.04-84.96Q530.38-600 480.46-600q-50.54 0-85.27 35.04T360.46-480q0 49.92 34.73 84.96Q429.92-360 480.46-360ZM480-480Z">
		</path>
	</svg>
	`;

	static sideBarSvg = `
	<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
		fill="#e8eaed">
		<path
			d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm120-80v-560H200v560h120Zm80 0h360v-560H400v560Zm-80 0H200h120Z">
		</path>
	</svg>
	`;

	static skipSoundForNextClick = false;

	constructor() {
		this.renderSideBar();
		this.bindEvents();
		this.fireClickOnRandomTaskTab();
	}

	fireClickOnRandomTaskTab() {
		const randomTaskTab = document.querySelector(
			"[data-tab-name = 'Random Todos']"
		);
		SideBar.skipSoundForNextClick = true;
		randomTaskTab.click();
	}

	createButtonElement({ svgCode, spanText, spanClasses }) {
		const button = document.createElement("button");
		button.classList.add("side-row");
		button.setAttribute("data-tab-name", spanText);
		if (!(spanText === "Add Task")) {
			button.classList.add("tab");
			button.setAttribute("data-tab", "");
		}
		button.insertAdjacentHTML("afterbegin", svgCode);

		const span = document.createElement("span");
		span.classList.add(...spanClasses);
		span.textContent = spanText;

		button.append(span);
		return button;
	}

	createSideTop() {
		const sideTop = document.createElement("div");
		sideTop.classList.add("side-top");

		const sideTopLeft = document.createElement("div");
		sideTopLeft.classList.add("side-top-left");
		sideTopLeft.insertAdjacentHTML("afterbegin", SideBar.todoLogoSvg);

		const span = document.createElement("div");
		span.classList.add("top2px");
		span.textContent = "TASK";

		sideTopLeft.append(span);

		const sideTopRight = document.createElement("div");
		sideTopRight.classList.add("side-top-right");
		sideTopRight.insertAdjacentHTML("beforeend", SideBar.settingSvg);
		sideTopRight.insertAdjacentHTML("beforeend", SideBar.sideBarSvg);

		sideTop.append(sideTopLeft, sideTopRight);

		return sideTop;
	}

	createSideMiddle() {
		const sideMiddle = document.createElement("div");
		sideMiddle.classList.add("side-middle");

		const buttonArray = [];

		const buttonObjects = {
			addTask: {
				svgCode: SideBar.plusSvg,
				spanText: "Add Task",
				spanClasses: ["top2px"],
			},
			randomTodo: {
				svgCode: SideBar.inboxSvg,
				spanText: "Random Todos",
				spanClasses: ["top2px"],
			},
			today: {
				svgCode: SideBar.todaySvg,
				spanText: "Today",
				spanClasses: ["top2px"],
			},
			tomorrow: {
				svgCode: SideBar.tomorrowSvg,
				spanText: "Tomorrow",
				spanClasses: ["top2px"],
			},
			week: {
				svgCode: SideBar.weekSvg,
				spanText: "Week",
				spanClasses: ["top2px"],
			},
			all: {
				svgCode: SideBar.allSvg,
				spanText: "All",
				spanClasses: ["top2px"],
			},
			completedTask: {
				svgCode: SideBar.completedSvg,
				spanText: "Completed Tasks",
				spanClasses: ["top2px"],
			},
		};

		for (const element of Object.values(buttonObjects)) {
			buttonArray.push(this.createButtonElement(element));
		}

		sideMiddle.append(...buttonArray);
		return sideMiddle;
	}

	createProjectNode(projectName) {
		const button = document.createElement("button");
		button.classList.add("side-row", "tab", "top2px");
		button.setAttribute("data-tab", "");
		button.setAttribute("data-tab-name", projectName);
		button.textContent = "# " + projectName;

		return button;
	}

	createSideBottom() {
		const sideBottom = document.createElement("div");
		sideBottom.classList.add("side-bottom");

		const sideBottomHead = document.createElement("div");
		sideBottomHead.classList.add("side-bottom-head");

		const sideBottomLeft = document.createElement("div");
		sideBottomLeft.classList.add("side-bottom-left");
		sideBottomLeft.textContent = "My Projects";

		const sideBottomlRight = document.createElement("div");
		sideBottomlRight.classList.add("side-bottom-right");
		sideBottomlRight.insertAdjacentHTML("beforeend", SideBar.simplePlusSvg);
		sideBottomlRight.insertAdjacentHTML("beforeend", SideBar.arrowDownSvg);

		sideBottomHead.append(sideBottomLeft, sideBottomlRight);

		// project list
		const projectList = document.createElement("div");
		projectList.classList.add("projects");

		const allProjectsName = projectModule.getAllProjectNames();
		// remove defaultProject
		allProjectsName.splice(allProjectsName.indexOf("defaultProject"), 1);

		const projecctNodeArray = [];
		for (const element of allProjectsName) {
			projecctNodeArray.push(this.createProjectNode(element));
		}
		projectList.append(...projecctNodeArray);

		sideBottom.append(sideBottomHead, projectList);
		return sideBottom;
	}

	renderSideBar() {
		const sideBar = document.querySelector(".side-bar");

		const sideTop = this.createSideTop();
		const sideMiddle = this.createSideMiddle();
		const line = document.createElement("hr");
		const sideBottom = this.createSideBottom();

		sideBar.append(sideTop, sideMiddle, line, sideBottom);
	}

	static playSound() {
		const doubleClick = document.querySelector(".double-click");
		doubleClick.play();
	}

	switchTabs(event) {
		const target = event.target.closest("[data-tab]");
		if (!target) {
			return;
		}
		// remove current active tab
		const allTabs = document.querySelectorAll("[data-tab");
		allTabs.forEach((tab) => {
			tab.classList.remove("active-tab");
		});

		if (!SideBar.skipSoundForNextClick) {
			SideBar.playSound();
		} else {
			SideBar.skipSoundForNextClick = false;
		}

		target.classList.add("active-tab");
	}

	bindEvents() {
		const sideBar = document.querySelector(".side-bar");
		sideBar.addEventListener("click", this.switchTabs);
	}
}
