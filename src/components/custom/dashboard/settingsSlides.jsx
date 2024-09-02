import { useState } from "react";
import { ProductServices } from "../../../services/productServices";
import { Button } from "../button";
import { FormInput } from "../inputs";
import { cloudName, mainApi, uploadPreset } from "../../../utils/api/axios";
import axios from "axios";
import toast from "react-hot-toast";

export const BannerSlide = () => {
  return (
    <form className="flex flex-col sm:flex-row gap-5 mt-8 h-fit">
      <input
        placeholder="Billboard image"
        className="h-[200px] sm:h-full w-full sm:w-[250px] p-2 flex justify-between items-center border border-dashed bg-transparent placeholder:text-center placeholder:text-black/75 border-black/85 rounded-xl"
      />
      <div className="flex flex-col gap-3">
        <input
          className="bg-transparent border border-black/85 rounded-xl h-10 w-full sm:w-80 px-2 placeholder:text-sm placeholder:text-black/75"
          placeholder="Name"
        />
        <textarea
          className="bg-transparent border border-black/85 rounded-xl h-10 w-full sm:w-80 px-2 placeholder:text-sm placeholder:text-black/75"
          placeholder="Description"
        ></textarea>
        <Button type="colored" title="Update" style="rounded-xl" />
      </div>
    </form>
  );
};

export const EditSlide = () => {
  return <>edit</>;
};

export const PostSlide = (setStore) => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  console.log(setStore)
  console.log(image);
  //submit product
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
      console.log(response);
      // Send image URL to backend
      if (response.data.secure_url) {
        const data = await mainApi.post(`/api/v1/products`,{
          name: "bata olopa",
          description: "description",
          price: 200,
        //   shopId: setStore._id,
        //   image: response.data.secure_url,
          quantity: 10
        });
        toast.success("Store Created Succefully");
        console.log(data);
        // navigate(`/admin/stores/${data._id}`)
      }
    } catch (error) {
      setError("An error occurred while creating store.");
      console.log(error)
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col py-5 gap-6">
      <div className="flex flex-col">
        <h3 className="font-semibold text-2xl">
          Upload a product under this store.
        </h3>
        <p className="">
          Upload this new product by posting it's image, name and price.
        </p>
      </div>
      <div className="px-3 py-7 flex flex-col gap-7 bg-white w-fit rounded-lg">
        <form className="flex gap-5">
          <div className="file-upload-container w-70 border border-black rounded-lg flex justify-center items-center">
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          </div>
          <div className="input-fields flex flex-col gap-3">
            <FormInput
              holder="Name"
              //  onChange={(e) => setName(e.target.value)}
            />
            <FormInput
              holder="Description"
              //  onChange={(e) => setDescription(e.target.value)}
            />
            {/* <button
              type="submit"
              disabled={image === null || loading || name === "" || description === ""}
              className={`rounded-lg p-3  ${
                loading
                  ? "bg-green-300 text-white/70 cursor-not-allowed"
                  : "bg-green-700 text-white" 
              } ${image === null || name === "" || description === "" ? "cursor-not-allowed bg-green-300 text-white/70" : ""}`} */}
            {/* > */}
            {/* {loading ? "Submitting..." : "Submit"} */}
            {/* </button> */}
          </div>
        </form>
        {/* {error && <p className="text-red-500 text-sm">{error}</p>} */}
      </div>
        <button onClick={handleSubmit}>test</button>
    </div>
  );
};
