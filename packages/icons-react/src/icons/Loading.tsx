// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import LoadingSvg from '@kite-design/icons-svg/lib/asn/Loading';
import KiteIcon from '../components/KiteIcon'
import { IconBaseProps } from '../components/CustomIcon'

const Loading = (
  props: IconBaseProps,
  ref: React.ForwardedRef<HTMLSpanElement>
) => <KiteIcon {...props} ref={ref} icon={LoadingSvg} />;

Loading.displayName = 'Loading';
export default React.forwardRef<HTMLSpanElement, IconBaseProps>(Loading);