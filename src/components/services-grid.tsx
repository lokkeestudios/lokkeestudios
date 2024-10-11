import {
  ServiceCard,
  ServiceCardAddonListItem,
  ServiceCardBenefitListItem,
  ServiceCardCallToAction,
  ServiceCardDescription,
  ServiceCardList,
  ServiceCardNotice,
  ServiceCardPrice,
  ServiceCardTitle,
} from '@/components/service-card';
import { useMotionValue } from 'framer-motion';
import { type MouseEvent } from 'react';

function ServicesGrid() {
  const mousePositionX = useMotionValue(0);
  const mousePositionY = useMotionValue(0);

  function handleMouseMove({ clientX, clientY }: MouseEvent) {
    mousePositionX.set(clientX);
    mousePositionY.set(clientY);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className="group grid gap-6 lg:grid-cols-5"
    >
      <ServiceCard
        parentMousePositionX={mousePositionX}
        parentMousePositionY={mousePositionY}
        className="rounded-ss-xl max-lg:rounded-t-xl lg:col-span-2"
      >
        <div>
          <ServiceCardTitle>Web application</ServiceCardTitle>
          <ServiceCardPrice>Custom quote</ServiceCardPrice>
          <ServiceCardDescription>
            Tailored web apps, paired with a marketing website, or cross-platform solutions.
            Let&apos;s get together and discuss your vision to provide a custom quote.
          </ServiceCardDescription>
          <ServiceCardList>
            <ServiceCardBenefitListItem>Modern, custom design</ServiceCardBenefitListItem>
            <ServiceCardBenefitListItem>Responsive & accessible</ServiceCardBenefitListItem>
            <ServiceCardBenefitListItem>Optimized performance</ServiceCardBenefitListItem>
            <ServiceCardBenefitListItem>Animations & interactions</ServiceCardBenefitListItem>
            <ServiceCardBenefitListItem>
              Scalable backend solutions or bring your own backend
            </ServiceCardBenefitListItem>
            <ServiceCardAddonListItem>
              Multi-platform support <span className="text-neutrals-400">|</span> Custom quote
            </ServiceCardAddonListItem>
          </ServiceCardList>
        </div>
        <ServiceCardCallToAction />
      </ServiceCard>
      <ServiceCard
        parentMousePositionX={mousePositionX}
        parentMousePositionY={mousePositionY}
        className="lg:col-span-3 lg:rounded-se-xl"
      >
        <div>
          <ServiceCardTitle>Website</ServiceCardTitle>
          <ServiceCardPrice>
            €4.800<span className="text-xl font-normal text-neutrals-400">*</span>
          </ServiceCardPrice>
          <ServiceCardDescription>
            There are no limits to your website vision ― Let&apos;s make it happen!
          </ServiceCardDescription>
          <ServiceCardList>
            <ServiceCardBenefitListItem>Modern, custom design</ServiceCardBenefitListItem>
            <ServiceCardBenefitListItem>Responsive & accessible</ServiceCardBenefitListItem>
            <ServiceCardBenefitListItem>Animations & interactions</ServiceCardBenefitListItem>
            <ServiceCardBenefitListItem>SEO & page speed optimization</ServiceCardBenefitListItem>
            <ServiceCardBenefitListItem>Engaging user experience</ServiceCardBenefitListItem>
            <ServiceCardAddonListItem>
              CMS (self-customizability) implementation <span className="text-neutrals-400">|</span>{' '}
              Custom quote
            </ServiceCardAddonListItem>
            <ServiceCardAddonListItem>
              Multilingual support <span className="text-neutrals-400">|</span> Custom quote
            </ServiceCardAddonListItem>
            <ServiceCardAddonListItem>
              Analytics <span className="text-neutrals-400">|</span> Custom quote
            </ServiceCardAddonListItem>
          </ServiceCardList>
        </div>
        <ServiceCardNotice>
          * Starting price, varies with project scope and additional requirements
        </ServiceCardNotice>
        <ServiceCardCallToAction />
      </ServiceCard>
      <ServiceCard
        parentMousePositionX={mousePositionX}
        parentMousePositionY={mousePositionY}
        className="lg:col-span-3 lg:rounded-es-xl"
      >
        <div>
          <ServiceCardTitle>E-Commerce (Shopify)</ServiceCardTitle>
          <ServiceCardPrice>
            €6.400<span className="text-xl font-normal text-neutrals-400">*</span>
          </ServiceCardPrice>
          <ServiceCardDescription>
            Level up your Shopify store with a custom theme, tailored to your products and customer
            audience.
          </ServiceCardDescription>
          <ServiceCardList>
            <ServiceCardBenefitListItem>Modern, custom design</ServiceCardBenefitListItem>
            <ServiceCardBenefitListItem>Responsive & accessible</ServiceCardBenefitListItem>
            <ServiceCardBenefitListItem>
              Seamless store integration with Shopify
            </ServiceCardBenefitListItem>
            <ServiceCardBenefitListItem>Self-customizable content</ServiceCardBenefitListItem>
            <ServiceCardBenefitListItem>Conversion rate optimization</ServiceCardBenefitListItem>
            <ServiceCardAddonListItem>
              Multilingual support <span className="text-neutrals-400">|</span> Custom quote
            </ServiceCardAddonListItem>
            <ServiceCardAddonListItem>
              Analytics <span className="text-neutrals-400">|</span> Custom quote
            </ServiceCardAddonListItem>
          </ServiceCardList>
          <ServiceCardNotice>
            * Starting price, varies with project scope and additional requirements
          </ServiceCardNotice>
        </div>
        <ServiceCardCallToAction />
      </ServiceCard>
      <ServiceCard
        parentMousePositionX={mousePositionX}
        parentMousePositionY={mousePositionY}
        className="rounded-ee-xl max-lg:rounded-b-xl lg:col-span-2"
      >
        <div>
          <ServiceCardTitle>Custom solution</ServiceCardTitle>
          <ServiceCardPrice>Custom quote</ServiceCardPrice>
          <ServiceCardDescription>
            Need a unique solution? Don&apos;t hesitate to ask ― We are your problem solvers.{' '}
            <span className="text-neutrals-100">
              Let&apos;s discuss your requirements and create a tailored package.
            </span>
          </ServiceCardDescription>
        </div>
        <ServiceCardCallToAction />
      </ServiceCard>
    </div>
  );
}

export { ServicesGrid };
