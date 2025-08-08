import styles from './Button/Button.module.css'
function Button() {
    const styles = {
            backgroundColor: "hsl(208, 83%, 63%)",
            color: "white",
            padding: "10px",
            fontFamily: "sans-serif",
            borderRadius: "5px",
            cursor: "pointer",
            border: "none",
    }
    return(
        // <button className={styles.button}>Click me</button> // Module mostly developer 
        // <button className="button">Click me</button> // External CSS
        <button style={styles}>Click me</button> // Inline CSS
    );
}
export default Button