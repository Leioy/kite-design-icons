// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import LeftSvg from '@kite-design/icons-svg/lib/asn/Left';
import KiteIcon from '../components/KiteIcon'
import { IconBaseProps } from '../components/CustomIcon'

const Left = (
  props: IconBaseProps,
  ref: React.ForwardedRef<HTMLSpanElement>
) => <KiteIcon {...props} ref={ref} icon={LeftSvg} />;

Left.displayName = 'Left';
export default React.forwardRef<HTMLSpanElement, IconBaseProps>(Left);