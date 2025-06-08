import { format } from "date-fns";
import projectModule, { getAllProjectNames } from "./projectModule.js";

export default (function () {
	function createFormRow() {
		const formRow = document.createElement("div");
		formRow.classList.add("form-row");
		return formRow;
	}

	function createLabel(forValue) {
		const label = document.createElement("label");
		label.setAttribute("for", forValue);
		const capitalised = forValue[0].toUpperCase() + forValue.slice(1);
		label.textContent = capitalised + ":";

		return label;
	}

	function createDate(date) {
		const dateRow = createFormRow();

		const dateLabel = createLabel("date");
		let today = format(new Date(), "yyyy-MM-dd");

		const dateInput = document.createElement("input");
		dateInput.setAttribute("type", "date");
		dateInput.setAttribute("name", "date");
		dateInput.setAttribute("id", "date");
		dateInput.setAttribute("min", today);

		if (date) {
			today = format(date, "yyyy-MM-dd");
		}
		dateInput.setAttribute("value", today);

		dateRow.append(dateLabel, dateInput);
		return dateRow;
	}

	function createOption(value) {
		const option = document.createElement("option");
		option.setAttribute("value", value);
		option.textContent = value[0].toUpperCase() + value.slice(1);
		return option;
	}

	function createProject(project) {
		const projectRow = createFormRow();

		const projectLabel = createLabel("project");

		const projectSelection = document.createElement("select");
		projectSelection.setAttribute("id", "project");
		projectSelection.setAttribute("name", "project");

		const allProjectNamesArray = projectModule.getAllProjectNames();

		for (const projectName of allProjectNamesArray) {
			const option = createOption(projectName);
			if (project === projectName) {
				option.setAttribute("selected", "");
			}
			projectSelection.append(option);
		}

		projectRow.append(projectLabel, projectSelection);
		return projectRow;
	}

	function createPriority(priority) {
		const priorityRow = createFormRow();

		const priorityLabel = createLabel("priority");

		const prioritySelection = document.createElement("select");
		prioritySelection.setAttribute("name", "priority");
		prioritySelection.setAttribute("id", "priority");

		const lowOption = createOption("low");
		const mediumOption = createOption("medium");
		const highOption = createOption("high");

		const options = { lowOption, mediumOption, highOption };
		if (priority) {
			options[priority + "Option"].setAttribute("selected", "");
		}

		prioritySelection.append(lowOption, mediumOption, highOption);

		priorityRow.append(priorityLabel, prioritySelection);
		return priorityRow;
	}

	function createTitle(title) {
		const titleRow = createFormRow();

		const titleLabel = createLabel("title");

		const titleInput = document.createElement("input");
		titleInput.setAttribute("type", "text");
		titleInput.setAttribute("id", "title");
		titleInput.setAttribute("name", "title");
		titleInput.setAttribute("placeholder", "Task title");
		titleInput.setAttribute("maxlength", "20");
		if (title) {
			titleInput.value = title;
		}

		titleRow.append(titleLabel, titleInput);
		return titleRow;
	}

	function createDescription(description) {
		const descriptionRow = createFormRow();

		const descriptionLabel = createLabel("description");

		const descriptionTextArea = document.createElement("textarea");
		descriptionTextArea.setAttribute("id", "description");
		descriptionTextArea.setAttribute("name", "description");
		descriptionTextArea.setAttribute("placeholder", "Task Description");
		descriptionTextArea.setAttribute("autocorrect", "on");
		descriptionTextArea.setAttribute("maxlength", "100");
		if (description) {
			descriptionTextArea.value = description;
		}

		descriptionRow.append(descriptionLabel, descriptionTextArea);
		return descriptionRow;
	}

	function createButtons() {
		const buttonRow = document.createElement("div");
		buttonRow.classList.add("form-btns");

		const cancelButton = document.createElement("button");
		cancelButton.classList.add("top2px", "cancel");
		cancelButton.textContent = "Cancel";

		const submitButton = document.createElement("button");
		submitButton.classList.add("top2px", "submit");
		submitButton.setAttribute("type", "submit");
		submitButton.textContent = "Submit";

		buttonRow.append(cancelButton, submitButton);
		return buttonRow;
	}

	function createForm(taskData) {
		const form = document.createElement("form");
		form.classList.add("task-form");

		const titleRow = createTitle(taskData?.title || "");
		const descriptionRow = createDescription(taskData?.description || "");
		const dateRow = createDate(taskData?.date || "");
		const priorityRow = createPriority(taskData?.priority || "");
		const projectRow = createProject(taskData?.project || "");
		const buttonRow = createButtons();

		form.append(
			titleRow,
			descriptionRow,
			dateRow,
			priorityRow,
			projectRow,
			buttonRow
		);
		return form;
	}

	function createDialog(taskData) {
		const dialog = document.createElement("dialog");
		const form = createForm(taskData);

		dialog.append(form);
		return dialog;
	}

	function appendDialog(taskData = {}) {
		const dialog = createDialog(taskData);
		document.body.append(dialog);
	}

	function removeDialog() {
		const dialog = document.querySelector("dialog");
		dialog.remove();
	}

	return {
		appendDialog,
		removeDialog,
	};
})();
