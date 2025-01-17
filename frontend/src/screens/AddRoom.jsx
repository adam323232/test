import React, { useState } from "react";

const AddRoom = () => {
  const [name, setName] = useState("");
  const [rentperday, setRentPerDay] = useState("");
  const [maxcount, setMaxCount] = useState("");
  const [description, setDescription] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [type, setType] = useState("");
  const [imageurl1, setImageUrl1] = useState("");
  const [imageurl2, setImageUrl2] = useState("");
  const [imageurl3, setImageUrl3] = useState("");
  const [imageurl4, setImageUrl4] = useState("");
  const [imageurl5, setImageUrl5] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRoom = {
      name,
      rentperday,
      maxcount,
      description,
      phonenumber,
      type,
      imageurls: [imageurl1, imageurl2, imageurl3, imageurl4, imageurl5],
    };

    console.log(newRoom);

    try {
      const response = await fetch("http://localhost:5000/api/rooms/addroom", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRoom),
      });

      if (response.ok) {
        setSuccess("Sikeresen hozzáadva a szobát!");
        setError(null);
      } else {
        setError("Hiba történt a szoba hozzáadásakor!");
        setSuccess(null);
      }
    } catch (error) {
      setError("Hiba történt a szoba hozzáadásakor!");
      setSuccess(null);
    }
  };

  return (
    <div className="row">
      <div className="col-md-5">
        <form>
          <input
            type="text"
            className="form-control"
            placeholder="szoba neve"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            className="form-control"
            placeholder="ár egy éjszakára"
            value={rentperday}
            onChange={(e) => setRentPerDay(e.target.value)}
          />
          <input
            type="text"
            className="form-control"
            placeholder="maximális férőhely"
            value={maxcount}
            onChange={(e) => setMaxCount(e.target.value)}
          />
          <input
            type="text"
            className="form-control"
            placeholder="leírás"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            className="form-control"
            placeholder="telefonszám"
            value={phonenumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input
            type="text"
            className="form-control"
            placeholder="típus"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </form>
      </div>

      <div className="col-md-5">
        <form>
          <input
            type="text"
            className="form-control"
            placeholder="kép link 1"
            value={imageurl1}
            onChange={(e) => setImageUrl1(e.target.value)}
          />
          <input
            type="text"
            className="form-control"
            placeholder="kép link 2"
            value={imageurl2}
            onChange={(e) => setImageUrl2(e.target.value)}
          />
          <input
            type="text"
            className="form-control"
            placeholder="kép link 3"
            value={imageurl3}
            onChange={(e) => setImageUrl3(e.target.value)}
          />
          <input
            type="text"
            className="form-control"
            placeholder="kép link 4"
            value={imageurl4}
            onChange={(e) => setImageUrl4(e.target.value)}
          />
          <input
            type="text"
            className="form-control"
            placeholder="kép link 5"
            value={imageurl5}
            onChange={(e) => setImageUrl5(e.target.value)}
          />
        </form>
      </div>

      <div className="text-right">
        <button
          className="btn btn-primary mt-2"
          type="submit"
          onClick={handleSubmit}
        >
          Szoba hozzáadása
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
      </div>
    </div>
  );
};

export default AddRoom;
