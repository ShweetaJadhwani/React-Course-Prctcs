// function App(){
//     return(
//         <div>
//             This is startup.
//             <Heading/>
//         </div>

//     );
// }
//export default App;

function MyButton(){
    return(
        <button>
            I am MyButton
        </button>
    );
}


function AboutPage(){
    return(
        <>
        <h1>About</h1>
        <p>Hello there.<br/>How do you do?</p>
        </>
    );
}


function Heading(){
   let title = "This is heading text";
   return(
       <h2>{title}</h2>
   );
}


export default function MyApp(){
  return(
      <div className="Heading" id="Heading">
          <h1>Welcome to my app</h1>
          <MyButton/>
      </div>

  );

}