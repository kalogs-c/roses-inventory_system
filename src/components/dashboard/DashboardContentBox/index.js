import styled from "styled-components";

const DashboardContentBox = styled.main`
  height: 100%;
  .sidebar {
    width: 230px;
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    background-color: #0098a9;
    box-shadow: 1px 0px 10px rgba(0, 0, 0, 0.5);
    transition: width 300ms ease-in-out;

    .sidebar-menu {
      margin-top: 1rem;
      overflow: hidden;

      li {
        width: 100%;
        margin-bottom: 1.3rem;
        padding-left: 1rem;
      }

      a {
        padding-right: 1rem;
        display: block;
        color: #fff;
        font-size: 1.1rem;
        white-space: nowrap;
        transition: all 300ms ease-in-out;

        &:hover {
          padding: 0 0 0 0.5rem;
          font-weight: lighter;
        }

        i {
          font-size: 1rem;
          padding-right: 1rem;
        }
      }

      a.active {
        background-color: #fff;
        padding: 0.75rem 0 0.75rem 1.5rem;
        color: #0098a9;
        font-weight: lighter;
        border-radius: 30px 0 0 30px;
      }
    }

    .sign-out-btn {
      position: absolute;
      bottom: 10px;
      left: 16px;
      border: none;
      color: #fff;
      font-size: 1.35rem;
    }
  }

  #nav-toggle {
    display: none;
  }

  #nav-toggle:checked ~ .main-content {
    margin-left: 50px;
  }

  #nav-toggle:checked + .sidebar {
    width: 50px;

    li {
      padding: 0;

      a span {
        display: none;
      }
    }

    i {
      padding-left: 1rem;
    }

    a.active {
      padding-left: 0;
      border-radius: 2px;
    }

    .sign-out-btn {
      font-size: 1rem;
      left: 0;

      a {
        padding: 0;
      }

      p {
        display: none;
      }
    }
  }

  .main-content {
    margin-left: 230px;
    height: 100%;
    transition: margin-left 300ms ease-in-out;
  }

  main {
    padding: 1.5rem 0.75rem;
    height: 100%;

    .cards {
      display: flex;
      gap: 0.5rem;
      width: 100%;
      justify-content: space-between;

      .card-single {
        display: flex;
        justify-content: space-between;
        background-color: #fff;
        width: 100%;
        padding: 2rem;
        border-radius: 7px;

        span {
          color: #777;
          font-size: 0.95rem;
        }

        h1 {
          font-size: 1.5rem;
          font-weight: lighter;
          color: #000;
        }

        i {
          font-size: 2.5rem;
          color: #0098a9;
        }
      }

      .card-single:last-child {
        background-color: #0098a9;
        color: #fff;
        border-radius: 15px;

        h1 {
          color: #fff;
          font-weight: 400;
        }

        span {
          color: #fff;
        }

        i {
          color: #fff;
        }
      }
    }
  }
`;

export default DashboardContentBox;
