import styled from 'styled-components';

const mainColor = '#08bb7a';
const navBackgroundColor = '#fff';

export const CustomBackground = styled.div`
  background: ${navBackgroundColor};
  z-index: 1;
  padding: 5px;
`;

export const CustomNavbar = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    height: 55px;
    width: 55px;
  }

  ul {
    display: flex;
    align-items: center;
    list-style: none;

    li {
      padding: 0 7px;
    }

    li a {
      color: #333;
      padding: 10px;
    }

    h4 {
      color: #333;
      padding-right: 10px;
    }
  }
  .logout {
    background: ${mainColor};
    color: #f4f4f4;
    border-radius: 5px;

    &:hover {
      opacity: 0.9;
    }
  }
`;

// const uselater = css`
//   li a:hover,
//   .active {
//     background: ${mainColor};
//     color: #f4f4f4;
//     border-radius: 5px;
//   }
// `;

export const SideNav = styled.div`
  background: #f4f4f4;
  color: #333;
  margin: 3.5rem 0 0 3px;
  border-radius: 3px;
  border: 1px solid #ccc;
  overflow: hidden;
  height: 34.2vh;

  ul {
    list-style: none;

    li {
      border-bottom: 1px solid #ccc;

      &:last-child {
        border: none;
      }
    }

    li a {
      padding: 16.1px;
      display: block;
      cursor: pointer;

      &:hover {
        background: ${mainColor};
        color: #fff;
      }

      &.current {
        background: #08bb7a;
        color: #fff;
      }
    }
  }
`;

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 7.7fr;
  grid-gap: 2rem;
`;
