// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import UpSvg from '@kite-design/icons-svg/lib/asn/Up';
import KiteIcon from '../components/KiteIcon'
import { IconBaseProps } from '../components/CustomIcon'

const Up = (
  props: IconBaseProps,
  ref: React.ForwardedRef<HTMLSpanElement>
) => <KiteIcon {...props} ref={ref} icon={UpSvg} />;

Up.displayName = 'Up';
export default React.forwardRef<HTMLSpanElement, IconBaseProps>(Up);