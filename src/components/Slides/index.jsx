/* eslint-disable react/prop-types */
import React from 'react';
import { ButtonRP, Container, Content, Navi, Item } from './style';
const Slides = ({ slides }) => {
  const [active, setActive] = React.useState(0);
  const [position, setPosition] = React.useState(0);

  const contentRef = React.useRef();

  React.useEffect(() => {
    const interval = setInterval(() => {
      slideNext();
    }, 3000);

    return () => clearInterval(interval);
  });

  React.useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();
    setPosition(-(width * active));
  }, [active]);

  const slidePrev = () => {
    console.log(position);
    if (active > 0) {
      setActive(active - 1);
    } else {
      setActive(2);
    }
  };

  const slideNext = () => {
    console.log(position);

    if (active < slides.length - 1) {
      setActive(active + 1);
    } else {
      setActive(0);
    }
  };
  return (
    <Container>
      <Content
        ref={contentRef}
        style={{ transform: `translateX(${position}px)` }}
      >
        {slides.map(({ id, text }) => (
          <Item key={id}>
            <h2>{text}</h2>
          </Item>
        ))}
      </Content>
      <Navi>
        <ButtonRP onClick={slidePrev}>anterior</ButtonRP>
        <ButtonRP onClick={slideNext}>proximo</ButtonRP>
      </Navi>
    </Container>
  );
};

export default Slides;
