// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CheckboxSquareSvg from '@kite-design/icons-svg/lib/asn/CheckboxSquare';
import KiteIcon from '../components/KiteIcon'
import { IconBaseProps } from '../components/CustomIcon'

const CheckboxSquare = (
  props: IconBaseProps,
  ref: React.ForwardedRef<HTMLSpanElement>
) => <KiteIcon {...props} ref={ref} icon={CheckboxSquareSvg} />;

CheckboxSquare.displayName = 'CheckboxSquare';
export default React.forwardRef<HTMLSpanElement, IconBaseProps>(CheckboxSquare);