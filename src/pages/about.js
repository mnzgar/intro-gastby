import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout/layout';

const pageTitle = "Acerca de";

const AboutPage = () => {
  return (
    <Layout pageTitle={pageTitle} page="about">
      <div>
        <h2>Autor: Míriam Núñez García</h2>
        <h3>Fecha de creación: 19 de enero de 2024</h3>
        <p>
          Bienvenido a la práctica universitaria sobre bienes patrimoniales de La Laguna.
        </p>
        <p>
          Esta práctica tiene como objetivo explorar y presentar diversos bienes patrimoniales
          ubicados en la región de La Laguna. Nuestro enfoque incluirá su historia, arquitectura,
          importancia cultural y cualquier otro detalle relevante.
        </p>
        <p>
          A lo largo de la práctica, descubriremos la riqueza cultural y arquitectónica de La Laguna,
          destacando su patrimonio histórico. Exploraremos diferentes aspectos de estos bienes,
          desde su construcción hasta su relevancia en la actualidad.
        </p>
      </div>
      <div>
        <StaticImage
          alt="Clifford, un pitbull de color marrón rojizo, posa en un sofá y mira estoicamente a la cámara"
          src="../assets/dog.jpg"
        />
      </div>
    </Layout>
  );
};

export const Head = () => <title>{pageTitle}</title>;

export default AboutPage;
