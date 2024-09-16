import * as React from 'react';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { styled } from '@stitches/react';

const StyledItem = styled(AccordionPrimitive.Item, {
  borderBottom: '1px solid gainsboro',

  '&[data-state=open]': {
    borderBottomWidth: '2px',
  },
});


const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>((props, forwardedRef) => (
  <AccordionPrimitive.Item {...props} ref={forwardedRef} />
));
AccordionItem.displayName = 'AccordionItem';

export default AccordionItem;