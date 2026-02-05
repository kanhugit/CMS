// import { useEffect, useState } from "react";
// import { api } from "../../services/api";

// export default function HeroManager() {
//   const [slides, setSlides] = useState([]);
//   const [title, setTitle] = useState("");
//   const [subtitle, setSubtitle] = useState("");
//   const [image, setImage] = useState(null);

//   const loadHero = async () => {
//     const res = await api.get("/content/hero");
//     setSlides(res.data);
//   };

//   useEffect(() => {
//     loadHero();
//   }, []);

//   const addSlide = async () => {
//     const fd = new FormData();
//     fd.append("title", title);
//     fd.append("subtitle", subtitle);
//     fd.append("image", image);

//     await api.post("/content/hero", fd);
//     setTitle("");
//     setSubtitle("");
//     setImage(null);
//     loadHero();
//   };

//   const deleteSlide = async (id) => {
//     await api.delete(`/content/hero/${id}`);
//     loadHero();
//   };

//   return (
//     <>
//       <h3>Hero Manager</h3>

//       {/* ADD */}
//       <div className="card p-3 mb-4">
//         <input
//           className="form-control mb-2"
//           placeholder="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />

//         <input
//           className="form-control mb-2"
//           placeholder="Subtitle"
//           value={subtitle}
//           onChange={(e) => setSubtitle(e.target.value)}
//         />

//         <input
//           type="file"
//           className="form-control"
//           onChange={(e) => setImage(e.target.files[0])}
//         />

//         <button className="btn btn-dark mt-3" onClick={addSlide}>
//           Add Slide
//         </button>
//       </div>

//       {/* LIST */}
//       <div className="row">
//         {slides.map((s) => (
//           <div className="col-md-4 mb-3" key={s.id}>
//             <div className="card">
//               <img
//                 src={`http://localhost:5000/uploads/${s.image}`}
//                 className="card-img-top"
//               />
//               <div className="card-body">
//                 <h6>{s.title}</h6>
//                 <p>{s.subtitle}</p>
//                 <button
//                   className="btn btn-danger btn-sm"
//                   onClick={() => deleteSlide(s.id)}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

import { useEffect, useState } from "react";
import { api } from "../../services/api";

export default function HeroManager() {
  const [slides, setSlides] = useState([]);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [image, setImage] = useState(null);
  const [editingId, setEditingId] = useState(null);

  // Fetch slides
  const loadSlides = async () => {
    const res = await api.get("/content/hero-slides");
    setSlides(res.data);
  };

  useEffect(() => {
    loadSlides();
  }, []);

  // Submit (Add / Update)
  const submit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("subtitle", subtitle);
    if (image) formData.append("image", image);

    if (editingId) {
      await api.put(`/content/hero-slides/${editingId}`, formData);
    } else {
      await api.post("/content/hero-slides", formData);
    }

    resetForm();
    loadSlides();
  };

  const resetForm = () => {
    setTitle("");
    setSubtitle("");
    setImage(null);
    setEditingId(null);
  };

  // Edit slide
  const editSlide = (slide) => {
    setTitle(slide.title);
    setSubtitle(slide.subtitle);
    setEditingId(slide.id);
  };

  // Delete slide
  const deleteSlide = async (id) => {
    if (!window.confirm("Delete this slide?")) return;
    await api.delete(`/content/hero-slides/${id}`);
    loadSlides();
  };

  return (
    <div>
      <h3 className="mb-4">Hero Slides Manager</h3>

      {/* FORM */}
      <form onSubmit={submit} className="bg-white p-4 rounded shadow mb-5">
        <h5>{editingId ? "Update Slide" : "Add New Slide"}</h5>

        <input
          className="form-control mb-3"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          className="form-control mb-3"
          placeholder="Subtitle"
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
          required
        />

        <input
          type="file"
          className="form-control mb-3"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <div className="d-flex gap-2">
          <button className="btn btn-dark">
            {editingId ? "Update Slide" : "Add Slide"}
          </button>

          {editingId && (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={resetForm}
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* SLIDES LIST */}
      <div className="row g-4">
        {slides.map((slide) => (
          <div key={slide.id} className="col-md-4">
            <div className="card shadow-sm h-100">
              <img
                src={`http://localhost:5000/uploads/${slide.image}`}
                className="card-img-top"
                style={{ height: 180, objectFit: "cover" }}
                alt={slide.title}
              />

              <div className="card-body">
                <h6>{slide.title}</h6>
                <p className="text-muted">{slide.subtitle}</p>

                <div className="d-flex gap-2">
                  <button
                    className="btn btn-sm btn-outline-primary"
                    onClick={() => editSlide(slide)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => deleteSlide(slide.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
