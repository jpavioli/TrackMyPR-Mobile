export const adjustEnvironment = (obj) => {
  return({
    type: 'ADJUST_ENVIRONMENT',
    fontScale: obj.fontScale,
    height: obj.height,
    scale: obj.scale,
    width: obj.width
  })
}
