import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from  '../styles/components/Countdown.module.css';

export function Countdown() {
    const {
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown
    } = useContext(CountdownContext);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    return (
        <div>
            <div className={ styles.countdownContainer }>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                    <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>
            
            { hasFinished ? (
                <>
                <button
                disabled
                type="button"
                className={ styles.countdownButton }
                onClick={ resetCountdown }
                >
                    <p>Ciclo encerrado</p>
                    <div>
                        <div className={ styles.arrowone }></div>
                        <div className={ styles.arrowtwo }></div>
                    </div>
                </button>
                </>
            ) : (
                <>
                    { isActive ? (
                        <button
                        type="button"
                        className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                        onClick={ resetCountdown }
                        >
                            Abandonar ciclo
                        </button>
                    ) : (
                        <button
                        type="button"
                        className={ styles.countdownButton }
                        onClick={ startCountdown }
                        >
                            Iniciar ciclo
                        </button>
                    ) }
                </>
            ) }
        </div>
    );
}