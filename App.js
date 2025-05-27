import React, { useState } from "react";
import { getContract } from "./utils/blockchain";
import QRCode from "react-qr-code";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./ProductDetail";

function Home() {
  const [form, setForm] = useState({ crop: "", farmer: "", location: "", time: "", ipfs: "" });
  const [productId, setProductId] = useState(null);
  const [status, setStatus] = useState("");
  const [qrData, setQrData] = useState("");

  const handleSubmit = async () => {
    const contract = getContract();
    const tx = await contract.addProduct(form.crop, form.farmer, form.location, form.time, form.ipfs);
    const receipt = await tx.wait();
    const id = receipt.events[0].args[0].toString();
    setProductId(id);
    setQrData(`${window.location.origin}/product/${id}`);
  };

  const handleUpdateStatus = async () => {
    const contract = getContract();
    await contract.updateStatus(productId, status);
    alert("Status updated!");
    setStatus("");
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Farm to Fork Traceability</h1>
      <input placeholder="Crop Name" onChange={e => setForm({ ...form, crop: e.target.value })} />
      <input placeholder="Farmer Name" onChange={e => setForm({ ...form, farmer: e.target.value })} />
      <input placeholder="Farm Location" onChange={e => setForm({ ...form, location: e.target.value })} />
      <input placeholder="Timestamp" onChange={e => setForm({ ...form, time: e.target.value })} />
      <input placeholder="IPFS Hash" onChange={e => setForm({ ...form, ipfs: e.target.value })} />
      <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">Add Product</button>
      {productId && (
        <div>
          <p>Product added with ID: {productId}</p>
          <input
            placeholder="Update Status"
            value={status}
            onChange={e => setStatus(e.target.value)}
          />
          <button onClick={handleUpdateStatus} className="bg-green-500 text-white px-4 py-2 rounded mt-2">Update Status</button>
        </div>
      )}
      {qrData && <QRCode value={qrData} />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
