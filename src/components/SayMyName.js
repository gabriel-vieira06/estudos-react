import styles from './SayMyName.module.css'

function SayMyName({name}){

    return(
        <div className={styles.sayMyNameContainer}>
            <p className={styles.sayMyNameContent}>Seu nome é {name}!</p>
        </div>
    )
}

export default SayMyName