// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import EyeSvg from '@kite-design/icons-svg/lib/asn/Eye';
import KiteIcon from '../components/KiteIcon'
import { IconBaseProps } from '../components/CustomIcon'

const Eye = (
  props: IconBaseProps,
  ref: React.ForwardedRef<HTMLSpanElement>
) => <KiteIcon {...props} ref={ref} icon={EyeSvg} />;

Eye.displayName = 'Eye';
export default React.forwardRef<HTMLSpanElement, IconBaseProps>(Eye);