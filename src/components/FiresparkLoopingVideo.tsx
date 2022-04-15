export type FiresparkLoopingVideoProps = {
  className: string
  src: string
}

export function FiresparkLoopingVideo({
  className,
  src,
}: FiresparkLoopingVideoProps) {
  return (
    <video className={className} src={src} playsInline muted loop autoPlay />
  )
}
