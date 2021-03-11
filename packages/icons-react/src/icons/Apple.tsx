// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AppleSvg from '@kite-design/icons-svg/lib/asn/Apple';
import KiteIcon from '../components/KiteIcon'
import { IconBaseProps } from '../components/CustomIcon'

const Apple = (
  props: IconBaseProps,
  ref: React.ForwardedRef<HTMLSpanElement>
) => <KiteIcon {...props} ref={ref} icon={AppleSvg} />;

Apple.displayName = 'Apple';
export default React.forwardRef<HTMLSpanElement, IconBaseProps>(Apple);