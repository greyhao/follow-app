import type { Ref } from 'react'
import { forwardRef, memo } from 'react'
import type { SvgProps } from 'react-native-svg'
import Svg, { Path } from 'react-native-svg'

function SvgGithub2CuteFi(props: SvgProps, ref: Ref<Svg>) {
  return <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><Path fill="currentColor" fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2M6.987 14.789a.75.75 0 0 0-.474 1.423c.183.058.345.328.487.566.07.115.134.223.195.296.227.273.537.567.985.757.31.132.658.2 1.046.202l-.005.457a1 1 0 0 0 2 .02l.029-2.745v-.01c0-.215.09-.408.236-.546.604-.57.296-1.561-.493-1.719-1.74-.347-2.66-1.446-2.66-2.402 0-.447.181-.896.556-1.305.264-.287.337-.702.189-1.063a1.402 1.402 0 0 1-.091-.457c.209.098.424.223.621.376.256.198.605.261.913.166.45-.138.95-.217 1.479-.217.529 0 1.028.079 1.477.217.309.095.657.031.913-.166.197-.153.412-.278.62-.376-.008.171-.037.329-.09.456-.148.362-.074.776.19 1.063.375.41.556.859.556 1.306 0 .956-.92 2.055-2.659 2.402-.789.158-1.097 1.15-.493 1.719a.745.745 0 0 1 .236.542l-.029 2.739a1 1 0 1 0 2 .02l.029-2.745v-.01c0-.239-.03-.47-.088-.691 1.69-.714 3.004-2.131 3.004-3.976 0-.82-.272-1.572-.72-2.207.091-.471.076-.924.034-1.27-.046-.377-.121-.797-.329-1.123a1.054 1.054 0 0 0-.414-.377c-.458-.23-1.027-.054-1.482.101a5.77 5.77 0 0 0-1.17.553A7.119 7.119 0 0 0 12 6.588c-.549 0-1.082.062-1.588.177a5.771 5.771 0 0 0-1.17-.553c-.454-.155-1.024-.33-1.481-.101-.17.085-.313.217-.414.377-.208.326-.283.747-.33 1.124-.041.347-.057.8.034 1.271a3.813 3.813 0 0 0-.718 2.205c0 1.845 1.315 3.262 3.005 3.976-.057.219-.088.448-.088.685l-.008.784c-.22 0-.37-.038-.476-.083a1.106 1.106 0 0 1-.419-.336c-.096-.116-.182-.238-.268-.361-.064-.093-.129-.185-.198-.274-.179-.232-.457-.545-.894-.69" clipRule="evenodd" /></Svg>
}
const ForwardRef = forwardRef(SvgGithub2CuteFi)
const Memo = memo(ForwardRef)
export default Memo
