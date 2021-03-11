// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CheckSvg from '@kite-design/icons-svg/lib/asn/Check';
import KiteIcon from '../components/KiteIcon'
import { IconBaseProps } from '../components/CustomIcon'

const Check = (
  props: IconBaseProps,
  ref: React.ForwardedRef<HTMLSpanElement>
) => <KiteIcon {...props} ref={ref} icon={CheckSvg} />;

Check.displayName = 'Check';
export default React.forwardRef<HTMLSpanElement, IconBaseProps>(Check);