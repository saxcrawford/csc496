import React from 'react';
import styled, {createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgba(0, 128, 128, 0.1);
  }
`;

const Container = styled.div`
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #F5F5DC;
  font-family: 'Roboto', sans-serif;
  padding: 20px;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 2px solid #808080;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const Title = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  margin-bottom: 10px;
`;

const IngredientList = styled.ul`
  margin-bottom: 20px;
`;

const IngredientItem = styled.li`
  margin-bottom: 5px;
`;

const SummaryDescription = styled.div`
  font-size: 14px;
  color: #666;
  margin-top: 5px;
`;

const ImageDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageCardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const ImageCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 15px;
  
  img {
    width: 60px;
    height: 60px;
    margin-bottom: 10px;
  }
`;

const RecipeContainer = styled.div`
  display: flex;
  margin-top: 40px;
`;

const IngredientContainer = styled.div`
  flex: 1;
  padding-right: 20px;
`;

const InstructionContainer = styled.div`
  flex: 2;
`;

const PageTemplate = ({ pageContext: { data } }) => {
  if (!data || !data.title) {
    return <p>Data is not available</p>;
  }

  const {
    title,
    mediaImage,
    difficulty,
    cookingTime,
    preparationTime,
    numberOfServings,
    ingredients,
    recipeInstruction,
    summary,
  } = data;

return (
  <>
    <GlobalStyle />
    <Container>
      <Title>{title}</Title>
      {summary && summary.processed && (
        <SummaryDescription dangerouslySetInnerHTML={{ __html: summary.processed }} />
      )}
      <ImageDescription>
        {mediaImage?.mediaImage && <Image src={mediaImage.mediaImage.url} alt="Food Image" />}
        <ImageCardContainer>
          <ImageCard>
            <img src="https://csc496f22demo.tldr.dev/core/profiles/demo_umami/themes/umami/images/svg/difficulty.svg" alt="Difficulty icon" />
            <p>Difficulty: {difficulty}</p>
          </ImageCard>
          <ImageCard>
            <img src="https://csc496f22demo.tldr.dev/core/profiles/demo_umami/themes/umami/images/svg/timer.svg" alt="Cooking time icon" />
            <p>Cooking Time: {cookingTime}</p>
          </ImageCard>
          <ImageCard>
            <img src="https://csc496f22demo.tldr.dev/core/profiles/demo_umami/themes/umami/images/svg/knife.svg" alt="Knife icon" />
            <p>Preparation Time: {preparationTime}</p>
          </ImageCard>
          <ImageCard>
            <img src="https://csc496f22demo.tldr.dev/core/profiles/demo_umami/themes/umami/images/svg/serves.svg" alt="Serves icon" />
            <p>Servings: {numberOfServings}</p>
          </ImageCard>
        </ImageCardContainer>
      </ImageDescription>
      <RecipeContainer>
        <IngredientContainer>
          <Title>Ingredients</Title>
          <IngredientList>
            {ingredients?.map((ingredient, index) => (
              <IngredientItem key={index}>{ingredient}</IngredientItem>
            ))}
          </IngredientList>
        </IngredientContainer>
        <InstructionContainer>
          <Title>Recipe Instructions</Title>
          {recipeInstruction?.processed && (
            <div dangerouslySetInnerHTML={{ __html: recipeInstruction.processed }} />
          )}
        </InstructionContainer>
      </RecipeContainer>
    </Container>
  </>
  );
}

export default PageTemplate;