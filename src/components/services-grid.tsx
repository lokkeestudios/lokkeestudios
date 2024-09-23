import { ServiceCard } from '@/components/service-card';
import { useMotionValue } from 'framer-motion';
import type { MouseEvent } from 'react';

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
        className="lg:col-span-2"
      >
        <div>
          <ServiceCard.Title>Web application</ServiceCard.Title>
          <ServiceCard.Price>Custom quote</ServiceCard.Price>
          <ServiceCard.Description>
            Tailored web apps, paired with a marketing website, or cross-platform solutions.
            Let&apos;s get together and discuss your vision to provide a custom quote.
          </ServiceCard.Description>
          <ServiceCard.List>
            <ServiceCard.List.BenefitListItem>
              Modern, custom design
            </ServiceCard.List.BenefitListItem>
            <ServiceCard.List.BenefitListItem>
              Responsive & accessible
            </ServiceCard.List.BenefitListItem>
            <ServiceCard.List.BenefitListItem>
              Optimized performance
            </ServiceCard.List.BenefitListItem>
            <ServiceCard.List.BenefitListItem>
              Animations & interactions
            </ServiceCard.List.BenefitListItem>
            <ServiceCard.List.BenefitListItem>
              Scalable backend solutions or bring your own backend
            </ServiceCard.List.BenefitListItem>
            <ServiceCard.List.AddonListItem>
              Multi-platform support <span className="text-neutrals-400">|</span> Custom quote
            </ServiceCard.List.AddonListItem>
          </ServiceCard.List>
        </div>
        <ServiceCard.CallToAction />
      </ServiceCard>
      <ServiceCard
        parentMousePositionX={mousePositionX}
        parentMousePositionY={mousePositionY}
        className="lg:col-span-3"
      >
        <div>
          <ServiceCard.Title>Website</ServiceCard.Title>
          <ServiceCard.Price>
            €4.800<span className="text-xl font-normal text-neutrals-400">*</span>
          </ServiceCard.Price>
          <ServiceCard.Description>
            There are no limits to your website vision ― Let&apos;s make it happen!
          </ServiceCard.Description>
          <ServiceCard.List>
            <ServiceCard.List.BenefitListItem>
              Modern, custom design
            </ServiceCard.List.BenefitListItem>
            <ServiceCard.List.BenefitListItem>
              Responsive & accessible
            </ServiceCard.List.BenefitListItem>
            <ServiceCard.List.BenefitListItem>
              Animations & interactions
            </ServiceCard.List.BenefitListItem>
            <ServiceCard.List.BenefitListItem>
              SEO & page speed optimization
            </ServiceCard.List.BenefitListItem>
            <ServiceCard.List.BenefitListItem>
              Engaging user experience
            </ServiceCard.List.BenefitListItem>
            <ServiceCard.List.AddonListItem>
              CMS (self-customizability) implementation <span className="text-neutrals-400">|</span>{' '}
              Custom quote
            </ServiceCard.List.AddonListItem>
            <ServiceCard.List.AddonListItem>
              Multilingual support <span className="text-neutrals-400">|</span> Custom quote
            </ServiceCard.List.AddonListItem>
            <ServiceCard.List.AddonListItem>
              Analytics <span className="text-neutrals-400">|</span> Custom quote
            </ServiceCard.List.AddonListItem>
          </ServiceCard.List>
        </div>
        <ServiceCard.Notice>
          * Starting price, varies with project scope and additional requirements
        </ServiceCard.Notice>
        <ServiceCard.CallToAction />
      </ServiceCard>
      <ServiceCard
        parentMousePositionX={mousePositionX}
        parentMousePositionY={mousePositionY}
        className="lg:col-span-3"
      >
        <div>
          <ServiceCard.Title>E-Commerce (Shopify)</ServiceCard.Title>
          <ServiceCard.Price>
            €6.400<span className="text-xl font-normal text-neutrals-400">*</span>
          </ServiceCard.Price>
          <ServiceCard.Description>
            Level up your Shopify store with a custom theme, tailored to your products and customer
            audience.
          </ServiceCard.Description>
          <ServiceCard.List>
            <ServiceCard.List.BenefitListItem>
              Modern, custom design
            </ServiceCard.List.BenefitListItem>
            <ServiceCard.List.BenefitListItem>
              Responsive & accessible
            </ServiceCard.List.BenefitListItem>
            <ServiceCard.List.BenefitListItem>
              Seamless store integration with Shopify
            </ServiceCard.List.BenefitListItem>
            <ServiceCard.List.BenefitListItem>
              Self-customizable content
            </ServiceCard.List.BenefitListItem>
            <ServiceCard.List.BenefitListItem>
              Conversion rate optimization
            </ServiceCard.List.BenefitListItem>
            <ServiceCard.List.AddonListItem>
              Multilingual support <span className="text-neutrals-400">|</span> Custom quote
            </ServiceCard.List.AddonListItem>
            <ServiceCard.List.AddonListItem>
              Analytics <span className="text-neutrals-400">|</span> Custom quote
            </ServiceCard.List.AddonListItem>
          </ServiceCard.List>
          <ServiceCard.Notice>
            * Starting price, varies with project scope and additional requirements
          </ServiceCard.Notice>
        </div>
        <ServiceCard.CallToAction />
      </ServiceCard>
      <ServiceCard
        parentMousePositionX={mousePositionX}
        parentMousePositionY={mousePositionY}
        className="lg:col-span-2"
      >
        <div>
          <ServiceCard.Title>Custom solution</ServiceCard.Title>
          <ServiceCard.Price>Custom quote</ServiceCard.Price>
          <ServiceCard.Description>
            Need a unique solution? Don&apos;t hesitate to ask ― We are your problem solvers.{' '}
            <span className="text-neutrals-100">
              Let&apos;s discuss your requirements and create a tailored package.
            </span>
          </ServiceCard.Description>
        </div>
        <ServiceCard.CallToAction />
      </ServiceCard>
    </div>
  );
}

export { ServicesGrid };
