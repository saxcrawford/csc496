import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-family: 'Roboto', sans-serif;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  background-color: #f8f9fa;
  padding: 40px;
`;

const ImageWrapper = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 5px;
`;

const LeftSide = styled.div`
  flex: 1;
  padding-right: 40px;
`;

const Title = styled.h4`
  color: #333;
  font-size: 24px;
  margin-top: 20px;
`;

const BoldParagraph = styled.p`
  color: #333;
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: center;
`;

const IngredientList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
`;

const IngredientItem = styled.li`
  margin-bottom: 10px;
  background: #e9ecef;
  padding: 10px;
  border-radius: 5px;
`;

const RecipeTitle = styled.h2`
  font-size: 32px;
  color: #333;
  margin-bottom: 20px;
`;

const PageTitle = styled.h1`
  font-size: 48px;
  color: #333;
  margin-bottom: 40px;
`;

const RecipeInstructions = styled.div`
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const IconImage = styled.img`
  height: 24px;
  margin-right: 10px;
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
  } = data;

  return (
    <Container>
      <LeftSide>
        {mediaImage?.mediaImage && (
          <div>
            <ImageWrapper>
              <Image src={mediaImage.mediaImage.url} alt="Food Image" />
            </ImageWrapper>
            <Title>Ingredients needed for the recipe</Title>
            <IngredientList>
              {ingredients?.map((ingredient, index) => (
                <IngredientItem key={index}>{ingredient}</IngredientItem>
              ))}
            </IngredientList>
          </div>
        )}
      </LeftSide>

      <div>
        <PageTitle>{title}</PageTitle>
        <BoldParagraph>
          <IconImage src="https://csc496f22demo.tldr.dev/core/profiles/demo_umami/themes/umami/images/svg/difficulty.svg" alt="Difficulty icon" />
          Difficulty: {difficulty}
        </BoldParagraph>
        <BoldParagraph>
          <IconImage src="https://csc496f22demo.tldr.dev/core/profiles/demo_umami/themes/umami/images/svg/timer.svg" alt="Cooking time icon" />
          Cooking Time: {cookingTime}
        </BoldParagraph>
        <BoldParagraph>
          <IconImage src="https://csc496f22demo.tldr.dev/core/profiles/demo_umami/themes/umami/images/svg/knife.svg" alt="Knife icon" />
          Preparation Time: {preparationTime}
        </BoldParagraph>
        <BoldParagraph>
          <IconImage src="https://csc496f22demo.tldr.dev/core/profiles/demo_umami/themes/umami/images/svg/serves.svg" alt="Serves icon" />
          Servings: {numberOfServings}
        </BoldParagraph>

        <RecipeTitle>Recipe Instruction</RecipeTitle>
        <RecipeInstructions>
            {recipeInstruction?.processed && (
              <p dangerouslySetInnerHTML={{ __html: recipeInstruction.processed }} />
            )}
        </RecipeInstructions>
      </div>
    </Container>
  );
};

export default PageTemplate;