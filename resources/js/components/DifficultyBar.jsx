import React from 'react';

import {
    difficulty_container,
    difficulty_element,
    difficulty_element_inactive,
} from './DifficultyBar.module.css';

const DifficuiltyBar = (props) => {
    let { diff } = props;

    let setDifficuiltyColor = (difficulty) => {
        switch (difficulty) {
            case 1: {
                return '#5aad53';
            }
            case 2: {
                return '#5aad53';
            }
            case 3: {
                return '#b1cd4c';
            }
            case 4: {
                return '#b1cd4c';
            }
            case 5: {
                return '#fce148';
            }
            case 6: {
                return '#fce148';
            }
            case 7: {
                return '#f39451';
            }
            case 8: {
                return '#f39451';
            }
            case 9: {
                return '#f39451';
            }
            case 10: {
                return '#f39451';
            }
            default: {
                return '#000';
            }
        }
    };

    let renderScale = (difficulty) => {
        let renderArray = [];
        for (let i = 1; i <= difficulty; i++) {
            renderArray = [
                ...renderArray,
                <div
                    key={i}
                    className={difficulty_element}
                    style={{ backgroundColor: setDifficuiltyColor(difficulty) }}
                ></div>,
            ];
        }
        for (let i = difficulty + 1; i <= 10; i++) {
            renderArray = [
                ...renderArray,
                <div key={i} className={difficulty_element_inactive}></div>,
            ];
        }
        return renderArray;
    };

    return <div className={difficulty_container}>{renderScale(diff)}</div>;
};

export default DifficuiltyBar;
