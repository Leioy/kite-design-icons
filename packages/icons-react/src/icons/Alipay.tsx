import React from 'react'
import AlipaySvg from '@kite-design/icons-svg/lib/asn/Alipay'
import KiteIcon, { IconBaseProps } from '../components/KiteIcon'

const Alipay = (
	props: IconBaseProps,
	ref: React.ForwardedRef<HTMLSpanElement>) => <KiteIcon {...props} ref={ref} icon={AlipaySvg}/>

export default React.forwardRef<HTMLSpanElement, IconBaseProps>(Alipay)
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
//
// import * as React from 'react'
// import AccountBookFilledSvg from '@ant-design/icons-svg/lib/asn/AccountBookFilled';
// import AntdIcon, { AntdIconProps } from '../components/AntdIcon';
//
// const AccountBookFilled = (
// 	props: AntdIconProps,
// 	ref: React.MutableRefObject<HTMLSpanElement>,
// ) => <AntdIcon {...props} ref={ref} icon={AccountBookFilledSvg} />;
//
// AccountBookFilled.displayName = 'AccountBookFilled';
// export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AccountBookFilled);
