import './styles.css';

import React from 'react';

import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

import * as NavigationMenu from '@radix-ui/react-navigation-menu';

import ListItem from './list-item';

const NavegationLogin = () => {
  return (
    <NavigationMenu.Root className="NavigationMenuRoot">
      <NavigationMenu.List className="NavigationMenuList">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            DIGITAR <ChevronDown aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List one">
              <li style={{ gridRow: 'span 3' }}>
                <NavigationMenu.Link asChild>
                  <a className="Callout" href="/">
                  <div style={{ display: 'flex', gap: 15 }}>
              <div style={{ display: 'flex', gap: 5 }}>
                
              <Image
                        src="/favicon.ico"
                        width={38}
                        height={38}
                        alt="Icons TheMarketing"
                      />
              </div>
              <div style={{ display: 'flex', gap: 5 }}>
                <div className="Text bold">THE MARKETING</div> 
            </div></div>
                    <div className="CalloutHeading">Digitar</div>
                    <p className="CalloutText">Faça login na sua conta.</p>
                  </a>
                  
                </NavigationMenu.Link>
              </li>

              <ListItem />
              
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="NavigationMenuIndicator">
          <div className="Arrow" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="ViewportPosition">
        <NavigationMenu.Viewport className="NavigationMenuViewport" />
      </div>
    </NavigationMenu.Root>
  );
};

{/* const ListItem = React.forwardRef(
  ({ className, children, title, ...props }, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <a
          className={classNames('ListItemLink', className)}
          {...props}
          ref={forwardedRef}
        >
          <div className="ListItemHeading">{title}</div>
          <p className="ListItemText">{children}</p>
        </a>
      </NavigationMenu.Link>
    </li>
  )
); */}

export default NavegationLogin;
