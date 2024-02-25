'use client'

import { ChangeEvent, useState } from 'react'
import { MediaPickerStyle } from './Inputs.style'

export function MediaPicker() {
  const [preview, setPreview] = useState<string | null>(null)

  function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target

    if (!files || !files[0]) {
      return
    }

    const previewUrl = URL.createObjectURL(files[0])

    setPreview(previewUrl)
  }

  return (
    <>
      <input
        onChange={onFileSelected}
        name="img"
        id="img"
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
      />

      {preview && <MediaPickerStyle src={preview} alt="" />}
    </>
  )
}
