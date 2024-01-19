import React from 'react';
import { heritageAsset, name, img } from './heritage-asset.module.css';

import RatingStars from './rating-stars';

const HeritageAsset = ({ asset }) => {
  return (
    <div className={heritageAsset}>
      <p className={name}>{asset.nombre}</p>
      <img
        className={img}
        alt={`Imagen del bien patrimonial ${asset.nombre}`}
        src={asset.img}
      />
      <p>{asset.antecedentes}</p>
      <p>{asset.tipo.arquitectura}</p>
      <p>{asset.tipo.epoca}</p>
      <p>{asset.localizacion.lat} - {asset.localizacion.long}</p>
      <RatingStars />
    </div>
  );
};

export default HeritageAsset;
