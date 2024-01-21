import * as React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout/layout';

const pageTitle = "Número de componentes";

const FilesPage = ({ data }) => {
  return (
    <Layout pageTitle={pageTitle} page="files">
      <div>
        <ul>
          {
            data.allFile.nodes.map(node => (
              <li key={node.name}>
                {node.name}
              </li>
            ))
          }
        </ul>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export const Head = () => <title>{pageTitle}</title>;

export default FilesPage;
