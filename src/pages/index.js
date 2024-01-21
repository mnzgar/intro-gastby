import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Layout from '../components/layout/layout';
import HeritageAsset from '../components/heritage-asset';

const pageTitle = "Listado de bienes";
const URL_BASE = 'https://demo7895686.mockable.io/api';

const IndexPage = () => {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    const fetchAssets = async () => {
      try {
        const response = await axios.get(`${URL_BASE}/listAssets`);
        setAssets(response.data.bienes);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };
    fetchAssets();
  }, []);

  return (
    <Layout pageTitle={pageTitle} page="index">
      {assets.map((asset, index) => (
        <HeritageAsset key={index} asset={asset} />
      ))}
    </Layout>
  );
};

export const Head = () => <title>{pageTitle}</title>;

export default IndexPage;
