import { LoadingPageStyle } from './LoadingPage.style'

export function LoadingPage() {
  return (
    <LoadingPageStyle>
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoadingPageStyle>
  )
}
