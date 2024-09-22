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
          <ServiceCard.Price>Individual price</ServiceCard.Price>
          <ServiceCard.Description>
            Whether you want a web app, paired with a marketing website, or a cross-platform app, we
            got you covered.
            <br />
            Let&apos;s get together and discuss a high quality quote based on the scale of your
            vision!
          </ServiceCard.Description>
          <ServiceCard.List>
            <ServiceCard.List.BenefitListItem>
              Unique, modern, customized design
            </ServiceCard.List.BenefitListItem>
            <ServiceCard.List.BenefitListItem>
              Responsive, accessible development
            </ServiceCard.List.BenefitListItem>
            <ServiceCard.List.BenefitListItem>
              Optimized performance
            </ServiceCard.List.BenefitListItem>
            <ServiceCard.List.BenefitListItem>
              Animations & interactions
            </ServiceCard.List.BenefitListItem>
            <ServiceCard.List.BenefitListItem>Intuitive user flow</ServiceCard.List.BenefitListItem>
            <ServiceCard.List.BenefitListItem>
              Adaptive, scalable backend solutions
            </ServiceCard.List.BenefitListItem>
            <ServiceCard.List.BenefitListItem>
              Catch-up meetings & close communication
            </ServiceCard.List.BenefitListItem>
            <ServiceCard.List.AddonListItem>
              Multi-platform support <span className="text-neutrals-400">|</span> Individual price
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
              Unique, modern, customized design
            </ServiceCard.List.BenefitListItem>
            <ServiceCard.List.BenefitListItem>
              Responsive, accessible development
            </ServiceCard.List.BenefitListItem>
            <ServiceCard.List.BenefitListItem>
              Animations & interactions
            </ServiceCard.List.BenefitListItem>
            <ServiceCard.List.BenefitListItem>
              Enduring, memorable user experience
            </ServiceCard.List.BenefitListItem>
            <ServiceCard.List.BenefitListItem>
              SEO & page speed optimization
            </ServiceCard.List.BenefitListItem>
            <ServiceCard.List.BenefitListItem>
              Catch-up meetings & close communication
            </ServiceCard.List.BenefitListItem>
            <ServiceCard.List.AddonListItem>
              Hosting (including domain) setup <span className="text-neutrals-400">|</span>{' '}
              Individual price
            </ServiceCard.List.AddonListItem>
            <ServiceCard.List.AddonListItem>
              CMS implementation <span className="text-neutrals-400">|</span> Individual price
            </ServiceCard.List.AddonListItem>
            <ServiceCard.List.AddonListItem>
              Multilingual support <span className="text-neutrals-400">|</span> Individual price
            </ServiceCard.List.AddonListItem>
            <ServiceCard.List.AddonListItem>
              Analytics <span className="text-neutrals-400">|</span> Individual price
            </ServiceCard.List.AddonListItem>
          </ServiceCard.List>
        </div>
        <ServiceCard.Notice>
          * entry level price, may vary depending on the project scope
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
            Level up your Shopify store&apos;s web presence with a custom-made theme, adapted to
            your products.
          </ServiceCard.Description>
          <ServiceCard.List>
            <ServiceCard.List.BenefitListItem>
              Unique, modern, customized design
            </ServiceCard.List.BenefitListItem>
            <ServiceCard.List.BenefitListItem>
              Responsive, accessible development
            </ServiceCard.List.BenefitListItem>
            <ServiceCard.List.BenefitListItem>
              Seamless integration with Shopify & your store
            </ServiceCard.List.BenefitListItem>
            <ServiceCard.List.BenefitListItem>
              Effortless, completely self-customizable content
            </ServiceCard.List.BenefitListItem>
            <ServiceCard.List.BenefitListItem>
              Adapted to products & customer audience
            </ServiceCard.List.BenefitListItem>
            <ServiceCard.List.BenefitListItem>
              Boosted conversion rates
            </ServiceCard.List.BenefitListItem>
            <ServiceCard.List.BenefitListItem>
              Catch-up meetings & close communication
            </ServiceCard.List.BenefitListItem>
            <ServiceCard.List.AddonListItem>
              Content self-customization briefing <span className="text-neutrals-400">|</span>{' '}
              Individual price
            </ServiceCard.List.AddonListItem>
            <ServiceCard.List.AddonListItem>
              Multilingual support <span className="text-neutrals-400">|</span> Individual price
            </ServiceCard.List.AddonListItem>
            <ServiceCard.List.AddonListItem>
              Analytics <span className="text-neutrals-400">|</span> Individual price
            </ServiceCard.List.AddonListItem>
          </ServiceCard.List>
          <ServiceCard.Notice>
            * entry level price, may vary depending on the project scope
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
          <ServiceCard.Title>Custom</ServiceCard.Title>
          <ServiceCard.Price>Individual price</ServiceCard.Price>
          <ServiceCard.Description>
            Do you have a problem that does not fit into one of our packages? Don&apos;t hesitate to
            ask ― We are your problem solvers.
            <br />
            Let&apos;s get in touch and work out a personalized solution.
            <br />
            <br />
            <span className="text-neutrals-100">Inquire for an individual offer!</span>
          </ServiceCard.Description>
        </div>
        <ServiceCard.CallToAction />
      </ServiceCard>
    </div>
  );
}

export { ServicesGrid };
