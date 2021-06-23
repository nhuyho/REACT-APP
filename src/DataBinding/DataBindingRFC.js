import React from "react";

const school = "FPT Software";
const student1 = {
  name: "Nhu Y",
  age: 21,
};

const renderInfoVirus = () => {
  const virus = {
    id: "covid-19",
    name: "corona",
    image:
      "https://lh3.googleusercontent.com/proxy/SSEYpI4-K9i-sICZ5qZyAF8LiGCxamBUA95GX_cfc9WnDTvfG-6ZXVY-RvghIZLSZ5FLuFL8iFHFPeZ_jRwL4GT52tSZoFATBoH9RBo0ddm1sb8mzhqz7Q",
    alias: "SARS-CoV-2",
  };
  return (
    <div className="card text-left bg-primary w-50 h-50">
      <img className="card-img-top" src={virus.image} alt={virus.id} />
      <div className="card-body">
        <h4 className="card-title">{virus.name}</h4>
        <p className="card-text">{virus.alias}</p>
      </div>
    </div>
  );
};
export default function DataBindingRFC() {
  const name = "Nhu Y";
  return (
    <div>
      <h1 className="text-danger">{name}</h1>
      <h1>
        Name: {student1.name} Age: {student1.age}
      </h1>
      <h3>Info Virus</h3>
      {renderInfoVirus()}
    </div>
  );
}
