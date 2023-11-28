import React from 'react';
import './compound-card.css';
import {ReactComponent as NegativeIcon} from '../../assets/remove-outline.svg';
import {ReactComponent as PositiveIcon} from '../../assets/add-outline.svg';

const CompoundCard = ({ title, chemClass, positiveAttributes, negativeAttributes }) => {
    return (
        <div className="card">
            <div className="card-header">
               <h2 className="card-title">{title}</h2>
               <h4 className="card-subtitle">{chemClass}</h4>
            </div>

            
            <div className="card-content">
                <div className="positive-attributes">
                     <PositiveIcon className="pos-icon"></PositiveIcon>
                     <p>{positiveAttributes}</p>
                </div>
                <div className="negative-attributes">
                     <NegativeIcon className="neg-icon"></NegativeIcon>
                     <p>{negativeAttributes}</p>
                </div>
            </div>
        </div>
    );
};

export default CompoundCard;
