import styled from "styled-components";

const Character = (props) => {
  //   console.log(props);

  const StyledCharacter = styled.div`
    background-color: rgba(173, 216, 230, 0.5);
    color: white;
    border-radius: 6px;
    margin-bottom: 20px;
    padding: 10px 140px 10px 15px;
    text-align: left;
    font-size: 22px;
    position: relative;
    flex: 1;
  `;
  return (
    <>
      <div className="char-container">
        <br />
        <StyledCharacter>
          <h1>{props.name}</h1>
        </StyledCharacter>
      </div>
    </>
  );
};

export default Character;
