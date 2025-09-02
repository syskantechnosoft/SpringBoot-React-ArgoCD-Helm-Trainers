// // // // src/components/TrainerList.jsx
// // // export default function TrainerList({ trainers, onEdit, onDelete }) {
// // //   return (
// // //     <table className="border-collapse border w-full">
// // //       <thead>
// // //         <tr className="bg-gray-200">
// // //           <th className="border px-2 py-1">ID</th>
// // //           <th className="border px-2 py-1">Name</th>
// // //           <th className="border px-2 py-1">Image URL</th>
// // //           <th className="border px-2 py-1">Email</th>
// // //           <th className="border px-2 py-1">Mobile</th>
// // //           <th className="border px-2 py-1">Actions</th>
// // //         </tr>
// // //       </thead>
// // //       <tbody>
// // //         {trainers.length === 0 && (
// // //           <tr>
// // //             <td colSpan="6" className="text-center py-2">
// // //               No trainers found.
// // //             </td>
// // //           </tr>
// // //         )}
// // //         {trainers.map((t) => (
// // //           <tr key={t.id}>
// // //             <td className="border px-2 py-1">{t.id}</td>
// // //             <td className="border px-2 py-1">{t.name}</td>
// // //             <td className="border px-2 py-1">{t.imageUrl}</td>
// // //             <td className="border px-2 py-1">{t.email}</td>
// // //             <td className="border px-2 py-1">{t.mobile}</td>
// // //             <td className="border px-2 py-1">
// // //               <button
// // //                 onClick={() => onEdit(t)}
// // //                 className="bg-yellow-400 px-2 py-1 rounded mr-2"
// // //               >
// // //                 Edit
// // //               </button>
// // //               <button
// // //                 onClick={() => onDelete(t.id)}
// // //                 className="bg-red-500 text-white px-2 py-1 rounded"
// // //               >
// // //                 Delete
// // //               </button>
// // //             </td>
// // //           </tr>
// // //         ))}
// // //       </tbody>
// // //     </table>
// // //   );
// // // }



// // import { useEffect, useState } from "react";
// // import axios from "axios";
// // import TrainerCard from "./TrainerCard";

// // export default function TrainerList() {
// //   const [trainers, setTrainers] = useState([]);
// //   const [sortBy, setSortBy] = useState("name");

// //   useEffect(() => {
// //     axios.get("http://localhost:8080/api/v1/trainers")
// //       .then(res => setTrainers(res.data))
// //       .catch(err => console.error(err));
// //   }, []);

// //   const sortedTrainers = [...trainers].sort((a, b) => {
// //     if (sortBy === "name") return a.name.localeCompare(b.name);
// //     if (sortBy === "email") return a.email.localeCompare(b.email);
// //     if (sortBy === "mobile") return a.mobile.localeCompare(b.mobile);
// //     return 0;
// //   });

// //   return (
// //     <div className="p-6">
// //       <div className="flex justify-between items-center mb-4">
// //         <h1 className="text-2xl font-bold">Trainer Directory</h1>
// //         <select
// //           value={sortBy}
// //           onChange={(e) => setSortBy(e.target.value)}
// //           className="border px-3 py-1 rounded-md"
// //         >
// //           <option value="name">Sort by Name</option>
// //           <option value="email">Sort by Email</option>
// //           <option value="mobile">Sort by Mobile</option>
// //         </select>
// //       </div>

// //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
// //         {sortedTrainers.map((trainer) => (
// //           <TrainerCard key={trainer.id} trainer={trainer} />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }


// import { useEffect, useState } from "react";
// import axios from "axios";
// import TrainerCard from "./TrainerCard";

// export default function TrainerList() {
//   const [trainers, setTrainers] = useState([]);
//   const [sortBy, setSortBy] = useState("name");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [pageSize, setPageSize] = useState(50);

//   useEffect(() => {
//     axios.get("http://localhost:8080/api/v1/trainers")
//       .then(res => setTrainers(res.data))
//       .catch(err => console.error(err));
//   }, []);

//   // Sorting
//   const sortedTrainers = [...trainers].sort((a, b) => {
//     if (sortBy === "name") return a.name.localeCompare(b.name);
//     if (sortBy === "email") return a.email.localeCompare(b.email);
//     if (sortBy === "mobile") return a.mobile.localeCompare(b.mobile);
//     return 0;
//   });

//   // Pagination
//   const totalPages = Math.ceil(sortedTrainers.length / pageSize);
//   const startIndex = (currentPage - 1) * pageSize;
//   const currentTrainers = sortedTrainers.slice(startIndex, startIndex + pageSize);

//   const handlePageChange = (page) => {
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page);
//     }
//   };

//   return (
//     <div className="p-6">
//       {/* Header */}
//       <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-3">
//         <h1 className="text-2xl font-bold">Trainer Directory</h1>

//         <div className="flex items-center gap-4">
//           <select
//             value={sortBy}
//             onChange={(e) => setSortBy(e.target.value)}
//             className="border px-3 py-1 rounded-md"
//           >
//             <option value="name">Sort by Name</option>
//             <option value="email">Sort by Email</option>
//             <option value="mobile">Sort by Mobile</option>
//           </select>

//           <select
//             value={pageSize}
//             onChange={(e) => {
//               setPageSize(Number(e.target.value));
//               setCurrentPage(1); // reset to first page
//             }}
//             className="border px-3 py-1 rounded-md"
//           >
//             <option value={50}>50 per page</option>
//             <option value={100}>100 per page</option>
//             <option value={200}>200 per page</option>
//           </select>
//         </div>
//       </div>

//       {/* Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {currentTrainers.map((trainer) => (
//           <TrainerCard key={trainer.id} trainer={trainer} />
//         ))}
//       </div>

