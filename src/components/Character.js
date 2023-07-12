import styled from "styled-components";
import DropdownItem from "./DropdownItem";
// import FontAwesome, { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Character = ({ name, height, mass, hair, skin, setOpen, open }) => {
  const handleClick = () => {
    setOpen(true);
  };

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

    .dropdown-menu.active {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
      transition: var(--speed) ease;
    }

    .dropdown-menu.inactive {
      opacity: 0;
      visibility: visible;
      transform: translateY(0);
      transition: var(--speed) ease;
    }
  `;
  return (
    <>
      <div className="char-container">
        <br />
        <StyledCharacter>
          <div className="character-container">
            <div className="menu-trigger">
              <h1>{name}</h1>
              <div
                onClick={() => {
                  setOpen(!open);
                }}
              >
                🔽
              </div>
            </div>
            <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
              <ul>
                <DropdownItem text={hair} />
                <DropdownItem text={height} />
                <DropdownItem text={mass} />
                <DropdownItem text={skin} />
              </ul>
            </div>
          </div>
        </StyledCharacter>
      </div>
    </>
  );
};

export default Character;
