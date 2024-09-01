import type { Ref } from 'react'
import { forwardRef, memo } from 'react'
import type { SvgProps } from 'react-native-svg'
import Svg, { Path } from 'react-native-svg'

function SvgListExpansionCuteRe(props: SvgProps, ref: Ref<Svg>) {
  return <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><Path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M4 5h8m-8 7h8m-8 7h8" /><Path fill="currentColor" fillRule="evenodd" d="M18.87 9.137c-.239.283-.506.473-.866.473s-.626-.19-.865-.473c-.228-.272-.464-.67-.756-1.162a19.097 19.097 0 0 1-.212-.368c-.28-.499-.507-.902-.628-1.235-.126-.348-.157-.674.023-.986.18-.312.478-.448.842-.513.35-.062.811-.067 1.384-.073.142-.002.283-.002.425 0 .572.006 1.035.011 1.384.073.364.065.662.201.842.513.18.312.15.638.023.986-.121.333-.348.736-.628 1.235-.07.124-.14.246-.213.368-.291.493-.527.89-.755 1.162M18.87 19.137c-.239.283-.506.473-.866.473s-.626-.19-.865-.473c-.228-.271-.464-.669-.756-1.162a19.156 19.156 0 0 1-.212-.367c-.28-.5-.507-.902-.628-1.236-.126-.348-.157-.674.023-.986.18-.312.478-.448.842-.512.35-.062.811-.068 1.384-.074.142-.002.283-.002.425 0 .572.006 1.035.012 1.384.074.364.064.662.2.842.512.18.312.15.638.023.986-.121.334-.348.736-.628 1.236-.07.123-.14.246-.213.367-.291.493-.527.89-.755 1.162" clipRule="evenodd" /></Svg>
}
const ForwardRef = forwardRef(SvgListExpansionCuteRe)
const Memo = memo(ForwardRef)
export default Memo