//       {/* Pagination Controls */}
//       <div className="flex justify-center items-center mt-6 gap-2">
//         <button
//           onClick={() => handlePageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//           className="px-3 py-1 bg-gray-200 rounded-md disabled:opacity-50"
//         >
//           Prev
//         </button>

//         {[...Array(totalPages)].map((_, i) => (
//           <button
//             key={i}
//             onClick={() => handlePageChange(i + 1)}
//             className={`px-3 py-1 rounded-md ${
//               currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
//             }`}
//           >
//             {i + 1}
//           </button>
//         ))}

//         <button
//           onClick={() => handlePageChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//           className="px-3 py-1 bg-gray-200 rounded-md disabled:opacity-50"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }


// src/components/TrainerList.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import TrainerCard from "./TrainerCard";

export default function TrainerList() {
  const [trainers, setTrainers] = useState([]);
  const [sortBy, setSortBy] = useState("name");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [formVisible, setFormVisible] = useState(false);
  const [formMode, setFormMode] = useState("add"); // "add" or "edit"
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    email: "",
    mobile: "",
    imageUrl: "",
  });

  // Fetch trainers
  useEffect(() => {
    fetchTrainers();
  }, []);

  const fetchTrainers = () => {
    axios
      .get("http://localhost:8080/api/v1/trainers")
      .then((res) => {
        const normalized = (res.data || []).map((t) => ({
          ...t,
          name: (t.name ?? "").trim(),
          email: t.email ?? "",
          mobile: t.mobile == null ? "" : String(t.mobile),
          imageUrl: t.imageUrl ?? t.image_url ?? "",
        }));
        setTrainers(normalized);
      })
      .catch((err) => console.error("Failed to fetch trainers", err));
  };

  // Sort helper
  const compareByKey = (a, b, key) => {
    const va = (a && a[key]) ? String(a[key]) : "";
    const vb = (b && b[key]) ? String(b[key]) : "";
    return va.localeCompare(vb, undefined, { numeric: true, sensitivity: "base" });
  };

  const sortedTrainers = [...trainers].sort((a, b) => {
    if (sortBy === "name") return compareByKey(a, b, "name");
    if (sortBy === "email") return compareByKey(a, b, "email");
    if (sortBy === "mobile") return compareByKey(a, b, "mobile");
    return 0;
  });

  // Pagination
  const totalPages = Math.max(1, Math.ceil(sortedTrainers.length / pageSize));
  const startIndex = (currentPage - 1) * pageSize;
  const currentTrainers = sortedTrainers.slice(startIndex, startIndex + pageSize);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Handle form input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit form
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formMode === "add") {
      axios
        .post("http://localhost:8080/api/v1/trainers", formData)
        .then(() => {
          fetchTrainers();
          resetForm();
        })
        .catch((err) => console.error("Error adding trainer", err));
    } else if (formMode === "edit") {
      axios
        .put(`http://localhost:8080/api/v1/trainers/${formData.id}`, formData)
        .then(() => {
          fetchTrainers();
          resetForm();
        })
        .catch((err) => console.error("Error updating trainer", err));
    }
  };

  // Start editing
  const handleEdit = (trainer) => {
    setFormData(trainer);
    setFormMode("edit");
    setFormVisible(true);
  };

  // Reset form
  const resetForm = () => {
    setFormMode("add");
    setFormData({ id: null, name: "", email: "", mobile: "", imageUrl: "" });
    setFormVisible(false);
  };

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-3">
        <h1 className="text-2xl font-bold">Trainer Directory</h1>

        <div className="flex items-center gap-4">
          <select
            value={sortBy}
            onChange={(e) => {
              setSortBy(e.target.value);
              setCurrentPage(1);
            }}
            className="border px-3 py-1 rounded-md"
          >
            <option value="name">Sort by Name</option>
            <option value="email">Sort by Email</option>
            <option value="mobile">Sort by Mobile</option>
          </select>

          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="border px-3 py-1 rounded-md"
          >
            <option value={10}>10 per page</option>
            <option value={20}>20 per page</option>
            <option value={50}>50 per page</option>
          </select>

          <button
            onClick={() => {
              setFormMode("add");
              setFormVisible((prev) => !prev);
            }}
            className="bg-green-500 text-white px-4 py-1 rounded-md"
          >
            {formVisible && formMode === "add" ? "Cancel" : "Add Trainer"}
          </button>
        </div>
      </div>

      {/* Form */}
      {formVisible && (
        <form
          onSubmit={handleFormSubmit}
          className="mb-6 bg-gray-100 p-4 rounded-md shadow-md"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
              className="border px-3 py-2 rounded-md"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="border px-3 py-2 rounded-md"
              required
            />
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              placeholder="Mobile"
              className="border px-3 py-2 rounded-md"
              required
            />
            <input
              type="text"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleInputChange}
              placeholder="Image URL"
              className="border px-3 py-2 rounded-md"
            />
          </div>

          <div className="mt-4 flex gap-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              {formMode === "add" ? "Add Trainer" : "Update Trainer"}
            </button>
            <button
              type="button"
              onClick={resetForm}
              className="bg-gray-400 text-white px-4 py-2 rounded-md"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* Trainer Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentTrainers.map((trainer) => (
          <TrainerCard
            key={trainer.id}
            trainer={trainer}
            onEdit={() => handleEdit(trainer)}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-6 gap-2 flex-wrap">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-200 rounded-md disabled:opacity-50"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
          <button
            key={p}
            onClick={() => handlePageChange(p)}
            className={`px-3 py-1 rounded-md ${
              currentPage === p ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            {p}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-200 rounded-md disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

