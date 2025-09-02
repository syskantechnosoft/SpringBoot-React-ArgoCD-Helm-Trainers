// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


// src/App.jsx
import { useEffect, useState } from "react";
import {
  listTrainers,
  addTrainer,
  updateTrainer,
  deleteTrainer,
} from "./service/TrainerService";
import TrainerForm from "./components/TrainerForm";
import TrainerList from "./components/TrainersList";

function App() {
  const [trainers, setTrainers] = useState([]);
  const [editing, setEditing] = useState(null);

  const loadData = async () => {
    try {
      const data = await listTrainers();
      setTrainers(data);
    } catch (err) {
      console.error("Error fetching trainers:", err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleAdd = async (trainer) => {
    if (editing) {
      await updateTrainer(editing.id, trainer);
      setEditing(null);
    } else {
      await addTrainer(trainer);
    }
    await loadData();
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this trainer?")) {
      await deleteTrainer(id);
      await loadData();
    }
  };

  const handleEdit = (trainer) => {
    setEditing(trainer);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Trainer Management</h1>
      {/* <TrainerForm
        initialData={editing}
        onSubmit={handleAdd}
        onCancel={() => setEditing(null)}
      /> */}
      {/* <TrainerList trainers={trainers} onEdit={handleEdit} onDelete={handleDelete} /> */}
      <TrainerList />
    </div>
  );
}

export default App;
