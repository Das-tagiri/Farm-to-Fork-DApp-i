import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getContract } from "./utils/blockchain";

const ProductDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const contract = getContract();
        const result = await contract.getProduct(id);
        setData({
          crop: result[0],
          farmer: result[1],
          location: result[2],
          time: result[3],
          updates: result[4],
          ipfs: result[5],
        });
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [id]);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold">Product ID: {id}</h2>
      <p><strong>Crop:</strong> {data.crop}</p>
      <p><strong>Farmer:</strong> {data.farmer}</p>
      <p><strong>Location:</strong> {data.location}</p>
      <p><strong>Timestamp:</strong> {data.time}</p>
      <p><strong>IPFS Document:</strong> <a href={`https://ipfs.io/ipfs/${data.ipfs}`} target="_blank" rel="noopener noreferrer">View</a></p>
      <h3 className="mt-4 font-bold">Transport & Retail Status Updates</h3>
      <ul className="list-disc ml-6">
        {data.updates.map((update, index) => (
          <li key={index}>{update}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductDetail;
