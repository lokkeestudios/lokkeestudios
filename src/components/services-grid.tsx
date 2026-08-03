import {
  ServiceCard,
  ServiceCardAddonListItem,
  ServiceCardBenefitListItem,
  ServiceCardDescription,
  ServiceCardList,
  ServiceCardNotice,
  ServiceCardPrice,
  ServiceCardTitle,
} from '@/components/service-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useI18n } from '@/hooks/use-i18n';
import { useMotionValue } from 'framer-motion';
import { type MouseEvent } from 'react';

function ServicesBreakdown() {
  const { t } = useI18n();
  const testMousePosition = useMotionValue(0);
  const { tabs, cards, serviceCardAriaLabel } = t.services;

  return (
    <Tabs defaultValue="business">
      <TabsList className="mx-auto">
        <TabsTrigger value="business">{tabs.business}</TabsTrigger>
        <TabsTrigger value="agency">{tabs.agency}</TabsTrigger>
      </TabsList>
      <TabsContent value="business">
        <ServicesGrid ariaLabel={serviceCardAriaLabel} />
      </TabsContent>
      <TabsContent value="agency">
        <ServiceCard
          parentMousePositionX={testMousePosition}
          parentMousePositionY={testMousePosition}
          className="mx-auto max-w-2xl rounded-2xl"
          aria-label={serviceCardAriaLabel}
        >
          <div>
            <ServiceCardTitle>{cards.agency.title}</ServiceCardTitle>
            <ServiceCardPrice>{cards.agency.price}</ServiceCardPrice>
            <ServiceCardDescription>{cards.agency.description}</ServiceCardDescription>
          </div>
        </ServiceCard>
      </TabsContent>
    </Tabs>
  );
}

function ServicesGrid({ ariaLabel }: { ariaLabel: string }) {
  const { t } = useI18n();
  const mousePositionX = useMotionValue(0);
  const mousePositionY = useMotionValue(0);
  const { cards, priceNotice } = t.services;

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
        className="rounded-ss-2xl max-lg:rounded-t-2xl lg:col-span-2"
        aria-label={ariaLabel}
      >
        <div>
          <ServiceCardTitle>{cards.webApp.title}</ServiceCardTitle>
          <ServiceCardPrice>{cards.webApp.price}</ServiceCardPrice>
          <ServiceCardDescription>{cards.webApp.description}</ServiceCardDescription>
          <ServiceCardList>
            {cards.webApp.benefits.map((item) => (
              <ServiceCardBenefitListItem key={item}>{item}</ServiceCardBenefitListItem>
            ))}
            {cards.webApp.addons.map((item) => (
              <ServiceCardAddonListItem key={item}>{item}</ServiceCardAddonListItem>
            ))}
          </ServiceCardList>
        </div>
      </ServiceCard>
      <ServiceCard
        parentMousePositionX={mousePositionX}
        parentMousePositionY={mousePositionY}
        className="lg:col-span-3 lg:rounded-se-2xl"
        aria-label={ariaLabel}
      >
        <div>
          <ServiceCardTitle>{cards.website.title}</ServiceCardTitle>
          <ServiceCardPrice>
            {cards.website.price}
            <span className="text-neutrals-400 text-xl font-normal">*</span>
          </ServiceCardPrice>
          <ServiceCardDescription>{cards.website.description}</ServiceCardDescription>
          <ServiceCardList>
            {cards.website.benefits.map((item) => (
              <ServiceCardBenefitListItem key={item}>{item}</ServiceCardBenefitListItem>
            ))}
            {cards.website.addons.map((item) => (
              <ServiceCardAddonListItem key={item}>{item}</ServiceCardAddonListItem>
            ))}
          </ServiceCardList>
          <ServiceCardNotice>{priceNotice}</ServiceCardNotice>
        </div>
      </ServiceCard>
      <ServiceCard
        parentMousePositionX={mousePositionX}
        parentMousePositionY={mousePositionY}
        className="lg:col-span-3 lg:rounded-es-2xl"
        aria-label={ariaLabel}
      >
        <div>
          <ServiceCardTitle>{cards.commerce.title}</ServiceCardTitle>
          <ServiceCardPrice>
            {cards.commerce.price}
            <span className="text-neutrals-400 text-xl font-normal">*</span>
          </ServiceCardPrice>
          <ServiceCardDescription>{cards.commerce.description}</ServiceCardDescription>
          <ServiceCardList>
            {cards.commerce.benefits.map((item) => (
              <ServiceCardBenefitListItem key={item}>{item}</ServiceCardBenefitListItem>
            ))}
            {cards.commerce.addons.map((item) => (
              <ServiceCardAddonListItem key={item}>{item}</ServiceCardAddonListItem>
            ))}
          </ServiceCardList>
          <ServiceCardNotice>{priceNotice}</ServiceCardNotice>
        </div>
      </ServiceCard>
      <ServiceCard
        parentMousePositionX={mousePositionX}
        parentMousePositionY={mousePositionY}
        className="rounded-ee-2xl max-lg:rounded-b-2xl lg:col-span-2"
        aria-label={ariaLabel}
      >
        <div>
          <ServiceCardTitle>{cards.ai.title}</ServiceCardTitle>
          <ServiceCardPrice>{cards.ai.price}</ServiceCardPrice>
          <ServiceCardDescription>{cards.ai.description}</ServiceCardDescription>
          <ServiceCardList>
            {cards.ai.benefits.map((item) => (
              <ServiceCardBenefitListItem key={item}>{item}</ServiceCardBenefitListItem>
            ))}
            {cards.ai.addons.map((item) => (
              <ServiceCardAddonListItem key={item}>{item}</ServiceCardAddonListItem>
            ))}
          </ServiceCardList>
        </div>
      </ServiceCard>
    </div>
  );
}

export { ServicesBreakdown };
