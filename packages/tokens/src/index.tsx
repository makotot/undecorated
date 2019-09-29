interface spacesProps {
  xs: number
  s: number
  m: number
  l: number
  xl: number
  xxl: number
  xxxl: number
  [key: string]: number
}

const spaces: spacesProps = {
  xs: 0.25,
  s: 0.5,
  m: 1,
  l: 1.5,
  xl: 2,
  xxl: 2.5,
  xxxl: 3,
}

const getSpaceSize = (size: string = 'm') => spaces[size]

interface breakPointsProps {
  s: number,
  m: number,
  l: number,
  [key: string]: number
}

const breakPoints: breakPointsProps = {
  s: 640,
  m: 768,
  l: 1024,
}

export {
  spaces,
  getSpaceSize,
  breakPoints,
}
