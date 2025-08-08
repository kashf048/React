function ProfilePic() {

    const imageUrl = './src/assets/kashf.jpeg';

    const handleClick = () => console.log("OUCH!");
    const handleClick2 = (e) => e.target.style.display = "none";

    // return(<img onClick={handleClick} src={imageUrl} alt="Profile pic" width={200}/> );
    return(<img onClick={(e) => handleClick2(e)} src={imageUrl} alt="Profile pic" width={200}/> );
}

export default ProfilePic