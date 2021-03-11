// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CloseSvg from '@kite-design/icons-svg/lib/asn/Close';
import KiteIcon from '../components/KiteIcon'
import { IconBaseProps } from '../components/CustomIcon'

const Close = (
  props: IconBaseProps,
  ref: React.ForwardedRef<HTMLSpanElement>
) => <KiteIcon {...props} ref={ref} icon={CloseSvg} />;

Close.displayName = 'Close';
export default React.forwardRef<HTMLSpanElement, IconBaseProps>(Close);