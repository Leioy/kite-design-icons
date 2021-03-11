// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PlusSvg from '@kite-design/icons-svg/lib/asn/Plus';
import KiteIcon from '../components/KiteIcon'
import { IconBaseProps } from '../components/CustomIcon'

const Plus = (
  props: IconBaseProps,
  ref: React.ForwardedRef<HTMLSpanElement>
) => <KiteIcon {...props} ref={ref} icon={PlusSvg} />;

Plus.displayName = 'Plus';
export default React.forwardRef<HTMLSpanElement, IconBaseProps>(Plus);