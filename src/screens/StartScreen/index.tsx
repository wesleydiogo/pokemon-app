import './styles.css';
import { useState } from 'react';
import pokemonLogo from '../../assets/Logo 1.png';
import { Button } from '../../components';
import { useNavigate } from 'react-router-dom'

const StartScreen = () => {
    const [disabled, setDisabled] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [gameStarted, setGameStarted] = useState<boolean>(false);

    let navigate = useNavigate();

    const handleClick = () => {
        setDisabled(true);
        setLoading(true);
        // REFATORAR EM BREVE ↓
        setTimeout(() => {
            navigate(`${process.env.PUBLIC_URL}/gameplay`);
        }, 2000)
    }

    return (
        <div className="start__container">
            <div className="start__box">
                <div className="start__logo">
                    <img src={pokemonLogo} alt="Pokemon Logo" />
                </div>
                <Button className='btn action' onClick={handleClick} disabled={disabled} >
                    {loading ? 'LOADING...' : 'START'}
                </Button>
            </div>
        </div>
    );
}
export default StartScreen;