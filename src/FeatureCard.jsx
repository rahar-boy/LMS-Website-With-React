import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
    return (
        <div style={{ backgroundColor:'#ff6f61'}}>
            <div style={{ display: 'flex',  padding: '10px', border: '1px solid #ccc',  width: '300px',height: '100px', }}
                >
                <div style={{ fontSize: '40px', textAlign: 'center', color: '#f5f2f2', height:'50px',backgroundColor:'#969292',borderRadius: '15px' }}>{icon}

                </div>
                <div className="text">
                    <h2 style={{ fontSize: '1.5rem', margin: '10px 0' }}>{title}</h2>
                    <p style={{ fontSize: '1rem', color: '#666' }}>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;
