import './Button.css'

function Button() {


    // INLINE
    // const styles = {
    //     backgroundColor: "lightblue",
    //     color: "white",
    //     padding: "10px 20px",
    //     borderRadius: "8px",
    //     border: "none",
    //     cursor: "pointer",
    // }

    // return(
    //     <button style={styles}>
    //         Click Here
    //     </button>
    // );


    //MODULES

    let count = 0;
    //Arrow Funct.
    // const handleClick = () => console.log("OUCH!");

    const handleClick = (name) => {
        if(count<3) {
            count++;
            console.log(`${name} you clicked me ${count} time/s`);  //Must use backticks(`) not quotes(')
        }
        else {
            console.log(`stop click me!`);
        }
    };

    return(
        <button onClick={(e) => handleClick(e)} className="button">
            Click Here
        </button>
    );
}

export default Button