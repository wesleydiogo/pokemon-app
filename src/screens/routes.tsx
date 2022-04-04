import { Routes, Route } from 'react-router-dom';
import {
    StartScreen,
    GameScreen
} from './index';

export default () =>
    <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<StartScreen />} />
        {/* {gameStartScreened && */}
            <Route path={`${process.env.PUBLIC_URL}/gameplay`} element={<GameScreen />} />
        {/* } */}
    </Routes>