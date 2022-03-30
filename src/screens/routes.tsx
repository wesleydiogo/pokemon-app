import { Routes, Route } from 'react-router-dom';
import {
    Start,
    GamePlay
} from './index';

export default () =>
    <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Start />} />
        {/* {gameStarted && */}
            <Route path={`${process.env.PUBLIC_URL}/gameplay`} element={<GamePlay />} />
        {/* } */}
    </Routes>