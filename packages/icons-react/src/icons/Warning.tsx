// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import WarningSvg from '@kite-design/icons-svg/lib/asn/Warning';
import KiteIcon from '../components/KiteIcon'
import { IconBaseProps } from '../components/CustomIcon'

const Warning = (
  props: IconBaseProps,
  ref: React.ForwardedRef<HTMLSpanElement>
) => <KiteIcon {...props} ref={ref} icon={WarningSvg} />;

Warning.displayName = 'Warning';
export default React.forwardRef<HTMLSpanElement, IconBaseProps>(Warning);