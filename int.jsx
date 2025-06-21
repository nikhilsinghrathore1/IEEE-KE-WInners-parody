import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState([
    {
      name: "sanjay sahu",
      designation: "hr",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: "https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D",
      friends: true,
      index: 1
    },
    {
      name: "xvde",
      designation: "hwef",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: "https://images.unsplash.com/photo-1526925539332-aa3b66e35444?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D",
      friends: false,
      index: 2
    },
    {
      name: "wegh",
      designation: "hefg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing",
      img: "https://plus.unsplash.com/premium_photo-1682145730713-34bba6d3d14a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friends: true,
      index: 3
    }
  ]);

  const toggleFriendship = (index) => {
    setData((prevState) =>
      prevState.map((item) =>
        item.index === index ? { ...item, friends: !item.friends } : item
      )
    );
  };

  return (
    <div className="w-full h-screen flex items-center justify-center gap-10 text-white">
      {data.map((item) => (
        <div className="w-56 h-64 flex flex-col p-3 bg-blue-300 rounded-md" key={item.index}>
          <img src={item.img} className="w-32 h-32 m-1" alt={item.name} />
          <h3 className="text-sm">{item.name}</h3>
          <h3 className="text-xs">{item.designation}</h3>
          <h3 className="text-xs">{item.description}</h3>
          <button
            type="button"
            onClick={() => toggleFriendship(item.index)}
            className={`${
              item.friends ? "bg-red-300" : "bg-black-200"
            } w-10 rounded-full m-auto mt-3 text-white`}
          >
            {item.friends ? "remove" : "add"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default App;
