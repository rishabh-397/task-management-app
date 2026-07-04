const form = document.getElementById("task-form");
const tbody = document.getElementById("tasks-tbody");
const message = document.getElementById("form-message");

async function loadTasks() {
  const res = await fetch("/api/tasks");
  const data = await res.json();
  if (!data.success) {
    tbody.innerHTML = `<tr><td colspan="7">Could not load tasks.</td></tr>`;
    return;
  }
  renderTasks(data.tasks);
}

function renderTasks(tasks) {
  if (tasks.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7">No tasks yet.</td></tr>`;
    return;
  }
  tbody.innerHTML = tasks.map(t => `
    <tr data-id="${t.id}">
      <td>${t.id}</td>
      <td>${escapeHtml(t.emp_id)}</td>
      <td>${escapeHtml(t.employee_name)}</td>
      <td>${escapeHtml(t.task_title)}</td>
      <td>
        <span class="status-badge ${t.completed ? "completed" : "pending"}">
          ${t.completed ? "Completed" : "Not Completed"}
        </span>
      </td>
      <td>
        <button class="toggle-btn" onclick="toggleTask(${t.id}, ${t.completed})">
          Mark as ${t.completed ? "Not Completed" : "Completed"}
        </button>
      </td>
      <td>
        <button class="delete-btn" onclick="deleteTask(${t.id})">Delete</button>
      </td>
    </tr>
  `).join("");
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const emp_id = document.getElementById("emp_id").value.trim();
  const employee_name = document.getElementById("employee_name").value.trim();
  const task_title = document.getElementById("task_title").value;
  const completed = document.getElementById("completed").value;

  message.textContent = "";
  message.className = "";

  const res = await fetch("/api/tasks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ emp_id, employee_name, task_title, completed }),
  });
  const data = await res.json();

  if (data.success) {
    const statusText = completed === "true" ? "Completed" : "Not Completed";
    message.textContent = `Task submitted successfully — status: ${statusText}`;
    message.className = "success";
    form.reset();
    loadTasks();
  } else {
    message.textContent = data.message || "Something went wrong.";
    message.className = "error";
  }
});

async function toggleTask(id, currentlyCompleted) {
  const res = await fetch(`/api/tasks/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ completed: !currentlyCompleted }),
  });
  const data = await res.json();
  if (data.success) loadTasks();
}

async function deleteTask(id) {
  if (!confirm("Delete this task?")) return;
  const res = await fetch(`/api/tasks/${id}`, { method: "DELETE" });
  const data = await res.json();
  if (data.success) loadTasks();
}

loadTasks();