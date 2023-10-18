import ServiceCard from '@/components/service-card';
import { motion, useMotionValue } from 'framer-motion';
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
            Whether you want a web app, paired with a marketing website, or a cross-platform app, I
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
            €1.800<span className="text-xl font-normal">*</span>
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
              Hosting (including domain) setup <span className="text-neutrals-400">|</span> €400
            </ServiceCard.List.AddonListItem>
            <ServiceCard.List.AddonListItem>
              CMS implementation <span className="text-neutrals-400">|</span> €1.150
            </ServiceCard.List.AddonListItem>
            <ServiceCard.List.AddonListItem>
              Multilingual support <span className="text-neutrals-400">|</span> €1.400
            </ServiceCard.List.AddonListItem>
            <ServiceCard.List.AddonListItem>
              Analytics <span className="text-neutrals-400">|</span> €350
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
          <ServiceCard.Title>Shopify theme</ServiceCard.Title>
          <ServiceCard.Price>
            €1000<span className="text-xl font-normal">*</span>
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
              Content self-customization briefing <span className="text-neutrals-400">|</span> €500
            </ServiceCard.List.AddonListItem>
            <ServiceCard.List.AddonListItem>
              Multilingual support <span className="text-neutrals-400">|</span> €850
            </ServiceCard.List.AddonListItem>
            <ServiceCard.List.AddonListItem>
              Analytics <span className="text-neutrals-400">|</span> €250
            </ServiceCard.List.AddonListItem>
          </ServiceCard.List>
          <ServiceCard.Notice>
            * entry level price, may vary depending on the project scope
          </ServiceCard.Notice>
        </div>
        <ServiceCard.CallToAction />
        <svg
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
          strokeWidth={0.05}
          aria-hidden
          className="pointer-events-none absolute right-0 top-1/2 h-64 w-64 -translate-y-1/2 max-md:left-1/2 max-md:-translate-x-1/2 max-md:opacity-80 md:h-72 md:w-72"
        >
          <defs>
            <filter id="glow">
              <feGaussianBlur
                stdDeviation="2.5"
                result="coloredBlur"
              />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <g transform="matrix(0.960994,0,0,0.960994,1.24809,1.24819)">
            <motion.path
              d="M60.113,59.74C60.113,59.703 53.173,12.843 53.137,12.485L53.137,12.484C53.09,12.201 52.859,11.984 52.573,11.957C52.348,11.92 47.403,11.581 47.403,11.581L43.633,7.811C43.293,7.435 42.541,7.545 42.257,7.623C42.22,7.623 41.505,7.848 40.335,8.228C39.198,4.938 37.185,1.922 33.639,1.922L33.336,1.922C32.32,0.605 31.076,0 30.026,0C21.77,0.037 17.836,10.333 16.592,15.594L10.822,17.364C9.052,17.928 8.987,17.969 8.749,19.657L3.882,57.175L40.35,64L60.113,59.74M33.631,22.887L33.64,22.89L31.186,30.132C29.703,29.414 28.082,29.028 26.434,28.999C22.586,28.999 22.398,31.411 22.398,32.017C22.398,35.315 31.034,36.581 31.034,44.35C31.034,50.46 27.149,54.38 21.934,54.38C15.674,54.38 12.467,50.495 12.467,50.495L14.132,44.945C14.132,44.945 17.412,47.775 20.205,47.775C20.236,47.776 20.268,47.777 20.299,47.777C21.654,47.777 22.769,46.662 22.769,45.307C22.769,45.3 22.769,45.292 22.769,45.285C22.769,40.945 15.679,40.758 15.679,33.667C15.679,27.705 19.977,21.897 28.613,21.897C32.007,21.947 33.631,22.887 33.631,22.887M29.795,2.269C30.172,2.277 30.539,2.395 30.85,2.608C28.19,3.846 25.378,6.974 24.172,13.235L19.127,14.781C20.55,10.03 23.87,2.26 29.792,2.26L29.795,2.269ZM32.245,4.562C32.848,6.34 33.128,8.212 33.071,10.089L33.071,10.429L26.696,12.392C27.944,7.732 30.246,5.43 32.245,4.562L32.245,4.562L32.246,4.562L32.245,4.562ZM38.313,8.86C37.396,9.163 36.35,9.465 35.223,9.805L35.223,9.125C35.256,7.428 35.002,5.738 34.471,4.126C36.319,4.41 37.561,6.483 38.314,8.859L38.313,8.86Z"
              initial={{ pathLength: 0, opacity: 1 }}
              animate={{ pathLength: [0, 1, 1], opacity: [1, 1, 0] }}
              transition={{
                repeat: Infinity,
                repeatType: 'loop',
                duration: 8,
                repeatDelay: 1,
              }}
              filter="url(#glow)"
              className="fill-none stroke-success"
            />
            <path
              d="M60.113,59.74C60.113,59.703 53.173,12.843 53.137,12.485L53.137,12.484C53.09,12.201 52.859,11.984 52.573,11.957C52.348,11.92 47.403,11.581 47.403,11.581L43.633,7.811C43.293,7.435 42.541,7.545 42.257,7.623C42.22,7.623 41.505,7.848 40.335,8.228C39.198,4.938 37.185,1.922 33.639,1.922L33.336,1.922C32.32,0.605 31.076,0 30.026,0C21.77,0.037 17.836,10.333 16.592,15.594L10.822,17.364C9.052,17.928 8.987,17.969 8.749,19.657L3.882,57.175L40.35,64L60.113,59.74M33.631,22.887L33.64,22.89L31.186,30.132C29.703,29.414 28.082,29.028 26.434,28.999C22.586,28.999 22.398,31.411 22.398,32.017C22.398,35.315 31.034,36.581 31.034,44.35C31.034,50.46 27.149,54.38 21.934,54.38C15.674,54.38 12.467,50.495 12.467,50.495L14.132,44.945C14.132,44.945 17.412,47.775 20.205,47.775C20.236,47.776 20.268,47.777 20.299,47.777C21.654,47.777 22.769,46.662 22.769,45.307C22.769,45.3 22.769,45.292 22.769,45.285C22.769,40.945 15.679,40.758 15.679,33.667C15.679,27.705 19.977,21.897 28.613,21.897C32.007,21.947 33.631,22.887 33.631,22.887M29.795,2.269C30.172,2.277 30.539,2.395 30.85,2.608C28.19,3.846 25.378,6.974 24.172,13.235L19.127,14.781C20.55,10.03 23.87,2.26 29.792,2.26L29.795,2.269ZM32.245,4.562C32.848,6.34 33.128,8.212 33.071,10.089L33.071,10.429L26.696,12.392C27.944,7.732 30.246,5.43 32.245,4.562L32.245,4.562L32.246,4.562L32.245,4.562ZM38.313,8.86C37.396,9.163 36.35,9.465 35.223,9.805L35.223,9.125C35.256,7.428 35.002,5.738 34.471,4.126C36.319,4.41 37.561,6.483 38.314,8.859L38.313,8.86Z"
              className="fill-transparent stroke-neutrals-300"
            />
            <motion.path
              d="M60.113,59.74C60.113,59.703 53.173,12.843 53.137,12.485L53.137,12.484C53.09,12.201 52.859,11.984 52.573,11.957C52.348,11.92 47.403,11.581 47.403,11.581L43.633,7.811C43.293,7.435 42.541,7.545 42.257,7.623C42.22,7.623 41.505,7.848 40.335,8.228C39.198,4.938 37.185,1.922 33.639,1.922L33.336,1.922C32.32,0.605 31.076,0 30.026,0C21.77,0.037 17.836,10.333 16.592,15.594L10.822,17.364C9.052,17.928 8.987,17.969 8.749,19.657L3.882,57.175L40.35,64L60.113,59.74M33.631,22.887L33.64,22.89L31.186,30.132C29.703,29.414 28.082,29.028 26.434,28.999C22.586,28.999 22.398,31.411 22.398,32.017C22.398,35.315 31.034,36.581 31.034,44.35C31.034,50.46 27.149,54.38 21.934,54.38C15.674,54.38 12.467,50.495 12.467,50.495L14.132,44.945C14.132,44.945 17.412,47.775 20.205,47.775C20.236,47.776 20.268,47.777 20.299,47.777C21.654,47.777 22.769,46.662 22.769,45.307C22.769,45.3 22.769,45.292 22.769,45.285C22.769,40.945 15.679,40.758 15.679,33.667C15.679,27.705 19.977,21.897 28.613,21.897C32.007,21.947 33.631,22.887 33.631,22.887M29.795,2.269C30.172,2.277 30.539,2.395 30.85,2.608C28.19,3.846 25.378,6.974 24.172,13.235L19.127,14.781C20.55,10.03 23.87,2.26 29.792,2.26L29.795,2.269ZM32.245,4.562C32.848,6.34 33.128,8.212 33.071,10.089L33.071,10.429L26.696,12.392C27.944,7.732 30.246,5.43 32.245,4.562L32.245,4.562L32.246,4.562L32.245,4.562ZM38.313,8.86C37.396,9.163 36.35,9.465 35.223,9.805L35.223,9.125C35.256,7.428 35.002,5.738 34.471,4.126C36.319,4.41 37.561,6.483 38.314,8.859L38.313,8.86Z"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 5,
                duration: 4,
                delay: 1.5,
              }}
              filter="url(#glow)"
              className="fill-success/5 stroke-transparent"
            />
          </g>
        </svg>
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
            Do you have a problem that does not fit into one of the packages? Don&apos;t hesitate to
            ask ― I am your problem solver.
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

export default ServicesGrid;
