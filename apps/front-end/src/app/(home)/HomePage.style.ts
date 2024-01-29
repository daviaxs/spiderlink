'use client'

import { themeColors } from '@/shared/style/theme/pallete'
import styled from 'styled-components'

export const Root = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const Apresentation = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  padding: 1.88rem 2rem 0;

  @media (max-width: 900px) {
    padding: 0;
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
    height: 300px;

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
    padding: 1.875rem 1.25rem 0rem 1.25rem;

    .avatar {
      width: 100px;
      height: 100px;
      border-radius: 1.875rem;
    }

    h1 {
      font-size: 1rem;
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
    color: ${themeColors['primary-300']};
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: start;
    gap: 1rem;
  }
`
