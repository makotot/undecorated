const flatten = (array: any[]) => [].concat(...array)

const removeDuplicated = (array: any[]) => array.filter((el, index: number) => array.indexOf(el) === index)

export {
  flatten,
  removeDuplicated,
}