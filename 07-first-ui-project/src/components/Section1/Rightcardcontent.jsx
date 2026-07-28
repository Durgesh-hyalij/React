// import React from 'react'


// const Rightcardcontent = (props) => {
//   return (
//     <div className="flex justify-center items-center">
//       {props.users.map(function(){
//         return 'dfdfdffdf'
//       })}



     
//     </div>
//   );
// };

// export default Rightcardcontent;








const Rightcardcontent = (props) => {
  return (
    <div className="flex justify-center items-center">
      <div className="relative w-72 h-[520px] rounded-[35px] overflow-hidden shadow-2xl">

        {/* Background Image */}
        <img
          src={props.img}
          alt="Person"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Number */}
        <div className="absolute top-5 left-5 w-12 h-12 rounded-full bg-white flex items-center justify-center font-bold text-xl">
          1
        </div>

        {/* Bottom Content */}
        <div className="absolute bottom-6 left-5 right-5 text-white">

          <p className="text-lg leading-7 font-medium">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Iure accusamus cupiditate voluptatibus mollitia alias
            tempora.
          </p>

          <div className="mt-6 flex items-center justify-between">

            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full font-semibold transition">
              Satisfied
            </button>

            <button className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-2xl transition">
              →
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Rightcardcontent;











