export default function isPlaneObj(value:any):boolean{
  return value && (value.constructor === Object || value.constructor === undefined)
}