import { useEffect, useState } from 'react'
import ImageGallery from 'react-image-gallery'

export const MyGallery = () => {
  const [images, setImages] = useState([])
  useEffect(() => {
    fetch('http://52.8.248.26:8080/images').then((resposne) =>
      resposne.json().then((result) => {
        setImages(
          result.images.map((image) => ({
            original: `http://52.8.248.26:8080/${image}`,
            thumbnail: `http://52.8.248.26:8080/${image}`,
          }))
        )
      })
    )
  }, [])
  return <ImageGallery items={images} />
}
