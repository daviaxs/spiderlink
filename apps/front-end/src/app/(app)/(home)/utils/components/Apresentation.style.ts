'use client'

import styled from 'styled-components'

export const Apresentation = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  padding: 0.5rem 2rem 0;

  @media (max-width: 900px) {
    padding: 0 0 7.5rem 0;
  }
`

export const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  .image {
    border-radius: 1rem;
    object-fit: cover;
    width: 100%;
    height: 270px;

    @media (max-width: 900px) {
      border-radius: 0;
      height: 150px;
    }
  }
`

export const Infos = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;

  gap: 1.8rem;
  padding-top: 1.875rem;

  .avatar {
    border-radius: 2.5rem;
  }

  @media (max-width: 900px) {
    background-color: ${(props) => props.theme.body};
    width: 100%;

    padding: 1.875rem 1.25rem 0rem 1.25rem;
    border-radius: 0.75rem 0.75rem 0 0;
    position: absolute;
    top: 130px;

    .avatar {
      width: 100px;
      height: 100px;
      border-radius: 1.875rem;
    }

    .ecommerceName {
      font-size: 24px;
    }
  }
`

export const Texts = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.title};

  gap: 2rem;
  width: 100%;

  p {
    color: ${(props) => props.theme.button};
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: start;
    gap: 1rem;
  }
`
