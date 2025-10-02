async function TaskPage() {
    const response = await fetch('http://localhost:3000/api/tasks',{
        cache:"no-store"
    });
    const tasks= await response.json();
  return <div>TaskPage</div>
}

export default TaskPage