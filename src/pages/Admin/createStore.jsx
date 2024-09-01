import { useState } from "react";
import axios from "axios";
import { cloudName, uploadPreset, mainApi } from "../../utils/api/axios";
import { ShopServices } from "../../services/shopServices";
import { Input } from "postcss";
import { FormInput } from "../../components/custom/inputs";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";
export default function CreateStore() {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Upload image to Cloudinary
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", uploadPreset);

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData
      );
      // Send image URL to backend
      if (response.data.secure_url) {
        const data = await ShopServices.createShop({
          name: name,
          description: description,
          billboardImage: response.data.secure_url,
        });
        toast.success("Store Created Succefully")
        navigate(`/admin/stores/${data._id}`)
      }
    } catch (error) {
      setError("An error occurred while creating store.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-5">
      <div>
        <h3 className="font-semibold text-2xl">Create Store</h3>
        <p className="">
          Create a new store by uploading the image, it's name and the
          description
        </p>
      </div>
      <div className="px-3 py-7 flex flex-col gap-7 bg-white my-16 w-fit rounded-lg">
        <form onSubmit={handleSubmit} className="flex gap-5">
          <div className="file-upload-container w-70 border border-black rounded-lg flex justify-center items-center">
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          </div>
          <div className="input-fields flex flex-col gap-3">
            <FormInput holder="Name" 
             onChange={(e) => setName(e.target.value)}
            />
            <FormInput holder="Description" 
             onChange={(e) => setDescription(e.target.value)}
             />
            <button
              type="submit"
              disabled={image === null || loading || name === "" || description === ""}
              className={`rounded-lg p-3  ${
                loading
                  ? "bg-green-300 text-white/70 cursor-not-allowed"
                  : "bg-green-700 text-white" 
              } ${image === null || name === "" || description === "" ? "cursor-not-allowed bg-green-300 text-white/70" : ""}`}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
    </div>
  );
}
