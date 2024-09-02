import React from "react";
import './TitleRelated.scss';

interface TitleRelatedProps {
}

export const TitleRelated: React.FC<TitleRelatedProps> = () => {
  return (
    <h2 className='related-products'> Produtos relacionados </h2>
  );
};

