// export default function TrainerCard({ trainer }) {
//   return (
//     <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center hover:shadow-lg transition">
//       <img
//         src={trainer.imageUrl || "https://via.placeholder.com/150"}
//         alt={trainer.name}
//         className="w-24 h-24 rounded-full object-cover mb-3"
//       />
//       <h2 className="text-lg font-bold">{trainer.name}</h2>
//       <p className="text-gray-600">{trainer.email}</p>
//       <p className="text-gray-500">📞 {trainer.mobile}</p>
//     </div>
//   );
// }


// src/components/TrainerCard.jsx
export default function TrainerCard({ trainer, onEdit }) {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white flex flex-col items-center">
      <img
        src={trainer.imageUrl || "https://via.placeholder.com/150"}
        alt={trainer.name}
        className="w-24 h-24 rounded-full mb-3 object-cover"
      />
      <h2 className="text-lg font-bold">{trainer.name}</h2>
      <p className="text-gray-600">📧{trainer.email}</p>
      <p className="text-gray-600"> 📞{trainer.mobile}</p>
      <button
        onClick={onEdit}
        className="mt-3 bg-yellow-500 text-white px-3 py-1 rounded-md"
      >
        Edit
      </button>
    </div>
  );
}
