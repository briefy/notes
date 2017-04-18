export default function isArrayLike(value){
  return value && (typeof value.length === 'number')
}