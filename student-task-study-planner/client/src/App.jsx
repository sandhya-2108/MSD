import { useCallback, useEffect, useMemo, useState } from "react";
import {
  BookOpen, CalendarDays, CheckCircle2, CircleHelp, Clock3, ClipboardList,
  LayoutDashboard, ListTodo, Plus, Search, Sparkles, Trash2, Pencil, X,
  ChevronDown, GraduationCap, Target, RefreshCw
} from "lucide-react";
import { taskApi } from "./api";

const emptyForm = {
  title: "",
  subject: "Data Structures",
  description: "",
  dueDate: "",
  priority: "Medium",
  status: "Pending"
};

const subjects = [
  "Data Structures", "DBMS", "Operating Systems", "Computer Networks",
  "Mathematics", "Aptitude", "Web Development", "Other"
];

function dateInputValue(value) {
  if (!value) return "";
  const date = new Date(value);
  const local = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 10);
}

function formatDate(value) {
  if (!value) return "No due date";
  return new Date(value).toLocaleDateString("en-IN", {
    day: "numeric", month: "short", year: "numeric"
  });
}

function isOverdue(task) {
  if (task.status === "Completed" || !task.dueDate) return false;
  const due = new Date(task.dueDate);
  due.setHours(23, 59, 59, 999);
  return due < new Date();
}

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("");
  const [activeView, setActiveView] = useState("Dashboard");
  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);

  const loadTasks = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const result = await taskApi.getAll();
      setTasks(result.data || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { loadTasks(); }, [loadTasks]);

  const stats = useMemo(() => {
    const completed = tasks.filter((task) => task.status === "Completed").length;
    const inProgress = tasks.filter((task) => task.status === "In Progress").length;
    const pending = tasks.filter((task) => task.status === "Pending").length;
    const overdue = tasks.filter(isOverdue).length;
    return {
      total: tasks.length, completed, inProgress, pending, overdue,
      percentage: tasks.length ? Math.round((completed / tasks.length) * 100) : 0
    };
  }, [tasks]);

  const visibleTasks = useMemo(() => {
    return tasks.filter((task) => {
      const text = `${task.title} ${task.subject} ${task.description || ""}`.toLowerCase();
      const matchesSearch = text.includes(search.toLowerCase());
      const matchesStatus = !statusFilter || task.status === statusFilter;
      const matchesPriority = !priorityFilter || task.priority === priorityFilter;
      const matchesSubject = !subjectFilter || task.subject === subjectFilter;
      const matchesView = activeView !== "Completed" || task.status === "Completed";
      const matchesPending = activeView !== "Pending" || task.status === "Pending";
      return matchesSearch && matchesStatus && matchesPriority && matchesSubject && matchesView && matchesPending;
    });
  }, [tasks, search, statusFilter, priorityFilter, subjectFilter, activeView]);

  function openCreateForm() {
    setEditingTask(null);
    setForm({ ...emptyForm, dueDate: dateInputValue(new Date()) });
    setShowForm(true);
    setNotice("");
  }

  function openEditForm(task) {
    setEditingTask(task);
    setForm({
      title: task.title,
      subject: task.subject,
      description: task.description || "",
      dueDate: dateInputValue(task.dueDate),
      priority: task.priority,
      status: task.status
    });
    setShowForm(true);
    setNotice("");
  }

  function closeForm() {
    setShowForm(false);
    setEditingTask(null);
    setForm(emptyForm);
  }

  function updateField(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSaving(true);
    setError("");
    setNotice("");
    try {
      if (editingTask) {
        await taskApi.update(editingTask._id, form);
        setNotice("Task updated successfully.");
      } else {
        await taskApi.create(form);
        setNotice("Task added successfully.");
      }
      closeForm();
      await loadTasks();
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  async function toggleComplete(task) {
    const nextStatus = task.status === "Completed" ? "Pending" : "Completed";
    try {
      await taskApi.update(task._id, { status: nextStatus });
      setNotice(nextStatus === "Completed" ? "Great work! Task completed." : "Task moved to Pending.");
      await loadTasks();
    } catch (err) {
      setError(err.message);
    }
  }

  async function deleteTask(task) {
    if (!window.confirm(`Delete "${task.title}"? This cannot be undone.`)) return;
    try {
      await taskApi.remove(task._id);
      setNotice("Task deleted.");
      await loadTasks();
    } catch (err) {
      setError(err.message);
    }
  }

  function chooseView(view) {
    setActiveView(view);
    setStatusFilter("");
    setPriorityFilter("");
    setSubjectFilter("");
  }

  const todayLabel = new Date().toLocaleDateString("en-IN", {
    weekday: "long", day: "numeric", month: "long", year: "numeric"
  });

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon"><GraduationCap size={25} /></div>
          <div><strong>StudyMate</strong><span>STUDENT PLANNER</span></div>
        </div>

        <div className="nav-label">WORKSPACE</div>
        <nav className="nav-list">
          <button className={`nav-item ${activeView === "Dashboard" ? "active" : ""}`} onClick={() => chooseView("Dashboard")}>
            <LayoutDashboard size={18} /> Dashboard
          </button>
          <button className={`nav-item ${activeView === "All Tasks" ? "active" : ""}`} onClick={() => chooseView("All Tasks")}>
            <ListTodo size={18} /> All tasks <span className="nav-count">{tasks.length}</span>
          </button>
          <button className={`nav-item ${activeView === "Pending" ? "active" : ""}`} onClick={() => chooseView("Pending")}>
            <Clock3 size={18} /> Pending
          </button>
          <button className={`nav-item ${activeView === "Completed" ? "active" : ""}`} onClick={() => chooseView("Completed")}>
            <CheckCircle2 size={18} /> Completed
          </button>
        </nav>

        <div className="sidebar-tip">
          <div className="tip-icon"><Sparkles size={18} /></div>
          <strong>Small steps, big progress.</strong>
          <p>Stay consistent. Your future self will thank you.</p>
        </div>
        <div className="sidebar-footer"><span className="online-dot" /> Your study space</div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div className="breadcrumb"><span>Workspace</span><span className="crumb-slash">/</span><strong>{activeView}</strong></div>
          <div className="topbar-right"><div className="avatar">S</div><div className="profile-text"><strong>Student</strong><span>Learning mode</span></div></div>
        </header>

        <div className="page-content">
          <section className="welcome-row">
            <div>
              <p className="eyebrow"><CalendarDays size={14} /> {todayLabel}</p>
              <h1>{activeView === "Dashboard" ? "Your study space" : activeView}</h1>
              <p className="subtitle">Plan your work, focus on your goals, and make every study session count.</p>
            </div>
            <button className="primary-button" onClick={openCreateForm}><Plus size={18} /> Add new task</button>
          </section>

          {notice && <div className="notice success-notice"><CheckCircle2 size={17} /> {notice}<button onClick={() => setNotice("")} aria-label="Dismiss"><X size={16}/></button></div>}
          {error && <div className="notice error-notice"><CircleHelp size={17} /> <span>{error}</span><button onClick={() => setError("")} aria-label="Dismiss"><X size={16}/></button></div>}

          <section className="stats-grid">
            <StatCard label="Total tasks" value={stats.total} note="Tasks in your planner" icon={<ClipboardList size={20}/>} tone="purple" />
            <StatCard label="In progress" value={stats.inProgress} note="Keep the momentum" icon={<Clock3 size={20}/>} tone="blue" />
            <StatCard label="Completed" value={stats.completed} note="One step forward" icon={<CheckCircle2 size={20}/>} tone="green" />
            <StatCard label="Overdue" value={stats.overdue} note="Needs your attention" icon={<CalendarDays size={20}/>} tone="orange" />
          </section>

          <section className="progress-panel">
            <div className="progress-copy">
              <div className="progress-icon"><Target size={21}/></div>
              <div><h2>Your progress</h2><p>Every completed task takes you closer to your goal.</p></div>
            </div>
            <div className="progress-right"><div className="progress-numbers"><strong>{stats.percentage}%</strong><span>{stats.completed} of {stats.total} completed</span></div><div className="progress-track"><div className="progress-fill" style={{ width: `${stats.percentage}%` }} /></div></div>
          </section>

          <section className="tasks-section">
            <div className="section-heading">
              <div><h2>{activeView === "Dashboard" ? "Your tasks" : `${activeView} tasks`}</h2><p>Keep everything organized in one place.</p></div>
              <button className="refresh-button" onClick={loadTasks} title="Refresh tasks"><RefreshCw size={16}/><span>Refresh</span></button>
            </div>

            <div className="filters">
              <label className="search-box"><Search size={17}/><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search tasks or subjects..." /></label>
              <label className="select-wrap"><select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}><option value="">All statuses</option><option>Pending</option><option>In Progress</option><option>Completed</option></select><ChevronDown size={15}/></label>
              <label className="select-wrap"><select value={priorityFilter} onChange={(e) => setPriorityFilter(e.target.value)}><option value="">All priorities</option><option>High</option><option>Medium</option><option>Low</option></select><ChevronDown size={15}/></label>
              <label className="select-wrap"><select value={subjectFilter} onChange={(e) => setSubjectFilter(e.target.value)}><option value="">All subjects</option>{subjects.map((subject) => <option key={subject}>{subject}</option>)}</select><ChevronDown size={15}/></label>
            </div>

            {loading ? (
              <div className="empty-state"><div className="empty-icon"><RefreshCw size={24}/></div><h3>Loading your tasks...</h3><p>Connecting to your planner.</p></div>
            ) : visibleTasks.length === 0 ? (
              <div className="empty-state"><div className="empty-icon"><BookOpen size={25}/></div><h3>{tasks.length ? "No tasks match these filters" : "Your planner is ready"}</h3><p>{tasks.length ? "Try changing your search or filters." : "Add your first study task and start building a consistent routine."}</p>{!tasks.length && <button className="primary-button" onClick={openCreateForm}><Plus size={17}/> Create your first task</button>}</div>
            ) : (
              <div className="task-list">
                {visibleTasks.map((task) => (
                  <article className={`task-card ${task.status === "Completed" ? "task-complete" : ""}`} key={task._id}>
                    <button className={`complete-toggle ${task.status === "Completed" ? "checked" : ""}`} onClick={() => toggleComplete(task)} title={task.status === "Completed" ? "Mark pending" : "Mark completed"} aria-label="Toggle task completion">
                      {task.status === "Completed" && <CheckCircle2 size={19}/>}
                    </button>
                    <div className="task-main">
                      <div className="task-title-line"><h3>{task.title}</h3><span className={`priority-badge priority-${task.priority.toLowerCase()}`}>{task.priority} priority</span></div>
                      {task.description && <p className="task-description">{task.description}</p>}
                      <div className="task-meta"><span className="subject-chip"><BookOpen size={13}/>{task.subject}</span><span className={isOverdue(task) ? "due-date overdue" : "due-date"}><CalendarDays size={13}/>{isOverdue(task) ? "Overdue · " : "Due "}{formatDate(task.dueDate)}</span><span className={`status-badge status-${task.status.toLowerCase().replace(" ", "-")}`}>{task.status}</span></div>
                    </div>
                    <div className="task-actions"><button onClick={() => openEditForm(task)} aria-label="Edit task" title="Edit"><Pencil size={16}/></button><button onClick={() => deleteTask(task)} aria-label="Delete task" title="Delete"><Trash2 size={16}/></button></div>
                  </article>
                ))}
              </div>
            )}
            {!loading && visibleTasks.length > 0 && <div className="list-footer">Showing <strong>{visibleTasks.length}</strong> of <strong>{tasks.length}</strong> tasks</div>}
          </section>

          <footer className="page-footer">Made for focused learning <span>•</span> StudyMate Student Planner</footer>
        </div>
      </main>

      {showForm && (
        <div className="modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) closeForm(); }}>
          <section className="task-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <div className="modal-heading"><div><span className="modal-kicker">{editingTask ? "UPDATE YOUR PLAN" : "MAKE A PLAN"}</span><h2 id="modal-title">{editingTask ? "Edit task" : "Add a new task"}</h2><p>Break your goals into manageable steps.</p></div><button className="modal-close" onClick={closeForm} aria-label="Close"><X size={20}/></button></div>
            <form onSubmit={handleSubmit} className="task-form">
              <label>Task title <span>*</span><input name="title" value={form.title} onChange={updateField} placeholder="e.g. Revise binary trees" maxLength="120" required /></label>
              <div className="form-two-columns">
                <label>Subject <span>*</span><select name="subject" value={form.subject} onChange={updateField} required>{subjects.map((subject) => <option key={subject}>{subject}</option>)}</select></label>
                <label>Due date <span>*</span><input type="date" name="dueDate" value={form.dueDate} onChange={updateField} required /></label>
              </div>
              <label>Description <textarea name="description" value={form.description} onChange={updateField} placeholder="Add notes or chapters to cover..." rows="3" maxLength="1000" /></label>
              <div className="form-two-columns">
                <label>Priority<select name="priority" value={form.priority} onChange={updateField}><option>Low</option><option>Medium</option><option>High</option></select></label>
                <label>Status<select name="status" value={form.status} onChange={updateField}><option>Pending</option><option>In Progress</option><option>Completed</option></select></label>
              </div>
              <div className="modal-actions"><button type="button" className="secondary-button" onClick={closeForm}>Cancel</button><button type="submit" className="primary-button" disabled={saving}>{saving ? "Saving..." : <>{editingTask ? "Save changes" : <><Plus size={17}/> Add task</>}</>}</button></div>
            </form>
          </section>
        </div>
      )}
    </div>
  );
}

function StatCard({ label, value, note, icon, tone }) {
  return <article className="stat-card"><div className={`stat-icon ${tone}`}>{icon}</div><div className="stat-label">{label}</div><div className="stat-value">{value}</div><div className="stat-note">{note}</div></article>;
}
