// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CheckboxCheckSvg from '@kite-design/icons-svg/lib/asn/CheckboxCheck';
import KiteIcon from '../components/KiteIcon'
import { IconBaseProps } from '../components/CustomIcon'

const CheckboxCheck = (
  props: IconBaseProps,
  ref: React.ForwardedRef<HTMLSpanElement>
) => <KiteIcon {...props} ref={ref} icon={CheckboxCheckSvg} />;

CheckboxCheck.displayName = 'CheckboxCheck';
export default React.forwardRef<HTMLSpanElement, IconBaseProps>(CheckboxCheck);