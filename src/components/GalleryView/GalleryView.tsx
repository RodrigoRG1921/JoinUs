import React from 'react'
import { View, Image } from 'react-native'

interface IProps {
  images: string[];
  imagePerBlockSize?: number;
}

const IMAGES_PER_ROW_BY_LENGTH = [
  [2, 1, 3],
  [1, undefined, undefined],
  [2, undefined, undefined],
  [2, 1, undefined],
  [3, 1, undefined],
  [2, 1, 2],
]

const GalleryView = ({
  images,
  imagePerBlockSize = 6
}: IProps) => {

  const getIndexes = ({
    imagesSize,
    lastestIndex,
  }: {
    imagesSize: number,
    lastestIndex: number,
  }): number[] => {
    const indexes: number[] = []

    for (let i = 0; i < imagesSize; i++) {
      indexes.push(i + lastestIndex)
    }

    return indexes
  }

  const firstRow = ({
    imagesSize,
    startIndex,
  }: {
    imagesSize: number,
    startIndex: number,
  }): JSX.Element[] => {
    const views: JSX.Element[] = []
    const indexes = getIndexes({ imagesSize, lastestIndex: startIndex })
    for (let viewIndex = 0; viewIndex < imagesSize; viewIndex++) {
      const imageView = (
        <View style={{ flex: 1 }}>
          <Image style={{ height: 150 }} source={{ uri: images[indexes[viewIndex]] }} />
        </View>
      )
      views.push(imageView)
    }

    return views
  }

  const renderImages = ({ images }: { images: string[] }): JSX.Element[] => {
    const { length } = images
    const imagesBlocks: JSX.Element[] = []

    for (let blockNumber = 0; blockNumber < length / imagePerBlockSize; blockNumber++) {
      const columnsValuesIndex = imagePerBlockSize % (length - ((blockNumber + 1) * imagePerBlockSize))
      const [fRow, sRow, tRow] = IMAGES_PER_ROW_BY_LENGTH[columnsValuesIndex]
      
      const startIndex = blockNumber * imagePerBlockSize

      if (fRow) {
        
        imagesBlocks.push(
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            { firstRow({ imagesSize: fRow, startIndex }) }
          </View>
        )
      }

      if (sRow && fRow) {
        const views: JSX.Element[] = []
        const indexes = getIndexes({ imagesSize: sRow, lastestIndex: startIndex + fRow })
        for (let viewIndex = 0; viewIndex < sRow; viewIndex++) {
          const imageView = (
            <View style={{ flex: 1 }}>
              <Image style={{ height: 150 }} source={{ uri: images[indexes[viewIndex]] }} />
            </View>
          )
          views.push(imageView)
        }
        imagesBlocks.push(
          <View>
            { views }
          </View>
        )
      }

      if (tRow && fRow && sRow) {
        const views: JSX.Element[] = []
        const indexes = getIndexes({ imagesSize: tRow, lastestIndex: startIndex + (fRow + sRow) })
        for (let viewIndex = 0; viewIndex < tRow; viewIndex++) {
          const imageView = (
            <View style={{ flex: 1 }}>
              <Image style={{ height: 150 }} source={{ uri: images[indexes[viewIndex]] }} />
            </View>
          )
          views.push(imageView)
        }
        imagesBlocks.push(
          <View>
            { views }
          </View>
        )
      }
    }

    return imagesBlocks
  }

  return (
    <View>
      { renderImages({ images }) }
    </View>
  )
}

export default GalleryView
