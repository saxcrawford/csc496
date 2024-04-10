import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Seo from '../components/seo'
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgba(0, 128, 128, 0.1);
  }
`;

const ArticleContainer = styled.div`
    font-family: 'Roboto', sans-serif;
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding-bottom: 30px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #F5F5DC;
`;

const Title = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
`;

const ArticleList = styled.div`
    border-radius: 5px;
    border: 1px solid #ccc;
    max-width: 600px;
    margin: 0 auto;
    padding: 10px;
    margin-bottom: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #FFFDF3;
`;

const ArticleLink = styled(Link)`
    text-decoration: none;
`;

const ArticlesPage = ({ data }) => {
    const articles = data.Drupal.nodeArticles.edges

    return (
        <>
            <GlobalStyle />
            <ArticleContainer>
                <Title>Articles</Title>
                {articles.map(({ node }) => (
                    <ArticleList key={node.id}>
                        <ArticleLink to={node.path}>{node.title}</ArticleLink>
                    </ArticleList>
                ))}
            </ArticleContainer>
        </>
    )
}

export const query = graphql`
  query {
    Drupal {
      nodeArticles(first: 100) {
        edges {
          node {
            id
            title
            path
          }
        }
      }
    }
  }
`

export const Head = () => <Seo title="Articles" />

export default ArticlesPage