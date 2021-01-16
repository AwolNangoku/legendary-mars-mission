import React from 'react';
import {ImageLoader, PageImage} from "./styled";

const Image = ({imageUrl}) => {
    if (imageUrl) {
        return (
            <PageImage src={imageUrl} alt='Image not available' />
        );
    }
    return (
        <ImageLoader>Loading image...</ImageLoader>
    );
};

export default Image;