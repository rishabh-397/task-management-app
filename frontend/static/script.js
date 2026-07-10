const form = document.getElementById("task-form");
const tbody = document.getElementById("tasks-tbody");
const message = document.getElementById("form-message");

function showToast(msg, type = "success") {
  const existing = document.getElementById("toast");
  if (existing) existing.remove();
  const toast = document.createElement("div");
  toast.id = "toast";
  toast.className = `toast ${type}`;
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add("show"), 10);
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

function showDeleteConfirm(id) {
  const existing = document.getElementById("confirm-modal");
  if (existing) existing.remove();
  const modal = document.createElement("div");
  modal.id = "confirm-modal";
  modal.innerHTML = `
    <div class="modal-overlay">
      <div class="modal-box">
        <h3>Delete Task</h3>
        <p>Are you sure you want to delete this task? This cannot be undone.</p>
        <div class="modal-btns">
          <button class="modal-cancel" onclick="document.getElementById('confirm-modal').remove()">Cancel</button>
          <button class="modal-confirm" onclick="confirmDelete(${id})">Delete</button>
        </div>
      </div>
    </div>`;
  document.body.appendChild(modal);
}

async function confirmDelete(id) {
  document.getElementById("confirm-modal")?.remove();
  const res = await fetch(`/api/tasks/${id}`, { method: "DELETE" });
  const data = await res.json();
  if (data.success) {
    showToast("Task deleted successfully", "error");
    loadTasks();
  }
}

function updateCounters(tasks) {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const pending = total - completed;
  const counters = document.getElementById("counters");
  if (counters) {
    counters.innerHTML = `
      <div class="counter-badge total">📋 Total: ${total}</div>
      <div class="counter-badge done">✅ Completed: ${completed}</div>
      <div class="counter-badge pending">⏳ Pending: ${pending}</div>`;
  }
}

let allTasks = [];

function filterTasks() {
  const query = document.getElementById("search-input")?.value.toLowerCase() || "";
  const filtered = allTasks.filter(t =>
    t.employee_name.toLowerCase().includes(query) ||
    t.task_title.toLowerCase().includes(query) ||
    t.emp_id.toLowerCase().includes(query)
  );
  renderTasks(filtered);
}

async function loadTasks() {
  const res = await fetch("/api/tasks");
  const data = await res.json();
  if (!data.success) {
    tbody.innerHTML = `<tr><td colspan="7">Could not load tasks.</td></tr>`;
    return;
  }
  allTasks = data.tasks;
  updateCounters(allTasks);
  filterTasks();
}

function renderTasks(tasks) {
  if (tasks.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center;padding:20px;opacity:0.5;">No tasks found.</td></tr>`;
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
        <button class="delete-btn" onclick="showDeleteConfirm(${t.id})">Delete</button>
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
    const statusText = completed === "true" ? "Completed ✅" : "Not Completed ⏳";
    showToast(`Task submitted — ${statusText}`);
    form.reset();
    loadTasks();
  } else {
    showToast(data.message || "Something went wrong.", "error");
  }
});

async function toggleTask(id, currentlyCompleted) {
  const res = await fetch(`/api/tasks/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ completed: !currentlyCompleted }),
  });
  const data = await res.json();
  if (data.success) {
    showToast(`Task marked as ${!currentlyCompleted ? "Completed ✅" : "Not Completed ⏳"}`);
    loadTasks();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-input");
  if (searchInput) searchInput.addEventListener("input", filterTasks);
});

loadTasks();