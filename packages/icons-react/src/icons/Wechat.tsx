// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import WechatSvg from '@kite-design/icons-svg/lib/asn/Wechat';
import KiteIcon from '../components/KiteIcon'
import { IconBaseProps } from '../components/CustomIcon'

const Wechat = (
  props: IconBaseProps,
  ref: React.ForwardedRef<HTMLSpanElement>
) => <KiteIcon {...props} ref={ref} icon={WechatSvg} />;

Wechat.displayName = 'Wechat';
export default React.forwardRef<HTMLSpanElement, IconBaseProps>(Wechat);