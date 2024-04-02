import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Seo from '../components/seo'
import styled, {createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgba(0, 128, 128, 0.1);
  }
`;

const RecipeContainer = styled.div`
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

const RecipeList = styled.div`
    border-radius: 5px;
    border: 1px solid #ccc;
    max-width: 600px;
    margin: 0 auto;
    padding: 10px;
    margin-bottom: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #FFFDF3;
`;

const RecipeLink = styled(Link)`
    text-decoration: none;
`;

const RecipesPage = ({ data }) => {
    const recipes = data.Drupal.nodeRecipes.edges
  
    return (
        <>
            <GlobalStyle />
            <RecipeContainer>
                <Title>Recipes</Title>
                {recipes.map(({ node }) => (
                <RecipeList key={node.id}>
                    <RecipeLink to={node.path}>{node.title}</RecipeLink>
                </RecipeList>
                ))}
            </RecipeContainer>
        </>
    )
  }
  
export const query = graphql`
  query {
    Drupal {
      nodeRecipes(first: 100) {
        edges {
          node {
            id
            title
            path
            mediaImage {
              mediaImage {
                url
              }
            }
          }
        }
      }
    }
  }
`
  
export const Head = () => <Seo title="Recipes" />

export default RecipesPage