// src/components/PostData.jsx

import axios from "axios";
import data from "../data/data";

const PostData = () => {
  const handleSend = async () => {
    try {
      const response = await axios.post(
        "https://reqres.in/api/workintech",
        data,
        {
          headers: {
            "x-api-key": "reqres-free-v1",
          },
        }
      );
      console.log("API cevabı:", response.data);
    } catch (err) {
      console.error("Hata:", err);
    }
  };

  return (
    <div className="mt-6 absolute top-0">
      <button
        onClick={handleSend}
        className="text-white px-4 py-2 rounded"
      >
        Veriyi API'ye Gönder
      </button>
    </div>
  );
};

export default PostData;
