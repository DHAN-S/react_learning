import React from "react";

const Body = () => {
  let array = [
    { id: 1, name: "dhanush", age: 20, eligible :true },
    { id: 2, name: "Arun", age: 21,eligible:true },
    {
      id: 3,
      name: "pandey",
      age: 22,
      eligible:false
    },
  ];
  console.log(array[1].id);

  return (
    <>
      {
        // [1,2].map(
        //     (num)=><p>{num}</p>
        // )

        // [
        //     <p>1</p>,
        //     <p>2</p>
        // ]

        <ol type="A">
          {array.map((person) => {
            return  <li key={person.id}>
                <span> id : {person.id} </span>
                <span> name :{person.name}</span>
                <span> age :{person.age}</span>
                 {
                    person.eligible ==true ? <mark>Yes</mark>:<span>NO</span>
                 }
                 

            </li>
            
          })}
        </ol>
      }
    </>
  );
};

export default Body;
