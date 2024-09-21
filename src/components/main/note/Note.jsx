import styles from "./note.module.css"
const Note=() =>{
    return(
        <>
        <div className={styles.box}>
        <strong>This is the note title</strong>
        <p>This is the note content</p>
        </div>
        </>
    )
}
export default Note;