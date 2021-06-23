import React, { Component } from "react";

export default class Databinding extends Component {
  name = "Ho Thi Nhu Y";
  //   student = {
  //     name: "Nhu Y",
  //     age: 21,
  //   };

  //   binding bang phuong thuc(ham cua lop doi tuong)
  renderMultiComponent = () => {
    const virus = {
      name: "corona",
      age: 2,
    };
  };
  renderImage = () => {
    return (
      <img
        src="https://image.thanhnien.vn/768/uploaded/tuongvivt/2021_06_16/thumb-1623831772970740725472_kvit.jpg"
        alt="corona.jpg"
      />
    );
  };

  renderInfoVirus = () => {
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
  render() {
    //   bien cua ham render k dung duoc cho ham khac
    const school = "FPT Software";
    const student = {
      name: "Nhu Y",
      age: 21,
    };
    return (
      <div>
        <h2>
          Ho ten: {this.name} - School: {school}
        </h2>
        <h2>Binding Obj</h2>
        <h3 className="text-success">
          name: {student.name} age: {student.age}
        </h3>

        <h3>Binding Function</h3>
        {this.renderImage()}

        {this.renderInfoVirus()}
      </div>
    );
  }
}
