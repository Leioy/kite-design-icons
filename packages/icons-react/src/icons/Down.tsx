// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DownSvg from '@kite-design/icons-svg/lib/asn/Down';
import KiteIcon from '../components/KiteIcon'
import { IconBaseProps } from '../components/CustomIcon'

const Down = (
  props: IconBaseProps,
  ref: React.ForwardedRef<HTMLSpanElement>
) => <KiteIcon {...props} ref={ref} icon={DownSvg} />;

Down.displayName = 'Down';
export default React.forwardRef<HTMLSpanElement, IconBaseProps>(Down);