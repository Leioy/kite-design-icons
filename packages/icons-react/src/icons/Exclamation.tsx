// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ExclamationSvg from '@kite-design/icons-svg/lib/asn/Exclamation';
import KiteIcon from '../components/KiteIcon'
import { IconBaseProps } from '../components/CustomIcon'

const Exclamation = (
  props: IconBaseProps,
  ref: React.ForwardedRef<HTMLSpanElement>
) => <KiteIcon {...props} ref={ref} icon={ExclamationSvg} />;

Exclamation.displayName = 'Exclamation';
export default React.forwardRef<HTMLSpanElement, IconBaseProps>(Exclamation);