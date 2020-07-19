// export interface MainLayoutInterface {
//     children: ChildNode,
//     title?: string
// }

import { PropsWithChildren } from 'react';

export interface MainLayoutOwnProps {title?: string}
export type MainLayoutComp = PropsWithChildren<MainLayoutOwnProps>
