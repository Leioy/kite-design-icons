// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import RightSvg from '@kite-design/icons-svg/lib/asn/Right';
import KiteIcon from '../components/KiteIcon'
import { IconBaseProps } from '../components/CustomIcon'

const Right = (
  props: IconBaseProps,
  ref: React.ForwardedRef<HTMLSpanElement>
) => <KiteIcon {...props} ref={ref} icon={RightSvg} />;

Right.displayName = 'Right';
export default React.forwardRef<HTMLSpanElement, IconBaseProps>(Right);