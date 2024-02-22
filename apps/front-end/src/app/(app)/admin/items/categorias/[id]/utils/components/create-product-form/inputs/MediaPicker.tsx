'use client'

import { ChangeEvent, useState } from 'react'
import { MediaPickerStyle } from '../ProductForm.style'

interface MediaPickerProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: any
}

export function MediaPicker({ register }: MediaPickerProps) {
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
        name="coverUrl"
        id="coverUrl"
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        {...register}
      />

      {preview && <MediaPickerStyle src={preview} alt="" />}
    </>
  )
}
