import React from 'react';
import Photo from './Photo';

const PhotoList = ({ list }) =>{
    return(
        <div>
        {
            list.map((user, i) => {
                return(
                    <Photo key={i} 
                        id={list[i].id}
                        height={list[i].height}
                        width={list[i].width}
                        author={list[i].author}
                    />
                )
            })
        }
        </div>
    )
}

export default PhotoList;