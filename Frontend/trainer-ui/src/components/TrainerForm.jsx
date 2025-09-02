// src/components/TrainerForm.jsx
import { useState, useEffect } from "react";

export default function TrainerForm({ initialData, onSubmit, onCancel }) {
  const [form, setForm] = useState({
    name: "",
    imageUrl: "",
    email: "",
    mobile: 0,
  });

  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ name: "", imageUrl: "", email: "", mobile: 0 });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded mb-4">
      <h3 className="font-bold mb-2">{initialData ? "Edit Trainer" : "Add Trainer"}</h3>
      <div className="mb-2">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          required
          className="border px-2 py-1 mr-2"
        />
        <input
          name="imageUrl"
          value={form.imageUrl}
          onChange={handleChange}
          placeholder="Image URL"
          required
          className="border px-2 py-1"
        />
      </div>
      <div className="mb-2">
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="border px-2 py-1 w-64"
        />
      </div>
      <div className="mb-2">
        <input
          name="mobile"
          value={form.mobile}
          onChange={handleChange}
          placeholder="Mobile"
          className="border px-2 py-1 w-64"
        />
      </div>
      <div className="flex gap-2">
        <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded">
          {initialData ? "Update" : "Add"}
        </button>
        {onCancel && (
          <button type="button" onClick={onCancel} className="bg-gray-300 px-3 py-1 rounded">
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
