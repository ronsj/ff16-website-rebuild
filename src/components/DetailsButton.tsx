import Image from 'next/image'
import * as mediaQueries from '../lib/mediaQueries'
import useMediaQuery from '../lib/useMediaQuery'
import { detailsBtnPC, detailsBtnSP } from '../lib/images'

export type DetailsButtonProps = {
  className?: string
}

export function DetailsButton({ className }: DetailsButtonProps) {
  let isMediaLarge = useMediaQuery(mediaQueries.large)

  return isMediaLarge ? (
    <Image
      className={className}
      src={detailsBtnPC}
      alt="MORE DETAILS"
      layout="responsive"
    />
  ) : (
    <Image className={className} src={detailsBtnSP} alt="MORE DETAILS" />
  )
}
