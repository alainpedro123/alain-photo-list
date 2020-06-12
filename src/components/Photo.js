import React from 'react';

const Photo = ({ id, author, height, width }) => {
    return (
        <div className="photo-container">
            <img
                className="grow"
                alt="pic"
                src={`https://picsum.photos/id/${id + "/" + width + "/" + height}`}
            />
            <div>
                <h2>{author}</h2>
                <p>id:{id}</p>
            </div>
        </div>
    );
}

export default Photo;