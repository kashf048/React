import ProfilePic from "./assets/Kashf.jpeg"

function Card() {
    return(
        <div className="card">
            {/* <img src="https://via.placeholder.com/150" alt="" /> */}
            <img className="card-image" src={ ProfilePic } alt="Kashf Pic" />
            <h2 className="card-title" >Kashf Abbas</h2>
            <p className="card-text">I learn React JS on Bro Code</p>
        </div>
    );
}

export default Card