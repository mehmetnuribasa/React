import './Button.css'

function Button() {
    let count = 0;

    const handleClick = (e) => e.target.textContent = "OUGH!";

    return(
        <button onDoubleClick={(e) => handleClick(e)} className="button">
            Click ME Double
        </button>
    );
}

export default Button