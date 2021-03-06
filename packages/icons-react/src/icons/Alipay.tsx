// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AlipaySvg from '@kite-design/icons-svg/lib/asn/Alipay';
import KiteIcon from '../components/KiteIcon'
import { IconBaseProps } from '../components/CustomIcon'

const Alipay = (
  props: IconBaseProps,
  ref: React.ForwardedRef<HTMLSpanElement>
) => <KiteIcon {...props} ref={ref} icon={AlipaySvg} />;

Alipay.displayName = 'Alipay';
export default React.forwardRef<HTMLSpanElement, IconBaseProps>(Alipay);