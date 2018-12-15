export const actionButtonPressed = ({type, value}) => {
  console.log('actionSevenPressed');
  return {
    type,
    payLoad: value
  }
}
