import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';

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
  text-align: center;
`;

const Author = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 1.2em;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 20px;
`;

const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ArticleContent = styled.div`
  text-align: justify;
  line-height: 1.6;
  font-size: 16px;
  margin-bottom: 20px;
`;

const ArticleTemplate = ({ pageContext: { data } }) => {
  if (!data || !data.title) {
    return <p>Article is not available</p>;
  }

  const authorName = data.author?.displayName || 'Unknown';

  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>{data.title}</Title>
        <Author>Author: {authorName}</Author>
        <ArticleContainer>
          {data.mediaImage?.mediaImage && (
            <Image src={data.mediaImage.mediaImage.url} alt={data.title} />
          )}
          <ArticleContent dangerouslySetInnerHTML={{ __html: data.body.processed }} />
        </ArticleContainer>
      </Container>
    </>
  );
};

export default ArticleTemplate;