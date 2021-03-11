// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CirclePlusSvg from '@kite-design/icons-svg/lib/asn/CirclePlus';
import KiteIcon from '../components/KiteIcon'
import { IconBaseProps } from '../components/CustomIcon'

const CirclePlus = (
  props: IconBaseProps,
  ref: React.ForwardedRef<HTMLSpanElement>
) => <KiteIcon {...props} ref={ref} icon={CirclePlusSvg} />;

CirclePlus.displayName = 'CirclePlus';
export default React.forwardRef<HTMLSpanElement, IconBaseProps>(CirclePlus);